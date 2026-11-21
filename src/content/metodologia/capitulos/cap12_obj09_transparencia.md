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

O Objetivo 9 conta com 16 variáveis ativas no índice (7 da ESTADIC (IBGE), 1 do IOSPD (ABEP-TIC), 6 da MUNIC (IBGE) e 2 da TIC Governo Eletrônico (CETIC.br)), que entram na agregação do índice como 16 componentes (ver Capítulo 3). Todas contribuem para a visão Nacional. Oito variáveis têm observação por UF (sete da ESTADIC e uma do IOSPD (ABEP-TIC)) e seis têm observação por capital (todas MUNIC 2024). Como os dois níveis subnacionais ultrapassam o limiar mínimo de duas variáveis, criam-se as duas dimensões federativas dedicadas: `Recorte Estadual` (9 vars) e `Recorte de Capitais` (6 vars).

Os indicadores de transparência de acervos da TIC Cultura (CETIC.br) não integram o índice: a planilha oficial da edição 2024 não publica total nacional para esses indicadores, apenas resultados por tipo de equipamento cultural, e possuir acervo é condição institucional do equipamento, não capacidade digital do ente federativo. A fonte permanece fora do índice até publicar total nacional oficial, pesos amostrais ou microdados.

A Escala Brasil Transparente (CGU, edição 2020), fonte clássica de transparência subnacional brasileira, não integra o índice: a produção de dados foi interrompida em 2020, e as demais fontes utilizadas são de 2023 a 2026 (ver Seção 3.1.1).

## 12.3 Dimensões

As 16 variáveis ativas do Objetivo 9 foram organizadas em três dimensões temáticas, complementadas pelas dimensões federativas `Recorte Estadual` e `Recorte de Capitais`. As dimensões temáticas seguem diretamente as recomendações da Portaria: transparência ativa e dados abertos, acesso à informação (LAI) e participação social. Os recortes agregam as variáveis com observação por UF e por capital, respectivamente, única exceção à regra de não-repetição entre dimensões.

![Dimensões do Objetivo 9](../graficos/dimensoes/cap12.png)

### 12.3.1 Transparência ativa e dados abertos

*Definição:* Existência e abrangência de canais públicos de divulgação proativa de informações governamentais: portais da transparência, controle interno publicado, divulgação de informações orçamentárias e financeiras. Corresponde às Recomendações 9.2 e 9.3.

*Média Nacional:* 79,6 (n=6; 6 itens).

**Indicadores:**

*IOSPD 2025 (ABEP-TIC):*

- **I.11**. O Quadro Geral ou as Cartas de Serviços Estaduais/Distrital estão integrados à Base Nacional de Serviços Públicos, com serviços disponíveis na busca de serviços geral e por estado do Portal Gov.br?
  - *Normalização:* Índice 0-10, multiplicado por 10.
  - Valor (Nacional): 51,85
  - Valor (Estadual): 51,85

*MUNIC 2024 (IBGE):*

- **Mtic271**. Existe atualmente no município: Portal da transparência
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0; valor Nacional é a proporção 0-100% sobre o universo de prefeituras.
  - Valor (Nacional): 99,68
  - Valor (Capitais): 100,00 (27/27 capitais)

- **Mtic12a6**. Dentre os serviços informativos quais os disponibilizados atualmente para o público em geral na página da Internet são: Finanças públicas
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0; valor Nacional é a proporção 0-100% sobre o universo de prefeituras.
  - Valor (Nacional): 85,35
  - Valor (Capitais): 100,00 (27/27 capitais)

*ESTADIC 2024 (IBGE):*

- **Egov081-Egov0811**. O governo estadual possui em sua página na internet e/ou no portal transparência as seguintes informações:
  - *Contagem:* O Observatório calcula, por UF, a média dos itens 8.1 a 8.9, com Sim = 100 e Não ou sem resposta = 0, e a média nacional das 27 UFs. Nenhuma das informações citadas (8.10) e Não possui página (8.11) ficam fora da média.
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
  - Valor (Nacional): 86,01
  - Valor (Estadual): 86,01

- **Egov061**. O governo estadual disponibiliza informações pormenorizadas sobre sua execução orçamentária e financeira (em atendimento à Lei Complementar 131/2009): Em tempo real?
  - *Contagem:* Conta como sim a categoria Sim; Não e sem resposta contam como não. Rondônia, que não informou, conta como não.
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0; valor Nacional é a proporção 0-100% sobre o universo de governos estaduais.
  - Valor (Nacional): 88,89
  - Valor (Estadual): 88,89

