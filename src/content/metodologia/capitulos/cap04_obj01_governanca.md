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

O Objetivo 1 conta com 37 variáveis ativas no índice (12 do iESGo (TCU), 22 do iGovSISP (SGD/MGI), 1 do IOSPD (ABEP-TIC), 1 da MUNIC (IBGE) e 1 da TIC Governo Eletrônico (CETIC.br)), que entram na agregação do índice como 30 componentes (ver Capítulo 3). Todas contribuem para a visão Nacional. Apenas uma variável tem observação por UF (`IOSPD_I10`, IOSPD 2025) e apenas uma tem observação por capital (`MUNIC_TI_ESTRUTURA`, MUNIC 2024). Como nenhum dos dois níveis federativos atinge o limiar mínimo de duas variáveis, **não se criam** as dimensões `Recorte Estadual` e `Recorte de Capitais`; os dois indicadores aparecem dentro das dimensões temáticas em que foram classificados, com a observação federativa explicitada inline.

## 4.3 Dimensões

As 37 variáveis ativas do Objetivo 1 foram organizadas em seis dimensões temáticas, sem dimensão federativa dedicada. As três primeiras seguem diretamente recomendações da Portaria; as outras três cobrem aspectos que o índice mede e que a Portaria não enuncia explicitamente — em particular, práticas de gestão da função TI segundo o framework SISP/COBIT (gerenciamento de processos, força de trabalho em TI, adoção de instrumentos do SGD).

![Dimensões do Objetivo 1](../graficos/dimensoes/cap04.png)

### 4.3.1 Estrutura de governança

*Definição:* Existência de instâncias formais que dão suporte à política de governo digital — área/departamento de TI, comitês de governança digital e estruturas/diretrizes de governança de TIC. Corresponde à Recomendação 1.4.

*Média Nacional:* 70.2 (n=7; 7 itens).

**Indicadores:**

*TIC Governo Eletrônico 2023 (CETIC.br):*

- **B1** — O órgão/prefeitura possui uma área ou departamento de TI?
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual) — ver Seção 3.3.4.
  - Valor (Nacional): 67.89

*iESGo 2024 (TCU):*

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

*iGovSISP 2025 (SGD/MGI):*

- **G101GP**. iGovSISP: As estruturas, papéis e diretrizes para a Governança de TIC do órgão estão claramente definidas em uma política de Governança de TIC ou outro instrumento equivalente. (autodiagnóstico SISP, likert)
  - *Normalização:* Percentual de concordância parcial ou total entre os respondentes.
  - Valor (Nacional): 86.32

- **G103GP**. iGovSISP: Os assuntos relativos à implementação das ações de governo digital e ao uso de recursos de tecnologia da informação e comunicação no órgão são deliberados por um Comitê de Governança Digital ou equivalente, nos termos do Decreto nº 12.198, de 24 de setembro de 2024 e da Portaria SGD/MGI nº 6.618, de 25 de setembro de 2024. (autodiagnóstico SISP, likert)
  - *Normalização:* Percentual de concordância parcial ou total entre os respondentes.
  - Valor (Nacional): 93.16

### 4.3.2 Estratégia e planejamento

*Definição:* Existência e conteúdo dos instrumentos de planejamento de TI e governo digital: estratégia, conteúdo e acompanhamento do PDTIC, situação do Plano de Transformação Digital e alinhamento estratégico de seus investimentos. A elaboração de plano não equivale à execução. Corresponde à Recomendação 1.3.

*Média Nacional:* 72.3 (n=9; 14 itens).

**Indicadores:**

*iESGo 2024 (TCU):*

- **iESGo 2123** — A organização definiu metas para a simplificação do atendimento prestado aos usuários dos serviços públicos.
  - *Normalização:* Índice 0-100 — usado diretamente
  - Valor (Nacional): 37.78

