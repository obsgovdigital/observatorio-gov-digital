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

O Objetivo 4 conta com 33 variáveis ativas no índice (4 da ESTADIC (IBGE), 9 do iESGo (TCU), 1 do IOSPD (ABEP-TIC), 4 da MUNIC (IBGE), 7 da TIC Governo Eletrônico (CETIC.br) e 8 da TIC Saúde (CETIC.br)), que entram na agregação do índice como 25 componentes (ver Capítulo 3). Todas contribuem para a visão Nacional, 5 têm observação por UF (4 ESTADIC 2024 e `III.7`) e 4 têm observação por capital (4 MUNIC 2024). Como cada nível federativo dispõe de ≥2 variáveis, este capítulo cria as duas dimensões federativas dedicadas, `Recorte Estadual` e `Recorte de Capitais`, ao lado das dimensões temáticas. Ambas mantêm-se sem subdivisão (≤10 variáveis cada).

## 7.3 Dimensões

As 33 variáveis ativas do Objetivo 4 foram organizadas em seis dimensões temáticas, complementadas pelas dimensões federativas `Recorte Estadual` e `Recorte de Capitais`. As dimensões temáticas dialogam com as recomendações 4.1 a 4.5 da Portaria, cobrindo governança e responsabilidades nomeadas, planos formais e diagnóstico, práticas LGPD substantivas, controles e gestão de riscos, resposta a incidentes e capacitação. Os recortes repetem as cinco variáveis observadas por UF e as quatro por capital para leitura federativa.

![Dimensões do Objetivo 4](../graficos/dimensoes/cap07.png)

### 7.3.1 Governança e responsabilidades

*Definição:* Existência de comitê e gestor institucional de segurança da informação, de área ou pessoa responsável pela LGPD, de regulamentação local que define papéis e responsabilidades. Corresponde às Recomendações 4.1 e 4.3.

*Média Nacional:* 54,0 (n=7; 7 itens).

**Indicadores:**

*TIC Governo Eletrônico 2023 (CETIC.br):*

- **G1**. Neste órgão público/Nesta prefeitura, existe uma área ou pessoa responsável por procedimentos e políticas para a coleta, armazenamento e uso de dados pessoais ou pela implementação das diretrizes da Lei Geral de Proteção de Dados Pessoais (LGPD)?
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4).
  - Valor (Nacional): 50,27

*iESGo 2024 (TCU):*

- **iESGo 4242**. A organização dispõe de comitê de segurança da informação
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 66,67

- **iESGo 4243**. A organização possui um gestor institucional de segurança da informação
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 57,45

*ESTADIC 2024 (IBGE):*

- **Egov32**. No governo estadual, existe uma área ou pessoa responsável por procedimentos e políticas para a coleta, armazenamento e uso de dados pessoais ou pela implementação das diretrizes da Lei Geral de Proteção de Dados Pessoais (LGPD)?
  - *Contagem:* Conta como sim a categoria Sim; Não, Não sabe e sem resposta contam como não.
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0.
  - Valor (Nacional): 85,19
  - Valor (Estadual): 85,2 (média das 27 UFs)

- **Egov36**. Em relação à Lei Geral de Proteção de Dados Pessoais (LGPD): O estado possui regulamentação ou lei estadual específica sobre a LGPD, que identifica os papéis e responsabilidades de áreas ou setores do governo?
  - *Contagem:* Conta como sim a categoria Sim; Não, Não sabe e sem resposta contam como não.
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0.
  - Valor (Nacional): 66,67
  - Valor (Estadual): 66,7 (média das 27 UFs)

*MUNIC 2024 (IBGE):*

- **Mgov32**. No município, existe uma área ou pessoa responsável por procedimentos e políticas para a coleta, armazenamento e uso de dados pessoais ou pela implementação das diretrizes da Lei Geral de Proteção de Dados Pessoais (LGPD)?
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0.
  - Valor (Nacional): 27,85
  - Valor (Capitais): 77,78 (21/27 capitais)

