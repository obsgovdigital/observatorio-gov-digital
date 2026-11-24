# Anexo A: Variáveis Excluídas

Este anexo consolida as variáveis avaliadas que não foram incorporadas aos índices, com o respectivo motivo de exclusão. Os critérios de exclusão estão descritos na Seção 3.2.1 (Metodologia).

---

## A.1 Variáveis excluídas do índice nacional

O IOSPD (ABEP-TIC) e a ESTADIC (IBGE) entram tanto no índice nacional quanto no estadual, e cada exclusão aparece uma vez só neste anexo. As 60 exclusões do IOSPD estão na Seção A.2 e valem também para o índice nacional. As 27 exclusões da ESTADIC estão na Seção A.2 e valem também para o índice nacional.

### Saturação (variância zero ou quase zero)

| Variável | Fonte | Descrição | Motivo | Ação futura |
|----------|-------|-----------|--------|-------------|
| A4 | TIC Governo Eletrônico (CETIC.br) | Esse órgão público/Esta prefeitura usou a Internet nos últimos 12 meses? | Medida junto ao teto: as observações de 2023 variam de 99,53% a 100% | Mantida como série descritiva (pergunta-filtro de percentuais condicionais) |
| A4 | TIC Educação (CETIC.br) | A escola tem Wi-Fi? | Excluída: mede rede sem fio apenas entre escolas com Internet, junto ao teto (98,9% no total condicional) | Mantida como série descritiva |

### Variáveis multi-item excluídas (5)

Variáveis com múltiplos sub-itens cujos sub-itens representam detalhes técnicos já capturados por variável parent, ou que medem comportamento do cidadão (demanda) e não capacidade do governo (oferta). Ver Seção 3.2.3 da Metodologia.

| Variável | Fonte | Descrição | Motivo | Ação futura |
|----------|-------|-----------|--------|-------------|
| G2 | TIC Domicílios (CETIC.br) | Tipos de serviço público acessado online (7 sub-itens A-G) | Variável de demanda (cidadão), não de oferta. Oferta já coberta por C6B, C1. | Sem ação prevista |
| C9B | TIC Governo Eletrônico (CETIC.br) | Formas de cadastro ou login exigidas para acessar serviços online | Apenas o item A (login único Gov.br) integra o índice; login estadual, login do próprio ente, rede social e "Outro" permanecem descritivos, porque exigir qualquer cadastro não comprova maturidade de identidade digital | Sem ação prevista |
| E3E | TIC Governo Eletrônico (CETIC.br) | Finalidades de uso de redes sociais (6 sub-itens A-F) | Detalhe técnico; o relevante é usar redes sociais, não para quê | Avaliar inclusão de E3 (usa redes sociais?) como parent binária |
| H1A | TIC Governo Eletrônico (CETIC.br) | Fontes de big data (5 sub-itens A-E) | Detalhe técnico; H1 já captura "fez big data?" | Sem ação prevista |
| H3A | TIC Governo Eletrônico (CETIC.br) | Aplicações de IA (7 sub-itens A-G) | Detalhe técnico; H3 já captura "usou IA?" | Sem ação prevista |

### Variáveis multi-item desmembradas

Variáveis com sub-itens fundamentalmente diferentes que foram desmembradas em variáveis individuais. As entradas parent foram removidas do índice e substituídas pelas entradas individuais; as que ficaram com mais de um item contam juntas como bateria (um único componente; ver Seções 3.2.3 e 3.3.4 da Metodologia), e a C7 ficou só com o item A.

