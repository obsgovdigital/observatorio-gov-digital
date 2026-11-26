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

O Objetivo 1 conta com 42 variáveis ativas no índice (4 de TIC Governo Eletrônico (CETIC.br), 11 de iESGo (TCU), 4 de IOSPD (ABEP-TIC), 1 de MUNIC (IBGE), 22 de iGovSISP (SGD/MGI)), que entram na agregação como 35 componentes, após o colapso das baterias (ver Capítulo 3). Todas contribuem para a visão Nacional. A maior parte das variáveis observa só órgãos federais: 33 das 42, sendo 11 do iESGo (TCU) e 22 do iGovSISP (SGD/MGI); nelas, o valor Nacional é o mesmo do Federal. Há 4 variáveis com observação por UF, reunidas também na dimensão `Recorte Estadual`. Uma variável tem observação por capital (`Mtic06`, MUNIC 2024); o indicador aparece na sua dimensão temática, sem criar uma dimensão federativa com apenas uma variável.

<!-- federal:cobertura -->
No recorte federal, 37 variáveis do objetivo têm observação dos órgãos federais (4 da TIC Governo Eletrônico (CETIC.br), 11 do iESGo (TCU) e 22 do iGovSISP (SGD/MGI)), que entram na média do recorte como 30 componentes. O limiar mínimo de duas variáveis efetivas observadas justifica a criação da dimensão **`Recorte Federal`**, em que a União é o único ente, sem ranking (Seção 3.1.6).
<!-- /federal:cobertura -->

## 4.3 Dimensões

As 42 variáveis ativas do Objetivo 1 foram organizadas em seis dimensões temáticas, complementadas pelas dimensões federativas `Recorte Estadual` e `Recorte Federal`. As três primeiras correspondem a recomendações da Portaria; a quarta e a quinta cobrem aspectos que o índice mede e que a Portaria não enuncia explicitamente, práticas de gestão da função TI observadas pelo autodiagnóstico SISP e pelo iESGo (gerenciamento de processos e dimensionamento da força de trabalho de TI); a sexta, sobre o apoio estadual à transformação digital dos municípios, corresponde à ementa do objetivo. O `Recorte Estadual` reúne quatro indicadores do IOSPD com observação nas 26 UFs participantes. O `Recorte Federal` reagrupa as variáveis com observação dos órgãos federais, com a União como ente único.

![Dimensões do Objetivo 1](../graficos/dimensoes/cap04.png)

### 4.3.1 Estrutura de governança

*Definição:* Existência de instâncias formais que dão suporte à política de governo digital: área/departamento de TI, comitês de governança digital, estruturas/diretrizes de governança de TIC e modelo de gestão de TI estabelecido pela alta administração, com o acompanhamento dessa gestão pela liderança e pela auditoria interna. Corresponde à Recomendação 1.4.

*Média Nacional:* 73,5 (n=10; 10 itens).

**Indicadores:**

*TIC Governo Eletrônico 2025 (CETIC.br):*

- **B1**. Neste órgão público há alguma área ou departamento de tecnologia da informação, informática, sistemas ou redes? Por favor, não considere se esta área for composta por funcionários exclusivamente terceirizados / Nesta prefeitura há alguma área ou departamento de tecnologia da informação, informática, sistemas ou redes? Por favor, não considere se for composta por funcionários exclusivamente terceirizados.
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 67,54
  - Valor (Federal): 99,29

- **B7A**. Este órgão público possui Comitê ou Conselho formalmente instituído de Tecnologia da Informação (TI)
  - *Normalização:* Proporção 0-100% sobre o universo de órgãos públicos, usada diretamente; valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 39,80
  - Valor (Federal): 93,57

*iESGo 2024 (TCU):*

- **iESGo 2133**. A alta administração estabeleceu modelo de gestão de tecnologia da informação
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 76,42
  - Valor (Federal): 76,42

