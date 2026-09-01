# 4. Objetivo 1: Governança do Governo Digital

> Qualificar a gestão e governança das políticas de governo digital, promovendo a colaboração entre União, Distrito Federal, estados e municípios.

A metodologia (normalização, agregação, tratamento de não-resposta) está descrita no Capítulo 3.

## 4.1 Recomendações da ENGD para este objetivo

A Portaria SGD/MGI nº 5.395/2026 elenca sete recomendações aos entes federados para qualificar a gestão e governança das políticas de governo digital:

- **1.1** Contribuir com a criação, participação e subsídio às atividades de redes nacionais, estaduais, regionais e associativas de políticas públicas de inovação e governo digital no país, em especial da Rede GOV.BR e do seu Comitê Consultivo da Estratégia Nacional de Governo Digital.
- **1.2** Diversificar e indicar as fontes de financiamento da transformação digital, considerando a perenidade e a disponibilidade dos recursos.
- **1.3** Elaborar, publicar e implementar uma estratégia de governo digital adequada à realidade territorial e alinhada à Estratégia Nacional de Governo Digital.
- **1.4** Implementar uma estrutura de governança para as políticas de governo digital, com a designação de área responsável e instâncias colegiadas para acompanhamento e monitoramento da estratégia local.
- **1.5** Prever as ações de governo digital nos instrumentos de planejamento e orçamento do ciclo de políticas públicas (PPA, LDO, LOA), além de planos de governo.
- **1.6** Estabelecer governança interfederativa para a orquestração de serviços públicos que envolvam mais de um ente federado em sua execução, definindo responsabilidades, níveis de serviço e padrões de integração para jornadas de vida do cidadão.
- **1.7** Prever ações voltadas à implementação e consolidação da Infraestrutura Nacional de Dados da Educação (EducaDados) em alinhamento com a Infraestrutura Nacional de Dados (IND).

## 4.2 Cobertura por nível federativo

O Objetivo 1 conta com 41 variáveis ativas no índice (26 do iGovSISP/SGD (SGD/MGI), 12 do iESGo/TCU, 1 da TIC Governo Eletrônico (CETIC.br), 1 do IOSPD/ABEP-TIC e 1 da MUNIC (IBGE)), que entram na agregação do índice como 32 componentes (ver Capítulo 3). Todas contribuem para a visão Nacional. Apenas uma variável tem observação por UF (`IOSPD_I10`, IOSPD/ABEP-TIC 2025) e apenas uma tem observação por capital (`MUNIC_TI_ESTRUTURA`, MUNIC 2024). Como nenhum dos dois níveis federativos atinge o limiar mínimo de duas variáveis, **não se criam** as dimensões `Recorte Estadual` e `Recorte de Capitais`; os dois indicadores aparecem dentro das dimensões temáticas em que foram classificados, com a observação federativa explicitada inline.

## 4.3 Dimensões

As 41 variáveis ativas do Objetivo 1 foram organizadas em seis dimensões temáticas, sem dimensão federativa dedicada. As três primeiras seguem diretamente recomendações da Portaria; as outras três cobrem aspectos que o índice mede e que a Portaria não enuncia explicitamente — em particular, práticas de gestão da função TI segundo o framework SISP/COBIT (gerenciamento de processos, força de trabalho em TI, adoção de instrumentos do SGD).

![Dimensões do Objetivo 1](../graficos/dimensoes/cap04.png)

### 4.3.1 Estrutura de governança

*Definição:* Existência de instâncias formais que dão suporte à política de governo digital — área/departamento de TI, comitês de governança digital e estruturas/diretrizes de governança de TIC. Corresponde à Recomendação 1.4.

*Média Nacional:* 70.2 (n=7; 7 itens).

**Indicadores:**

*TIC Governo Eletrônico 2023 (CETIC.br):*

- **B1** — O órgão/prefeitura possui uma área ou departamento de TI?
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual) — ver Seção 3.3.4.
  - Valor (Nacional): 67.89

*iESGo/TCU 2024 (TCU):*

