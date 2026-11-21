# 3. Metodologia

Este capítulo apresenta a metodologia comum às três visões do Índice de Governo Digital publicadas no relatório, **nacional agregado**, **estadual** e **de capitais**, bem como as especificidades de cada uma. Além dessas três visões, o produto de dados desta edição inclui o recorte dos municípios com pelo menos 100 mil habitantes segundo o Censo Demográfico 2022 do IBGE. O limiar é inclusivo, de modo que um município com exatamente 100 mil habitantes entra, e o corte seleciona 319 municípios, entre eles as 27 capitais. Esse recorte é produto de dados: os escores e o ranking por objetivo ficam nos arquivos da edição, e o corpo do relatório não traz síntese, ranking nem tabela municipal derivados dele. Os elementos compartilhados, como critérios de seleção de variáveis, normalização, tratamento de não-resposta e fórmula de agregação, são descritos uma única vez. As fontes de dados e limitações são apresentadas com indicação de quais visões utilizam cada fonte.

Os Capítulos 4 a 13 apresentam, cada um, **um objetivo da ENGD**. Dentro de cada objetivo, as variáveis são organizadas em **dimensões temáticas**, sub-conceitos mais fechados que o objetivo, e, quando há pelo menos duas variáveis com observação por UF ou por capital, também em dimensões federativas dedicadas (`Recorte Estadual` e/ou `Recorte de Capitais`). As médias dimensionais organizam a apresentação dos resultados neste relatório; o escore de cada objetivo é calculado diretamente sobre seus componentes, após o colapso das baterias dentro do objetivo, sem média intermediária das dimensões. Não há nota geral por recorte nem escore único da ENGD que agregue os dez objetivos (ver Seção 3.3.4).

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

- TIC Centros Públicos de Acesso (CETIC.br): interrompida em 2019
- TIC Organizações Sem Fins Lucrativos (CETIC.br): interrompida em 2022
- Painel TIC (CETIC.br): interrompido em 2022
- TIC Empresa (IBGE): interrompida em 2010
- Escala Brasil Transparente (CGU): interrompida em 2020

Também foi excluído o Ranking de Competitividade dos Estados (CLP) por não produzir dados primários.

Também ficaram de fora os índices internacionais de governo digital discutidos no Capítulo 2, o *E-Government Development Index* (EGDI), das Nações Unidas, o *GovTech Maturity Index* (GTMI), do Banco Mundial, e o *Digital Government Index* (DGI), da OCDE. A razão é a regra do compósito, enunciada adiante no parágrafo sobre o iESGo e aplicada ao iGovTI no Anexo A: sub-índice compósito calculado pela fonte não entra no índice. Os três são compósitos nesse sentido, e o GTMI o é em segundo grau, já que a edição de 2025 usa no próprio cálculo cinco indicadores importados de outros índices, entre eles os três componentes do EGDI, o *E-Participation Index* das Nações Unidas e o *Global Cybersecurity Index* da União Internacional de Telecomunicações.

Em princípio esses índices são decomponíveis. O EGDI se abre em serviços online, infraestrutura de telecomunicações e capital humano, e o GTMI, em quatro sub-índices que somam 48 indicadores, dos quais 43 são levantados pelo Banco Mundial, por questionário ou, para as economias que não o responderam, em fontes públicas, e 5 são importados de outros índices. Decompô-los, porém, não resolveria o problema, por duas razões. A primeira é que há variáveis comparativas entre países, e não absolutas. O EGDI aplica padronização por escore-z a cada componente antes de normalizá-lo, de modo que o valor de um país exprime posição em relação à média e à dispersão do conjunto avaliado naquela edição, e os anexos do *E-Government Survey* de 2022 registram, ao tratar do índice de participação eletrônica, que também o EGDI não se destina a medir em sentido absoluto, e sim a captar o desempenho dos países uns em relação aos outros num dado momento. Trazido para um índice de unidades federativas brasileiras, um valor assim descreveria a posição do Brasil entre países, não o estado do ente medido, e o GTMI herda essa característica ao embutir os três componentes do EGDI. A segunda razão é que parte da informação é declarada pelos próprios governos avaliados, e o problema não está na autodeclaração em si. Este índice trabalha com fontes autodeclaradas, entre elas o iGovSISP e o iESGo, cujos vieses a Seção 3.4.2 documenta uma a uma. A diferença é que ali a declaração chega como resposta individual, que o índice usa como observação e pondera item a item, enquanto nesses benchmarks ela chega já agregada num escore, calculado pela fonte segundo pesos e regras próprios. A atualização de 2025 do GTMI foi construída sobre respostas declaradas por 158 economias, colhidas em questionário online aberto a funcionários de cada país, e sobre dados públicos para as demais, cabendo ao Banco Mundial revisar as respostas e validar as evidências apresentadas; o DGI é construído sobre questionário respondido por dirigentes de governo digital, com validação posterior das respostas. O EGDI é diferente nesse ponto, e a distinção importa: o componente de serviços online é levantado por pesquisadores independentes, dois por país, orientados a se apoiar apenas em fontes governamentais e a não compartilhar achados com terceiros, cabendo ao questionário enviado aos Estados-membros indicar, entre outras informações, os endereços dos portais a examinar.

A exclusão não é juízo sobre a qualidade desses instrumentos. Ela dialoga com uma observação recolhida nas entrevistas de validação do índice, feitas em março de 2026: dimensões como conectividade e competências digitais tendem a reduzir o desempenho do Brasil em índices globais, o que não se reproduz nos resultados aqui apresentados. Parte dessa diferença decorre de os objetos serem distintos: os benchmarks internacionais comparam países entre si, enquanto este índice mede unidades federativas brasileiras a partir de fontes que observam diretamente esses entes. O exame mais detido da comparabilidade dimensão a dimensão, que as mesmas entrevistas recomendam, permanece como agenda e não é encerrado aqui. Os dois se complementam, e o Observatório se põe ao lado deles, e não subordinado a eles. Diagnosticar a posição do Brasil no mundo continua sendo tarefa dos benchmarks globais; medir a heterogeneidade entre estados e capitais, que a agregação nacional deles tende a ocultar e que os resultados estaduais do IOSPD já evidenciam (ABEP-TIC, 2024, p. 16–18), é o que este índice existe para fazer.

### 3.1.2 Visão geral das fontes

A tabela consolida as fontes utilizadas nas três visões apresentadas no relatório. Cada fonte pode participar de uma ou mais dessas visões conforme a granularidade e a disponibilidade dos dados.

| Fonte | Instituição | Edição | Nacional | Estadual | Capitais | Variáveis |
|-------|-------------|:------:|:--------:|:--------:|:--------:|:---------:|
| TIC Governo Eletrônico | CETIC.br | 2023 | ✓ | | | 59 |
| TIC Saúde | CETIC.br | 2024 | ✓ | | | 19 |
| TIC Educação | CETIC.br | 2024 | ✓ | | | 13 |
| TIC Cultura | CETIC.br | 2024 | ✓ | | | 0 |
| TIC Domicílios | CETIC.br | 2024 | ✓ | | | 2 |
| IOSPD | ABEP-TIC | 2025 | ✓ | ✓ | | 47 |
| iGovSISP | SGD/MGI | 2025 | ✓ | | | 97 |
| iESGo | TCU | 2024 | ✓ | | | 21 |
| PNAD Contínua TIC | IBGE | 2024 | ✓ | | | 1 |
| Cobertura móvel | ANATEL | 2025 | ✓ | | ✓ | 1 |
| Censo Escolar | INEP | 2024 | ✓ | | ✓ | 5 |
| ESTADIC | IBGE | 2024 | ✓ | ✓ | | 27 |
| MUNIC | IBGE | 2024 | ✓ | | ✓ | 56 |
| Base de dados da CIN | SGD/MGI | 2026 | ✓ | ✓ | | 1 |

A TIC Cultura permanece catalogada sem indicador ativo: a fonte não publica os totais nacionais oficiais necessários. A TIC Domicílios contribui com dois indicadores recalculados sobre todos os indivíduos de 16 anos ou mais, com leitura de piso (Seção 3.2.4).

O iESGo (TCU) integra o índice por meio de vinte questões completas do questionário de governança e do sub-item `3132C`, e não pelos sub-índices compósitos que o próprio TCU calcula. A distinção é a mesma que orienta o catálogo inteiro: sub-índice compósito calculado pela fonte não entra, porque o índice o recalcularia sobre um agregado que já embute pesos de outra metodologia; a questão individual entra, porque é observação. Para o iESGo, esta edição utiliza as questões componentes dos sete subíndices selecionados de governança e gestão de TI e segurança da informação. O questionário foi respondido por 387 organizações. O índice calcula as questões sobre 369 delas, os órgãos e entidades dos três Poderes e das funções essenciais à Justiça, e deixa fora as 18 que o TCU classifica no Poder "Paraestatal", os serviços sociais autônomos e os conselhos de fiscalização profissional, que não integram a administração pública. As questões acrescentam ao índice um corte por Poder que nenhuma outra fonte oferece.

**Princípio de seleção por nível:**

- **Recorte nacional agregado:** Fontes com dados agregados nacionais e publicação recente. MUNIC e ESTADIC participam do recorte nacional com dados agregados (proporções nacionais) e dos recortes subnacionais com dados individualizados.
- **Recorte estadual:** Apenas fontes que medem **diretamente** o governo estadual. A desagregação por UF da TIC Governo Eletrônico mede prefeituras, o Censo Escolar mede escolas e a PNAD Contínua TIC mede domicílios; esses produtos foram excluídos porque atribuiriam ao estado o desempenho de outros atores. Fontes sem dados por UF, como o iGovSISP, também foram excluídas.
- **Recorte de capitais:** Fontes com granularidade municipal e identificação individual. Produtos com resultados agregados, como as pesquisas CETIC.br e a PNAD Contínua TIC, foram excluídos porque não identificam cada município.

### 3.1.3 Fontes do recorte nacional agregado

O recorte nacional agregado utiliza 14 fontes catalogadas, das quais 13 contribuem com os 349 indicadores ativos, que entram na agregação como 250 componentes nas vistas dimensionais. No cálculo por objetivo, o colapso das baterias reúne esses indicadores em 241 componentes, sem média intermediária das dimensões (ver Seção 3.3.4). As principais fontes são:

- **Pesquisas CETIC.br** (5 pesquisas catalogadas, das quais 4 fornecem 93 variáveis ativas): TIC Governo Eletrônico (bienal, 59 variáveis), TIC Saúde (anual, 19), TIC Educação (anual, 13) e TIC Domicílios (anual, 2). A TIC Cultura permanece catalogada sem indicador ativo (Seção 3.1.2). O total reflete o desmembramento de variáveis multi-item em entradas individuais (Seção 3.2.3). Quatro pesquisas requerem Termo de Acesso e Uso com o NIC.br; TIC Domicílios tem microdados livres.
- **IOSPD (ABEP-TIC)**: Índice anual de oferta de serviços públicos digitais, avaliando portais estaduais em 5 dimensões. Desagregado em 47 indicadores individuais ativos que mapeiam para 8 dos 10 objetivos ENGD: Capacidades (I.1 e I.3-I.12), Serviços (II.1-II.6 e II.8-II.12), Normatização (III.1a-III.1d, III.2, III.4, III.6 e III.7), Linguagem Simples (IV.1-IV.9) e Inovação (V.1-V.6, V.8 e V.9). Dados detalhados por UF disponíveis na edição utilizada.
- **iGovSISP (SGD/MGI)**: Autodiagnóstico anual aplicado aos órgãos do SISP, com 234 respondentes em 2025 e 97 variáveis ativas nesta edição do índice. O cálculo usa somente a edição mais recente. Concordância genuína considera respostas parcialmente ou totalmente concordantes; conhecimento e utilização considera os níveis 4 e 5; maturidade considera respostas a partir do terceiro estágio, sem presumir adoção plena. Faixas percentuais usam a média dos tetos reais, ponderada pelas contagens, com peso igual entre órgãos. A seleção e seus limites estão descritos na Seção 3.3.6 e no Anexo A.
- **Censo Escolar (INEP)**: Microdados anuais de escolas públicas brasileiras em atividade. 5 indicadores binários agregados como proporção nacional.
- **Cobertura móvel (ANATEL)**: Dados regulatórios de telecomunicações.
- **PNAD Contínua TIC (IBGE)**: Módulo rotativo de acesso a TIC nos domicílios.
- **MUNIC (IBGE)**: Pesquisa censitária aplicada a todos os 5.570 municípios brasileiros, com suplemento de Informática e Comunicação. No recorte nacional, os 54 indicadores binários são agregados como proporção nacional. A publicação de perguntas e respostas feitas pela LAI e a abrangência do acesso com a conta GOV.BR são médias das respectivas escalas de três níveis (Seção 3.3.1). No recorte de capitais, os dados individuais das 27 capitais compõem as dimensões federativas correspondentes.
- **ESTADIC (IBGE)**: Pesquisa censitária aplicada às 27 Unidades da Federação, com suplementos de Informática e Comunicação e Governança. No recorte nacional, os 27 indicadores são agregados como média das UFs. No recorte estadual, os dados individuais por UF compõem as dimensões federativas correspondentes.
- **Base de dados da CIN (SGD/MGI)**: Registro administrativo das Carteiras de Identidade Nacional emitidas, por UF emissora, recebido da Secretaria de Governo Digital com extração de 08/10/2026. Fornece 1 indicador, o atingimento da meta de emissão da EFGD, descrito no Capítulo 6. No recorte nacional entra o valor do Brasil; no recorte estadual, o de cada UF.

### 3.1.4 Fontes do recorte estadual

O recorte estadual utiliza 3 fontes que medem diretamente o governo estadual, totalizando 75 variáveis distribuídas em 9 dos 10 objetivos. Em 7 desses objetivos há ao menos duas variáveis com observação por UF, o mínimo para compor a dimensão `Recorte Estadual` nos capítulos de resultados. Os Objetivos 1 e 8 têm apenas 1 variável com observação por UF cada: abaixo do mínimo de duas, ela não forma dimensão federativa e, portanto, não gera valor publicado no recorte estadual; aparece dentro da dimensão temática em que foi classificada, com a observação por UF explicitada na listagem do indicador. O Objetivo 10 não tem variável com observação por UF no catálogo ativo:

**IOSPD (ABEP-TIC).** 47 indicadores individuais (ver descrição na Seção 3.1.3); todos os ativos da visão Nacional têm observação por UF e integram o recorte. Fonte dominante (62,7% das variáveis).

**ESTADIC (IBGE).** Pesquisa censitária (N=27 UFs), suplemento TIC quinquenal. Fornece 27 variáveis ao recorte estadual, nos suplementos "Informática e Comunicação" (códigos Etic) e "Governança" (códigos Egov).

**Base de dados da CIN (SGD/MGI).** Registro administrativo das carteiras emitidas pelo órgão de identificação de cada UF. Fornece 1 variável ao recorte estadual, o atingimento da meta de emissão da Carteira de Identidade Nacional.

**Escolha de fontes diretas:** O recorte estadual utiliza apenas fontes que medem diretamente a atuação do governo estadual. Esta decisão elimina a distorção causada por indicadores indiretos, como dados de prefeituras municipais, escolas ou domicílios agregados por UF, que atribuiriam ao governo estadual o desempenho de atores que ele não controla diretamente. Por isso, o recorte exclui a desagregação por UF do questionário de prefeituras da TIC Governo Eletrônico, o Censo Escolar e a PNAD Contínua TIC.

**Justificativa da inclusão da ESTADIC:** A ESTADIC participa tanto do recorte nacional agregado (com valores agregados pela média das 27 UFs) quanto do recorte estadual (com dados individualizados por UF). No recorte estadual, sua inclusão é indispensável: (1) é a única pesquisa censitária (N=27) que interroga diretamente o governo estadual sobre TIC, governança digital, transparência e LGPD; (2) complementa o IOSPD com variáveis de infraestrutura, inclusão digital e transparência.

**Fontes excluídas do recorte estadual:**

- TIC Governo Eletrônico (CETIC.br): a pesquisa também entrevista órgãos federais e estaduais, mas somente o questionário de prefeituras publica resultados por UF; "SP" nessa tabela significa a estimativa das prefeituras paulistas, não o Governo do Estado de São Paulo
- Censo Escolar (INEP): mede infraestrutura escolar, não ações do governo estadual
- PNAD Contínua TIC (IBGE): mede acesso domiciliar, indicador socioeconômico
- iGovSISP (SGD/MGI), Cobertura móvel (ANATEL): sem dados desagregados por UF

### 3.1.5 Fontes do recorte de capitais

O recorte de capitais utiliza 3 fontes com granularidade municipal, totalizando 62 indicadores para 27 capitais (os Objetivos 1, 3 e 5 têm apenas 1 variável com observação por capital cada, abaixo do mínimo de duas para compor recorte federativo):

| Fonte | Instituição | Cobertura | Edição | Indicadores |
|-------|-------------|-----------|:------:|:-----------:|
| MUNIC | IBGE | 5.570 prefeituras (censo), filtradas 27 capitais | 2024 | 56 |
| Cobertura móvel | ANATEL | 5.570 municípios, filtradas 27 capitais | 2025 | 1 |
| Censo Escolar | INEP | escolas públicas em atividade nas 27 capitais | 2024 | 5 |

**Fontes excluídas por não produzirem dados individualizados por município:** TIC Governo Eletrônico, cujas tabelas de prefeituras publicam estimativas agregadas por localização, região, porte e UF; iGovSISP e IOSPD, que medem órgãos federais ou governos estaduais; as demais pesquisas CETIC.br; e PNAD Contínua TIC.

---

## 3.2 Seleção de Variáveis

### 3.2.1 Critérios de exclusão

Com o auxílio do Claude Code, fizemos um filtro inicial para identificar, em cada base de dados, quais variáveis contêm alguma conexão com governo digital. Em seguida, foram excluídas as variáveis que se enquadram em pelo menos um dos seguintes critérios:

- **(i)** Detalhe técnico irrelevante, que mede características de implementação sem impacto na avaliação de qualidade do serviço;
- **(ii)** Percepção não-atribuível, que mede opinião da população influenciável por fatores externos às ações do governo, critério que alcança variáveis do índice e não a coleta de feedback junto a usuários e servidores sobre a usabilidade dos produtos do Observatório, que é insumo qualitativo de aprimoramento;
- **(iii)** Fora do escopo ENGD, que mede comportamento individual de cidadãos ou atividades não diretamente relacionadas aos objetivos da estratégia;
- **(iv)** Redundância com variável mais adequada já incluída;
- **(v)** Metadados de pesquisa, que servem para controle amostral e não constituem indicadores de governo digital;
- **(vi)** Tecnologia muito específica, sem correspondência com recomendações da ENGD;
- **(vii)** Política interna ou detalhe operacional, que trata de decisões administrativas internas dos órgãos; e
- **(viii)** Medida nacional não reproduzível com os totais oficiais publicados pela fonte. Tabelas condicionadas com filtro conhecido são recalculadas sobre a população inteira, conforme a Seção 3.2.4.

A aplicação do critério de escopo considera o objeto da pergunta, não apenas palavras em comum com a estratégia. As variáveis sobre organização e atuação genérica do controle interno não medem segurança da informação nem tramitação eletrônica: instaurar processo disciplinar, por exemplo, não informa se ele tramita digitalmente. Do mesmo modo, estrutura administrativa, carreira e vínculo de pessoal da comunicação institucional não medem a oferta ou integração dos canais digitais. As contratações de comunicação também ficam excluídas, pois o governo pode executar os serviços internamente; licitar a gestão de um site não equivale a observar sua oferta, qualidade ou integração. Na sustentabilidade ambiental, a gestão ambiental da organização não se confunde com a adoção de metodologia para calcular o impacto ambiental da transformação digital.

Essas exclusões não decorrem de a variável medir apenas parte de uma recomendação. A cobertura de conteúdo e o alcance federativo da Seção 3.5 são avaliados pelo conjunto de indicadores: não se exige que cada variável cubra todos os deveres ou níveis federativos. A lista completa de variáveis excluídas encontra-se no Anexo A.

As variáveis não excluídas foram inicialmente organizadas tanto a nível de objetivo da Estratégia Nacional de Governo Digital quanto a nível de recomendação formalizada via Portaria SGD/MGI nº 5.395/2026. Este maior detalhamento permitiu que a conexão entre as variáveis e os objetivos fosse mais precisa. Para fins de construção do índice, a classificação primária permanece no nível de objetivo; para fins de apresentação nos capítulos de resultados, cada objetivo é subdividido em dimensões temáticas e, quando aplicável, em recortes federativos. Na definição de cada dimensão temática, a frase "Corresponde à Recomendação N.M" registra o assunto da dimensão, a recomendação de que ela trata, e não afirma que as suas variáveis medem o que a recomendação exige; essa afirmação é do Anexo B, que diz, recomendação por recomendação, o que ela tem medido e por quais indicadores (Seção 3.5). Por isso uma dimensão pode corresponder a uma recomendação e reunir variáveis que não medem nenhum dever dela: das 349 variáveis ativas, 91 não medem dever de recomendação nenhuma e contam no índice pelo objetivo sem sustentar a cobertura do Anexo B.

O catálogo registra ainda as tags transversais, que reúnem temas atravessando os dez objetivos. A tag segue o conteúdo da variável, e não a sua fonte nem o objetivo em que ela foi classificada. Daí decorrem duas propriedades que o objetivo e a dimensão temática não têm: uma variável pode receber mais de uma tag, quando o seu conteúdo pertence a mais de um tema, e pode ficar sem tag nenhuma, quando não pertence a nenhum dos temas do vocabulário. Este relatório não publica métrica de cobertura, tabela, gráfico nem rótulo por tag.

### 3.2.2 Resumo por recorte

| Recorte | Fontes | Variáveis | Objetivos cobertos |
|--------|:------:|:---------:|:------------------:|
| Nacional agregado | 13 | 349 | 10/10 |
| Estadual | 3 | 75 | 7/10 (Obj. 1 e 8 com uma única variável por UF; Obj. 10 sem variável por UF) |
| Capitais | 3 | 62 | 4/10 (Obj. 1, 3 e 5 com uma única variável por capital; Obj. 7, 8 e 10 sem variável por capital) |