- **iESGo 2153**. A liderança monitora o desempenho da gestão de tecnologia da informação
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 59,89
  - Valor (Federal): 59,89

- **iESGo 3132C**. A instância superior de governança recebe serviços de auditoria interna que adicionam valor à organização: os serviços de auditoria interna prestados anualmente para a organização contemplam avaliação da gestão de tecnologia da informação
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que marcaram a subquestão. Só a vê quem declarou adotar a prática da questão 3132 ao menos parcialmente; as demais contam como não.
  - *Normalização:* Proporção 0-100%, usada diretamente; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 60,70
  - Valor (Federal): 60,70

*IOSPD 2026 (ABEP-TIC):*

- **1.2**. EXISTE UMA INSTITUIÇÃO RESPONSÁVEL POR LIDERAR E COORDENAR AS DECISÕES DE GOVERNO DIGITAL E / OU DE TECNOLOGIA DA INFORMAÇÃO E COMUNICAÇÃO E ASSEGURAR SUA IMPLEMENTAÇÃO DE FORMA TRANSVERSAL NO ESTADO?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 99,04
  - Valor (Estadual): 99,04 (média de 26 UFs)

- **1.3**. EXISTE UM ÓRGÃO/ESTRUTURA FORMAL COLEGIADO DE COORDENAÇÃO RESPONSÁVEL POR DIRECIONAR TRANSVERSALMENTE AS POLÍTICAS E INICIATIVAS DE GOVERNO DIGITAL OU TIC?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 96,15
  - Valor (Estadual): 96,15 (média de 26 UFs)

*MUNIC 2024 (IBGE):*

- **Mtic06**. Na prefeitura existe estrutura organizacional para a área de Tecnologia da Informação (TI)?
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 59,98
  - Valor (Capitais): 100,00 (27/27 capitais)

*iGovSISP 2026 (SGD/MGI):*

- **G101GP**. As estruturas, papéis e diretrizes para a Governança de TIC do órgão estão claramente definidas em uma política de Governança de TIC ou outro instrumento equivalente.
  - *Normalização:* Proporção de concordância parcial ou total entre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 84,87
  - Valor (Federal): 84,87

- **G103GP**. Os assuntos relativos à implementação das ações de governo digital e ao uso de recursos de tecnologia da informação e comunicação no órgão são deliberados por um Comitê de Governança Digital ou equivalente, nos termos do Decreto nº 12.198, de 24 de setembro de 2024 e da Portaria SGD/MGI nº 6.618, de 25 de setembro de 2024.
  - *Normalização:* Proporção de concordância parcial ou total entre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 90,76
  - Valor (Federal): 90,76

### 4.3.2 Estratégia e planejamento

*Definição:* Existência e conteúdo dos instrumentos de planejamento de TI e governo digital: estratégia de governo digital, objetivos de TIC no planejamento estratégico institucional, processo e plano de TI, conteúdo e acompanhamento do PDTIC, situação do Plano de Transformação Digital e alinhamento estratégico de seus investimentos. A elaboração de plano não equivale à execução. Corresponde à Recomendação 1.3.

*Média Nacional:* 70,8 (n=10; 14 itens).

**Indicadores:**

*TIC Governo Eletrônico 2025 (CETIC.br):*

- **B5A**. Agora gostaria de saber se este órgão possui os seguintes documentos formalmente instituídos, mesmo que tenham sido elaborados por outro órgão público. Este órgão público possui documento formalmente instituído de Plano estratégico ou diretor de tecnologia da informação? E documento formalmente instituído de Plano estratégico ou diretor de tecnologia da informação? / Agora gostaria de saber se a prefeitura em que o(a) sr.(a) trabalha possui os seguintes documentos formalmente instituídos. Esta prefeitura possui documento formalmente instituído de Plano diretor ou estratégico de tecnologia da informação? E documento formalmente instituído de Plano diretor ou estratégico de tecnologia da informação?
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 37,43
  - Valor (Federal): 97,14

