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

O Objetivo 3 conta com 6 variáveis ativas no índice (1 da Base de dados da CIN (SGD/MGI), 1 do iGovSISP (SGD/MGI), 2 do IOSPD (ABEP-TIC), 1 da MUNIC (IBGE) e 1 da TIC Governo Eletrônico (CETIC.br)), que entram na agregação do índice como 6 componentes (ver Capítulo 3). Todas contribuem para a visão Nacional. Três variáveis têm observação por UF (`I.9` e `III.4`, IOSPD 2025, e `atingimento_meta_cin`, Base de dados da CIN 2026) e uma tem observação por capital (`Mtic18a3-Mtic18a4, Mtic18a6`, MUNIC 2024). O limiar mínimo de duas variáveis com observação no mesmo nível federativo justifica a criação da dimensão **`Recorte Estadual`**, que reúne os três indicadores para leitura por UF. Como há apenas uma variável com observação por capital, **não se cria** a dimensão `Recorte de Capitais`; o indicador correspondente aparece dentro da dimensão temática em que foi classificado, com a observação federativa explicitada inline.

## 6.3 Dimensões

As 6 variáveis ativas do Objetivo 3 foram organizadas em três dimensões temáticas, complementadas pela dimensão federativa `Recorte Estadual`. Cada dimensão temática corresponde diretamente a uma ou mais das nove recomendações da Portaria: autenticação digital, assinatura eletrônica e identidade civil. Uma dimensão tem uma única variável (`Identidade civil`), o que reflete o estado atual do índice. O `Recorte Estadual` consolida os três indicadores com observação por UF.

![Dimensões do Objetivo 3](../graficos/dimensoes/cap06.png)

### 6.3.1 Autenticação digital

*Definição:* Oferta e abrangência do acesso aos serviços públicos digitais com a conta GOV.BR. Outras formas de autenticação podem coexistir. Corresponde à Recomendação 3.1.

*Média Nacional:* 26,8 (n=3; 3 itens).

As três medidas de autenticação observam objetos e universos distintos. `C9B` (Login único, o Gov.br, do Governo Federal) mede a adoção específica do login único Gov.br por órgãos públicos federais e estaduais e por prefeituras. `Mtic18a3-Mtic18a4, Mtic18a6` mede a abrangência declarada do acesso com a conta GOV.BR nas prefeituras. `G630IPD` mede, entre os órgãos federais do SISP, a faixa declarada de serviços integrados ao Login Único; seu valor usa a média ponderada dos tetos das faixas e não representa a porcentagem exata de todos os serviços integrados.

**Indicadores:**

*TIC Governo Eletrônico 2023 (CETIC.br):*

- **C9B**. Em relação ao cadastro ou login para acesso a serviços do órgão/da prefeitura pelo website, o cidadão pode acessar Pelo login único, o Gov.br, do governo federal?
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4).
  - Valor (Nacional): 13,39

*MUNIC 2024 (IBGE):*

- **Mtic18a3-Mtic18a4, Mtic18a6**. A autenticação para acessar os serviços pela internet é feita por meio de:
  - *Contagem:* Acesso com a conta GOV.BR a todos os serviços recebe 100 pontos. Acesso a alguns recebe 50. Sem integração declarada, a nota é 0. Se as duas opções GOV.BR forem marcadas, vale 100. A declaração de inexistência de autenticação prevalece e zera a nota. Os 50 pontos identificam a categoria intermediária. Outras formas de acesso podem coexistir.
  - *Normalização:* Índice 0-100, média das notas das prefeituras.
  - Valor (Nacional): 6,74
  - Valor (Capitais): 24,07 (média das notas das 27 capitais)
  - *Leitura:* A categoria intermediária indica acesso a alguns serviços. A MUNIC não mede a fração desses serviços nem a exclusividade do GOV.BR.

*iGovSISP 2025 (SGD/MGI):*

- **G630IPD**. Dentro dos serviços oferecidos para a sociedade, quantos estão integrados ao Login Único (Acesso gov.br), plataforma de autenticação única ofertada pelo Ministério da Gestão, sem ônus para o órgão?
  - *Normalização:* Média dos tetos reais das faixas percentuais, ponderada pelas contagens; cada órgão respondente tem peso igual.
  - Valor (Nacional): 60,21
  - *Leitura:* A média dos tetos aproxima por cima a média de integração entre órgãos; não é a porcentagem exata de todos os serviços integrados.

### 6.3.2 Assinatura eletrônica

*Definição:* Disponibilidade de solução institucional de assinatura eletrônica, em substituição à assinatura manuscrita nos atos administrativos e na interação com o cidadão, e normatização do uso de assinaturas eletrônicas pelo governo estadual. Corresponde às Recomendações 3.2 e 3.6.

*Média Nacional:* 62,0 (n=2; 2 itens).

**Indicadores:**

*IOSPD 2025 (ABEP-TIC):*

- **I.9**. Utiliza solução de assinatura eletrônica corporativa própria ou do Gov.br?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 62,96
  - Valor (Estadual): 63,0 (média das 27 UFs)