Os totais acima se referem ao catálogo ativo utilizado para a construção dos recortes. Nos capítulos de resultados, variáveis em revisão de classificação podem ficar temporariamente fora do dimensionamento textual do objetivo; nesses casos, o próprio capítulo registra a diferença entre o catálogo ativo e o conjunto efetivamente dimensionado.

### 3.2.3 Tratamento de variáveis com múltiplos sub-itens

Algumas variáveis das pesquisas CETIC.br possuem múltiplos sub-itens (por exemplo, "quais sistemas de informação o órgão utiliza?", com 12 opções). Uma abordagem simples seria agregar esses sub-itens por média aritmética, produzindo um único valor por variável. Essa abordagem apresenta dois problemas: (1) diluía a informação quando os sub-itens mediam conceitos fundamentalmente diferentes, e (2) penalizava entes que não adotavam todos os sub-itens, mesmo quando a adoção de apenas um já indicava capacidade relevante.

As 22 variáveis multi-item foram reclassificadas em três grupos:

**Grupo A: desmembramento em variáveis individuais (9 variáveis → 57 novas entradas).** Aplicado quando os sub-itens medem conceitos substantivamente distintos. Cada sub-item passa a ser uma variável independente no catálogo, com peso próprio na média da dimensão. Exemplos: B4 (sistemas de informação: recursos humanos, finanças, geoprocessamento, apoio à decisão, protocolos, ERP), G3 (ações relacionadas à LGPD) e A12 (medidas adotadas em relação à LGPD nos estabelecimentos de saúde). As famílias B8 (processos de gestão de TI), F2C (áreas monitoradas por centro de operações) e H7 (temas de formação continuada) integram o índice com os itens recalculados sobre a população inteira (Seção 3.2.4).

**Grupo B: agregação por máximo (8 variáveis).** Aplicado quando o relevante é a existência de pelo menos um sub-item, não a quantidade. O valor da variável passa a ser o máximo das proporções dos sub-itens. Essa abordagem produz um **limite inferior** da proporção real de "pelo menos um": como os dados são proporções agregadas, uma por sub-item, não é possível calcular a união exata P(A∪B∪C∪D) sem acesso aos microdados individuais. O máximo garante que o valor reportado é conservador. Exemplos: C3 (serviços disponibilizados no website), C5B (meios de contato com a central de atendimento) e E4A (mecanismos de participação social). Revisões posteriores do catálogo ajustaram a composição desse grupo (itens excluídos por redundância ou por universo restrito e variáveis de outras pesquisas CETIC incorporadas à mesma regra), de modo que o catálogo ativo conta 7 variáveis agregadas por máximo (ver Seção 3.3.4).

**Grupo C: exclusão (5 variáveis).** Aplicado quando os sub-itens representam detalhes técnicos já capturados por uma variável parent, ou quando a variável mede comportamento do cidadão (demanda) e não capacidade do governo (oferta). Exemplos: H3A (aplicações de IA; H3 já captura "usou IA?"), G2 (tipos de serviço público acessado; variável de demanda, oferta já coberta por C1).

A lista de variáveis excluídas e desmembradas consta no Anexo A.

O desmembramento do Grupo A resolve o problema da diluição conceitual, mas cria outro: uma pergunta com muitos sub-itens passa a pesar muitas vezes na média da dimensão. A revisão de redundância tratou esse desequilíbrio com o mecanismo de **baterias como subscore**, descrito na Seção 3.3.4: os itens desmembrados de uma mesma pergunta-mãe que permanecem ativos são identificados como uma bateria e voltam a contar, juntos, como um único componente na média da dimensão, preservando a leitura individual de cada item nos capítulos de resultados.

### 3.2.4 Percentuais condicionados a pergunta-filtro

Uma tabela condicionada publica respostas apenas de quem passou por uma pergunta-filtro. Por exemplo, a tabela sobre plano estratégico de TI pergunta pela existência do plano somente aos órgãos ou prefeituras que declararam possuir área de TI. O índice recalcula esses percentuais sobre a população inteira: multiplica o percentual condicionado pela proporção de respostas "Sim" ao filtro no mesmo estrato. Em unidades percentuais, valor = percentual condicionado × percentual de "Sim" do filtro ÷ 100. Quem ficou fora do filtro conta como resposta negativa. A regra é a mesma para todas as tabelas condicionadas, sem exceção por item, inclusive nas que dependem da existência de área de TI, em que o filtro deixa de fora mais da metade das prefeituras. O piso de 90% de cobertura do filtro adotado em julho de 2026 deixa, portanto, de excluir variável.

A conta segue a cadeia de filtros quando o próprio filtro é condicionado. Na TIC Governo, área de TI depende de B1; acesso à Internet depende de A4; website depende de C1, cuja proporção também é multiplicada por A4; e áreas monitoradas por centro de operações dependem de F2A. A existência do centro, F2A, permanece fora do índice por redundância com a MUNIC, mas define a base física dos itens sobre monitoramento. Assim, um item condicionado ao website usa o produto do percentual do item por C1 e por A4, sempre no mesmo estrato e com cada percentual convertido em proporção. Na TIC Saúde, o filtro é uso de Internet nos últimos 12 meses (A2A); na TIC Educação, participação em formação continuada (H3). Na TIC Domicílios, o filtro é o agregado de usuários de Internet de 16 anos ou mais derivado de C2, e a população inteira é a de indivíduos de 16 anos ou mais.

O resultado é um piso: "pelo menos X% dos órgãos", por exemplo. A fonte não perguntou a quem ficou fora do filtro, e essas unidades podem ter o atributo. Atribuir resposta negativa a elas garante uma leitura conservadora, sem afirmar que o atributo inexiste. Nos conceitos medidos em órgãos e prefeituras, cada percentual é recalculado em seu universo antes da média entre universos; essa média continua sendo um escore, não uma proporção conjunta de entes (Seção 3.3.4).

Antes do recálculo, a base de cada tabela é conferida contra o total de respostas "Sim" do filtro, usando as tabelas de totais da mesma edição. Essa conferência identifica o denominador efetivo e impede multiplicar por um filtro que não define a base da tabela. No total da edição utilizada, B1 cobre 90,83% dos órgãos e 44,95% das prefeituras; A4, 100% e 99,92%; C1, 93,08% e 92,18% entre os que têm Internet; F2A, 32,57% das prefeituras; A2A, 99,52% dos estabelecimentos públicos; H3, 52,16% dos professores de escolas públicas; e usuários de Internet de 16 anos ou mais, 83,78% da população dessa faixa etária. Saúde e Educação usam somente a categoria pública das tabelas de proporções. No Censo Escolar, a seleção inclui escolas federais, estaduais e municipais em atividade. A TIC Domicílios tem o total e cinco faixas etárias de 16 anos ou mais com denominador verificável. Os percentuais do total descrevem a escala do filtro, mas a conta usa o percentual de cada estrato, sem transportar o total para uma desagregação.

### 3.2.5 Código e enunciado de cada indicador

Cada indicador dos Capítulos 4 a 13 é apresentado pelo código que a própria fonte publica, seguido do enunciado da fonte, para que o leitor possa conferi-lo no documento de origem. O código não é o nome interno do catálogo do índice, e sim o da fonte:

- **Pesquisas TIC do CETIC.br** (TIC Governo Eletrônico, TIC Saúde, TIC Educação, TIC Cultura e TIC Domicílios): o código da tabela de indicadores publicada, como `B4` ou `D5A`. Ele pode diferir do número da pergunta no questionário. Os itens de uma mesma pergunta compartilham o código da tabela, e o que os distingue é o item, que o enunciado traz.
- **MUNIC e ESTADIC (IBGE):** o nome da coluna na base de dados, como `Mtic06`. Quando a variável reúne várias colunas, o código é a faixa delas, como `Etic231-Etic235`, com as lacunas da faixa explicitadas.
- **IOSPD (ABEP-TIC):** o número do indicador no relatório da fonte, como `I.10`.
- **iESGo (TCU):** o número da questão do questionário, como `iESGo 2133`, ou o nome do subíndice que o TCU publica.
- **iGovSISP (SGD/MGI):** o código da questão, como `G101GP`.
- **Censo Escolar (INEP) e PNAD Contínua TIC (IBGE):** o nome da variável no microdado, como `IN_INTERNET`, ou no dicionário da pesquisa, como `S01029`.
- **Indicadores calculados pelo Observatório** a partir de dados da fonte, sem código próprio nela (densidade de banda larga e cobertura móvel da ANATEL, atingimento da meta da Carteira de Identidade Nacional e pontuações dimensionais do IOSPD): o rótulo do catálogo, com o enunciado iniciado por "Indicador calculado pelo Observatório".

O enunciado é a transcrição literal do questionário, com a pontuação e a grafia da fonte, inclusive onde a fonte erra. Quando a pesquisa aplica a pergunta a duas populações com redação que difere só no sujeito, o texto as une ("este órgão público/esta prefeitura"); quando as redações diferem em mais do que isso, as duas aparecem, cada uma identificada. A lacuna que o questionário deixa para o item ("___") recebe o item, quando o indicador mede um item só, ou a marca "[...]", quando reúne vários. Notas ao entrevistador e marcas de leitura saem do texto. Quando o indicador reúne vários itens, a linha *Contagem* diz quais entram, como cada resposta conta e como os itens se combinam (média ou maior proporção, ver Seção 3.2.3).

Cada enunciado foi transcrito do questionário e conferido depois em leitura independente do mesmo documento. O texto impresso nos capítulos e nos anexos é o do catálogo, e um teste automático reprova a edição que o altere só no capítulo ou no Anexo A.

---

## 3.3 Normalização e Agregação

### 3.3.1 Escalas de normalização

A normalização converte todos os indicadores para uma escala comum de 0 a 100. A tabela consolida as transformações aplicadas nas três visões apresentadas no relatório:

