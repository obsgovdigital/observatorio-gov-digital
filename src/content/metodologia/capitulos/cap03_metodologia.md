# 3. Metodologia

Este capítulo apresenta a metodologia comum aos recortes do Índice de Governo Digital — **nacional agregado**, **estadual** e **de capitais** —, bem como as especificidades de cada recorte. Os elementos compartilhados — critérios de seleção de variáveis, normalização, tratamento de não-resposta e fórmula de agregação — são descritos uma única vez. As fontes de dados e limitações são apresentadas com indicação de quais recortes utilizam cada fonte.

Os Capítulos 4 a 13 apresentam, cada um, **um objetivo da ENGD**. Dentro de cada objetivo, as variáveis são organizadas em **dimensões temáticas** — sub-conceitos mais fechados que o objetivo — e, quando há pelo menos duas variáveis com observação por UF ou por capital, também em dimensões federativas dedicadas (`Recorte Estadual` e/ou `Recorte de Capitais`). As médias dimensionais são a unidade de cálculo e de apresentação neste relatório, e não há nota geral por recorte nem escore único da ENGD que agregue os dez objetivos (ver Seção 3.3.4). Esta cobertura editorial dos dez objetivos não equivale ao escopo da plataforma pública do Observatório: as dimensões do Objetivo 3 permanecem descritas no relatório, como diagnóstico de uma lacuna de informação, mas não serão publicadas na plataforma — decisão registrada na Seção 3.4.1.

---

## 3.1 Seleção de Bases de Dados

**Nota:** A ENGD não deve ser confundida com a EFGD (Estratégia **Federal** de Governo Digital, Decreto nº 12.198/2024), que é específica para o Poder Executivo Federal e possui 16 objetivos próprios.

### 3.1.1 Processo geral de identificação

Partimos das bases de dados citadas no projeto de pesquisa e buscamos, com auxílio de agentes de IA com acesso a ferramentas de busca, um conjunto maior de bases de dados relacionados a Tecnologia da Informação e Comunicação. Esse processo foi repetido até atingir saturação.

Foram selecionadas as bases que contêm pelo menos uma variável relacionada a governo digital e cuja frequência tem sido constante e não foi interrompida.

**Não cumpriram o requisito de ter variável relacionada a governo digital:**

- Pesquisa Anual do Uso de TI no Brasil (FGVcia)
- Estudo de TIC (Softex)
- Panorama das Empresas de TIC (SEBRAE)
- Digital in Brazil (DataReportal)
- TIC Empresas, TIC Provedores, TIC Kids Online Brasil, Estatísticas TIC Crianças 0-8 (CETIC.br)

**Não cumpriram o requisito de publicação recente e continuidade:**

- TIC Centros Públicos de Acesso (CETIC.br) — interrompida em 2019
- TIC Organizações Sem Fins Lucrativos (CETIC.br) — interrompida em 2022
- Painel TIC (CETIC.br) — interrompido em 2022
- TIC Empresa (IBGE) — interrompida em 2010
- Escala Brasil Transparente (CGU) — interrompida em 2020

Também foi excluído o Ranking de Competitividade dos Estados (CLP) por não produzir dados primários.

Também ficaram de fora os índices internacionais de governo digital discutidos no Capítulo 2, o *E-Government Development Index* (EGDI), das Nações Unidas, o *GovTech Maturity Index* (GTMI), do Banco Mundial, e o *Digital Government Index* (DGI), da OCDE. A razão é a regra do compósito, enunciada adiante no parágrafo sobre o iESGo e aplicada ao iGovTI no Anexo A: sub-índice compósito calculado pela fonte não entra no índice. Os três são compósitos nesse sentido, e o GTMI o é em segundo grau, já que a edição de 2025 usa no próprio cálculo cinco indicadores importados de outros índices, entre eles os três componentes do EGDI, o *E-Participation Index* das Nações Unidas e o *Global Cybersecurity Index* da União Internacional de Telecomunicações.

Em princípio esses índices são decomponíveis. O EGDI se abre em serviços online, infraestrutura de telecomunicações e capital humano, e o GTMI, em quatro sub-índices que somam 48 indicadores, dos quais 43 vêm do questionário próprio e 5 são importados de outros índices. Decompô-los, porém, não resolveria o problema, por duas razões. A primeira é que há variáveis comparativas entre países, e não absolutas. O EGDI aplica padronização por escore-z a cada componente antes de normalizá-lo, de modo que o valor de um país exprime posição em relação à média e à dispersão do conjunto avaliado naquela edição, e os anexos do *E-Government Survey* de 2022 registram, ao tratar do índice de participação eletrônica, que também o EGDI não se destina a medir em sentido absoluto, e sim a captar o desempenho dos países uns em relação aos outros num dado momento. Trazido para um índice de unidades federativas brasileiras, um valor assim descreveria a posição do Brasil entre países, não o estado do ente medido, e o GTMI herda essa característica ao embutir os três componentes do EGDI. A segunda razão é que parte da informação é declarada pelos próprios governos avaliados, e o problema não está na autodeclaração em si. Este índice trabalha com fontes autodeclaradas, entre elas o iGovSISP e o iESGo, cujos vieses a Seção 3.4.2 documenta uma a uma. A diferença é que ali a declaração chega como resposta individual, que o índice usa como observação e pondera item a item, enquanto nesses benchmarks ela chega já agregada num escore que a fonte fechou e que não se pode auditar por dentro. A atualização de 2025 do GTMI foi construída sobre respostas declaradas por 158 economias, colhidas em questionário online aberto a funcionários de cada país, e sobre dados públicos para as demais, cabendo ao Banco Mundial revisar as respostas e entrevistar esses funcionários quando necessário; o DGI é construído sobre questionário respondido por dirigentes de governo digital, com validação posterior das respostas. O EGDI é diferente nesse ponto, e a distinção importa: o componente de serviços online é levantado por pesquisadores independentes, dois por país, orientados a se apoiar apenas em fontes governamentais e a não compartilhar achados com terceiros, cabendo ao questionário enviado aos Estados-membros indicar, entre outras informações, os endereços dos portais a examinar.

A exclusão não é juízo sobre a qualidade desses instrumentos. Ela dialoga com a observação registrada no Anexo C, seção C.1, de que dimensões como conectividade e competências digitais tendem a reduzir o desempenho do Brasil em índices globais, o que não se reproduz nos resultados aqui apresentados. Parte dessa diferença decorre de os objetos serem distintos: os benchmarks internacionais ordenam países entre si, enquanto este índice mede unidades federativas brasileiras a partir de fontes que observam diretamente esses entes. O exame mais detido da comparabilidade dimensão a dimensão, que a mesma entrevista recomenda, permanece como agenda e não é encerrado aqui. Os dois se complementam, e o Observatório se põe ao lado deles, e não subordinado a eles. Diagnosticar a posição do Brasil no mundo continua sendo tarefa dos benchmarks globais; medir a heterogeneidade entre estados e capitais, que a agregação nacional deles tende a ocultar (Abep-Tic, 2024, p. 16), é o que este índice existe para fazer.

### 3.1.2 Visão geral das fontes

A tabela consolida todas as fontes utilizadas nos recortes do índice. Cada fonte pode participar de um ou mais recortes conforme a granularidade e disponibilidade dos dados.

| Fonte | Instituição | Edição | Nacional | Estadual | Capitais | Variáveis |
|-------|-------------|:------:|:--------:|:--------:|:--------:|:---------:|
| TIC Governo Eletrônico | CETIC.br | 2023 | ✓ | | | 42 |
| TIC Saúde | CETIC.br | 2024 | ✓ | | | 19 |
| TIC Educação | CETIC.br | 2024 | ✓ | | | 6 |
| TIC Cultura | CETIC.br | 2024 | ✓ | | | 0 |
| TIC Domicílios | CETIC.br | 2024 | ✓ | | | 0 |
| IOSPD | ABEP-TIC | 2025 | ✓ | ✓ | | 48 |
| iGovSISP | SGD/MGI | 2025 | ✓ | | | 111 |
| iESGo | TCU | 2024 | ✓ | | | 21 |
| PNAD Contínua TIC | IBGE | 2024 | ✓ | | | 1 |
| ANATEL Telecomunicações | ANATEL | 2025 | ✓ | | ✓ | 1 |
| Censo Escolar | INEP | 2024 | ✓ | | ✓ | 5 |
| ESTADIC | IBGE | 2024 | ✓ | ✓ | | 28 |
| MUNIC | IBGE | 2024 | ✓ | | ✓ | 59 |