- **Mgov36**. Em relação à Lei Geral de Proteção de Dados Pessoais (LGPD): O município possui regulamentação ou lei municipal específica sobre a LGPD, que identifica os papéis e responsabilidades de áreas ou setores da prefeitura?
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0.
  - Valor (Nacional): 23,88
  - Valor (Capitais): 81,48 (22/27 capitais)

### 7.3.2 Planos, políticas e diagnóstico

*Definição:* Existência de política de segurança da informação nas organizações federais e nos estabelecimentos de saúde. Essa política aproxima o planejamento de segurança, sem demonstrar o plano de ação abrangente ou todos os diagnósticos exigidos. Corresponde à Recomendação 4.2.

*Média Nacional:* 45,1 (n=3; 3 itens).

**Indicadores:**

*TIC Saúde 2024 (CETIC.br):*

- **A8**. O estabelecimento possui algum documento que define uma política de segurança da informação?
  - *Normalização:* Piso sobre a população inteira, com os casos fora do filtro contados como resposta negativa (ver Seção 3.2.4).
  - *Contagem:* Categorias: Sim, Não, Não sabe e Não respondeu; só Sim conta. O percentual condicionado é multiplicado pela proporção de Sim do filtro no mesmo estrato, em cadeia quando necessário; quem ficou fora do filtro conta como resposta negativa. O resultado é um piso sobre a população inteira dos estabelecimentos públicos, conforme a Seção 3.2.4.
  - Valor (Nacional): 26,14

*iESGo 2024 (TCU):*

- **iESGo 4241**. A organização dispõe de uma política de segurança da informação
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 75,61

*TIC Governo Eletrônico 2023 (CETIC.br):*

- **B5A**. Órgãos: Agora gostaria de saber se o órgão público em que o sr.(a) trabalha possui os seguintes documentos formalmente instituídos, mesmo que tenham sido desenvolvidos por outro órgão público. Este órgão público possui documento formalmente instituído de Plano de segurança da informação? Prefeituras: Agora gostaria de saber se a prefeitura em que o(a) senhor(a) trabalha possui os seguintes documentos formalmente instituídos. Esta prefeitura possui documento formalmente instituído de Plano de segurança da informação?
  - *Normalização:* Piso sobre a população inteira, com os casos fora do filtro contados como resposta negativa (ver Seção 3.2.4).
  - *Contagem:* Categorias: Sim, Não, Não sabe e Não respondeu; só Sim conta. O percentual condicionado é multiplicado pela proporção de Sim do filtro no mesmo estrato, em cadeia quando necessário; quem ficou fora do filtro conta como resposta negativa. O resultado é um piso sobre a população inteira dos órgãos e das prefeituras, conforme a Seção 3.2.4.
  - Valor (Nacional): 33,43

### 7.3.3 Proteção de dados pessoais: práticas LGPD

*Definição:* Adoção das práticas substantivas exigidas pela LGPD: nomeação de encarregado pelo tratamento de dados pessoais (DPO), canal de atendimento para titulares, política de privacidade publicada, documento de papéis e responsabilidades sobre a lei, plano de resposta a incidentes envolvendo dados pessoais, campanha interna de conscientização e portal único com funcionalidade de consentimento. Corresponde à Recomendação 4.2 (vertente LGPD).

*Média Nacional:* 42,3 (n=5; 13 itens).

**Indicadores:**

*TIC Governo Eletrônico 2023 (CETIC.br):*

*Bateria de práticas LGPD adotadas pelo órgão público ou pela prefeitura: os 5 itens a seguir entram no índice como um único componente (média dos itens observados; ver Capítulo 3).*

- **G3**. Em relação à Lei Geral de Proteção de Dados Pessoais (LGPD), este órgão público/esta prefeitura Nomeou o Encarregado de dados pessoais ou DPO do órgão/da prefeitura?
  - *Normalização:* Proporção 0-100% sobre o universo de órgãos públicos, usada diretamente.
  - Valor (Nacional): 35,23