| Escala Original | Transformação | Exemplo | Fontes | Recortes |
| :--- | :--- | :--- | :--- | :--- |
| Proporção 0-100% | Usado diretamente | 55% → 55,0 | CETIC (todas), PNAD Contínua TIC | Nacional |
| Índice 0-10 | Multiplicado por 10 | 5,87 → 58,7 | IOSPD (ABEP-TIC) | Nacional, Estadual |
| Binarização Likert 1-5 | % concordantes (níveis 4-5) | 75,3% → 75,3 | iGovSISP (SGD/MGI) | Nacional |
| Conhecimento/utilização | % respondentes nos níveis 4 e 5, utilização na maior parte ou na totalidade | G637IPD: 20/234 × 100 = 8,55 | iGovSISP (SGD/MGI) | Nacional |
| Ordinal de maturidade ou adoção | % respondentes a partir do terceiro estágio, sem desconhecimento positivo | O identificador da alternativa define o estágio, não sua posição impressa | iGovSISP (SGD/MGI) | Nacional |
| Faixas percentuais | Média dos tetos reais ponderada pelas contagens, com peso igual entre órgãos | G630IPD: 14.090/234 = 60,21, usando tetos 30, 50, 70, 90 e 100 | iGovSISP (SGD/MGI) | Nacional |
| % de escolas | Proporção já calculada | 45% → 45,0 | Censo Escolar (pré-agregado) | Nacional, Capitais |
| Sim/Não | Sim=100, Não=0 | Sim → 100 | ESTADIC (binárias), MUNIC | Nacional, Estadual, Capitais |
| Alguma alternativa | 100 se o ente marcou alguma alternativa pontuável e não marcou a negativa; 0 caso contrário | Consulta pública marcada, "Não disponibilizou" não marcada → 100 | ESTADIC (participação pela internet), MUNIC (perguntas compostas) | Nacional, Estadual, Capitais |
| Nota por questão (iESGo) | % de organizações com nota do TCU a partir de 0,4, o limite inferior do estágio intermediário; no sub-item de sim ou não, % das que o marcaram | iESGo 4212: 310/369 × 100 = 84,01 | iESGo (TCU) | Nacional |
| Proporção multi-item | (alternativas marcadas / alternativas pontuáveis) × 100 | 5/7 → 71,4 | ESTADIC (multi-item) | Nacional, Estadual |
| Ordinal (ESTADIC) | Conforme escala definida | Diariamente → 100 | ESTADIC (frequência em redes) | Nacional, Estadual |
| Adoção de modelo de acessibilidade | 100 para qualquer modelo adotado | e-MAG → 100 | ESTADIC | Nacional, Estadual |
| Abrangência do acesso com a conta GOV.BR | Todos os serviços = 100, alguns = 50, sem integração declarada = 0. Ausência de autenticação zera a nota | Alguns serviços → 50 pontos | MUNIC | Nacional, Capitais |
| Proporção 0-1 | Multiplicado por 100 | 0,924 → 92,4 | Cobertura móvel (ANATEL) | Nacional, Capitais |
| Binário escolas | (soma_positivos / total) × 100 | 1200/1500 → 80,0 | Censo Escolar (microdados por capital) | Capitais |
| Categórica (internet MUNIC) | Valor válido=100, "-"/"Não possui"=0 | "Via rádio" → 100 | MUNIC (1 indicador: acesso à internet) | Nacional, Capitais |
| Categórica (LAI MUNIC) | "Perguntas e respostas"=100, "Somente as respostas"=50, "Não publica"=0 | "Somente as respostas" → 50 | MUNIC (1 indicador: publicação das perguntas e respostas feitas pela LAI) | Nacional, Capitais |

Todos os valores normalizados são limitados ao intervalo [0, 100].

O Censo Escolar registra, para cada escola, se ela possui determinado recurso (por exemplo, acesso à Internet: sim ou não). Para o recorte nacional agregado, calcula-se a porcentagem de escolas que possuem cada recurso em nível nacional, produzindo um valor entre 0% e 100% que é usado diretamente. Para o recorte de capitais, o cálculo é feito por capital (porcentagem de escolas daquela capital).

Nas variáveis ESTADIC de múltiplas alternativas, cada bateria é calculada só sobre as alternativas que representam capacidade ou serviço presente. O numerador conta as alternativas marcadas e o denominador conta essas mesmas alternativas pontuáveis, produzindo um valor entre 0% e 100%. As alternativas que registram ausência ou desconhecimento, como "Não disponibiliza", "Nenhum dos relacionados" e "Não sabe informar", continuam identificáveis na fonte e ficam fora do numerador e do denominador. Fica fora também, na bateria de acessibilidade, a alternativa "Usam CAPTCHA para solicitações", porque registra só o uso do desafio, sem dizer se há alternativa acessível, e por isso não tem direção de qualidade; o mesmo item da MUNIC fica fora da bateria de acessibilidade das prefeituras. São 19 alternativas fora da conta, distribuídas por 8 baterias. Na Etic12a, por exemplo, as oito colunas da pergunta rendem sete alternativas pontuáveis, porque a oitava registra que o estado não disponibiliza nenhum dos serviços informativos relacionados.

Três perguntas da ESTADIC que a MUNIC também faz às prefeituras seguem a regra que a MUNIC aplica a elas, para que o estado e a prefeitura sejam medidos do mesmo modo: a UF vale 100 quando marca alguma alternativa pontuável e não marca a negativa, e 0 caso contrário, sem que o número de alternativas marcadas mude a nota. São as perguntas sobre as formas de atendimento à distância (Etic01), o perfil em redes sociais (Etic13) e a participação pela internet (Etic23). Nas duas primeiras, as 27 UFs ficam com 100 e a variável sai do índice, porque não separa nenhuma delas (Anexo A); a terceira permanece. Pela mesma razão, a pergunta sobre os portais do estado (Etic25) é lida item a item, como na MUNIC: o portal da transparência, que as 27 UFs declaram ter, sai do índice, e o portal de dados abertos é variável do Objetivo 5.

A pergunta sobre o formato em que o estado publica os dados gerais da administração (Egov07) é contada por conjunto de dados, e não por alternativa. A grade tem sete linhas, uma por conjunto (orçamentos, receitas, despesas, balanços, prestação de contas da Lei de Responsabilidade Fiscal, compras e licitações e remunerações dos servidores), e em cada linha o estado marca "Em CVS, ODS, XLS, DOC", "Em PDF ou imagem", "Em outro tipo de arquivo" ou "Não publica". Cada conjunto vale 100 quando o estado marca ao menos um formato e 0 quando marca "Não publica" ou deixa a linha sem resposta, e o escore da UF é a média dos sete conjuntos, entre 0 e 100. Contada por alternativa, como as demais baterias, a pergunta daria ao estado que publica tudo só em planilha um terço da nota de quem marca os três formatos em todos os conjuntos, ou seja, premiaria a publicação repetida do mesmo conjunto. A limitação dessa contagem está na Seção 3.4.1.

### 3.3.2 Tratamento de não-resposta

O índice não tem um tratamento único de não-resposta: são três regimes, e cada um vale para um conjunto declarado de fontes.

**Imputação de zero, nas fontes de resposta declarada.** Na ESTADIC e na MUNIC, em que cada ente responde individualmente, a não resposta é convertida em score 0, presumindo que a ausência de resposta indica ausência da capacidade avaliada. Na ESTADIC, contam como não resposta "Não informou", "Não sabe" e "Não sabe informar". Na MUNIC, contam "Não informou", "Não sabe informar" e "Recusa" e, também, o traço que o IBGE registra nos itens de uma pergunta quando o município marca a alternativa "Não sabe informar" dela. A premissa é que um governo que possui a capacidade teria condições de responder afirmativamente; a não-resposta é, portanto, evidência da ausência. Ela é conservadora e pode subestimar entes que possuem a capacidade mas não responderam por razões administrativas.

Na ESTADIC, quatro estados de resposta se distinguem, e a distinção importa porque três deles poderiam ser lidos como o mesmo zero. A alternativa marcada pontua. A resposta textual "Não informou", "Não sabe" ou "Não sabe informar" vale zero nos itens pontuáveis, pelo regime descrito acima. O traço representa salto condicional e vira dado ausente, não zero, porque a pergunta não chegou a ser feita àquele estado. E a bateria em que nenhuma alternativa pontuável traz resposta, só traço, não entra com zero nem sai do indicador em silêncio: a extração da ESTADIC para com erro, e nenhum par de indicador e UF desta edição chega a esse caso. A bateria inteira em "Não informou" é outro caso e vale zero, como a de Rondônia no suplemento de Governança (Seção 3.4.1). Na MUNIC, o traço de salto condicional não vira dado ausente: vale zero, como o "Não" (Seção 3.3.5).

Nas 30 colunas de score do iESGo consumidas pela edição ativa, as 387 linhas do arquivo, entre elas as 369 que o índice usa, estão completas: não há célula ausente. Portanto, nenhum valor publicado desta edição resulta de imputação por ausência física no arquivo de origem. Esse fato observado não define o tratamento de uma eventual ausência em edição futura.

**Ausência de imputação, nas fontes já agregadas.** As pesquisas do CETIC.br chegam ao índice como percentuais publicados, que o pipeline preserva sem recalcular o denominador. Nas três tabelas de proporções da TIC Governo Eletrônico 2023 consumidas nesta edição, "Sim", "Não", "Não sabe" e "Não respondeu" são categorias da mesma distribuição. Os percentuais numéricos de cada grupo somam 100% dentro da precisão da fonte, com desvio máximo observado de 0,001 ponto percentual; o índice importa somente a parcela "Sim", de modo que as respostas "Não sabe" e "Não respondeu" ficam fora do numerador e dentro do denominador publicado. Aqui nada é imputado. O hífen representa ausência de resposta ao item e vira dado faltante, enquanto uma célula exibida como zero pode conservar no arquivo o valor positivo inferior a 1% que o pipeline lê.

**Exclusão do denominador, na ausência estrutural.** Variável não disponível na edição utilizada, ou que não observa aquele ente, não vira zero: sai da média. Um ente sem nenhum componente observado numa dimensão fica sem escore naquela dimensão, nunca com escore zero, o que distingue "medimos e não há" de "não medimos".

A diferença entre os regimes é de tratamento, e este capítulo não afirma que ela desloque a ordenação publicada: essa é uma pergunta empírica, e não uma consequência da regra.

### 3.3.3 Abordagem snapshot

O índice utiliza a edição mais recente de cada fonte, construindo a melhor fotografia possível do governo digital brasileiro com os dados disponíveis. Cada fonte contribui com exatamente uma observação. Essa escolha maximiza a cobertura temática, porque inclui variáveis recentes (como indicadores de IA e LGPD) que seriam excluídas em uma abordagem de série temporal, e evita os riscos de comparar edições com questionários reestruturados ou módulos renomeados.

### 3.3.4 Cálculo dos escores por objetivo e das médias dimensionais

O cálculo técnico é análogo nas três visões apresentadas no relatório, respeitando a unidade de análise de cada uma: agregado nacional, UF ou capital. Tanto o escore por objetivo quanto a média dimensional resultam de dois passos: primeiro, o colapso das baterias; depois, a média simples dos componentes disponíveis. O conjunto de indicadores sobre o qual se aplicam esses passos é o do objetivo ou o da dimensão, conforme o resultado calculado.

**Passo 1. Baterias como subscore.** Indicadores do catálogo podem ser itens de uma mesma pergunta-mãe, como os 9 itens sobre o conteúdo do PDTIC no iGovSISP ou os 5 itens de acessibilidade do website na MUNIC. Se cada item entrasse na média com peso próprio, a pergunta-mãe pesaria tantas vezes quantos itens tivesse, favorecendo as perguntas mais longas. Para evitar isso, esses grupos são identificados no catálogo como **baterias**: calcula-se a média simples dos seus itens com dado presentes no objetivo ou na dimensão em análise, e essa média entra como um único componente, com peso 1. Bateria sem item observado não entra no denominador.

Quando os itens de uma mesma bateria pertencem a dimensões diferentes de um objetivo, o cálculo por objetivo reúne esses itens em um único subscore, independentemente da distribuição dimensional. No cálculo de cada média dimensional, entram apenas os itens presentes naquela dimensão; a mesma bateria pode, portanto, contribuir para mais de uma média dimensional, sem ganhar peso adicional no objetivo. Se houver itens da bateria em objetivos diferentes, cada objetivo utiliza somente os seus próprios itens.

