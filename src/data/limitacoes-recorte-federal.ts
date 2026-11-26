/**
 * Limitações metodológicas do Recorte Federal (nível `uniao`).
 * Cópia editorial de `plataforma/metodologia/tooltips-recorte-federal.json`.
 * A fonte dos números continua na plataforma; o site não recalcula percentuais.
 */
export const REVISAO_LIMITACOES_RECORTE_FEDERAL =
  '4e8f1971728833feea9f4fbb6fe454291991aaae'

export type LimitacaoRecorte = {
  titulo: string
  texto: string
}

export type LimitacaoObjetivo = LimitacaoRecorte & {
  numero: number
  nome: string
}

const GERAL: LimitacaoRecorte = {
  titulo: 'Sobre o Recorte Federal',
  texto:
    'Reúne 3 fontes que medem diretamente órgãos da União (118 variáveis efetivas; 186 indicadores). 76,3% das variáveis efetivas vêm de autoavaliação dos próprios órgãos (iGovSISP da SGD/MGI e iESGo do TCU, sem auditoria externa) e 23,7% de pesquisa independente (TIC Governo Eletrônico do CETIC.br). Não inclui avaliação externa de portais nem a percepção direta do cidadão; a leitura deve considerar o risco de superestimação e as diferenças de cobertura entre objetivos.',
}

const POR_OBJETIVO: LimitacaoObjetivo[] = [
  {
    numero: 1,
    nome: 'Governança do Governo Digital',
    titulo: 'Limitações deste escore',
    texto:
      'Embora tenha a maior base de indicadores do recorte federal (30 componentes), 86,7% vêm de autoavaliação dos próprios órgãos: 15 do iGovSISP (autodiagnóstico do Executivo Federal, SGD/MGI) e 11 do iESGo (autoavaliação sob o TCU, sem auditoria de campo). Apenas 4 componentes vêm de pesquisa independente (TIC Governo Eletrônico). As três fontes também cobrem universos e anos diferentes (2024–2026).',
  },
  {
    numero: 2,
    nome: 'Qualidade dos Serviços Digitais',
    titulo: 'Limitações deste escore',
    texto:
      'Combina pesquisa independente (6 componentes da TIC Governo Eletrônico) e autodiagnóstico do Executivo Federal (5 do iGovSISP). Apesar de mais equilibrado entre fontes, mede apenas a oferta declarada pelos órgãos: não inclui avaliação independente dos portais federais nem a experiência direta dos cidadãos (como uso efetivo ou resolução sem deslocamento).',
  },
  {
    numero: 3,
    nome: 'Identificação Única',
    titulo: 'Limitações deste escore',
    texto:
      'Base reduzida (apenas 4 indicadores), dos quais 3 (75,0%) são autodiagnóstico do próprio Executivo Federal (iGovSISP: integração ao Login Único e uso do CPF em cadastros) e apenas 1 vem de pesquisa independente (TIC Governo Eletrônico). Por ser um conjunto pequeno e sem dados administrativos diretos das contas Gov.br ou da CIN, a nota é sensível a cada indicador e sujeita a viés de autorrelato.',
  },
  {
    numero: 4,
    nome: 'Segurança e LGPD',
    titulo: 'Limitações deste escore',
    texto:
      '69,2% dos componentes (9 de 13) vêm da autoavaliação do iESGo (TCU, 2024), preenchida pelos próprios órgãos sem auditoria de campo, complementada por 4 componentes da TIC Governo Eletrônico (2025). O iGovSISP não entra neste objetivo porque sua dimensão de privacidade e segurança (Dimensão 4) não foi publicada no relatório oficial de 2026.',
  },
  {
    numero: 5,
    nome: 'Dados e Interoperabilidade',
    titulo: 'Limitações deste escore',
    texto:
      'Apesar do volume de indicadores (29 componentes), há forte concentração no autodiagnóstico do próprio Executivo Federal: 89,7% (26 de 29) vêm do iGovSISP (SGD/MGI), sem verificação externa, e apenas 3 componentes vêm da TIC Governo Eletrônico. A nota reflete sobretudo a autodeclaração dos órgãos do SISP e pode superestimar a maturidade real.',
  },
  {
    numero: 6,
    nome: 'Infraestrutura',
    titulo: 'Limitações deste escore',
    texto:
      '80,0% dos componentes (8 de 10) provêm do autodiagnóstico do iGovSISP (órgãos do Executivo Federal no SISP, sem verificação independente), com apenas 2 componentes da TIC Governo Eletrônico. Além do risco de superestimação por autorrelato, o escore mede apenas infraestrutura interna dos órgãos federais, sem conectividade territorial ou de escolas e unidades de saúde.',
  },
  {
    numero: 7,
    nome: 'Inovação e Tecnologias Emergentes',
    titulo: 'Limitações deste escore',
    texto:
      'Cobertura enxuta (apenas 4 componentes): 3 da TIC Governo Eletrônico (adoção de IA, big data e IoT nos órgãos federais) e 1 do autodiagnóstico do iGovSISP. Com poucos indicadores e foco restrito à adoção declarada de tecnologias específicas, a nota é mais sensível a variações individuais e não capta qualidade ou impacto das iniciativas de inovação.',
  },
  {
    numero: 8,
    nome: 'Eficiência e Processos',
    titulo: 'Limitações deste escore',
    texto:
      'Base pequena (7 componentes), concentrada em autoavaliação dos próprios órgãos: 6 do iGovSISP (Executivo Federal, SGD/MGI, sem verificação externa) e 1 do iESGo (TCU, sem auditoria de campo). A leitura deve considerar o risco de superestimação e a ausência de pesquisa independente neste objetivo.',
  },
  {
    numero: 9,
    nome: 'Transparência e Participação',
    titulo: 'Limitações deste escore',
    texto:
      'Menor base do recorte federal (apenas 3 indicadores): 2 da TIC Governo Eletrônico (ouvidoria online e mecanismos de participação pela internet) e 1 do autodiagnóstico do iGovSISP (transparência de aplicações de IA). Não há avaliação externa independente de portais federais nem medição de transparência ativa geral; a nota tem alcance restrito e alta sensibilidade a cada item.',
  },
  {
    numero: 10,
    nome: 'Competências em Governo Digital',
    titulo: 'Limitações deste escore',
    texto:
      '66,7% dos componentes (6 de 9, depois do colapso das baterias) vêm do autodiagnóstico do iGovSISP (Executivo Federal no SISP, sem verificação externa); contados os indicadores, são 21 de 24 (87,5%). Os 3 componentes restantes são da TIC Governo Eletrônico, sobre capacitação e formação em IA. Mede o que os órgãos federais declaram sobre a força de trabalho de TI (competências percebidas, vínculo dos titulares de funções de TI e cargo ou carreira própria), a capacitação dessa equipe e a oferta de formação em IA generativa aos funcionários do órgão, sem cobrir letramento digital da população ou da rede de ensino.',
  },
]

export function limitacaoGeralRecorteFederal(): LimitacaoRecorte {
  return GERAL
}

export function limitacaoDoObjetivo(numero: number): LimitacaoObjetivo | null {
  return POR_OBJETIVO.find(item => item.numero === numero) ?? null
}

export function limitacoesPorObjetivo(): LimitacaoObjetivo[] {
  return POR_OBJETIVO
}
