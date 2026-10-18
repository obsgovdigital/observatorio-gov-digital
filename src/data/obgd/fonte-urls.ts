const URL_FALLBACK = 'https://www.gov.br/'

export type FonteAcessoTipo = 'download_livre' | 'solicitacao' | 'painel'

export type FonteArquivoFormato = 'ZIP' | 'XLSX' | 'PDF' | 'TXT'

export type FonteArquivo = {
  label: string
  url: string
  tipo: FonteAcessoTipo
  formato: FonteArquivoFormato
  /** Tamanho aproximado, medido na publicação do link (ex.: "1,2 MB"). */
  tamanho: string
}

export type FonteAcesso = {
  /** Página da pesquisa ou da edição (nunca a home do órgão). */
  urlPesquisa: string
  /** Arquivos oficiais que o índice usa, na edição usada no índice. */
  arquivos: FonteArquivo[]
}

/**
 * Tamanhos medidos em 18/10/2026 (total do Content-Range, unidades binárias).
 * Fontes sem indicador ativo (tic_cultura, tic_domicilios) mantêm a entrada,
 * mas não têm página enquanto nenhuma variável delas entrar no índice.
 */
export const FONTES_ACESSO: Record<string, FonteAcesso> = {
  tic_gov: {
    urlPesquisa: 'https://cetic.br/pt/pesquisa/governo/',
    arquivos: [
      {
        label: 'Tabelas ODS 2023 — órgãos federais e estaduais',
        url: 'https://cetic.br/media/microdados/778/tic_governo_eletronico_2023_orgaos_federais_e_estaduais_tabelas_ods_v1.0.zip',
        tipo: 'download_livre',
        formato: 'ZIP',
        tamanho: '271 KB',
      },
      {
        label: 'Tabelas ODS 2023 — prefeituras',
        url: 'https://cetic.br/media/microdados/781/tic_governo_eletronico_2023_prefeituras_tabelas_ods_v1.0.zip',
        tipo: 'download_livre',
        formato: 'ZIP',
        tamanho: '1,2 MB',
      },
    ],
  },
  tic_saude: {
    urlPesquisa: 'https://cetic.br/pt/pesquisa/saude/',
    arquivos: [
      {
        label: 'Tabelas ODS 2024 — estabelecimentos',
        url: 'https://cetic.br/media/microdados/836/tic_saude_2024_estabelecimentos_tabelas_ods_v1.1.zip',
        tipo: 'download_livre',
        formato: 'ZIP',
        tamanho: '530 KB',
      },
    ],
  },
  tic_educacao: {
    urlPesquisa: 'https://cetic.br/pt/pesquisa/educacao/',
    arquivos: [
      {
        label: 'Tabelas ODS 2024 — escolas',
        url: 'https://cetic.br/media/microdados/933/tic_educacao_2024_escolas_tabelas_ods_v1.0.zip',
        tipo: 'download_livre',
        formato: 'ZIP',
        tamanho: '986 KB',
      },
      {
        label: 'Tabelas ODS 2024 — professores',
        url: 'https://cetic.br/media/microdados/936/tic_educacao_2024_professores_tabelas_ods_v1.0.zip',
        tipo: 'download_livre',
        formato: 'ZIP',
        tamanho: '1,9 MB',
      },
    ],
  },
  tic_cultura: {
    urlPesquisa: 'https://cetic.br/pt/pesquisa/cultura/',
    arquivos: [
      {
        label: 'Tabelas ODS 2024',
        url: 'https://cetic.br/media/microdados/942/tic_cultura_2024_tabelas_ods_v1.0.zip',
        tipo: 'download_livre',
        formato: 'ZIP',
        tamanho: '377 KB',
      },
    ],
  },
  tic_domicilios: {
    urlPesquisa: 'https://cetic.br/pt/pesquisa/domicilios/',
    arquivos: [
      {
        label: 'Tabelas ODS 2024 — indivíduos',
        url: 'https://cetic.br/media/microdados/849/tic_domicilios_2024_individuos_ods_v1.1.zip',
        tipo: 'download_livre',
        formato: 'ZIP',
        tamanho: '931 KB',
      },
    ],
  },
  iesgo: {
    urlPesquisa: 'https://iesgo.tcu.gov.br/iesgo2024/',
    arquivos: [
      {
        label: 'Tabela dinâmica iESGo 2024',
        url: 'https://iesgo.tcu.gov.br/wp-content/uploads/sites/12/iesgo2024/iESGo2024_7_TabelaDinamica.xlsx',
        tipo: 'download_livre',
        formato: 'XLSX',
        tamanho: '1,5 MB',
      },
    ],
  },
  iospd: {
    urlPesquisa: 'https://abep-tic.org.br/indice-abep-2025/',
    arquivos: [
      {
        label: 'Planilha detalhada por dimensões (2025)',
        url: 'https://abep-tic.org.br/wp-content/uploads/2025/08/IOSPD-2025_detalhado_dimensoes.xlsx',
        tipo: 'download_livre',
        formato: 'XLSX',
        tamanho: '53 KB',
      },
      {
        label: 'Relatório do índice (2025)',
        url: 'https://abep-tic.org.br/wp-content/uploads/2025/08/Relatorio-Indice-ABEP-TIC-de-Oferta-de-Servicos-Publicos-Digitais-dos-Governos.pdf',
        tipo: 'download_livre',
        formato: 'PDF',
        tamanho: '8,2 MB',
      },
    ],
  },
  anatel: {
    urlPesquisa:
      'https://informacoes.anatel.gov.br/paineis/infraestrutura/cobertura-movel',
    arquivos: [
      {
        label: 'Cobertura móvel (arquivo atual; o índice usa dezembro de 2025)',
        url: 'https://www.anatel.gov.br/dadosabertos/paineis_de_dados/infraestrutura/cobertura_movel.zip',
        tipo: 'download_livre',
        formato: 'ZIP',
        tamanho: 'cerca de 319 MB',
      },
    ],
  },
  censo_escolar: {
    urlPesquisa:
      'https://www.gov.br/inep/pt-br/areas-de-atuacao/pesquisas-estatisticas-e-indicadores/censo-escolar',
    arquivos: [
      {
        label: 'Microdados do Censo Escolar 2024',
        url: 'https://download.inep.gov.br/dados_abertos/microdados_censo_escolar_2024.zip',
        tipo: 'download_livre',
        formato: 'ZIP',
        tamanho: '32 MB',
      },
    ],
  },
  pnad_tic: {
    urlPesquisa:
      'https://www.ibge.gov.br/estatisticas/sociais/trabalho/17270-pnad-continua.html',
    arquivos: [
      {
        label: 'Microdados — 4º trimestre 2024',
        url: 'https://ftp.ibge.gov.br/Trabalho_e_Rendimento/Pesquisa_Nacional_por_Amostra_de_Domicilios_continua/Anual/Microdados/Trimestre/Trimestre_4/Dados/PNADC_2024_trimestre4_20251014.zip',
        tipo: 'download_livre',
        formato: 'ZIP',
        tamanho: '230 MB',
      },
      {
        label: 'Arquivo de input / sintaxe — 4º trimestre 2024',
        url: 'https://ftp.ibge.gov.br/Trabalho_e_Rendimento/Pesquisa_Nacional_por_Amostra_de_Domicilios_continua/Anual/Microdados/Trimestre/Trimestre_4/Documentacao/input_PNADC_trimestre4_20251010.txt',
        tipo: 'download_livre',
        formato: 'TXT',
        tamanho: '84 KB',
      },
    ],
  },
  munic: {
    urlPesquisa:
      'https://www.ibge.gov.br/estatisticas/sociais/saude/10586-pesquisa-de-informacoes-basicas-municipais.html',
    arquivos: [
      {
        label: 'Base MUNIC 2024',
        url: 'https://ftp.ibge.gov.br/Perfil_Municipios/2024/Base_de_Dados/Base_MUNIC_2024_20251107.xlsx',
        tipo: 'download_livre',
        formato: 'XLSX',
        tamanho: '24 MB',
      },
    ],
  },
  estadic: {
    urlPesquisa:
      'https://www.ibge.gov.br/estatisticas/sociais/administracao-publica-e-participacao-politica/16770-pesquisa-de-informacoes-basicas-estaduais.html',
    arquivos: [
      {
        label: 'Base ESTADIC 2024',
        url: 'https://ftp.ibge.gov.br/Perfil_Estados/2024/Base_Estadic_2024.xlsx',
        tipo: 'download_livre',
        formato: 'XLSX',
        tamanho: '206 KB',
      },
    ],
  },
  igovsisp: {
    urlPesquisa:
      'https://www.gov.br/governodigital/pt-br/estrategias-e-governanca-digital/sisp/autodiagnostico-igovsisp',
    arquivos: [
      {
        label: 'Relatório do autodiagnóstico SISP 2025',
        url: 'https://www.gov.br/governodigital/pt-br/estrategias-e-governanca-digital/sisp/autodiagnostico-igovsisp/arquivos/relatorio_autodiagnostico_sisp_2025.pdf',
        tipo: 'download_livre',
        formato: 'PDF',
        tamanho: '6,6 MB',
      },
    ],
  },
}