- **iESGo 2133** — A alta administração estabeleceu modelo de gestão de tecnologia da informação.
  - *Normalização:* Índice 0-100 — usado diretamente
  - Valor (Nacional): 66.76

- **iESGo 2153** — A liderança monitora o desempenho da gestão de tecnologia da informação.
  - *Normalização:* Índice 0-100 — usado diretamente
  - Valor (Nacional): 57.43

- **iESGo 3132_C** — A instância superior de governança recebe serviços de auditoria interna que adicionam valor à organização (item C: os serviços de auditoria interna prestados anualmente para a organização contemplam avaliação da gestão de tecnologia da informação) (agregação por média entre os 1 sub-itens; ver Capítulo 3).
  - *Normalização:* Índice 0-100 — usado diretamente
  - Valor (Nacional): 59.95

*MUNIC 2024 (IBGE):*

- **MUNIC_TI_ESTRUTURA** — A prefeitura possui estrutura organizacional na área de TI?
  - *Normalização:* Binário Sim/Não — Sim=100, Não=0; valor Nacional é a proporção 0-100% sobre o universo de prefeituras.
  - Valor (Nacional): 59.98
  - Valor (Capitais): 100.00 (27/27 capitais)

*iGovSISP/SGD 2025 (SGD/MGI):*

- **G101GP** — iGovSISP: As estruturas, papéis e diretrizes para a Governança de TIC do órgão estão claramente definidas em uma política de Governança de TIC ou outro instrumento equivalente. (autodiagnóstico SISP, likert)
  - *Normalização:* Proporção 0-100% — usado diretamente
  - Valor (Nacional): 86.32

- **G103GP** — iGovSISP: Os assuntos relativos à implementação das ações de governo digital e ao uso de recursos de TIC no órgão são deliberados por um Comitê de Governança Digital ou equivalente (Decreto 12.198/2024, Portaria SGD/MGI 6.618/2024). (autodiagnóstico SISP, likert)
  - *Normalização:* Proporção 0-100% — usado diretamente
  - Valor (Nacional): 93.16

### 4.3.2 Estratégia e planejamento

*Definição:* Existência, qualidade e execução de instrumentos formais de planejamento de TI e governo digital — estratégia de governo digital (IOSPD), conteúdo e gestão do Plano Diretor de Tecnologia da Informação e Comunicação (PDTIC) (publicação, uso do guia do SISP, revisão anual, análise de alternativas, riscos, metas intermediárias e grau de execução), alinhamento à EFGD e integração entre planejamento estratégico institucional (PEI/PDI) e objetivos de TIC. Corresponde à Recomendação 1.3.

*Média Nacional:* 67.9 (n=7; 13 itens).

**Indicadores:**

*iESGo/TCU 2024 (TCU):*

- **iESGo 2123** — A organização definiu metas para a simplificação do atendimento prestado aos usuários dos serviços públicos.
  - *Normalização:* Índice 0-100 — usado diretamente
  - Valor (Nacional): 37.78

- **iESGo 4211** — A organização executa processo de planejamento de tecnologia da informação.
  - *Normalização:* Índice 0-100 — usado diretamente
  - Valor (Nacional): 71.74

- **iESGo 4212** — A organização possui plano de tecnologia da informação vigente.
  - *Normalização:* Índice 0-100 — usado diretamente
  - Valor (Nacional): 76.65

*IOSPD/ABEP-TIC 2025 (ABEP-TIC):*

- **IOSPD_I10** — Possui Estratégia de Governo Digital válida e em funcionamento para 2025?
  - *Normalização:* Índice 0-10 — multiplicado por 10
  - Valor (Nacional): 48.14
  - Valor (Estadual): 48.1 (média das 27 UFs; distribuição em três patamares 0, 33.3 e 100)
    - **Topo (100, n=11):** AC, GO, MG, MT, PE, PI, RJ, RO, RS, SP, TO
    - **Intermediário (33.3, n=6):** AP, BA, DF, MS, PA, SE
    - **Base (0, n=10):** AL, AM, CE, ES, MA, PB, PR, RN, RR, SC

*iGovSISP/SGD 2025 (SGD/MGI):*

