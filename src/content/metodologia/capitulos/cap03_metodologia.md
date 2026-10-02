# 3. Metodologia

Este capítulo apresenta a metodologia comum às três visões do Índice de Governo Digital publicadas no relatório, **nacional agregado**, **estadual** e **de capitais**, bem como as especificidades de cada uma. Além dessas três visões, o produto de dados desta edição inclui o recorte dos municípios com pelo menos 100 mil habitantes segundo o Censo Demográfico 2022 do IBGE. O limiar é inclusivo, de modo que um município com exatamente 100 mil habitantes entra, e o corte seleciona 319 municípios, entre eles as 27 capitais. Esse recorte é produto de dados: os escores e o ranking por objetivo ficam nos arquivos da edição, e o corpo do relatório não traz síntese, ranking nem tabela municipal derivados dele. Os elementos compartilhados, como critérios de seleção de variáveis, normalização, tratamento de não-resposta e fórmula de agregação, são descritos uma única vez. As fontes de dados e limitações são apresentadas com indicação de quais visões utilizam cada fonte.

Os Capítulos 4 a 13 apresentam, cada um, **um objetivo da ENGD**. Dentro de cada objetivo, as variáveis são organizadas em **dimensões temáticas** — sub-conceitos mais fechados que o objetivo — e, quando há pelo menos duas variáveis com observação por UF ou por capital, também em dimensões federativas dedicadas (`Recorte Estadual` e/ou `Recorte de Capitais`). As médias dimensionais organizam a apresentação dos resultados neste relatório; o escore de cada objetivo é calculado diretamente sobre seus componentes, após o colapso das baterias dentro do objetivo, sem média intermediária das dimensões. Não há nota geral por recorte nem escore único da ENGD que agregue os dez objetivos (ver Seção 3.3.4). Esta cobertura editorial dos dez objetivos não equivale ao escopo da plataforma pública do Observatório: as dimensões do Objetivo 3 permanecem descritas no relatório, como diagnóstico de uma lacuna de informação, mas não serão publicadas na plataforma — decisão registrada na Seção 3.4.1.

---

## 3.1 Seleção de Bases de Dados

**Nota:** A ENGD não deve ser confundida com a EFGD (Estratégia **Federal** de Governo Digital, Decreto nº 12.198/2024), que é específica para o Poder Executivo Federal e possui 16 objetivos próprios.

### 3.1.1 Processo geral de identificação

Partimos das bases de dados citadas no projeto de pesquisa e buscamos, com auxílio de agentes de IA com acesso a ferramentas de busca, um conjunto maior de bases de dados relacionados a Tecnologia da Informação e Comunicação. Esse processo foi repetido até atingir saturação.

A seleção de bases considera a pertinência das variáveis ao governo digital, a disponibilidade dos dados nos recortes analisados e a atualidade das observações. Cada fonte contribui com a edição mais recente disponível, identificada na Seção 3.1.2; essa escolha não basta, por si só, para considerar atuais os dados de uma pesquisa que deixou de ser produzida. A periodicidade informa o intervalo de atualização de cada fonte, mas a publicação em frequência constante não constitui requisito de inclusão.

**Não cumpriram o requisito de ter variável relacionada a governo digital:**

- Pesquisa Anual do Uso de TI no Brasil (FGVcia)
- Estudo de TIC (Softex)
- Panorama das Empresas de TIC (SEBRAE)
- Digital in Brazil (DataReportal)
- TIC Empresas, TIC Provedores, TIC Kids Online Brasil, Estatísticas TIC Crianças 0-8 (CETIC.br)

**Pesquisas excluídas por interrupção da produção de dados:**

- TIC Centros Públicos de Acesso (CETIC.br) — interrompida em 2019
- TIC Organizações Sem Fins Lucrativos (CETIC.br) — interrompida em 2022
- Painel TIC (CETIC.br) — interrompido em 2022
- TIC Empresa (IBGE) — interrompida em 2010
- Escala Brasil Transparente (CGU) — interrompida em 2020

Também foi excluído o Ranking de Competitividade dos Estados (CLP) por não produzir dados primários.

Também ficaram de fora os índices internacionais de governo digital discutidos no Capítulo 2, o *E-Government Development Index* (EGDI), das Nações Unidas, o *GovTech Maturity Index* (GTMI), do Banco Mundial, e o *Digital Government Index* (DGI), da OCDE. A razão é a regra do compósito, enunciada adiante no parágrafo sobre o iESGo e aplicada ao iGovTI no Anexo A: sub-índice compósito calculado pela fonte não entra no índice. Os três são compósitos nesse sentido, e o GTMI o é em segundo grau, já que a edição de 2025 usa no próprio cálculo cinco indicadores importados de outros índices, entre eles os três componentes do EGDI, o *E-Participation Index* das Nações Unidas e o *Global Cybersecurity Index* da União Internacional de Telecomunicações.

Em princípio esses índices são decomponíveis. O EGDI se abre em serviços online, infraestrutura de telecomunicações e capital humano, e o GTMI, em quatro sub-índices que somam 48 indicadores, dos quais 43 vêm do questionário próprio e 5 são importados de outros índices. Decompô-los, porém, não resolveria o problema, por duas razões. A primeira é que há variáveis comparativas entre países, e não absolutas. O EGDI aplica padronização por escore-z a cada componente antes de normalizá-lo, de modo que o valor de um país exprime posição em relação à média e à dispersão do conjunto avaliado naquela edição, e os anexos do *E-Government Survey* de 2022 registram, ao tratar do índice de participação eletrônica, que também o EGDI não se destina a medir em sentido absoluto, e sim a captar o desempenho dos países uns em relação aos outros num dado momento. Trazido para um índice de unidades federativas brasileiras, um valor assim descreveria a posição do Brasil entre países, não o estado do ente medido, e o GTMI herda essa característica ao embutir os três componentes do EGDI. A segunda razão é que parte da informação é declarada pelos próprios governos avaliados, e o problema não está na autodeclaração em si. Este índice trabalha com fontes autodeclaradas, entre elas o iGovSISP e o iESGo, cujos vieses a Seção 3.4.2 documenta uma a uma. A diferença é que ali a declaração chega como resposta individual, que o índice usa como observação e pondera item a item, enquanto nesses benchmarks ela chega já agregada num escore que a fonte fechou e que não se pode auditar por dentro. A atualização de 2025 do GTMI foi construída sobre respostas declaradas por 158 economias, colhidas em questionário online aberto a funcionários de cada país, e sobre dados públicos para as demais, cabendo ao Banco Mundial revisar as respostas e entrevistar esses funcionários quando necessário; o DGI é construído sobre questionário respondido por dirigentes de governo digital, com validação posterior das respostas. O EGDI é diferente nesse ponto, e a distinção importa: o componente de serviços online é levantado por pesquisadores independentes, dois por país, orientados a se apoiar apenas em fontes governamentais e a não compartilhar achados com terceiros, cabendo ao questionário enviado aos Estados-membros indicar, entre outras informações, os endereços dos portais a examinar.

A exclusão não é juízo sobre a qualidade desses instrumentos. Ela dialoga com uma observação recolhida nas entrevistas de validação do índice, feitas em março de 2026: dimensões como conectividade e competências digitais tendem a reduzir o desempenho do Brasil em índices globais, o que não se reproduz nos resultados aqui apresentados. Parte dessa diferença decorre de os objetos serem distintos: os benchmarks internacionais ordenam países entre si, enquanto este índice mede unidades federativas brasileiras a partir de fontes que observam diretamente esses entes. O exame mais detido da comparabilidade dimensão a dimensão, que as mesmas entrevistas recomendam, permanece como agenda e não é encerrado aqui. Os dois se complementam, e o Observatório se põe ao lado deles, e não subordinado a eles. Diagnosticar a posição do Brasil no mundo continua sendo tarefa dos benchmarks globais; medir a heterogeneidade entre estados e capitais, que a agregação nacional deles tende a ocultar (Abep-Tic, 2024, p. 16), é o que este índice existe para fazer.

### 3.1.2 Visão geral das fontes

A tabela consolida as fontes utilizadas nas três visões apresentadas no relatório. Cada fonte pode participar de uma ou mais dessas visões conforme a granularidade e a disponibilidade dos dados.

| Fonte | Instituição | Edição | Nacional | Estadual | Capitais | Variáveis |
|-------|-------------|:------:|:--------:|:--------:|:--------:|:---------:|
| TIC Governo Eletrônico | CETIC.br | 2023 | ✓ | | | 42 |
| TIC Saúde | CETIC.br | 2024 | ✓ | | | 19 |
| TIC Educação | CETIC.br | 2024 | ✓ | | | 6 |
| TIC Cultura | CETIC.br | 2024 | ✓ | | | 0 |
| TIC Domicílios | CETIC.br | 2024 | ✓ | | | 0 |
| IOSPD | ABEP-TIC | 2025 | ✓ | ✓ | | 48 |
| iGovSISP | SGD/MGI | 2025 | ✓ | | | 97 |
| iESGo | TCU | 2024 | ✓ | | | 21 |
| PNAD Contínua TIC | IBGE | 2024 | ✓ | | | 1 |
| Cobertura móvel | ANATEL | 2025 | ✓ | | ✓ | 1 |
| Censo Escolar | INEP | 2024 | ✓ | | ✓ | 5 |
| ESTADIC | IBGE | 2024 | ✓ | ✓ | | 28 |
| MUNIC | IBGE | 2024 | ✓ | | ✓ | 59 |