| Variável | Fonte | Sub-itens ativos | Novas variáveis | Objetivo |
|----------|-------|:---------------:|:---------------:|:--------:|
| C6B | TIC Governo Eletrônico (CETIC.br) | 5 (A-E) | Bateria de recursos móveis, com os itens A a E; o item F, "Outro", não nomeia um recurso definido e permanece descritivo | 2 |
| E1 | TIC Governo Eletrônico (CETIC.br) | 7 | Bateria de sete formas de contato, cada uma identificada pelo conteúdo do item, e não pela letra, porque as letras divergem entre os questionários de órgãos e de prefeituras | 2 |
| C7 | TIC Governo Eletrônico (CETIC.br) | 1 (A) | Item A, centros públicos de acesso gratuito; o item B, Wi-Fi gratuito em áreas públicas, foi excluído por redundância com a MUNIC (ver adiante) | 6 |
| G3 | TIC Governo Eletrônico (CETIC.br) | 5 | Bateria LGPD; os itens C e D dos órgãos não existem para as prefeituras, e o item C das prefeituras, sobre documento que define papéis e responsabilidades na LGPD, é variável própria | 4 |
| A12 | TIC Saúde (CETIC.br) | 5 (A-E) | Bateria LGPD dos estabelecimentos de saúde, com os itens A a E | 4 |
| B4 | TIC Governo Eletrônico (CETIC.br) | 5 (H-L) | Bateria de sistemas administrativos apenas nas prefeituras; os sete itens A a G foram arquivados, e os cinco restantes perderam a observação em órgãos | 8 |
| B8 | TIC Governo Eletrônico (CETIC.br) | Nenhum item corrente | A pergunta foi retirada; os seis conceitos anteriores estão arquivados | 1 |
| F2C | TIC Governo Eletrônico (CETIC.br) | 6 (A-F) | Bateria de monitoramento setorial; o contêiner não duplica os itens | 6 |
| H7 | TIC Educação (CETIC.br) | 7 (C-I) | Bateria de formação continuada dos professores; o contêiner não duplica os itens | 10 |

Os percentuais condicionados dos itens ativos são recalculados sobre a população inteira, conforme a Seção 3.2.4. Os contêineres permanecem excluídos para evitar duplicação.

### Suspensões por medida não reproduzível

Indicadores retirados do índice porque o valor nacional não pode ser reproduzido a partir de dados oficiais publicados. Retornam quando a fonte publicar os insumos necessários.

| Variável | Fonte | Descrição | Motivo | Condição de retorno |
|----------|-------|-----------|--------|---------------------|
| B10, C5 (Lista de produtos ou serviços vendidos ou oferecidos gratuitamente pela instituição), C15B, D1, D2, D4B, E1A, E5C1 | TIC Cultura (CETIC.br) | Wi-Fi gratuito ao público; lista de produtos ou serviços no website; inscrição ou venda de ingressos online; posse de acervo; digitalização do acervo; disponibilização de conteúdo digital na Internet; uso de inteligência artificial; responsável pela proteção de dados (LGPD) | A planilha oficial de 2024 não publica total nacional; o valor antes divulgado era média simples não ponderada entre os sete tipos de equipamento cultural. No caso de D1, possuir acervo é ainda condição institucional, não capacidade digital | Total oficial, pesos amostrais ou microdados |
| BLF02 | ANATEL | Densidade de acessos de banda larga fixa por 100 domicílios | O denominador domiciliar não provinha de fonte oficial versionada nem de fórmula reproduzível | Numerador e denominador oficiais versionados (ANATEL + IBGE) |

### Substituições de identidade

Casos em que a variável anterior foi aposentada e o conceito passou a ser medido por outra identidade do catálogo.

| Variável anterior | Fonte | O que mudou |
|-------------------|-------|-------------|
| C9A | TIC Governo Eletrônico (CETIC.br) | A pergunta media a exigência de qualquer login ou cadastro, sem direção monotônica de qualidade; a adoção de identidade digital passou a ser medida pelo item A da aba C9B (uso do login único Gov.br) |
| Etic241-Etic244 | ESTADIC (IBGE) | Variável composta que reunia as quatro colunas, decomposta nas quatro perguntas oficiais do questionário, cada uma variável própria e todas ativas |
| F3A | TIC Governo Eletrônico (CETIC.br) | Decomposto em quatro itens (bilhete eletrônico, GPS em ônibus, iluminação conectada e semáforos controlados à distância), mantidos fora do índice por duplicarem os indicadores `munic/Mtic261`, `munic/Mtic262`, `munic/Mtic264` e `munic/Mtic265`, medidos pela MUNIC 2024 com cobertura censitária e recorte de capitais |
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
| C5 | TIC Governo Eletrônico (CETIC.br) | Recursos multimídia no website (áudio/vídeo/lives, 3 sub-itens A-C) | Mede produção de conteúdo multimídia, não a oferta ou qualidade de serviços digitais ao cidadão; fora do escopo do Obj 2 (Qualidade dos Serviços Digitais) | Sem ação prevista |
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