Nas vistas dimensionais, cada bateria é agregada sobre os itens que pertencem à dimensão. A mesma bateria pode, portanto, contribuir para mais de uma média dimensional, sem ganhar peso adicional no objetivo. Sete baterias do catálogo ativo atravessam dimensões: sistemas administrativos da TIC Governo Eletrônico; conteúdo do PDTIC; processos de dados; artefatos de dados; governança e qualidade de dados; integração de serviços digitais; e a normatização da Lei 13.460/2017 no IOSPD. As 24 baterias reúnem 134 variáveis e rendem 35 subscores nas dimensões temáticas; com os 215 indicadores avulsos, a soma dos componentes dessas dimensões é **250**. Os recortes estadual e de capitais recalculam as baterias sobre sua própria composição.

O cálculo por objetivo aplica o colapso uma vez dentro de cada objetivo, reunindo os itens da bateria mesmo quando aparecem em dimensões diferentes. Depois calcula a média simples dos componentes disponíveis, sem média intermediária das dimensões. Os dez objetivos reúnem 241 componentes, enquanto as vistas dimensionais reúnem 250; as contagens diferem porque respondem a agrupamentos distintos. Nenhuma delas constitui uma nota geral entre os objetivos.

> Subscore da bateria = soma dos valores dos seus itens com dados no objetivo ou na dimensão em análise ÷ número desses itens

**Passo 2. Média dos componentes.** Para cada unidade de análise e para cada objetivo, calcula-se a média simples dos componentes disponíveis, isto é, indicadores avulsos e subscores de bateria, já normalizados para 0-100. Cada componente tem peso igual. A média de uma dimensão aplica a mesma operação aos componentes presentes naquela dimensão.

> Escore do objetivo = soma dos valores dos componentes com dados no objetivo ÷ número desses componentes

> Média da dimensão = soma dos valores dos componentes com dados na dimensão ÷ número desses componentes

O escore por objetivo não é a média das médias dimensionais: essa operação atribuiria peso igual a dimensões com quantidades diferentes de componentes e repetiria a contribuição de uma bateria repartida entre elas. Indicadores avulsos sem dado e baterias sem item observado não entram na média; quando nenhum componente está disponível, o escore fica ausente, em vez de receber zero.

**Não há agregado entre objetivos.** As médias dimensionais são o que os Capítulos 4 a 13 reportam; o cálculo por objetivo existe, mas o índice não produz nota geral por recorte nem escore único do conjunto dos dez objetivos. A razão é que os objetivos reúnem coberturas e universos de respondentes muito desiguais (o Objetivo 2 tem 106 variáveis ativas, organizadas em 78 componentes, enquanto o Objetivo 3 tem seis), de modo que uma média entre eles produziria um número sem referente interpretável, cuja variação refletiria a composição do catálogo tanto quanto o fenômeno medido. Pela mesma razão, não há ranking geral de unidades da federação nem de capitais: toda ordenação de entes é específica do recorte em que aparece, e o recorte é nomeado junto do resultado.

Nos Capítulos 4 a 13, cada dimensão temática reporta sua `Média Nacional` e cada dimensão federativa reporta a média do recorte correspondente (`Média Estadual` ou `Média Capitais`). A listagem de indicadores de cada dimensão exibe cada item individualmente, com os grupos de bateria sinalizados: a listagem é a leitura detalhada da dimensão, enquanto o subscore da bateria é o que entra na média. As médias impressas seguem a regra do Passo 1: o colapso de baterias está aplicado, e cada média traz os dois números que a descrevem, no formato `(n=N; M itens)`, em que `n` é o número de componentes que entraram na média e a contagem de itens é a de indicadores com dado antes do colapso. Os dois coincidem nas dimensões sem bateria e diferem naquelas em que há.

**Leitura das médias dimensionais em universos heterogêneos:** Os indicadores reunidos numa mesma dimensão temática provêm, em regra, de fontes com universos de respondentes distintos: órgãos públicos, prefeituras, estabelecimentos de saúde, professores, escolas, unidades da federação. A média dimensional é, portanto, um escore de conceito, na mesma natureza descrita adiante para as variáveis medidas em dois universos: **não corresponde a uma proporção de entes** e não deve ser lida como "X% de alguma população". Pela mesma razão, a amplitude entre os indicadores de uma dimensão reflete, em parte, a mudança de pergunta e de denominador entre as fontes, e não apenas diferenças reais de adoção ou maturidade. O caso mais visível é a dimensão de inteligência artificial e tecnologias emergentes do Objetivo 7, cujos componentes variam de 3,7 (a maior entre as proporções de estabelecimentos de saúde com uso de Internet que utilizam cada uma de quatro tecnologias emergentes) a 66,7 (escore médio das unidades da federação no uso de ciência de dados, inteligência artificial ou algoritmo em serviços ao cidadão).

**Exceção para variáveis com agregação por máximo:** 7 variáveis multi-item utilizam o máximo dos sub-itens em vez da média (ver Seção 3.2.3). Nesse caso, o valor que entra como componente é `max(sub-itens)`, representando o limite inferior da proporção de entes com pelo menos um sub-item adotado.

**Exceção, variáveis medidas em dois universos na TIC Governo Eletrônico.** A pesquisa investiga duas unidades de análise por questionários distintos e publica um resultado para cada uma. Foram entrevistados 677 órgãos públicos federais e estaduais dos poderes Executivo, Legislativo e Judiciário e do Ministério Público, com taxa de resposta de 88%, e 4.265 prefeituras, com taxa de resposta de 77%. O plano amostral combina abordagem censitária para as prefeituras e para parte dos órgãos públicos com seleção amostral para os demais órgãos do Poder Executivo estadual. Parte das perguntas é comum aos dois instrumentos, como a questão sobre a existência de área de TI. Para essas variáveis, o componente que entra na média da dimensão é a **média das proporções observadas em cada universo, com peso igual**; assim, o conceito conta uma vez, sem favorecer um dos universos. Como os órgãos públicos apresentam valores maiores que as prefeituras em parte dessas perguntas, usar somente o primeiro universo elevaria o resultado. O valor obtido é um escore de conceito e, por combinar denominadores distintos, **não corresponde a uma proporção de entes** nem deve ser lido como "X% dos órgãos e prefeituras". As variáveis exclusivas de um dos questionários entram diretamente, com o universo declarado no indicador.

### 3.3.5 Tratamento de saltos condicionais (ESTADIC e MUNIC)

Algumas perguntas da ESTADIC e da MUNIC dependem de uma resposta anterior: se o ente respondeu "Não" a uma pergunta-mãe, as perguntas de detalhamento recebem "-" (salto condicional). Há duas formas de lidar com isso, e a escolha depende de o filho funcionar como indicador composto agregado ao pai ou como indicador independente.

**ESTADIC, bloco de governança digital:** Manter "-" como dado ausente infla o indicador (só quem tem a capacidade entra no cálculo); tratá-los como 0 penalizaria o estado duplamente (0 no indicador-pai e 0 no indicador-filho), sobretudo quando o pai e os filhos compõem um único conceito.

Três indicadores foram ajustados:

- **Etic221-Etic222** (cobertura do Wi-Fi público): 10 das 27 UFs com "-" na cobertura Wi-Fi por salto condicional. **Solução:** excluir a cobertura, manter apenas a existência de Wi-Fi público, `Etic20` (Obj 6).

- **Etic191-Etic197** (ações de inclusão digital): 1 UF com "-" nas ações de inclusão digital. **Solução:** excluído, mantendo apenas a existência de programa de inclusão digital, `Etic17` (Obj 6).

- **Etic231-Etic235** (participação pela Internet): o indicador composto continha 5 perguntas-pai e 16 perguntas-filhas sobre canais, amplificando o peso do "Não" de 1x para 5x. **Solução:** restringir às 5 perguntas-pai, excluindo as 16 perguntas de canal (Obj 9). Dessas cinco, quatro pontuam: a quinta (Etic235) é a alternativa negativa, que registra não disponibilizar nenhuma das formas de participação, e fica fora do numerador e do denominador pela composição descrita na Seção 3.3.1.

**MUNIC, bloco LAI municipal:** A pergunta-mãe `Mgov01` (existência de legislação municipal específica) tem 4 perguntas-filhas sobre o conteúdo dessa legislação (prazo de resposta, autoridade de monitoramento, órgão central, relatório anual) que só são feitas quando o município responde "Sim" à pergunta-mãe. Na revisão de redundância, as 4 filhas foram excluídas do índice: o degrau lógico entre existência da lei e detalhes do seu conteúdo fica representado pela variável mais geral, `Mgov01`, que permanece ativa (ver Anexo A). Com isso, o bloco deixa de exigir tratamento especial de salto condicional.

**MUNIC, os demais saltos:** Fora desse bloco, o traço de salto condicional da MUNIC vale zero, ao contrário do que ocorre na ESTADIC: o município que respondeu à pergunta-mãe com "Não", "Não possui página", "Em elaboração" ou outra alternativa que dispensa os itens de detalhamento recebe zero nesses itens, como se não tivesse a capacidade. Quando a pergunta-mãe e os itens são, os dois, indicadores ativos, o zero conta mais de uma vez, a dupla penalização que a ESTADIC evita. O caso declarado é o da página na internet: o município que respondeu "Não possui página" leva zero na existência de página e em cada serviço da página. O zero fica, porque cada serviço é uma capacidade própria e o município sem página de fato não o oferece pela internet; tratar o item pulado como dado ausente calcularia a proporção só entre quem tem página e inflaria o indicador. Nas redes sociais, a repetição é menor: as quatro atividades da prefeitura nas redes sociais online (postar notícias, responder a comentários e dúvidas, realizar consulta pública ou enquete e divulgar serviços ou campanhas) formam uma bateria do Objetivo 2, que entra no escore como um componente só, com a média dos quatro itens, como a mesma pergunta da ESTADIC (Seção 3.3.4). O município sem perfil em rede social continua com zero nas atividades, e o mesmo "Não" conta duas vezes no Objetivo 2, na existência de perfil e na bateria, e não cinco, como contaria com cada atividade em componente próprio. Nos 56 indicadores MUNIC ativos, esses traços são 8.331 das 440.030 células do recorte nacional agregado (1,89%). O traço que segue a alternativa "Não sabe informar" é outro caso, de não resposta, descrito na Seção 3.3.2.

### 3.3.6 Notas metodológicas específicas por recorte

**Recorte nacional agregado:**