- **Egov241-Egov248**. Quais os serviços são disponibilizados na internet?
  - *Contagem:* O Observatório calcula, por UF, a média dos itens 24.1 a 24.8, com Sim = 100 e Não ou sem resposta = 0, e a média nacional das 27 UFs. O quesito 24 só é respondido por quem marcou Sim no 23 ("O controle interno tem informação publicada na internet?").
  - 24.1) Estrutura administrativa do órgão central de controle interno
  - 24.2) Informações institucionais sobre o órgão central de controle interno
  - 24.3) Consulta a estatísticas de processos disciplinares
  - 24.4) Mecanismos para realização de denúncias anônimas ou sigilosas
  - 24.5) Consulta para acompanhamento de denúncia
  - 24.6) Consulta de indicadores de desempenho do governo
  - 24.7) Produtos gerados pelo órgão central de controle interno, tais como relatórios, certificados e notas
  - 24.8) Legislação específica na área de controle interno (Leis, Decretos, Portarias, Resoluções e outras)
  - Valor (Nacional): 65,74
  - Valor (Estadual): 65,74

### 12.3.2 Acesso à informação (LAI)

*Definição:* Implementação local da Lei de Acesso à Informação (Lei nº 12.527/2011): existência de legislação específica, conteúdo e meios de solicitação da regulamentação estadual e publicização de perguntas e respostas. Corresponde à Recomendação 9.3.

*Média Nacional:* 58,4 (n=4; 4 itens).

**Indicadores:**

*MUNIC 2024 (IBGE):*

- **Mgov01**. Existe legislação municipal específica que estabeleça procedimentos e providências para garantir o direito de acesso à informação pública em conformidade com a Lei de Acesso à Informação?
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0; valor Nacional é a proporção 0-100% sobre o universo de prefeituras.
  - Valor (Nacional): 57,95
  - Valor (Capitais): 100,00 (27/27 capitais)

- **Mgov05**. A prefeitura publica, para acesso ao público em geral, as respostas das solicitações feitas através da Lei de Acesso à Informação:
  - *Contagem:* Escala de três níveis, não binária: Perguntas e respostas vale 100, Somente as respostas vale 50, Não publica vale 0. Recusa e Não informou também valem 0.
  - *Normalização:* Categórica 0/50/100: "Perguntas e respostas"=100, "Somente as respostas"=50, "Não publica"=0; valor Nacional é a média dessa codificação sobre o universo de prefeituras (5570). As prefeituras sem solicitação em 2023 também respondem à pergunta, e a base não tem resposta em branco.
  - Valor (Nacional): 24,51
  - Valor (Capitais): 50,00 (média sobre as 27 capitais; Belém/PA, única capital sem solicitações em 2023, respondeu "Não publica" e contribui com 0)

*ESTADIC 2024 (IBGE):*

- **Egov021-Egov028**. A legislação estadual que regulamenta a Lei de Acesso à Informação:
  - *Contagem:* O Observatório calcula, por UF, a média dos itens 2.1 a 2.8, com Sim = 100 e Não ou sem resposta = 0, e a média nacional das 27 UFs. O quesito só é respondido por quem tem legislação estadual de acesso à informação (quesito 1 = Sim).
  - 2.1) Estabelece prazo de atendimento de pedido de acesso à informação pública igual ou inferior a 20 dias corridos
  - 2.2) Institui procedimentos de classificação de informação sigilosa em âmbito estadual
  - 2.3) Prevê autoridade de monitoramento para implementação da Lei de Acesso à Informação pública
  - 2.4) Prevê órgão central de monitoramento das ações relativas ao acesso à informação pública
  - 2.5) Prevê a divulgação de relatório de monitoramento com informações estatísticas dos pedidos de acesso à informação pública
  - 2.6) Prevê mais de uma instância recursal interna ao órgão ou entidade demandado
  - 2.7) Estabelece instância recursal autônoma e independente em relação à autoridade que proferiu a decisão impugnada
  - 2.8) Estabelece procedimento (recurso, reclamação ou outro) em caso de omissão de resposta a pedidos de informação pública
  - Valor (Nacional): 85,19
  - Valor (Estadual): 85,19

- **Egov031-Egov036**. Por quais meios o governo estadual possibilita aos cidadãos realizar solicitação de acesso à informação pública com base na Lei de Acesso à Informação:
  - *Contagem:* O Observatório calcula, por UF, a média dos itens 3.1 a 3.5, com Sim = 100 e Não ou sem resposta = 0, e a média nacional das 27 UFs. Não disponibiliza (3.6) fica fora da média.
  - 3.1) Em local com condições para atender e orientar o público quanto ao acesso a informações públicas (Serviço de Informação ao Cidadão – SIC)
  - 3.2) Internet
  - 3.3) Telefone
  - 3.4) Carta
  - 3.5) Outro
  - 3.6) Não disponibiliza
  - Valor (Nacional): 65,93
  - Valor (Estadual): 65,93

### 12.3.3 Participação social e cocriação