A revisão de redundância conduzida em junho de 2026 aplicou cinco critérios, na ordem: entre duas medidas do mesmo objeto, fica a censitária e mais atual; entre degraus logicamente encaixados da mesma prática, fica o mais geral; entre degraus práticos de exigência, fica o mais exigente; entre pergunta guarda-chuva e seus detalhamentos, fica o guarda-chuva; entre prática em funcionamento e prática apenas normatizada, fica o funcionamento. A tabela abaixo lista as 33 variáveis que seguem excluídas por redundância: 32 dessa revisão e uma da rodada anterior da mesma auditoria. Essa rodada anterior excluiu os subíndices compostos do iESGo (listados na seção anterior) e `igovsisp/G106GPM`, a variável dela que está na tabela. Das outras exclusões da revisão de junho, as do IOSPD e da ESTADIC estão na Seção A.2, com as demais dessas fontes, e as quatro do iGovSISP, na seção seguinte, com outro fundamento.

O quinto critério merece registro à parte. Ele decide qual lado de um par manter, e não constata que os dois lados meçam a mesma coisa: a auditoria de redundância conceitual examinou os três pares a que ele se aplica (`iospd/I.10` com `iospd/III.5`, `iospd/I.1` com `iospd/III.3` e `iospd/I.9` com `iospd/III.4`) e concluiu, em cada um, que normatizar uma prática e mantê-la em funcionamento são objetos distintos, de modo que não há redundância entre eles. Duas das três variáveis do lado normatizado, `iospd/III.5` e `iospd/III.3`, seguem fora do índice por decisão da rodada de junho, que preferiu medir o funcionamento, e não porque duplicassem o que já se media. Estão listadas na Seção A.2, com as demais exclusões do IOSPD. A terceira, `iospd/III.4`, voltou ao índice em novembro de 2026: a Recomendação 3.6 exige a regulamentação do uso de assinaturas eletrônicas como dever próprio, e a variável é a única medida dele (Anexo B).

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
| H3C | TIC Governo Eletrônico (CETIC.br) | Algum dos funcionários da área ou departamento de TI participou de alguma capacitação, curso ou treinamento sobre Inteligência Artificial? | Aprofundamento do geral tic_gov/H3 (a capacitação da equipe de TI em IA é detalhe do tema de IA; retido o geral) |
| Mtic251 | MUNIC (IBGE) | A prefeitura, nos últimos 12 meses, realizou pela internet: Consulta pública online para que cidadãos possam enviar contribuições para leis, orçamentos e planos | Item específico do guarda-chuva munic/Mtic251-Mtic255 (retido o geral) |
| Mtic253 | MUNIC (IBGE) | A prefeitura, nos últimos 12 meses, realizou pela internet: Enquete online sobre assuntos de interesse da prefeitura | Item específico do guarda-chuva munic/Mtic251-Mtic255 (retido o geral) |
| Mtic252 | MUNIC (IBGE) | A prefeitura, nos últimos 12 meses, realizou pela internet: Grupos de discussão como fóruns ou comunidades pela internet | Item específico do guarda-chuva munic/Mtic251-Mtic255 (retido o geral) |
| Mtic254 | MUNIC (IBGE) | A prefeitura, nos últimos 12 meses, realizou pela internet: Votação online para orientar a tomada de decisão sobre políticas públicas, orçamento, etc. | Item específico do guarda-chuva munic/Mtic251-Mtic255 (retido o geral) |
| D5A | TIC Cultura (CETIC.br) | E o(a) (NOME DA INSTITUIÇÃO) disponibiliza esses materiais em formato digital [...]? | Par empírico r_niv=+0,98 com tic_cultura/D8 ('remover ambas') e sobreposição com D4B |
| S07001 | PNAD Contínua TIC (IBGE) | Nos últimos três meses utilizou a Internet em algum local local (domicílio, local de trabalho, escola, centro de acesso gratuito ou pago, domicílio de outras pessoas ou qualquer outro local) por meio de microcomputador, tablet, telefone móvel celular, televisão ou outro equipamento? | Par empírico r_niv=+0,99 com pnad_tic/S01029 (retida a medida domiciliar) |
| B5 | TIC Cultura (CETIC.br) | O(A) (NOME DA INSTITUIÇÃO) usou a Internet nos últimos 12 meses? | Par empírico r_niv=+1,00 com tic_cultura/B10 (retido B10 por proximidade temática) |
| TP_REDE_LOCAL | Censo Escolar (INEP) | Rede local de interligação de computadores | Pares empíricos com IN_INTERNET_APRENDIZAGEM (r_niv de 0,99) e tic_educacao/B1 (r_niv de -0,93) ('remover wi-fi') |
| B1 | TIC Educação (CETIC.br) | Essa escola possui [...]? E [...]? | Redundância clara com censo_escolar/IN_COMPUTADOR (censo INEP retido) (seção 1) |
| A1 | TIC Educação (CETIC.br) | Esta escola possui acesso à Internet? | Redundância clara com censo_escolar/IN_INTERNET (censo INEP retido) (seção 1) |
| F2A | TIC Governo Eletrônico (CETIC.br) | Neste município existe um Centro de Operações para monitoramento de situações como trânsito, segurança ou emergência? | Redundância clara com munic/Mtic263 (censo IBGE 2024 retido) (seção 1) |
| C7 (Conexão Wi-Fi gratuita em áreas públicas do município, como praças e parques) | TIC Governo Eletrônico (CETIC.br) | A prefeitura disponibilizou aos cidadãos nos últimos 12 meses: Acesso à Internet através de conexão Wi-Fi gratuita em áreas públicas do município, como praças, parques etc. | Redundância clara com munic/Mtic22 (censo IBGE 2024 retido) (seção 1) |
| C6B (Outro) | TIC Governo Eletrônico (CETIC.br) | Órgãos: Este órgão público disponibilizou os seguintes recursos para o cidadão por meio celular ou smartphones, nos últimos 12 meses? Algum outro? Prefeituras: Esta prefeitura disponibilizou os seguintes recursos para o cidadão por meio de celular ou smartphones nos últimos 12 meses? Algum outro? | Item "Outro" da bateria de recursos móveis: não nomeia um recurso definido e permanece descritivo, sem peso na bateria; os itens A a E da aba voltaram ao índice |

