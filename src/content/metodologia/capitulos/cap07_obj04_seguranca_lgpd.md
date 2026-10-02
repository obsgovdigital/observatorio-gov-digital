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

O Objetivo 4 conta com 33 variáveis ativas no índice (4 da ESTADIC (IBGE), 9 do iESGo (TCU), 1 do IOSPD (ABEP-TIC), 5 da MUNIC (IBGE), 6 da TIC Governo Eletrônico (CETIC.br) e 8 da TIC Saúde (CETIC.br)), que entram na agregação do índice como 25 componentes (ver Capítulo 3). Todas contribuem para a visão Nacional, 5 têm observação por UF (4 ESTADIC 2024 e `IOSPD_III07`) e 5 têm observação por capital (5 MUNIC 2024). Como cada nível federativo dispõe de ≥2 variáveis, este capítulo cria as duas dimensões federativas dedicadas — `Recorte Estadual` e `Recorte de Capitais` — ao lado das dimensões temáticas. Ambas mantêm-se sem subdivisão (≤10 variáveis cada).

## 7.3 Dimensões

As 33 variáveis ativas do Objetivo 4 foram organizadas em seis dimensões temáticas, complementadas pelas dimensões federativas `Recorte Estadual` e `Recorte de Capitais`. As dimensões temáticas dialogam com as recomendações 4.1 a 4.5 da Portaria — cobrindo governança e responsabilidades nomeadas, planos formais e diagnóstico, práticas LGPD substantivas, controles e auditoria, resposta a incidentes e capacitação. Os recortes repetem as cinco variáveis observadas em cada nível para leitura federativa.

![Dimensões do Objetivo 4](../graficos/dimensoes/cap07.png)

### 7.3.1 Governança e responsabilidades

*Definição:* Existência de comitê e gestor institucional de segurança da informação, de área ou pessoa responsável pela LGPD e de regulamentação local que define papéis e responsabilidades. Corresponde às Recomendações 4.1 e 4.3.

*Média Nacional:* 47.5 (n=8; 8 itens).

**Indicadores:**

*TIC Governo Eletrônico 2023 (CETIC.br):*

- **G1** — O órgão/prefeitura possui pessoa ou área responsável pela LGPD?
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual) — ver Seção 3.3.4.
  - Valor (Nacional): 50.27

*iESGo 2024 (TCU):*

- **iESGo 4242** — A organização dispõe de comitê de segurança da informação.
  - *Normalização:* Índice 0-100 — usado diretamente
  - Valor (Nacional): 62.45

- **iESGo 4243** — A organização possui um gestor institucional de segurança da informação.
  - *Normalização:* Índice 0-100 — usado diretamente
  - Valor (Nacional): 50.69

*ESTADIC 2024 (IBGE):*

- **ESTADIC_LGPD_RESP** — Área/pessoa responsável pela implementação da LGPD — existência?
  - *Normalização:* Binário Sim/Não — Sim=100, Não=0.
  - Valor (Nacional): 85.19
  - Valor (Estadual): 85.2 (média das 27 UFs)

- **ESTADIC_LGPD_REGULAMENT** — Regulamentação ou lei estadual específica sobre LGPD que identifica papéis/responsabilidades — existência?
  - *Normalização:* Binário Sim/Não — Sim=100, Não=0.
  - Valor (Nacional): 66.67
  - Valor (Estadual): 66.7 (média das 27 UFs)

*MUNIC 2024 (IBGE):*

- **MUNIC_LGPD** — A área de comunicação exerce a função de disseminação da aplicação e orientações para a população de como o município cumpre a LGPD?
  - *Normalização:* Binário Sim/Não — Sim=100, Não=0.
  - Valor (Nacional): 12.96
  - Valor (Capitais): 51.85 (14/27 capitais)

- **MUNIC_LGPD_RESP** — A prefeitura possui área ou pessoa responsável pela coleta, armazenamento, uso de dados pessoais e pela implementação das diretrizes da LGPD?
  - *Normalização:* Binário Sim/Não — Sim=100, Não=0.
  - Valor (Nacional): 27.85
  - Valor (Capitais): 77.78 (21/27 capitais)

- **MUNIC_LGPD_REGULAMENT** — A prefeitura possui regulamentação ou lei municipal específica sobre a LGPD que identifica papéis e responsabilidades?
  - *Normalização:* Binário Sim/Não — Sim=100, Não=0.
  - Valor (Nacional): 23.88
  - Valor (Capitais): 81.48 (22/27 capitais)

### 7.3.2 Planos, políticas e diagnóstico

*Definição:* Existência de política de segurança da informação nas organizações federais e nos estabelecimentos de saúde. Essa política aproxima o planejamento de segurança, sem demonstrar o plano de ação abrangente ou todos os diagnósticos exigidos. Corresponde à Recomendação 4.2.