- **B5A**. Agora gostaria de saber se este órgão possui os seguintes documentos formalmente instituídos, mesmo que tenham sido elaborados por outro órgão público. Este órgão público possui documento formalmente instituído de Plano ou estratégia de transformação digital ou governo digital? E documento formalmente instituído de Plano ou estratégia de transformação digital ou governo digital? / Agora gostaria de saber se a prefeitura em que o(a) sr.(a) trabalha possui os seguintes documentos formalmente instituídos. Esta prefeitura possui documento formalmente instituído de Plano ou estratégia de transformação digital ou governo digital? E documento formalmente instituído de Plano ou estratégia de transformação digital ou governo digital?
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 38,03
  - Valor (Federal): 79,29

*iESGo 2024 (TCU):*

- **iESGo 4211**. A organização executa processo de planejamento de tecnologia da informação
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 82,93
  - Valor (Federal): 82,93

- **iESGo 4212**. A organização possui plano de tecnologia da informação vigente
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 84,01
  - Valor (Federal): 84,01

*IOSPD 2026 (ABEP-TIC):*

- **1.1**. POSSUI ESTRATÉGIA DE GOVERNO DIGITAL VIGENTE EM 2026?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 83,01
  - Valor (Estadual): 83,01 (média de 26 UFs)

*iGovSISP 2026 (SGD/MGI):*

- **G213SPD**. Sobre o Plano de Transformação Digital, o órgão:
  - *Normalização:* Proporção a partir do terceiro estágio de maturidade, sobre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 72,69
  - Valor (Federal): 72,69
  - *Estágio positivo mínimo:* Possui PTD aprovado, mas não executa as ações por dificuldades operacionais
  - *Leitura:* O estágio positivo exige PTD aprovado, sem exigir execução; o plano em elaboração não conta.

- **G225SPD**. Os investimentos em sistemas e serviços digitais previstos no Plano de Transformação Digital (PTD) estão alinhados aos objetivos estratégicos do órgão?
  - *Normalização:* Proporção a partir do terceiro estágio de maturidade, sobre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 63,45
  - Valor (Federal): 63,45
  - *Estágio positivo mínimo:* Os principais projetos digitais consideram o plano estratégico.

- **G102GP**. O órgão executa processo de planejamento de acordo com a Estratégia Federal de Governo Digital - EFGD 2024/2027.
  - *Normalização:* Proporção de concordância parcial ou total entre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 92,02
  - Valor (Federal): 92,02

- **G106GPE**. O PDTIC foi publicado?
  - *Normalização:* Proporção de respostas Sim sobre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 86,13
  - Valor (Federal): 86,13

- **G106GPG**. O órgão utiliza o Guia de PDTIC do SISP na elaboração e acompanhamento do PDTIC?:
  - *Normalização:* Proporção a partir do terceiro estágio de adoção, sobre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 78,57
  - Valor (Federal): 78,57
  - *Estágio positivo mínimo:* Utiliza no processo de elaboração

- **G106GPH**. Em relação à revisão anual do PDTIC, como o órgão se alinha à Portaria nº 778, de 4 de abril de 2019?:
  - *Normalização:* Proporção a partir do terceiro estágio da escala ordinal, sobre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 61,34
  - Valor (Federal): 61,34
  - *Estágio positivo mínimo:* Realiza a revisão anualmente, mas sem um grupo de trabalho formal de apoio

- **G106GPQ**. O órgão detalhou os riscos ao atendimento das necessidades, planejou ações de tratamento aos riscos e designou os respectivos prazos e responsáveis pelas ações?
  - *Normalização:* Sim = 1, Em parte = 0,5 e Não = 0, sobre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 56,09
  - Valor (Federal): 56,09