1. **Microdados e tabelas agregadas:** O Censo Escolar (INEP) e a PNAD Contínua TIC (IBGE) são agregados a partir de microdados públicos. Nas pesquisas TIC do CETIC.br, o índice usa tabelas oficiais de proporções e de totais.
2. **Cobertura variável por objetivo:** Nem todos os objetivos possuem o mesmo número de indicadores. Objetivos com mais indicadores têm medições mais robustas.
3. **Desagregação de compostos:** Os 5 scores dimensionais do IOSPD (DIM1-5) e o IOSPD Geral foram substituídos por indicadores individuais, permitindo mapeamento ENGD preciso por indicador. Após exclusões de compósitos, redundâncias e do critério II.7, que a fonte anulou, 47 indicadores IOSPD permanecem ativos.
4. **Exclusão dos sub-índices do iESGo:** As entradas originais do iESGo eram sub-índices compósitos calculados pelo TCU (GovernancaTI, PlanejamentoTI, RiscosTISegInfo, entre outros), e a decisão de compor o índice apenas com variáveis individuais as excluiu. A seleção de questões individuais descrita na Seção 3.1.2 substitui os subíndices selecionados de TI e segurança, sem incorporar os compostos de sustentabilidade ambiental e social.
5. **ANATEL, densidade de banda larga:** O indicador de densidade de acessos de banda larga fixa por 100 domicílios está suspenso do índice até que numerador e denominador provenham de fontes oficiais versionadas (ANATEL e IBGE); a fonte permanece representada pela cobertura móvel.
6. **Nível de análise do recorte nacional agregado:** Este recorte opera no nível nacional agregado, combinando indicadores de diferentes esferas de governo. Fontes federais (iGovSISP) medem órgãos da União; fontes estaduais (ESTADIC, IOSPD) contribuem com proporções agregadas de governos estaduais; fontes municipais (MUNIC) contribuem com proporções de municípios com cada capacidade; e pesquisas setoriais (CETIC.br, Censo Escolar) medem equipamentos públicos de saúde, educação e cultura. Os recortes estadual e de capitais utilizam fontes e metodologias adaptadas aos seus níveis de análise (ver seções 3.1.4 e 3.1.5).
7. **Exclusão por escala incompatível:** Variáveis expressas em contagens absolutas ou valores monetários, como o número total de acessos de banda larga fixa (ANATEL), não se expressam naturalmente na escala 0-100 e não possuem meta de referência para normalização. Quando disponível, utilizou-se uma variável alternativa da mesma fonte já expressa em percentual.
8. **Inclusão do iGovSISP:** O recorte nacional incorpora 97 variáveis da edição de 2025, nos objetivos 1, 2, 3, 5, 6, 7, 8 e 10. Concordância genuína usa os níveis 4 e 5; Sim/Não usa a proporção de Sim; Sim/Não/Em parte atribui 1; 0 e 0,5, respectivamente. Nas escalas de conhecimento e utilização, entram os níveis 4 e 5, não o mero conhecimento da norma. Nas escalas de maturidade e adoção, conta o órgão a partir do terceiro estágio, o ponto de corte comum da escala; o estágio de ausência e o estágio de intenção ou iniciativa pontual não contam. A regra é a mesma para todas as escalas de estágios, sem exceção por item, de modo que em alguns itens um segundo estágio que já descreve prática parcial fica de fora. Chegar ao terceiro estágio não equivale a execução plena, integração completa ou uso institucionalizado. Os códigos das alternativas e seu conteúdo definem os estágios, não a ordem impressa: desconhecimento não recebe pontuação positiva. As perguntas sobre integração ao Login Único e ao módulo de avaliação (`G630IPD` e `G631IPD`) usam os tetos 30, 50, 70, 90 e 100; a pergunta sobre vínculo dos titulares de funções de TI (`G130GP`) usa 25, 50, 75, 100 e 100. A média é ponderada pelas contagens, com peso igual entre órgãos, e aproxima por cima a média dos percentuais declarados por faixa. Não mede a porcentagem exata de todos os serviços integrados. Nove perguntas ativas sobre o conteúdo do PDTIC foram mostradas apenas aos 202 órgãos que declararam ter o plano; os 32 restantes contam como resposta negativa, e o denominador são os 234 órgãos (190 dos 234 informaram que o PDTIC foi publicado, ou 81,20%). A pergunta sobre metas e acompanhamento da acessibilidade (`G106GPS`) admite PDTIC ou PTD equivalente. Os 32 órgãos que ficaram fora do bloco podem ter metas em PTD, por isso o item fica fora do índice. O CSV da fonte registra 77 de 202 respostas no terceiro estágio ou superior (38,12%). O filtro por PDTIC é sustentado pelo contexto e pelas contagens oficiais, mas a programação do salto não foi obtida. As 14 perguntas condicionais de infraestrutura da seleção anterior permanecem no CSV da origem, mas não entram no snapshot publicado. As duas perguntas sobre prioridade da TI ficam fora da extração; as exclusões editoriais e seus fundamentos estão no Anexo A. A fonte cobre o Executivo Federal e depende de autorrelato, sem verificação externa.

**Recorte estadual:**

1. Dominância do IOSPD: 47/75 variáveis (62,7%). A desagregação do IOSPD em indicadores individuais ampliou a cobertura temática, mas concentrou o recorte em uma única fonte. Complementarmente, a ESTADIC contribui com 27 variáveis (36,0%) e a base de dados da CIN, com 1 (1,3%).
2. Cobertura de 7 dos 10 objetivos: os Objetivos 1 e 8 têm apenas 1 indicador com observação por UF cada, abaixo do mínimo de duas variáveis para compor recorte federativo, e o Objetivo 10 não possui variável com observação por UF no catálogo ativo.
3. Cobertura variável por objetivo: Nem todos os objetivos possuem o mesmo número de indicadores. O Objetivo 2 (47 indicadores) tem medição muito mais robusta que os objetivos com 2 indicadores.
4. ESTADIC pesquisa censitária (N=27): valores são observações diretas, não estimativas.
5. Rondônia não respondeu ao suplemento de Governança (0 em 11 variáveis Egov); Bahia respondeu "Não sabe" em 2 das 4 variáveis de LGPD, e Acre e Pernambuco, em uma (Seção 3.4.1).

**Recorte de capitais:**

1. Indicadores MUNIC dominam (56/62 indicadores), 54 deles binários. Indicadores com 100% de prevalência não possuem poder discriminatório entre capitais.
2. Censo Escolar como proxy: mede infraestrutura escolar, não ações diretas da prefeitura. Indicadores binários (tem/não tem internet) não capturam velocidade ou qualidade.
3. Cobertura móvel (ANATEL) saturada: cobertura 4G/5G entre 92% e 100% nas capitais. Cobertura nominal ≠ qualidade/velocidade efetiva da conexão.
4. Objetivos 7 (Inovação e Tecnologias Emergentes), 8 (Eficiência e Processos) e 10 (Competências) sem indicadores mapeáveis no escopo municipal do catálogo ativo; os Objetivos 1, 3 e 5 possuem apenas 1 indicador com observação por capital cada, abaixo do mínimo para compor recorte federativo.
5. Comparabilidade com o recorte nacional agregado limitada: os dois recortes utilizam fontes e indicadores diferentes. Os scores não são diretamente comparáveis.
6. Completude total: todas as 27 capitais possuem dados para todas as 62 variáveis do recorte.

**Diferenças entre as visões apresentadas no relatório:**

| Aspecto | Nacional | Estadual | Capitais |
|---------|----------|----------|----------|
| Unidade de análise | Nacional agregado | UF (27 estados) | Capital (27 capitais) |
| N.º de variáveis | 349 | 75 | 62 |
| N.º de componentes | 250 | 66 | 51 |
| Fontes | 13 | 3 | 3 |
| Objetivos cobertos | 10 | 7 | 4 |
| ESTADIC | Incluída (média das 27 UFs) | Incluída (27 var.) | N/A |
| MUNIC | Incluída (média das notas de 5.570 municípios) | N/A | Incluída (fonte principal) |
| iGovSISP | Incluído | Excluído (sem dados UF) | Excluído (sem dados municipais) |
| TIC Governo Eletrônico, Censo Escolar, PNAD Contínua TIC | Incluídos | Excluídos (fontes indiretas) | Censo Escolar incluído; TIC Governo Eletrônico e PNAD excluídos |
| Fonte dominante | iGovSISP (97 var.) | IOSPD (47 var.) | MUNIC (56 var.) |

Os três totais de componentes são diferentes porque os três índices são construções distintas, e não porque um mesmo índice perca componentes ao descer de nível federativo. Os recortes estadual e de capitais filtram por fonte na origem: o estadual lê ESTADIC, IOSPD e a base de dados da CIN, o de capitais lê MUNIC, Cobertura móvel (ANATEL) e Censo Escolar, e nenhum dos dois lê iGovSISP ou iESGo, cujas observações existem apenas no agregado nacional. Cada visão agrega o que a sua própria composição permite observar, e é por isso que o capítulo declara o total de cada uma em vez de publicar um número só.

A composição do recorte nacional convive com uma assimetria que é anterior à entrada do iESGo e vale a pena explicitar: a maior população do catálogo é a dos órgãos federais do SISP, com 97 variáveis, cujos dados existem apenas na dimensão total, sem observação por UF ou por capital. Somadas às 21 entradas do iESGo, são 118 dos 349 indicadores ativos sem existência subnacional. Isso não torna o índice nacional menos federativo do que era: ele sempre publicou um número só convivendo com essas fontes.

---

## 3.4 Limitações

Para cada fonte de dados do Observatório, distinguimos dois tipos de limitação: **condições de acesso** (como obter os dados e em que formato estão disponíveis) e **continuidade** (se a fonte continuará disponível).

### 3.4.1 Limitações das bases de dados

#### Bases CETIC.br (recorte nacional agregado)

**Condições de acesso:** 4/5 pesquisas requerem Termo de Acesso e Uso com NIC.br. A TIC Domicílios tem download livre e fornece dois indicadores ao índice, recalculados sobre a população inteira de indivíduos de 16 anos ou mais. O índice atual baseia-se em tabelas de proporções publicadas pelo CETIC.br, com recortes predefinidos e sem cruzamento de variáveis. Os recortes variam por pesquisa; na TIC Governo Eletrônico, o produto de prefeituras inclui localização, região, porte e UF, mas não identifica municípios. O procedimento de acesso aos microdados está descrito na Seção 3.6.

**Dependência do CETIC.br:** Das 5 pesquisas CETIC catalogadas, 4 fornecem 93 dos 349 indicadores do recorte nacional agregado (26,6%); a outra permanece catalogada sem indicador ativo. A TIC Educação e a TIC Governo Eletrônico contribuem para o dimensionamento atual do Objetivo 10 (Competências em Governo Digital), com 11 das 31 variáveis consideradas no capítulo correspondente; essas 31 entram na agregação como 9 componentes, porque itens de uma mesma bateria contam juntos (ver Seção 3.3.4). Fatores de estabilidade: financiamento autossustentável (domínios .br), status UNESCO Cat. 2 desde 2012, longevidade (TIC Domicílios desde 2005). Fatores de cautela: 3 pesquisas CETIC foram descontinuadas recentemente (Centros Públicos de Acesso, OSC, Painel TIC).