A TIC Cultura e a TIC Domicílios permanecem catalogadas, mas nenhum dos seus indicadores integra o índice na edição atual: os da TIC Cultura estão suspensos até a fonte publicar totais nacionais oficiais (a planilha de 2024 não os divulga), e os da TIC Domicílios medem percentuais condicionados a um universo restrito de respondentes (ver Seção 3.2.4). Ambas seguem acompanhadas como séries descritivas.

O iESGo (TCU) integra o índice por meio de vinte questões completas do questionário de governança e do sub-item `3132_C`, e não pelos sub-índices compósitos que o próprio TCU calcula. A distinção é a mesma que orienta o catálogo inteiro: sub-índice compósito calculado pela fonte não entra, porque o índice o recalcularia sobre um agregado que já embute pesos de outra metodologia; a questão individual entra, porque é observação. Foram os 7 sub-índices de TI que saíram na revisão de redundância, e não a fonte (ver Anexo A). As questões observam 387 órgãos dos três Poderes, na população de órgãos federais, e acrescentam ao índice um corte por Poder que nenhuma outra fonte oferece.

**Princípio de seleção por nível:**

- **Recorte nacional agregado:** Fontes com dados agregados nacionais e publicação recente. MUNIC e ESTADIC participam do recorte nacional com dados agregados (proporções nacionais) e dos recortes subnacionais com dados individualizados.
- **Recorte estadual:** Apenas fontes que medem **diretamente** o governo estadual. Fontes que medem prefeituras (TIC Gov), escolas (Censo Escolar) ou domicílios (PNAD TIC) foram excluídas por atribuírem ao estado o desempenho de outros atores. Fontes sem dados por UF (iGovSISP) também foram excluídas.
- **Recorte de capitais:** Fontes com granularidade municipal e identificação individual. Pesquisas amostrais sem recorte municipal (CETIC.br, PNAD) foram excluídas.

### 3.1.3 Fontes do recorte nacional agregado

O recorte nacional agregado utiliza 13 fontes catalogadas, das quais 11 contribuem com os 341 indicadores ativos — que entram na agregação como 256 componentes segundo a regra dimensional descrita na Seção 3.3.4. As principais fontes são:

- **Pesquisas CETIC.br** (5 pesquisas catalogadas, das quais 3 fornecem 67 variáveis ativas): TIC Governo Eletrônico (bienal, 42 variáveis), TIC Saúde (anual, 19) e TIC Educação (anual, 6). A TIC Cultura (bienal) e a TIC Domicílios (anual) permanecem catalogadas sem indicador ativo na edição atual (ver Seção 3.1.2). O total reflete o desmembramento de variáveis multi-item em entradas individuais (ver Seção 3.2.3). Quatro pesquisas requerem Termo de Acesso e Uso com o NIC.br; TIC Domicílios tem microdados livres.
- **IOSPD (ABEP-TIC)**: Índice anual de oferta de serviços públicos digitais, avaliando portais estaduais em 5 dimensões. Desagregado em 48 indicadores individuais ativos que mapeiam para 8 dos 10 objetivos ENGD: Capacidades (I.1-I.13), Serviços (II.1-II.12), Normatização (III.1a-III.7), Linguagem Simples (IV.1-IV.9) e Inovação (V.1-V.9). Dados detalhados por UF disponíveis na edição utilizada.
- **iGovSISP (SGD/MGI)**: Autodiagnóstico anual de maturidade em governança de TI aplicado a 234 órgãos SISP (Poder Executivo Federal). 111 variáveis ativas. As variáveis são normalizadas conforme o tipo de escala: Likert 1-5 → % concordantes (níveis 4-5); Sim/Não → % Sim; ordinais de maturidade → % órgãos que iniciaram adoção (nível 2+) ou atingiram qualquer estágio acima do mínimo (≠ nível 1), conforme o grupo; proporcional 1-5 → média linear (1=20, ..., 5=100). Foram excluídas 14 variáveis condicionais de infraestrutura respondidas por subconjuntos pequenos (N=76-132, 32-56% dos órgãos), além de duas perguntas de percepção — a priorização da TI na elaboração da PLOA e a prioridade dada à inovação —, retiradas por estarem fora da seleção canônica do autodiagnóstico. Limitações: autodiagnóstico sem verificação externa; ruptura temática na Dimensão 2 entre 2023 e 2024; Dimensão 4 ausente dos relatórios públicos.
- **Censo Escolar (INEP)**: Microdados anuais de escolas brasileiras. 5 indicadores binários agregados como proporção nacional.
- **ANATEL**: Dados regulatórios de telecomunicações.
- **PNAD Contínua TIC (IBGE)**: Módulo rotativo de acesso a TIC nos domicílios.
- **MUNIC (IBGE)**: Pesquisa censitária aplicada a todos os 5.570 municípios brasileiros, com suplemento de Informática e Comunicação. No recorte nacional, os 59 indicadores binários são agregados como proporção nacional (% de municípios com a capacidade). No recorte de capitais, os dados individuais das 27 capitais compõem as dimensões federativas correspondentes.
- **ESTADIC (IBGE)**: Pesquisa censitária aplicada às 27 Unidades da Federação, com suplementos de Informática e Comunicação e Governança. No recorte nacional, os 28 indicadores são agregados como média das UFs. No recorte estadual, os dados individuais por UF compõem as dimensões federativas correspondentes.

### 3.1.4 Fontes do recorte estadual

O recorte estadual utiliza 2 fontes que medem diretamente o governo estadual, totalizando 76 variáveis distribuídas em 9 dos 10 objetivos. Em 7 desses objetivos há ao menos duas variáveis com observação por UF — o mínimo para compor a dimensão `Recorte Estadual` nos capítulos de resultados. Os Objetivos 1 e 8 têm apenas 1 variável com observação por UF cada: abaixo do mínimo de duas, ela não forma dimensão federativa e, portanto, não gera valor publicado no recorte estadual — aparece dentro da dimensão temática em que foi classificada, com a observação por UF explicitada na listagem do indicador. O Objetivo 10 não tem variável com observação por UF no catálogo ativo:

**IOSPD (ABEP-TIC).** 48 indicadores individuais (ver descrição na Seção 3.1.3) — todos os ativos da visão Nacional têm observação por UF e integram o recorte. Fonte dominante (63,2% das variáveis).

**ESTADIC (IBGE).** Pesquisa censitária (N=27 UFs), suplemento TIC quinquenal. Fornece 28 variáveis ao recorte estadual, nos suplementos "Informática e Comunicação" (códigos Etic) e "Governança" (códigos Egov).

**Escolha de fontes diretas:** O recorte estadual utiliza apenas fontes que medem diretamente a atuação do governo estadual. Esta decisão elimina a distorção causada por indicadores indiretos — dados de prefeituras municipais, escolas ou domicílios agregados por UF — que atribuiriam ao governo estadual o desempenho de atores que ele não controla diretamente. Fontes indiretas como TIC Governo Eletrônico (que entrevista prefeituras), Censo Escolar e PNAD TIC foram excluídas do recorte estadual para evitar essas distorções.

**Justificativa da inclusão da ESTADIC:** A ESTADIC participa tanto do recorte nacional agregado (com valores agregados — média das 27 UFs) quanto do recorte estadual (com dados individualizados por UF). No recorte estadual, sua inclusão é indispensável: (1) é a única pesquisa censitária (N=27) que interroga diretamente o governo estadual sobre TIC, governança digital, transparência e LGPD; (2) complementa o IOSPD com variáveis de infraestrutura, inclusão digital e transparência.

**Fontes excluídas do recorte estadual:**

- TIC Governo Eletrônico (CETIC.br): entrevista prefeituras municipais, com dados agregados por UF — "SP" nesta fonte significa a média das prefeituras paulistas, não o Governo do Estado de São Paulo
- Censo Escolar (INEP): mede infraestrutura escolar, não ações do governo estadual
- PNAD TIC (IBGE): mede acesso domiciliar, indicador socioeconômico
- iGovSISP (SGD/MGI), ANATEL: sem dados desagregados por UF

### 3.1.5 Fontes do recorte de capitais

O recorte de capitais utiliza 3 fontes com granularidade municipal, totalizando 65 indicadores para 27 capitais (os Objetivos 1, 3 e 5 têm apenas 1 variável com observação por capital cada, abaixo do mínimo de duas para compor recorte federativo):