A TIC Cultura e a TIC Domicílios permanecem catalogadas, mas nenhum dos seus indicadores integra o índice na edição atual: os da TIC Cultura estão suspensos até a fonte publicar totais nacionais oficiais (a planilha de 2024 não os divulga), e os da TIC Domicílios medem percentuais condicionados a um universo restrito de respondentes (ver Seção 3.2.4). Ambas seguem acompanhadas como séries descritivas.

O iESGo (TCU) integra o índice por meio de vinte questões completas do questionário de governança e do sub-item `3132_C`, e não pelos sub-índices compósitos que o próprio TCU calcula. A distinção é a mesma que orienta o catálogo inteiro: sub-índice compósito calculado pela fonte não entra, porque o índice o recalcularia sobre um agregado que já embute pesos de outra metodologia; a questão individual entra, porque é observação. Para o iESGo, esta edição utiliza as questões componentes dos sete subíndices selecionados de governança e gestão de TI e segurança da informação. As questões observam 387 órgãos dos três Poderes, na população de órgãos federais, e acrescentam ao índice um corte por Poder que nenhuma outra fonte oferece.

**Princípio de seleção por nível:**

- **Recorte nacional agregado:** Fontes com dados agregados nacionais e publicação recente. MUNIC e ESTADIC participam do recorte nacional com dados agregados (proporções nacionais) e dos recortes subnacionais com dados individualizados.
- **Recorte estadual:** Apenas fontes que medem **diretamente** o governo estadual. A desagregação por UF da TIC Governo Eletrônico mede prefeituras, o Censo Escolar mede escolas e a PNAD Contínua TIC mede domicílios; esses produtos foram excluídos porque atribuiriam ao estado o desempenho de outros atores. Fontes sem dados por UF, como o iGovSISP, também foram excluídas.
- **Recorte de capitais:** Fontes com granularidade municipal e identificação individual. Produtos com resultados agregados, como as pesquisas CETIC.br e a PNAD Contínua TIC, foram excluídos porque não identificam cada município.

### 3.1.3 Fontes do recorte nacional agregado

O recorte nacional agregado utiliza 13 fontes catalogadas, das quais 11 contribuem com os 327 indicadores ativos — que entram na agregação como 248 componentes nas vistas dimensionais. No cálculo por objetivo, o colapso das baterias reúne esses indicadores em 241 componentes, sem média intermediária das dimensões (ver Seção 3.3.4). As principais fontes são:

- **Pesquisas CETIC.br** (5 pesquisas catalogadas, das quais 3 fornecem 67 variáveis ativas): TIC Governo Eletrônico (bienal, 42 variáveis), TIC Saúde (anual, 19) e TIC Educação (anual, 6). A TIC Cultura (bienal) e a TIC Domicílios (anual) permanecem catalogadas sem indicador ativo na edição atual (ver Seção 3.1.2). O total reflete o desmembramento de variáveis multi-item em entradas individuais (ver Seção 3.2.3). Quatro pesquisas requerem Termo de Acesso e Uso com o NIC.br; TIC Domicílios tem microdados livres.
- **IOSPD (ABEP-TIC)**: Índice anual de oferta de serviços públicos digitais, avaliando portais estaduais em 5 dimensões. Desagregado em 48 indicadores individuais ativos que mapeiam para 8 dos 10 objetivos ENGD: Capacidades (I.1-I.13), Serviços (II.1-II.12), Normatização (III.1a-III.7), Linguagem Simples (IV.1-IV.9) e Inovação (V.1-V.9). Dados detalhados por UF disponíveis na edição utilizada.
- **iGovSISP (SGD/MGI)**: Autodiagnóstico anual aplicado aos órgãos do SISP, com 234 respondentes em 2025 e 97 variáveis ativas nesta edição do índice. O cálculo usa somente a edição mais recente. Concordância genuína considera respostas parcialmente ou totalmente concordantes; conhecimento e utilização considera os níveis 4 e 5; maturidade considera estágios acima do inicial, sem presumir adoção plena. Faixas percentuais usam a média dos tetos reais, ponderada pelas contagens, com peso igual entre órgãos. A seleção e seus limites estão descritos na Seção 3.3.6 e no Anexo A.
- **Censo Escolar (INEP)**: Microdados anuais de escolas brasileiras. 5 indicadores binários agregados como proporção nacional.
- **Cobertura móvel (ANATEL)**: Dados regulatórios de telecomunicações.
- **PNAD Contínua TIC (IBGE)**: Módulo rotativo de acesso a TIC nos domicílios.
- **MUNIC (IBGE)**: Pesquisa censitária aplicada a todos os 5.570 municípios brasileiros, com suplemento de Informática e Comunicação. No recorte nacional, os 59 indicadores binários são agregados como proporção nacional (% de municípios com a capacidade). No recorte de capitais, os dados individuais das 27 capitais compõem as dimensões federativas correspondentes.
- **ESTADIC (IBGE)**: Pesquisa censitária aplicada às 27 Unidades da Federação, com suplementos de Informática e Comunicação e Governança. No recorte nacional, os 28 indicadores são agregados como média das UFs. No recorte estadual, os dados individuais por UF compõem as dimensões federativas correspondentes.

### 3.1.4 Fontes do recorte estadual

O recorte estadual utiliza 2 fontes que medem diretamente o governo estadual, totalizando 76 variáveis distribuídas em 9 dos 10 objetivos. Em 7 desses objetivos há ao menos duas variáveis com observação por UF — o mínimo para compor a dimensão `Recorte Estadual` nos capítulos de resultados. Os Objetivos 1 e 8 têm apenas 1 variável com observação por UF cada: abaixo do mínimo de duas, ela não forma dimensão federativa e, portanto, não gera valor publicado no recorte estadual — aparece dentro da dimensão temática em que foi classificada, com a observação por UF explicitada na listagem do indicador. O Objetivo 10 não tem variável com observação por UF no catálogo ativo:

**IOSPD (ABEP-TIC).** 48 indicadores individuais (ver descrição na Seção 3.1.3) — todos os ativos da visão Nacional têm observação por UF e integram o recorte. Fonte dominante (63,2% das variáveis).

**ESTADIC (IBGE).** Pesquisa censitária (N=27 UFs), suplemento TIC quinquenal. Fornece 28 variáveis ao recorte estadual, nos suplementos "Informática e Comunicação" (códigos Etic) e "Governança" (códigos Egov).

**Escolha de fontes diretas:** O recorte estadual utiliza apenas fontes que medem diretamente a atuação do governo estadual. Esta decisão elimina a distorção causada por indicadores indiretos, como dados de prefeituras municipais, escolas ou domicílios agregados por UF, que atribuiriam ao governo estadual o desempenho de atores que ele não controla diretamente. Por isso, o recorte exclui a desagregação por UF do questionário de prefeituras da TIC Governo Eletrônico, o Censo Escolar e a PNAD Contínua TIC.

**Justificativa da inclusão da ESTADIC:** A ESTADIC participa tanto do recorte nacional agregado (com valores agregados — média das 27 UFs) quanto do recorte estadual (com dados individualizados por UF). No recorte estadual, sua inclusão é indispensável: (1) é a única pesquisa censitária (N=27) que interroga diretamente o governo estadual sobre TIC, governança digital, transparência e LGPD; (2) complementa o IOSPD com variáveis de infraestrutura, inclusão digital e transparência.

**Fontes excluídas do recorte estadual:**

- TIC Governo Eletrônico (CETIC.br): a pesquisa também entrevista órgãos federais e estaduais, mas somente o questionário de prefeituras publica resultados por UF; "SP" nessa tabela significa a estimativa das prefeituras paulistas, não o Governo do Estado de São Paulo
- Censo Escolar (INEP): mede infraestrutura escolar, não ações do governo estadual
- PNAD Contínua TIC (IBGE): mede acesso domiciliar, indicador socioeconômico
- iGovSISP (SGD/MGI), Cobertura móvel (ANATEL): sem dados desagregados por UF

### 3.1.5 Fontes do recorte de capitais

O recorte de capitais utiliza 3 fontes com granularidade municipal, totalizando 65 indicadores para 27 capitais (os Objetivos 1, 3 e 5 têm apenas 1 variável com observação por capital cada, abaixo do mínimo de duas para compor recorte federativo):