Limitações específicas por pesquisa:
- **TIC Governo Eletrônico:** Bienal (anos ímpares), 59 variáveis ativas. Dois questionários observam órgãos públicos federais e estaduais e prefeituras; o desenho combina abordagem censitária e seleção amostral. O pipeline preserva as tabelas de proporções dos dois universos e a desagregação das prefeituras por UF, mas o índice usa somente os totais dos dois universos no recorte nacional agregado. As linhas por UF não entram nos recortes estadual ou de capitais. Divergência entre códigos do questionário e do portal exige mapeamento manual.
- **TIC Saúde:** Anual, 19 variáveis ativas. Estável.
- **TIC Educação:** Anual, 13 variáveis ativas. Alternância CAPI (anos pares, todos os respondentes) e CATI (anos ímpares, apenas gestores/escolas) afeta a cobertura de variáveis de professores.
- **TIC Cultura:** Bienal, nenhuma variável ativa. A planilha oficial de 2024 não publica totais nacionais; os indicadores da pesquisa estão suspensos do índice até a fonte divulgar total oficial, pesos amostrais ou microdados.
- **TIC Domicílios:** Anual, 2 variáveis ativas. Os indicadores tratam de uso de governo eletrônico e resolução sem deslocamento, com leitura de piso sobre a população inteira de indivíduos de 16 anos ou mais (Seção 3.2.4).

#### Demais bases (recorte nacional agregado)

- **Censo Escolar (INEP):** Microdados abertos, granulares e pesados. Filtragem e tratamento diretos. Reestruturado em 2019 com inclusão de variáveis TIC, estável desde então.
- **Cobertura móvel (ANATEL):** CSVs abertos, filtragem e tratamento simples. Dados regulatórios estáveis.
- **PNAD Contínua TIC (IBGE):** Microdados públicos detalhados. Módulo TIC é rotativo, podendo ser substituído pelo IBGE.
- **IOSPD (ABEP-TIC):** A edição utilizada (2025) disponibiliza dados desagregados por UF.
- **iGovSISP (SGD/MGI):** Autodiagnóstico anual de órgãos do Executivo Federal. O índice usa somente a edição de 2025 e sua seleção tem 97 variáveis ativas. As limitações de autorrelato e universo condicionado e as regras de tratamento estão na Seção 3.3.6. A dimensão 2 mede sistemas e serviços públicos digitais; a ausência da dimensão 4 no relatório não autoriza supor migração de seu conteúdo para outra dimensão.

#### ESTADIC (recortes nacional agregado e estadual)

**Acesso:** Dados em XLSX agregado, sem microdados estruturados e sem API. A extração requer processamento manual das planilhas publicadas pelo IBGE. Suplemento TIC quinquenal.

**Dependência:** As 27 variáveis da ESTADIC são indispensáveis para o recorte estadual. Se o IBGE descontinuar ou alterar significativamente o questionário, o recorte estadual ficaria restrito às 47 variáveis do IOSPD e à da base de dados da CIN, de 2 fontes.

**Não-resposta:** Rondônia não respondeu ao suplemento de Governança (11 variáveis Egov = 0) e deixou sem resposta uma variável da aba de Informática e comunicação, a do bilhete único. Fora de Rondônia, a não resposta da ESTADIC está em cinco células, todas com zero: a Bahia respondeu "Não sabe" em 2 das 4 variáveis de LGPD, a da área ou pessoa responsável pela implementação da LGPD e a dos cursos de segurança da informação e proteção de dados para servidores; Acre e Pernambuco responderam "Não sabe" nesta última; e Pernambuco respondeu "Não sabe informar" à frequência com que atualiza seus perfis nas redes sociais. Os casos são da ESTADIC, e portanto do regime de imputação de zero descrito na Seção 3.3.2, que não vale para as fontes já agregadas. A premissa é conservadora: pode subestimar estados que possuem a capacidade mas não responderam por razões administrativas. A alternativa (excluir UFs) premiaria a não-resposta ao calcular a média sobre menos componentes.

**Formato dos dados publicados:** a variável da pergunta sobre o formato de publicação dos dados gerais da administração (Seção 3.3.1) mede se cada conjunto de dados é publicado, e não a qualidade do formato: publicar em PDF ou imagem conta tanto quanto publicar em planilha aberta. Nesta edição, os 26 estados que responderam à pergunta marcam ao menos um formato nos sete conjuntos e ficam com 100, de modo que a variável só separa Rondônia, que não respondeu ao suplemento de Governança.

#### MUNIC (recortes nacional agregado e de capitais)

**Acesso:** Microdados em XLSX, acesso livre. Suplemento TIC quinquenal.

**Cobertura:** Censitário (5.570 municípios). A maioria das perguntas é binária (Sim/Não), algumas têm alternativas categóricas, como a situação da página na internet, e a não resposta aparece como "Não informou", "Não sabe informar" ou "Recusa" (Seção 3.3.2).
#### Cobertura do Objetivo 3

O Objetivo 3 (Identificação Única) é o objetivo com menor cobertura no catálogo ativo: 6 variáveis de 5 fontes (`C9B` (Login único, o Gov.br, do Governo Federal), `I.9`, `III.4`, `atingimento_meta_cin`, `Mtic18a1-Mtic18a4, Mtic18a6` e `G630IPD`). As seis medidas distinguem adoção do login GOV.BR, extensão da integração dos serviços ao Login Único, disponibilidade de assinatura eletrônica, normatização do seu uso, emissão da Carteira de Identidade Nacional e autenticação em serviços municipais, em universos de respondentes também distintos. A Seção 3.6 descreve a estratégia de parceria com a SGD/MGI para ampliar essa cobertura.

### 3.4.2 Análise de viés de seleção e qualidade dos dados

O índice agrega variáveis de múltiplas fontes, com desenhos de coleta diferentes. Três mecanismos de viés são relevantes: viés de cobertura, quando a fonte não cobre toda a população de interesse; viés de não-resposta, quando unidades selecionadas não respondem; e viés de resposta por desejabilidade social.

**Autodiagnóstico obrigatório: iGovSISP** (97 das 349 variáveis do recorte nacional agregado): o iGovSISP é aplicado aos 234 órgãos SISP. Embora a participação seja obrigatória (viés de seleção baixo), é um autodiagnóstico: as respostas dependem da autoavaliação dos respondentes, suscetível a viés de desejabilidade social. Direção esperada: superestimação da maturidade.

**Pesquisas CETIC.br com resposta voluntária** (93 das 349 variáveis do recorte nacional agregado): as quatro pesquisas que contribuem para o índice dependem da resposta das unidades selecionadas, mas seus desenhos não são iguais. A TIC Governo Eletrônico combina abordagem censitária e seleção amostral; nessa pesquisa, responderam 88% dos órgãos públicos federais e estaduais e 77% das prefeituras. Se as unidades menos digitalizadas responderem menos, as proporções publicadas podem superestimar a realidade, mas as tabelas agregadas e as taxas de resposta não permitem testar essa associação nem medir sua magnitude. A superestimação é uma hipótese de direção do viés, não um efeito demonstrado.

**Avaliação externa: IOSPD** (47 das 349 variáveis do recorte nacional agregado): avaliação externa dos portais estaduais pela ABEP-TIC. Viés de seleção baixo (todos os 27 portais são avaliados).