*Definição:* Instrumentos de envolvimento do cidadão no governo digital: ouvidorias e canais de denúncia, mecanismos participativos online (consulta, fórum, enquete, votação) e instâncias colegiadas de transparência. Corresponde à Recomendação 9.1.

*Média Nacional:* 48,7 (n=6; 6 itens).

**Indicadores:**

*TIC Governo Eletrônico 2023 (CETIC.br):*

- **E2A**. Quais destes itens que vou ler estiveram disponíveis no website deste órgão público/desta prefeitura nos últimos 12 meses? Ouvidoria online
  - *Normalização:* Piso sobre a população inteira, com os casos fora do filtro contados como resposta negativa (ver Seção 3.2.4).
  - *Contagem:* Categorias: Sim, Não, Não sabe e Não respondeu; só Sim conta. O percentual condicionado é multiplicado pela proporção de Sim do filtro no mesmo estrato, em cadeia quando necessário; quem ficou fora do filtro conta como resposta negativa. O resultado é um piso sobre a população inteira dos órgãos e das prefeituras, conforme a Seção 3.2.4.
  - Valor (Nacional): 75,15

- **E4A**. Órgãos: Agora vou ler algumas formas de participação do cidadão e gostaria que o(a) sr.(a) me indicasse quais delas foram realizadas por este órgão nos últimos 12 meses pela Internet. Este órgão realizou: Prefeituras: Agora vou ler algumas formas de participação do cidadão e gostaria que o senhor (a) me indicasse quais delas foram realizadas por esta prefeitura nos últimos 12 meses pela Internet. Esta prefeitura realizou:
  - *Normalização:* Piso sobre a população inteira, com os casos fora do filtro contados como resposta negativa (ver Seção 3.2.4).
  - *Contagem:* Itens nos órgãos: Consulta Pública online para que cidadãos possam enviar contribuições para leis, orçamentos, planos etc.; Grupos de discussão como fóruns ou comunidades pela Internet; Enquete online sobre assuntos de interesse do órgão; Votação online para orientar a tomada de decisão sobre políticas públicas, orçamento etc. Nas prefeituras: Consulta Pública online para que cidadãos possam enviar contribuições para leis, orçamentos, planos; Grupos de discussão como fóruns ou comunidades pela Internet; Enquete online sobre assuntos de interesse da prefeitura; Votação online para orientar a tomada de decisão sobre políticas públicas, orçamento etc. Categorias: Sim, Não, NS, NR; só Sim conta. O valor é a maior proporção de Sim entre os itens publicados na tabela; não é a proporção de quem marcou ao menos um item, que a tabela não permite calcular. O percentual condicionado é multiplicado pela proporção de Sim do filtro no mesmo estrato, em cadeia quando necessário; quem ficou fora do filtro conta como resposta negativa. O resultado é um piso sobre a população inteira dos órgãos e das prefeituras, conforme a Seção 3.2.4.
  - Valor (Nacional): 34,51

*MUNIC 2024 (IBGE):*

- **Mtic251-Mtic255**. A prefeitura, nos últimos 12 meses, realizou pela internet:
  - *Contagem:* Conta como sim o município que marcou, em qualquer local, ao menos uma de Consulta pública online para que cidadãos possam enviar contribuições para leis, orçamentos e planos, Grupos de discussão como fóruns ou comunidades pela internet, Enquete online sobre assuntos de interesse da prefeitura ou Votação online para orientar a tomada de decisão sobre políticas públicas, orçamento, etc. e não marcou Não disponibilizou nenhuma das formas mencionadas acima; o resto conta como não. Recusa e Não informou também contam como não.
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0; valor Nacional é a proporção 0-100% sobre o universo de prefeituras.
  - Valor (Nacional): 39,43
  - Valor (Capitais): 81,48 (22/27 capitais)

- **Mgov26**. O município possui Conselho Municipal de Transparência ou similar?
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0; valor Nacional é a proporção 0-100% sobre o universo de prefeituras.
  - Valor (Nacional): 2,08
  - Valor (Capitais): 37,04 (10/27 capitais)

*ESTADIC 2024 (IBGE):*

- **Etic231-Etic235**. O governo estadual, nos últimos 12 meses, realizou pela internet:
  - *Contagem:* Conta 100 a UF que marcou algum dos itens 23.1 a 23.4 e não marcou Não disponibilizou (23.5), e 0 a que não realizou nenhuma; o valor nacional é a média das 27 UFs, isto é, a proporção de UFs com alguma forma de participação pela internet. Quantas formas a UF realizou não muda a nota. As colunas de local (23.x.1 a 23.x.4) não entram.
  - 23.1) Consulta pública online para que cidadãos possam enviar contribuições para leis, orçamentos e planos
  - 23.2) Grupos de discussão como fóruns ou comunidades pela internet
  - 23.3) Enquete online sobre assuntos de interesse do governo estadual
  - 23.4) Votação online para orientar a tomada de decisão sobre políticas públicas, orçamento, etc.
  - 23.5) Não disponibilizou nenhuma das formas mencionadas acima
  - Valor (Nacional): 88,89
  - Valor (Estadual): 88,89