| Fonte | Instituição | Cobertura | Edição | Indicadores |
|-------|-------------|-----------|:------:|:-----------:|
| MUNIC | IBGE | 5.570 prefeituras (censo), filtradas 27 capitais | 2024 | 59 |
| ANATEL Cobertura Móvel | ANATEL | 5.570 municípios, filtradas 27 capitais | 2025 | 1 |
| Censo Escolar | INEP | escolas brasileiras filtradas pelas 27 capitais | 2024 | 5 |

**Fontes excluídas por não produzirem dados individualizados por município:** TIC Governo Eletrônico (dados agregados), iGovSISP/IOSPD (federais/estaduais), pesquisas CETIC amostrais e PNAD TIC.

---

## 3.2 Seleção de Variáveis

### 3.2.1 Critérios de exclusão

Com o auxílio do Claude Code, fizemos um filtro inicial para identificar, em cada base de dados, quais variáveis contêm alguma conexão com governo digital. Em seguida, foram excluídas as variáveis que se enquadram em pelo menos um dos seguintes critérios:

**(i)** Detalhe técnico irrelevante, que mede características de implementação sem impacto na avaliação de qualidade do serviço;
**(ii)** Percepção não-atribuível, que mede opinião da população influenciável por fatores externos às ações do governo, critério que alcança variáveis do índice e não a coleta de feedback junto a usuários e servidores sobre a usabilidade dos produtos do Observatório, que é insumo qualitativo de aprimoramento;
**(iii)** Fora do escopo ENGD, que mede comportamento individual de cidadãos ou atividades não diretamente relacionadas aos objetivos da estratégia;
**(iv)** Redundância com variável mais adequada já incluída;
**(v)** Metadados de pesquisa, que servem para controle amostral e não constituem indicadores de governo digital;
**(vi)** Tecnologia muito específica, sem correspondência com recomendações da ENGD; e
**(vii)** Política interna ou detalhe operacional, que trata de decisões administrativas internas dos órgãos; e
**(viii)** Percentual condicionado a pergunta-filtro cujo universo elegível cobre menos de 90% da população-alvo, caso em que profundidade entre elegíveis não pode ser lida como prevalência na população geral (ver Seção 3.2.4).

A lista completa de variáveis excluídas encontra-se no Anexo A.

As variáveis não excluídas foram inicialmente organizadas tanto a nível de objetivo da Estratégia Nacional de Governo Digital quanto a nível de recomendação formalizada via Portaria SGD/MGI nº 5.395/2026. Este maior detalhamento permitiu que a conexão entre as variáveis e os objetivos fosse mais precisa. Para fins de construção do índice, a classificação primária permanece no nível de objetivo; para fins de apresentação nos capítulos de resultados, cada objetivo é subdividido em dimensões temáticas e, quando aplicável, em recortes federativos.

### 3.2.2 Resumo por recorte

| Recorte | Fontes | Variáveis | Objetivos cobertos |
|--------|:------:|:---------:|:------------------:|
| Nacional agregado | 11 | 341 | 10/10 |
| Estadual | 2 | 76 | 7/10 (Obj. 1 e 8 com uma única variável por UF; Obj. 10 sem variável por UF) |
| Capitais | 3 | 65 | 4/10 (Obj. 1, 3 e 5 com uma única variável por capital; Obj. 7, 8 e 10 sem variável por capital) |

Os totais acima se referem ao catálogo ativo utilizado para a construção dos recortes. Nos capítulos de resultados, variáveis em revisão de classificação podem ficar temporariamente fora do dimensionamento textual do objetivo; nesses casos, o próprio capítulo registra a diferença entre o catálogo ativo e o conjunto efetivamente dimensionado.

### 3.2.3 Tratamento de variáveis com múltiplos sub-itens

Algumas variáveis das pesquisas CETIC.br possuem múltiplos sub-itens (por exemplo, "quais sistemas de informação o órgão utiliza?", com 12 opções). Uma abordagem simples seria agregar esses sub-itens por média aritmética, produzindo um único valor por variável. Essa abordagem apresenta dois problemas: (1) diluía a informação quando os sub-itens mediam conceitos fundamentalmente diferentes, e (2) penalizava entes que não adotavam todos os sub-itens, mesmo quando a adoção de apenas um já indicava capacidade relevante.

As 22 variáveis multi-item foram reclassificadas em três grupos:

**Grupo A — Desmembramento em variáveis individuais (9 variáveis → 57 novas entradas).** Aplicado quando os sub-itens medem conceitos substantivamente distintos. Cada sub-item passa a ser uma variável independente no catálogo, com peso próprio na média da dimensão. Exemplos: B4 (sistemas de informação: recursos humanos, finanças, geoprocessamento, apoio à decisão, protocolos, ERP), G3 (ações relacionadas à LGPD) e A12 (medidas adotadas em relação à LGPD nos estabelecimentos de saúde). Parte das famílias desmembradas em rodadas anteriores — B8 (processos de gestão de TI), F2C (áreas monitoradas por centro de operações) e H7 (temas de formação continuada) — saiu posteriormente do índice por medir percentuais condicionados a um universo restrito de respondentes (ver Seção 3.2.4).

**Grupo B — Agregação por máximo (8 variáveis).** Aplicado quando o relevante é a existência de pelo menos um sub-item, não a quantidade. O valor da variável passa a ser o máximo das proporções dos sub-itens. Essa abordagem produz um **limite inferior** da proporção real de "pelo menos um": como os dados são proporções agregadas (ex: "61.3% dos órgãos usam IaaS"), não é possível calcular a união exata P(A∪B∪C∪D) sem acesso aos microdados individuais. O máximo garante que o valor reportado é conservador. Exemplos: C3 (serviços disponibilizados no website), C5B (meios de contato com a central de atendimento) e E4A (mecanismos de participação social). Revisões posteriores do catálogo ajustaram a composição desse grupo — itens excluídos por redundância ou por universo restrito e variáveis de outras pesquisas CETIC incorporadas à mesma regra —, de modo que o catálogo ativo conta 6 variáveis agregadas por máximo (ver Seção 3.3.4).

**Grupo C — Exclusão (5 variáveis).** Aplicado quando os sub-itens representam detalhes técnicos já capturados por uma variável parent, ou quando a variável mede comportamento do cidadão (demanda) e não capacidade do governo (oferta). Exemplos: H3A (aplicações de IA — H3 já captura "usou IA?"), G2 (tipos de serviço público acessado — variável de demanda, oferta já coberta por C1).

A lista de variáveis excluídas e desmembradas consta no Anexo A.

O desmembramento do Grupo A resolve o problema da diluição conceitual, mas cria outro: uma pergunta com muitos sub-itens passa a pesar muitas vezes na média da dimensão. A revisão de redundância tratou esse desequilíbrio com o mecanismo de **baterias como subscore**, descrito na Seção 3.3.4: os itens desmembrados de uma mesma pergunta-mãe que permanecem ativos são identificados como uma bateria e voltam a contar, juntos, como um único componente na média da dimensão — preservando a leitura individual de cada item nos capítulos de resultados.

### 3.2.4 Percentuais condicionados a pergunta-filtro

Várias pesquisas publicam percentuais condicionados a uma pergunta-filtro anterior — por exemplo, "entre os entes que possuem área de TI, quantos têm plano diretor de TI?". Nesses casos, o denominador do indicador não é a população-alvo do índice, mas apenas o subconjunto que passou pelo filtro. O critério adotado é o seguinte: um percentual condicionado só permanece no índice quando o universo elegível definido pela pergunta-filtro cobre ao menos 90% da população-alvo em todas as populações investigadas pela pergunta. Quando permanece, o indicador entra com o valor publicado pela fonte, sem reescalonamento, e com o universo condicionante nomeado no próprio indicador. Quando o filtro cobre menos que isso, o indicador é excluído do índice e preservado como série descritiva: profundidade entre elegíveis não pode ser lida como prevalência na população geral — um percentual alto entre poucos elegíveis diria pouco sobre o conjunto dos entes.

Quatro casos reais ilustram a aplicação do critério:

- **Área de TI (TIC Governo Eletrônico):** a pergunta-filtro cobre 90,8% dos órgãos públicos, mas apenas 45,0% das prefeituras. Como a pergunta é feita às duas populações, todos os percentuais condicionados à existência de área de TI ficam fora do índice.
- **Centro de operações (TIC Governo Eletrônico):** presente em 32,6% das prefeituras; as áreas monitoradas pelo centro de operações são medidas apenas nesse subconjunto e ficam fora do índice.
- **Formação continuada (TIC Educação):** 53,5% dos professores participaram de formação continuada nos últimos 12 meses; os temas abordados nessas formações são medidos apenas entre os participantes e ficam fora do índice.
- **Usuários de Internet (TIC Domicílios):** os indicadores de governo eletrônico são publicados apenas para usuários de Internet de 16 anos ou mais, universo que corresponde a 83,8% da população dessa faixa etária — abaixo do corte de 90% —, e ficam fora do índice.

---

## 3.3 Normalização e Agregação

### 3.3.1 Escalas de normalização

A normalização converte todos os indicadores para uma escala comum de 0 a 100. A tabela consolida as transformações aplicadas em todos os recortes:

| Escala Original | Transformação | Exemplo | Fontes | Recortes |
| :--- | :--- | :--- | :--- | :--- |
| Proporção 0-100% | Usado diretamente | 55% → 55.0 | CETIC (todas), PNAD TIC | Nacional |
| Índice 0-10 | Multiplicado por 10 | 5.87 → 58.7 | IOSPD (ABEP-TIC) | Nacional, Estadual |
| Binarização Likert 1-5 | % concordantes (níveis 4-5) | 75.3% → 75.3 | iGovSISP (SGD/MGI) | Nacional |
| Ordinal maturidade 1-5 (adoção) | % respondentes nível 2+ (iniciou adoção ou superior) | 90.6% → 90.6 | iGovSISP (SGD/MGI) | Nacional |
| Ordinal maturidade 1-5 (maturidade) | % respondentes nível ≠1 (qualquer estágio iniciado) | 82.1% → 82.1 | iGovSISP (SGD/MGI) | Nacional |
| Ordinal 1-4 (iGovSISP) | % respondentes nível ≠1 (acima do mínimo) | 74.4% → 74.4 | iGovSISP (SGD/MGI) | Nacional |
| Proporcional 1-5 (iGovSISP) | Média ponderada linear: 1→20, 2→40, …, 5→100 | 61.5 → 61.5 | iGovSISP (SGD/MGI) | Nacional |
| % de escolas | Proporção já calculada | 45% → 45.0 | Censo Escolar (pré-agregado) | Nacional, Capitais |
| Sim/Não | Sim=100, Não=0 | Sim → 100 | ESTADIC (binárias), MUNIC | Nacional, Estadual, Capitais |
| Proporção multi-item | (sub-itens positivos / total) × 100 | 5/8 → 62.5 | ESTADIC (multi-item) | Nacional, Estadual |
| Ordinal (ESTADIC) | Conforme escala definida | Diariamente → 100 | ESTADIC (freq. redes, modelo acessibilidade) | Nacional, Estadual |
| Proporção 0-1 | Multiplicado por 100 | 0.924 → 92.4 | ANATEL cobertura móvel | Nacional, Capitais |
| Binário escolas | (soma_positivos / total) × 100 | 1200/1500 → 80.0 | Censo Escolar (microdados por capital) | Capitais |
| Categórica (internet MUNIC) | Valor válido=100, "-"/"Não possui"=0 | "Via rádio" → 100 | MUNIC (1 indicador: acesso à internet) | Nacional, Capitais |

Todos os valores normalizados são limitados ao intervalo [0, 100].

O Censo Escolar registra, para cada escola, se ela possui determinado recurso (por exemplo, acesso à Internet: sim ou não). Para o recorte nacional agregado, calcula-se a porcentagem de escolas que possuem cada recurso em nível nacional, produzindo um valor entre 0% e 100% que é usado diretamente. Para o recorte de capitais, o cálculo é feito por capital (porcentagem de escolas daquela capital).

Para variáveis ESTADIC com múltiplos sub-itens (ex.: Etic01 com 8 opções), calcula-se a proporção de sub-itens "positivos" (Sim) em relação ao total de sub-itens possíveis (excluindo "Nenhum" e "Não sabe"), produzindo um valor entre 0% e 100%. Uma exceção é ESTADIC_DESENV_SOFTWARE (Etic09), tratada como binária: se o governo estadual desenvolveu software para qualquer finalidade (interna ou externa), o valor é 100; caso contrário, 0.

### 3.3.2 Tratamento de não-resposta

O índice não tem um tratamento único de não-resposta: são três regimes, e cada um vale para um conjunto declarado de fontes.

**Imputação de zero, nas fontes de resposta declarada.** Na ESTADIC e na MUNIC, em que cada ente responde individualmente, respostas "Não informou" e "Não sabe" são convertidas em score 0, presumindo que a ausência de resposta indica ausência da capacidade avaliada. A premissa é que um governo que possui a capacidade teria condições de responder afirmativamente; a não-resposta é, portanto, evidência da ausência. Ela é conservadora e pode subestimar entes que possuem a capacidade mas não responderam por razões administrativas.

Nas 30 colunas de score do iESGo consumidas pela edição ativa, as 387 linhas estão completas: não há célula ausente. Portanto, nenhum valor publicado desta edição resulta de imputação por ausência física no arquivo de origem. Esse fato observado não define o tratamento de uma eventual ausência em edição futura.

**Ausência de imputação, nas fontes já agregadas.** As pesquisas do CETIC.br chegam ao índice como percentuais publicados, com a não-resposta já dentro do percentual. Aqui nada é imputado: célula vazia permanece como dado faltante.

**Exclusão do denominador, na ausência estrutural.** Variável não disponível na edição utilizada, ou que não observa aquele ente, não vira zero: sai da média. Um ente sem nenhum componente observado numa dimensão fica sem escore naquela dimensão, nunca com escore zero — o que distingue "medimos e não há" de "não medimos".

A diferença entre os regimes é de tratamento, e este capítulo não afirma que ela desloque a ordenação publicada: essa é uma pergunta empírica, e não uma consequência da regra.

A decisão metodológica completa está documentada em `metodologia/decisoes-fase0.md` (seção 1.5).

### 3.3.3 Abordagem snapshot

O índice utiliza a edição mais recente de cada fonte, construindo a melhor fotografia possível do governo digital brasileiro com os dados disponíveis. Cada fonte contribui com exatamente uma observação. Essa escolha maximiza a cobertura temática — inclui variáveis recentes (como indicadores de IA e LGPD) que seriam excluídas em uma abordagem de série temporal — e evita os riscos de comparar edições com questionários reestruturados ou módulos renomeados.

### 3.3.4 Cálculo dos escores por dimensão

O cálculo técnico é análogo nos três recortes, respeitando a unidade de análise de cada um: agregado nacional, UF ou capital. Ele tem dois passos, e o segundo entrega a média da dimensão, que é o que este relatório publica.

**Passo 1 — Baterias como subscore:** Vários indicadores do catálogo são itens de uma mesma pergunta-mãe — por exemplo, os 10 itens sobre o conteúdo do PDTIC no iGovSISP, ou os 5 itens de acessibilidade do website na MUNIC. Se cada item entrasse na média da dimensão com peso próprio, a pergunta-mãe pesaria tantas vezes quantos itens tivesse, desequilibrando a dimensão em favor das perguntas mais longas — efeito tanto mais forte quanto menor a dimensão. Para evitar isso, esses grupos são identificados no catálogo como **baterias**: os itens de uma mesma bateria são primeiro agregados entre si por média simples (dos itens com dado), e essa média entra na média da dimensão como um único componente, com peso 1.

Quando os itens de uma mesma bateria foram classificados em dimensões diferentes do objetivo, o subscore é calculado **por dimensão**, sobre os itens da bateria que pertencem àquela dimensão — a bateria continua contando uma vez em cada dimensão em que tem presença, e nunca atravessa a fronteira dimensional. Quatro das dezenove baterias do catálogo ativo estão nessa situação: a dos sistemas administrativos da TIC Governo Eletrônico (12 itens, repartidos em duas dimensões do Objetivo 8), a do conteúdo do PDTIC no iGovSISP (10 itens, em três dimensões do Objetivo 1) e as dos artefatos e dos processos de dados no iGovSISP (6 itens cada, em duas dimensões do Objetivo 5). Somadas as demais, as 19 baterias reúnem 109 variáveis e rendem 24 subscores nas dimensões temáticas; com os 232 indicadores avulsos, o índice agrega **256 componentes**. O mecanismo vale igualmente nas três visões (Nacional, Estadual e Capitais); as dimensões federativas (`Recorte Estadual` e `Recorte de Capitais`) recalculam o subscore sobre a sua própria composição.

