# 7. Objetivo 4: Segurança e LGPD

> Ampliar a resiliência e a maturidade das estruturas tecnológicas governamentais com atenção à privacidade, proteção de dados pessoais, segurança da informação e segurança cibernética.

A metodologia (normalização, agregação, tratamento de não-resposta) está descrita no Capítulo 3.

## 7.1 Recomendações da ENGD para este objetivo

A Portaria SGD/MGI nº 5.395/2026 elenca cinco recomendações aos entes federados para reforço à privacidade, proteção de dados pessoais, segurança da informação e segurança cibernética:

- **4.1** Instituir estrutura de governança e coordenação para implementação de medidas de reforço à privacidade, proteção de dados pessoais, segurança da informação e segurança cibernética, em articulação com estruturas de mesmo propósito de âmbito regional e nacional, em especial o Programa de Privacidade e Segurança da Informação - PPSI do Governo Federal.
- **4.2** Estabelecer plano de ação de reforço à privacidade, proteção de dados pessoais, segurança da informação e segurança cibernética que contemple diagnóstico, controles, metodologias e soluções tecnológicas adequadas aos riscos identificados.
- **4.3** Designar encarregado pelo tratamento de dados pessoais e gestor de segurança da informação.
- **4.4** Promover ações de sensibilização, conscientização e capacitação para agentes públicos, lideranças governamentais e sociedade sobre privacidade, proteção de dados pessoais, segurança da informação e segurança cibernética, sendo o Centro de Excelência em Privacidade e Segurança da Informação - CEPS Gov.br a unidade de referência para tais atividades.
- **4.5** Contribuir com a criação, participação e subsídio das atividades de redes nacionais, estaduais, regionais e associativas das equipes de prevenção, tratamento e resposta a incidentes cibernéticos, sendo o Centro Integrado de Segurança Cibernética do Governo Digital - CISC Gov.br a unidade de referência para tais atividades.

## 7.2 Cobertura por nível federativo

O Objetivo 4 conta com 43 variáveis ativas no índice (13 de TIC Governo Eletrônico (CETIC.br), 8 de TIC Saúde (CETIC.br), 3 de TIC Educação (CETIC.br), 9 de iESGo (TCU), 2 de IOSPD (ABEP-TIC), 4 de MUNIC (IBGE), 4 de ESTADIC (IBGE)), que entram na agregação como 31 componentes, após o colapso das baterias (ver Capítulo 3). Todas contribuem para a visão Nacional. Há 6 variáveis com observação por UF, reunidas também na dimensão `Recorte Estadual`. Há 4 variáveis com observação por capital, reunidas também na dimensão `Recorte de Capitais`.

<!-- federal:cobertura -->
No recorte federal, 21 variáveis do objetivo têm observação dos órgãos federais (12 da TIC Governo Eletrônico (CETIC.br) e 9 do iESGo (TCU)), que entram na média do recorte como 14 componentes. O limiar mínimo de dois componentes efetivos observados justifica a criação da dimensão **`Recorte Federal`**, em que a União é o único ente, sem ranking (Seção 3.1.6).
<!-- /federal:cobertura -->

## 7.3 Dimensões

As 43 variáveis ativas do Objetivo 4 foram organizadas em seis dimensões temáticas, complementadas pelas dimensões federativas `Recorte Estadual`, `Recorte de Capitais` e `Recorte Federal`. As dimensões temáticas dialogam com as Recomendações 4.1 a 4.4 da Portaria, cobrindo governança e responsabilidades nomeadas, planos formais e diagnóstico, práticas LGPD substantivas, controles e gestão de riscos, resposta a incidentes e capacitação. Os recortes repetem as seis variáveis observadas por UF e as quatro por capital para leitura federativa. O `Recorte Federal` reagrupa as variáveis com observação dos órgãos federais, com a União como ente único.

![Dimensões do Objetivo 4](../graficos/dimensoes/cap07.png)

### 7.3.1 Governança e responsabilidades

