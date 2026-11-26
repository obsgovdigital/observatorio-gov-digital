# Anexo A: Variáveis Excluídas

Este anexo consolida as variáveis avaliadas que não foram incorporadas aos índices, com o respectivo motivo de exclusão. Os critérios de exclusão estão descritos na Seção 3.2.1 (Metodologia).

---

## A.1 Variáveis excluídas da visão Nacional

O IOSPD (ABEP-TIC) e a ESTADIC (IBGE) entram tanto na visão Nacional quanto no estadual, e cada exclusão aparece uma vez só neste anexo. A Seção A.2 trata também do IOSPD, cujos critérios não selecionados estão na Seção A.4. As 27 exclusões da ESTADIC estão na Seção A.2 e valem também para a visão Nacional.

### Saturação (variância zero ou quase zero)

| Variável | Fonte | Descrição | Motivo | Ação futura |
|----------|-------|-----------|--------|-------------|
| A4 | TIC Governo Eletrônico (CETIC.br) | Esse órgão público/Esta prefeitura usou a Internet nos últimos 12 meses? | Medida junto ao teto: as 22 observações não nulas de 2025 variam de 99,8992% a 100% | Mantida como série descritiva (pergunta-filtro de percentuais condicionais) |

### Variáveis multi-item excluídas (5)

Variáveis com múltiplos sub-itens cujos sub-itens representam detalhes técnicos já capturados por variável parent, ou que medem comportamento do cidadão (demanda) e não capacidade do governo (oferta). Ver Seção 3.2.3 da Metodologia.

| Variável | Fonte | Descrição | Motivo | Ação futura |
|----------|-------|-----------|--------|-------------|
| G2 | TIC Domicílios (CETIC.br) | Tipos de serviço público acessado online (8 sub-itens A-H, incluindo Justiça) | Variável de demanda (cidadão), não de oferta. Oferta já coberta por C6B, C1. | Sem ação prevista |
| C9B | TIC Governo Eletrônico (CETIC.br) | Formas de cadastro ou login exigidas para acessar serviços online (2025; item E também nas prefeituras) | Apenas o item A (login único Gov.br) integra o índice; login estadual, login do próprio ente, rede social e "Outro" permanecem descritivos, porque exigir qualquer cadastro não comprova maturidade de identidade digital | Sem ação prevista |
| E3E | TIC Governo Eletrônico (CETIC.br) | Finalidades de uso de redes sociais (4 itens nos órgãos e 5 nas prefeituras em 2025) | Detalhe técnico; o relevante é usar redes sociais, não para quê | Avaliar inclusão de E3B (presença em redes sociais) como parent binária |
| H1A | TIC Governo Eletrônico (CETIC.br) | Fontes de big data (5 itens nos órgãos e nas prefeituras; universo de órgãos ampliado em 2025) | Detalhe técnico; H1 já captura "fez big data?" | Sem ação prevista |
| H3A | TIC Governo Eletrônico (CETIC.br) | Aplicações de IA (7 itens nos órgãos e nas prefeituras em 2025, com identidades municipais próprias) | Detalhe técnico; H3 já captura "usou IA?" | Sem ação prevista |

### Variáveis multi-item desmembradas

Variáveis com sub-itens fundamentalmente diferentes que foram desmembradas em variáveis individuais. As entradas parent foram removidas do índice e substituídas pelas entradas individuais; as que ficaram com mais de um item contam juntas como bateria (um único componente; ver Seções 3.2.3 e 3.3.4 da Metodologia), e a C7 ficou só com o item A.

| Variável | Fonte | Sub-itens ativos | Tratamento no índice | Objetivo |
|----------|-------|:---------------:|----------------|:--------:|
| C6B | TIC Governo Eletrônico (CETIC.br) | 5 (A-E) | Bateria de recursos móveis, com os itens A a E; o item F, "Outro", não nomeia um recurso definido e permanece descritivo | 2 |
| E1 | TIC Governo Eletrônico (CETIC.br) | 7 | Bateria de sete formas de contato, cada uma identificada pelo conteúdo do item, e não pela letra, porque as letras divergem entre os questionários de órgãos e de prefeituras | 2 |
| C7 | TIC Governo Eletrônico (CETIC.br) | 1 (A) | Item A, centros públicos de acesso gratuito; o item B, Wi-Fi gratuito em áreas públicas, foi excluído por redundância com a MUNIC (ver adiante) | 6 |
| G3 | TIC Governo Eletrônico (CETIC.br) | 6 | Bateria LGPD, incluindo programa de governança em privacidade e proteção de dados (E); os itens C e D dos órgãos não existem para as prefeituras, e o item C das prefeituras, sobre documento que define papéis e responsabilidades na LGPD, é variável própria | 4 |
| A12 | TIC Saúde (CETIC.br) | 5 (A-E) | Bateria LGPD dos estabelecimentos de saúde, com os itens A a E | 4 |
| B4 | TIC Governo Eletrônico (CETIC.br) | 5 (H-L) | Bateria de sistemas administrativos apenas nas prefeituras, com os cinco itens H a L | 8 |
| F2C | TIC Governo Eletrônico (CETIC.br) | 6 (A-F) | Bateria de monitoramento setorial; o contêiner não duplica os itens | 6 |
| H7 | TIC Educação (CETIC.br) | 7 (C-I) | Bateria de formação continuada dos professores de 2024 (fonte física TIC Educação Professores); o contêiner não duplica os sete itens C-I. H7 de escolas 2025 é outra pergunta, sobre receios de privacidade | 10 |

Os percentuais condicionados dos itens ativos são recalculados sobre a população inteira, conforme a Seção 3.2.4. Os contêineres permanecem excluídos para evitar duplicação.

### Suspensões por medida não reproduzível

Indicadores retirados do índice porque o valor nacional não pode ser reproduzido a partir de dados oficiais publicados. Retornam quando a fonte publicar os insumos necessários.

| Variável | Fonte | Descrição | Motivo | Condição de retorno |
|----------|-------|-----------|--------|---------------------|
| B10, C5 (Lista de produtos ou serviços vendidos ou oferecidos gratuitamente pela instituição), C15B, D1, D2, D4B, E1A, E5C1 | TIC Cultura (CETIC.br) | Wi-Fi gratuito ao público; lista de produtos ou serviços no website; inscrição ou venda de ingressos online; posse de acervo; digitalização do acervo; disponibilização de conteúdo digital na Internet; uso de inteligência artificial; responsável pela proteção de dados (LGPD) | A planilha oficial de 2024 não publica total nacional; o valor antes divulgado era média simples não ponderada entre os sete tipos de equipamento cultural. No caso de D1, possuir acervo é ainda condição institucional, não capacidade digital | Total oficial, pesos amostrais ou microdados |
| BLF02 | ANATEL | Densidade de acessos de banda larga fixa por 100 domicílios | O denominador domiciliar não provinha de fonte oficial versionada nem de fórmula reproduzível | Numerador e denominador oficiais versionados (ANATEL + IBGE) |

### Substituições de identidade

Casos em que uma variável foi aposentada e o conceito passou a ser medido por outra identidade do catálogo.