*Média Nacional:* 55.1 (n=2; 2 itens).

**Indicadores:**

*TIC Saúde 2024 (CETIC.br):*

- **A8** — O estabelecimento de saúde que utilizou Internet nos últimos 12 meses possui política de segurança da informação? (C8a questionário)
  - *Normalização:* Proporção 0-100% — usado diretamente.
  - Valor (Nacional): 41.64

*iESGo 2024 (TCU):*

- **iESGo 4241** — A organização dispõe de uma política de segurança da informação.
  - *Normalização:* Índice 0-100 — usado diretamente
  - Valor (Nacional): 68.48

### 7.3.3 Proteção de dados pessoais — práticas LGPD

*Definição:* Adoção das práticas substantivas exigidas pela LGPD — nomeação de encarregado pelo tratamento de dados pessoais (DPO), canal de atendimento para titulares, política de privacidade publicada, documento de papéis e responsabilidades sobre a lei, plano de resposta a incidentes envolvendo dados pessoais, campanha interna de conscientização, gestão de riscos de privacidade e portal único com funcionalidade de consentimento. Corresponde à Recomendação 4.2 (vertente LGPD).

*Média Nacional:* 45.0 (n=5; 13 itens).

**Indicadores:**

*TIC Governo Eletrônico 2023 (CETIC.br):*

*Bateria — práticas LGPD adotadas pelo órgão público ou pela prefeitura: os 5 itens a seguir entram no índice como um único componente (média dos itens observados; ver Capítulo 3).*

- **G3_A** — O órgão público ou a prefeitura nomeou encarregado pelo tratamento de dados pessoais ou Data Protection Officer (DPO)? (G3 item A)
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual) — ver Seção 3.3.4.
  - Valor (Nacional): 35.23

- **G3_B** — O órgão público ou a prefeitura disponibilizou canal de atendimento pela Internet para mensagens sobre o uso de dados pessoais? (G3 item B)
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual) — ver Seção 3.3.4.
  - Valor (Nacional): 46.12

- **G3_C** — O órgão público publicou na Internet sua política de privacidade com as hipóteses ou bases legais para o tratamento de dados pessoais? (G3 item C dos órgãos em 2023)
  - *Normalização:* Proporção 0-100% sobre o universo de órgãos públicos — usado diretamente.
  - Valor (Nacional): 44.45

- **G3_C_PREF** — A prefeitura possui documento formalmente instituído que identifica os papéis e as responsabilidades de áreas ou setores da prefeitura sobre a LGPD? (G3 item C das prefeituras em 2023; identidade distinta da política de privacidade medida nos órgãos)
  - *Normalização:* Proporção 0-100% sobre o universo de prefeituras — usado diretamente.
  - Valor (Nacional): 28.62

- **G3_D** — O órgão público implementou plano de resposta a incidentes de segurança da informação relacionados a dados pessoais? (G3 item D dos órgãos em 2023)
  - *Normalização:* Proporção 0-100% sobre o universo de órgãos públicos — usado diretamente.
  - Valor (Nacional): 31.68

*TIC Saúde 2024 (CETIC.br):*

*Bateria — práticas LGPD adotadas pelo estabelecimento de saúde: os 5 itens a seguir entram no índice como um único componente (média dos itens observados; ver Capítulo 3).*

- **A12_A** — O estabelecimento de saúde que utilizou Internet nomeou encarregado de dados pessoais ou Data Protection Officer (DPO)? (A12 item A; C10_A no questionário)
  - *Normalização:* Proporção 0-100% — usado diretamente.
  - Valor (Nacional): 29.63

- **A12_B** — O estabelecimento de saúde que utilizou Internet disponibilizou canal online para titulares enviarem mensagens sobre o uso de seus dados pessoais? (A12 item B; C10_B no questionário)
  - *Normalização:* Proporção 0-100% — usado diretamente.
  - Valor (Nacional): 30.57

- **A12_C** — O estabelecimento de saúde que utilizou Internet publicou sua política de privacidade no website do estabelecimento ou da secretaria de saúde? (A12 item C; C10_C no questionário)
  - *Normalização:* Proporção 0-100% — usado diretamente.
  - Valor (Nacional): 32.49

- **A12_D** — O estabelecimento de saúde que utilizou Internet realizou campanha interna sobre a LGPD com mais de 50% dos funcionários? (A12 item D; C10_E no questionário)
  - *Normalização:* Proporção 0-100% — usado diretamente.
  - Valor (Nacional): 43.58

- **A12_E** — O estabelecimento de saúde que utilizou Internet possui plano de resposta a incidentes de segurança envolvendo dados pessoais? (A12 item E; C10_F no questionário)
  - *Normalização:* Proporção 0-100% — usado diretamente.
  - Valor (Nacional): 30.57

