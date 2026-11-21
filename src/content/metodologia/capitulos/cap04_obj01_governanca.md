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

O Objetivo 1 conta com 45 variáveis ativas no índice (12 do iESGo (TCU), 22 do iGovSISP (SGD/MGI), 1 do IOSPD (ABEP-TIC), 1 da MUNIC (IBGE) e 9 da TIC Governo Eletrônico (CETIC.br)), que entram na agregação do índice como 38 componentes (ver Capítulo 3). Todas contribuem para a visão Nacional. Apenas uma variável tem observação por UF (`I.10`, IOSPD 2025) e apenas uma tem observação por capital (`Mtic06`, MUNIC 2024). Como nenhum dos dois níveis federativos atinge o limiar mínimo de duas variáveis, **não se criam** as dimensões `Recorte Estadual` e `Recorte de Capitais`; os dois indicadores aparecem dentro das dimensões temáticas em que foram classificados, com a observação federativa explicitada inline.

## 4.3 Dimensões

As 45 variáveis ativas do Objetivo 1 foram organizadas em seis dimensões temáticas, sem dimensão federativa dedicada. As três primeiras e a sexta, sobre a adoção de instrumentos do SGD, correspondem a recomendações da Portaria; a quarta e a quinta cobrem aspectos que o índice mede e que a Portaria não enuncia explicitamente, práticas de gestão da função TI observadas pelo autodiagnóstico SISP e pelo iESGo (gerenciamento de processos e dimensionamento da força de trabalho de TI).

![Dimensões do Objetivo 1](../graficos/dimensoes/cap04.png)

### 4.3.1 Estrutura de governança

*Definição:* Existência de instâncias formais que dão suporte à política de governo digital: área/departamento de TI, comitês de governança digital, estruturas/diretrizes de governança de TIC e modelo de gestão de TI estabelecido pela alta administração, com o acompanhamento dessa gestão pela liderança e pela auditoria interna. Corresponde à Recomendação 1.4.

*Média Nacional:* 68,1 (n=8; 8 itens).

**Indicadores:**

*TIC Governo Eletrônico 2023 (CETIC.br):*

- **B7**. Este órgão público possui Comitê ou Conselho Diretivo, de Estratégia ou de Governança de TI?
  - *Normalização:* Piso sobre a população inteira, com os casos fora do filtro contados como resposta negativa (ver Seção 3.2.4).
  - *Contagem:* Categorias: Sim, Não, Não sabe e Não respondeu; só Sim conta. O percentual condicionado é multiplicado pela proporção de Sim do filtro no mesmo estrato, em cadeia quando necessário; quem ficou fora do filtro conta como resposta negativa. O resultado é um piso sobre a população inteira dos órgãos, conforme a Seção 3.2.4.
  - Valor (Nacional): 40,20

- **B1**. Órgãos: Neste órgão público há alguma área ou departamento de tecnologia da informação, informática, sistemas ou redes? Por favor, não considere se esta área for composta por funcionários exclusivamente terceirizados. Prefeituras: Nesta prefeitura há alguma área ou departamento de tecnologia da informação, informática, sistemas ou redes? Por favor, não considere se for composta por funcionários exclusivamente terceirizados.
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4).
  - Valor (Nacional): 67,89

*iESGo 2024 (TCU):*

- **iESGo 2133**. A alta administração estabeleceu modelo de gestão de tecnologia da informação
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 76,42

- **iESGo 2153**. A liderança monitora o desempenho da gestão de tecnologia da informação
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 59,89

- **iESGo 3132C**. A instância superior de governança recebe serviços de auditoria interna que adicionam valor à organização os serviços de auditoria interna prestados anualmente para a organização contemplam avaliação da gestão de tecnologia da informação
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que marcaram a subquestão. Só a vê quem declarou adotar a prática da questão 3132 ao menos parcialmente; as demais contam como não.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 60,70

*MUNIC 2024 (IBGE):*

- **Mtic06**. Na prefeitura existe estrutura organizacional para a área de Tecnologia da Informação (TI)?
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0; valor Nacional é a proporção 0-100% sobre o universo de prefeituras.
  - Valor (Nacional): 59,98
  - Valor (Capitais): 100,00 (27/27 capitais)

*iGovSISP 2025 (SGD/MGI):*

- **G101GP**. As estruturas, papéis e diretrizes para a Governança de TIC do órgão estão claramente definidas em uma política de Governança de TIC ou outro instrumento equivalente.
  - *Normalização:* Percentual de concordância parcial ou total entre os respondentes.
  - Valor (Nacional): 86,32