| Fonte | Instituição | Cobertura | Edição | Indicadores |
|-------|-------------|-----------|:------:|:-----------:|
| MUNIC | IBGE | 5.570 prefeituras (censo), filtradas 27 capitais | 2024 | 59 |
| Cobertura móvel | ANATEL | 5.570 municípios, filtradas 27 capitais | 2025 | 1 |
| Censo Escolar | INEP | escolas brasileiras filtradas pelas 27 capitais | 2024 | 5 |

**Fontes excluídas por não produzirem dados individualizados por município:** TIC Governo Eletrônico, cujas tabelas de prefeituras publicam estimativas agregadas por localização, região, porte e UF; iGovSISP e IOSPD, que medem órgãos federais ou governos estaduais; as demais pesquisas CETIC.br; e PNAD Contínua TIC.

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

A aplicação do critério de escopo considera o objeto da pergunta, não apenas palavras em comum com a estratégia. As variáveis sobre organização e atuação genérica do controle interno não medem segurança da informação nem tramitação eletrônica: instaurar processo disciplinar, por exemplo, não informa se ele tramita digitalmente. Do mesmo modo, estrutura administrativa, carreira e vínculo de pessoal da comunicação institucional não medem a oferta ou integração dos canais digitais. As contratações de comunicação também ficam excluídas, pois o governo pode executar os serviços internamente; licitar a gestão de um site não equivale a observar sua oferta, qualidade ou integração. Na sustentabilidade ambiental, a gestão ambiental da organização não se confunde com a adoção de metodologia para calcular o impacto ambiental da transformação digital.

Essas exclusões não decorrem de a variável medir apenas parte de uma recomendação. A cobertura de conteúdo e o alcance federativo da Seção 3.5 são avaliados pelo conjunto de indicadores: não se exige que cada variável cubra todos os deveres ou níveis federativos. A lista completa de variáveis excluídas encontra-se no Anexo A.

As variáveis não excluídas foram inicialmente organizadas tanto a nível de objetivo da Estratégia Nacional de Governo Digital quanto a nível de recomendação formalizada via Portaria SGD/MGI nº 5.395/2026. Este maior detalhamento permitiu que a conexão entre as variáveis e os objetivos fosse mais precisa. Para fins de construção do índice, a classificação primária permanece no nível de objetivo; para fins de apresentação nos capítulos de resultados, cada objetivo é subdividido em dimensões temáticas e, quando aplicável, em recortes federativos.

O catálogo registra ainda as tags transversais, que reúnem temas atravessando os dez objetivos. A tag segue o conteúdo da variável, e não a sua fonte nem o objetivo em que ela foi classificada. Daí decorrem duas propriedades que o objetivo e a dimensão temática não têm: uma variável pode receber mais de uma tag, quando o seu conteúdo pertence a mais de um tema, e pode ficar sem tag nenhuma, quando não pertence a nenhum dos temas do vocabulário. Este relatório não publica métrica de cobertura, tabela, gráfico nem rótulo por tag.

### 3.2.2 Resumo por recorte

| Recorte | Fontes | Variáveis | Objetivos cobertos |
|--------|:------:|:---------:|:------------------:|
| Nacional agregado | 11 | 327 | 10/10 |
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

A normalização converte todos os indicadores para uma escala comum de 0 a 100. A tabela consolida as transformações aplicadas nas três visões apresentadas no relatório:

| Escala Original | Transformação | Exemplo | Fontes | Recortes |
| :--- | :--- | :--- | :--- | :--- |
| Proporção 0-100% | Usado diretamente | 55% → 55.0 | CETIC (todas), PNAD Contínua TIC | Nacional |
| Índice 0-10 | Multiplicado por 10 | 5.87 → 58.7 | IOSPD (ABEP-TIC) | Nacional, Estadual |
| Binarização Likert 1-5 | % concordantes (níveis 4-5) | 75.3% → 75.3 | iGovSISP (SGD/MGI) | Nacional |
| Conhecimento/utilização | % respondentes nos níveis 4 e 5, utilização na maior parte ou na totalidade | G637IPD: 20/234 × 100 = 8,55 | iGovSISP (SGD/MGI) | Nacional |
| Ordinal de maturidade ou adoção | % respondentes acima do estágio inicial, sem desconhecimento positivo | O identificador da alternativa define o estágio, não sua posição impressa | iGovSISP (SGD/MGI) | Nacional |
| Faixas percentuais | Média dos tetos reais ponderada pelas contagens, com peso igual entre órgãos | G630IPD: 14.090/234 = 60,21, usando tetos 30, 50, 70, 90 e 100 | iGovSISP (SGD/MGI) | Nacional |
| % de escolas | Proporção já calculada | 45% → 45.0 | Censo Escolar (pré-agregado) | Nacional, Capitais |
| Sim/Não | Sim=100, Não=0 | Sim → 100 | ESTADIC (binárias), MUNIC | Nacional, Estadual, Capitais |
| Proporção multi-item | (alternativas marcadas / alternativas pontuáveis) × 100 | 5/7 → 71.4 | ESTADIC (multi-item) | Nacional, Estadual |
| Ordinal (ESTADIC) | Conforme escala definida | Diariamente → 100 | ESTADIC (freq. redes, modelo acessibilidade) | Nacional, Estadual |
| Proporção 0-1 | Multiplicado por 100 | 0.924 → 92.4 | Cobertura móvel (ANATEL) | Nacional, Capitais |
| Binário escolas | (soma_positivos / total) × 100 | 1200/1500 → 80.0 | Censo Escolar (microdados por capital) | Capitais |
| Categórica (internet MUNIC) | Valor válido=100, "-"/"Não possui"=0 | "Via rádio" → 100 | MUNIC (1 indicador: acesso à internet) | Nacional, Capitais |

Todos os valores normalizados são limitados ao intervalo [0, 100].

O Censo Escolar registra, para cada escola, se ela possui determinado recurso (por exemplo, acesso à Internet: sim ou não). Para o recorte nacional agregado, calcula-se a porcentagem de escolas que possuem cada recurso em nível nacional, produzindo um valor entre 0% e 100% que é usado diretamente. Para o recorte de capitais, o cálculo é feito por capital (porcentagem de escolas daquela capital).

Nas variáveis ESTADIC de múltiplas alternativas, cada bateria é calculada só sobre as alternativas que representam capacidade ou serviço presente. O numerador conta as alternativas marcadas e o denominador conta essas mesmas alternativas pontuáveis, produzindo um valor entre 0% e 100%. As alternativas que registram ausência ou desconhecimento, como "Não disponibiliza", "Nenhum dos relacionados" e "Não sabe informar", continuam identificáveis na fonte e ficam fora do numerador e do denominador; são 22 alternativas, distribuídas por 12 baterias. Na Etic01, por exemplo, as oito colunas da pergunta rendem sete alternativas pontuáveis, porque a oitava registra que o estado não disponibiliza atendimento à distância. Uma exceção é ESTADIC_DESENV_SOFTWARE (Etic09), tratada como binária: se o governo estadual desenvolveu software para qualquer finalidade (interna ou externa), o valor é 100; caso contrário, 0.

### 3.3.2 Tratamento de não-resposta

O índice não tem um tratamento único de não-resposta: são três regimes, e cada um vale para um conjunto declarado de fontes.

**Imputação de zero, nas fontes de resposta declarada.** Na ESTADIC e na MUNIC, em que cada ente responde individualmente, respostas "Não informou" e "Não sabe" são convertidas em score 0, presumindo que a ausência de resposta indica ausência da capacidade avaliada. A premissa é que um governo que possui a capacidade teria condições de responder afirmativamente; a não-resposta é, portanto, evidência da ausência. Ela é conservadora e pode subestimar entes que possuem a capacidade mas não responderam por razões administrativas.

Na ESTADIC, quatro estados de resposta se distinguem, e a distinção importa porque três deles poderiam ser lidos como o mesmo zero. A alternativa marcada pontua. A resposta textual "Não informou", "Não sabe" ou "Não sabe informar" vale zero nos itens pontuáveis, pelo regime descrito acima. O traço representa salto condicional e vira dado ausente, não zero, porque a pergunta não chegou a ser feita àquele estado. E a ausência integral do grupo de resposta, quando nenhuma alternativa da bateria traz valor para a unidade, faz a unidade ser rejeitada naquele indicador, em vez de entrar com zero.

Nas 30 colunas de score do iESGo consumidas pela edição ativa, as 387 linhas estão completas: não há célula ausente. Portanto, nenhum valor publicado desta edição resulta de imputação por ausência física no arquivo de origem. Esse fato observado não define o tratamento de uma eventual ausência em edição futura.