| Variável aposentada | Fonte | O que mudou |
|-------------------|-------|-------------|
| C9A | TIC Governo Eletrônico (CETIC.br) | A pergunta media a exigência de qualquer login ou cadastro, sem direção monotônica de qualidade; a adoção de identidade digital passou a ser medida pelo item A da aba C9B (uso do login único Gov.br) |
| Etic241-Etic244 | ESTADIC (IBGE) | Variável composta que reunia as quatro colunas, decomposta nas quatro perguntas oficiais do questionário, cada uma variável própria e todas ativas |
| F3A | TIC Governo Eletrônico (CETIC.br) | Decisão D do gate de 2026-07: duplicado com munic/Mtic265, medido pela MUNIC 2024 com censo e recorte de capitais; preservado apenas como série descritiva. A prioridade é a cobertura censitária e granular da MUNIC 2024, mesmo diante da TIC Governo 2025, mais recente. |
| G110GP, G113GP | iGovSISP (SGD/MGI) | Duas perguntas de percepção, a priorização da TI na elaboração da PLOA e a prioridade dada à inovação, retiradas por estarem fora da seleção canônica do autodiagnóstico |
| E1 | TIC Governo Eletrônico (CETIC.br) | A identidade dos itens A a D pela letra foi substituída pela identidade de cada forma de contato, porque as letras divergem entre os questionários de órgãos e de prefeituras; as sete formas de contato ativas formam a bateria |

### Identidades recadastradas mantidas como série descritiva

O catálogo mantém fora do índice cinco identidades descritivas: o uso de CAPTCHA nas páginas da prefeitura e os quatro itens de cidade inteligente da TIC Governo Eletrônico, decompostos de F3A (ver a tabela anterior).

| Variável | Fonte | Pergunta | Motivo |
|----------|-------|----------|--------|
| Mtic286 | MUNIC (IBGE) | A página na internet e os serviços eletrônicos disponibilizados pela prefeitura: Usam CAPTCHA para solicitações | O campo informa apenas o uso de CAPTCHA, sem registrar alternativa acessível, mecanismo de assistência ou direção positiva de qualidade |
| F3A (Bilhete ou cartão eletrônico aos cidadãos para uso de transporte público) | TIC Governo Eletrônico (CETIC.br) | Neste município Existe bilhete eletrônico ou cartão eletrônico para uso de ônibus, micro-ônibus ou vans | Duplica `munic/Mtic261`, medido pela MUNIC 2024 com cobertura censitária e recorte de capitais |
| F3A (Ônibus de transporte público com dispositivo de GPS) | TIC Governo Eletrônico (CETIC.br) | Neste município Os ônibus de transporte público possuem dispositivo de GPS | Duplica `munic/Mtic262`, medido pela MUNIC 2024 com cobertura censitária e recorte de capitais |
| F3A (Sistema de iluminação conectado a uma rede de comunicação que permite, por exemplo, alteração de intensidade da luz à distância) | TIC Governo Eletrônico (CETIC.br) | Neste município O sistema de iluminação está conectado a uma rede de comunicação que permite, por exemplo, alteração de intensidade da luz à distância | Duplica `munic/Mtic264`, medido pela MUNIC 2024 com cobertura censitária e recorte de capitais |
| F3A (Rede de semáforos controlada à distância) | TIC Governo Eletrônico (CETIC.br) | Neste município A rede de semáforos é controlada à distância | Duplica `munic/Mtic265`, medido pela MUNIC 2024 com cobertura censitária e recorte de capitais |

### Aderência ao escopo ENGD

Variáveis cuja permanência no índice foi reavaliada contra a Portaria SGD/MGI nº 5.395/2026 e excluídas por não corresponderem a recomendação ENGD do objetivo em que estavam classificadas, ou de nenhum dos 10 objetivos.

| Variável | Fonte | Descrição | Motivo | Ação futura |
|----------|-------|-----------|--------|-------------|
| B4 | TIC Saúde (CETIC.br) | Neste estabelecimento, há algum sistema eletrônico que oferece ________ | Tecnologia muito específica, sem correspondência com recomendação da ENGD (critério vi da Seção 3.2.1): os sete itens são funcionalidades de apoio à decisão clínica (diretrizes e protocolos clínicos e alertas sobre medicamentos, alergias e exames), e o apoio à decisão clínica é recurso de qualidade assistencial do sistema eletrônico, e não eficiência de processos do Objetivo 8 | Sem ação prevista |
| E5 | TIC Saúde (CETIC.br) | O gestor possui formação em informática em saúde? | Mede formação individual dos gestores respondentes, não capacidade do estabelecimento de saúde | Reavaliar em caso de publicação por estabelecimento |
| Mtic30 | MUNIC (IBGE) | No município existe estrutura organizacional para a área de comunicação? | Mede estrutura administrativa de comunicação institucional, não a oferta ou integração de canais digitais de serviços e comunicação. | Sem ação prevista |
| Mtic091 | MUNIC (IBGE) | Foi desenvolvido software para atender necessidade específica da prefeitura nos últimos 12 meses? Sim, para funcionamento interno ou atendimento a servidores da prefeitura | Capacidade-meio de produção interna sem âncora em recomendação ENGD. Recs 6.1 e 8.5 favorecem soluções compartilhadas sobre desenvolvimento isolado; rec 8.7 trata de metodologia ágil, não da existência de desenvolvimento. | Sem ação prevista |
| Mtic092 | MUNIC (IBGE) | Foi desenvolvido software para atender necessidade específica da prefeitura nos últimos 12 meses? Sim, para atendimento à sociedade | Idem `munic/Mtic091`. | Sem ação prevista |
| Mtic341 | MUNIC (IBGE) | A área de comunicação está responsável por quais funções? Disseminação da aplicação da Lei de acesso à informação (LAI) e orientações de como o município pode atender a população | Fora do escopo ENGD: a pergunta descreve uma função da área de comunicação institucional, que 3.047 dos 5.570 municípios (55%) não têm e por isso não respondem. O indicador dava zero a esses municípios por uma estrutura administrativa que o catálogo já exclui (Mtic30) e não media a disseminação da LAI pela prefeitura. | Sem ação prevista |
| Mtic342 | MUNIC (IBGE) | A área de comunicação está responsável por quais funções? Disseminação da aplicação da Lei geral de proteção de dados pessoais (LGPD) e orientações para a população de como o município cumpre a LGPD | Fora do escopo ENGD: a pergunta descreve uma função da área de comunicação institucional, que 3.047 dos 5.570 municípios (55%) não têm e por isso não respondem. O indicador dava zero a esses municípios por uma estrutura administrativa que o catálogo já exclui (Mtic30) e não media a disseminação da LGPD pela prefeitura. | Sem ação prevista |
| Mgov04 | MUNIC (IBGE) | Houve solicitação de acesso à informação pública à prefeitura, no ano de 2023, com base na Lei de Acesso à Informação? | Fora do escopo ENGD: registra se houve pedido de acesso à informação à prefeitura em 2023, que é demanda do cidadão, e não capacidade nem prática da prefeitura (critério iii da Seção 3.2.1). | Sem ação prevista |

