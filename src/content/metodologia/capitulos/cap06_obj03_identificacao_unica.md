# 6. Objetivo 3: Identificação Única

> Implementar e manter solução estruturante de identificação única e nacional, com ampla disponibilidade e validade para todos os entes federados.

A metodologia (normalização, agregação, tratamento de não-resposta) está descrita no Capítulo 3.

## 6.1 Recomendações da ENGD para este objetivo

A Portaria SGD/MGI nº 5.395/2026 elenca nove recomendações aos entes federados para implementar e manter solução estruturante de identificação única e nacional:

- **3.1** Integrar os serviços públicos digitais ao mecanismo de autenticação digital da Plataforma GOV.BR.
- **3.2** Integrar os serviços públicos para dar a opção de uso das ferramentas de assinatura eletrônica, inclusive o mecanismo da Plataforma GOV.BR.
- **3.3** Integrar todos os órgãos estaduais de emissão de identidade civil ao Serviço de Identificação do Cidadão.
- **3.4** Participar, sob coordenação da União, das definições e desenvolvimento de ferramentas cooperativas para implementação do Serviço de Identificação Civil em canais físicos e digitais, incluindo a integração com a solução de autenticação digital da Plataforma GOV.BR.
- **3.5** Prover aos cidadãos repositórios digitais de seus documentos e informações, consolidando-os de forma integrada entre os entes federados, para dispor proativamente de atestados, certidões, documentos comprobatórios de regularidade, dentre outros, preferencialmente integrados à Plataforma GOV.BR, permitindo o compartilhamento seguro e consentido de dados entre órgãos para eliminação de exigências documentais redundantes.
- **3.6** Regulamentar uso de assinaturas eletrônicas nas suas interações internas e com a sociedade.
- **3.7** Utilizar o número de inscrição no Cadastro de Pessoas Físicas - CPF como número suficiente para identificação do cidadão, fazendo constar nos cadastros e documentos de órgãos públicos.
- **3.8** Contribuir para a instituição e manutenção de um cadastro base do cidadão, de âmbito nacional, que consolide dados essenciais compartilhados entre União, estados e municípios, observada a legislação de proteção de dados pessoais, como instrumento para a oferta integrada e proativa de serviços públicos.
- **3.9** Permitir que órgãos da administração pública, de qualquer ente federado, acessem documentos e informações já disponíveis nos repositórios digitais do cidadão para a prestação de serviços, mediante base legal adequada, consentimento granular e revogável do titular quando aplicável, registro auditável de acessos e adoção de mecanismos de segurança e proteção de dados pessoais.

## 6.2 Cobertura por nível federativo

O Objetivo 3 conta com 6 variáveis ativas no índice (1 de TIC Governo Eletrônico (CETIC.br), 2 de IOSPD (ABEP-TIC), 1 de MUNIC (IBGE), 1 de iGovSISP (SGD/MGI), 1 de Base de dados da CIN (SGD/MGI)), que entram na agregação como 6 componentes, após o colapso das baterias (ver Capítulo 3). Todas contribuem para a visão Nacional. Há 3 variáveis com observação por UF, reunidas também na dimensão `Recorte Estadual`. Uma variável tem observação por capital (`Mtic18a3-Mtic18a4, Mtic18a6`, MUNIC 2024); o indicador aparece na sua dimensão temática, sem criar uma dimensão federativa com apenas uma variável.

<!-- federal:cobertura -->
No recorte federal, 2 variáveis do objetivo têm observação dos órgãos federais (1 da TIC Governo Eletrônico (CETIC.br) e 1 do iGovSISP (SGD/MGI)), que entram na média do recorte como 2 componentes. O limiar mínimo de dois componentes efetivos observados justifica a criação da dimensão **`Recorte Federal`**, em que a União é o único ente, sem ranking (Seção 3.1.6).
<!-- /federal:cobertura -->

## 6.3 Dimensões