**Ausência de imputação, nas fontes já agregadas.** As pesquisas do CETIC.br chegam ao índice como percentuais publicados, que o pipeline preserva sem recalcular o denominador. Nas três tabelas de proporções da TIC Governo Eletrônico 2023 consumidas nesta edição, "Sim", "Não", "Não sabe" e "Não respondeu" são categorias da mesma distribuição. Os percentuais numéricos de cada grupo somam 100% dentro da precisão da fonte, com desvio máximo observado de 0,001 ponto percentual; o índice importa somente a parcela "Sim", de modo que as respostas "Não sabe" e "Não respondeu" ficam fora do numerador e dentro do denominador publicado. Aqui nada é imputado. O hífen representa ausência de resposta ao item e vira dado faltante, enquanto uma célula exibida como zero pode conservar no arquivo o valor positivo inferior a 1% que o pipeline lê.

**Exclusão do denominador, na ausência estrutural.** Variável não disponível na edição utilizada, ou que não observa aquele ente, não vira zero: sai da média. Um ente sem nenhum componente observado numa dimensão fica sem escore naquela dimensão, nunca com escore zero — o que distingue "medimos e não há" de "não medimos".

A diferença entre os regimes é de tratamento, e este capítulo não afirma que ela desloque a ordenação publicada: essa é uma pergunta empírica, e não uma consequência da regra.

A decisão metodológica completa está documentada em `metodologia/decisoes-fase0.md` (seção 1.5).

### 3.3.3 Abordagem snapshot

O índice utiliza a edição mais recente de cada fonte, construindo a melhor fotografia possível do governo digital brasileiro com os dados disponíveis. Cada fonte contribui com exatamente uma observação. Essa escolha maximiza a cobertura temática — inclui variáveis recentes (como indicadores de IA e LGPD) que seriam excluídas em uma abordagem de série temporal — e evita os riscos de comparar edições com questionários reestruturados ou módulos renomeados.

### 3.3.4 Cálculo dos escores por objetivo e das médias dimensionais

O cálculo técnico é análogo nas três visões apresentadas no relatório, respeitando a unidade de análise de cada uma: agregado nacional, UF ou capital. Tanto o escore por objetivo quanto a média dimensional resultam de dois passos: primeiro, o colapso das baterias; depois, a média simples dos componentes disponíveis. O conjunto de indicadores sobre o qual se aplicam esses passos é o do objetivo ou o da dimensão, conforme o resultado calculado.

**Passo 1. Baterias como subscore.** Indicadores do catálogo podem ser itens de uma mesma pergunta-mãe, como os 10 itens sobre o conteúdo do PDTIC no iGovSISP ou os 5 itens de acessibilidade do website na MUNIC. Se cada item entrasse na média com peso próprio, a pergunta-mãe pesaria tantas vezes quantos itens tivesse, favorecendo as perguntas mais longas. Para evitar isso, esses grupos são identificados no catálogo como **baterias**: calcula-se a média simples dos seus itens com dado presentes no objetivo ou na dimensão em análise, e essa média entra como um único componente, com peso 1. Bateria sem item observado não entra no denominador.

Quando os itens de uma mesma bateria pertencem a dimensões diferentes de um objetivo, o cálculo por objetivo reúne esses itens em um único subscore, independentemente da distribuição dimensional. No cálculo de cada média dimensional, entram apenas os itens presentes naquela dimensão; a mesma bateria pode, portanto, contribuir para mais de uma média dimensional, sem ganhar peso adicional no objetivo. Se houver itens da bateria em objetivos diferentes, cada objetivo utiliza somente os seus próprios itens.

Nas vistas dimensionais, cada bateria é agregada sobre os itens que pertencem à dimensão. A mesma bateria pode, portanto, contribuir para mais de uma média dimensional, sem ganhar peso adicional no objetivo. Seis baterias do catálogo ativo atravessam dimensões: sistemas administrativos da TIC Governo Eletrônico; conteúdo do PDTIC; processos de dados; artefatos de dados; governança e qualidade de dados; e integração de serviços digitais. As 19 baterias reúnem 107 variáveis e rendem 28 subscores nas dimensões temáticas; com os 220 indicadores avulsos, a soma dos componentes dessas dimensões é **248**. Os recortes estadual e de capitais recalculam as baterias sobre sua própria composição.

O cálculo por objetivo aplica o colapso uma vez dentro de cada objetivo, reunindo os itens da bateria mesmo quando aparecem em dimensões diferentes. Depois calcula a média simples dos componentes disponíveis, sem média intermediária das dimensões. Os dez objetivos reúnem 241 componentes, enquanto as vistas dimensionais reúnem 248; as contagens diferem porque respondem a agrupamentos distintos. Nenhuma delas constitui uma nota geral entre os objetivos.

> Subscore da bateria = soma dos valores dos seus itens com dados no objetivo ou na dimensão em análise ÷ número desses itens

**Passo 2. Média dos componentes.** Para cada unidade de análise e para cada objetivo, calcula-se a média simples dos componentes disponíveis, isto é, indicadores avulsos e subscores de bateria, já normalizados para 0-100. Cada componente tem peso igual. A média de uma dimensão aplica a mesma operação aos componentes presentes naquela dimensão.

> Escore do objetivo = soma dos valores dos componentes com dados no objetivo ÷ número desses componentes

> Média da dimensão = soma dos valores dos componentes com dados na dimensão ÷ número desses componentes

O escore por objetivo não é a média das médias dimensionais: essa operação atribuiria peso igual a dimensões com quantidades diferentes de componentes e repetiria a contribuição de uma bateria repartida entre elas. Indicadores avulsos sem dado e baterias sem item observado não entram na média; quando nenhum componente está disponível, o escore fica ausente, em vez de receber zero.

**Não há agregado entre objetivos.** As médias dimensionais são o que os Capítulos 4 a 13 reportam; o cálculo por objetivo existe, mas o índice não produz nota geral por recorte nem escore único do conjunto dos dez objetivos. A razão é que os objetivos reúnem coberturas e universos de respondentes muito desiguais — o Objetivo 2 tem 105 variáveis ativas, organizadas em 83 componentes, enquanto o Objetivo 3 tem cinco —, de modo que uma média entre eles produziria um número sem referente interpretável, cuja variação refletiria a composição do catálogo tanto quanto o fenômeno medido. Pela mesma razão, não há ranking geral de unidades da federação nem de capitais: toda ordenação de entes é específica do recorte em que aparece, e o recorte é nomeado junto do resultado.

Nos Capítulos 4 a 13, cada dimensão temática reporta sua `Média Nacional` e cada dimensão federativa reporta a média do recorte correspondente (`Média Estadual` ou `Média Capitais`). A listagem de indicadores de cada dimensão exibe cada item individualmente, com os grupos de bateria sinalizados: a listagem é a leitura detalhada da dimensão, enquanto o subscore da bateria é o que entra na média. As médias impressas seguem a regra do Passo 1: o colapso de baterias está aplicado, e cada média traz os dois números que a descrevem, no formato `(n=N; M itens)`, em que `n` é o número de componentes que entraram na média e a contagem de itens é a de indicadores com dado antes do colapso. Os dois coincidem nas dimensões sem bateria e diferem naquelas em que há.

**Leitura das médias dimensionais — universos heterogêneos:** Os indicadores reunidos numa mesma dimensão temática provêm, em regra, de fontes com universos de respondentes distintos — órgãos públicos, prefeituras, estabelecimentos de saúde, professores, escolas, unidades da federação. A média dimensional é, portanto, um escore de conceito, na mesma natureza descrita adiante para as variáveis medidas em dois universos: **não corresponde a uma proporção de entes** e não deve ser lida como "X% de alguma população". Pela mesma razão, a amplitude entre os indicadores de uma dimensão reflete, em parte, a mudança de pergunta e de denominador entre as fontes, e não apenas diferenças reais de adoção ou maturidade. O caso mais visível é a dimensão de inteligência artificial e tecnologias emergentes do Objetivo 7, cujos componentes variam de 3.7 (proporção de estabelecimentos de saúde que utilizam tecnologias emergentes) a 66.7 (escore médio das unidades da federação no uso de ciência de dados, inteligência artificial ou algoritmo em serviços ao cidadão).

**Exceção — variáveis com agregação por máximo:** 6 variáveis multi-item utilizam o máximo dos sub-itens em vez da média (ver Seção 3.2.3). Nesse caso, o valor que entra como componente é `max(sub-itens)`, representando o limite inferior da proporção de entes com pelo menos um sub-item adotado.

**Exceção, variáveis medidas em dois universos na TIC Governo Eletrônico.** A pesquisa investiga duas unidades de análise por questionários distintos e publica um resultado para cada uma. Foram entrevistados 677 órgãos públicos federais e estaduais dos poderes Executivo, Legislativo e Judiciário e do Ministério Público, com taxa de resposta de 88%, e 4.265 prefeituras, com taxa de resposta de 77%. O plano amostral combina abordagem censitária para as prefeituras e para parte dos órgãos públicos com seleção amostral para os demais órgãos do Poder Executivo estadual. Parte das perguntas é comum aos dois instrumentos, como a questão sobre a existência de área de TI. Para essas variáveis, o componente que entra na média da dimensão é a **média das proporções observadas em cada universo, com peso igual**; assim, o conceito conta uma vez, sem favorecer um dos universos. Como os órgãos públicos apresentam valores maiores que as prefeituras em parte dessas perguntas, usar somente o primeiro universo elevaria o resultado. O valor obtido é um escore de conceito e, por combinar denominadores distintos, **não corresponde a uma proporção de entes** nem deve ser lido como "X% dos órgãos e prefeituras". As variáveis exclusivas de um dos questionários entram diretamente, com o universo declarado no indicador.