### Redundância (compósitos cujos componentes já estão no índice)

**Escopo das exclusões do iESGo.** O que sai abaixo são os compósitos calculados pelo próprio TCU, e não a fonte. O iESGo integra o índice por vinte questões completas do questionário de governança mais o sub-item `iesgo/3132C`, tratadas como variáveis individuais, conforme o capítulo de metodologia.

| Variável | Fonte | Descrição | Motivo |
|----------|-------|-----------|--------|
| iGovTI | iESGo (TCU) | Índice composto GovernancaTI + iGestTI | Compósito de subíndices de terceiros; o índice mantém apenas variáveis individuais |
| GovernancaTI | iESGo (TCU) | Subíndice de governança estratégica de TI | Subíndice composto de terceiros; o índice mantém apenas variáveis individuais |
| Lid | iESGo (TCU) | Capacidade em Liderança, coluna Lid do TCU | Subíndice composto de terceiros; o índice mantém apenas variáveis individuais |
| Estr | iESGo (TCU) | Capacidade em Estratégia, coluna Estr do TCU | Subíndice composto de terceiros; o índice mantém apenas variáveis individuais |
| Cont | iESGo (TCU) | Capacidade em Controle, coluna Cont do TCU | Subíndice composto de terceiros; o índice mantém apenas variáveis individuais |
| EstruturaSegInfo | iESGo (TCU) | Subíndice de estrutura de segurança da informação | Subíndice composto de terceiros; o índice mantém apenas variáveis individuais |
| ProcessoSegInfo | iESGo (TCU) | Subíndice de processo de segurança da informação | Subíndice composto de terceiros; o índice mantém apenas variáveis individuais |
| RiscosTISegInfo | iESGo (TCU) | Subíndice de riscos de TI e segurança da informação | Subíndice composto de terceiros; o índice mantém apenas variáveis individuais |
| GerirSoluções | iESGo (TCU) | Subíndice de capacidade em gerir desenvolvimento de soluções e inovação (prática 4260) | Subíndice composto de terceiros; o índice mantém apenas variáveis individuais |
| PlanejamentoTI | iESGo (TCU) | Subíndice de planejamento de TI | Subíndice composto de terceiros; o índice mantém apenas variáveis individuais |
| ServicosTI | iESGo (TCU) | Subíndice de gestão de serviços de TI | Subíndice composto de terceiros; o índice mantém apenas variáveis individuais |
| iGovSustentAmb | iESGo (TCU) | Sustentabilidade ambiental (PLS, resíduos, energia) | Mede gestão ambiental, não o cálculo do impacto ambiental da transformação digital; o composto não integra a seleção de questões individuais |
| iGovSustentSocial | iESGo (TCU) | Sustentabilidade social (diversidade, anti-assédio, acessibilidade) | Composto de terceiros, fora do recorte de questões dos subíndices selecionados de TI e segurança (ver Seção 3.1.2) |

---

### Redundância: rodada de decisão de junho/2026 (auditoria por objetivo)

A revisão de redundância conduzida em junho de 2026 aplicou cinco critérios, na ordem: entre duas medidas do mesmo objeto, fica a censitária e granular; entre degraus logicamente encaixados da mesma prática, fica o mais geral; entre degraus práticos de exigência, fica o mais exigente; entre pergunta guarda-chuva e seus detalhamentos, fica o guarda-chuva; entre prática em funcionamento e prática apenas normatizada, fica o funcionamento. A tabela abaixo lista as 32 variáveis que seguem excluídas por redundância: 31 dessa revisão e uma da primeira rodada da mesma auditoria. A primeira rodada excluiu os subíndices compostos do iESGo (listados na seção que precede esta) e `igovsisp/G106GPM`, a variável dela que está na tabela. Das outras exclusões da revisão de junho, as da ESTADIC estão na Seção A.2, com as demais dessa fonte, e as quatro do iGovSISP, na seção seguinte, com outro fundamento.