- **iESGo 4211** — A organização executa processo de planejamento de tecnologia da informação.
  - *Normalização:* Índice 0-100 — usado diretamente
  - Valor (Nacional): 71.74

- **iESGo 4212** — A organização possui plano de tecnologia da informação vigente.
  - *Normalização:* Índice 0-100 — usado diretamente
  - Valor (Nacional): 76.65

*IOSPD 2025 (ABEP-TIC):*

- **IOSPD_I10** — Possui Estratégia de Governo Digital válida e em funcionamento para 2025?
  - *Normalização:* Índice 0-10 — multiplicado por 10
  - Valor (Nacional): 48.14
  - Valor (Estadual): 48.1 (média das 27 UFs; distribuição em três patamares 0, 33.3 e 100)
    - **Topo (100, n=11):** AC, GO, MG, MT, PE, PI, RJ, RO, RS, SP, TO
    - **Intermediário (33.3, n=6):** AP, BA, DF, MS, PA, SE
    - **Base (0, n=10):** AL, AM, CE, ES, MA, PB, PR, RN, RR, SC

*iGovSISP 2025 (SGD/MGI):*

- **G213SPD**. iGovSISP: Sobre o Plano de Transformação Digital, o órgão: (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 89.74
  - *Estágio positivo mínimo:* Está em fase de elaboração.
  - *Leitura:* O estágio positivo inclui elaboração do PTD, sem exigir execução.

- **G225SPD**. iGovSISP: Os investimentos em sistemas e serviços digitais previstos no Plano de Transformação Digital (PTD) estão alinhados aos objetivos estratégicos do órgão? (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 80.77
  - *Estágio positivo mínimo:* Há tentativa de alinhamento, mas sem metodologia estruturada.

- **G102GP**. iGovSISP: O órgão executa processo de planejamento de acordo com a Estratégia Federal de Governo Digital - EFGD 2024/2027. (autodiagnóstico SISP, likert)
  - *Normalização:* Percentual de concordância parcial ou total entre os respondentes.
  - Valor (Nacional): 88.89

*Esta seção apresenta 6 dos 8 indicadores de uma mesma bateria no objetivo. A média dimensional usa os itens desta seção; o índice do objetivo agrega a bateria uma só vez, conforme o Capítulo 3.*

- **G106GPE**. iGovSISP: O PDTIC foi publicado? (autodiagnóstico SISP, sim_nao)
  - *Normalização:* Percentual de respostas Sim entre os respondentes.
  - Valor (Nacional): 94.06

- **G106GPG**. iGovSISP: O órgão utiliza o Guia de PDTIC do SISP na elaboração e acompanhamento do PDTIC?: (autodiagnóstico SISP, ordinal_maturidade_adocao)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 98.02
  - *Estágio positivo mínimo:* Utiliza apenas alguns artefatos

- **G106GPH**. iGovSISP: Em relação à revisão anual do PDTIC, como o órgão se alinha à Portaria nº 778, de 4 de abril de 2019?: (autodiagnóstico SISP, ordinal_1_4)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 91.09
  - *Estágio positivo mínimo:* Realiza revisões apenas esporadicamente durante a vigência do plano

- **G106GPN**. iGovSISP: O órgão analisou em que medida a demanda (ou a parte menos especializada dela) pode ser suprida com compartilhamento de recursos, programas de estágio, automações (IA, cloud, etc) ou contratações de serviços? (autodiagnóstico SISP, sim_nao)
  - *Normalização:* Percentual de respostas Sim entre os respondentes.
  - Valor (Nacional): 42.57

- **G106GPQ**. iGovSISP: O órgão detalhou os riscos ao atendimento das necessidades, planejou ações de tratamento aos riscos e designou os respectivos prazos e responsáveis pelas ações? (autodiagnóstico SISP, sim_nao_emparte)
  - *Normalização:* Percentual ponderado entre respondentes: Sim=1, Em parte=0,5 e Não=0.
  - Valor (Nacional): 58.17

- **G106GPR**. iGovSISP: O órgão planejou metas intermediárias e finais para cada ação, os responsáveis, os prazos e a relação entre as ações e as necessidades previstas no PDTIC? (autodiagnóstico SISP, sim_nao_emparte)
  - *Normalização:* Percentual ponderado entre respondentes: Sim=1, Em parte=0,5 e Não=0.
  - Valor (Nacional): 63.86

- **G146GP**. iGovSISP: O Plano Estratégico Institucional (PEI), em relação aos órgãos em geral e/ou, no âmbito das Instituições Federais de Ensino Superior, o Plano de Desenvolvimento Institucional (PDI), de acordo com o art. 21 do Decreto nº 9.235, de 15 de dezembro de 2017, ou outro instrumento estratégico equivalente, contempla(m) objetivos estratégicos específicos para TIC? (autodiagnóstico SISP, likert)
  - *Normalização:* Percentual de concordância parcial ou total entre os respondentes.
  - Valor (Nacional): 82.05

### 4.3.3 Recursos e contratações

*Definição:* Adequação do orçamento às necessidades de TI e detalhamento, no PDTIC, dos recursos para contratos vigentes e novas contratações. Corresponde à Recomendação 1.5.

*Média Nacional:* 51.2 (n=2; 2 itens).

**Indicadores:**

*iGovSISP 2025 (SGD/MGI):*

- **G107GP**. iGovSISP: O órgão possui orçamento adequado para suportar as necessidades de TI. (autodiagnóstico SISP, likert)
  - *Normalização:* Percentual de concordância parcial ou total entre os respondentes.
  - Valor (Nacional): 31.62

*Esta seção apresenta 1 dos 8 indicadores de uma mesma bateria no objetivo. A média dimensional usa o item desta seção; o índice do objetivo agrega a bateria uma só vez, conforme o Capítulo 3.*

- **G106GPP**. iGovSISP: O órgão detalhou o orçamento para manutenção de cada contrato vigente e para cada nova contratação para atender as necessidades priorizadas no PDTIC? (autodiagnóstico SISP, sim_nao_emparte)
  - *Normalização:* Percentual ponderado entre respondentes: Sim=1, Em parte=0,5 e Não=0.
  - Valor (Nacional): 70.79

### 4.3.4 Gestão e maturidade de processos de TI

*Definição:* Adoção de práticas formais de gerenciamento da função TI — projetos, riscos, mudanças, ativos, conformidade e gestão de recursos de TI. Sub-conceito não enunciado pelas recomendações da ENGD, mas central no autodiagnóstico SISP.

*Média Nacional:* 54.4 (n=12; 12 itens).

**Indicadores:**

*iESGo 2024 (TCU):*

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

*iGovSISP 2025 (SGD/MGI):*

- **G105GP**. iGovSISP: O Gerenciamento de Projetos de TI no órgão é executado segundo as melhores práticas e metodologias aplicáveis? (Ex.: PMBOK, Kanban, Cascata, Scrum, PRINCE2, Lean, etc). (autodiagnóstico SISP, likert)
  - *Normalização:* Percentual de concordância parcial ou total entre os respondentes.
  - Valor (Nacional): 72.65

- **G109GP**. iGovSISP: A avaliação das políticas públicas de TI executadas pelo órgão (ou com sua participação) é incorporada no processo orçamentário. (autodiagnóstico SISP, likert)
  - *Normalização:* Percentual de concordância parcial ou total entre os respondentes.
  - Valor (Nacional): 48.29

- **G111GP**. iGovSISP: O órgão faz uso de uma estrutura padrão (framework) para identificar e gerenciar riscos e interdependências comuns que possam afetar as entregas de TI dentro do prazo e do orçamento. (autodiagnóstico SISP, likert)
  - *Normalização:* Percentual de concordância parcial ou total entre os respondentes.
  - Valor (Nacional): 39.74

- **G112GP**. iGovSISP: Os recursos de TI (hardware, software, pessoal) do órgão são gerenciados de forma eficiente para otimizar custos e desempenho. (autodiagnóstico SISP, likert)
  - *Normalização:* Percentual de concordância parcial ou total entre os respondentes.
  - Valor (Nacional): 83.76

- **G115GP**. iGovSISP: O órgão realiza avaliações regulares de conformidade na área de TI para garantir a eficácia nas operações. (autodiagnóstico SISP, likert)
  - *Normalização:* Percentual de concordância parcial ou total entre os respondentes.
  - Valor (Nacional): 51.28

- **G116GP**. iGovSISP: O órgão mantém registros precisos e atualizados dos ativos de TI, incluindo inventário e manutenção. (autodiagnóstico SISP, likert)
  - *Normalização:* Percentual de concordância parcial ou total entre os respondentes.
  - Valor (Nacional): 73.50

### 4.3.5 Pessoas e força de trabalho em TI

*Definição:* Dimensionamento da força de trabalho em TI no planejamento do PDTIC — estimativa do quantitativo mínimo de pessoal por competência. Sub-conceito não enunciado pelas recomendações da ENGD, mas presente no instrumento SISP como parte da governança da função TI. Os demais recortes de pessoas e competências — avaliação de desempenho individual, adequação quantitativa do pessoal de TI, capacitação, retenção e mentoria — estão no Objetivo 10 (Capítulo 13), que é o objetivo em que o tema das competências é tratado.

*Média Nacional:* 43.1 (n=1; 1 item).

**Indicadores:**

*iGovSISP 2025 (SGD/MGI):*

*Esta seção apresenta 1 dos 8 indicadores de uma mesma bateria no objetivo. A média dimensional usa os itens desta seção; o índice do objetivo agrega a bateria uma só vez, conforme o Capítulo 3.*

- **G106GPL**. iGovSISP: O órgão estimou a quantidade mínima de pessoal por competência considerando as necessidades mais prioritárias previstas no PDTIC e os riscos relacionados a sua falta? (Guia do PDTIC do SISP, p. 85) (autodiagnóstico SISP, sim_nao)
  - *Normalização:* Percentual de respostas Sim entre os respondentes.
  - Valor (Nacional): 43.07

### 4.3.6 Adoção de instrumentos do SGD/SISP

*Definição:* Uso das orientações da Secretaria de Governo Digital (SGD/MGI) pelos órgãos do Sistema de Administração dos Recursos de Tecnologia da Informação (SISP), aqui observado pelo item do autodiagnóstico SISP sobre previsão orçamentária das iniciativas de tecnologia da informação em cenários alternativos de utilização de recursos. As portarias setoriais sobre modelos de contratação de software, de infraestrutura e de estações de trabalho, que antes compunham esta dimensão, passaram ao Objetivo 8 (Capítulo 11), na dimensão Compras e contratações de TI, por aderência mais direta à Recomendação 8.3; as instruções normativas estruturantes sobre processo de contratação de TIC (IN SGD/MGI nº 06/2023 e IN SGD/ME nº 94/2022) já haviam migrado pelo mesmo motivo. A Plataforma Gov Digital é tratada no Objetivo 6, por aderência à Recomendação 6.1.

*Média Nacional:* 54.7 (n=1; 1 item).

**Indicadores:**

*iGovSISP 2025 (SGD/MGI):*

- **G114GP**. iGovSISP: O órgão, como forma de previsão orçamentária, estima os custos das iniciativas de TI em cenários alternativos de utilização de recursos, ou seja, são previstas soluções alternativas para o caso de contingenciamentos orçamentários. (autodiagnóstico SISP, likert)
  - *Normalização:* Percentual de concordância parcial ou total entre os respondentes.
  - Valor (Nacional): 54.70