### 3.3.5 Tratamento de saltos condicionais (ESTADIC e MUNIC)

Algumas perguntas da ESTADIC e da MUNIC dependem de uma resposta anterior: se o ente respondeu "Não" a uma pergunta-mãe, as perguntas de detalhamento recebem "-" (salto condicional). Há duas formas de lidar com isso, e a escolha depende de o filho funcionar como indicador composto agregado ao pai ou como indicador independente.

**ESTADIC — bloco de governança digital:** Manter "-" como dado ausente infla o indicador (só quem tem a capacidade entra no cálculo); tratá-los como 0 penalizaria o estado duplamente (0 no indicador-pai e 0 no indicador-filho), sobretudo quando o pai e os filhos compõem um único conceito.

Três indicadores foram ajustados:

- **ESTADIC_WIFI_COBERTURA** (Etic22): 10 das 27 UFs com "-" na cobertura Wi-Fi por salto condicional. **Solução:** excluir WIFI_COBERTURA, manter apenas WIFI_EXISTE (Obj 6).

- **ESTADIC_INCLUSAO_ACOES** (Etic19): 1 UF com "-" nas ações de inclusão digital. **Solução:** excluído, mantendo apenas INCLUSAO_PROGRAMA (Obj 6).

- **ESTADIC_PARTICIP_INTERNET** (Etic23): o indicador composto continha 5 perguntas-pai e 16 perguntas-filhas sobre canais, amplificando o peso do "Não" de 1x para 5x. **Solução:** restringir às 5 perguntas-pai, excluindo as 16 perguntas de canal (Obj 9). Dessas cinco, quatro pontuam: a quinta (Etic235) é a alternativa negativa, que registra não disponibilizar nenhuma das formas de participação, e fica fora do numerador e do denominador pela composição descrita na Seção 3.3.1.

**MUNIC — bloco LAI municipal:** A pergunta-mãe `MUNIC_LAI_LEI` (existência de legislação municipal específica) tem 4 perguntas-filhas sobre o conteúdo dessa legislação (prazo de resposta, autoridade de monitoramento, órgão central, relatório anual) que só são feitas quando o município responde "Sim" à pergunta-mãe. Na revisão de redundância, as 4 filhas foram excluídas do índice: o degrau lógico entre existência da lei e detalhes do seu conteúdo fica representado pela variável mais geral, `MUNIC_LAI_LEI`, que permanece ativa (ver Anexo A). Com isso, o bloco deixa de exigir tratamento especial de salto condicional.

### 3.3.6 Notas metodológicas específicas por recorte

**Recorte nacional agregado:**

1. **Tabelas publicadas em vez de microdados:** O Censo Escolar (INEP) e a PNAD Contínua TIC (IBGE) possuem microdados públicos, mas nesta edição utilizamos valores agregados extraídos das Sinopses Estatísticas e tabelas oficiais publicadas.
2. **Cobertura variável por objetivo:** Nem todos os objetivos possuem o mesmo número de indicadores. Objetivos com mais indicadores têm medições mais robustas.
3. **Desagregação de compostos:** Os 5 scores dimensionais do IOSPD (DIM1-5) e o IOSPD Geral foram substituídos por indicadores individuais, permitindo mapeamento ENGD preciso por indicador. Após exclusões de compósitos, indicadores saturados e redundâncias, 48 indicadores IOSPD permanecem ativos.
4. **Exclusão dos sub-índices do iESGo:** As entradas originais do iESGo eram sub-índices compósitos calculados pelo TCU (GovernancaTI, PlanejamentoTI, RiscosTISegInfo, entre outros), e a decisão de compor o índice apenas com variáveis individuais as excluiu. A seleção de questões individuais descrita na Seção 3.1.2 substitui os subíndices selecionados de TI e segurança, sem incorporar os compostos de sustentabilidade ambiental e social.
5. **Indicadores reclassificados:** C7 (Acesso público à Internet) integra exclusivamente o Objetivo 6; H3C (IA generativa) integra exclusivamente o Objetivo 7.
6. **ANATEL — densidade de banda larga:** O indicador de densidade de acessos de banda larga fixa por 100 domicílios está suspenso do índice até que numerador e denominador provenham de fontes oficiais versionadas (ANATEL e IBGE); a fonte permanece representada pela cobertura móvel.
7. **Nível de análise do recorte nacional agregado:** Este recorte opera no nível nacional agregado, combinando indicadores de diferentes esferas de governo. Fontes federais (iGovSISP) medem órgãos da União; fontes estaduais (ESTADIC, IOSPD) contribuem com proporções agregadas de governos estaduais; fontes municipais (MUNIC) contribuem com proporções de municípios com cada capacidade; e pesquisas setoriais (CETIC.br, Censo Escolar) medem equipamentos públicos de saúde, educação e cultura. Os recortes estadual e de capitais utilizam fontes e metodologias adaptadas aos seus níveis de análise (ver seções 3.1.4 e 3.1.5).
8. **Exclusão por escala incompatível:** Variáveis expressas em contagens absolutas ou valores monetários — como o número total de acessos de banda larga fixa (ANATEL) — não se expressam naturalmente na escala 0-100 e não possuem meta de referência para normalização. Quando disponível, utilizou-se uma variável alternativa da mesma fonte já expressa em percentual. A lista completa consta no Anexo A.
9. **Inclusão do iGovSISP:** O recorte nacional incorpora 97 variáveis da edição de 2025, nos objetivos 1, 2, 3, 5, 6, 7, 8 e 10. Concordância genuína usa os níveis 4 e 5; Sim/Não usa a proporção de Sim; Sim/Não/Em parte atribui 1, 0 e 0,5, respectivamente. Nas escalas de conhecimento e utilização, entram os níveis 4 e 5, não o mero conhecimento da norma. Nas escalas de maturidade e adoção, entra a saída do primeiro estágio; elaboração de plano, integração parcial e reconhecimento da necessidade não equivalem a execução, integração completa ou uso institucionalizado. Os códigos das alternativas e seu conteúdo definem os estágios, não a ordem impressa: desconhecimento não recebe pontuação positiva. As perguntas sobre integração ao Login Único e ao módulo de avaliação (`G630IPD` e `G631IPD`) usam os tetos 30, 50, 70, 90 e 100; a pergunta sobre vínculo dos titulares de funções de TI (`G130GP`) usa 25, 50, 75, 100 e 100. A média é ponderada pelas contagens, com peso igual entre órgãos, e aproxima por cima a média dos percentuais declarados por faixa. Não mede a porcentagem exata de todos os serviços integrados. A pergunta sobre metas e acompanhamento da acessibilidade no PDTIC ou PTD (`G106GPS`) fica fora do índice porque seus 202 respondentes representam 86,32% dos 234 órgãos, abaixo do piso de 90%. Os 32 casos não mostrados não recebem zero. O filtro por PDTIC é sustentado pelo contexto e pelas contagens oficiais, mas a programação do salto não foi obtida. As 14 perguntas condicionais de infraestrutura da seleção anterior permanecem no CSV da origem, mas não entram no snapshot publicado. As duas perguntas sobre prioridade da TI ficam fora da extração; as exclusões editoriais e seus fundamentos estão no Anexo A. O tratamento dos demais itens condicionados do PDTIC não foi reavaliado nesta correção focal. A fonte cobre o Executivo Federal e depende de autorrelato, sem verificação externa.

**Recorte estadual:**

1. Dominância do IOSPD: 48/76 variáveis (63,2%). A desagregação do IOSPD em indicadores individuais ampliou a cobertura temática, mas concentrou o recorte em uma única fonte. Complementarmente, a ESTADIC contribui com 28 variáveis (36,8%).
2. Cobertura de 7 dos 10 objetivos: os Objetivos 1 e 8 têm apenas 1 indicador com observação por UF cada — abaixo do mínimo de duas variáveis para compor recorte federativo — e o Objetivo 10 não possui variável com observação por UF no catálogo ativo.
3. Cobertura variável por objetivo: Nem todos os objetivos possuem o mesmo número de indicadores. O Objetivo 2 (49 indicadores) tem medição muito mais robusta que os objetivos com 2 indicadores.
4. ESTADIC pesquisa censitária (N=27): valores são observações diretas, não estimativas.
5. Rondônia não respondeu ao suplemento de Governança (0 em 10 variáveis Egov); Bahia respondeu "Não sabe" nas variáveis de LGPD.