- **G3**. Em relação à Lei Geral de Proteção de Dados Pessoais (LGPD), este órgão público/esta prefeitura Disponibilizou canais de atendimento pela Internet para os cidadãos enviarem mensagens sobre o uso de seus dados pessoais pelo órgão/pela prefeitura?
  - *Normalização:* Proporção 0-100% sobre o universo de órgãos públicos, usada diretamente.
  - Valor (Nacional): 46,12

- **G3**. Em relação à Lei Geral de Proteção de Dados Pessoais (LGPD), este órgão público Publicou a Política de Privacidade do órgão na Internet com as hipóteses ou bases legais para tratamento de dados pessoais?
  - *Normalização:* Proporção 0-100% sobre o universo de órgãos públicos, usada diretamente.
  - Valor (Nacional): 44,45

- **G3**. Em relação à Lei Geral de Proteção de Dados Pessoais (LGPD), esta prefeitura Possui documento formalmente instituído que identifica os papéis e responsabilidades de áreas ou setores da prefeitura sobre a LGPD?
  - *Normalização:* Proporção 0-100% sobre o universo de órgãos públicos, usada diretamente.
  - Valor (Nacional): 28,62

- **G3**. Em relação à Lei Geral de Proteção de Dados Pessoais (LGPD), este órgão público Implementou um plano de resposta a incidentes de segurança da informação relacionado a dados pessoais?
  - *Normalização:* Proporção 0-100% sobre o universo de órgãos públicos, usada diretamente.
  - Valor (Nacional): 31,68

*TIC Saúde 2024 (CETIC.br):*

*Bateria de práticas LGPD adotadas pelo estabelecimento de saúde: os 5 itens a seguir entram no índice como um único componente (média dos itens observados; ver Capítulo 3).*

- **A12**. Em relação a Lei Geral de Proteção de Dados Pessoais (LGPD), este estabelecimento Nomeou o Encarregado de Dados Pessoais ou DPO do estabelecimento?
  - *Normalização:* Piso sobre a população inteira, com os casos fora do filtro contados como resposta negativa (ver Seção 3.2.4).
  - *Contagem:* Categorias: Sim, Não, Não sabe e Não respondeu; só Sim conta. O percentual condicionado é multiplicado pela proporção de Sim do filtro no mesmo estrato, em cadeia quando necessário; quem ficou fora do filtro conta como resposta negativa. O resultado é um piso sobre a população inteira dos estabelecimentos públicos, conforme a Seção 3.2.4.
  - Valor (Nacional): 14,23

- **A12**. Em relação a Lei Geral de Proteção de Dados Pessoais (LGPD), este estabelecimento Disponibilizou canais de atendimento pela Internet para os titulares dos dados enviarem mensagens sobre o uso de seus dados pessoais pelo estabelecimento?
  - *Normalização:* Piso sobre a população inteira, com os casos fora do filtro contados como resposta negativa (ver Seção 3.2.4).
  - *Contagem:* Categorias: Sim, Não, Não sabe e Não respondeu; só Sim conta. O percentual condicionado é multiplicado pela proporção de Sim do filtro no mesmo estrato, em cadeia quando necessário; quem ficou fora do filtro conta como resposta negativa. O resultado é um piso sobre a população inteira dos estabelecimentos públicos, conforme a Seção 3.2.4.
  - Valor (Nacional): 17,69

- **A12**. Em relação a Lei Geral de Proteção de Dados Pessoais (LGPD), este estabelecimento Publicou a Política de Privacidade no website do estabelecimento ou no website da secretaria de saúde, com as possibilidades para tratamento de dados pessoais?
  - *Normalização:* Piso sobre a população inteira, com os casos fora do filtro contados como resposta negativa (ver Seção 3.2.4).
  - *Contagem:* Categorias: Sim, Não, Não sabe e Não respondeu; só Sim conta. O percentual condicionado é multiplicado pela proporção de Sim do filtro no mesmo estrato, em cadeia quando necessário; quem ficou fora do filtro conta como resposta negativa. O resultado é um piso sobre a população inteira dos estabelecimentos públicos, conforme a Seção 3.2.4.
  - Valor (Nacional): 26,59

