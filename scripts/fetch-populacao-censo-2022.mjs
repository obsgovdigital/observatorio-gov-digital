/**
 * Grava a população residente (Censo Demográfico 2022, IBGE) dos municípios
 * do Observatório, ligada ao código IBGE de 7 dígitos.
 *
 * A série da variável 93 sem classificação já é o total de pessoas.
 * `classificacao=2[6794]` devolve HTTP 500 nesta tabela.
 *
 * Usage: node scripts/fetch-populacao-censo-2022.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const ENTE = join(ROOT, 'src/data/obgd/assets/dados/ente.json')
const OUT = join(ROOT, 'src/data/ibge/populacao-censo-2022.json')

const IBGE_URL =
  'https://servicodados.ibge.gov.br/api/v3/agregados/4714/periodos/2022/variaveis/93?localidades=N6[all]'

const entes = JSON.parse(readFileSync(ENTE, 'utf8'))
const codigos = entes
  .filter(e => e.tipo === 'municipio')
  .map(e => e.codigo)

const res = await fetch(IBGE_URL)
if (!res.ok) {
  throw new Error(`IBGE respondeu ${res.status} ${res.statusText}`)
}
const payload = await res.json()
const series = payload?.[0]?.resultados?.[0]?.series
if (!Array.isArray(series)) {
  throw new Error('Resposta do IBGE sem series de população')
}

/** @type {Map<string, number>} */
const porCodigo = new Map()
for (const item of series) {
  const codigo = item?.localidade?.id
  const bruto = item?.serie?.['2022']
  const habitantes = Number(bruto)
  if (!codigo || !Number.isFinite(habitantes)) continue
  porCodigo.set(codigo, habitantes)
}

const faltando = codigos.filter(c => !porCodigo.has(c))
if (faltando.length) {
  throw new Error(
    `Censo 2022 sem população para ${faltando.length} município(s): ${faltando.join(', ')}`
  )
}

/** @type {Record<string, number>} */
const municipios = {}
for (const codigo of codigos.sort()) {
  municipios[codigo] = porCodigo.get(codigo)
}

const doc = {
  fonte: 'IBGE Censo Demográfico 2022',
  agregado: '4714',
  variavel: '93',
  periodo: '2022',
  descricao: 'População residente',
  municipios,
}

mkdirSync(dirname(OUT), { recursive: true })
writeFileSync(OUT, `${JSON.stringify(doc, null, 2)}\n`)

const amostras = [
  ['3550308', 'São Paulo'],
  ['3106200', 'Belo Horizonte'],
  ['1100122', 'Ji-Paraná'],
]
for (const [codigo, nome] of amostras) {
  console.log(`${nome} (${codigo}): ${municipios[codigo]?.toLocaleString('pt-BR') ?? 'ausente'}`)
}
console.log(`${codigos.length} municípios gravados em ${OUT}`)