As 6 variáveis ativas do Objetivo 3 foram organizadas em três dimensões temáticas, complementadas pelas dimensões federativas `Recorte Estadual` e `Recorte Federal`. Cada dimensão temática corresponde diretamente a uma ou mais das nove recomendações da Portaria: autenticação digital, assinatura eletrônica e identidade civil. Uma dimensão tem uma única variável (`Identidade civil`), o que reflete o estado atual do índice. O `Recorte Estadual` consolida os três indicadores com observação por UF. O `Recorte Federal` reagrupa as variáveis com observação dos órgãos federais, com a União como ente único.

![Dimensões do Objetivo 3](../graficos/dimensoes/cap06.png)

### 6.3.1 Autenticação digital

*Definição:* Oferta e abrangência do acesso aos serviços públicos digitais com a conta GOV.BR. Outras formas de autenticação podem coexistir. Corresponde à Recomendação 3.1.

*Média Nacional:* 29,4 (n=3; 3 itens).

**Indicadores:**

*TIC Governo Eletrônico 2025 (CETIC.br):*

- **C9B**. Em relação ao cadastro ou login para acesso a serviços do órgão pelo website, o cidadão pode acessar peloLogin único, o Gov.br, do Governo Federal? / Em relação ao cadastro ou login para acesso a serviços da prefeitura pelo website, o cidadão pode acessar peloLogin único, o Gov.br, do Governo Federal?
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 18,52
  - Valor (Federal): 38,57

*MUNIC 2024 (IBGE):*

- **Mtic18a3-Mtic18a4, Mtic18a6**. A autenticação para acessar os serviços pela internet é feita por meio de:
  - *Contagem:* Acesso com a conta GOV.BR a todos os serviços recebe 100 pontos. Acesso a alguns recebe 50. Sem integração declarada, a nota é 0. Se as duas opções GOV.BR forem marcadas, vale 100. A declaração de inexistência de autenticação prevalece e zera a nota. Os 50 pontos identificam a categoria intermediária. Outras formas de acesso podem coexistir.
  - *Normalização:* Índice 0-100, usado diretamente
  - Valor (Nacional): 6,74
  - Valor (Capitais): 24,07 (média de 27 capitais)
  - *Leitura:* A categoria intermediária indica acesso a alguns serviços. A MUNIC não mede a fração desses serviços nem a exclusividade do GOV.BR.

*iGovSISP 2026 (SGD/MGI):*

- **G630IPD**. Dentro dos serviços oferecidos para a sociedade, quantos estão integrados ao Login Único (Acesso gov.br), plataforma de autenticação única ofertada pelo Ministério da Gestão, sem ônus para o órgão?
  - *Normalização:* Média dos tetos reais das faixas, ponderada pelas contagens, com peso igual entre os 238 órgãos respondentes.
  - Valor (Nacional): 63,07
  - Valor (Federal): 63,07
  - *Leitura:* A média dos tetos aproxima por cima a média de integração entre órgãos; não é a porcentagem exata de todos os serviços integrados.

### 6.3.2 Assinatura eletrônica

*Definição:* Disponibilidade de solução institucional de assinatura eletrônica, em substituição à assinatura manuscrita nos atos administrativos e na interação com o cidadão, e normatização do uso de assinaturas eletrônicas pelo governo estadual. Corresponde às Recomendações 3.2 e 3.6.

*Média Nacional:* 65,4 (n=2; 2 itens).

**Indicadores:**

*IOSPD 2026 (ABEP-TIC):*

- **1.8**. UTILIZA SOLUÇÃO DE ASSINATURA ELETRÔNICA CORPORATIVA PRÓPRIA OU DO GOV.BR?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 65,38
  - Valor (Estadual): 65,38 (média de 26 UFs)

- **3.3**. O USO DE ASSINATURAS ELETRÔNICAS EM INTERAÇÕES COM ENTES PÚBLICOS FOI NORMATIZADO PELO GOVERNO ESTADUAL/DISTRITAL, CONFORME PREVISTO PELA LEI FEDERAL 14.063/2020?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 65,38
  - Valor (Estadual): 65,38 (média de 26 UFs)