| Variável | Fonte | Pergunta | Fundamento |
|---|---|---|---|
| G106GPM | iGovSISP (SGD/MGI) | O órgão estimou a quantidade ideal de pessoal por competência considerando as necessidades futuras ou menos urgentes e os fatores críticos de sucesso? (Guia do PDTIC do SISP, p. 85) | Redundância clara com igovsisp/G106GPL: mesma bateria, respondente e objeto (dimensionamento de pessoal no PDTIC); retida a GPL, que dimensiona o mínimo para as necessidades prioritárias; as duas desagregam por competência |
| G106GPA | iGovSISP (SGD/MGI) | A organização possui PDTIC vigente, nos termos da Portaria nº 778, de 4 de abril de 2019, formalmente instituído pelo Comitê de Governança Digital - CGD ou estrutura equivalente? | Degrau lógico de igovsisp/G106GPE (publicar pressupõe possuir; retido o mais exigente) |
| Mgov023 | MUNIC (IBGE) | A legislação municipal que regulamenta a Lei de Acesso à Informação: Prevê autoridade de monitoramento para implementação da Lei de Acesso à Informação pública | Item de conteúdo da lei captada por munic/Mgov01 (retido o mais geral) |
| Mgov024 | MUNIC (IBGE) | A legislação municipal que regulamenta a Lei de Acesso à Informação: Prevê órgão central de monitoramento das ações relativas ao acesso à informação pública | Item de conteúdo da lei captada por munic/Mgov01 (retido o mais geral) |
| Mgov021 | MUNIC (IBGE) | A legislação municipal que regulamenta a Lei de Acesso à Informação: Estabelece prazo de atendimento de pedido de acesso à informação pública igual ou inferior a 20 dias corridos | Item de conteúdo da lei captada por munic/Mgov01 (retido o mais geral) |
| Mgov025 | MUNIC (IBGE) | A legislação municipal que regulamenta a Lei de Acesso à Informação: Prevê a divulgação de relatório de monitoramento com informações estatísticas dos pedidos de acesso à informação pública | Item de conteúdo da lei captada por munic/Mgov01 (retido o mais geral) |
| D8 | TIC Cultura (CETIC.br) | O(A) (NOME DA INSTITUIÇÃO) possui catálogo ou listagem de seu acervo disponível para consulta na Internet? | Degrau lógico de tic_cultura/D1 (catálogo online pressupõe acervo) e par empírico com D4B/D5A; a D1 também está fora do índice, por motivo próprio |
| IN_BANDA_LARGA | Censo Escolar (INEP) | Internet banda larga | Degrau lógico de censo_escolar/IN_INTERNET (banda larga pressupõe Internet; retido o mais geral) |
| G501CTI | iGovSISP (SGD/MGI) | Acerca da Instrução Normativa SGD/MGI nº 06, de 29 de março de 2023 (incluindo sua alteração pela Instrução Normativa SGD/MGI nº 86, de 25 de julho de 2025), que regulamenta os requisitos e procedimentos para aprovação de contratações ou de formação de atas de registro de preços, a serem efetuados por órgãos e entidades integrantes do SISP, relativos a bens e serviços de tecnologia da informação e comunicação – TIC, o seu órgão: | Escada prática com igovsisp/G502CTI (normas distintas da mesma política de contratações de TIC, a da aprovação de contratações e a do processo de contratação; retido G502CTI) |
| B0 | TIC Saúde (CETIC.br) | Neste estabelecimento, existe um sistema eletrônico para registro das informações dos pacientes? | Escada prática com tic_saude/B1 (ter sistema × manter só em meio eletrônico; retido o mais exigente) |
| Mtic174 | MUNIC (IBGE) | Neste município o cidadão pode solicitar serviços públicos, como por exemplo, serviços de limpeza, reparo de buracos, poda de árvores, desobstrução de bueiros e iluminação, gerando um protocolo por: Aplicativo de celular da prefeitura ou do serviço | Canal específico do guarda-chuva munic/Mtic011-Mtic018 (retido o geral) |
| Mtic175 | MUNIC (IBGE) | Neste município o cidadão pode solicitar serviços públicos, como por exemplo, serviços de limpeza, reparo de buracos, poda de árvores, desobstrução de bueiros e iluminação, gerando um protocolo por: Redes sociais (WhatsApp, Telegram, Instagram, etc.) | Canal específico do guarda-chuva munic/Mtic011-Mtic018 (retido o geral) |
| Mtic171 | MUNIC (IBGE) | Neste município o cidadão pode solicitar serviços públicos, como por exemplo, serviços de limpeza, reparo de buracos, poda de árvores, desobstrução de bueiros e iluminação, gerando um protocolo por: Ligação telefônica | Canal específico do guarda-chuva munic/Mtic011-Mtic018 (retido o geral) |
| Mtic172 | MUNIC (IBGE) | Neste município o cidadão pode solicitar serviços públicos, como por exemplo, serviços de limpeza, reparo de buracos, poda de árvores, desobstrução de bueiros e iluminação, gerando um protocolo por: Website da prefeitura | Canal específico do guarda-chuva munic/Mtic011-Mtic018 (retido o geral) |
| Mtic214 | MUNIC (IBGE) | Ações implementadas nos últimos 24 meses: Promoção de cursos de capacitação em informática para a população | Ação específica do guarda-chuva munic/Mtic19 (retido o geral) |
| Mtic215 | MUNIC (IBGE) | Ações implementadas nos últimos 24 meses: Instalação de computadores na rede pública municipal de ensino com acesso à Internet para utilização de alunos e professores | Ação específica do guarda-chuva munic/Mtic19 (retido o geral) |
| Mtic212 | MUNIC (IBGE) | Ações implementadas nos últimos 24 meses: Disponibilização de informações e serviços de órgãos públicos, em quiosque ou balcão informatizado | Ação específica do guarda-chuva munic/Mtic19 (retido o geral) |
| Mtic211 | MUNIC (IBGE) | Ações implementadas nos últimos 24 meses: Disponibilização de acesso público e gratuito à Internet através de centros de acesso público, como telecentros. | Ação específica do guarda-chuva munic/Mtic19 (retido o geral) |
| Mtic216 | MUNIC (IBGE) | Ações implementadas nos últimos 24 meses: Instalação de rede WI-FI nas escolas da rede pública municipal para acesso de professores e alunos | Ação específica do guarda-chuva munic/Mtic19 (retido o geral) |
| Mtic251 | MUNIC (IBGE) | A prefeitura, nos últimos 12 meses, realizou pela internet: Consulta pública online para que cidadãos possam enviar contribuições para leis, orçamentos e planos | Item específico do guarda-chuva munic/Mtic251-Mtic255 (retido o geral) |
| Mtic253 | MUNIC (IBGE) | A prefeitura, nos últimos 12 meses, realizou pela internet: Enquete online sobre assuntos de interesse da prefeitura | Item específico do guarda-chuva munic/Mtic251-Mtic255 (retido o geral) |
| Mtic252 | MUNIC (IBGE) | A prefeitura, nos últimos 12 meses, realizou pela internet: Grupos de discussão como fóruns ou comunidades pela internet | Item específico do guarda-chuva munic/Mtic251-Mtic255 (retido o geral) |
| Mtic254 | MUNIC (IBGE) | A prefeitura, nos últimos 12 meses, realizou pela internet: Votação online para orientar a tomada de decisão sobre políticas públicas, orçamento, etc. | Item específico do guarda-chuva munic/Mtic251-Mtic255 (retido o geral) |
| D5A | TIC Cultura (CETIC.br) | E o(a) (NOME DA INSTITUIÇÃO) disponibiliza esses materiais em formato digital [...]? | Par empírico correlação em níveis=+0,98 com tic_cultura/D8 ('remover ambas') e sobreposição com D4B |
| S07001 | PNAD Contínua TIC (IBGE) | Nos últimos três meses utilizou a Internet em algum local local (domicílio, local de trabalho, escola, centro de acesso gratuito ou pago, domicílio de outras pessoas ou qualquer outro local) por meio de microcomputador, tablet, telefone móvel celular, televisão ou outro equipamento? | Redundância mantida pelo teste original temporal nacional, limiar |correlação em níveis| ≥ 0,85: 2016–2024, oito anos comuns, correlação em níveis=0,992842 e correlação das variações=0,946210; acrescentando 2025, nove anos, correlação em níveis=0,991228 e correlação das variações=0,935576. Retida a medida domiciliar S01029. A correlação transversal das 27 UFs de 2025 (0,820002) não reproduz o teste temporal. Cálculo exploratório sobre o arquivo histórico legado, sem o incorporar ao snapshot nem retirar sua quarentena. |
| B5 | TIC Cultura (CETIC.br) | O(A) (NOME DA INSTITUIÇÃO) usou a Internet nos últimos 12 meses? | Par empírico correlação em níveis=+1,00 com tic_cultura/B10 (retido B10 por proximidade temática) |
| TP_REDE_LOCAL | Censo Escolar (INEP) | Rede local de interligação de computadores | Pares empíricos com IN_INTERNET_APRENDIZAGEM (correlação em níveis de 0,99) e tic_educacao/B1 (correlação em níveis de -0,93) ('remover wi-fi') |
| B1 | TIC Educação (CETIC.br) | Essa escola possui [...]? E [...]? | Redundância clara com censo_escolar/IN_COMPUTADOR (censo INEP retido) (seção 1) |
| A1 | TIC Educação (CETIC.br) | Esta escola possui acesso à Internet? | Redundância clara com censo_escolar/IN_INTERNET (censo INEP retido) (seção 1) |
| F2A | TIC Governo Eletrônico (CETIC.br) | Neste município existe um Centro de Operações para monitoramento de situações como trânsito, segurança ou emergência? | Redundância clara com munic/Mtic263 (censo IBGE 2024 retido). A prioridade é a cobertura censitária da MUNIC 2024. |
| C7 (Conexão Wi-Fi gratuita em áreas públicas do município, como praças e parques) | TIC Governo Eletrônico (CETIC.br) | A prefeitura disponibilizou aos cidadãos nos últimos 12 meses: Acesso à Internet através de conexão Wi-Fi gratuita em áreas públicas do município, como praças, parques etc. | Redundância clara com munic/Mtic22 (censo IBGE 2024 retido) (seção 1) |
| C6B (Outro) | TIC Governo Eletrônico (CETIC.br) | Órgãos: Este órgão público disponibilizou os seguintes recursos para o cidadão por meio celular ou smartphones, nos últimos 12 meses? Algum outro? Prefeituras: Esta prefeitura disponibilizou os seguintes recursos para o cidadão por meio de celular ou smartphones nos últimos 12 meses? Algum outro? | Item "Outro" da bateria de recursos móveis: não nomeia um recurso definido e permanece descritivo, sem peso na bateria; os itens A a E da aba voltaram ao índice |