- **A12**. Em relação a Lei Geral de Proteção de Dados Pessoais (LGPD), este estabelecimento Realizou campanha de conscientização interna sobre a Lei Geral de Proteção de Dados com mais de 50% dos funcionários?
  - *Normalização:* Piso sobre a população inteira, com os casos fora do filtro contados como resposta negativa (ver Seção 3.2.4).
  - *Contagem:* Categorias: Sim, Não, Não sabe e Não respondeu; só Sim conta. O percentual condicionado é multiplicado pela proporção de Sim do filtro no mesmo estrato, em cadeia quando necessário; quem ficou fora do filtro conta como resposta negativa. O resultado é um piso sobre a população inteira dos estabelecimentos públicos, conforme a Seção 3.2.4.
  - Valor (Nacional): 27,52

- **A12**. Em relação a Lei Geral de Proteção de Dados Pessoais (LGPD), este estabelecimento Implementou um plano de resposta a incidentes de segurança da informação relacionado a dados pessoais?
  - *Normalização:* Piso sobre a população inteira, com os casos fora do filtro contados como resposta negativa (ver Seção 3.2.4).
  - *Contagem:* Categorias: Sim, Não, Não sabe e Não respondeu; só Sim conta. O percentual condicionado é multiplicado pela proporção de Sim do filtro no mesmo estrato, em cadeia quando necessário; quem ficou fora do filtro conta como resposta negativa. O resultado é um piso sobre a população inteira dos estabelecimentos públicos, conforme a Seção 3.2.4.
  - Valor (Nacional): 13,83

*IOSPD 2025 (ABEP-TIC):*

- **III.7**. A UF possui Portal Único ou de Serviços com funcionalidade de consentimento para LGPD?
  - *Normalização:* Índice 0-10, multiplicado por 10.
  - Valor (Nacional): 40,74
  - Valor (Estadual): 40,7 (média das 27 UFs)

*ESTADIC 2024 (IBGE):*

- **Egov35**. Em relação à Lei Geral de Proteção de Dados Pessoais (LGPD): O estado disponibilizou canais de atendimento pela Internet para os cidadãos enviarem mensagens sobre o uso de seus dados pessoais pelo estado?
  - *Contagem:* Conta como sim a categoria Sim; Não, Não sabe e sem resposta contam como não.
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0.
  - Valor (Nacional): 85,19
  - Valor (Estadual): 85,2 (média das 27 UFs)

*MUNIC 2024 (IBGE):*

- **Mgov35**. Em relação à Lei Geral de Proteção de Dados Pessoais (LGPD): O município disponibilizou canais de atendimento pela Internet para os cidadãos enviarem mensagens sobre o uso de seus dados pessoais pela prefeitura?
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0.
  - Valor (Nacional): 28,40
  - Valor (Capitais): 62,96 (17/27 capitais)

### 7.3.4 Controles, riscos e auditoria

*Definição:* Práticas de gestão de riscos e segurança dos recursos de processamento, controle de acesso e classificação e tratamento da informação, além das ferramentas de segurança da informação usadas pelos estabelecimentos de saúde. Corresponde à Recomendação 4.2.

*Média Nacional:* 48,1 (n=6; 6 itens).

**Indicadores:**

*TIC Saúde 2024 (CETIC.br):*

- **A10**. Quais dessas ferramentas de segurança da informação o estabelecimento utiliza? O estabelecimento utiliza [...]?
  - *Normalização:* Piso sobre a população inteira, com os casos fora do filtro contados como resposta negativa (ver Seção 3.2.4).
  - *Contagem:* Não há sim por estabelecimento: o valor é a média das proporções de Sim nos itens Assinatura eletrônica; Arquivos e e-mails criptografados; Proteção por senha de arquivos enviados ou recebidos; Proteção por senha do acesso ao sistema eletrônico; Antivírus; Firewall; Criptografia da base de dados; Certificado digital; Biometria para acesso ao sistema eletrônico, como, por exemplo, reconhecimento facial ou digital; Duplo-fator de autenticação. O percentual condicionado é multiplicado pela proporção de Sim do filtro no mesmo estrato, em cadeia quando necessário; quem ficou fora do filtro conta como resposta negativa. O resultado é um piso sobre a população inteira dos estabelecimentos públicos, conforme a Seção 3.2.4.
  - Valor (Nacional): 39,92