*Definição:* Existência de comitê e gestor institucional de segurança da informação, de área ou pessoa responsável pela LGPD, de regulamentação local que define papéis e responsabilidades. Corresponde às Recomendações 4.1 e 4.3.

*Média Nacional:* 59,3 (n=8; 8 itens).

**Indicadores:**

*TIC Governo Eletrônico 2025 (CETIC.br):*

- **G1**. Neste órgão público, existe uma área ou pessoa responsável por procedimentos e políticas para a coleta, armazenamento e uso de dados pessoais ou pela implementação das diretrizes da Lei Geral de Proteção de Dados Pessoais (LGPD)? / Nesta prefeitura, existe uma área ou pessoa responsável por procedimentos e políticas para a coleta, armazenamento e uso de dados pessoais ou pela implementação das diretrizes da Lei Geral de Proteção de Dados Pessoais (LGPD)?
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 58,78
  - Valor (Federal): 93,57

*iESGo 2024 (TCU):*

- **iESGo 4242**. A organização dispõe de comitê de segurança da informação
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 66,67
  - Valor (Federal): 66,67

- **iESGo 4243**. A organização possui um gestor institucional de segurança da informação
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 57,45
  - Valor (Federal): 57,45

*IOSPD 2026 (ABEP-TIC):*

- **1.10**. EXISTE UMA UNIDADE OPERACIONAL DE CIBERSEGURANÇA FORMALMENTE ESTABELECIDA E ATUALMENTE ATIVA?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 87,82
  - Valor (Estadual): 87,82 (média de 26 UFs)

*MUNIC 2024 (IBGE):*

- **Mgov32**. No município, existe uma área ou pessoa responsável por procedimentos e políticas para a coleta, armazenamento e uso de dados pessoais ou pela implementação das diretrizes da Lei Geral de Proteção de Dados Pessoais (LGPD)?
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 27,85
  - Valor (Capitais): 77,78 (21/27 capitais)

- **Mgov36**. Em relação à Lei Geral de Proteção de Dados Pessoais (LGPD): O município possui regulamentação ou lei municipal específica sobre a LGPD, que identifica os papéis e responsabilidades de áreas ou setores da prefeitura?
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 23,88
  - Valor (Capitais): 81,48 (22/27 capitais)

*ESTADIC 2024 (IBGE):*

- **Egov32**. No governo estadual, existe uma área ou pessoa responsável por procedimentos e políticas para a coleta, armazenamento e uso de dados pessoais ou pela implementação das diretrizes da Lei Geral de Proteção de Dados Pessoais (LGPD)?
  - *Contagem:* Conta como sim a categoria Sim; Não, Não sabe e sem resposta contam como não.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 85,19
  - Valor (Estadual): 85,19 (média de 27 UFs)

- **Egov36**. Em relação à Lei Geral de Proteção de Dados Pessoais (LGPD): O estado possui regulamentação ou lei estadual específica sobre a LGPD, que identifica os papéis e responsabilidades de áreas ou setores do governo?
  - *Contagem:* Conta como sim a categoria Sim; Não, Não sabe e sem resposta contam como não.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 66,67
  - Valor (Estadual): 66,67 (média de 27 UFs)

### 7.3.2 Planos, políticas e diagnóstico

*Definição:* Existência de política de segurança da informação nas organizações federais e nos estabelecimentos de saúde. Essa política aproxima o planejamento de segurança, sem demonstrar o plano de ação abrangente ou todos os diagnósticos exigidos. Corresponde à Recomendação 4.2.

*Média Nacional:* 49,9 (n=4; 4 itens).

**Indicadores:**

*TIC Governo Eletrônico 2025 (CETIC.br):*

- **B5A**. Agora gostaria de saber se este órgão possui os seguintes documentos formalmente instituídos, mesmo que tenham sido elaborados por outro órgão público. Este órgão público possui documento formalmente instituído dePlano de segurança da informação? E documento formalmente instituído de Plano de segurança da informação? / Agora gostaria de saber se a prefeitura em que o(a) sr.(a) trabalha possui os seguintes documentos formalmente instituídos. Esta prefeitura possui documento formalmente instituído dePlano de segurança da informação? E documento formalmente instituído de Plano de segurança da informação?
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 42,41
  - Valor (Federal): 89,29