- **G103GP**. Os assuntos relativos à implementação das ações de governo digital e ao uso de recursos de tecnologia da informação e comunicação no órgão são deliberados por um Comitê de Governança Digital ou equivalente, nos termos do Decreto nº 12.198, de 24 de setembro de 2024 e da Portaria SGD/MGI nº 6.618, de 25 de setembro de 2024.
  - *Normalização:* Percentual de concordância parcial ou total entre os respondentes.
  - Valor (Nacional): 93,16

### 4.3.2 Estratégia e planejamento

*Definição:* Existência e conteúdo dos instrumentos de planejamento de TI e governo digital: estratégia de governo digital, objetivos de TIC no planejamento estratégico institucional, processo e plano de TI, conteúdo e acompanhamento do PDTIC, situação do Plano de Transformação Digital, alinhamento estratégico de seus investimentos e metas de simplificação do atendimento ao usuário. A elaboração de plano não equivale à execução. Corresponde à Recomendação 1.3.

*Média Nacional:* 64,9 (n=10; 15 itens).

**Indicadores:**

*iESGo 2024 (TCU):*

- **iESGo 2123**. A organização definiu metas para a simplificação do atendimento prestado aos usuários dos serviços públicos
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 40,92

- **iESGo 4211**. A organização executa processo de planejamento de tecnologia da informação
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 82,93

- **iESGo 4212**. A organização possui plano de tecnologia da informação vigente
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 84,01

*IOSPD 2025 (ABEP-TIC):*

- **I.10**. Possui Estratégia de Governo Digital válida e em funcionamento para 2025?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 48,14
  - Valor (Estadual): 48,1 (média das 27 UFs; distribuição em três patamares 0; 33,3 e 100)
    - **Topo (100; n=11):** AC, GO, MG, MT, PE, PI, RJ, RO, RS, SP, TO
    - **Intermediário (33,3; n=6):** AP, BA, DF, MS, PA, SE
    - **Base (0; n=10):** AL, AM, CE, ES, MA, PB, PR, RN, RR, SC

*iGovSISP 2025 (SGD/MGI):*

- **G213SPD**. Sobre o Plano de Transformação Digital, o órgão:
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 73,08
  - *Estágio positivo mínimo:* Possui PTD aprovado, mas não executa as ações por dificuldades operacionais
  - *Leitura:* O estágio positivo exige PTD aprovado, sem exigir execução; o plano em elaboração não conta.

- **G225SPD**. Os investimentos em sistemas e serviços digitais previstos no Plano de Transformação Digital (PTD) estão alinhados aos objetivos estratégicos do órgão?
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 56,84
  - *Estágio positivo mínimo:* Os principais projetos digitais consideram o plano estratégico.

- **G102GP**. O órgão executa processo de planejamento de acordo com a Estratégia Federal de Governo Digital - EFGD 2024/2027.
  - *Normalização:* Percentual de concordância parcial ou total entre os respondentes.
  - Valor (Nacional): 88,89

*Esta seção apresenta 6 dos 8 indicadores de uma mesma bateria no objetivo. A média dimensional usa os itens desta seção; o índice do objetivo agrega a bateria uma só vez, conforme o Capítulo 3.*

- **G106GPE**. O PDTIC foi publicado?
  - *Normalização:* Percentual de respostas Sim. O denominador são os 234 órgãos: os 32 sem PDTIC, a quem a pergunta não foi mostrada, contam como resposta negativa.
  - Valor (Nacional): 81,20

- **G106GPG**. O órgão utiliza o Guia de PDTIC do SISP na elaboração e acompanhamento do PDTIC?
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala. O denominador são os 234 órgãos: os 32 sem PDTIC, a quem a pergunta não foi mostrada, contam como resposta negativa.
  - Valor (Nacional): 74,79
  - *Estágio positivo mínimo:* Utiliza no processo de elaboração

- **G106GPH**. Em relação à revisão anual do PDTIC, como o órgão se alinha à Portaria nº 778, de 4 de abril de 2019?
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala. O denominador são os 234 órgãos: os 32 sem PDTIC, a quem a pergunta não foi mostrada, contam como resposta negativa.
  - Valor (Nacional): 55,13
  - *Estágio positivo mínimo:* Realiza a revisão anualmente, mas sem um grupo de trabalho formal de apoio

- **G106GPN**. O órgão analisou em que medida a demanda (ou a parte menos especializada dela) pode ser suprida com compartilhamento de recursos, programas de estágio, automações (IA, cloud, etc) ou contratações de serviços?
  - *Normalização:* Percentual de respostas Sim. O denominador são os 234 órgãos: os 32 sem PDTIC, a quem a pergunta não foi mostrada, contam como resposta negativa.
  - Valor (Nacional): 36,75

