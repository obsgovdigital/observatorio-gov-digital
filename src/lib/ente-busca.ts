import { nomeEstadoDaUf, nomesEstados } from '@/lib/geo/entes-geo'

/** A partir deste tamanho a lista ganha campo de busca (lista curta cabe; 319 não). */
export const ENTE_BUSCA_LIMIAR = 30

function normalizar(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
}

const nomesEstadosExatos = new Set(nomesEstados.map(normalizar))

/**
 * Nome da UF da sigla combina com o termo.
 * Termo igual ao nome oficial (ex.: "mato grosso") casa só essa UF;
 * termo parcial (ex.: "minas", "rio") casa se o nome o contém.
 */
function ufCombinaNomeEstado(
  ufSigla: string | null | undefined,
  q: string
): boolean {
  if (!ufSigla) return false
  const nome = nomeEstadoDaUf(ufSigla)
  if (!nome) return false
  const n = normalizar(nome)
  if (nomesEstadosExatos.has(q)) return n === q
  return n.includes(q)
}

/** `true` se o nome, a sigla ou o nome do estado contém o termo (sem acento, case-insensitive). */
export function entePassaBusca(
  ente: { nome: string; ufSigla?: string | null },
  termo: string
): boolean {
  const q = normalizar(termo)
  if (!q) return true
  return (
    normalizar(ente.nome).includes(q) ||
    normalizar(ente.ufSigla ?? '').includes(q) ||
    ufCombinaNomeEstado(ente.ufSigla, q)
  )
}
