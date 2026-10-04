import censo from './populacao-censo-2022.json'

/** População residente do Censo Demográfico 2022 (IBGE), por código de município. */
const habitantesPorCodigo = censo.municipios as Record<string, number>

export const NOTA_POPULACAO_CENSO =
  'População residente, Censo Demográfico 2022 (IBGE).'

export function habitantesDoMunicipio(
  codigo: string | null | undefined
): number | null {
  if (!codigo) return null
  const n = habitantesPorCodigo[codigo]
  return typeof n === 'number' ? n : null
}

export function formatHabitantes(habitantes: number): string {
  return habitantes.toLocaleString('pt-BR')
}

/** Maior população primeiro. Município sem dado fica no fim. */
export function compararPorHabitantes(
  codigoA: string | null | undefined,
  codigoB: string | null | undefined
): number {
  const a = habitantesDoMunicipio(codigoA)
  const b = habitantesDoMunicipio(codigoB)
  if (a == null && b == null) return 0
  if (a == null) return 1
  if (b == null) return -1
  return b - a
}