- **III.4**. O uso de assinaturas eletrônicas em interações com entes públicos foi normatizada pelo Governo Estadual/Distrital, conforme previsto pela Lei Federal 14.063/2020 (Assinaturas Eletrônicas)?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 61,11
  - Valor (Estadual): 61,1 (média das 27 UFs)

### 6.3.3 Identidade civil

*Definição:* Emissão da Carteira de Identidade Nacional (CIN), documento físico-digital de identidade civil unificado em torno do CPF, pelos órgãos estaduais de identificação, integrados ao Serviço de Identificação do Cidadão. Corresponde à Recomendação 3.3; com vínculo secundário à Recomendação 3.7.

*Média Nacional:* 52,7 (n=1; 1 item).

A medida é o atingimento da meta de emissão da Estratégia Federal de Governo Digital (EFGD). A Iniciativa 11.3 da EFGD (Portaria SGD/MGI nº 6.618/2024, com a redação da Portaria nº 473/2026) fixa 120 milhões de CINs emitidas até 2027, o que corresponde a 56,2 carteiras por cem habitantes sobre a população estimada pelo IBGE para 2025, de 213.421.037 pessoas. A meta é nacional; aplicá-la a cada UF como a mesma fração da sua população é escolha deste relatório, e não da norma. O valor 100 significa que a UF já emitiu 56,2 carteiras por cem habitantes, e o valor é limitado a 100 quando ela supera a meta, como o Piauí, que chega a 118,3. A contagem é a da UF emissora, e não a da UF de residência do titular: quem tira a carteira fora do estado em que mora entra na conta do estado emissor. A base conta só a primeira emissão de cada pessoa, sem segunda via nem renovação, e por isso cada carteira contada é uma pessoa distinta. As emissões se acumulam até agosto de 2026, último mês completo na extração, porque os estados enviam os dados com atraso e cada mês só fica completo no fim do mês seguinte. A base é registro administrativo da SGD/MGI, com extração de 08/10/2026 (Seção 3.4.2).

**Indicadores:**

*Base de dados da CIN 2026 (SGD/MGI):*

- **atingimento_meta_cin**. Indicador calculado pelo Observatório: atingimento da meta de emissão da Carteira de Identidade Nacional, por UF emissora e para o Brasil. Somam-se as emissões mensais da Base de dados da Carteira de Identidade Nacional de jun/2022 até o mês de corte, que contam só a primeira emissão de cada pessoa, na UF do órgão emissor; divide-se a soma pela população residente do IBGE de 2025, por cem habitantes; e divide-se o resultado por 56,2 pessoas por cem habitantes, vezes 100. Os 56,2 são conta do Observatório: a meta oficial, "Emitir a Carteira de Identidade Nacional para 120.000.000 de brasileiros até 2027", é nacional, e o Observatório a divide pela população do Brasil e aplica a mesma fração a cada UF.
  - *Normalização:* Proporção 0-100%, usada diretamente; o valor que supera a meta é limitado a 100
  - Valor (Nacional): 52,66
  - Valor (Estadual): 55,7 (média das 27 UFs)

### 6.3.4 Recorte Estadual

*Definição:* Conjunto das variáveis do Objetivo 3 com observação por UF, agregadas para leitura federativa estadual do desempenho na implementação de soluções estruturantes de identificação. Reúne `I.9`, `III.4` e `atingimento_meta_cin`. Inclui variáveis também classificadas em dimensões temáticas (única exceção à regra de não-repetição).

*Média Estadual:* 59,9 (n=3; 3 itens).

![Recorte Estadual do Objetivo 3](../graficos/recortes/cap06_estadual.png)

**Indicadores:**

*IOSPD 2025 (ABEP-TIC):*

- **I.9**. Utiliza solução de assinatura eletrônica corporativa própria ou do Gov.br?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Estadual): 63,0 (média das 27 UFs)
- **III.4**. O uso de assinaturas eletrônicas em interações com entes públicos foi normatizada pelo Governo Estadual/Distrital, conforme previsto pela Lei Federal 14.063/2020 (Assinaturas Eletrônicas)?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Estadual): 61,1 (média das 27 UFs)

*Base de dados da CIN 2026 (SGD/MGI):*

- **atingimento_meta_cin**. Indicador calculado pelo Observatório: atingimento da meta de emissão da Carteira de Identidade Nacional, por UF emissora e para o Brasil. Somam-se as emissões mensais da Base de dados da Carteira de Identidade Nacional de jun/2022 até o mês de corte, que contam só a primeira emissão de cada pessoa, na UF do órgão emissor; divide-se a soma pela população residente do IBGE de 2025, por cem habitantes; e divide-se o resultado por 56,2 pessoas por cem habitantes, vezes 100. Os 56,2 são conta do Observatório: a meta oficial, "Emitir a Carteira de Identidade Nacional para 120.000.000 de brasileiros até 2027", é nacional, e o Observatório a divide pela população do Brasil e aplica a mesma fração a cada UF.
  - *Normalização:* Proporção 0-100%, usada diretamente; o valor que supera a meta é limitado a 100
  - Valor (Estadual): 55,7 (média das 27 UFs)
