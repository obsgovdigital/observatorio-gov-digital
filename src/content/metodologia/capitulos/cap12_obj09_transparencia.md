# 12. Objetivo 9: Transparência e Participação

> Contribuir para a ampliação da abertura e da transparência das organizações públicas, para legitimar o controle e a participação social, bem como potencializar a colaboração com a sociedade para entregar valor público.

A metodologia (normalização, agregação, tratamento de não-resposta) está descrita no Capítulo 3.

## 12.1 Recomendações da ENGD para este objetivo

A Portaria SGD/MGI nº 5.395/2026 elenca quatro recomendações aos entes federados para ampliar a abertura, a transparência e a participação social no governo digital:

- **9.1** Implementar instrumentos de participação social e cocriação que permitam ao cidadão contribuir para a melhoria contínua dos serviços públicos e das políticas de governo digital, com mecanismos de devolutiva sobre as contribuições recebidas.
- **9.2** Instituir canais, espaços e ações para promover a transparência do governo digital.
- **9.3** Promover a transparência, o acesso à informação e o uso de dados abertos pelos cidadãos.
- **9.4** Promover a transparência no uso de inteligência artificial, com informações claras sobre a finalidade, o funcionamento e os impactos das soluções, com nível de detalhamento proporcional aos riscos e resguardadas as informações legalmente protegidas.

## 12.2 Cobertura por nível federativo

O Objetivo 9 conta com 17 variáveis ativas no índice (2 de TIC Governo Eletrônico (CETIC.br), 1 de IOSPD (ABEP-TIC), 6 de MUNIC (IBGE), 7 de ESTADIC (IBGE), 1 de iGovSISP (SGD/MGI)), que entram na agregação como 17 componentes, após o colapso das baterias (ver Capítulo 3). Todas contribuem para a visão Nacional. Há 8 variáveis com observação por UF, reunidas também na dimensão `Recorte Estadual`. Há 6 variáveis com observação por capital, reunidas também na dimensão `Recorte de Capitais`.

<!-- federal:cobertura -->
No recorte federal, 3 variáveis do objetivo têm observação dos órgãos federais (2 da TIC Governo Eletrônico (CETIC.br) e 1 do iGovSISP (SGD/MGI)), que entram na média do recorte como 3 componentes. O limiar mínimo de duas variáveis efetivas observadas justifica a criação da dimensão **`Recorte Federal`**, em que a União é o único ente, sem ranking (Seção 3.1.6).
<!-- /federal:cobertura -->

## 12.3 Dimensões

As 17 variáveis ativas do Objetivo 9 foram organizadas em quatro dimensões temáticas, complementadas pelas dimensões federativas `Recorte Estadual`, `Recorte de Capitais` e `Recorte Federal`. As dimensões temáticas seguem diretamente as recomendações da Portaria: transparência ativa, acesso à informação (LAI), participação social e transparência no uso de inteligência artificial. Os recortes agregam as variáveis com observação por UF, por capital e dos órgãos federais, única exceção à regra de não-repetição entre dimensões. O `Recorte Federal` reagrupa as variáveis com observação dos órgãos federais, com a União como ente único.

![Dimensões do Objetivo 9](../graficos/dimensoes/cap12.png)

### 12.3.1 Transparência ativa

*Definição:* Existência e abrangência de canais públicos de divulgação proativa de informações governamentais: portais da transparência, controle interno publicado, divulgação de informações orçamentárias e financeiras. Corresponde às Recomendações 9.2 e 9.3.

*Média Nacional:* 85,1 (n=5; 5 itens).

**Indicadores:**

*MUNIC 2024 (IBGE):*

- **Mtic271**. Existe atualmente no município: Portal da transparência
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 99,68
  - Valor (Capitais): 100,00 (27/27 capitais)

- **Mtic12a6**. Dentre os serviços informativos quais os disponibilizados atualmente para o público em geral na página da Internet são: Finanças públicas
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 85,35
  - Valor (Capitais): 100,00 (27/27 capitais)

*ESTADIC 2024 (IBGE):*

- **Egov081-Egov0811**. O governo estadual possui em sua página na internet e/ou no portal transparência as seguintes informações:
  - 8.1) Registro de competências
  - 8.2) Estrutura organizacional
  - 8.3) Endereços e telefones das respectivas unidades da estrutura organizacional
  - 8.4) Horários de atendimento ao público das unidades da estrutura organizacional
  - 8.5) Quantitativo do pessoal ocupado por vínculo empregatício
  - 8.6) Dados gerais para o acompanhamento de programas, ações, projetos e obras de órgãos e entidades
  - 8.7) Informações concernentes a procedimentos licitatórios, inclusive os respectivos editais e resultados, bem como a todos os contratos celebrados
  - 8.8) Respostas às perguntas mais frequentes da sociedade, também conhecido como FAQ ou ‘Perguntas Frequentes’.
  - 8.9) Registro de quaisquer repasses ou transferências de recursos financeiros
  - 8.10) Nenhuma das informações citadas
  - 8.11) Não possui página na internet ou portal transparência
  - *Contagem:* O Observatório calcula, por UF, a média dos itens 8.1 a 8.9, com Sim = 100 e Não ou sem resposta = 0, e a média nacional das 27 UFs. Nenhuma das informações citadas (8.10) e Não possui página (8.11) ficam fora da média.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 86,01
  - Valor (Estadual): 86,01 (média de 27 UFs)