### Identidade e pertinência das perguntas do iGovSISP

A conferência do questionário oficial de 2025 fundamenta 14 novas exclusões editoriais. Outras quatro variáveis permanecem excluídas, mas por conteúdo sem vínculo substantivo demonstrado, não pelas relações de redundância antes atribuídas a elas. A procedência da primeira exclusão permanece histórica; esta tabela apresenta o fundamento vigente. Excluir do índice não apaga as observações da fonte.

| Variável | Fonte | Pergunta | Fundamento |
|---|---|---|---|
| G106GPF | iGovSISP (SGD/MGI) | O órgão possui formas ou mecanismos para monitorar as ações do PDTIC vigente? | Rotina de acompanhamento do PDTIC sem vínculo substantivo demonstrado com governo digital. Não é absorvida por uma medida de execução geral do plano. |
| G106GPJ | iGovSISP (SGD/MGI) | O CGD acompanhou a execução de ações e contratações do Plano de Metas e Ações, inclusive quanto a resultados intermediários e efetivo atendimento das necessidades priorizadas no PDTIC? | Rotina de acompanhamento do PDTIC sem vínculo substantivo demonstrado com governo digital. Não é absorvida por uma medida de execução geral do plano. |
| G106GPK | iGovSISP (SGD/MGI) | O CGD aprovou e acompanhou o plano de monitoramento, o plano de avaliação, o relatório de acompanhamento e o relatório de resultados do PDTIC? | Rotina de acompanhamento do PDTIC sem vínculo substantivo demonstrado com governo digital. Não é absorvida por uma medida de execução geral do plano. |
| G106GPS | iGovSISP (SGD/MGI) | Em conformidade com a Estratégia Federal de Governo Digital (Decreto nº 12.198/2024), que exige a inclusão de ações de acessibilidade no Plano de Transformação Digital (PTD), o PDTIC do órgão ou seu PTD equivalente estabelece metas formais, com indicadores e prazos definidos, para assegurar a plena acessibilidade de seus portais, aplicativos e demais serviços digitais? | A pergunta aceita metas no PDTIC ou em PTD equivalente. A fonte registra 77 respostas a partir do terceiro estágio entre 202 respondentes (38,12%) e não informa se os 32 órgãos fora do bloco tinham metas em um PTD. |
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

### Conceitos arquivados na atualização das fontes

Os 16 conceitos abaixo deixam o cálculo porque a fonte os retirou ou substituiu: 15 da TIC Governo Eletrônico e um da TIC Educação. O arquivo do catálogo preserva o enunciado, a edição e os valores anteriores; nenhum valor anterior é carregado para a edição corrente.