> Subscore da bateria = soma dos valores dos itens da bateria ÷ número de itens com dados

**Passo 2 — Média por dimensão:** Para cada unidade de análise e para cada dimensão, calcula-se a média simples de todos os componentes disponíveis (indicadores avulsos e subscores de bateria, já normalizados para 0-100). Cada componente tem peso igual.

> Média da dimensão = soma dos valores dos componentes ÷ número de componentes com dados

**Não há agregação acima da dimensão no que este relatório publica.** As médias dimensionais são o que os Capítulos 4 a 13 reportam, e o índice não produz nota geral por recorte nem escore único do conjunto dos dez objetivos. A razão é que os objetivos reúnem coberturas e universos de respondentes muito desiguais — o Objetivo 2 tem 102 variáveis ativas, organizadas em 80 componentes, enquanto o Objetivo 3 tem quatro —, de modo que uma média entre eles produziria um número sem referente interpretável, cuja variação refletiria a composição do catálogo tanto quanto o fenômeno medido. Pela mesma razão, não há ranking geral de unidades da federação nem de capitais: toda ordenação de entes é específica do recorte em que aparece, e o recorte é nomeado junto do resultado.

Nos Capítulos 4 a 13, cada dimensão temática reporta sua `Média Nacional` e cada dimensão federativa reporta a média do recorte correspondente (`Média Estadual` ou `Média Capitais`). A listagem de indicadores de cada dimensão exibe cada item individualmente, com os grupos de bateria sinalizados: a listagem é a leitura detalhada da dimensão, enquanto o subscore da bateria é o que entra na média. As médias impressas seguem a regra do Passo 1: o colapso de baterias está aplicado, e cada média traz os dois números que a descrevem, no formato `(n=N; M itens)`, em que `n` é o número de componentes que entraram na média e a contagem de itens é a de indicadores com dado antes do colapso. Os dois coincidem nas dimensões sem bateria e diferem naquelas em que há.

**Leitura das médias dimensionais — universos heterogêneos:** Os indicadores reunidos numa mesma dimensão temática provêm, em regra, de fontes com universos de respondentes distintos — órgãos públicos, prefeituras, estabelecimentos de saúde, professores, escolas, unidades da federação. A média dimensional é, portanto, um escore de conceito, na mesma natureza descrita adiante para as variáveis medidas em dois universos: **não corresponde a uma proporção de entes** e não deve ser lida como "X% de alguma população". Pela mesma razão, a amplitude entre os indicadores de uma dimensão reflete, em parte, a mudança de pergunta e de denominador entre as fontes, e não apenas diferenças reais de adoção ou maturidade. O caso mais visível é a dimensão de inteligência artificial e tecnologias emergentes do Objetivo 7, cujos componentes variam de 3.7 (proporção de estabelecimentos de saúde que utilizam tecnologias emergentes) a 66.7 (escore médio das unidades da federação no uso de ciência de dados, inteligência artificial ou algoritmo em serviços ao cidadão).

**Exceção — variáveis com agregação por máximo:** 6 variáveis multi-item utilizam o máximo dos sub-itens em vez da média (ver Seção 3.2.3). Nesse caso, o valor que entra como componente é `max(sub-itens)`, representando o limite inferior da proporção de entes com pelo menos um sub-item adotado.

**Exceção — variáveis medidas em dois universos (TIC Governo Eletrônico):** A pesquisa TIC Governo Eletrônico investiga duas unidades de análise por questionários distintos, e publica um resultado para cada: os órgãos públicos federais e estaduais dos quatro poderes (677 respondentes) e as prefeituras (4.265 respondentes, censo dos municípios). Parte das perguntas é comum aos dois instrumentos — a mesma questão, redigida "O órgão/prefeitura possui uma área de TI?", é feita aos dois universos. Para essas variáveis, o componente que entra na média da dimensão é a **média das proporções observadas em cada universo, com peso igual** — o conceito conta uma vez, sem favorecer nenhum dos dois universos. Como órgãos federais são sistematicamente mais maduros que prefeituras, usar apenas um dos universos enviesaria o resultado. O valor assim obtido é um escore de conceito: por combinar dois universos com denominadores distintos, **não corresponde a uma proporção de entes** — não se deve lê-lo como "X% dos órgãos e prefeituras". As variáveis exclusivas de um dos questionários entram diretamente, com o universo declarado no indicador.

### 3.3.5 Tratamento de saltos condicionais (ESTADIC e MUNIC)

Algumas perguntas da ESTADIC e da MUNIC dependem de uma resposta anterior: se o ente respondeu "Não" a uma pergunta-mãe, as perguntas de detalhamento recebem "-" (salto condicional). Há duas formas de lidar com isso, e a escolha depende de o filho funcionar como indicador composto agregado ao pai ou como indicador independente.

**ESTADIC — bloco de governança digital:** Manter "-" como dado ausente infla o indicador (só quem tem a capacidade entra no cálculo); tratá-los como 0 penalizaria o estado duplamente (0 no indicador-pai e 0 no indicador-filho), sobretudo quando o pai e os filhos compõem um único conceito.

Três indicadores foram ajustados:

- **ESTADIC_WIFI_COBERTURA** (Etic22): 10 das 27 UFs com "-" na cobertura Wi-Fi por salto condicional. **Solução:** excluir WIFI_COBERTURA, manter apenas WIFI_EXISTE (Obj 6).

- **ESTADIC_INCLUSAO_ACOES** (Etic19): 1 UF com "-" nas ações de inclusão digital. **Solução:** excluído, mantendo apenas INCLUSAO_PROGRAMA (Obj 6).

- **ESTADIC_PARTICIP_INTERNET** (Etic23): o indicador composto continha 5 perguntas-pai e 16 perguntas-filhas sobre canais, amplificando o peso do "Não" de 1x para 5x. **Solução:** restringir às 5 perguntas-pai, excluindo as 16 perguntas de canal (Obj 9).

**MUNIC — bloco LAI municipal:** A pergunta-mãe `MUNIC_LAI_LEI` (existência de legislação municipal específica) tem 4 perguntas-filhas sobre o conteúdo dessa legislação (prazo de resposta, autoridade de monitoramento, órgão central, relatório anual) que só são feitas quando o município responde "Sim" à pergunta-mãe. Na revisão de redundância, as 4 filhas foram excluídas do índice: o degrau lógico entre existência da lei e detalhes do seu conteúdo fica representado pela variável mais geral, `MUNIC_LAI_LEI`, que permanece ativa (ver Anexo A). Com isso, o bloco deixa de exigir tratamento especial de salto condicional.

### 3.3.6 Notas metodológicas específicas por recorte

**Recorte nacional agregado:**