**Recorte de capitais:**

1. Binários MUNIC dominam (59/65 indicadores). Indicadores com 100% de prevalência não possuem poder discriminatório entre capitais.
2. Censo Escolar como proxy: mede infraestrutura escolar, não ações diretas da prefeitura. Indicadores binários (tem/não tem internet) não capturam velocidade ou qualidade.
3. Cobertura móvel (ANATEL) saturada: cobertura 4G/5G entre 92% e 100% nas capitais. Cobertura nominal ≠ qualidade/velocidade efetiva da conexão.
4. Objetivos 7 (Inovação e Tecnologias Emergentes), 8 (Eficiência e Processos) e 10 (Competências) sem indicadores mapeáveis no escopo municipal do catálogo ativo; os Objetivos 1, 3 e 5 possuem apenas 1 indicador com observação por capital cada, abaixo do mínimo para compor recorte federativo.
5. Comparabilidade com o recorte nacional agregado limitada: os dois recortes utilizam fontes e indicadores diferentes. Os scores não são diretamente comparáveis.
6. Completude total: todas as 27 capitais possuem dados para todas as 65 variáveis do recorte.

**Diferenças entre as visões apresentadas no relatório:**

| Aspecto | Nacional | Estadual | Capitais |
|---------|----------|----------|----------|
| Unidade de análise | Nacional agregado | UF (27 estados) | Capital (27 capitais) |
| N.º de variáveis | 327 | 76 | 65 |
| N.º de componentes | 248 | 68 | 57 |
| Fontes | 11 | 2 | 3 |
| Objetivos cobertos | 10 | 7 | 4 |
| ESTADIC | Incluída (média das 27 UFs) | Incluída (fonte principal) | N/A |
| MUNIC | Incluída (proporção de 5.570 municípios) | N/A | Incluída (fonte principal) |
| iGovSISP | Incluído | Excluído (sem dados UF) | Excluído (sem dados municipais) |
| TIC Governo Eletrônico, Censo Escolar, PNAD Contínua TIC | Incluídos | Excluídos (fontes indiretas) | Censo Escolar incluído; TIC Governo Eletrônico e PNAD excluídos |
| Fonte dominante | iGovSISP (97 var.) | IOSPD (48 var.) | MUNIC (59 var.) |

Os três totais de componentes são diferentes porque os três índices são construções distintas, e não porque um mesmo índice perca componentes ao descer de nível federativo. Os recortes estadual e de capitais filtram por fonte na origem: o estadual lê ESTADIC e IOSPD, o de capitais lê MUNIC, Cobertura móvel (ANATEL) e Censo Escolar, e nenhum dos dois lê iGovSISP ou iESGo, cujas observações existem apenas no agregado nacional. Cada visão agrega o que a sua própria composição permite observar, e é por isso que o capítulo declara o total de cada uma em vez de publicar um número só.

A composição do recorte nacional convive com uma assimetria que é anterior à entrada do iESGo e vale a pena explicitar: a maior população do catálogo é a dos órgãos federais do SISP, com 97 variáveis, cujos dados existem apenas na dimensão total, sem observação por UF ou por capital. Somadas às 21 entradas do iESGo, são 118 dos 327 indicadores ativos sem existência subnacional. Isso não torna o índice nacional menos federativo do que era: ele sempre publicou um número só convivendo com essas fontes.

---

## 3.4 Limitações

Para cada fonte de dados do Observatório, distinguimos dois tipos de limitação: **condições de acesso** (como obter os dados e em que formato estão disponíveis) e **continuidade** (se a fonte continuará disponível).

### 3.4.1 Limitações das bases de dados

#### Bases CETIC.br (recorte nacional agregado)

**Condições de acesso:** 4/5 pesquisas requerem Termo de Acesso e Uso com NIC.br. A TIC Domicílios tem download livre desde 2015 e, ainda assim, nenhum indicador dela integra o índice nesta edição, por uma razão de cobertura e não de acesso, detalhada nas limitações abaixo. O índice atual baseia-se em tabelas de proporções publicadas pelo CETIC.br, com recortes predefinidos e sem cruzamento de variáveis. Os recortes variam por pesquisa; na TIC Governo Eletrônico, o produto de prefeituras inclui localização, região, porte e UF, mas não identifica municípios. O procedimento de acesso aos microdados está descrito na Seção 3.6.

**Dependência do CETIC.br:** Das 5 pesquisas CETIC catalogadas, 3 fornecem 67 dos 327 indicadores do recorte nacional agregado (20,5%); as outras 2 permanecem catalogadas sem indicador ativo. A TIC Educação é uma das fontes do dimensionamento atual do Objetivo 10 (Competências em Governo Digital), com 3 das 23 variáveis consideradas no capítulo correspondente; essas 23 entram na agregação como 12 componentes, porque itens de uma mesma bateria contam juntos (ver Seção 3.3.4). Fatores de estabilidade: financiamento autossustentável (domínios .br), status UNESCO Cat. 2 desde 2012, longevidade (TIC Domicílios desde 2005). Fatores de cautela: 3 pesquisas CETIC foram descontinuadas recentemente (Centros Públicos de Acesso, OSC, Painel TIC).

Limitações específicas por pesquisa:
- **TIC Governo Eletrônico:** Bienal (anos ímpares), 42 variáveis ativas. Dois questionários observam órgãos públicos federais e estaduais e prefeituras; o desenho combina abordagem censitária e seleção amostral. O pipeline preserva as tabelas de proporções dos dois universos e a desagregação das prefeituras por UF, mas o índice usa somente os totais dos dois universos no recorte nacional agregado. As linhas por UF não entram nos recortes estadual ou de capitais. Divergência entre códigos do questionário e do portal exige mapeamento manual.
- **TIC Saúde:** Anual, 19 variáveis ativas. Estável.
- **TIC Educação:** Anual, 6 variáveis ativas. Alternância CAPI (anos pares, todos os respondentes) e CATI (anos ímpares, apenas gestores/escolas) afeta a cobertura de variáveis de professores.
- **TIC Cultura:** Bienal, nenhuma variável ativa. A planilha oficial de 2024 não publica totais nacionais; os indicadores da pesquisa estão suspensos do índice até a fonte divulgar total oficial, pesos amostrais ou microdados.
- **TIC Domicílios:** Anual, nenhuma variável ativa. Os indicadores de governo eletrônico são publicados apenas para usuários de Internet de 16 anos ou mais — universo que cobre 83,8% da população dessa faixa etária, abaixo do corte de 90% da Seção 3.2.4 —, de modo que nenhum indicador da pesquisa integra o índice na edição atual.

**Cobertura do Objetivo 3:** O Objetivo 3 (Identificação Única) é o objetivo com menor cobertura no catálogo ativo: 5 variáveis de 4 fontes (`C9B_A`, `IOSPD_I09`, `IOSPD_V07`, `MUNIC_AUTENTICACAO` e `G630IPD`). As cinco medidas distinguem adoção do login GOV.BR, extensão da integração dos serviços ao Login Único, disponibilidade de assinatura eletrônica, emissão da Carteira de Identidade Nacional e autenticação em serviços municipais, em universos de respondentes também distintos. Elas permanecem descritas no relatório, para explicitar o diagnóstico e orientar a busca de dados, mas as dimensões do objetivo não serão publicadas na plataforma pública do Observatório: cinco medidas heterogêneas não sustentam leitura equivalente à dos objetivos cobertos por dezenas de indicadores. Esta é a formulação de referência da decisão; os Capítulos 1 e 6 remetem a ela. A Seção 3.6 descreve a estratégia de parceria com a SGD/MGI para ampliar essa cobertura.

#### Demais bases (recorte nacional agregado)

- **Censo Escolar (INEP):** Microdados abertos, granulares e pesados. Filtragem e tratamento diretos. Reestruturado em 2019 com inclusão de variáveis TIC, estável desde então.
- **Cobertura móvel (ANATEL):** CSVs abertos, filtragem e tratamento simples. Dados regulatórios estáveis.
- **PNAD Contínua TIC (IBGE):** Microdados públicos detalhados. Módulo TIC é rotativo, podendo ser substituído pelo IBGE.
- **IOSPD (ABEP-TIC):** A edição utilizada (2025) disponibiliza dados desagregados por UF.
- **iGovSISP (SGD/MGI):** Autodiagnóstico anual de órgãos do Executivo Federal. O índice usa somente a edição de 2025 e sua seleção tem 97 variáveis ativas. As limitações de autorrelato e universo condicionado e as regras de tratamento estão na Seção 3.3.6. A dimensão 2 mede sistemas e serviços públicos digitais; a ausência da dimensão 4 no relatório não autoriza supor migração de seu conteúdo para outra dimensão.

#### ESTADIC (recortes nacional agregado e estadual)