| Variável | Fonte | Pergunta | Motivo |
|---|---|---|---|
| `B4` (Recursos humanos) | TIC Governo Eletrônico (CETIC.br) | Nos últimos 12 meses, este órgão público/esta prefeitura utilizou algum sistema para: Recursos humanos | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `B4` (Patrimônio) | TIC Governo Eletrônico (CETIC.br) | Nos últimos 12 meses, este órgão público/esta prefeitura utilizou algum sistema para: Patrimônio | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `B4` (Orçamento) | TIC Governo Eletrônico (CETIC.br) | Nos últimos 12 meses, este órgão público/esta prefeitura utilizou algum sistema para: Orçamento | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `B4` (Finanças e contabilidade) | TIC Governo Eletrônico (CETIC.br) | Nos últimos 12 meses, este órgão público/esta prefeitura utilizou algum sistema para: Finanças e contabilidade | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `B4` (Compras) | TIC Governo Eletrônico (CETIC.br) | Nos últimos 12 meses, este órgão público/esta prefeitura utilizou algum sistema para: Compras | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `B4` (Convênios) | TIC Governo Eletrônico (CETIC.br) | Nos últimos 12 meses, este órgão público utilizou algum sistema para: Convênios | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `B4` (Contratos) | TIC Governo Eletrônico (CETIC.br) | Nos últimos 12 meses, este órgão público/esta prefeitura utilizou algum sistema para: Contratos | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `B7` | TIC Governo Eletrônico (CETIC.br) | Este órgão público possui Comitê ou Conselho Diretivo, de Estratégia ou de Governança de TI? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `B8` (Gestão de riscos) | TIC Governo Eletrônico (CETIC.br) | Este órgão público possui processos de: Gestão de riscos de TI | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `B8` (Gestão de contratos) | TIC Governo Eletrônico (CETIC.br) | Este órgão público possui processos de: Gestão de contratos de TI | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `B8` (Acompanhamento de projetos) | TIC Governo Eletrônico (CETIC.br) | Este órgão público possui processos de: Acompanhamento de projetos de TI | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `B8` (Tratamento de incidentes) | TIC Governo Eletrônico (CETIC.br) | Este órgão público possui processos de: Tratamento de incidentes/problemas | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `B8` (Gerenciamento de serviços) | TIC Governo Eletrônico (CETIC.br) | Este órgão público possui processos de: Gerenciamento de serviços de TI | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `B8` (Gestão de infraestrutura em tecnologia da informação) | TIC Governo Eletrônico (CETIC.br) | Este órgão público possui processos de: Gestão de infraestrutura em TI | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `C8` | TIC Governo Eletrônico (CETIC.br) | Esta prefeitura realizou pregão eletrônico nos últimos 12 meses? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `E1A` | TIC Educação (CETIC.br) | A escola utiliza algum sistema ou programa para realizar o controle de matrícula, para lançar as notas e a frequência dos alunos ou preencher o diário online? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |


## A.2 Variáveis excluídas do índice estadual

### Variáveis ESTADIC excluídas (27)

Das 54 variáveis ESTADIC catalogadas, 27 foram excluídas e 27 permanecem ativas. Uma chave composta de inovação foi aposentada e decomposta nas quatro perguntas oficiais do questionário, todas ativas (ver "Substituições de identidade" na Seção A.1). A ESTADIC entra também no índice nacional, e as 27 exclusões, listadas abaixo com o código da coluna na base de dados do IBGE e o critério da Seção 3.2.1 ou, nas duas que saem por saturação, essa indicação, valem para os dois índices. Duas delas (`estadic/Etic221-Etic222` e `estadic/Etic191-Etic197`) saíram por salto condicional (ver Seção 3.3.5), e `estadic/Egov0621-Egov0623`, na revisão de redundância de junho de 2026 (ver Seção A.1).

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

### Variáveis IOSPD excluídas (60)

O IOSPD entra nos índices nacional e estadual, e as 60 exclusões abaixo valem para os dois. A edição corrente publica 44 critérios individuais, dos quais 40 seguem ativos no índice. O catálogo preserva 13 exclusões anteriores (seis compósitos e sete critérios individuais) e 47 critérios que foram retirados ou substituídos pela fonte na atualização corrente. A primeira tabela documenta as 13 exclusões anteriores, com o objeto e o fundamento da decisão à época; a segunda lista os 47 critérios arquivados. As identidades antigas não recebem valores da edição corrente.