- **Egov061**. O governo estadual disponibiliza informações pormenorizadas sobre sua execução orçamentária e financeira (em atendimento à Lei Complementar 131/2009): Em tempo real?
  - *Contagem:* Conta como sim a categoria Sim; Não e sem resposta contam como não. Rondônia, que não informou, conta como não.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 88,89
  - Valor (Estadual): 88,89 (média de 27 UFs)

- **Egov241-Egov248**. Quais os serviços são disponibilizados na internet?
  - 24.1) Estrutura administrativa do órgão central de controle interno
  - 24.2) Informações institucionais sobre o órgão central de controle interno
  - 24.3) Consulta a estatísticas de processos disciplinares
  - 24.4) Mecanismos para realização de denúncias anônimas ou sigilosas
  - 24.5) Consulta para acompanhamento de denúncia
  - 24.6) Consulta de indicadores de desempenho do governo
  - 24.7) Produtos gerados pelo órgão central de controle interno, tais como relatórios, certificados e notas
  - 24.8) Legislação específica na área de controle interno (Leis, Decretos, Portarias, Resoluções e outras)
  - *Contagem:* O Observatório calcula, por UF, a média dos itens 24.1 a 24.8, com Sim = 100 e Não ou sem resposta = 0, e a média nacional das 27 UFs. O quesito 24 só é respondido por quem marcou Sim no 23 ("O controle interno tem informação publicada na internet?").
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 65,74
  - Valor (Estadual): 65,74 (média de 27 UFs)

### 12.3.2 Acesso à informação (LAI)

*Definição:* Implementação local da Lei de Acesso à Informação (Lei nº 12.527/2011): existência de legislação específica, conteúdo e meios de solicitação da regulamentação estadual e publicização de perguntas e respostas. Corresponde à Recomendação 9.3.

*Média Nacional:* 58,4 (n=4; 4 itens).

**Indicadores:**

*MUNIC 2024 (IBGE):*

- **Mgov01**. Existe legislação municipal específica que estabeleça procedimentos e providências para garantir o direito de acesso à informação pública em conformidade com a Lei de Acesso à Informação?
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 57,95
  - Valor (Capitais): 100,00 (27/27 capitais)

- **Mgov05**. A prefeitura publica, para acesso ao público em geral, as respostas das solicitações feitas através da Lei de Acesso à Informação:
  - *Contagem:* Escala de três níveis, não binária: Perguntas e respostas vale 100, Somente as respostas vale 50, Não publica vale 0. Recusa e Não informou também valem 0.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 24,51
  - Valor (Capitais): 50,00 (média de 27 capitais)

*ESTADIC 2024 (IBGE):*

- **Egov021-Egov028**. A legislação estadual que regulamenta a Lei de Acesso à Informação:
  - 2.1) Estabelece prazo de atendimento de pedido de acesso à informação pública igual ou inferior a 20 dias corridos
  - 2.2) Institui procedimentos de classificação de informação sigilosa em âmbito estadual
  - 2.3) Prevê autoridade de monitoramento para implementação da Lei de Acesso à Informação pública
  - 2.4) Prevê órgão central de monitoramento das ações relativas ao acesso à informação pública
  - 2.5) Prevê a divulgação de relatório de monitoramento com informações estatísticas dos pedidos de acesso à informação pública
  - 2.6) Prevê mais de uma instância recursal interna ao órgão ou entidade demandado
  - 2.7) Estabelece instância recursal autônoma e independente em relação à autoridade que proferiu a decisão impugnada
  - 2.8) Estabelece procedimento (recurso, reclamação ou outro) em caso de omissão de resposta a pedidos de informação pública
  - *Contagem:* O Observatório calcula, por UF, a média dos itens 2.1 a 2.8, com Sim = 100 e Não ou sem resposta = 0, e a média nacional das 27 UFs. O quesito só é respondido por quem tem legislação estadual de acesso à informação (quesito 1 = Sim).
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 85,19
  - Valor (Estadual): 85,19 (média de 27 UFs)