**Questionário de autoavaliação: iESGo** (21 das 349 variáveis do recorte nacional agregado): o [FAQ do iESGo 2024](https://iesgo.tcu.gov.br/wp-content/uploads/sites/12/iesgo2024/FAQ_iESGo-v4.docx) define o instrumento como autoavaliação e atribui a responsabilidade pelas respostas ao dirigente máximo de cada organização. O questionário alcançou o universo de 387 organizações jurisdicionadas dos três Poderes. O TCU não verificou diretamente as respostas: o [relatório técnico](https://iesgo.tcu.gov.br/wp-content/uploads/sites/12/iesgo2024/iESGo2024_Relatorio_tecnico.pdf) informa que essa validação exigiria auditorias de campo, não realizadas no ciclo. Para reduzir a probabilidade de superestimação, o instrumento pede texto livre com indicação de evidência auditável e desdobra itens em subquestões de sim ou não. Esses procedimentos estruturam a declaração, mas não constituem auditoria das respostas. O viés de seleção é baixo porque a aplicação cobre o universo pesquisado; persiste o risco de desejabilidade social porque cada organização avalia a própria governança. O índice usa as questões individuais, e não os sub-índices compósitos calculados pelo TCU. A periodicidade é irregular. Direção esperada: superestimação; os procedimentos podem reduzir o risco, mas sua magnitude não foi medida.

**Dados administrativos e censitários** (91 das 349 variáveis do recorte nacional agregado): ESTADIC (27 variáveis, pesquisa censitária N=27 UFs), MUNIC (56 variáveis, pesquisa censitária N=5.570 municípios), Censo Escolar (INEP, 5), Cobertura móvel (ANATEL, 1), PNAD Contínua TIC (1) e Base de dados da CIN (SGD/MGI, 1). A base da CIN é registro administrativo, com extração de 08/10/2026, recebido por e-mail no acordo de envio de dados de 08/10/2026 com a SGD/MGI; não depende de resposta do ente e cobre as 27 UFs, com viés de seleção baixo, mas a contagem é atribuída à UF emissora, e não à de residência do titular. Viés de seleção baixo: ESTADIC e MUNIC são pesquisas censitárias obrigatórias. Porém, como os questionários são preenchidos pelo próprio governo respondente, há risco moderado de viés de desejabilidade social, semelhante aos autodiagnósticos federais.

**ESTADIC, saltos condicionais:** Na aba de Informática, 6,2% das células contêm "-" (salto condicional); na aba de Governança, 8,0%. Em algumas variáveis, o percentual chega a 59,3% na aba de Informática e a 70,4% na de Governança. Nos itens que o índice consome, porém, nenhuma célula traz traço, e a escolha entre dado ausente e zero não muda nenhum escore desta edição.

**Frequência da não resposta:** Contam como não resposta "Não informou", "Não sabe", "Não sabe informar" e "Recusa" escritos na célula e, na MUNIC, o traço que o IBGE registra nos itens de uma pergunta quando o município marca a alternativa "Não sabe informar" dela. A não resposta é rara nas duas fontes: são 63 das 3.240 células dos itens ESTADIC consumidos (1,94%), 58 delas de Rondônia, e 10.624 das 440.030 células MUNIC do recorte nacional agregado (2,41%), em 2.300 dos 5.570 municípios e concentradas nas perguntas de LGPD, de acessibilidade do portal e de autenticação.

### 3.4.3 Proveniência desta edição

Esta edição foi construída sobre o conjunto de dados identificado pelo manifesto de SHA-256 `d1449510eed387a1c6c84eb179474392fd74a39c49da0307749b806963c82c39`, da revisão `74e02b4` do conjunto `obsgovdigital/obsgovdigital`, que traz a composição das baterias da ESTADIC e a contagem por conjunto da pergunta sobre o formato dos dados descritas na Seção 3.3.1, a base de dados da Carteira de Identidade Nacional e o IOSPD 2025 sem os critérios I.2 e III.1, que a ABEP-TIC tira da conta da edição. O manifesto da release que acompanha este relatório identifica a revisão dos dados, a revisão do código e o hash de cada arquivo produzido, e é por ele que os números aqui publicados se reproduzem.

---

## 3.5 Classificação da cobertura das recomendações da ENGD

O Anexo da Portaria SGD/MGI nº 5.395/2026 elenca 68 recomendações aos entes federados, e o índice não alcança todas do mesmo modo. O Anexo B percorre as 68 e registra, uma a uma, o quanto o índice mede o que cada uma exige, cobertas inclusive. A classificação combina duas comparações: entre o que a recomendação exige e o que os indicadores medem, e entre os entes a que ela se dirige e os níveis que o índice observa.

A **cobertura de conteúdo** compara o que a recomendação exige com o que os indicadores do objetivo medem. É integral quando os indicadores medem de frente todos os deveres que o enunciado contém; parcial quando medem apenas parte deles, ou os alcançam por variável indireta, isto é, por pergunta que se aproxima do conteúdo sem medi-lo; e ausente quando nenhum indicador ativo mede o dever principal.

A **cobertura federativa** compara os níveis em que o índice observa esse conteúdo com os entes a que a recomendação se dirige. Aqui a variação é pequena: 67 das 68 recomendações se dirigem a todos os entes federados, e a única exceção é a Recomendação 3.3, endereçada aos órgãos estaduais de emissão de identidade civil. Referências a instâncias federais em outras recomendações não restringem o destinatário; é o caso, por exemplo, da coordenação da União na 3.4, do compartilhamento entre União, estados e municípios na 3.8 e na 5.6, do programa federal como referência de articulação na 4.1 e da legislação federal como parâmetro de alinhamento na 8.1; em todas, a execução cabe a qualquer ente. A cobertura federativa é completa quando o índice observa o conteúdo em todos os níveis que a recomendação alcança, e parcial quando observa parte deles.

Nem toda observação do índice é federativa. Quando a população respondente não é um ente de governo (escolas, domicílios, indivíduos de 16 anos ou mais, professores e estabelecimentos de saúde), o indicador diz o que se mede no território, e não o que um ente executa; ele sustenta a cobertura de conteúdo, mas não entra na leitura de alcance. São 41 dos 349 indicadores ativos, e o efeito da regra é sempre rebaixar o alcance, nunca o conteúdo.

O status combina as duas leituras, conforme a tabela abaixo. A única assimetria está na lacuna: quando nenhum indicador mede o dever principal, a cobertura federativa não chega a ser avaliada.

| Cobertura de conteúdo | Cobertura federativa | Status |
|---|---|---|
| integral | completa | coberta |
| integral | parcial | parcial no alcance |
| parcial | completa | parcial no conteúdo |
| parcial | parcial | parcial no conteúdo e no alcance |
| ausente | não avaliada | lacuna |

Em toda lacuna o anexo registra também o motivo pelo qual o índice não mede a recomendação. Pode ser que nenhuma fonte pública sistemática apure o conteúdo exigido (`sem_dado_publico`); que a apuração exista, mas a variável, que o verbete nomeia, esteja fora do catálogo ativo e conste do Anexo A (`fonte_excluida`); ou que a apuração alcance parte da Federação e não os entes a que a recomendação se dirige (`sem_instrumentacao_federativa`).

---

## 3.6 Acesso a dados e parcerias estratégicas

Algumas fontes do Observatório já fornecem os melhores dados disponíveis: o Censo Escolar oferece microdados abertos com cobertura censitária e a ANATEL publica dados em formato estruturado. Em outros casos, o índice opera com dados agregados pré-formatados ou com cobertura insuficiente. Para superar essas limitações, propõem-se parcerias formais para acesso a dados primários junto a três instituições (SGD/MGI, CETIC.br e ABEP-TIC).

#### SGD/MGI: dados primários do Gov.br

O Objetivo 3 da ENGD (Identificação Única) é o objetivo com menor cobertura no catálogo ativo (Seção 3.4.1). A base de dados da Carteira de Identidade Nacional, fornecida pela SGD/MGI ao Observatório, entra no índice. Os dados da plataforma Gov.br ficam fora dele, embora registrem avanço: o número de usuários passou de mais de 150 milhões, em agosto de 2023, para 166 milhões, em abril de 2025, quando 67,55 milhões de contas estavam no nível ouro de autenticação, segundo notas do MGI de [agosto de 2023](https://www.gov.br/gestao/pt-br/assuntos/noticias/2023/agosto/gestao-amplia-seguranca-das-150-milhoes-de-contas-no-gov.br) e de [abril de 2025](https://www.gov.br/gestao/pt-br/assuntos/noticias/2025/abril/gov-br-numero-de-contas-ouro-supera-o-de-bronze-pela-primeira-vez).

Para ampliar essa cobertura, propõe-se solicitar à Secretaria de Governo Digital (SGD/MGI) dados primários sobre a plataforma Gov.br, via Lei de Acesso à Informação ou via parceria institucional direta. Os dados solicitados incluem:

- **Contas Gov.br por nível de autenticação** (bronze, prata e ouro), por UF, que permite medir não apenas a adesão ao login único, mas a qualidade da identificação (níveis mais altos indicam verificação biométrica e documental)
- **Número de órgãos e entidades integrados ao login Gov.br**, com nível de governo, que mede a efetiva adoção da solução estruturante pelos entes federados
- **Número de usuários únicos que acessaram o Gov.br**, indicador de alcance e uso efetivo da plataforma
- **Volume de assinaturas eletrônicas realizadas via Gov.br**: 120 milhões de usos em 2024, segundo [nota do MGI de janeiro de 2025](https://www.gov.br/gestao/pt-br/assuntos/noticias/2025/janeiro/uso-da-assinatura-gov-br-por-brasileiros-cresce-130-em-2024)

A probabilidade de sucesso dos pedidos é alta: os dados existem nos sistemas da SGD, não têm caráter sigiloso e a própria SGD já divulga números agregados em balanços anuais.

#### CETIC.br: microdados das pesquisas TIC

Das 5 pesquisas CETIC catalogadas, 4 (todas exceto a TIC Domicílios, de download livre) requerem a assinatura de um Termo de Acesso e Uso junto ao NIC.br. Das 4 pesquisas que fornecem variáveis ao índice, 3 requerem Termo: TIC Governo Eletrônico, TIC Saúde e TIC Educação; a TIC Domicílios tem acesso livre. O procedimento de solicitação já foi mapeado: preenchimento de formulário em cetic.br/pt/microdados/, envio de PDF para acordos.cetic@nic.br, avaliação e assinatura do Termo.

O acesso aos microdados permitirá: (a) análises subnacionais por UF e município; (b) cruzamentos entre variáveis não disponíveis nas tabelas publicadas; (c) validação e auditoria da construção dos indicadores agregados.

#### ABEP-TIC: detalhamento do IOSPD

Propõe-se solicitar à ABEP-TIC, via contato institucional direto, o detalhamento completo do IOSPD por indicador e por portal estadual, permitindo desagregar os indicadores individuais além do que as tabelas publicadas oferecem e validar a construção dos escores de cada portal.

#### SGD/MGI: microdados do iGovSISP

O iGovSISP é um autodiagnóstico anual que avalia a governança de TI nos órgãos integrantes do SISP (Poder Executivo Federal), instituído pela Portaria SGD/MGI nº 4.339/2023. O instrumento cobre 6 dimensões, das quais 5 são publicadas:

| Dimensão | Tema | Mapeamento ENGD |
|----------|------|-----------------|
| 1. Gestão e Planejamento de TI | Governança, PDTIC, competências de pessoal | Obj. 1 e 10 |
| 2. Sistemas e Serviços Públicos Digitais | Planejamento da transformação digital, satisfação, acessibilidade, integração de sistemas, uso do SEI e avaliação de valor público | Obj. 1, 2, 5 e 8 |
| 3. Dados e Informações | Governança e uso de dados, interoperabilidade, IA | Obj. 5 e 7 |
| 4. Privacidade e Segurança | Ausente do relatório público consultado | Não integra o recorte |
| 5. Contratações de TI | Normativos, processos, sustentabilidade e acessibilidade | Obj. 8 |
| 6. Infraestrutura e Plataformas Digitais | Centro de dados, rede, nuvem, IPv6, integração ao Login Único e ao módulo de avaliação | Obj. 2, 3 e 6 |

Atualmente, apenas relatórios agregados estão disponíveis publicamente, em formato PDF gerado pelo LimeSurvey. Propõe-se solicitar à SGD/MGI os microdados (respostas por órgão) para:

- **Desagregar por tipo de órgão** (setorial, seccional, correlata), permitindo análise comparativa
- **Cruzar dimensões do iGovSISP com outros indicadores do índice**, enriquecendo os objetivos em que a fonte possui variáveis ativas
- **Complementar o iESGo (TCU)**: enquanto o iESGo avalia governança ampla por autoavaliação aplicada, em edições irregulares, a 387 organizações jurisdicionadas, o iGovSISP mede anualmente a maturidade operacional de TI por autodiagnóstico de 234 órgãos do SISP. São instrumentos complementares, não substitutos.

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

A cobertura territorial da plataforma também foi ampliada, gradativamente, passando a contemplar três recortes de análise: **Nacional, Estadual e Municipal**, incluindo 319 municípios com população igual ou superior a 100 mil habitantes. Essa evolução permitiu ampliar as possibilidades de comparação e exploração das informações disponíveis no Observatório.

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

### 3.7.5 Entrevistas de validação da plataforma

Foram realizadas **13 entrevistas semiestruturadas**, com duração de 30 a 40 minutos, para avaliar a usabilidade, a clareza e a utilidade do Observatório e identificar oportunidades de melhoria na plataforma.

As entrevistas incluíram uma breve navegação guiada e perguntas sobre cinco temas: **uso de dados e indicadores; organização e navegação; indicadores e visualizações; funcionalidades e experiência de uso; e utilidade e melhorias**.

Entre os principais pontos levantados estão a necessidade de uma **página inicial mais explicativa**, que apresente as possibilidades do Observatório; melhorias na **exploração e comparação dos indicadores**; e a adoção de uma visualização inicial padrão. O **gráfico de radar** foi destacado positivamente como ferramenta de comparação. Também foram revisados aspectos relacionados aos **dados disponíveis para download**, às orientações de **fonte e citação**, à atualização dos conteúdos e à criação de mecanismos para **sugestões, correções e participação dos usuários**.

### 3.7.6 Incorporação das contribuições e aprimoramento da experiência

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

### 3.7.7 Validação e segurança da informação

Após a consolidação das funcionalidades e dos principais aprimoramentos de experiência do usuário, a plataforma passou por uma etapa específica de avaliação de segurança da informação.

Essa fase foi composta por diferentes testes de segurança destinados a identificar possíveis vulnerabilidades e verificar a robustez da aplicação antes de sua disponibilização.

Os resultados encontrados durante esse processo foram analisados pela equipe técnica e utilizados para orientar os ajustes necessários, incorporando a segurança como uma dimensão do processo de qualidade da plataforma.

### 3.7.8 Um processo contínuo de evolução

A metodologia adotada para o Observatório considera a plataforma como um produto em evolução contínua. O ciclo pode ser sintetizado como uma sequência que parte da prototipação, segue pelo desenvolvimento, pela integração de dados, pela avaliação com usuários, pelo aprimoramento e pela validação de segurança, e desemboca na evolução contínua, que realimenta a sequência.

Essa abordagem permitiu combinar rigor metodológico, desenvolvimento tecnológico e participação de usuários, de modo que a versão final da plataforma resulta tanto da implementação técnica quanto de um processo de validação e aprendizado a partir da experiência de seus potenciais usuários.