- **G106GPR**. O órgão planejou metas intermediárias e finais para cada ação, os responsáveis, os prazos e a relação entre as ações e as necessidades previstas no PDTIC?
  - *Normalização:* Sim = 1, Em parte = 0,5 e Não = 0, sobre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 60,08
  - Valor (Federal): 60,08

- **G146GP**. O Plano Estratégico Institucional (PEI), em relação aos órgãos em geral e/ou, no âmbito das Instituições Federais de Ensino Superior, o Plano de Desenvolvimento Institucional (PDI), de acordo com o art. 21 do Decreto nº 9.235, de 15 de dezembro de 2017, ou outro instrumento estratégico equivalente, contempla(m) objetivos estratégicos específicos para TIC?
  - *Normalização:* Proporção de concordância parcial ou total entre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 86,13
  - Valor (Federal): 86,13


*Esta seção apresenta 5 dos 8 indicadores de uma mesma bateria no objetivo. A média dimensional usa os itens desta seção; o índice do objetivo agrega a bateria uma só vez, conforme o Capítulo 3.*

### 4.3.3 Recursos e contratações nos órgãos federais

*Definição:* Adequação do orçamento às necessidades de TI, detalhamento, no PDTIC, dos recursos para contratos vigentes e novas contratações e estimativa dos custos das iniciativas de TI em cenários de contingenciamento orçamentário. As portarias setoriais sobre modelos de contratação de software, de infraestrutura e de estações de trabalho e a instrução normativa sobre processo de contratação de TIC (IN SGD/ME nº 94/2022) estão no Objetivo 8 (Capítulo 11), na dimensão Compras e contratações de TI nos órgãos federais, por aderência mais direta à Recomendação 8.3. Corresponde à Recomendação 1.5; com vínculo secundário à Recomendação 1.2.

*Média Nacional:* 49,9 (n=3; 3 itens).

**Indicadores:**

*iGovSISP 2026 (SGD/MGI):*

- **G107GP**. O órgão possui orçamento adequado para suportar as necessidades de TI.
  - *Normalização:* Proporção de concordância parcial ou total entre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 28,99
  - Valor (Federal): 28,99

- **G106GPP**. O órgão detalhou o orçamento para manutenção de cada contrato vigente e para cada nova contratação para atender as necessidades priorizadas no PDTIC?
  - *Normalização:* Sim = 1, Em parte = 0,5 e Não = 0, sobre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 64,71
  - Valor (Federal): 64,71

- **G114GP**. O órgão, como forma de previsão orçamentária, estima os custos das iniciativas de TI em cenários alternativos de utilização de recursos, ou seja, são previstas soluções alternativas para o caso de contingenciamentos orçamentários.
  - *Normalização:* Proporção de concordância parcial ou total entre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 55,88
  - Valor (Federal): 55,88


*Esta seção apresenta 1 dos 8 indicadores de uma mesma bateria no objetivo. A média dimensional usa o item desta seção; o índice do objetivo agrega a bateria uma só vez, conforme o Capítulo 3.*

### 4.3.4 Gestão e maturidade de processos de TI nos órgãos federais

*Definição:* Adoção de práticas formais de gerenciamento da função TI: projetos, riscos, mudanças, configuração e ativos, incidentes, catálogo e níveis de serviço, processo de software, conformidade, gestão de recursos de TI e avaliação das políticas de TI no processo orçamentário. Sub-conceito não enunciado pelas recomendações da ENGD, mas central no autodiagnóstico SISP e no iESGo.

*Média Nacional:* 58,5 (n=12; 12 itens).

**Indicadores:**

*iESGo 2024 (TCU):*

- **iESGo 4221**. A organização elabora um catálogo de serviços de tecnologia da informação e monitora níveis de serviço
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 53,93
  - Valor (Federal): 53,93

- **iESGo 4222**. A organização executa processo de gestão de mudanças
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 52,30
  - Valor (Federal): 52,30

- **iESGo 4223**. A organização executa processo de gestão de configuração e ativos (de serviços de tecnologia da informação)
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 37,13
  - Valor (Federal): 37,13