- **Egov031-Egov036**. Por quais meios o governo estadual possibilita aos cidadãos realizar solicitação de acesso à informação pública com base na Lei de Acesso à Informação:
  - 3.1) Em local com condições para atender e orientar o público quanto ao acesso a informações públicas (Serviço de Informação ao Cidadão – SIC)
  - 3.2) Internet
  - 3.3) Telefone
  - 3.4) Carta
  - 3.5) Outro
  - 3.6) Não disponibiliza
  - *Contagem:* O Observatório calcula, por UF, a média dos itens 3.1 a 3.5, com Sim = 100 e Não ou sem resposta = 0, e a média nacional das 27 UFs. Não disponibiliza (3.6) fica fora da média.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 65,93
  - Valor (Estadual): 65,93 (média de 27 UFs)

### 12.3.3 Participação social e cocriação

*Definição:* Instrumentos de envolvimento do cidadão no governo digital: ouvidorias e canais de denúncia, mecanismos participativos online (consulta, fórum, enquete, votação) e instâncias colegiadas de transparência. Corresponde à Recomendação 9.1.

*Média Nacional:* 54,5 (n=7; 7 itens).

**Indicadores:**

*TIC Governo Eletrônico 2025 (CETIC.br):*

- **E2A**. Quais destes itens que vou ler estiveram disponíveis no website deste órgão público nos últimos 12 meses? / Quais destes itens que vou ler estiveram disponíveis no website desta prefeitura nos últimos 12 meses?
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 82,24
  - Valor (Federal): 94,29

- **E4A**. Agora vou ler algumas formas de participação do cidadão e gostaria que o(a) sr.(a) me indicasse quais delas foram realizadas por este órgão nos últimos 12 meses pela Internet. Este órgão realizou: / Agora vou ler algumas formas de participação do cidadão e gostaria que o(a) sr.(a) me indicasse quais delas foram realizadas por esta prefeitura nos últimos 12 meses pela Internet. Esta prefeitura realizou:
  - *Contagem:* O valor é a maior proporção dos itens selecionados: Consulta pública online; Fóruns ou comunidades de discussão pela Internet; Enquete online; Votação online. É um limite inferior de pelo menos um item, não a união exata das respostas. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 36,23
  - Valor (Federal): 54,29

*IOSPD 2026 (ABEP-TIC):*

- **4.8**. POSSUI PLATAFORMA OU ALGUM OUTRO MECANISMO PARA PARTICIPAÇÃO DIGITAL? (POR EXEMPLO, PARTICIPA +)
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 80,77
  - Valor (Estadual): 80,77 (média de 26 UFs)

*MUNIC 2024 (IBGE):*

- **Mtic251-Mtic255**. A prefeitura, nos últimos 12 meses, realizou pela internet:
  - *Contagem:* Conta como sim o município que marcou, em qualquer local, ao menos uma de Consulta pública online para que cidadãos possam enviar contribuições para leis, orçamentos e planos, Grupos de discussão como fóruns ou comunidades pela internet, Enquete online sobre assuntos de interesse da prefeitura ou Votação online para orientar a tomada de decisão sobre políticas públicas, orçamento, etc. e não marcou Não disponibilizou nenhuma das formas mencionadas acima; o resto conta como não. Recusa e Não informou também contam como não.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 39,43
  - Valor (Capitais): 81,48 (22/27 capitais)

- **Mgov26**. O município possui Conselho Municipal de Transparência ou similar?
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 2,08
  - Valor (Capitais): 37,04 (10/27 capitais)

*ESTADIC 2024 (IBGE):*

- **Etic231-Etic235**. O governo estadual, nos últimos 12 meses, realizou pela internet:
  - 23.1) Consulta pública online para que cidadãos possam enviar contribuições para leis, orçamentos e planos
  - 23.2) Grupos de discussão como fóruns ou comunidades pela internet
  - 23.3) Enquete online sobre assuntos de interesse do governo estadual
  - 23.4) Votação online para orientar a tomada de decisão sobre políticas públicas, orçamento, etc.
  - 23.5) Não disponibilizou nenhuma das formas mencionadas acima
  - *Contagem:* Conta 100 a UF que marcou algum dos itens 23.1 a 23.4 e não marcou Não disponibilizou (23.5), e 0 a que não realizou nenhuma; o valor nacional é a média das 27 UFs, isto é, a proporção de UFs com alguma forma de participação pela internet. Quantas formas a UF realizou não muda a nota. As colunas de local (23.x.1 a 23.x.4) não entram.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 88,89
  - Valor (Estadual): 88,89 (média de 27 UFs)

- **Egov26**. O estado possui Conselho Estadual de Transparência ou similar?
  - *Contagem:* Conta como sim a categoria Sim; Não e sem resposta contam como não. Rondônia, que não informou, conta como não.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 51,85
  - Valor (Estadual): 51,85 (média de 27 UFs)

### 12.3.4 Transparência no uso de inteligência artificial nos órgãos federais

