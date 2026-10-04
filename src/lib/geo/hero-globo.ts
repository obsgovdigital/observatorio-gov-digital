import coordenadas from '@/data/geo/coordenadas-entes.json'

export type MarcadorGlobo = {
  location: [number, number]
  size: number
}

export type ArcoGlobo = {
  from: [number, number]
  to: [number, number]
}

const TAMANHO_CAPITAL = 0.016
const TAMANHO_MUNICIPIO = 0.007

const BRASILIA = '5300108'

/** Uma capital por região, ligada a Brasília. */
const HUB_POR_REGIAO: Record<string, string> = {
  N: '1302603',
  NE: '2611606',
  CO: '5208707',
  SE: '3550308',
  S: '4106902',
}

type Coordenada = (typeof coordenadas)[number]

const porCodigo = new Map(coordenadas.map(ente => [ente.codigo, ente]))

function ponto(ente: Coordenada): [number, number] {
  return [ente.lat, ente.lng]
}

function espalhar<T>(itens: readonly T[], quantidade: number): T[] {
  if (quantidade >= itens.length) return [...itens]
  if (quantidade <= 0) return []
  if (quantidade === 1) {
    const unico = itens[Math.floor((itens.length - 1) / 2)]
    return unico ? [unico] : []
  }
  const escolhidos: T[] = []
  for (let i = 0; i < quantidade; i++) {
    const indice = Math.round((i * (itens.length - 1)) / (quantidade - 1))
    const item = itens[indice]
    if (item) escolhidos.push(item)
  }
  return escolhidos
}

function quantidadeDeArcos(extras: number): number {
  if (extras >= 6) return 3
  if (extras >= 2) return 2
  return extras
}

function montarArcos(): ArcoGlobo[] {
  const porUf = new Map<string, Coordenada[]>()
  for (const ente of coordenadas) {
    const lista = porUf.get(ente.uf)
    if (lista) lista.push(ente)
    else porUf.set(ente.uf, [ente])
  }

  const arcos: ArcoGlobo[] = []
  for (const lista of porUf.values()) {
    const capital = lista.find(ente => ente.capital)
    if (!capital) continue
    const extras = lista
      .filter(ente => !ente.capital)
      .sort((a, b) => a.codigo.localeCompare(b.codigo))
    const origem = ponto(capital)
    for (const destino of espalhar(extras, quantidadeDeArcos(extras.length))) {
      arcos.push({ from: origem, to: ponto(destino) })
    }
  }

  const brasilia = porCodigo.get(BRASILIA)
  if (brasilia) {
    for (const codigo of Object.values(HUB_POR_REGIAO)) {
      const hub = porCodigo.get(codigo)
      if (!hub || hub.codigo === brasilia.codigo) continue
      arcos.push({ from: ponto(hub), to: ponto(brasilia) })
    }
  }

  return arcos
}

export const marcadoresGlobo: MarcadorGlobo[] = coordenadas.map(ente => ({
  location: ponto(ente),
  size: ente.capital ? TAMANHO_CAPITAL : TAMANHO_MUNICIPIO,
}))

export const arcosGlobo: ArcoGlobo[] = montarArcos()

const DURACAO_RAIO_MS = 5000
/** Fração do ciclo em que o raio está a caminho. */
const JANELA_RAIO = 0.45

/** Extensão dos raios ao longo do tempo. Com movimento reduzido, o traço completo. */
export function arcosEmVoo(now: number, reduzido: boolean): ArcoGlobo[] {
  if (reduzido) return arcosGlobo

  const ativos: ArcoGlobo[] = []
  for (let i = 0; i < arcosGlobo.length; i++) {
    const arco = arcosGlobo[i]
    if (!arco) continue
    const fase = i / arcosGlobo.length
    const progresso = (now / DURACAO_RAIO_MS + fase) % 1
    if (progresso > JANELA_RAIO) continue
    const t = 1 - (1 - progresso / JANELA_RAIO) ** 2
    ativos.push({
      from: arco.from,
      to: [
        arco.from[0] + (arco.to[0] - arco.from[0]) * t,
        arco.from[1] + (arco.to[1] - arco.from[1]) * t,
      ],
    })
  }
  return ativos
}