- **iESGo 4224**. A organização executa processo(s) de gestão de incidentes de serviços de tecnologia da informação e de incidentes de segurança da informação
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 56,37
  - Valor (Federal): 56,37

- **iESGo 4261**. A organização executa um processo de software
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 59,35
  - Valor (Federal): 59,35

- **iESGo 4262**. A organização executa processo de gestão de projetos de tecnologia da informação
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 56,10
  - Valor (Federal): 56,10

*iGovSISP 2026 (SGD/MGI):*

- **G105GP**. O Gerenciamento de Projetos de TI no órgão é executado segundo as melhores práticas e metodologias aplicáveis? (Ex.: PMBOK, Kanban, Cascata, Scrum, PRINCE2, Lean, etc).
  - *Normalização:* Proporção de concordância parcial ou total entre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 76,47
  - Valor (Federal): 76,47

- **G109GP**. A avaliação das políticas públicas de TI executadas pelo órgão (ou com sua participação) é incorporada no processo orçamentário.
  - *Normalização:* Proporção de concordância parcial ou total entre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 48,32
  - Valor (Federal): 48,32

- **G111GP**. O órgão faz uso de uma estrutura padrão (framework) para identificar e gerenciar riscos e interdependências comuns que possam afetar as entregas de TI dentro do prazo e do orçamento.
  - *Normalização:* Proporção de concordância parcial ou total entre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 46,64
  - Valor (Federal): 46,64

- **G112GP**. Os recursos de TI (hardware, software, pessoal) do órgão são gerenciados de forma eficiente para otimizar custos e desempenho.
  - *Normalização:* Proporção de concordância parcial ou total entre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 85,71
  - Valor (Federal): 85,71

- **G115GP**. O órgão realiza avaliações regulares de conformidade na área de TI para garantir a eficácia nas operações.
  - *Normalização:* Proporção de concordância parcial ou total entre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 55,46
  - Valor (Federal): 55,46

- **G116GP**. O órgão mantém registros precisos e atualizados dos ativos de TI, incluindo inventário e manutenção.
  - *Normalização:* Proporção de concordância parcial ou total entre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 74,79
  - Valor (Federal): 74,79

### 4.3.5 Pessoas e força de trabalho em TI nos órgãos federais

*Definição:* Dimensionamento da força de trabalho em TI no planejamento do PDTIC: estimativa do quantitativo mínimo de pessoal por competência e análise de quanto da demanda pode ser suprida por compartilhamento de recursos, estágio, automação ou contratação de serviços. Os dois itens do PDTIC sobre o dimensionamento do pessoal ficam nesta dimensão, e não em Estratégia e planejamento, porque o objeto deles é o quantitativo da força de trabalho, e não o conteúdo do plano. Sub-conceito não enunciado pelas recomendações da ENGD, mas presente no instrumento SISP como parte da governança da função TI. Os demais recortes de pessoas e competências (desempenho da força de trabalho de TIC por área de conhecimento, vínculo efetivo dos titulares de funções de TI, plano e execução da capacitação, áreas temáticas das capacitações e incentivos ao desenvolvimento de competências) estão no Objetivo 10 (Capítulo 13), que é o objetivo em que o tema das competências é tratado.

*Média Nacional:* 40,8 (n=1; 2 itens).

**Indicadores:**

*iGovSISP 2026 (SGD/MGI):*

- **G106GPL**. O órgão estimou a quantidade mínima de pessoal por competência considerando as necessidades mais prioritárias previstas no PDTIC e os riscos relacionados a sua falta? (Guia do PDTIC do SISP, p. 85)
  - *Normalização:* Proporção de respostas Sim sobre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 38,24
  - Valor (Federal): 38,24