- **G106GPQ**. O órgão detalhou os riscos ao atendimento das necessidades, planejou ações de tratamento aos riscos e designou os respectivos prazos e responsáveis pelas ações?
  - *Normalização:* Percentual ponderado: Sim=1, Em parte=0,5 e Não=0. O denominador são os 234 órgãos: os 32 sem PDTIC, a quem a pergunta não foi mostrada, contam como resposta negativa.
  - Valor (Nacional): 50,21

- **G106GPR**. O órgão planejou metas intermediárias e finais para cada ação, os responsáveis, os prazos e a relação entre as ações e as necessidades previstas no PDTIC?
  - *Normalização:* Percentual ponderado: Sim=1, Em parte=0,5 e Não=0. O denominador são os 234 órgãos: os 32 sem PDTIC, a quem a pergunta não foi mostrada, contam como resposta negativa.
  - Valor (Nacional): 55,13

- **G146GP**. O Plano Estratégico Institucional (PEI), em relação aos órgãos em geral e/ou, no âmbito das Instituições Federais de Ensino Superior, o Plano de Desenvolvimento Institucional (PDI), de acordo com o art. 21 do Decreto nº 9.235, de 15 de dezembro de 2017, ou outro instrumento estratégico equivalente, contempla(m) objetivos estratégicos específicos para TIC?
  - *Normalização:* Percentual de concordância parcial ou total entre os respondentes.
  - Valor (Nacional): 82,05

*TIC Governo Eletrônico 2023 (CETIC.br):*

- **B5A**. Órgãos: Agora gostaria de saber se o órgão público em que o sr.(a) trabalha possui os seguintes documentos formalmente instituídos, mesmo que tenham sido desenvolvidos por outro órgão público. Este órgão público possui documento formalmente instituído de Plano diretor ou estratégico de TI? Prefeituras: Agora gostaria de saber se a prefeitura em que o(a) senhor(a) trabalha possui os seguintes documentos formalmente instituídos. Esta prefeitura possui documento formalmente instituído de Plano diretor ou estratégico de TI?
  - *Normalização:* Piso sobre a população inteira, com os casos fora do filtro contados como resposta negativa (ver Seção 3.2.4).
  - *Contagem:* Categorias: Sim, Não, Não sabe e Não respondeu; só Sim conta. O percentual condicionado é multiplicado pela proporção de Sim do filtro no mesmo estrato, em cadeia quando necessário; quem ficou fora do filtro conta como resposta negativa. O resultado é um piso sobre a população inteira dos órgãos e das prefeituras, conforme a Seção 3.2.4.
  - Valor (Nacional): 33,04

### 4.3.3 Recursos e contratações

*Definição:* Adequação do orçamento às necessidades de TI e detalhamento, no PDTIC, dos recursos para contratos vigentes e novas contratações. Corresponde à Recomendação 1.5; com vínculo secundário à Recomendação 1.2.

*Média Nacional:* 46,4 (n=2; 2 itens).

**Indicadores:**

*iGovSISP 2025 (SGD/MGI):*

- **G107GP**. O órgão possui orçamento adequado para suportar as necessidades de TI.
  - *Normalização:* Percentual de concordância parcial ou total entre os respondentes.
  - Valor (Nacional): 31,62

*Esta seção apresenta 1 dos 8 indicadores de uma mesma bateria no objetivo. A média dimensional usa o item desta seção; o índice do objetivo agrega a bateria uma só vez, conforme o Capítulo 3.*

- **G106GPP**. O órgão detalhou o orçamento para manutenção de cada contrato vigente e para cada nova contratação para atender as necessidades priorizadas no PDTIC?
  - *Normalização:* Percentual ponderado: Sim=1, Em parte=0,5 e Não=0. O denominador são os 234 órgãos: os 32 sem PDTIC, a quem a pergunta não foi mostrada, contam como resposta negativa.
  - Valor (Nacional): 61,11

### 4.3.4 Gestão e maturidade de processos de TI

*Definição:* Adoção de práticas formais de gerenciamento da função TI: projetos, riscos, mudanças, configuração e ativos, incidentes, catálogo e níveis de serviço, processo de software, conformidade, gestão de recursos de TI e avaliação das políticas de TI no processo orçamentário. Sub-conceito não enunciado pelas recomendações da ENGD, mas central no autodiagnóstico SISP e no iESGo.