*TIC Saúde 2025 (CETIC.br):*

- **A8**. O estabelecimento possui algum documento que define uma política de segurança da informação?
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 27,40

*TIC Educação 2025 (CETIC.br):*

- **H1**. A escola possui algum documento que define a política de proteção de dados e de segurança da informação?
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 54,05

*iESGo 2024 (TCU):*

- **iESGo 4241**. A organização dispõe de uma política de segurança da informação
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 75,61
  - Valor (Federal): 75,61

### 7.3.3 Proteção de dados pessoais: práticas LGPD

*Definição:* Adoção das práticas substantivas exigidas pela LGPD: nomeação de encarregado pelo tratamento de dados pessoais (DPO), canal de atendimento para titulares, política de privacidade publicada, documento de papéis e responsabilidades sobre a lei, plano de resposta a incidentes envolvendo dados pessoais, campanha interna de conscientização e portal único com funcionalidade de consentimento. Corresponde à Recomendação 4.2 (vertente LGPD).

*Média Nacional:* 44,7 (n=5; 13 itens).

**Indicadores:**

*TIC Governo Eletrônico 2025 (CETIC.br):*

- **G3**. Em relação à Lei Geral de Proteção de Dados Pessoais (LGPD), este órgão público Nomeou o encarregado de dados pessoais? / Em relação à Lei Geral de Proteção de Dados Pessoais (LGPD), esta prefeitura Nomeou o encarregado de dados pessoais?
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 44,70
  - Valor (Federal): 92,86

- **G3**. Em relação à Lei Geral de Proteção de Dados Pessoais (LGPD), este órgão público Disponibilizou canais de atendimento pela Internet para os cidadãos enviarem mensagens sobre o uso de seus dados pessoais pelo órgão público? / Em relação à Lei Geral de Proteção de Dados Pessoais (LGPD), esta prefeitura Disponibilizou canais de atendimento pela Internet para os cidadãos enviarem mensagens sobre o uso de seus dados pessoais pela prefeitura?
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 50,61
  - Valor (Federal): 78,57

- **G3**. Em relação à Lei Geral de Proteção de Dados Pessoais (LGPD), este órgão público Publicou a política de privacidade do órgão público na Internet com as hipóteses ou bases legais para tratamento de dados pessoais?
  - *Normalização:* Proporção 0-100% sobre o universo de órgãos públicos, usada diretamente; valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 52,05
  - Valor (Federal): 60,00

- **G3**. Em relação à Lei Geral de Proteção de Dados Pessoais (LGPD), esta prefeitura Possui documento formalmente instituído que identifica os papéis e as responsabilidades de áreas ou setores da prefeitura sobre a LGPD?
  - *Normalização:* Proporção 0-100% sobre o universo de prefeituras, usada diretamente.
  - Valor (Nacional): 33,94

- **G3**. Em relação à Lei Geral de Proteção de Dados Pessoais (LGPD), este órgão público Implementou um plano de resposta a incidentes de segurança da informação relacionado a dados pessoais?
  - *Normalização:* Proporção 0-100% sobre o universo de órgãos públicos, usada diretamente; valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 43,38
  - Valor (Federal): 54,29

- **G3**. Em relação à Lei Geral de Proteção de Dados Pessoais (LGPD), este órgão público Possui programa de governança em privacidade e proteção de dados pessoais?
  - *Normalização:* Proporção 0-100% sobre o universo de órgãos públicos, usada diretamente; valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 44,24
  - Valor (Federal): 54,29

*TIC Saúde 2025 (CETIC.br):*

- **A12**. Em relação a Lei Geral de Proteção de Dados Pessoais (LGPD), este estabelecimento Nomeou o encarregado de dados pessoais ou Data Protection Officer (DPO) do estabelecimento?
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 13,14