*iESGo 2024 (TCU):*

- **iESGo 4231**. A organização executa processo de gestão dos riscos de tecnologia da informação relativos a processos de negócio
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 43,90

- **iESGo 4232**. A organização executa processo de gestão de riscos de segurança da informação
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 44,72

- **iESGo 4251**. A organização executa processo de controle de acesso à informação e aos ativos associados à informação
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 53,39

- **iESGo 4252**. A organização executa processo para classificação e tratamento de informações
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 46,07

- **iESGo 4253**. A organização executa atividades de gestão da segurança dos recursos de processamento da informação, inclusive dos recursos de computação em nuvem
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 60,43

### 7.3.5 Resposta a incidentes e continuidade

*Definição:* Processo de gestão da continuidade dos serviços de tecnologia da informação nas organizações federais. Não demonstra participação em redes de resposta a incidentes. Corresponde à Recomendação 4.2.

*Média Nacional:* 28,7 (n=1; 1 item).

**Indicadores:**

*iESGo 2024 (TCU):*

- **iESGo 4233**. A organização executa processo de gestão de continuidade de serviços de tecnologia da informação
  - *Contagem:* O valor é a proporção das 369 organizações respondentes, sem as 18 do Poder "Paraestatal", que receberam do TCU nota a partir de 0,4 na questão, o limite inferior do estágio intermediário de capacidade. A nota vai de 0 a 1: parte da categoria de adoção declarada (não adota = 0; há decisão formal ou plano = 0,05; adota em menor parte = 0,15; adota parcialmente = 0,5; adota em grande parte ou totalmente = 1) e desconta as subquestões não marcadas.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 28,73

### 7.3.6 Capacitação e conscientização

*Definição:* Ações de sensibilização, conscientização e capacitação de servidores e de profissionais dos estabelecimentos de saúde em privacidade, proteção de dados pessoais, segurança da informação e segurança cibernética. Corresponde à Recomendação 4.4 (referência ao CEPS Gov.br).

*Média Nacional:* 39,4 (n=3; 3 itens).

**Indicadores:**

*TIC Saúde 2024 (CETIC.br):*

- **A8B**. E os profissionais do estabelecimento receberam treinamento em segurança da informação?
  - *Normalização:* Piso sobre a população inteira, com os casos fora do filtro contados como resposta negativa (ver Seção 3.2.4).
  - *Contagem:* Categorias: Sim, Não, Não sabe e Não respondeu; só Sim conta. O percentual condicionado é multiplicado pela proporção de Sim do filtro no mesmo estrato, em cadeia quando necessário; quem ficou fora do filtro conta como resposta negativa. O resultado é um piso sobre a população inteira dos estabelecimentos públicos, conforme a Seção 3.2.4.
  - Valor (Nacional): 33,39

*ESTADIC 2024 (IBGE):*

- **Egov34**. Em relação à Lei Geral de Proteção de Dados Pessoais (LGPD): O estado disponibilizou para seus servidores cursos sobre segurança da informação em meios eletrônicos e proteção de dados nos últimos 24 meses?
  - *Contagem:* Conta como sim a categoria Sim; Não, Não sabe e sem resposta contam como não.
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0.
  - Valor (Nacional): 66,67
  - Valor (Estadual): 66,7 (média das 27 UFs)

*MUNIC 2024 (IBGE):*

- **Mgov34**. Em relação à Lei Geral de Proteção de Dados Pessoais (LGPD): O município disponibilizou para seus servidores cursos sobre segurança da informação em meios eletrônicos e proteção de dados nos últimos 24 meses?
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0.
  - Valor (Nacional): 18,08
  - Valor (Capitais): 70,37 (19/27 capitais)

### 7.3.7 Recorte Estadual