*Média Nacional:* 60,1 (n=18; 18 itens).

**Indicadores:**

*iESGo 2024 (TCU):*

- **iESGo 4221**. A organização elabora um catálogo de serviços de tecnologia da informação e monitora níveis de serviço
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 53,93

- **iESGo 4222**. A organização executa processo de gestão de mudanças
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 52,30

- **iESGo 4223**. A organização executa processo de gestão de configuração e ativos (de serviços de tecnologia da informação)
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 37,13

- **iESGo 4224**. A organização executa processo(s) de gestão de incidentes de serviços de tecnologia da informação e de incidentes de segurança da informação
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 56,37

- **iESGo 4261**. A organização executa um processo de software
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 59,35

- **iESGo 4262**. A organização executa processo de gestão de projetos de tecnologia da informação
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 56,10

*iGovSISP 2025 (SGD/MGI):*

- **G105GP**. O Gerenciamento de Projetos de TI no órgão é executado segundo as melhores práticas e metodologias aplicáveis? (Ex.: PMBOK, Kanban, Cascata, Scrum, PRINCE2, Lean, etc).
  - *Normalização:* Percentual de concordância parcial ou total entre os respondentes.
  - Valor (Nacional): 72,65

- **G109GP**. A avaliação das políticas públicas de TI executadas pelo órgão (ou com sua participação) é incorporada no processo orçamentário.
  - *Normalização:* Percentual de concordância parcial ou total entre os respondentes.
  - Valor (Nacional): 48,29

- **G111GP**. O órgão faz uso de uma estrutura padrão (framework) para identificar e gerenciar riscos e interdependências comuns que possam afetar as entregas de TI dentro do prazo e do orçamento.
  - *Normalização:* Percentual de concordância parcial ou total entre os respondentes.
  - Valor (Nacional): 39,74

- **G112GP**. Os recursos de TI (hardware, software, pessoal) do órgão são gerenciados de forma eficiente para otimizar custos e desempenho.
  - *Normalização:* Percentual de concordância parcial ou total entre os respondentes.
  - Valor (Nacional): 83,76

- **G115GP**. O órgão realiza avaliações regulares de conformidade na área de TI para garantir a eficácia nas operações.
  - *Normalização:* Percentual de concordância parcial ou total entre os respondentes.
  - Valor (Nacional): 51,28

- **G116GP**. O órgão mantém registros precisos e atualizados dos ativos de TI, incluindo inventário e manutenção.
  - *Normalização:* Percentual de concordância parcial ou total entre os respondentes.
  - Valor (Nacional): 73,50

*TIC Governo Eletrônico 2023 (CETIC.br):*

- **B8**. Este órgão público possui processos de: Gestão de infraestrutura em TI
  - *Normalização:* Piso sobre a população inteira, com os casos fora do filtro contados como resposta negativa (ver Seção 3.2.4).
  - *Contagem:* Categorias: Sim, Não, Não sabe e Não respondeu; só Sim conta. O percentual condicionado é multiplicado pela proporção de Sim do filtro no mesmo estrato, em cadeia quando necessário; quem ficou fora do filtro conta como resposta negativa. O resultado é um piso sobre a população inteira dos órgãos, conforme a Seção 3.2.4.
  - Valor (Nacional): 68,30

- **B8**. Este órgão público possui processos de: Gerenciamento de serviços de TI
  - *Normalização:* Piso sobre a população inteira, com os casos fora do filtro contados como resposta negativa (ver Seção 3.2.4).
  - *Contagem:* Categorias: Sim, Não, Não sabe e Não respondeu; só Sim conta. O percentual condicionado é multiplicado pela proporção de Sim do filtro no mesmo estrato, em cadeia quando necessário; quem ficou fora do filtro conta como resposta negativa. O resultado é um piso sobre a população inteira dos órgãos, conforme a Seção 3.2.4.
  - Valor (Nacional): 76,04

- **B8**. Este órgão público possui processos de: Tratamento de incidentes/problemas
  - *Normalização:* Piso sobre a população inteira, com os casos fora do filtro contados como resposta negativa (ver Seção 3.2.4).
  - *Contagem:* Categorias: Sim, Não, Não sabe e Não respondeu; só Sim conta. O percentual condicionado é multiplicado pela proporção de Sim do filtro no mesmo estrato, em cadeia quando necessário; quem ficou fora do filtro conta como resposta negativa. O resultado é um piso sobre a população inteira dos órgãos, conforme a Seção 3.2.4.
  - Valor (Nacional): 62,19