- **G102GP** — iGovSISP: O órgão executa processo de planejamento de acordo com a Estratégia Federal de Governo Digital - EFGD 2024/2027. (autodiagnóstico SISP, likert)
  - *Normalização:* Proporção 0-100% — usado diretamente
  - Valor (Nacional): 88.89

*Bateria — conteúdo do PDTIC: os 7 itens a seguir entram no índice como um único componente, junto com os demais itens da mesma bateria apresentados nas seções 4.3.3 e 4.3.5 (média dos itens observados; ver Capítulo 3).*

- **G106GPE** — iGovSISP: O PDTIC foi publicado? (autodiagnóstico SISP, sim_nao)
  - *Normalização:* Proporção 0-100% — usado diretamente
  - Valor (Nacional): 94.06

- **G106GPG** — iGovSISP: O órgão utiliza o Guia de PDTIC do SISP na elaboração e acompanhamento do PDTIC? (autodiagnóstico SISP, ordinal_maturidade_adocao)
  - *Normalização:* Proporção 0-100% — usado diretamente
  - Valor (Nacional): 98.02

- **G106GPH** — iGovSISP: Em relação à revisão anual do PDTIC, como o órgão se alinha à Portaria 778/2019? (autodiagnóstico SISP, ordinal_1_4)
  - *Normalização:* Proporção 0-100% — usado diretamente
  - Valor (Nacional): 91.09

- **G106GPN** — iGovSISP: O órgão analisou em que medida a demanda pode ser suprida com compartilhamento de recursos, estágio, automações (IA, cloud) ou contratações? (autodiagnóstico SISP, sim_nao)
  - *Normalização:* Proporção 0-100% — usado diretamente
  - Valor (Nacional): 42.57

- **G106GPQ** — iGovSISP: O órgão detalhou os riscos ao atendimento das necessidades, planejou ações de tratamento, prazos e responsáveis? (autodiagnóstico SISP, sim_nao_emparte)
  - *Normalização:* Proporção 0-100% — usado diretamente
  - Valor (Nacional): 58.17

- **G106GPR** — iGovSISP: O órgão planejou metas intermediárias e finais para cada ação, responsáveis, prazos e relação entre ações e necessidades do PDTIC? (autodiagnóstico SISP, sim_nao_emparte)
  - *Normalização:* Proporção 0-100% — usado diretamente
  - Valor (Nacional): 63.86

- **G106GPS** — iGovSISP: Em relação ao grau de execução do PDTIC: (autodiagnóstico SISP, ordinal_maturidade_proporcional)
  - *Normalização:* Proporção 0-100% — usado diretamente
  - Valor (Nacional): 44.55

- **G146GP** — iGovSISP: O Plano Estratégico Institucional (PEI), em relação aos órgãos em geral e/ou, no âmbito das Instituições Federais de Ensino Superior, o Plano de Desenvolvimento Institucional (PDI), de acordo com o art. 21 do Decreto nº 9.235, de 15 de dezembro de 2017, ou outro instrumento estratégico equivalente, contempla(m) objetivos estratégicos específicos para TIC? (autodiagnóstico SISP, likert)
  - *Normalização:* Proporção 0-100% — usado diretamente
  - Valor (Nacional): 82.05

### 4.3.3 Recursos e contratações

*Definição:* Adequação orçamentária da TI — orçamento adequado às necessidades — e detalhamento de capacitações e orçamentos no PDTIC. Corresponde à Recomendação 1.5.

*Média Nacional:* 45.0 (n=2; 3 itens).

**Indicadores:**

*iGovSISP/SGD 2025 (SGD/MGI):*

- **G107GP** — iGovSISP: O órgão possui orçamento adequado para suportar as necessidades de TI. (autodiagnóstico SISP, likert)
  - *Normalização:* Proporção 0-100% — usado diretamente
  - Valor (Nacional): 31.62

*Bateria — conteúdo do PDTIC: os 2 itens a seguir integram a bateria do PDTIC apresentada na seção 4.3.2 e entram no índice como parte desse único componente (média dos itens observados; ver Capítulo 3).*