- **Egov26**. O estado possui Conselho Estadual de Transparência ou similar?
  - *Contagem:* Conta como sim a categoria Sim; Não e sem resposta contam como não. Rondônia, que não informou, conta como não.
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0; valor Nacional é a proporção 0-100% sobre o universo de governos estaduais.
  - Valor (Nacional): 51,85
  - Valor (Estadual): 51,85

### 12.3.4 Recorte Estadual

*Definição:* Conjunto das variáveis do Objetivo 9 com observação por UF, agregadas para leitura federativa estadual. Reúne 1 variável IOSPD 2025 e 7 variáveis ESTADIC 2024. Inclui variáveis também classificadas em outras dimensões temáticas (única exceção à regra de não-repetição entre dimensões).

*Média Estadual:* 73,0 (n=8; 8 itens).

![Recorte Estadual do Objetivo 9](../graficos/recortes/cap12_estadual.png)

**Indicadores:**

*IOSPD 2025 (ABEP-TIC):*

- **I.11**. O Quadro Geral ou as Cartas de Serviços Estaduais/Distrital estão integrados à Base Nacional de Serviços Públicos, com serviços disponíveis na busca de serviços geral e por estado do Portal Gov.br?
  - Valor (Estadual): 51,85

*ESTADIC 2024 (IBGE):*

- **Egov081-Egov0811**. O governo estadual possui em sua página na internet e/ou no portal transparência as seguintes informações:
  - Valor (Estadual): 86,01

- **Egov061**. O governo estadual disponibiliza informações pormenorizadas sobre sua execução orçamentária e financeira (em atendimento à Lei Complementar 131/2009): Em tempo real?
  - Valor (Estadual): 88,89

- **Egov241-Egov248**. Quais os serviços são disponibilizados na internet?
  - Valor (Estadual): 65,74

- **Egov021-Egov028**. A legislação estadual que regulamenta a Lei de Acesso à Informação:
  - Valor (Estadual): 85,19

- **Egov031-Egov036**. Por quais meios o governo estadual possibilita aos cidadãos realizar solicitação de acesso à informação pública com base na Lei de Acesso à Informação:
  - Valor (Estadual): 65,93

- **Etic231-Etic235**. O governo estadual, nos últimos 12 meses, realizou pela internet:
  - Valor (Estadual): 88,89

- **Egov26**. O estado possui Conselho Estadual de Transparência ou similar?
  - Valor (Estadual): 51,85

### 12.3.5 Recorte de Capitais

*Definição:* Conjunto das variáveis do Objetivo 9 com observação por capital, agregadas para leitura federativa municipal. Reúne 6 variáveis MUNIC 2024 (2 do bloco transparência ativa, 2 do bloco LAI e 2 do bloco participação). Inclui variáveis também classificadas em outras dimensões temáticas (única exceção à regra de não-repetição entre dimensões). Sem subdivisão nesta fase.

*Média Capitais:* 78,1 (n=6; 6 itens).

![Recorte de Capitais do Objetivo 9](../graficos/recortes/cap12_capitais.png)

**Indicadores:**

*MUNIC 2024 (IBGE), bloco transparência ativa:*

- **Mtic271**. Existe atualmente no município: Portal da transparência
  - Valor (Capitais): 100,00 (27/27 capitais)

- **Mtic12a6**. Dentre os serviços informativos quais os disponibilizados atualmente para o público em geral na página da Internet são: Finanças públicas
  - Valor (Capitais): 100,00 (27/27 capitais)

*MUNIC 2024 (IBGE), bloco LAI:*

- **Mgov01**. Existe legislação municipal específica que estabeleça procedimentos e providências para garantir o direito de acesso à informação pública em conformidade com a Lei de Acesso à Informação?
  - Valor (Capitais): 100,00 (27/27 capitais)

- **Mgov05**. A prefeitura publica, para acesso ao público em geral, as respostas das solicitações feitas através da Lei de Acesso à Informação:
  - Valor (Capitais): 50,00 (média sobre as 27 capitais; Belém/PA, única capital sem solicitações em 2023, respondeu "Não publica" e contribui com 0)

*MUNIC 2024 (IBGE), bloco participação:*

- **Mtic251-Mtic255**. A prefeitura, nos últimos 12 meses, realizou pela internet:
  - Valor (Capitais): 81,48 (22/27 capitais)

- **Mgov26**. O município possui Conselho Municipal de Transparência ou similar?
  - Valor (Capitais): 37,04 (10/27 capitais)