- **A12**. Em relação a Lei Geral de Proteção de Dados Pessoais (LGPD), este estabelecimento Disponibilizou canais de atendimento pela Internet para os titulares dos dados enviarem mensagens sobre o uso de seus dados pessoais pelo estabelecimento?
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 18,16

- **A12**. Em relação a Lei Geral de Proteção de Dados Pessoais (LGPD), este estabelecimento Publicou a política de privacidade no website do estabelecimento ou da secretaria de saúde?
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 28,23

- **A12**. Em relação a Lei Geral de Proteção de Dados Pessoais (LGPD), este estabelecimento Realizou campanha de conscientização interna sobre a Lei Geral de Proteção de Dados Pessoais com mais de 50% dos funcionários?
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 29,52

- **A12**. Em relação a Lei Geral de Proteção de Dados Pessoais (LGPD), este estabelecimento Implementou um plano de resposta a incidentes de segurança da informação relacionado a dados pessoais?
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 14,96

*MUNIC 2024 (IBGE):*

- **Mgov35**. Em relação à Lei Geral de Proteção de Dados Pessoais (LGPD): O município disponibilizou canais de atendimento pela Internet para os cidadãos enviarem mensagens sobre o uso de seus dados pessoais pela prefeitura?
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 28,40
  - Valor (Capitais): 62,96 (17/27 capitais)

*ESTADIC 2024 (IBGE):*

- **Egov35**. Em relação à Lei Geral de Proteção de Dados Pessoais (LGPD): O estado disponibilizou canais de atendimento pela Internet para os cidadãos enviarem mensagens sobre o uso de seus dados pessoais pelo estado?
  - *Contagem:* Conta como sim a categoria Sim; Não, Não sabe e sem resposta contam como não.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 85,19
  - Valor (Estadual): 85,19 (média de 27 UFs)


*Bateria de práticas LGPD adotadas pelo órgão público ou pela prefeitura: os 5 itens apresentados nesta seção entram no índice como um único componente (média dos itens observados; ver Capítulo 3).*


*Bateria de práticas LGPD adotadas pelo estabelecimento de saúde: os 5 itens apresentados nesta seção entram no índice como um único componente (média dos itens observados; ver Capítulo 3).*

### 7.3.4 Controles, riscos e auditoria

*Definição:* Práticas de gestão de riscos e segurança dos recursos de processamento, controle de acesso e classificação e tratamento da informação, além das ferramentas de segurança da informação usadas pelos órgãos públicos e pelos estabelecimentos de saúde. Corresponde à Recomendação 4.2.

*Média Nacional:* 51,0 (n=7; 11 itens).

**Indicadores:**

*TIC Governo Eletrônico 2025 (CETIC.br):*

- **B13**. Agora gostaria de saber se este órgão público utiliza alguma das seguintes medidas de segurança digital para acesso a dados e sistemas. Este órgão público utilizaAutenticação por meio de uma senha forte? / Agora gostaria de saber se esta prefeitura utiliza alguma das seguintes medidas de segurança digital em seus sistemas. Esta prefeitura utilizaAutenticação por meio de uma senha forte?:
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 81,26
  - Valor (Federal): 97,86

- **B13**. Agora gostaria de saber se este órgão público utiliza alguma das seguintes medidas de segurança digital para acesso a dados e sistemas. Este órgão público utilizaBackup? / Agora gostaria de saber se esta prefeitura utiliza alguma das seguintes medidas de segurança digital em seus sistemas. Esta prefeitura utilizaBackup?:
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 77,83
  - Valor (Federal): 82,14

- **B13**. Agora gostaria de saber se este órgão público utiliza alguma das seguintes medidas de segurança digital para acesso a dados e sistemas. Este órgão público utilizaRede virtual privada (VPN)? / Agora gostaria de saber se esta prefeitura utiliza alguma das seguintes medidas de segurança digital em seus sistemas. Esta prefeitura utilizaRede virtual privada (VPN)?:
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 62,85
  - Valor (Federal): 96,43