**Acesso:** Dados em XLSX agregado, sem microdados estruturados e sem API. A extração requer processamento manual das planilhas publicadas pelo IBGE. Suplemento TIC quinquenal.

**Dependência:** As 28 variáveis da ESTADIC são indispensáveis para o recorte estadual. Se o IBGE descontinuar ou alterar significativamente o questionário, o recorte estadual ficaria restrito às 48 variáveis IOSPD, de 1 única fonte.

**Não-resposta:** Rondônia não respondeu ao suplemento de Governança (10 variáveis Egov = 0). Bahia respondeu "Não sabe" nas variáveis LGPD (= 0). Os dois casos são da ESTADIC, e portanto do regime de imputação de zero descrito na Seção 3.3.2, que não vale para as fontes já agregadas. A premissa é conservadora — pode subestimar estados que possuem a capacidade mas não responderam por razões administrativas. A alternativa (excluir UFs) premiaria a não-resposta ao calcular a média sobre menos componentes.

#### MUNIC (recortes nacional agregado e de capitais)

**Acesso:** Microdados em XLSX, acesso livre. Suplemento TIC quinquenal.

**Cobertura:** Censitário (5.570 municípios), mas todas as variáveis são binárias (Sim/Não).

### 3.4.2 Análise de viés de seleção e qualidade dos dados

O índice agrega variáveis de múltiplas fontes, com desenhos de coleta diferentes. Três mecanismos de viés são relevantes: viés de cobertura, quando a fonte não cobre toda a população de interesse; viés de não-resposta, quando unidades selecionadas não respondem; e viés de resposta por desejabilidade social.

**Autodiagnóstico obrigatório — iGovSISP** (97 das 327 variáveis do recorte nacional agregado): o iGovSISP é aplicado aos 234 órgãos SISP. Embora a participação seja obrigatória (viés de seleção baixo), é um autodiagnóstico: as respostas dependem da autoavaliação dos respondentes, suscetível a viés de desejabilidade social. Direção esperada: superestimação da maturidade.

**Pesquisas CETIC.br com resposta voluntária** (67 das 327 variáveis do recorte nacional agregado): as três pesquisas que contribuem para o índice dependem da resposta das unidades selecionadas, mas seus desenhos não são iguais. A TIC Governo Eletrônico combina abordagem censitária e seleção amostral; nessa pesquisa, responderam 88% dos órgãos públicos federais e estaduais e 77% das prefeituras. Se as unidades menos digitalizadas responderem menos, as proporções publicadas podem superestimar a realidade, mas as tabelas agregadas e as taxas de resposta não permitem testar essa associação nem medir sua magnitude. A superestimação é uma hipótese de direção do viés, não um efeito demonstrado.

**Avaliação externa — IOSPD** (48 das 327 variáveis do recorte nacional agregado): avaliação externa dos portais estaduais pela ABEP-TIC. Viés de seleção baixo (todos os 27 portais são avaliados).