| Variável | Fonte | Descrição | Motivo |
|----------|-------|-----------|--------|
| IOSPD_GERAL | IOSPD (ABEP-TIC) | Pontuação geral das Dimensões I a IV, calculada pelo Observatório como no ranking geral da fonte | Compósito histórico das Dimensões I a IV; na seleção anterior, 52 indicadores individuais publicados renderam 47 ativos. A edição corrente usa apenas critérios individuais novos |
| IOSPD_DIM1 | IOSPD (ABEP-TIC) | Dimensão Capacidades (compósito I.1 e I.3-I.13) | Compósito de 12 indicadores, desagregados individualmente |
| IOSPD_DIM2 | IOSPD (ABEP-TIC) | Dimensão Serviços (compósito II.1-II.12) | Compósito de 12 indicadores, desagregados individualmente |
| IOSPD_DIM3 | IOSPD (ABEP-TIC) | Dimensão Normatização (compósito III.1a-d + III.2-III.7) | Compósito de 10 indicadores, desagregados individualmente |
| IOSPD_DIM4 | IOSPD (ABEP-TIC) | Dimensão Linguagem Simples (compósito IV.1-IV.9) | Compósito de 9 indicadores, desagregados individualmente |
| IOSPD_DIM5 | IOSPD (ABEP-TIC) | Dimensão Inovação (compósito V.1-V.9) | Compósito de 9 indicadores, desagregados individualmente |
| I.2 | IOSPD (ABEP-TIC) | Percentual de uso da plataforma única (I.2) | Fora da conta oficial de 2025: a ABEP-TIC anulou o critério |
| II.7 | IOSPD (ABEP-TIC) | Possui solicitação online da 2ª via de Carteira de Identidade (RG)? | A ABEP-TIC anulou o critério e deu a pontuação máxima às 27 UFs, inclusive às sete que declararam não oferecer o serviço: o indicador vale 10 em todas e não registra a oferta |
| III.1 | IOSPD (ABEP-TIC) | Regulamentação pilares Lei 13.460/2017 (III.1) | Fora da conta oficial de 2025: pergunta-mãe de III.1a-d, que pontuam sozinhos |
| III.3 | IOSPD (ABEP-TIC) | O funcionamento do Portal Único/Portal de Serviços foi regulamentado pelo Governo Estadual/Distrital (Ex.: Decreto Federal 9.756/2019)? | Lado normatizado do par com `iospd/I.1`, na revisão de redundância de junho de 2026 (priorizado o funcionamento; ver o quinto critério na Seção A.1) |
| III.5 | IOSPD (ABEP-TIC) | Princípios para Governo Digital e Eficiência Pública foram normatizados pelo Governo Estadual/Distrital, conforme previsto pela Lei Federal 14.129/2021 (Governo Digital e Eficiência Pública)? | Lado normatizado do par com `iospd/I.10`, na revisão de redundância de junho de 2026 (priorizado o funcionamento; ver o quinto critério na Seção A.1) |
| I.13 | IOSPD (ABEP-TIC) | Possui Portal específico para a disponibilização de Dados Abertos? | Mesmo objeto de `estadic/Etic252` na visão estadual (retido o ESTADIC, mais geral), na revisão de redundância de junho de 2026 |
| V.7 | IOSPD (ABEP-TIC) | A UF disponibiliza a emissão da nova CIN - Carteira de Identidade Nacional? | Mesmo objeto de `cin/atingimento_meta_cin`, medido por registro administrativo das carteiras emitidas (retida a CIN); a V.7 nega a emissão em cinco UFs que a base registra emitindo |

**Emissão da Carteira de Identidade Nacional.** A entrada da base de dados da Carteira de Identidade Nacional no índice, com a variável `cin/atingimento_meta_cin`, retira pelo critério (iv) da Seção 3.2.1 a pergunta do IOSPD que media a mesma emissão. As duas observam o mesmo objeto, a emissão da CIN pela unidade da federação, por caminhos distintos: o IOSPD registra se a avaliação do portal estadual encontrou a oferta, e a base da CIN registra as carteiras de fato emitidas. Onde os dois divergem, o índice segue o registro administrativo. A V.7 vale 0 em Alagoas, Bahia, Pará, Rio Grande do Norte e Tocantins, e a base da CIN mostra as cinco emitindo desde 2023 ou 2024, com 38,4; 29,5; 4,4; 37,0 e 29,9 carteiras por cem habitantes em agosto de 2026. As cinco emitiram ao longo de 2025, ano da edição anterior do IOSPD usada nessa comparação; o Pará, com a menor cobertura, emitiu 145.247 carteiras naquele ano.

---

**Critérios anteriores do IOSPD arquivados (47)**