- **B13**. Agora gostaria de saber se este órgão público utiliza alguma das seguintes medidas de segurança digital para acesso a dados e sistemas. Este órgão público utilizaSistemas de detecção ou prevenção de atividades suspeitas? / Agora gostaria de saber se esta prefeitura utiliza alguma das seguintes medidas de segurança digital em seus sistemas. Esta prefeitura utilizaSistemas de detecção ou prevenção de atividades suspeitas?:
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 69,20
  - Valor (Federal): 94,29

- **B13**. Agora gostaria de saber se este órgão público utiliza alguma das seguintes medidas de segurança digital para acesso a dados e sistemas. Este órgão público utilizaTestes de segurança? / Agora gostaria de saber se esta prefeitura utiliza alguma das seguintes medidas de segurança digital em seus sistemas. Esta prefeitura utilizaTestes de segurança?:
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 57,98
  - Valor (Federal): 80,00

*TIC Saúde 2025 (CETIC.br):*

- **A10**. Quais dessas ferramentas de segurança da informação o estabelecimento utiliza? O estabelecimento utiliza ______?
  - *Contagem:* O valor é a média das proporções dos itens selecionados: Assinatura eletrônica; Arquivos e e-mails criptografados; Proteção por senha de arquivos enviados ou recebidos; Proteção por senha do acesso ao sistema eletrônico; Antivírus; Firewall; Criptografia da base de dados; Certificado digital; Biometria para acesso ao sistema eletrônico; Duplo-fator de autenticação. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 38,74

*iESGo 2024 (TCU):*

- **iESGo 4231**. A organização executa processo de gestão dos riscos de tecnologia da informação relativos a processos de negócio
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 43,90
  - Valor (Federal): 43,90

- **iESGo 4232**. A organização executa processo de gestão de riscos de segurança da informação
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 44,72
  - Valor (Federal): 44,72

- **iESGo 4251**. A organização executa processo de controle de acesso à informação e aos ativos associados à informação
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 53,39
  - Valor (Federal): 53,39

- **iESGo 4252**. A organização executa processo para classificação e tratamento de informações
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 46,07
  - Valor (Federal): 46,07

- **iESGo 4253**. A organização executa atividades de gestão da segurança dos recursos de processamento da informação, inclusive dos recursos de computação em nuvem
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 60,43
  - Valor (Federal): 60,43

### 7.3.5 Resposta a incidentes e continuidade

*Definição:* Processo de gestão da continuidade dos serviços de tecnologia da informação nas organizações federais e gestão de incidentes e continuidade nos governos estaduais. Não demonstra participação em redes de resposta a incidentes. Corresponde à Recomendação 4.2.

*Média Nacional:* 55,1 (n=2; 2 itens).

**Indicadores:**

*iESGo 2024 (TCU):*

- **iESGo 4233**. A organização executa processo de gestão de continuidade de serviços de tecnologia da informação
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 28,73
  - Valor (Federal): 28,73

*IOSPD 2026 (ABEP-TIC):*

- **1.11**. POSSUI UMA EQUIPE DE RESPOSTA A INCIDENTES (CERT) FORMALIZADA OU EQUIVALENTE?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 81,54
  - Valor (Estadual): 81,54 (média de 26 UFs)

### 7.3.6 Capacitação e conscientização

*Definição:* Ações de sensibilização, conscientização e capacitação de servidores e de profissionais dos estabelecimentos de saúde em privacidade, proteção de dados pessoais, segurança da informação e segurança cibernética. Corresponde à Recomendação 4.4 (referência ao CEPS Gov.br).

*Média Nacional:* 47,0 (n=5; 5 itens).

**Indicadores:**

*TIC Saúde 2025 (CETIC.br):*

- **A8B**. E os profissionais do estabelecimento receberam treinamento em segurança da informação?
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 31,58

*TIC Educação 2025 (CETIC.br):*