**Questionário de autoavaliação: iESGo** (21 das 327 variáveis do recorte nacional agregado): o [FAQ do iESGo 2024](https://iesgo.tcu.gov.br/wp-content/uploads/sites/12/iesgo2024/FAQ_iESGo-v4.docx) define o instrumento como autoavaliação e atribui a responsabilidade pelas respostas ao dirigente máximo de cada organização. O questionário alcançou o universo de 387 organizações jurisdicionadas dos três Poderes. O TCU não verificou diretamente as respostas: o [relatório técnico](https://iesgo.tcu.gov.br/wp-content/uploads/sites/12/iesgo2024/iESGo2024_Relatorio_tecnico.pdf) informa que essa validação exigiria auditorias de campo, não realizadas no ciclo. Para reduzir a probabilidade de superestimação, o instrumento pede texto livre com indicação de evidência auditável e desdobra itens em subquestões de sim ou não. Esses procedimentos estruturam a declaração, mas não constituem auditoria das respostas. O viés de seleção é baixo porque a aplicação cobre o universo pesquisado; persiste o risco de desejabilidade social porque cada organização avalia a própria governança. O índice usa as questões individuais, e não os sub-índices compósitos calculados pelo TCU. A periodicidade é irregular. Direção esperada: superestimação; os procedimentos podem reduzir o risco, mas sua magnitude não foi medida.

**Dados administrativos e censitários** (94 das 327 variáveis do recorte nacional agregado): ESTADIC (28 variáveis, pesquisa censitária N=27 UFs), MUNIC (59 variáveis, pesquisa censitária N=5.570 municípios), Censo Escolar (INEP, 5), Cobertura móvel (ANATEL, 1) e PNAD Contínua TIC (1). Viés de seleção baixo — ESTADIC e MUNIC são pesquisas censitárias obrigatórias. Porém, como os questionários são preenchidos pelo próprio governo respondente, há risco moderado de viés de desejabilidade social, semelhante aos autodiagnósticos federais.

**ESTADIC — saltos condicionais:** Na aba de Informática, 6,2% das células contêm "-" (salto condicional); na aba de Governança, 8,0%. Em algumas variáveis, o percentual chega a 59-74%. O tratamento desses traços (NaN vs. 0) afeta diretamente as proporções.

**Sensibilidade à não resposta:** A sensibilidade dos escores ao tratamento da não resposta não foi medida nesta edição. Os três regimes da Seção 3.3.2 são escolhas declaradas, e nenhum cálculo alternativo foi executado para comparar os escores que cada um produz. Não se supõe, portanto, que o efeito seja pequeno, nem que as ordenações publicadas permaneçam as mesmas sob outro tratamento.

### 3.4.3 Proveniência desta edição

Esta edição foi construída sobre o conjunto de dados identificado pelo manifesto de SHA-256 `61a24adfb7061005db24156bfd22e7b135bb1718dd93e620c5d54099d2f2a400`, que reproduz a revisão `5127d22` do conjunto `obsgovdigital/obsgovdigital` em tudo, menos na composição corrigida das baterias da ESTADIC descrita na Seção 3.3.1. O manifesto da release que acompanha este relatório identifica a revisão dos dados, a revisão do código e o hash de cada arquivo produzido, e é por ele que os números aqui publicados se reproduzem.

---

## 3.5 Classificação da cobertura das recomendações da ENGD

O Anexo da Portaria SGD/MGI nº 5.395/2026 elenca 68 recomendações aos entes federados, e o índice não alcança todas do mesmo modo. O Anexo B percorre as 68 e registra, uma a uma, o quanto o índice mede o que cada uma exige, cobertas inclusive. A classificação combina duas comparações: entre o que a recomendação exige e o que os indicadores medem, e entre os entes a que ela se dirige e os níveis que o índice observa.

A **cobertura de conteúdo** compara o que a recomendação exige com o que os indicadores do objetivo medem. É integral quando os indicadores medem de frente todos os deveres que o enunciado contém; parcial quando medem apenas parte deles, ou os alcançam por variável indireta, isto é, por pergunta que se aproxima do conteúdo sem medi-lo; e ausente quando nenhum indicador ativo mede o dever principal.

A **cobertura federativa** compara os níveis em que o índice observa esse conteúdo com os entes a que a recomendação se dirige. Aqui a variação é pequena: 67 das 68 recomendações se dirigem a todos os entes federados, e a única exceção é a Recomendação 3.3, endereçada aos órgãos estaduais de emissão de identidade civil. Referências a instâncias federais em outras recomendações não restringem o destinatário — é o caso, por exemplo, da coordenação da União na 3.4, do compartilhamento entre União, estados e municípios na 3.8 e na 5.6, do programa federal como referência de articulação na 4.1 e da legislação federal como parâmetro de alinhamento na 8.1; em todas, a execução cabe a qualquer ente. A cobertura federativa é completa quando o índice observa o conteúdo em todos os níveis que a recomendação alcança, e parcial quando observa parte deles.

Nem toda observação do índice é federativa. Quando a população respondente não é um ente de governo — escolas, domicílios, professores e estabelecimentos de saúde —, o indicador diz o que se mede no território, e não o que um ente executa; ele sustenta a cobertura de conteúdo, mas não entra na leitura de alcance. São 32 dos 327 indicadores ativos, e o efeito da regra é sempre rebaixar o alcance, nunca o conteúdo.

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

O Objetivo 3 da ENGD (Identificação Única) é o objetivo com menor cobertura no catálogo ativo: 5 variáveis de 4 fontes (`C9B_A`, `IOSPD_I09`, `IOSPD_V07`, `MUNIC_AUTENTICACAO` e `G630IPD`). Enquanto isso, a plataforma Gov.br cresceu de 130 milhões para 166 milhões de contas entre 2023 e 2025, 67,55 milhões de cidadãos atingiram o nível ouro de autenticação e 31,5 milhões de Carteiras de Identidade Nacional foram emitidas — nenhum desses avanços é captado pelo índice.

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
| 1. Gestão e Planejamento de TI | Governança, PDTIC, competências de pessoal | Obj. 1 e 10 |
| 2. Sistemas e Serviços Públicos Digitais | Planejamento da transformação digital, satisfação, acessibilidade, autenticação, integração e avaliação de valor público | Obj. 1, 2, 3, 5 e 8 |
| 3. Dados e Informações | Governança e uso de dados, interoperabilidade, IA | Obj. 5 e 7 |
| 4. Privacidade e Segurança | Ausente do relatório público consultado | Não integra o recorte |
| 5. Contratações de TI | Normativos, processos, sustentabilidade e acessibilidade | Obj. 1 e 8 |
| 6. Infraestrutura e Plataformas Digitais | Centro de dados, rede, nuvem, IPv6 | Obj. 6 (Infraestrutura) |

Atualmente, apenas relatórios agregados estão disponíveis publicamente, em formato PDF gerado pelo LimeSurvey. Propõe-se solicitar à SGD/MGI os microdados (respostas por órgão) para:

- **Desagregar por tipo de órgão** (setorial, seccional, correlata), permitindo análise comparativa
- **Cruzar dimensões do iGovSISP com outros indicadores do índice**, enriquecendo os objetivos em que a fonte possui variáveis ativas
- **Complementar o iESGo (TCU)**: enquanto o iESGo avalia governança ampla por autoavaliação aplicada, em edições irregulares, a 387 organizações jurisdicionadas dos três Poderes, o iGovSISP mede anualmente a maturidade operacional de TI por autodiagnóstico de 234 órgãos do SISP. São instrumentos complementares, não substitutos.

---

## 3.7 Metodologia de desenvolvimento e validação da plataforma

Esta seção descreve a plataforma web do Observatório, artefato distinto do índice de que tratam as seções anteriores deste capítulo. Os recortes territoriais nomeados aqui são os que a plataforma publica em seu site, e não correspondem aos recortes de análise deste relatório, descritos na abertura do capítulo.

O desenvolvimento da Plataforma do Observatório de Governo Digital foi realizado de forma iterativa e orientada à experiência do usuário, combinando atividades de design, engenharia de software, integração e tratamento de dados, avaliação com usuários e validação de segurança da informação.

O processo não se limitou à implementação tecnológica. A plataforma passou por sucessivos ciclos de análise, prototipação, desenvolvimento, avaliação e aprimoramento, buscando garantir que as informações sobre governo digital fossem apresentadas de forma clara, acessível e útil para diferentes públicos.

### 3.7.1 Concepção e prototipação

A primeira etapa foi dedicada à definição da experiência de navegação e à construção do protótipo da plataforma. O trabalho envolveu a organização das informações, definição da arquitetura das páginas, formas de visualização dos indicadores e estrutura de navegação.

A frente de **Design e UX/UI** foi responsável pela exploração e evolução das interfaces, enquanto a equipe de **Engenharia** (engenheiro/desenvolvedor de software, cientista e engenheiro de dados) realizou a implementação da plataforma oficial, incluindo arquitetura tecnológica, integração de dados, requisitos de acessibilidade e desenvolvimento das funcionalidades.

Essa separação permitiu que novas soluções de interface fossem experimentadas antes de sua incorporação à versão oficial.

### 3.7.2 Desenvolvimento incremental da plataforma

A implementação ocorreu por ciclos sucessivos de desenvolvimento. A partir da comparação entre o protótipo, a plataforma implementada e os requisitos definidos para o projeto, foram realizadas revisões estruturais e funcionais.

Nesse processo foram desenvolvidas e aprimoradas páginas como **Home, Indicadores, Ranking, Metodologia e Objetivos**, além dos mecanismos de navegação, filtros e visualização dos dados.

Os ciclos de desenvolvimento também contemplaram ajustes de layout, tratamento de situações em que não existem dados disponíveis, padronização da apresentação dos indicadores e melhoria dos mecanismos de navegação entre objetivos, indicadores e entes federativos.

### 3.7.3 Integração e evolução dos dados

Paralelamente ao desenvolvimento da interface, foi realizado um processo contínuo de evolução da estrutura de dados utilizada pela plataforma.

Entre os aprimoramentos realizados estiveram a substituição progressiva de informações simuladas por dados efetivos, a implementação de categorias temáticas reais, a organização das variáveis associadas aos indicadores e a disponibilização de arquivos estruturados para download.

A cobertura territorial da plataforma também foi ampliada, gradativamente, passando a contemplar três recortes de análise: **Federal, Estadual e Municipal**, incluindo 319 municípios com população igual ou superior a 100 mil habitantes. Essa evolução permitiu ampliar as possibilidades de comparação e exploração das informações disponíveis no Observatório.

### 3.7.4 Avaliação com usuários

Uma etapa específica do desenvolvimento foi dedicada à avaliação da experiência de utilização da plataforma.

Foram convidados profissionais com atuação direta ou indireta em temas relacionados ao governo digital, além de pesquisadores da área. Cada participante ou grupos de participantes realizaram uma visita orientada à plataforma com a equipe técnica do projeto, durante a qual pôde explorar suas funcionalidades, navegar pelas páginas e analisar a forma de apresentação das informações.

Durante essa interação, foram registradas percepções relacionadas aos pontos positivos da plataforma, dificuldades encontradas durante a navegação e sugestões de funcionalidades ou aprimoramentos.

Após a visita orientada, os participantes responderam a um *survey* estruturado de avaliação.

O instrumento considerou diferentes dimensões da experiência de uso, incluindo a compreensão do propósito da plataforma, facilidade de navegação, organização dos conteúdos e utilização dos filtros.

Também foram avaliados aspectos relacionados à relevância dos indicadores, facilidade de interpretação dos gráficos e tabelas, clareza das descrições e utilidade das formas de apresentação dos dados.

Outras dimensões analisadas envolveram a percepção de confiança nas informações, a capacidade da plataforma de contribuir para a compreensão do cenário de governo digital e seu potencial para apoiar decisões, pesquisas e atividades de planejamento.

O instrumento incluiu ainda questões sobre a intenção de voltar a utilizar e recomendar a plataforma, além de campos abertos destinados à identificação de aspectos positivos e oportunidades de melhoria.

Os resultados confirmaram a pertinência da proposta da plataforma e, ao mesmo tempo, forneceram subsídios concretos para sua evolução. As percepções dos participantes foram incorporadas ao processo de desenvolvimento, permitindo aprimorar aspectos de navegação, apresentação e contextualização das informações e orientar a inclusão de novos recursos. Dessa forma, a avaliação com usuários foi parte efetiva do processo iterativo de construção da plataforma, além de etapa de validação.

### 3.7.5 Incorporação das contribuições e aprimoramento da experiência

As entrevistas e o *survey* foram utilizados como insumos para um novo ciclo de desenvolvimento.

Grande parte das sugestões consideradas pertinentes ao escopo do projeto foi incorporada à plataforma. Os ajustes envolveram tanto aspectos de interface quanto formas de explicar os dados e facilitar sua exploração.

Entre as evoluções posteriores à avaliação com usuários estiveram:

- aprimoramento da organização e da apresentação das informações
- maior detalhamento de indicadores e variáveis
- revisão de elementos de navegação
- inclusão de recursos de apoio à utilização da plataforma
- criação de uma **demonstração orientada** para facilitar o primeiro contato dos usuários
- desenvolvimento de uma nova abordagem de storytelling, permitindo uma leitura mais contextualizada dos dados
- evolução da identidade visual, incluindo a incorporação da marca do Observatório
- ampliação das possibilidades de exploração e comparação das informações

As questões abertas do *survey* também tiveram papel importante nessa etapa, pois permitiram identificar demandas relacionadas, entre outros aspectos, ao detalhamento das variáveis, evolução dos dados, informações sobre indicadores e aprimoramento da navegação.

### 3.7.6 Validação e segurança da informação

Após a consolidação das funcionalidades e dos principais aprimoramentos de experiência do usuário, a plataforma passou por uma etapa específica de avaliação de segurança da informação.

Essa fase foi composta por diferentes testes de segurança destinados a identificar possíveis vulnerabilidades e verificar a robustez da aplicação antes de sua disponibilização.

Os resultados encontrados durante esse processo foram analisados pela equipe técnica e utilizados para orientar os ajustes necessários, incorporando a segurança como uma dimensão do processo de qualidade da plataforma.

### 3.7.7 Um processo contínuo de evolução

A metodologia adotada para o Observatório considera a plataforma como um produto em evolução contínua. O ciclo pode ser sintetizado como uma sequência que parte da prototipação, segue pelo desenvolvimento, pela integração de dados, pela avaliação com usuários, pelo aprimoramento e pela validação de segurança, e desemboca na evolução contínua, que realimenta a sequência.

Essa abordagem permitiu combinar rigor metodológico, desenvolvimento tecnológico e participação de usuários, de modo que a versão final da plataforma resulta tanto da implementação técnica quanto de um processo de validação e aprendizado a partir da experiência de seus potenciais usuários.