*Definição:* Abordagem institucional de divulgação e transparência das aplicações de inteligência artificial. Corresponde à Recomendação 9.4.

*Média Nacional:* 16,4 (n=1; 1 item).

**Indicadores:**

*iGovSISP 2026 (SGD/MGI):*

- **G400DI**. Qual das seguintes opções melhor descreve a abordagem do seu órgão em relação à transparência das aplicações de IA?
  - *Normalização:* Proporção a partir do terceiro estágio de maturidade, sobre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 16,39
  - Valor (Federal): 16,39

### 12.3.5 Recorte Estadual

*Definição:* Conjunto das variáveis do Objetivo 9 com observação por UF, agregadas para leitura federativa estadual. Reúne 1 variável IOSPD e 7 variáveis ESTADIC. Inclui variáveis também classificadas em dimensões temáticas (única exceção à regra de não-repetição). As perguntas estão nas dimensões temáticas indicadas na tabela.

*Média Estadual:* 76,6 (n=8; 8 itens).

![Recorte Estadual do Objetivo 9](../graficos/recortes/cap12_estadual.png)

<!-- federal:tabela-estadual -->
*Tabela 21. Indicadores do Recorte Estadual do Objetivo 9, com a dimensão temática da pergunta e o valor estadual*

| Código | Fonte | Pergunta na dimensão | Valor (Estadual) |
|---|---|---|---:|
| `4.8` | IOSPD | 12.3.3 Participação social e cocriação | 80,77 |
| `Egov081-Egov0811` | ESTADIC | 12.3.1 Transparência ativa | 86,01 |
| `Egov061` | ESTADIC | 12.3.1 Transparência ativa | 88,89 |
| `Egov241-Egov248` | ESTADIC | 12.3.1 Transparência ativa | 65,74 |
| `Egov021-Egov028` | ESTADIC | 12.3.2 Acesso à informação (LAI) | 85,19 |
| `Egov031-Egov036` | ESTADIC | 12.3.2 Acesso à informação (LAI) | 65,93 |
| `Etic231-Etic235` | ESTADIC | 12.3.3 Participação social e cocriação | 88,89 |
| `Egov26` | ESTADIC | 12.3.3 Participação social e cocriação | 51,85 |
<!-- /federal:tabela-estadual -->

### 12.3.6 Recorte de Capitais

*Definição:* Conjunto das variáveis do Objetivo 9 com observação por capital, agregadas para leitura federativa municipal. Reúne 6 variáveis MUNIC. Inclui variáveis também classificadas em dimensões temáticas (única exceção à regra de não-repetição). As perguntas estão nas dimensões temáticas indicadas na tabela.

*Média Capitais:* 78,1 (n=6; 6 itens).

![Recorte de Capitais do Objetivo 9](../graficos/recortes/cap12_capitais.png)

<!-- federal:tabela-capitais -->
*Tabela 22. Indicadores do Recorte de Capitais do Objetivo 9, com a dimensão temática da pergunta e o valor das capitais*

| Código | Fonte | Pergunta na dimensão | Valor (Capitais) |
|---|---|---|---:|
| `Mtic271` | MUNIC | 12.3.1 Transparência ativa | 100,00 |
| `Mtic12a6` | MUNIC | 12.3.1 Transparência ativa | 100,00 |
| `Mgov01` | MUNIC | 12.3.2 Acesso à informação (LAI) | 100,00 |
| `Mgov05` | MUNIC | 12.3.2 Acesso à informação (LAI) | 50,00 |
| `Mtic251-Mtic255` | MUNIC | 12.3.3 Participação social e cocriação | 81,48 |
| `Mgov26` | MUNIC | 12.3.3 Participação social e cocriação | 37,04 |
<!-- /federal:tabela-capitais -->

<!-- federal:secao -->
### 12.3.7 Recorte Federal

*Definição:* Conjunto das variáveis do Objetivo 9 com observação dos órgãos federais, agregadas para leitura do governo federal como ente único. Reúne `E2A`, `E4A` e `G400DI`. Inclui variáveis também classificadas em dimensões temáticas (única exceção à regra de não-repetição). As perguntas estão nas dimensões temáticas indicadas na tabela.

*Média Federal:* 55,0 (n=3; 3 itens).

*Tabela 23. Indicadores do Recorte Federal do Objetivo 9, com a dimensão temática da pergunta e o valor federal (TIC Gov.: TIC Governo Eletrônico)*

| Código | Fonte | Pergunta na dimensão | Valor (Federal) |
|---|---|---|---:|
| `E2A` | TIC Gov. | 12.3.3 Participação social e cocriação | 94,29 |
| `E4A` | TIC Gov. | 12.3.3 Participação social e cocriação | 54,29 |
| `G400DI` | iGovSISP | 12.3.4 Transparência no uso de inteligência artificial nos órgãos federais | 16,39 |
<!-- /federal:secao -->