*IOSPD 2025 (ABEP-TIC):*

- **IOSPD_III07** — A UF possui Portal Único ou de Serviços com funcionalidade de consentimento para LGPD?
  - *Normalização:* Índice 0-10 — multiplicado por 10.
  - Valor (Nacional): 40.74
  - Valor (Estadual): 40.7 (média das 27 UFs)

*ESTADIC 2024 (IBGE):*

- **ESTADIC_LGPD_CANAL_TITULAR** — Canais de atendimento pela Internet para cidadãos enviarem mensagens sobre o uso de seus dados pessoais pelo estado — disponibilização?
  - *Normalização:* Binário Sim/Não — Sim=100, Não=0.
  - Valor (Nacional): 85.19
  - Valor (Estadual): 85.2 (média das 27 UFs)

*MUNIC 2024 (IBGE):*

- **MUNIC_LGPD_CANAL_TITULAR** — A prefeitura disponibiliza canais de atendimento pela Internet para cidadãos enviarem mensagens sobre o uso de seus dados pessoais?
  - *Normalização:* Binário Sim/Não — Sim=100, Não=0.
  - Valor (Nacional): 28.40
  - Valor (Capitais): 62.96 (17/27 capitais)

### 7.3.4 Controles, riscos e auditoria

*Definição:* Práticas de gestão de riscos e segurança dos recursos de processamento, controle de acesso e classificação e tratamento da informação. Corresponde à Recomendação 4.2.

*Média Nacional:* 45.8 (n=6; 6 itens).

**Indicadores:**

*TIC Saúde 2024 (CETIC.br):*

- **A10** — O estabelecimento de saúde que utilizou Internet nos últimos 12 meses utiliza ferramentas de segurança da informação? (C9a questionário)
  - *Normalização:* Proporção 0-100% — agregação `mean` sobre as alternativas A-J (amplitude média de adoção).
  - Valor (Nacional): 53.01

*iESGo 2024 (TCU):*

- **iESGo 4231** — A organização executa processo de gestão dos riscos de tecnologia da informação relativos a processos de negócio.
  - *Normalização:* Índice 0-100 — usado diretamente
  - Valor (Nacional): 43.70

- **iESGo 4232** — A organização executa processo de gestão de riscos de segurança da informação.
  - *Normalização:* Índice 0-100 — usado diretamente
  - Valor (Nacional): 40.43

- **iESGo 4251** — A organização executa processo de controle de acesso à informação e aos ativos associados à informação.
  - *Normalização:* Índice 0-100 — usado diretamente
  - Valor (Nacional): 43.48

- **iESGo 4252** — A organização executa processo para classificação e tratamento de informações.
  - *Normalização:* Índice 0-100 — usado diretamente
  - Valor (Nacional): 39.56

- **iESGo 4253** — A organização executa atividades de gestão da segurança dos recursos de processamento da informação, inclusive dos recursos de computação em nuvem.
  - *Normalização:* Índice 0-100 — usado diretamente
  - Valor (Nacional): 54.72

### 7.3.5 Resposta a incidentes e continuidade

*Definição:* Processo de gestão da continuidade dos serviços de tecnologia da informação nas organizações federais. Não demonstra participação em redes de resposta a incidentes. Corresponde à Recomendação 4.2.

*Média Nacional:* 27.8 (n=1; 1 item).

**Indicadores:**

*iESGo 2024 (TCU):*

- **iESGo 4233** — A organização executa processo de gestão de continuidade de serviços de tecnologia da informação.
  - *Normalização:* Índice 0-100 — usado diretamente
  - Valor (Nacional): 27.79

### 7.3.6 Capacitação e conscientização

*Definição:* Ações de sensibilização, conscientização e capacitação de servidores em privacidade, proteção de dados pessoais, segurança da informação e segurança cibernética. Corresponde à Recomendação 4.4 (referência ao CEPS Gov.br).

*Média Nacional:* 44.0 (n=3; 3 itens).

**Indicadores:**

*TIC Saúde 2024 (CETIC.br):*

- **A8A** — O estabelecimento de saúde que utilizou Internet nos últimos 12 meses oferece treinamento sobre segurança da informação? (C8b questionário)
  - *Normalização:* Proporção 0-100% — usado diretamente.
  - Valor (Nacional): 47.24

*ESTADIC 2024 (IBGE):*

- **ESTADIC_LGPD_CAPACIT** — Cursos de segurança da informação e proteção de dados para servidores estaduais — disponibilização?
  - *Normalização:* Binário Sim/Não — Sim=100, Não=0.
  - Valor (Nacional): 66.67
  - Valor (Estadual): 66.7 (média das 27 UFs)

*MUNIC 2024 (IBGE):*