- **G106GPN**. O órgão analisou em que medida a demanda (ou a parte menos especializada dela) pode ser suprida com compartilhamento de recursos, programas de estágio, automações (IA, cloud, etc) ou contratações de serviços?
  - *Normalização:* Proporção de respostas Sim sobre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 43,28
  - Valor (Federal): 43,28


*Esta seção apresenta 2 dos 8 indicadores de uma mesma bateria no objetivo. A média dimensional usa os itens desta seção; o índice do objetivo agrega a bateria uma só vez, conforme o Capítulo 3.*

### 4.3.6 Cooperação interfederativa

*Definição:* Iniciativas dos governos estaduais para apoiar a transformação digital dos municípios. Corresponde à ementa do Objetivo 1, que pede a colaboração entre União, Distrito Federal, estados e municípios. Nenhuma recomendação do objetivo trata desse apoio: a Recomendação 1.6 pede governança interfederativa dos serviços executados por mais de um ente, com responsabilidades, níveis de serviço e padrões de integração, e a variável não mede esse conteúdo.

*Média Nacional:* 84,6 (n=1; 1 item).

**Indicadores:**

*IOSPD 2026 (ABEP-TIC):*

- **5.6**. O ESTADO POSSUI INICIATIVA OU PROGRAMA PARA APOIAR A TRANSFORMAÇÃO DIGITAL DOS SEUS MUNICÍPIOS?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 84,62
  - Valor (Estadual): 84,62 (média de 26 UFs)

### 4.3.7 Recorte Estadual

*Definição:* Conjunto das variáveis do Objetivo 1 com observação por UF, agregadas para leitura federativa estadual. Reúne 4 variáveis IOSPD. Inclui variáveis também classificadas em dimensões temáticas (única exceção à regra de não-repetição). As perguntas estão nas dimensões temáticas indicadas na tabela.

*Média Estadual:* 90,7 (n=4; 4 itens).

![Recorte Estadual do Objetivo 1](../graficos/recortes/cap04_estadual.png)

<!-- federal:tabela-estadual -->
*Tabela 3. Indicadores do Recorte Estadual do Objetivo 1, com a dimensão temática da pergunta e o valor estadual*

| Código | Fonte | Pergunta na dimensão | Valor (Estadual) |
|---|---|---|---:|
| `1.2` | IOSPD | 4.3.1 Estrutura de governança | 99,04 |
| `1.3` | IOSPD | 4.3.1 Estrutura de governança | 96,15 |
| `1.1` | IOSPD | 4.3.2 Estratégia e planejamento | 83,01 |
| `5.6` | IOSPD | 4.3.6 Cooperação interfederativa | 84,62 |
<!-- /federal:tabela-estadual -->

<!-- federal:secao -->
### 4.3.8 Recorte Federal

*Definição:* Conjunto das variáveis do Objetivo 1 com observação dos órgãos federais, agregadas para leitura do governo federal como ente único. Reúne as 4 variáveis TIC Governo Eletrônico, as 11 variáveis iESGo e as 22 variáveis iGovSISP do objetivo. Inclui variáveis também classificadas em dimensões temáticas (única exceção à regra de não-repetição). As perguntas estão nas dimensões temáticas indicadas na tabela.

*Média Federal:* 69,1 (n=30; 37 itens).

*Tabela 4. Indicadores do Recorte Federal do Objetivo 1, com a dimensão temática da pergunta e o valor federal (TIC Gov.: TIC Governo Eletrônico)*