- **G106GPO** — iGovSISP: O órgão detalhou as capacitações planejadas, suas relações com necessidades do PDTIC, se efetuou as do Capacita.gov.br e os orçamentos? (autodiagnóstico SISP, sim_nao_emparte)
  - *Normalização:* Proporção 0-100% — usado diretamente
  - Valor (Nacional): 45.79

- **G106GPP** — iGovSISP: O órgão detalhou o orçamento para manutenção de cada contrato vigente e para cada nova contratação para atender necessidades do PDTIC? (autodiagnóstico SISP, sim_nao_emparte)
  - *Normalização:* Proporção 0-100% — usado diretamente
  - Valor (Nacional): 70.79

### 4.3.4 Gestão e maturidade de processos de TI

*Definição:* Adoção de práticas formais de gerenciamento da função TI — projetos, riscos, mudanças, ativos, conformidade e gestão de recursos de TI. Sub-conceito não enunciado pelas recomendações da ENGD, mas central no autodiagnóstico SISP.

*Média Nacional:* 55.4 (n=13; 13 itens).

**Indicadores:**

*iESGo/TCU 2024 (TCU):*

- **iESGo 4221** — A organização elabora um catálogo de serviços de tecnologia da informação e monitora níveis de serviço.
  - *Normalização:* Índice 0-100 — usado diretamente
  - Valor (Nacional): 50.43

- **iESGo 4222** — A organização executa processo de gestão de mudanças.
  - *Normalização:* Índice 0-100 — usado diretamente
  - Valor (Nacional): 45.26

- **iESGo 4223** — A organização executa processo de gestão de configuração e ativos (de serviços de tecnologia da informação).
  - *Normalização:* Índice 0-100 — usado diretamente
  - Valor (Nacional): 35.87

- **iESGo 4224** — A organização executa processo(s) de gestão de incidentes de serviços de tecnologia da informação e de incidentes de segurança da informação.
  - *Normalização:* Índice 0-100 — usado diretamente
  - Valor (Nacional): 50.64

- **iESGo 4261** — A organização executa um processo de software.
  - *Normalização:* Índice 0-100 — usado diretamente
  - Valor (Nacional): 51.69

- **iESGo 4262** — A organização executa processo de gestão de projetos de tecnologia da informação.
  - *Normalização:* Índice 0-100 — usado diretamente
  - Valor (Nacional): 49.18

*iGovSISP/SGD 2025 (SGD/MGI):*

- **G105GP** — iGovSISP: O Gerenciamento de Projetos de TI no órgão é executado segundo as melhores práticas e metodologias aplicáveis? (PMBOK, Kanban, Cascata, Scrum, PRINCE2, Lean, etc). (autodiagnóstico SISP, likert)
  - *Normalização:* Proporção 0-100% — usado diretamente
  - Valor (Nacional): 72.65

- **G109GP** — iGovSISP: A avaliação das políticas públicas de TI executadas pelo órgão (ou com sua participação) é incorporada no processo orçamentário. (autodiagnóstico SISP, likert)
  - *Normalização:* Proporção 0-100% — usado diretamente
  - Valor (Nacional): 48.29

- **G111GP** — iGovSISP: O órgão faz uso de uma estrutura padrão (framework) para identificar e gerenciar riscos e interdependências comuns que possam afetar as entregas de TI dentro do prazo e do orçamento. (autodiagnóstico SISP, likert)
  - *Normalização:* Proporção 0-100% — usado diretamente
  - Valor (Nacional): 39.74

- **G112GP** — iGovSISP: Os recursos de TI (hardware, software, pessoal) do órgão são gerenciados de forma eficiente para otimizar custos e desempenho. (autodiagnóstico SISP, likert)
  - *Normalização:* Proporção 0-100% — usado diretamente
  - Valor (Nacional): 83.76

- **G115GP** — iGovSISP: O órgão realiza avaliações regulares de conformidade na área de TI para garantir a eficácia nas operações. (autodiagnóstico SISP, likert)
  - *Normalização:* Proporção 0-100% — usado diretamente
  - Valor (Nacional): 51.28