- **MUNIC_LGPD_CAPACIT** — A prefeitura disponibilizou nos últimos 24 meses cursos sobre segurança da informação e proteção de dados para servidores municipais?
  - *Normalização:* Binário Sim/Não — Sim=100, Não=0.
  - Valor (Nacional): 18.08
  - Valor (Capitais): 70.37 (19/27 capitais)

### 7.3.7 Recorte Estadual

*Definição:* Conjunto das variáveis do Objetivo 4 com observação por UF, agregadas para leitura federativa. Reúne as 4 variáveis do bloco LGPD da ESTADIC 2024 e a variável `IOSPD_III07` do IOSPD 2025. Inclui variáveis também classificadas em dimensões temáticas (única exceção à regra de não-repetição).

*Média Estadual:* 68.9 (n=5; 5 itens).

![Recorte Estadual — Objetivo 4](../graficos/recortes/cap07_estadual.png)

**Indicadores:**

*ESTADIC 2024 (IBGE):*

- **ESTADIC_LGPD_RESP** — Área/pessoa responsável pela implementação da LGPD — existência?
  - *Normalização:* Binário Sim/Não — Sim=100, Não=0.
  - Valor (Estadual): 85.2 (média das 27 UFs)

- **ESTADIC_LGPD_REGULAMENT** — Regulamentação ou lei estadual específica sobre LGPD que identifica papéis/responsabilidades — existência?
  - *Normalização:* Binário Sim/Não — Sim=100, Não=0.
  - Valor (Estadual): 66.7 (média das 27 UFs)

- **ESTADIC_LGPD_CANAL_TITULAR** — Canais de atendimento pela Internet para cidadãos enviarem mensagens sobre o uso de seus dados pessoais pelo estado — disponibilização?
  - *Normalização:* Binário Sim/Não — Sim=100, Não=0.
  - Valor (Estadual): 85.2 (média das 27 UFs)

- **ESTADIC_LGPD_CAPACIT** — Cursos de segurança da informação e proteção de dados para servidores estaduais — disponibilização?
  - *Normalização:* Binário Sim/Não — Sim=100, Não=0.
  - Valor (Estadual): 66.7 (média das 27 UFs)

*IOSPD 2025 (ABEP-TIC):*

- **IOSPD_III07** — A UF possui Portal Único ou de Serviços com funcionalidade de consentimento para LGPD?
  - *Normalização:* Índice 0-10 — multiplicado por 10.
  - Valor (Estadual): 40.7 (média das 27 UFs)

### 7.3.8 Recorte de Capitais

*Definição:* Conjunto das variáveis do Objetivo 4 com observação por capital, agregadas para leitura federativa. Reúne as 5 variáveis MUNIC 2024 do bloco LGPD (responsável, regulamentação, canal para titulares, capacitação e disseminação pela área de comunicação). Inclui variáveis também classificadas em dimensões temáticas (única exceção à regra de não-repetição).

*Média Capitais:* 68.9 (n=5; 5 itens).

![Recorte de Capitais — Objetivo 4](../graficos/recortes/cap07_capitais.png)

**Indicadores:**

*MUNIC 2024 (IBGE):*

- **MUNIC_LGPD** — A área de comunicação exerce a função de disseminação da aplicação e orientações para a população de como o município cumpre a LGPD?
  - *Normalização:* Binário Sim/Não — Sim=100, Não=0.
  - Valor (Capitais): 51.85 (14/27 capitais)

- **MUNIC_LGPD_RESP** — A prefeitura possui área ou pessoa responsável pela coleta, armazenamento, uso de dados pessoais e pela implementação das diretrizes da LGPD?
  - *Normalização:* Binário Sim/Não — Sim=100, Não=0.
  - Valor (Capitais): 77.78 (21/27 capitais)

- **MUNIC_LGPD_REGULAMENT** — A prefeitura possui regulamentação ou lei municipal específica sobre a LGPD que identifica papéis e responsabilidades?
  - *Normalização:* Binário Sim/Não — Sim=100, Não=0.
  - Valor (Capitais): 81.48 (22/27 capitais)

- **MUNIC_LGPD_CANAL_TITULAR** — A prefeitura disponibiliza canais de atendimento pela Internet para cidadãos enviarem mensagens sobre o uso de seus dados pessoais?
  - *Normalização:* Binário Sim/Não — Sim=100, Não=0.
  - Valor (Capitais): 62.96 (17/27 capitais)

- **MUNIC_LGPD_CAPACIT** — A prefeitura disponibilizou nos últimos 24 meses cursos sobre segurança da informação e proteção de dados para servidores municipais?
  - *Normalização:* Binário Sim/Não — Sim=100, Não=0.
  - Valor (Capitais): 70.37 (19/27 capitais)