1. **Tabelas publicadas em vez de microdados:** O Censo Escolar (INEP) e a PNAD Contínua TIC (IBGE) possuem microdados públicos, mas nesta edição utilizamos valores agregados extraídos das Sinopses Estatísticas e tabelas oficiais publicadas.
2. **Cobertura variável por objetivo:** Nem todos os objetivos possuem o mesmo número de indicadores. Objetivos com mais indicadores têm medições mais robustas.
3. **Desagregação de compostos:** Os 5 scores dimensionais do IOSPD (DIM1-5) e o IOSPD Geral foram substituídos por indicadores individuais, permitindo mapeamento ENGD preciso por indicador. Após exclusões de compósitos, indicadores saturados e redundâncias, 48 indicadores IOSPD permanecem ativos.
4. **Exclusão dos sub-índices do iESGo:** As entradas originais do iESGo eram sub-índices compósitos calculados pelo TCU (GovernancaTI, PlanejamentoTI, RiscosTISegInfo, entre outros), e a decisão de compor o índice apenas com variáveis individuais as excluiu. O que entrou no lugar foram as questões do próprio questionário, que são observação e não agregado; as dimensões de sustentabilidade ambiental e social seguem excluídas por não terem componente digital — critério (iii), fora do escopo ENGD.
5. **Indicadores reclassificados:** C7 (Acesso público à Internet) integra exclusivamente o Objetivo 6; H3C (IA generativa) integra exclusivamente o Objetivo 7.
6. **ANATEL — densidade de banda larga:** O indicador de densidade de acessos de banda larga fixa por 100 domicílios está suspenso do índice até que numerador e denominador provenham de fontes oficiais versionadas (ANATEL e IBGE); a fonte permanece representada pela cobertura móvel.
7. **Nível de análise do recorte nacional agregado:** Este recorte opera no nível nacional agregado, combinando indicadores de diferentes esferas de governo. Fontes federais (iGovSISP) medem órgãos da União; fontes estaduais (ESTADIC, IOSPD) contribuem com proporções agregadas de governos estaduais; fontes municipais (MUNIC) contribuem com proporções de municípios com cada capacidade; e pesquisas setoriais (CETIC.br, Censo Escolar) medem equipamentos públicos de saúde, educação e cultura. Os recortes estadual e de capitais utilizam fontes e metodologias adaptadas aos seus níveis de análise (ver seções 3.1.4 e 3.1.5).
8. **Exclusão por escala incompatível:** Variáveis expressas em contagens absolutas ou valores monetários — como o número total de acessos de banda larga fixa (ANATEL) — não se expressam naturalmente na escala 0-100 e não possuem meta de referência para normalização. Quando disponível, utilizou-se uma variável alternativa da mesma fonte já expressa em percentual. A lista completa consta no Anexo A.
9. **Inclusão do iGovSISP:** O recorte nacional incorpora 111 variáveis ativas do iGovSISP (edição 2025, 234 órgãos SISP), contribuindo com peso significativo nos objetivos 1, 4, 5, 6, 8 e 10. Para variáveis com escalas Likert e ordinais 1-5 e 1-4, foram aplicadas regras de binarização por grupo: (a) **Likert 1-5**: % de órgãos concordantes (níveis 4-5); (b) **Adoção**: % de órgãos com nível ≥2 (iniciou adoção ou superior); (c) **Maturidade** (incluindo Dim 3 e Dim 6): % de órgãos com nível ≠1 (qualquer estágio acima de "Não iniciado"); (d) **Proporcional** (`G106GPS` e `G130GP`): média ponderada linear 1→20, ..., 5→100. Foram excluídas 14 variáveis condicionais de infraestrutura (blocos Centro de Dados N=115, WAN N=132 e Nuvem Contratada N=76) respondidas por subconjuntos significativamente menores que os 234 órgãos totais (32-56%), duas perguntas de percepção — a priorização da TI na elaboração da PLOA e a prioridade dada à inovação — fora da seleção canônica do autodiagnóstico, além das exclusões por redundância listadas no Anexo A. Limitações: (a) autodiagnóstico sem verificação externa; (b) cobre apenas o Poder Executivo Federal (SISP); (c) variáveis "conhece/utiliza" medem familiaridade, não necessariamente adoção efetiva.

**Recorte estadual:**

1. Dominância do IOSPD: 48/76 variáveis (63,2%). A desagregação do IOSPD em indicadores individuais ampliou a cobertura temática, mas concentrou o recorte em uma única fonte. Complementarmente, a ESTADIC contribui com 28 variáveis (36,8%).
2. Cobertura de 7 dos 10 objetivos: os Objetivos 1 e 8 têm apenas 1 indicador com observação por UF cada — abaixo do mínimo de duas variáveis para compor recorte federativo — e o Objetivo 10 não possui variável com observação por UF no catálogo ativo.
3. Cobertura variável por objetivo: Nem todos os objetivos possuem o mesmo número de indicadores. O Objetivo 2 (49 indicadores) tem medição muito mais robusta que os objetivos com 2 indicadores.
4. ESTADIC pesquisa censitária (N=27): valores são observações diretas, não estimativas.
5. Rondônia não respondeu ao suplemento de Governança (0 em 10 variáveis Egov); Bahia respondeu "Não sabe" nas variáveis de LGPD.

**Recorte de capitais:**

1. Binários MUNIC dominam (59/65 indicadores). Indicadores com 100% de prevalência não possuem poder discriminatório entre capitais.
2. Censo Escolar como proxy: mede infraestrutura escolar, não ações diretas da prefeitura. Indicadores binários (tem/não tem internet) não capturam velocidade ou qualidade.
3. ANATEL saturada: cobertura 4G/5G entre 92% e 100% nas capitais. Cobertura nominal ≠ qualidade/velocidade efetiva da conexão.
4. Objetivos 7 (Inovação e Tecnologias Emergentes), 8 (Eficiência e Processos) e 10 (Competências) sem indicadores mapeáveis no escopo municipal do catálogo ativo; os Objetivos 1, 3 e 5 possuem apenas 1 indicador com observação por capital cada, abaixo do mínimo para compor recorte federativo.
5. Comparabilidade com o recorte nacional agregado limitada: os dois recortes utilizam fontes e indicadores diferentes. Os scores não são diretamente comparáveis.
6. Completude total: todas as 27 capitais possuem dados para todas as 65 variáveis do recorte.

**Diferenças entre os recortes:**

| Aspecto | Nacional | Estadual | Capitais |
|---------|----------|----------|----------|
| Unidade de análise | Nacional agregado | UF (27 estados) | Capital (27 capitais) |
| N.º de variáveis | 341 | 76 | 65 |
| N.º de componentes | 256 | 68 | 57 |
| Fontes | 11 | 2 | 3 |
| Objetivos cobertos | 10 | 7 | 4 |
| ESTADIC | Incluída (média das 27 UFs) | Incluída (fonte principal) | N/A |
| MUNIC | Incluída (proporção de 5.570 municípios) | N/A | Incluída (fonte principal) |
| iGovSISP | Incluído | Excluído (sem dados UF) | Excluído (sem dados municipais) |
| TIC Gov, Censo Escolar, PNAD TIC | Incluídos | Excluídos (fontes indiretas) | Censo Escolar incluído; TIC Gov e PNAD excluídos |
| Fonte dominante | iGovSISP (111 var.) | IOSPD (48 var.) | MUNIC (59 var.) |

Os três totais de componentes são diferentes porque os três índices são construções distintas, e não porque um mesmo índice perca componentes ao descer de nível federativo. Os recortes estadual e de capitais filtram por fonte na origem: o estadual lê ESTADIC e IOSPD, o de capitais lê MUNIC, Anatel e Censo Escolar, e nenhum dos dois lê iGovSISP ou iESGo, cujas observações existem apenas no agregado nacional. Cada visão agrega o que a sua própria composição permite observar, e é por isso que o capítulo declara o total de cada uma em vez de publicar um número só.

A composição do recorte nacional convive com uma assimetria que é anterior à entrada do iESGo e vale a pena explicitar: a maior população do catálogo é a dos órgãos federais do SISP, com 111 variáveis, cujos dados existem apenas na dimensão total, sem observação por UF ou por capital. Somadas às 21 entradas do iESGo, são 132 dos 341 indicadores ativos sem existência subnacional. Isso não torna o índice nacional menos federativo do que era: ele sempre publicou um número só convivendo com essas fontes.

---

## 3.4 Limitações

Para cada fonte de dados do Observatório, distinguimos dois tipos de limitação: **condições de acesso** (como obter os dados e em que formato estão disponíveis) e **continuidade** (se a fonte continuará disponível).

### 3.4.1 Limitações das bases de dados

#### Bases CETIC.br (recorte nacional agregado)

**Condições de acesso:** 4/5 pesquisas requerem Termo de Acesso e Uso com NIC.br. A TIC Domicílios tem download livre desde 2015 e, ainda assim, nenhum indicador dela integra o índice nesta edição, por uma razão de cobertura e não de acesso, detalhada nas limitações abaixo. O índice atual baseia-se em dados agregados do portal: recortes pré-definidos (nível nacional, por porte, por região), sem cruzamento de variáveis, sem desagregação por UF e sem auditoria da construção dos indicadores publicados. O procedimento de acesso aos microdados está descrito na Seção 3.6.

**Dependência do CETIC.br:** Das 5 pesquisas CETIC catalogadas, 3 fornecem 67 dos 341 indicadores do recorte nacional agregado (19,6%); as outras 2 permanecem catalogadas sem indicador ativo. A TIC Educação é uma das fontes do dimensionamento atual do Objetivo 10 (Competências em Governo Digital), com 3 das 22 variáveis consideradas no capítulo correspondente; essas 22 entram na agregação como 11 componentes, porque itens de uma mesma bateria contam juntos (ver Seção 3.3.4). Fatores de estabilidade: financiamento autossustentável (domínios .br), status UNESCO Cat. 2 desde 2012, longevidade (TIC Domicílios desde 2005). Fatores de cautela: 3 pesquisas CETIC foram descontinuadas recentemente (Centros Públicos de Acesso, OSC, Painel TIC).

