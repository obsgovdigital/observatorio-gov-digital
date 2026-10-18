import {
  FONTES_ACESSO,
  type FonteArquivo,
  urlFontePrimaria,
} from '@/data/obgd/fonte-urls'
import { fontes as fontesObgd, indicadores } from '@/data/obgd/load'

export type Fonte = {
  /** Id OBGD (= slug da rota `/metodologia/fontes/[fonte]`). */
  slug: string
  /** Nome da pesquisa/base (H1). */
  name: string
  instituicao: string
  /** URL da página da pesquisa (preferencial). */
  urlPesquisa: string
  /** Site oficial do órgão produtor. */
  urlOrgao: string
  /** Arquivos oficiais da edição usada no índice (não hospedados aqui). */
  arquivos: FonteArquivo[]
  descricao: string
}

/** Slugs antigos das páginas por órgão — redirecionados em `next.config`.
 * Não incluir ids que coincidem com `fonte_id` OBGD (ex.: `anatel`). */
export const LEGACY_INSTITUICAO_FONTE_SLUGS = [
  'cetic-br',
  'mgi',
  'gov-br',
  'tcu',
  'ibge',
  'inep',
  'abep-tic',
  'cgu',
] as const

/** Site do órgão a partir do rótulo `instituicao` em `fonte.json`. */
const ORGAO_URL_POR_INSTITUICAO: Record<string, string> = {
  'CETIC.br': 'https://cetic.br/',
  TCU: 'https://portal.tcu.gov.br/',
  'ABEP-TIC': 'https://abep-tic.org.br/',
  ANATEL: 'https://www.gov.br/anatel/',
  INEP: 'https://www.gov.br/inep/',
  IBGE: 'https://www.ibge.gov.br/',
  'SGD/MGI': 'https://www.gov.br/governodigital/pt-br',
}

const ORGAO_URL_FALLBACK = 'https://www.gov.br/'

/** Fontes com ao menos um indicador ativo: as que entram no índice. */
const FONTES_NO_INDICE = new Set(
  indicadores.filter(i => i.status === 'ativo').map(i => i.fonte_id)
)

/**
 * Catálogo das páginas `/metodologia/fontes/[slug]` — uma por pesquisa usada
 * no índice. Fonte sem indicador ativo (retirada, ou com todas as variáveis
 * excluídas) não tem página, mesmo que `fonte.json` a liste.
 * A plataforma não hospeda microdados brutos: linka o endereço oficial da
 * edição usada no índice e oferece o CSV curado (`/api/obgd/export?fonteId=`).
 */
export const fontes: Fonte[] = fontesObgd
  .filter(f => FONTES_NO_INDICE.has(f.id))
  .map(f => {
    const urlOrgao =
      ORGAO_URL_POR_INSTITUICAO[f.instituicao] ?? ORGAO_URL_FALLBACK
    const acesso = FONTES_ACESSO[f.id]
    const urlPesquisa = acesso?.urlPesquisa ?? urlFontePrimaria(f.id)
    return {
      slug: f.id,
      name: f.nome,
      instituicao: f.instituicao,
      urlPesquisa,
      urlOrgao,
      arquivos: acesso?.arquivos ?? [],
      descricao: `Pesquisa/base usada no Observatório. Produzida por ${f.instituicao}.`,
    }
  })

// Toda página mostra "Acessar página da pesquisa" e "Site do órgão": os dois
// endereços precisam existir e ser diferentes. Cadastro errado quebra o build.
for (const f of fontes) {
  if (!f.urlPesquisa || !f.urlOrgao || f.urlPesquisa === f.urlOrgao) {
    throw new Error(
      `Fonte "${f.slug}": página da pesquisa (${f.urlPesquisa}) e site do órgão (${f.urlOrgao}) precisam existir e ser diferentes. Corrija src/data/obgd/fonte-urls.ts ou ORGAO_URL_POR_INSTITUICAO.`
    )
  }
}

export function getFonte(slug: string): Fonte | undefined {
  return fontes.find(f => f.slug === slug)
}