A edição corrente reorganizou os critérios e publicou identidades novas. Os critérios anteriores abaixo permanecem no catálogo como excluídos, com o histórico preservado, sem transferência automática de pontuação para critérios de objeto diferente.

| Variável | Fonte | Pergunta | Motivo |
|---|---|---|---|
| `I.1` | IOSPD (ABEP-TIC) | Possui um Portal Único ou um Portal de Serviços disponível ao usuário? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `I.3` | IOSPD (ABEP-TIC) | Possui sistema unificado de agendamento DIGITAL de serviços? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `I.4` | IOSPD (ABEP-TIC) | Possui metodologia e ferramenta de avaliação da satisfação dos usuários em relação aos serviços públicos prestados? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `I.5` | IOSPD (ABEP-TIC) | A UF possui estrutura colegiada de governança de dados, ampla, instituída formalmente e ativa? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `I.6` | IOSPD (ABEP-TIC) | Possui gestão de cadastro e perfil do cidadão pelo usuário? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `I.7` | IOSPD (ABEP-TIC) | A manifestação de ouvidoria pode ser feita pelo Portal Único/Portal de Serviços de forma integrada com a mesma sessão/login? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `I.8` | IOSPD (ABEP-TIC) | Possui serviço online para receber e tratar solicitações de simplificação de serviços (Ex.: Simplifique – Governo Federal)? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `I.9` | IOSPD (ABEP-TIC) | Utiliza solução de assinatura eletrônica corporativa própria ou do Gov.br? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `I.10` | IOSPD (ABEP-TIC) | Possui Estratégia de Governo Digital válida e em funcionamento para 2025? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `I.11` | IOSPD (ABEP-TIC) | O Quadro Geral ou as Cartas de Serviços Estaduais/Distrital estão integrados à Base Nacional de Serviços Públicos, com serviços disponíveis na busca de serviços geral e por estado do Portal Gov.br? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `I.12` | IOSPD (ABEP-TIC) | O Portal de Governo possui ferramenta DIGITAL integrada de solicitação de atendimento, de acompanhamento da entrega e avaliação dos serviços públicos, notificação e possibilidade de pagamento? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `II.1` | IOSPD (ABEP-TIC) | Possui rematrícula online nas escolas estaduais? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `II.2` | IOSPD (ABEP-TIC) | Possui serviço de solicitação de medicamento de alto custo, 100% digital? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `II.3` | IOSPD (ABEP-TIC) | Possui tele-atendimento para serviços de saúde por videoconferência para o cidadão? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `II.4` | IOSPD (ABEP-TIC) | Possui prova de vida online para servidores, aposentados e pensionistas? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `II.5` | IOSPD (ABEP-TIC) | Possui funcionalidade de apresentação de recurso e defesa online para infrações de trânsito em âmbito estadual? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `II.6` | IOSPD (ABEP-TIC) | Possui registro digital de reclamação do cidadão referente ao Código de Defesa do Consumidor? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `II.8` | IOSPD (ABEP-TIC) | Possui Boletim de Ocorrência online de VIOLÊNCIA DOMÉSTICA ou CONTRA A MULHER? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `II.9` | IOSPD (ABEP-TIC) | Possui consulta online dos MEDICAMENTOS DISPONÍVEIS na rede estadual de saúde? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `II.10` | IOSPD (ABEP-TIC) | Possui emissão e envio de RECEITA online para PRESCRIÇÃO MÉDICA ao cidadão na rede estadual de saúde? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `II.11` | IOSPD (ABEP-TIC) | Possui solicitação e emissão online de DIPLOMAS DO ENSINO MÉDIO nas escolas da rede estadual de educação? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `II.12` | IOSPD (ABEP-TIC) | Possui TRANSFERÊNCIA ONLINE de alunos entre escolas da rede estadual? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `III.1a` | IOSPD (ABEP-TIC) | A Carta de Serviços ao Usuário foi normatizada pelo Governo Estadual/Distrital, conforme previsto no Art. 7º, §5 (Carta de Serviços ao Usuário) da Lei Federal 13.460/2017 (Código de Defesa do Usuário do Serviço Público)? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `III.1b` | IOSPD (ABEP-TIC) | A criação de Ouvidorias Públicas foi normatizado pelo Governo Estadual/Distrital, conforme previsto no Art. 17 (Ouvidorias Públicas) da Lei Federal 13.460/2017 (Código de Defesa do Usuário) do Serviço Público)? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `III.1c` | IOSPD (ABEP-TIC) | O Conselho de Usuários do Serviço Público foi normatizado pelo Governo Estadual/Distrital, conforme previsto no Art. 22 (Conselho de Usuários do Serviço Público) da Lei Federal 13.460/2017 (Código de Defesa do Usuário do Serviço Público)? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `III.1d` | IOSPD (ABEP-TIC) | O processo de Avaliação dos Serviços Públicos foi normatizado pelo Governo Estadual/Distrital, conforme previsto no Art. 24o (Avaliação dos Serviços Públicos) da Lei Federal 13.460/2017 (Código de Defesa do Usuário do Serviço Público)? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `III.2` | IOSPD (ABEP-TIC) | A criação de Grupos Setoriais de Trabalho para Desburocratização e Simplificação foi regulamentado via Decreto no Governo Estadual/Distrital, conforme previsto no Art. 5º da Lei Federal 13.726/2018 (Grupos Setoriais de Trabalho para Desburocratização e Simplificação)? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `III.4` | IOSPD (ABEP-TIC) | O uso de assinaturas eletrônicas em interações com entes públicos foi normatizada pelo Governo Estadual/Distrital, conforme previsto pela Lei Federal 14.063/2020 (Assinaturas Eletrônicas)? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `III.6` | IOSPD (ABEP-TIC) | Possui Laboratório de Inovação em Governo? [Lei Federal 14.129/2021 - Art. 44º e 45º] | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `III.7` | IOSPD (ABEP-TIC) | A UF possui Portal Único ou de Serviços com funcionalidade de consentimento para LGPD? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `IV.1` | IOSPD (ABEP-TIC) | O texto utiliza tempos verbais na 2a ou 3a pessoa do singular? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `IV.2` | IOSPD (ABEP-TIC) | As frases dos textos são curtas e indicam uma única ação? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `IV.3` | IOSPD (ABEP-TIC) | O Título é objetivo e curto? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `IV.4` | IOSPD (ABEP-TIC) | O texto tem parágrafos curtos? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `IV.5` | IOSPD (ABEP-TIC) | O texto utiliza o tempo presente do verbo? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `IV.6` | IOSPD (ABEP-TIC) | O texto utiliza caracteres especiais? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `IV.7` | IOSPD (ABEP-TIC) | O vocabulário está de fácil entendimento? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `IV.8` | IOSPD (ABEP-TIC) | Na metodologia utilizada para descrição ou apresentação dos serviços digitais há descrição de como fazer a aplicação da técnica de Linguagem Simples? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `IV.9` | IOSPD (ABEP-TIC) | Possui mecanismos para o cidadão pedir melhoria na apresentação dos serviços? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `V.1` | IOSPD (ABEP-TIC) | A UF disponibiliza aplicativo móvel para acesso ao portal único ou portal de serviço, capaz de enviar notificações personalizadas e acompanhamento dos serviços pelo cidadão? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `V.2` | IOSPD (ABEP-TIC) | A UF utiliza ciência de dados, inteligência artificial ou algoritmo em algum serviço público disponível ao cidadão? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `V.3` | IOSPD (ABEP-TIC) | A UF possui opções de pagamentos de serviços disponíveis aos cidadãos através de PIX e/ou Cartão de Crédito? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `V.4` | IOSPD (ABEP-TIC) | A UF possui plataforma de governo, portal de serviços ou portal único, que disponibiliza um ambiente personalizado, onde o cidadão, após identificação, acessa serviços, notificações e informações adaptadas ao seu perfil e históricos de interações com o governo? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `V.5` | IOSPD (ABEP-TIC) | A UF possui consulta da situação do licenciamento de veículo com opção de pagamento eletrônico? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `V.6` | IOSPD (ABEP-TIC) | A UF possui um serviço online para emitir Certidão Negativa Estadual? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `V.8` | IOSPD (ABEP-TIC) | A UF possui Transferência Digital de Veículos por meio do site, portal único ou aplicativo do Governo? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |
| `V.9` | IOSPD (ABEP-TIC) | A UF possui plataforma de serviços digitais, portal único ou portal de serviços adaptado para proporcionar acessibilidade a surdos e pessoas com deficiência visual, em conformidade com as legislações vigentes, Lei nº 13.146/2015 e padrões de acessibilidade (eMAG, W3C)? | Conceito retirado ou substituído na edição corrente; identidade, edição e valores anteriores preservados no arquivo do catálogo. |


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