### Identidade e pertinência das perguntas do iGovSISP

A conferência de identidade das perguntas, atualizada para o questionário oficial de 2026, fundamenta 14 novas exclusões editoriais. Outras quatro variáveis permanecem excluídas, mas por conteúdo sem vínculo substantivo demonstrado, não pelas relações de redundância antes atribuídas a elas. A procedência da primeira exclusão permanece histórica; esta tabela apresenta o fundamento vigente. Excluir do índice não apaga as observações da fonte.

| Variável | Fonte | Pergunta | Fundamento |
|---|---|---|---|
| G106GPF | iGovSISP (SGD/MGI) | O órgão possui formas ou mecanismos para monitorar as ações do PDTIC vigente? | Rotina de acompanhamento do PDTIC sem vínculo substantivo demonstrado com governo digital. Não é absorvida por uma medida de execução geral do plano. |
| G106GPJ | iGovSISP (SGD/MGI) | O CGD acompanhou a execução de ações e contratações do Plano de Metas e Ações, inclusive quanto a resultados intermediários e efetivo atendimento das necessidades priorizadas no PDTIC? | Rotina de acompanhamento do PDTIC sem vínculo substantivo demonstrado com governo digital. Não é absorvida por uma medida de execução geral do plano. |
| G106GPK | iGovSISP (SGD/MGI) | O CGD aprovou e acompanhou o plano de monitoramento, o plano de avaliação, o relatório de acompanhamento e o relatório de resultados do PDTIC? | Rotina de acompanhamento do PDTIC sem vínculo substantivo demonstrado com governo digital. Não é absorvida por uma medida de execução geral do plano. |
| G106GPS | iGovSISP (SGD/MGI) | Em conformidade com a Estratégia Federal de Governo Digital (Decreto nº 12.198/2024), que exige a inclusão de ações de acessibilidade no Plano de Transformação Digital (PTD), o PDTIC do órgão ou seu PTD equivalente estabelece metas formais, com indicadores e prazos definidos, para assegurar a plena acessibilidade de seus portais, aplicativos e demais serviços digitais? | A pergunta aceita metas no PDTIC ou em PTD equivalente. A fonte registra 90 respostas a partir do terceiro estágio entre 213 respondentes (42,25%) e não informa se os 25 órgãos fora do bloco tinham metas em um PTD. |
| G201SPD | iGovSISP (SGD/MGI) | Como você avaliaria o nível de documentação e padronização nos processos de desenvolvimento de sistemas em seu órgão? | Prática de engenharia de software sem vínculo substantivo demonstrado com uma capacidade ou resultado de governo digital. |
| G202SPD | iGovSISP (SGD/MGI) | Quais métodos de gerenciamento de projetos são utilizados em seu órgão para o desenvolvimento de sistemas? | Prática de engenharia de software sem vínculo substantivo demonstrado com uma capacidade ou resultado de governo digital. |
| G203SPD | iGovSISP (SGD/MGI) | Como o seu órgão lida com testes de qualidade e garantia de qualidade no desenvolvimento de sistemas? | Prática de engenharia de software sem vínculo substantivo demonstrado com uma capacidade ou resultado de governo digital. |
| G209SPD | iGovSISP (SGD/MGI) | Como você descreveria o nível de maturidade do seu órgão, quanto ao desenvolvimento de sistemas e entrega de serviços, no cumprimento dos Objetivos de Desenvolvimento Sustentável (ODS) da ONU? | Alinhamento genérico aos ODS, sem identificação de capacidade ou resultado de governo digital nas alternativas. |
| G210SPD | iGovSISP (SGD/MGI) | O órgão adota alguma metodologia de desenvolvimento de software? | Prática de engenharia de software sem vínculo substantivo demonstrado com uma capacidade ou resultado de governo digital. |
| G211SPD | iGovSISP (SGD/MGI) | Quanto ao uso de ferramentas automatizadas para verificação da qualidade do código, o órgão: | Prática de engenharia de software sem vínculo substantivo demonstrado com uma capacidade ou resultado de governo digital. |
| G212SPD | iGovSISP (SGD/MGI) | Quanto ao uso de ferramentas automatizadas para realização de testes, o órgão: | Prática de engenharia de software sem vínculo substantivo demonstrado com uma capacidade ou resultado de governo digital. |
| G215SPD | iGovSISP (SGD/MGI) | O órgão coleta regularmente feedback dos usuários para melhorar a experiência. | Prática de experiência ou suporte ao usuário que não distingue usuários internos e serviços públicos digitais. |
| G217SPD | iGovSISP (SGD/MGI) | Os usuários recebem treinamento e suporte adequados para utilizar os sistemas de TI. | Prática de experiência ou suporte ao usuário que não distingue usuários internos e serviços públicos digitais. |
| G219SPD | iGovSISP (SGD/MGI) | O órgão busca constantemente maneiras de melhorar a experiência do usuário nos sistemas e serviços de TI. | Prática de experiência ou suporte ao usuário que não distingue usuários internos e serviços públicos digitais. |
| G220SPD | iGovSISP (SGD/MGI) | No órgão, existem equipes dedicadas ao desenho da jornada do cliente e entendimento adequado para UX (User Experience) e UI (User Interface)? | Organização de equipes de jornada, UX e UI sem distinção de serviços públicos digitais; não demonstra vínculo substantivo com a capacidade de governo digital medida. |
| G221SPD | iGovSISP (SGD/MGI) | O órgão possui um repositório centralizado ou catálogo de aplicações corporativas (Gestão de Portfólio de Aplicações (Application Portfolio Management – APM))? | Gestão de aplicações corporativas sem vínculo substantivo demonstrado com uma capacidade ou resultado de governo digital. |
| G223SPD | iGovSISP (SGD/MGI) | Como está o processo de modernização de aplicações legadas? | Gestão de aplicações corporativas sem vínculo substantivo demonstrado com uma capacidade ou resultado de governo digital. |
| G629IPD | iGovSISP (SGD/MGI) | Especificamente quanto ao nível de conhecimento e aplicabilidade sobre o Design System (Padrão Digital de Governo - gov.br/ds), o seu órgão: | Conhecimento e adoção do Design System gov.br não demonstram, por si, qualidade ou capacidade substantiva de governo digital. |

## A.2 Variáveis excluídas do índice estadual

### Variáveis ESTADIC excluídas (27)