| Código | Fonte | Pergunta na dimensão | Valor (Federal) |
|---|---|---|---:|
| `B1` | TIC Gov. | 4.3.1 Estrutura de governança | 99,29 |
| `B7A` | TIC Gov. | 4.3.1 Estrutura de governança | 93,57 |
| `B5A`, Plano estratégico de TI | TIC Gov. | 4.3.2 Estratégia e planejamento | 97,14 |
| `B5A`, Plano ou estratégia de transformação digital ou governo digital | TIC Gov. | 4.3.2 Estratégia e planejamento | 79,29 |
| `iESGo 2133` | iESGo | 4.3.1 Estrutura de governança | 76,42 |
| `iESGo 2153` | iESGo | 4.3.1 Estrutura de governança | 59,89 |
| `iESGo 3132C` | iESGo | 4.3.1 Estrutura de governança | 60,70 |
| `iESGo 4211` | iESGo | 4.3.2 Estratégia e planejamento | 82,93 |
| `iESGo 4212` | iESGo | 4.3.2 Estratégia e planejamento | 84,01 |
| `iESGo 4221` | iESGo | 4.3.4 Gestão e maturidade de processos de TI nos órgãos federais | 53,93 |
| `iESGo 4222` | iESGo | 4.3.4 Gestão e maturidade de processos de TI nos órgãos federais | 52,30 |
| `iESGo 4223` | iESGo | 4.3.4 Gestão e maturidade de processos de TI nos órgãos federais | 37,13 |
| `iESGo 4224` | iESGo | 4.3.4 Gestão e maturidade de processos de TI nos órgãos federais | 56,37 |
| `iESGo 4261` | iESGo | 4.3.4 Gestão e maturidade de processos de TI nos órgãos federais | 59,35 |
| `iESGo 4262` | iESGo | 4.3.4 Gestão e maturidade de processos de TI nos órgãos federais | 56,10 |
| `G101GP` | iGovSISP | 4.3.1 Estrutura de governança | 84,87 |
| `G103GP` | iGovSISP | 4.3.1 Estrutura de governança | 90,76 |
| `G213SPD` | iGovSISP | 4.3.2 Estratégia e planejamento | 72,69 |
| `G225SPD` | iGovSISP | 4.3.2 Estratégia e planejamento | 63,45 |
| `G102GP` | iGovSISP | 4.3.2 Estratégia e planejamento | 92,02 |
| `G106GPE` | iGovSISP | 4.3.2 Estratégia e planejamento | 86,13 |
| `G106GPG` | iGovSISP | 4.3.2 Estratégia e planejamento | 78,57 |
| `G106GPH` | iGovSISP | 4.3.2 Estratégia e planejamento | 61,34 |
| `G106GPQ` | iGovSISP | 4.3.2 Estratégia e planejamento | 56,09 |
| `G106GPR` | iGovSISP | 4.3.2 Estratégia e planejamento | 60,08 |
| `G146GP` | iGovSISP | 4.3.2 Estratégia e planejamento | 86,13 |
| `G107GP` | iGovSISP | 4.3.3 Recursos e contratações nos órgãos federais | 28,99 |
| `G106GPP` | iGovSISP | 4.3.3 Recursos e contratações nos órgãos federais | 64,71 |
| `G114GP` | iGovSISP | 4.3.3 Recursos e contratações nos órgãos federais | 55,88 |
| `G105GP` | iGovSISP | 4.3.4 Gestão e maturidade de processos de TI nos órgãos federais | 76,47 |
| `G109GP` | iGovSISP | 4.3.4 Gestão e maturidade de processos de TI nos órgãos federais | 48,32 |
| `G111GP` | iGovSISP | 4.3.4 Gestão e maturidade de processos de TI nos órgãos federais | 46,64 |
| `G112GP` | iGovSISP | 4.3.4 Gestão e maturidade de processos de TI nos órgãos federais | 85,71 |
| `G115GP` | iGovSISP | 4.3.4 Gestão e maturidade de processos de TI nos órgãos federais | 55,46 |
| `G116GP` | iGovSISP | 4.3.4 Gestão e maturidade de processos de TI nos órgãos federais | 74,79 |
| `G106GPL` | iGovSISP | 4.3.5 Pessoas e força de trabalho em TI nos órgãos federais | 38,24 |
| `G106GPN` | iGovSISP | 4.3.5 Pessoas e força de trabalho em TI nos órgãos federais | 43,28 |
<!-- /federal:secao -->