### 6.3.3 Identidade civil

*Definição:* Emissão da Carteira de Identidade Nacional (CIN), documento físico-digital de identidade civil unificado em torno do CPF, pelos órgãos estaduais de identificação, integrados ao Serviço de Identificação do Cidadão. Corresponde à Recomendação 3.3; com vínculo secundário à Recomendação 3.7.

*Média Nacional:* 52,7 (n=1; 1 item).

**Indicadores:**

*Base de dados da CIN 2026 (SGD/MGI):*

- **atingimento_meta_cin**. Indicador calculado pelo Observatório: atingimento da meta de emissão da Carteira de Identidade Nacional, por UF emissora e para o Brasil. Somam-se as emissões mensais da Base de dados da Carteira de Identidade Nacional de jun/2022 até o mês de corte, que contam só a primeira emissão de cada pessoa, na UF do órgão emissor; divide-se a soma pela população residente do IBGE de 2025, por cem habitantes; e divide-se o resultado por 56,2 pessoas por cem habitantes, vezes 100. Os 56,2 são conta do Observatório: a meta oficial, "Emitir a Carteira de Identidade Nacional para 120.000.000 de brasileiros até 2027", é nacional, e o Observatório a divide pela população do Brasil e aplica a mesma fração a cada UF.
  - *Normalização:* Proporção 0-100%, usada diretamente; o valor que supera a meta é limitado a 100
  - Valor (Nacional): 52,66
  - Valor (Estadual): 55,66 (média de 27 UFs)

### 6.3.4 Recorte Estadual

*Definição:* Conjunto das variáveis do Objetivo 3 com observação por UF, agregadas para leitura federativa estadual. Reúne `1.8`, `3.3` e `atingimento_meta_cin`. Inclui variáveis também classificadas em dimensões temáticas (única exceção à regra de não-repetição). As perguntas estão nas dimensões temáticas indicadas na tabela.

*Média Estadual:* 62,0 (n=3; 3 itens).

![Recorte Estadual do Objetivo 3](../graficos/recortes/cap06_estadual.png)

O Paraná não participou do IOSPD desta edição e não tem observação nessa fonte. Seu resultado utiliza somente as demais fontes disponíveis, sem dados de edição anterior, zeros ou imputação. Se não houver outra fonte no objetivo, não se publica escore do Paraná.

<!-- federal:tabela-estadual -->
*Tabela 8. Indicadores do Recorte Estadual do Objetivo 3, com a dimensão temática da pergunta e o valor estadual*

| Código | Fonte | Pergunta na dimensão | Valor (Estadual) |
|---|---|---|---:|
| `1.8` | IOSPD | 6.3.2 Assinatura eletrônica | 65,38 |
| `3.3` | IOSPD | 6.3.2 Assinatura eletrônica | 65,38 |
| `atingimento_meta_cin` | Base de dados da CIN | 6.3.3 Identidade civil | 55,66 |
<!-- /federal:tabela-estadual -->

<!-- federal:secao -->
### 6.3.5 Recorte Federal

*Definição:* Conjunto das variáveis do Objetivo 3 com observação dos órgãos federais, agregadas para leitura do governo federal como ente único. Reúne `C9B` e `G630IPD`. Inclui variáveis também classificadas em dimensões temáticas (única exceção à regra de não-repetição). As perguntas estão nas dimensões temáticas indicadas na tabela.

*Média Federal:* 50,8 (n=2; 2 itens).

![Recorte Federal do Objetivo 3](../graficos/recortes/cap06_federal.png)

*Tabela 9. Indicadores do Recorte Federal do Objetivo 3, com a dimensão temática da pergunta e o valor federal*

| Código | Fonte | Pergunta na dimensão | Valor (Federal) |
|---|---|---|---:|
| `C9B` | TIC Governo Eletrônico | 6.3.1 Autenticação digital | 38,57 |
| `G630IPD` | iGovSISP | 6.3.1 Autenticação digital | 63,07 |
<!-- /federal:secao -->