Das 54 variáveis ESTADIC catalogadas, 27 foram excluídas e 27 permanecem ativas. Uma chave composta de inovação foi aposentada e decomposta nas quatro perguntas oficiais do questionário, todas ativas (ver "Substituições de identidade" na Seção A.1). A ESTADIC entra também na visão Nacional, e as 27 exclusões, listadas abaixo com o código da coluna na base de dados do IBGE e o critério da Seção 3.2.1 ou, nas duas que saem por saturação, essa indicação, valem para os dois índices. Duas delas (`estadic/Etic221-Etic222` e `estadic/Etic191-Etic197`) saíram por salto condicional (ver Seção 3.3.5), e `estadic/Egov0621-Egov0623`, na revisão de redundância de junho de 2026 (ver Seção A.1).

| # | Código | Pergunta real IBGE | Critério | Justificativa |
|---|--------|--------------------| ---------|---------------|
| 1 | Etic071-Etic078 | Das pessoas que trabalham atualmente na área de tecnologia da informação, há: | (vii) | Detalhe operacional de RH |
| 2 | Etic181-Etic186 | Os programas ou ações de inclusão/educação digital são realizados em parceria com: | (i) | Detalhe de implementação; programa captado por Etic17 |
| 3 | Etic301-Etic308 | Das pessoas que trabalham atualmente na área de comunicação, há: | (iii)+(vii) | Vínculo de pessoal descreve estrutura administrativa e detalhe de RH, não oferta ou integração de canais digitais |
| 4 | Etic31 | O governo estadual possui em sua estrutura uma carreira ou cargo específico de comunicação social (Cargo efetivo de provimento por concurso público exclusivo da área)? | (iii) | Carreira de comunicação descreve estrutura administrativa, não oferta ou integração de canais digitais |
| 5 | Etic321-Etic328 | A área de comunicação está responsável por quais funções? | (iii) | Mede funções de comunicação, não governo digital |
| 6 | Etic3311-Etic33111 | O governo estadual faz licitações para contratar serviços de comunicação? Quais serviços? | (iii)+(vii) | Mede contratação, não oferta ou integração dos canais; os serviços podem ser executados internamente |
| 7 | Etic33 | O governo estadual faz licitações para contratar serviços de comunicação? | (vii) | Detalhe operacional |
| 8 | Etic341-Etic348 | As contratações são feitas: | (i)+(vii) | Detalhe técnico de modalidade licitatória |
| 9 | Etic361-Etic367 | O orçamento destinado para comunicação é utilizado para: | (vii) | Política interna de alocação orçamentária |
| 10 | Egov0121-Egov0122 | Existe legislação estadual específica que estabeleça procedimentos e providências para garantir o direito de acesso à informação pública em conformidade com a Lei de Acesso à Informação? Local da publicação: | (i) | Detalhe irrelevante (apenas 2 sub-itens) |
| 11 | Egov111-Egov116 | A que secretaria ou setor a área de controle interno está associada ou subordinada: | (vii) | Vinculação administrativa |
| 12 | Egov17 | O governo estadual possui em sua estrutura uma carreira ou cargo específico de auditor/controlador interno ou equivalente (Cargo efetivo de provimento por concurso público exclusivo para a área da controladoria/auditoria)? | (iii) | Carreira do controle interno genérico, não capacidade de governo digital |
| 13 | Egov181-Egov1818 | A atuação, os trabalhos e atividades do controle interno contemplam ações de controle em quais áreas? | (iii) | Áreas do controle interno genérico, não prestação de serviços digitais |
| 14 | Egov191-Egov196 | O sistema de controle interno do estado apresenta atualmente as funções de: | (iii) | Funções de controle interno genérico, não segurança da informação |
| 15 | Egov201-Egov204 | As ações de controle desenvolvidas nos últimos 24 meses são caracterizadas por: | (iii)+(vii) | Temporalidade do controle interno genérico, detalhe operacional que não mede governo digital |
| 16 | Egov211-Egov213 | As ações de controle, nos últimos 24 meses, levaram a alguma comunicação de irregularidade, verificada no âmbito da administração pública, junto ao Tribunal de Contas e/ou Ministério Público? | (iii) | Comunicação de irregularidades a órgãos de controle, não prestação de serviços digitais |
| 17 | Egov221-Egov224 | As ações de controle, nos últimos 24 meses, iniciou ou finalizou: | (iii) | Instauração de processos disciplinares e de responsabilização, não tramitação eletrônica |
| 18 | Egov251-Egov255 | Nos últimos 12 meses, uma ou mais ações de controle levaram à ao menos uma ocorrência de: | (iii) | Sanções e ressarcimentos do controle interno genérico, não capacidade de governo digital |
| 19 | Egov271-Egov274 | Caráter do Conselho: | (vii) | Detalhe operacional do formato |
| 20 | Egov301-Egov303 | O estado realiza capacitação para os membros do Conselho? | (i)+(vii) | Detalhe de implementação |
| 21 | Egov3111-Egov3119 | O estado disponibiliza infraestrutura para o funcionamento do Conselho? Quais? | (vii) | Detalhe operacional de infraestrutura física |
| 22 | Etic221-Etic222 | A conexão via Wi-Fi (Internet sem fio) atende: | (iv) | Pergunta condicionada à existência de Wi-Fi público: as UFs sem a oferta recebem "-", o que infla o indicador ou penaliza duas vezes; a oferta fica medida por `estadic/Etic20` |
| 23 | Etic191-Etic197 | Ações implementadas: | (iv) | Pergunta condicionada à existência de programa de inclusão digital: as UFs sem programa recebem "-", o que infla o indicador ou penaliza duas vezes; o programa fica medido por `estadic/Etic17` |
| 24 | Etic091-Etic092 | Foi desenvolvido software para atender necessidade específica do governo estadual nos últimos 12 meses? | (iii) | Capacidade-meio de produção interna sem âncora em recomendação ENGD; as Recomendações 6.1 e 8.5 favorecem soluções compartilhadas sobre desenvolvimento isolado (mesmo fundamento de `munic/Mtic091`, na Seção A.1) |
| 25 | Egov0621-Egov0623 | O governo estadual disponibiliza informações pormenorizadas sobre sua execução orçamentária e financeira (em atendimento à Lei Complementar 131/2009): Local onde disponibiliza: | (iv) | Escada prática com `estadic/Egov061` (publicar × publicar em tempo real; retido o mais exigente) |
| 26 | Etic131-Etic139 | O governo estadual possui perfil ou conta própria em alguma das seguintes plataformas online: | Saturação | As 27 UFs marcam alguma plataforma e nenhuma marca a alternativa negativa: a variável vale 100 em todas e não separa nenhuma |
| 27 | Etic251 | O estado conta atualmente com: Portal da transparência | Saturação | As 27 UFs respondem Sim; o portal de dados abertos, da mesma pergunta, é a variável ativa `estadic/Etic252`, no Objetivo 5 |

**Resumo:** 12 variáveis por fora do escopo ENGD (iii); 11 por detalhe operacional (vii); 4 por detalhe técnico irrelevante (i); 3 por redundância com variável mais adequada (iv). As menções somam 30 porque 5 das 27 variáveis acumulam dois critérios e 2 não recebem critério da Seção 3.2.1: saem por saturação, com o mesmo valor nas 27 UFs, caso em que o conjunto de dados não publica o indicador.