export function acessoDaFonte(fonteId: string): FonteAcesso | undefined {
  return FONTES_ACESSO[fonteId]
}

export function arquivosDaFonte(fonteId: string): FonteArquivo[] {
  return FONTES_ACESSO[fonteId]?.arquivos ?? []
}

export function urlFontePrimaria(fonteId: string): string {
  const acesso = FONTES_ACESSO[fonteId]
  return acesso?.arquivos[0]?.url ?? acesso?.urlPesquisa ?? URL_FALLBACK
}

/** URL primária por fonte (1º arquivo oficial, senão landing). */
export const FONTE_URLS: Record<string, string> = Object.fromEntries(
  Object.keys(FONTES_ACESSO).map(id => [id, urlFontePrimaria(id)])
)

export const FONTE_ACESSO_TIPO_LABEL: Record<FonteAcessoTipo, string> = {
  download_livre: 'Download livre',
  solicitacao: 'Sob solicitação',
  painel: 'Painel / API',
}

/** Linha secundária de um arquivo: "Download livre · ZIP · 1,2 MB". */
export function descricaoArquivo(arquivo: FonteArquivo): string {
  return [
    FONTE_ACESSO_TIPO_LABEL[arquivo.tipo],
    arquivo.formato,
    arquivo.tamanho,
  ].join(' · ')
}