Limitações específicas por pesquisa:
- **TIC Governo Eletrônico:** Bienal (anos ímpares), 42 variáveis ativas. Divergência entre códigos do questionário e do portal exige mapeamento manual.
- **TIC Saúde:** Anual, 19 variáveis ativas. Estável.
- **TIC Educação:** Anual, 6 variáveis ativas. Alternância CAPI (anos pares, todos os respondentes) e CATI (anos ímpares, apenas gestores/escolas) afeta a cobertura de variáveis de professores.
- **TIC Cultura:** Bienal, nenhuma variável ativa. A planilha oficial de 2024 não publica totais nacionais; os indicadores da pesquisa estão suspensos do índice até a fonte divulgar total oficial, pesos amostrais ou microdados.
- **TIC Domicílios:** Anual, nenhuma variável ativa. Os indicadores de governo eletrônico são publicados apenas para usuários de Internet de 16 anos ou mais — universo que cobre 83,8% da população dessa faixa etária, abaixo do corte de 90% da Seção 3.2.4 —, de modo que nenhum indicador da pesquisa integra o índice na edição atual.

**Cobertura do Objetivo 3:** O Objetivo 3 (Identificação Única) é o objetivo com menor cobertura no catálogo ativo: 4 variáveis de 3 fontes (`C9B_A`, `IOSPD_I09`, `IOSPD_V07` e `MUNIC_AUTENTICACAO`). As quatro medem conceitos distintos — adoção do login GOV.BR, disponibilidade de assinatura eletrônica, emissão da Carteira de Identidade Nacional e autenticação em serviços municipais — em universos de respondentes também distintos. Elas permanecem descritas no relatório, para explicitar o diagnóstico e orientar a busca de dados, mas as dimensões do objetivo não serão publicadas na plataforma pública do Observatório: quatro medidas heterogêneas não sustentam leitura equivalente à dos objetivos cobertos por dezenas de indicadores. Esta é a formulação de referência da decisão; os Capítulos 1 e 6 remetem a ela. A Seção 3.6 descreve a estratégia de parceria com a SGD/MGI para ampliar essa cobertura.

#### Demais bases (recorte nacional agregado)

- **Censo Escolar (INEP):** Microdados abertos, granulares e pesados. Filtragem e tratamento diretos. Reestruturado em 2019 com inclusão de variáveis TIC, estável desde então.
- **ANATEL:** CSVs abertos, filtragem e tratamento simples. Dados regulatórios estáveis.
- **PNAD Contínua TIC (IBGE):** Microdados públicos detalhados. Módulo TIC é rotativo, podendo ser substituído pelo IBGE.
- **IOSPD (ABEP-TIC):** Dados desagregados por UF publicados apenas na edição utilizada (2025). Formato estável.
- **iGovSISP (SGD/MGI):** Autodiagnóstico anual com 234 órgãos respondentes e 151 perguntas na edição 2025, das quais 111 integram o índice. Limitações: (a) autodiagnóstico sem verificação externa (viés de autorrelato); (b) filtragem condicional — blocos respondidos apenas por subconjuntos de órgãos foram excluídos do índice: Centro de Dados (N=115, 49%), WAN (N=132, 56%) e Nuvem Contratada (N=76, 32%), totalizando 14 variáveis excluídas; o bloco PDTIC (N=202, 86%) foi mantido; duas perguntas de percepção (priorização da TI na elaboração da PLOA e prioridade dada à inovação) ficaram fora por estarem fora da seleção canônica do autodiagnóstico; (c) Dimensão 4 (Privacidade e Segurança) ausente dos relatórios públicos — conteúdo integrado na Dim 2.

#### ESTADIC (recortes nacional agregado e estadual)

**Acesso:** Dados em XLSX agregado, sem microdados estruturados e sem API. A extração requer processamento manual das planilhas publicadas pelo IBGE. Suplemento TIC quinquenal.

**Dependência:** As 28 variáveis da ESTADIC são indispensáveis para o recorte estadual. Se o IBGE descontinuar ou alterar significativamente o questionário, o recorte estadual ficaria restrito às 48 variáveis IOSPD, de 1 única fonte.

**Não-resposta:** Rondônia não respondeu ao suplemento de Governança (10 variáveis Egov = 0). Bahia respondeu "Não sabe" nas variáveis LGPD (= 0). Os dois casos são da ESTADIC, e portanto do regime de imputação de zero descrito na Seção 3.3.2, que não vale para as fontes já agregadas. A premissa é conservadora — pode subestimar estados que possuem a capacidade mas não responderam por razões administrativas. A alternativa (excluir UFs) premiaria a não-resposta ao calcular a média sobre menos componentes.

#### MUNIC (recortes nacional agregado e de capitais)

**Acesso:** Microdados em XLSX, acesso livre. Suplemento TIC quinquenal.

**Cobertura:** Censitário (5.570 municípios), mas todas as variáveis são binárias (Sim/Não).

### 3.4.2 Análise de viés de seleção e qualidade dos dados

O índice agrega variáveis de múltiplas fontes, cada uma com um desenho amostral diferente. Três mecanismos de viés são relevantes: viés de cobertura (a fonte não cobre toda a população de interesse), viés de não-resposta (entidades que fazem parte da amostra mas não respondem) e viés de resposta por desejabilidade social.

**Autodiagnóstico obrigatório — iGovSISP** (111 das 341 variáveis do recorte nacional agregado): o iGovSISP é aplicado aos 234 órgãos SISP. Embora a participação seja obrigatória (viés de seleção baixo), é um autodiagnóstico: as respostas dependem da autoavaliação dos respondentes, suscetível a viés de desejabilidade social. Direção esperada: superestimação da maturidade.

**Pesquisas amostrais voluntárias CETIC.br** (67 das 341 variáveis do recorte nacional agregado): participação voluntária. Se a recusa se correlacionar com menor digitalização, as proporções publicadas superestimam a realidade. Sem acesso a microdados ou taxas de resposta, não é possível quantificar esse viés. Direção esperada: superestimação.

**Avaliação externa — IOSPD** (48 das 341 variáveis do recorte nacional agregado): avaliação externa dos portais estaduais pela ABEP-TIC. Viés de seleção baixo (todos os 27 portais são avaliados).