### Fontes excluídas por medirem indicadores indiretos

O recorte estadual exclui integralmente as fontes cujos dados por UF medem outros atores, e não o governo estadual: a TIC Governo Eletrônico (CETIC.br), cujos recortes por UF agregam prefeituras municipais; o Censo Escolar (INEP), que mede infraestrutura TIC das escolas; e a PNAD Contínua TIC (IBGE), que mede acesso domiciliar e individual à Internet. A remoção é parcialmente compensada pela desagregação do IOSPD, que trouxe cobertura para os Objetivos 3, 4, 5 e 7 no índice estadual.

### Variáveis IOSPD

O IOSPD entra nos índices nacional e estadual. A edição corrente publica 44 critérios individuais, dos quais 40 seguem ativos no índice; os quatro não selecionados estão na Seção A.4. O agregado geral da fonte (Dimensões I a V, com pesos 30/30/10/20/10) e as cinco dimensões (com 12, 12, 6, 8 e 6 critérios) ficam fora do índice, que usa os critérios individuais.

---

## A.3 Variáveis excluídas do índice de capitais

A densidade de banda larga fixa da ANATEL (BLF02) está suspensa em todos os recortes, por falta de denominador domiciliar oficial versionado, e listada na Seção A.1, em "Suspensões por medida não reproduzível". As linhas abaixo identificam as perguntas da MUNIC pelo código da coluna do questionário, e não por código do catálogo.

| Variável | Código | Critério | Justificativa |
|----------|:------:|:--------:|---------------|
| Pessoal TI por vínculo | Mtic071-Mtic078 | (vii) | Detalhe operacional de RH |
| Frequência redes sociais | Mtic15 | (i) | Detalhe técnico; categórica não-binária |
| Canais acompanhamento solicitação | Mtic181-Mtic186 | (iv) | Redundante com canais de protocolo (Mtic171, Mtic172, Mtic174 e Mtic175) |
| Wi-Fi gratuito/cobrado | Mtic23 | (i) | Detalhe de modelo de negócio |
| Cobertura Wi-Fi | Mtic241-Mtic244 | (i) | Detalhe técnico de cobertura |
| Pessoal comunicação por vínculo | Mtic321-Mtic328 | (vii) | Detalhe operacional de RH |
| Carreira comunicação social | Mtic33 | (vii) | Detalhe operacional |
| Funções comunicação | Mtic343-Mtic347 | (vii) | Funções internas genéricas; LAI e LGPD também ficam fora do índice por escopo |
| Licitações comunicação | Mtic35, Mtic3511-Mtic35111 | (vii) | Processo interno de compras |
| Modalidades licitação | Mtic361-Mtic368 | (vii) | Processo interno de compras |
| Canal de TV, rádio ou conteúdo audiovisual | Mtic37 | (vi) | Pergunta que reúne televisão, rádio e conteúdo audiovisual no YouTube ou outra plataforma, sem separar a oferta digital |
| Orçamento comunicação | Mtic381-Mtic387 | (vii) | Detalhe operacional financeiro |
| Consulta prévia (Q12b) | Mtic12b4 | (i) | Detalhe técnico de processo |
| Cadastro fornecedores (Q12b) | Mtic12b5 | (iii) | Fora do escopo de serviço ao cidadão |
| Emissão alvará (Q12b) | Mtic12b7 | (iv) | Redundante com emissão licenças |
| Emissão licenças/certidões (Q12b) | Mtic12b12 | (iv) | Redundante com certidão negativa |
| Parceria doadores equip. (Q21) | Mtic213 | (vii) | Detalhe operacional de parcerias |
| Outras ações inclusão (Q21) | Mtic217 | (v) | Categoria genérica 'outras' |
| Protocolo outro website | Mtic173 | (i) | Detalhe técnico menor |
| Plataformas individuais (FB, IG...) | Mtic131-Mtic138 | (vi) | Plataforma específica; já capturado pela presença em redes sociais (Mtic131-Mtic139) |

## A.4 Perguntas e itens avaliados na pré-seleção

Esta seção individualiza perguntas substantivas e faixas que o inventário corrente mantém fora do índice, sem lhes atribuir o status de variável ativa ou somá-las às exclusões já catalogadas. O inventário completo, com seletores, populações e motivos, está em registro técnico da seleção<!-- metodologia/atualizacao-fontes-2026/decisoes.json -->. Auxiliares físicos, alternativas e contêineres não são exclusões conceituais independentes.

### Perguntas do iGovSISP 2026

- **G106GPC**. 1.1.1.7.1.n. Ainda que não possua PDTIC vigente, são divulgadas justificativas e evidências no Portal de Transparência? (P.ex. Uso de recursos de TI de forma compartilhada com outros órgãos?) Motivo: Pergunta de universo condicionado ou de dependência de fornecedor, sem observação da capacidade positiva sobre a população integral do SISP; sem imputar os órgãos não observados.

- **G161GP**. Há servidores que acumulam atividades em outras áreas de TI? Motivo: Perfil do trabalho, criticidade dos dados ou existência de cobrança; resposta positiva não equivale a melhor governo digital.

- **G331110DI**. Em que grau a instituição considera que a publicação de uma norma formal (decreto, instrução normativa ou instrumento equivalente) seria importante para dar continuidade, iniciar ou fortalecer as práticas de governança de dados? Motivo: Opinião, importância, interesse ou demanda hipotética; não observa capacidade ou implementação existente.

- **G33145DI**. Seu órgão tem necessidade de acessar dados de outros órgãos ou entidades como recebedor de dados para melhorar seus serviços públicos, políticas públicas ou para eficiência administrativa? Motivo: Opinião, importância, interesse ou demanda hipotética; não observa capacidade ou implementação existente.

- **G33147DI**. Outro órgão ou entidade já demonstrou interesse no uso dos dados do seu órgão que ainda não estão disponíveis para compartilhamento? Motivo: Opinião, importância, interesse ou demanda hipotética; não observa capacidade ou implementação existente.

- **G33149DI**. O seu órgão possui iniciativa ou conhece alguma demanda por compartilhamento de dados não abertos, como dados pessoais ou protegidos, com empresas privadas? (ex: dados pessoais, dados de empresa etc) Motivo: Opinião, importância, interesse ou demanda hipotética; não observa capacidade ou implementação existente.

- **G33IPDa**. Se sim, este(s) serviço(s) público(s) utiliza(m), como opções de pagamento, a solução do governo federal chamada de PagTesouro? Motivo: Pergunta de universo condicionado ou de dependência de fornecedor, sem observação da capacidade positiva sobre a população integral do SISP; sem imputar os órgãos não observados.

- **G509CTI**. Sua unidade organizacional possui contrato em vigor com o SERPRO – Serviço Federal de Processamento de Dados? Motivo: Identifica fornecedor contratado; contratar empresa determinada não tem direção normativa de maturidade.