*Definição:* Conjunto das variáveis do Objetivo 4 com observação por UF, agregadas para leitura federativa. Reúne as 4 variáveis do bloco LGPD da ESTADIC 2024 e a variável `III.7` do IOSPD 2025. Inclui variáveis também classificadas em dimensões temáticas (única exceção à regra de não-repetição).

*Média Estadual:* 68,9 (n=5; 5 itens).

![Recorte Estadual do Objetivo 4](../graficos/recortes/cap07_estadual.png)

**Indicadores:**

*ESTADIC 2024 (IBGE):*

- **Egov32**. No governo estadual, existe uma área ou pessoa responsável por procedimentos e políticas para a coleta, armazenamento e uso de dados pessoais ou pela implementação das diretrizes da Lei Geral de Proteção de Dados Pessoais (LGPD)?
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0.
  - Valor (Estadual): 85,2 (média das 27 UFs)

- **Egov36**. Em relação à Lei Geral de Proteção de Dados Pessoais (LGPD): O estado possui regulamentação ou lei estadual específica sobre a LGPD, que identifica os papéis e responsabilidades de áreas ou setores do governo?
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0.
  - Valor (Estadual): 66,7 (média das 27 UFs)

- **Egov35**. Em relação à Lei Geral de Proteção de Dados Pessoais (LGPD): O estado disponibilizou canais de atendimento pela Internet para os cidadãos enviarem mensagens sobre o uso de seus dados pessoais pelo estado?
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0.
  - Valor (Estadual): 85,2 (média das 27 UFs)

- **Egov34**. Em relação à Lei Geral de Proteção de Dados Pessoais (LGPD): O estado disponibilizou para seus servidores cursos sobre segurança da informação em meios eletrônicos e proteção de dados nos últimos 24 meses?
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0.
  - Valor (Estadual): 66,7 (média das 27 UFs)

*IOSPD 2025 (ABEP-TIC):*

- **III.7**. A UF possui Portal Único ou de Serviços com funcionalidade de consentimento para LGPD?
  - *Normalização:* Índice 0-10, multiplicado por 10.
  - Valor (Estadual): 40,7 (média das 27 UFs)

### 7.3.8 Recorte de Capitais

*Definição:* Conjunto das variáveis do Objetivo 4 com observação por capital, agregadas para leitura federativa. Reúne as 4 variáveis MUNIC 2024 do bloco LGPD (responsável, regulamentação, canal para titulares e capacitação). Inclui variáveis também classificadas em dimensões temáticas (única exceção à regra de não-repetição).

*Média Capitais:* 73,1 (n=4; 4 itens).

![Recorte de Capitais do Objetivo 4](../graficos/recortes/cap07_capitais.png)

**Indicadores:**

*MUNIC 2024 (IBGE):*

- **Mgov32**. No município, existe uma área ou pessoa responsável por procedimentos e políticas para a coleta, armazenamento e uso de dados pessoais ou pela implementação das diretrizes da Lei Geral de Proteção de Dados Pessoais (LGPD)?
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0.
  - Valor (Capitais): 77,78 (21/27 capitais)

- **Mgov36**. Em relação à Lei Geral de Proteção de Dados Pessoais (LGPD): O município possui regulamentação ou lei municipal específica sobre a LGPD, que identifica os papéis e responsabilidades de áreas ou setores da prefeitura?
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0.
  - Valor (Capitais): 81,48 (22/27 capitais)

- **Mgov35**. Em relação à Lei Geral de Proteção de Dados Pessoais (LGPD): O município disponibilizou canais de atendimento pela Internet para os cidadãos enviarem mensagens sobre o uso de seus dados pessoais pela prefeitura?
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0.
  - Valor (Capitais): 62,96 (17/27 capitais)

- **Mgov34**. Em relação à Lei Geral de Proteção de Dados Pessoais (LGPD): O município disponibilizou para seus servidores cursos sobre segurança da informação em meios eletrônicos e proteção de dados nos últimos 24 meses?
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0.
  - Valor (Capitais): 70,37 (19/27 capitais)