- **B8**. Este órgão público possui processos de: Acompanhamento de projetos de TI
  - *Normalização:* Piso sobre a população inteira, com os casos fora do filtro contados como resposta negativa (ver Seção 3.2.4).
  - *Contagem:* Categorias: Sim, Não, Não sabe e Não respondeu; só Sim conta. O percentual condicionado é multiplicado pela proporção de Sim do filtro no mesmo estrato, em cadeia quando necessário; quem ficou fora do filtro conta como resposta negativa. O resultado é um piso sobre a população inteira dos órgãos, conforme a Seção 3.2.4.
  - Valor (Nacional): 67,31

- **B8**. Este órgão público possui processos de: Gestão de contratos de TI
  - *Normalização:* Piso sobre a população inteira, com os casos fora do filtro contados como resposta negativa (ver Seção 3.2.4).
  - *Contagem:* Categorias: Sim, Não, Não sabe e Não respondeu; só Sim conta. O percentual condicionado é multiplicado pela proporção de Sim do filtro no mesmo estrato, em cadeia quando necessário; quem ficou fora do filtro conta como resposta negativa. O resultado é um piso sobre a população inteira dos órgãos, conforme a Seção 3.2.4.
  - Valor (Nacional): 76,24

- **B8**. Este órgão público possui processos de: Gestão de riscos de TI
  - *Normalização:* Piso sobre a população inteira, com os casos fora do filtro contados como resposta negativa (ver Seção 3.2.4).
  - *Contagem:* Categorias: Sim, Não, Não sabe e Não respondeu; só Sim conta. O percentual condicionado é multiplicado pela proporção de Sim do filtro no mesmo estrato, em cadeia quando necessário; quem ficou fora do filtro conta como resposta negativa. O resultado é um piso sobre a população inteira dos órgãos, conforme a Seção 3.2.4.
  - Valor (Nacional): 47,40

### 4.3.5 Pessoas e força de trabalho em TI

*Definição:* Dimensionamento da força de trabalho em TI no planejamento do PDTIC: estimativa do quantitativo mínimo de pessoal por competência. Sub-conceito não enunciado pelas recomendações da ENGD, mas presente no instrumento SISP como parte da governança da função TI. Os demais recortes de pessoas e competências (desempenho da força de trabalho de TIC por área de conhecimento, vínculo efetivo dos titulares de funções de TI, plano e execução da capacitação, áreas temáticas das capacitações e incentivos ao desenvolvimento de competências) estão no Objetivo 10 (Capítulo 13), que é o objetivo em que o tema das competências é tratado.

*Média Nacional:* 37,2 (n=1; 1 item).

**Indicadores:**

*iGovSISP 2025 (SGD/MGI):*

*Esta seção apresenta 1 dos 8 indicadores de uma mesma bateria no objetivo. A média dimensional usa o item desta seção; o índice do objetivo agrega a bateria uma só vez, conforme o Capítulo 3.*

- **G106GPL**. O órgão estimou a quantidade mínima de pessoal por competência considerando as necessidades mais prioritárias previstas no PDTIC e os riscos relacionados a sua falta? (Guia do PDTIC do SISP, p. 85)
  - *Normalização:* Percentual de respostas Sim. O denominador são os 234 órgãos: os 32 sem PDTIC, a quem a pergunta não foi mostrada, contam como resposta negativa.
  - Valor (Nacional): 37,18

### 4.3.6 Adoção de instrumentos do SGD/SISP

*Definição:* Uso das orientações da Secretaria de Governo Digital (SGD/MGI) pelos órgãos do Sistema de Administração dos Recursos de Tecnologia da Informação (SISP), aqui observado pelo item do autodiagnóstico SISP sobre previsão orçamentária das iniciativas de tecnologia da informação em cenários alternativos de utilização de recursos. As portarias setoriais sobre modelos de contratação de software, de infraestrutura e de estações de trabalho e a instrução normativa sobre processo de contratação de TIC (IN SGD/ME nº 94/2022) estão no Objetivo 8 (Capítulo 11), na dimensão Compras e contratações de TI, por aderência mais direta à Recomendação 8.3. Corresponde à Recomendação 1.5.

*Média Nacional:* 54,7 (n=1; 1 item).

**Indicadores:**

*iGovSISP 2025 (SGD/MGI):*

- **G114GP**. O órgão, como forma de previsão orçamentária, estima os custos das iniciativas de TI em cenários alternativos de utilização de recursos, ou seja, são previstas soluções alternativas para o caso de contingenciamentos orçamentários.
  - *Normalização:* Percentual de concordância parcial ou total entre os respondentes.
  - Valor (Nacional): 54,70