- **H2A**. Nos últimos 12 meses, esta escola recebeu orientações da Secretaria de Educação ou de outro órgão de governo sobre como lidar com dados pessoais de alunos, professores e funcionários?
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 72,63

- **H3**. Nos últimos 12 meses, esta escola realizou debates ou palestras sobre privacidade e proteção de dados?
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 45,92

*MUNIC 2024 (IBGE):*

- **Mgov34**. Em relação à Lei Geral de Proteção de Dados Pessoais (LGPD): O município disponibilizou para seus servidores cursos sobre segurança da informação em meios eletrônicos e proteção de dados nos últimos 24 meses?
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 18,08
  - Valor (Capitais): 70,37 (19/27 capitais)

*ESTADIC 2024 (IBGE):*

- **Egov34**. Em relação à Lei Geral de Proteção de Dados Pessoais (LGPD): O estado disponibilizou para seus servidores cursos sobre segurança da informação em meios eletrônicos e proteção de dados nos últimos 24 meses?
  - *Contagem:* Conta como sim a categoria Sim; Não, Não sabe e sem resposta contam como não.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 66,67
  - Valor (Estadual): 66,67 (média de 27 UFs)

### 7.3.7 Recorte Estadual

*Definição:* Conjunto das variáveis do Objetivo 4 com observação por UF, agregadas para leitura federativa estadual. Reúne 2 variáveis IOSPD e 4 variáveis ESTADIC. Inclui variáveis também classificadas em dimensões temáticas (única exceção à regra de não-repetição). As perguntas estão nas dimensões temáticas indicadas na tabela.

*Média Estadual:* 79,0 (n=6; 6 itens).

![Recorte Estadual do Objetivo 4](../graficos/recortes/cap07_estadual.png)

O Paraná não participou do IOSPD desta edição e não tem observação nessa fonte. Seu resultado utiliza somente as demais fontes disponíveis, sem dados de edição anterior, zeros ou imputação. Se não houver outra fonte no objetivo, não se publica escore do Paraná.

<!-- federal:tabela-estadual -->
*Tabela 10. Indicadores do Recorte Estadual do Objetivo 4, com a dimensão temática da pergunta e o valor estadual*

| Código | Fonte | Pergunta na dimensão | Valor (Estadual) |
|---|---|---|---:|
| `1.10` | IOSPD | 7.3.1 Governança e responsabilidades | 87,82 |
| `1.11` | IOSPD | 7.3.5 Resposta a incidentes e continuidade | 81,54 |
| `Egov32` | ESTADIC | 7.3.1 Governança e responsabilidades | 85,19 |
| `Egov36` | ESTADIC | 7.3.1 Governança e responsabilidades | 66,67 |
| `Egov35` | ESTADIC | 7.3.3 Proteção de dados pessoais: práticas LGPD | 85,19 |
| `Egov34` | ESTADIC | 7.3.6 Capacitação e conscientização | 66,67 |
<!-- /federal:tabela-estadual -->

### 7.3.8 Recorte de Capitais

*Definição:* Conjunto das variáveis do Objetivo 4 com observação por capital, agregadas para leitura federativa municipal. Reúne 4 variáveis MUNIC. Inclui variáveis também classificadas em dimensões temáticas (única exceção à regra de não-repetição). As perguntas estão nas dimensões temáticas indicadas na tabela.

*Média Capitais:* 73,1 (n=4; 4 itens).

![Recorte de Capitais do Objetivo 4](../graficos/recortes/cap07_capitais.png)

<!-- federal:tabela-capitais -->
*Tabela 11. Indicadores do Recorte de Capitais do Objetivo 4, com a dimensão temática da pergunta e o valor das capitais*

| Código | Fonte | Pergunta na dimensão | Valor (Capitais) |
|---|---|---|---:|
| `Mgov32` | MUNIC | 7.3.1 Governança e responsabilidades | 77,78 |
| `Mgov36` | MUNIC | 7.3.1 Governança e responsabilidades | 81,48 |
| `Mgov35` | MUNIC | 7.3.3 Proteção de dados pessoais: práticas LGPD | 62,96 |
| `Mgov34` | MUNIC | 7.3.6 Capacitação e conscientização | 70,37 |
<!-- /federal:tabela-capitais -->