- **G116GP** — iGovSISP: O órgão mantém registros precisos e atualizados dos ativos de TI, incluindo inventário e manutenção. (autodiagnóstico SISP, likert)
  - *Normalização:* Proporção 0-100% — usado diretamente
  - Valor (Nacional): 73.50

- **G217SPD** — iGovSISP: O órgão possui processo formal de gestão de mudanças em TI? (autodiagnóstico SISP, likert)
  - *Normalização:* Proporção 0-100% — usado diretamente
  - Valor (Nacional): 68.38

### 4.3.5 Pessoas e força de trabalho em TI

*Definição:* Dimensionamento da força de trabalho em TI no planejamento do PDTIC — estimativa do quantitativo mínimo de pessoal por competência. Sub-conceito não enunciado pelas recomendações da ENGD, mas presente no instrumento SISP como parte da governança da função TI. Os demais recortes de pessoas e competências — avaliação de desempenho individual, adequação quantitativa do pessoal de TI, capacitação, retenção e mentoria — estão no Objetivo 10 (Capítulo 13), que é o objetivo em que o tema das competências é tratado.

*Média Nacional:* 43.1 (n=1; 1 item).

**Indicadores:**

*iGovSISP/SGD 2025 (SGD/MGI):*

*Bateria — conteúdo do PDTIC: o item a seguir integra a bateria do PDTIC apresentada na seção 4.3.2 e entra no índice como parte desse único componente (média dos itens observados; ver Capítulo 3).*

- **G106GPL** — iGovSISP: O órgão estimou a quantidade mínima de pessoal por competência considerando necessidades prioritárias do PDTIC e riscos? (autodiagnóstico SISP, sim_nao)
  - *Normalização:* Proporção 0-100% — usado diretamente
  - Valor (Nacional): 43.07

### 4.3.6 Adoção de instrumentos do SGD/SISP

*Definição:* Conhecimento e utilização de instrumentos e orientações da Secretaria de Governo Digital (SGD/MGI) pelos órgãos do Sistema de Administração dos Recursos de Tecnologia da Informação (SISP) — portarias setoriais sobre software, infraestrutura e estações de trabalho — além de item do autodiagnóstico SISP sobre previsão orçamentária por cenários alternativos. A Plataforma Gov Digital é tratada no Objetivo 6, por aderência à Recomendação 6.1; as instruções normativas estruturantes sobre processo de contratação de TIC (IN SGD/MGI nº 06/2023 e IN SGD/ME nº 94/2022) migraram para o Objetivo 8 (Capítulo 11), por aderência mais direta à Recomendação 8.3.

*Média Nacional:* 56.8 (n=2; 4 itens).

**Indicadores:**

*iGovSISP/SGD 2025 (SGD/MGI):*

- **G114GP** — iGovSISP: O órgão, como forma de previsão orçamentária, estima os custos das iniciativas de TI em cenários alternativos de utilização de recursos. (autodiagnóstico SISP, likert)
  - *Normalização:* Proporção 0-100% — usado diretamente
  - Valor (Nacional): 54.70

*Bateria — portarias setoriais da SGD: os 3 itens a seguir entram no índice como um único componente (média dos itens observados; ver Capítulo 3).*

- **G504CTI** — iGovSISP: Portaria SGD/MGI nº 750/2023 (contratação de serviços de desenvolvimento/manutenção de software) (autodiagnóstico SISP, conhece_utiliza)
  - *Normalização:* Proporção 0-100% — usado diretamente
  - Valor (Nacional): 58.12

- **G505CTI** — iGovSISP: Portaria SGD/MGI nº 1.070/2023 (contratação de operação de infraestrutura e atendimento a usuários) (autodiagnóstico SISP, conhece_utiliza)
  - *Normalização:* Proporção 0-100% — usado diretamente
  - Valor (Nacional): 58.97

- **G506CTI** — iGovSISP: Portaria SGD/MGI nº 2.715/2023 (Modelo de contratação de estações de trabalho) (autodiagnóstico SISP, conhece_utiliza)
  - *Normalização:* Proporção 0-100% — usado diretamente
  - Valor (Nacional): 59.83