**Questionário de autoavaliação: iESGo** (21 das 341 variáveis do recorte nacional agregado): o [FAQ do iESGo 2024](https://iesgo.tcu.gov.br/wp-content/uploads/sites/12/iesgo2024/FAQ_iESGo-v4.docx) define o instrumento como autoavaliação e atribui a responsabilidade pelas respostas ao dirigente máximo de cada organização. O questionário alcançou o universo de 387 organizações jurisdicionadas dos três Poderes. O TCU não verificou diretamente as respostas: o [relatório técnico](https://iesgo.tcu.gov.br/wp-content/uploads/sites/12/iesgo2024/iESGo2024_Relatorio_tecnico.pdf) informa que essa validação exigiria auditorias de campo, não realizadas no ciclo. Para reduzir a probabilidade de superestimação, o instrumento pede texto livre com indicação de evidência auditável e desdobra itens em subquestões de sim ou não. Esses procedimentos estruturam a declaração, mas não constituem auditoria das respostas. O viés de seleção é baixo porque a aplicação cobre o universo pesquisado; persiste o risco de desejabilidade social porque cada organização avalia a própria governança. O índice usa as questões individuais, e não os sub-índices compósitos calculados pelo TCU. A periodicidade é irregular. Direção esperada: superestimação; os procedimentos podem reduzir o risco, mas sua magnitude não foi medida.

**Dados administrativos e censitários** (94 das 341 variáveis do recorte nacional agregado): ESTADIC (28 variáveis, pesquisa censitária N=27 UFs), MUNIC (59 variáveis, pesquisa censitária N=5.570 municípios), Censo Escolar (INEP, 5), ANATEL (1) e PNAD TIC (1). Viés de seleção baixo — ESTADIC e MUNIC são pesquisas censitárias obrigatórias. Porém, como os questionários são preenchidos pelo próprio governo respondente, há risco moderado de viés de desejabilidade social, semelhante aos autodiagnósticos federais.

**ESTADIC — saltos condicionais:** Na aba de Informática, 6,2% das células contêm "-" (salto condicional); na aba de Governança, 8,0%. Em algumas variáveis, o percentual chega a 59-74%. O tratamento desses traços (NaN vs. 0) afeta diretamente as proporções.

---

## 3.5 Classificação da cobertura das recomendações da ENGD

O Anexo da Portaria SGD/MGI nº 5.395/2026 elenca 68 recomendações aos entes federados, e o índice não alcança todas do mesmo modo. O Anexo B percorre as 68 e registra, uma a uma, o quanto o índice mede o que cada uma exige, cobertas inclusive. A classificação combina duas comparações: entre o que a recomendação exige e o que os indicadores medem, e entre os entes a que ela se dirige e os níveis que o índice observa.

A **cobertura de conteúdo** compara o que a recomendação exige com o que os indicadores do objetivo medem. É integral quando os indicadores medem de frente todos os deveres que o enunciado contém; parcial quando medem apenas parte deles, ou os alcançam por variável indireta, isto é, por pergunta que se aproxima do conteúdo sem medi-lo; e ausente quando nenhum indicador ativo mede o dever principal.

A **cobertura federativa** compara os níveis em que o índice observa esse conteúdo com os entes a que a recomendação se dirige. Aqui a variação é pequena: 67 das 68 recomendações se dirigem a todos os entes federados, e a única exceção é a Recomendação 3.3, endereçada aos órgãos estaduais de emissão de identidade civil. Referências a instâncias federais em outras recomendações não restringem o destinatário — é o caso, por exemplo, da coordenação da União na 3.4, do compartilhamento entre União, estados e municípios na 3.8 e na 5.6, do programa federal como referência de articulação na 4.1 e da legislação federal como parâmetro de alinhamento na 8.1; em todas, a execução cabe a qualquer ente. A cobertura federativa é completa quando o índice observa o conteúdo em todos os níveis que a recomendação alcança, e parcial quando observa parte deles.

Nem toda observação do índice é federativa. Quando a população respondente não é um ente de governo — escolas, domicílios, professores e estabelecimentos de saúde —, o indicador diz o que se mede no território, e não o que um ente executa; ele sustenta a cobertura de conteúdo, mas não entra na leitura de alcance. São 32 dos 341 indicadores ativos, e o efeito da regra é sempre rebaixar o alcance, nunca o conteúdo.

O status combina as duas leituras, conforme a tabela abaixo. A única assimetria está na lacuna: quando nenhum indicador mede o dever principal, a cobertura federativa não chega a ser avaliada.

| Cobertura de conteúdo | Cobertura federativa | Status |
|---|---|---|
| integral | completa | coberta |
| integral | parcial | parcial no alcance |
| parcial | completa | parcial no conteúdo |
| parcial | parcial | parcial no conteúdo e no alcance |
| ausente | — | lacuna |

Em toda lacuna o anexo registra também o motivo pelo qual o índice não mede a recomendação. Pode ser que nenhuma fonte pública sistemática apure o conteúdo exigido (`sem_dado_publico`); que a apuração exista, mas a variável esteja fora do catálogo ativo e conste do Anexo A (`fonte_excluida`); ou que a apuração alcance parte da Federação e não os entes a que a recomendação se dirige (`sem_instrumentacao_federativa`).

---

## 3.6 Acesso a dados e parcerias estratégicas

Algumas fontes do Observatório já fornecem os melhores dados disponíveis — o Censo Escolar oferece microdados abertos com cobertura censitária, a ANATEL publica dados em formato estruturado, e a TIC Domicílios disponibiliza microdados de acesso livre. Em outros casos, o índice opera com dados agregados pré-formatados ou com cobertura insuficiente. Para superar essas limitações, propõem-se parcerias formais para acesso a dados primários junto a quatro instituições.

#### SGD/MGI — Dados primários do Gov.br

O Objetivo 3 da ENGD (Identificação Única) é o objetivo com menor cobertura no catálogo ativo: 4 variáveis de 3 fontes (`C9B_A`, `IOSPD_I09`, `IOSPD_V07` e `MUNIC_AUTENTICACAO`). Enquanto isso, a plataforma Gov.br cresceu de 130 milhões para 166 milhões de contas entre 2023 e 2025, 67,55 milhões de cidadãos atingiram o nível ouro de autenticação e 31,5 milhões de Carteiras de Identidade Nacional foram emitidas — nenhum desses avanços é captado pelo índice.

Para ampliar essa cobertura, propõe-se solicitar à Secretaria de Governo Digital (SGD/MGI) dados primários sobre a plataforma Gov.br, via Lei de Acesso à Informação ou via parceria institucional direta. Os dados solicitados incluem:

- **Contas Gov.br por nível de autenticação** (bronze, prata e ouro), por UF — permite medir não apenas a adesão ao login único, mas a qualidade da identificação (níveis mais altos indicam verificação biométrica e documental)
- **Número de órgãos e entidades integrados ao login Gov.br**, com nível de governo — mede a efetiva adoção da solução estruturante pelos entes federados
- **Número de carteiras de identidade nacional (CIN) emitidas**, por UF — meta explicitamente vinculada ao Objetivo 3 da ENGD
- **Número de usuários únicos que acessaram o Gov.br** — indicador de alcance e uso efetivo da plataforma
- **Volume de assinaturas eletrônicas realizadas via Gov.br** — 120 milhões em 2024 segundo a SGD

A probabilidade de sucesso dos pedidos é alta: os dados existem nos sistemas da SGD, não têm caráter sigiloso e a própria SGD já divulga números agregados em balanços anuais.

#### CETIC.br — Microdados das pesquisas TIC

Quatro das cinco pesquisas CETIC utilizadas (todas exceto TIC Domicílios) requerem a assinatura de um Termo de Acesso e Uso junto ao NIC.br. O procedimento de solicitação já foi mapeado: preenchimento de formulário em cetic.br/pt/microdados/, envio de PDF para acordos.cetic@nic.br, avaliação e assinatura do Termo.

O acesso aos microdados permitirá: (a) análises subnacionais por UF e município; (b) cruzamentos entre variáveis não disponíveis nas tabelas publicadas; (c) validação e auditoria da construção dos indicadores agregados.

#### ABEP-TIC — Detalhamento do IOSPD

Propõe-se solicitar à ABEP-TIC, via contato institucional direto, o detalhamento completo do IOSPD por indicador e por portal estadual, permitindo desagregar os indicadores individuais além do que as tabelas publicadas oferecem e validar a construção dos escores de cada portal.

#### SGD/MGI — Microdados do iGovSISP

O iGovSISP é um autodiagnóstico anual que avalia a governança de TI nos órgãos integrantes do SISP (Poder Executivo Federal), instituído pela Portaria SGD/MGI nº 4.339/2023. O instrumento cobre 6 dimensões, das quais 5 são publicadas:

| Dimensão | Tema | Mapeamento ENGD |
|----------|------|-----------------|
| 1. Gestão e Planejamento de TI | Governança, PDTIC, competências de pessoal | Obj. 1 (Governança) |
| 2. Segurança da Informação e Proteção de Dados | POSIN, ETIR, LGPD, segurança cibernética, PPSI | Obj. 4 (Segurança/LGPD) |
| 3. Dados e Informações | Governança de dados, interoperabilidade, IA | Obj. 5 (Dados) |
| 4. Privacidade e Segurança | *Ausente dos relatórios públicos — conteúdo migrou para Dim 2* | — |
| 5. Contratações de TI | Normativos, processos, sustentabilidade | Obj. 8 (Eficiência/Processos) |
| 6. Infraestrutura e Plataformas Digitais | Centro de dados, rede, nuvem, IPv6 | Obj. 6 (Infraestrutura) |

Atualmente, apenas relatórios agregados estão disponíveis publicamente, em formato PDF gerado pelo LimeSurvey. Propõe-se solicitar à SGD/MGI os microdados (respostas por órgão) para:

- **Desagregar por tipo de órgão** (setorial, seccional, correlata), permitindo análise comparativa
- **Cruzar dimensões do iGovSISP com outros indicadores do índice**, enriquecendo os Objetivos 1, 4, 5, 6 e 8
- **Complementar o iESGo (TCU)**: enquanto o iESGo avalia governança ampla por autoavaliação aplicada, em edições irregulares, a 387 organizações jurisdicionadas dos três Poderes, o iGovSISP mede anualmente a maturidade operacional de TI por autodiagnóstico de 234 órgãos do SISP. São instrumentos complementares, não substitutos.