<!-- federal:secao -->
### 7.3.9 Recorte Federal

*Definição:* Conjunto das variáveis do Objetivo 4 com observação dos órgãos federais, agregadas para leitura do governo federal como ente único. Reúne as 12 variáveis TIC Governo Eletrônico e as 9 variáveis iESGo do objetivo. Inclui variáveis também classificadas em dimensões temáticas (única exceção à regra de não-repetição). As perguntas estão nas dimensões temáticas indicadas na tabela.

*Média Federal:* 62,5 (n=14; 21 itens).

![Recorte Federal do Objetivo 4](../graficos/recortes/cap07_federal.png)

*Tabela 12. Indicadores do Recorte Federal do Objetivo 4, com a dimensão temática da pergunta e o valor federal*

| Código | Fonte | Pergunta na dimensão | Valor (Federal) |
|---|---|---|---:|
| `G1` | TIC Governo Eletrônico | 7.3.1 Governança e responsabilidades | 93,57 |
| `B5A` | TIC Governo Eletrônico | 7.3.2 Planos, políticas e diagnóstico | 89,29 |
| `G3`, Nomeação de encarregado de dados pessoais (DPO) | TIC Governo Eletrônico | 7.3.3 Proteção de dados pessoais: práticas LGPD | 92,86 |
| `G3`, Canal online sobre o uso de dados pessoais | TIC Governo Eletrônico | 7.3.3 Proteção de dados pessoais: práticas LGPD | 78,57 |
| `G3`, Política de privacidade publicada com bases legais | TIC Governo Eletrônico | 7.3.3 Proteção de dados pessoais: práticas LGPD | 60,00 |
| `G3`, Plano de resposta a incidentes relacionados a dados pessoais | TIC Governo Eletrônico | 7.3.3 Proteção de dados pessoais: práticas LGPD | 54,29 |
| `G3`, Possui programa de governança em privacidade e proteção de dados pessoais | TIC Governo Eletrônico | 7.3.3 Proteção de dados pessoais: práticas LGPD | 54,29 |
| `B13`, Autenticação por meio de uma senha forte | TIC Governo Eletrônico | 7.3.4 Controles, riscos e auditoria | 97,86 |
| `B13`, Backup | TIC Governo Eletrônico | 7.3.4 Controles, riscos e auditoria | 82,14 |
| `B13`, Rede virtual privada (VPN) | TIC Governo Eletrônico | 7.3.4 Controles, riscos e auditoria | 96,43 |
| `B13`, Sistemas de detecção ou prevenção de atividades suspeitas | TIC Governo Eletrônico | 7.3.4 Controles, riscos e auditoria | 94,29 |
| `B13`, Testes de segurança | TIC Governo Eletrônico | 7.3.4 Controles, riscos e auditoria | 80,00 |
| `iESGo 4242` | iESGo | 7.3.1 Governança e responsabilidades | 66,67 |
| `iESGo 4243` | iESGo | 7.3.1 Governança e responsabilidades | 57,45 |
| `iESGo 4241` | iESGo | 7.3.2 Planos, políticas e diagnóstico | 75,61 |
| `iESGo 4231` | iESGo | 7.3.4 Controles, riscos e auditoria | 43,90 |
| `iESGo 4232` | iESGo | 7.3.4 Controles, riscos e auditoria | 44,72 |
| `iESGo 4251` | iESGo | 7.3.4 Controles, riscos e auditoria | 53,39 |
| `iESGo 4252` | iESGo | 7.3.4 Controles, riscos e auditoria | 46,07 |
| `iESGo 4253` | iESGo | 7.3.4 Controles, riscos e auditoria | 60,43 |
| `iESGo 4233` | iESGo | 7.3.5 Resposta a incidentes e continuidade | 28,73 |
<!-- /federal:secao -->