- **G510CTI**. Sua unidade organizacional possui contrato em vigor com a Dataprev? Motivo: Identifica fornecedor contratado; contratar empresa determinada não tem direção normativa de maturidade.

- **G518CTI**. Sua unidade organizacional possui contrato em vigor com a Telebrás? Motivo: Identifica fornecedor contratado; contratar empresa determinada não tem direção normativa de maturidade.

- **G604IPD**. Quão críticos são os dados hospedados em seu centro de dados em relação ao impacto nos serviços ao cidadão do Órgão e/ou Governo? Motivo: Perfil do trabalho, criticidade dos dados ou existência de cobrança; resposta positiva não equivale a melhor governo digital.

- **G632IPDa**. Este aplicativo móvel está cadastrado nas lojas do Google e da Apple utilizando a conta única do governo federal? Motivo: Pergunta de universo condicionado ou de dependência de fornecedor, sem observação da capacidade positiva sobre a população integral do SISP; sem imputar os órgãos não observados.

- **G633IPD**. Algum serviço público do seu órgão possui alguma etapa de cobrança que necessite de pagamento do cidadão? Motivo: Perfil do trabalho, criticidade dos dados ou existência de cobrança; resposta positiva não equivale a melhor governo digital.

- **G642IPDabc**. No contexto das soluções em nuvem adotadas pelo órgão, há serviços, APIs, bancos de dados ou ferramentas proprietárias cuja utilização possam gerar dependência de fornecedor (vendor lock-in)? Motivo: Pergunta de universo condicionado ou de dependência de fornecedor, sem observação da capacidade positiva sobre a população integral do SISP; sem imputar os órgãos não observados.

- **G642IPDe**. Ecossistema: Quão dependente do broker de provedor de nuvem contratado? Motivo: Pergunta de universo condicionado ou de dependência de fornecedor, sem observação da capacidade positiva sobre a população integral do SISP; sem imputar os órgãos não observados.

- **G66126IPD**. Na existência de uma nuvem brasileira (solução nacional de computação em nuvem), conforme o disposto no portal do Projeto Modelo Nuvem Brasileira, seu órgão teria carga de trabalho para hospedagem? Motivo: Opinião, importância, interesse ou demanda hipotética; não observa capacidade ou implementação existente.

### Critérios correntes do IOSPD 2026

- **2.11**. QUAL A PORCENTAGEM DA POPULAÇÃO DO ESTADO COM A CARTEIRA DE IDENTIDADE NACIONAL (CIN)? Motivo: Redundância com o registro administrativo da CIN, retido no índice.

- **3.1**. O FUNCIONAMENTO DO PORTAL ÚNICO/PORTAL DE SERVIÇOS FOI REGULAMENTADO PELO GOVERNO ESTADUAL/DISTRITAL? Motivo: Critério de normatização; a seleção privilegia funcionamento e mantém este critério fora do índice por decisão de 24/11/2026, não por ser agregado compósito.

- **3.2**. OS PRINCÍPIOS PARA GOVERNO DIGITAL E EFICIÊNCIA PÚBLICA FORAM NORMATIZADOS PELO GOVERNO ESTADUAL/DISTRITAL, CONFORME PREVISTO PELA LEI FEDERAL 14.129/2021? Motivo: Critério de normatização; a seleção privilegia funcionamento e mantém este critério fora do índice por decisão de 24/11/2026, não por ser agregado compósito.

- **3.4**. EXISTEM NORMATIVAS (LEIS ESTADUAIS, DECRETOS OU PORTARIAS) QUE ABORDAM OS SEGUINTES TÓPICOS? Motivo: Critério de normatização; a seleção privilegia funcionamento e mantém este critério fora do índice por decisão de 24/11/2026, não por ser agregado compósito.

### Faixas de velocidade da TIC Saúde 2025

- **A5, item A**. Pensando na conexão mais utilizada no seu estabelecimento, em qual das faixas de velocidade que eu vou ler está a velocidade de download contratada nos últimos 12 meses: Acima de 100 Mbps a 300 Mbps Motivo: Faixa da distribuição de velocidades; uma parcela isolada não mede qualidade de forma monotônica e não foi definido corte normativo novo.

- **A5, item B**. Pensando na conexão mais utilizada no seu estabelecimento, em qual das faixas de velocidade que eu vou ler está a velocidade de download contratada nos últimos 12 meses: Acima de 300 Mbps a 500 Mbps Motivo: Faixa da distribuição de velocidades; uma parcela isolada não mede qualidade de forma monotônica e não foi definido corte normativo novo.

- **A5, item C**. Pensando na conexão mais utilizada no seu estabelecimento, em qual das faixas de velocidade que eu vou ler está a velocidade de download contratada nos últimos 12 meses: Acima de 500 Mbps a 1 Gbps Motivo: Faixa da distribuição de velocidades; uma parcela isolada não mede qualidade de forma monotônica e não foi definido corte normativo novo.

- **A5, item D**. Pensando na conexão mais utilizada no seu estabelecimento, em qual das faixas de velocidade que eu vou ler está a velocidade de download contratada nos últimos 12 meses: Acima de 1 Gbps Motivo: Faixa da distribuição de velocidades; uma parcela isolada não mede qualidade de forma monotônica e não foi definido corte normativo novo.

### Famílias e auxiliares físicos

- **munic**: 1 decisões de itens e auxiliares. As perguntas-mãe e as exclusões de famílias permanecem nas seções anteriores; cada chave física, composição e motivo pode ser consultado no inventário.

- **tic_cultura**: 22 decisões de itens e auxiliares. As perguntas-mãe e as exclusões de famílias permanecem nas seções anteriores; cada chave física, composição e motivo pode ser consultado no inventário.

- **tic_domicilios**: 182 decisões de itens e auxiliares. As perguntas-mãe e as exclusões de famílias permanecem nas seções anteriores; cada chave física, composição e motivo pode ser consultado no inventário.

- **tic_educacao**: 53 decisões de itens e auxiliares. As perguntas-mãe e as exclusões de famílias permanecem nas seções anteriores; cada chave física, composição e motivo pode ser consultado no inventário.

- **tic_educacao_professores**: 9 decisões de itens e auxiliares. As perguntas-mãe e as exclusões de famílias permanecem nas seções anteriores; cada chave física, composição e motivo pode ser consultado no inventário.

- **tic_gov**: 63 decisões de itens e auxiliares. As perguntas-mãe e as exclusões de famílias permanecem nas seções anteriores; cada chave física, composição e motivo pode ser consultado no inventário.

- **tic_saude**: 3 decisões de itens e auxiliares. As perguntas-mãe e as exclusões de famílias permanecem nas seções anteriores; cada chave física, composição e motivo pode ser consultado no inventário.

A4 da TIC Educação voltou à seleção no Objetivo 6 com 92,8731% sobre todas as escolas públicas em 2025, em vez dos 98,8843% condicionais às escolas conectadas. A formação em IA dos órgãos e das prefeituras (H3C) e a oferta de formação em IA generativa (H3E) integram o Objetivo 10; capacitação e uso de IA são objetos distintos. Essas inclusões não são mais apresentadas como exclusões.
