# 5. Objetivo 2: Qualidade dos Serviços Digitais

> Aprimorar a qualidade dos serviços públicos com abordagem inclusiva, acessível, proativa e em canais integrados de atendimento, com atenção à experiência dos usuários.

A metodologia (normalização, agregação, tratamento de não-resposta) está descrita no Capítulo 3.

## 5.1 Recomendações da ENGD para este objetivo

A Portaria SGD/MGI nº 5.395/2026 elenca nove recomendações aos entes federados para aprimorar a qualidade dos serviços públicos digitais:

- **2.1** Desenhar serviços com linguagem simplificada, acessibilidade e jornada personalizada, aprimorando a experiência do usuário, com prioridade para populações vulneráveis, adotando a abordagem de eventos de vida do cidadão e assegurando que informações já disponíveis em bases governamentais não sejam novamente solicitadas.
- **2.2** Implementar ações de melhoria dos serviços públicos prestados, com base nos resultados da avaliação de satisfação e pesquisa direta com os usuários dos serviços, usando indicadores e modelagens padronizadas.
- **2.3** Disponibilizar serviços em canais digitais, preferencialmente por meio de autosserviço, e sem prejuízo do direito a atendimento presencial.
- **2.4** Integrar os canais digitais de prestação de serviços públicos e de comunicação, preferencialmente consolidando portais e aplicativos de dispositivos móveis, promovendo a integração de serviços de diferentes entes federados em uma experiência unificada para o cidadão.
- **2.5** Integrar os serviços públicos em diversidade de canais digitais e físicos, dispondo de canais de atendimento presencial para demandas não resolvidas plenamente pelos serviços públicos digitais, com investigação acerca das dificuldades e barreiras na prestação de serviços.
- **2.6** Desenvolver e implementar serviços públicos proativos, nos quais o governo, com base em dados e eventos de vida, notifique e ofereça automaticamente serviços e benefícios ao cidadão, eliminando a necessidade de solicitação prévia pelo usuário, respeitados a legislação de proteção de dados pessoais e o consentimento do titular.
- **2.7** Integrar os canais de atendimento físicos e digitais, assegurando que sejam acessíveis, adequados às necessidades do público e capazes de oferecer respostas efetivas às demandas.
- **2.8** Promover a criação de pontos únicos de atendimento digital (balcão único) para serviços que envolvam múltiplos entes federados, de forma que o cidadão realize uma única solicitação e que a orquestração entre os entes ocorra de forma automatizada, transparente e com interoperabilidade.
- **2.9** Adotar, como padrão na oferta de serviços públicos digitais, soluções web responsivas e progressivas, acessíveis em qualquer dispositivo sem necessidade de instalação, reservando o desenvolvimento de aplicativos nativos aos casos em que haja justificativa técnica ou funcional que o exija.

## 5.2 Cobertura por nível federativo

O Objetivo 2 conta com 89 variáveis ativas no índice (17 de TIC Governo Eletrônico (CETIC.br), 4 de TIC Saúde (CETIC.br), 2 de TIC Domicílios (CETIC.br), 20 de IOSPD (ABEP-TIC), 33 de MUNIC (IBGE), 8 de ESTADIC (IBGE), 5 de iGovSISP (SGD/MGI)), que entram na agregação como 72 componentes, após o colapso das baterias (ver Capítulo 3). Todas contribuem para a visão Nacional. Há 28 variáveis com observação por UF, reunidas também na dimensão `Recorte Estadual`. Há 33 variáveis com observação por capital, reunidas também na dimensão `Recorte de Capitais`.

<!-- federal:cobertura -->
No recorte federal, 21 variáveis do objetivo têm observação dos órgãos federais (16 da TIC Governo Eletrônico (CETIC.br) e 5 do iGovSISP (SGD/MGI)), que entram na média do recorte como 11 componentes. O limiar mínimo de duas variáveis efetivas observadas justifica a criação da dimensão **`Recorte Federal`**, em que a União é o único ente, sem ranking (Seção 3.1.6).
<!-- /federal:cobertura -->

## 5.3 Dimensões

As 89 variáveis ativas do Objetivo 2 foram organizadas em nove dimensões temáticas, complementadas pelas dimensões federativas `Recorte Estadual`, `Recorte de Capitais` e `Recorte Federal`. Seis dessas dimensões correspondem a sub-conceitos enunciados diretamente pelas recomendações da Portaria: informação pública digital (Rec 2.3), serviços transversais (Recs 2.3 e 2.4), canais e atendimento multicanal (Recs 2.4 e 2.5), linguagem e usabilidade (Rec 2.1), acessibilidade (Recs 2.1 e 2.7) e satisfação e experiência do cidadão (Rec 2.2). As outras três desdobram os serviços setoriais por área temática, saúde, educação e cidadania/segurança/fiscal, alinhadas à Recomendação 2.3, refletindo a granularidade do índice nas áreas em que IOSPD, MUNIC e ESTADIC mantêm baterias específicas de medição. O bilhete eletrônico e o GPS dos ônibus estão no Objetivo 6 (Capítulo 9), na dimensão Infraestrutura urbana inteligente. O `Recorte Federal` reagrupa as variáveis com observação dos órgãos federais, com a União como ente único.

![Dimensões do Objetivo 2](../graficos/dimensoes/cap05.png)

### 5.3.1 Informação pública digital

*Definição:* Publicação ativa de informação institucional e de utilidade pública em canais digitais (notícias, legislação, licitações, diário oficial, documentos, concursos), além da própria presença de website institucional entre os entes com acesso à Internet. Corresponde à Recomendação 2.3 (oferta em canais digitais), na vertente "leitura passiva" de informação pública.

*Média Nacional:* 86,7 (n=8; 8 itens).

**Indicadores:**

*TIC Governo Eletrônico 2025 (CETIC.br):*

- **C1**. Este órgão público possui website ou página oficial na Internet? / Esta prefeitura possui website ou página oficial na Internet?
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 96,26
  - Valor (Federal): 99,29

*MUNIC 2024 (IBGE):*

- **Mtic12a1**. Dentre os serviços informativos quais os disponibilizados atualmente para o público em geral na página da Internet são: Serviços informativos do município e notícias (localização de logradouros, endereços úteis, turismo, trânsito, clima, etc.)
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 87,68
  - Valor (Capitais): 92,59 (25/27 capitais)

- **Mtic12a4**. Dentre os serviços informativos quais os disponibilizados atualmente para o público em geral na página da Internet são: Diário oficial
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 71,58
  - Valor (Capitais): 92,59 (25/27 capitais)

- **Mtic12a2**. Dentre os serviços informativos quais os disponibilizados atualmente para o público em geral na página da Internet são: Acesso a documentos e formulários
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 80,74
  - Valor (Capitais): 88,89 (24/27 capitais)

- **Mtic12a5**. Dentre os serviços informativos quais os disponibilizados atualmente para o público em geral na página da Internet são: Legislação municipal
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 90,97
  - Valor (Capitais): 88,89 (24/27 capitais)

- **Mtic12a3**. Dentre os serviços informativos quais os disponibilizados atualmente para o público em geral na página da Internet são: Informações gerais sobre licitações
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 91,76
  - Valor (Capitais): 88,89 (24/27 capitais)

- **Mtic12a7**. Dentre os serviços informativos quais os disponibilizados atualmente para o público em geral na página da Internet são: Concursos públicos (informações, editais)
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 82,05
  - Valor (Capitais): 88,89 (24/27 capitais)

*ESTADIC 2024 (IBGE):*

- **Etic12a1-Etic12a8**. Os serviços informativos disponibilizados atualmente para o público em geral na página da Internet são:
  - 12a.1) Serviços informativos do estado e notícias (localização de logradouros, endereços úteis, turismo, trânsito, clima, etc.)
  - 12a.2) Acesso a documentos e formulários
  - 12a.3) Informações gerais sobre licitações
  - 12a.4) Diário oficial
  - 12a.5) Legislação estadual
  - 12a.6) Finanças públicas
  - 12a.7) Concursos públicos (informações, editais)
  - 12a.8) Nenhum dos relacionados
  - *Contagem:* O Observatório calcula, por UF, a média dos itens 12a.1 a 12a.7, com Sim = 100 e Não ou sem resposta = 0, e a média nacional das 27 UFs. Nenhum dos relacionados (12a.8) fica fora da média.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 92,59
  - Valor (Estadual): 92,59 (média de 27 UFs)

### 5.3.2 Serviços transversais

*Definição:* Ferramentas-meio de prestação digital aplicáveis a qualquer setor: Portal Único de Serviços, plataforma de serviços integrada ao GOV.BR, ferramenta de pagamento eletrônico, consulta a processos, download de documentos, a própria página da prefeitura na Internet e o leque de tipos de serviço disponibilizados no website (emissão de boletos e guias, consulta a processos, download e envio de formulários, emissão de documentos, inscrição ou matrícula e agendamento). Corresponde à Recomendação 2.3 (autosserviço); com vínculo secundário à Recomendação 2.4 (consolidação de portais e aplicativos móveis).

*Média Nacional:* 77,1 (n=9; 9 itens).

**Indicadores:**

*TIC Governo Eletrônico 2025 (CETIC.br):*

- **C3**. Dos seguintes serviços que eu vou ler, responda quais são oferecidos pelo website deste órgão. Caso o serviço não seja oferecido nem presencialmente, por favor, responda não se aplica.
  - *Contagem:* O valor é a maior proporção dos itens selecionados: Emitir boletos de tributos ou outras guias de pagamento; Consultar processos administrativos ou judiciais em andamento; Fazer download de documentos ou formulários; Preencher ou enviar formulários pelo website; Fazer emissões de documentos como licenças, certidões, permissões e outros documentos; Fazer inscrição ou matrícula para concursos, cursos e escolas; Realizar agendamentos para consultas, atendimentos, serviços, entre outros. É um limite inferior de pelo menos um item, não a união exata das respostas. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100% sobre o universo de órgãos públicos, usada diretamente; valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 83,84
  - Valor (Federal): 92,86

*IOSPD 2026 (ABEP-TIC):*

- **1.7**. POSSUI UM PORTAL ÚNICO OU UM PORTAL DIGITAL DE SERVIÇOS DISPONÍVEL AO CIDADÃO?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 82,23
  - Valor (Estadual): 82,23 (média de 26 UFs)

- **1.9**. POSSUI OPÇÕES DE PAGAMENTOS DE SERVIÇOS DISPONÍVEIS AOS CIDADÃOS ATRAVÉS DE PIX OU CARTÃO DE CRÉDITO?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 73,08
  - Valor (Estadual): 73,08 (média de 26 UFs)

*MUNIC 2024 (IBGE):*

- **Mtic10**. A página na Internet da prefeitura está:
  - *Contagem:* Conta como sim a categoria Ativa; Em elaboração, Em manutenção ou reestruturação e Não possui página contam como não. Recusa e Não informou também contam como não.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 97,74
  - Valor (Capitais): 100,00 (27/27 capitais)

- **Mtic12b1**. Dentre os serviços relacionados abaixo, quais os disponibilizados atualmente para o público em geral na página da Internet? Ouvidoria e serviços de atendimento ao cidadão
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 85,87
  - Valor (Capitais): 96,30 (26/27 capitais)

- **Mtic12b2**. Dentre os serviços relacionados abaixo, quais os disponibilizados atualmente para o público em geral na página da Internet? Download de documentos ou formulários
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 76,27
  - Valor (Capitais): 85,19 (23/27 capitais)

- **Mtic12b3**. Dentre os serviços relacionados abaixo, quais os disponibilizados atualmente para o público em geral na página da Internet? Consulta a processos/acompanhamento de protocolos
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 44,90
  - Valor (Capitais): 88,89 (24/27 capitais)

*ESTADIC 2024 (IBGE):*

- **Etic12b1-Etic12b13**. Dentre os serviços disponibilizados atualmente para o público em geral na página da Internet são:
  - 12b.1) Ouvidoria e serviços de atendimento ao cidadão
  - 12b.2) Download de documentos ou formulários
  - 12b.3) Consulta a processos/acompanhamento de protocolos
  - 12b.4) Delegacia eletrônica
  - 12b.5) Cadastramento de fornecedores
  - 12b.6) Emissão de certidão negativa de débito
  - 12b.7) Emissão de Nota Fiscal Eletrônica
  - 12b.8) Matrícula escolar na rede pública online
  - 12b.9) Agendamento de consulta e exame na rede pública de saúde
  - 12b.10) Emissão de guia de pagamento de tributos
  - 12b.11) Emissão de documentos como licenças, certidões, permissões e outros documentos
  - 12b.12) Pesquisa de satisfação relacionada aos serviços prestados pelo estado
  - 12b.13) Nenhum dos relacionados
  - *Contagem:* O Observatório calcula, por UF, a média dos itens 12b.1 a 12b.12, com Sim = 100 e Não ou sem resposta = 0, e a média nacional das 27 UFs. Nenhum dos relacionados (12b.13) fica fora da média.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 81,48
  - Valor (Estadual): 81,48 (média de 27 UFs)

*iGovSISP 2026 (SGD/MGI):*

- **G628IPD**. Em relação ao uso de ferramentas e soluções para promover a transformação dos serviços públicos, orientados pela perspectiva dos cidadãos e empresas, buscando a simplificação e a oferta de serviços por meio de canais digitais, seu órgão:
  - *Normalização:* Proporção a partir do terceiro estágio de adoção, sobre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 68,91
  - Valor (Federal): 68,91




### 5.3.3 Serviços setoriais: Saúde

*Definição:* Serviços públicos digitais específicos da área de saúde: telessaúde (oferta institucional pelas UFs e adoção pelos estabelecimentos), dispensação de medicamentos, prescrição de receitas, consulta a estoque de medicamentos, agendamento de saúde e oferta de serviços online por estabelecimentos. Corresponde à Recomendação 2.3 (oferta de serviços em canais digitais).

*Média Nacional:* 45,4 (n=8; 8 itens).

**Indicadores:**

*TIC Saúde 2025 (CETIC.br):*

- **C1**. O estabelecimento oferece AO PACIENTE a possibilidade de realizar via website ou aplicativo___________?
  - *Contagem:* O valor é a média das proporções dos itens selecionados: Agendamento de consultas; Agendamento de exames; Visualização de resultados de exames; Visualização do prontuário; Interação com a equipe de saúde. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 29,08

- **C2**. Neste estabelecimento, estão disponíveis serviços de __________?
  - *Contagem:* O valor é a média das proporções dos itens selecionados: Educação a distância em saúde; Atividades de pesquisa a distância; Telemonitoramento; Serviços de teleconsultoria; Serviços de telediagnóstico; Serviços de teleconsulta. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 32,03

*IOSPD 2026 (ABEP-TIC):*

- **2.2**. DISPONIBILIZA SERVIÇO DIGITAL PARA SOLICITAÇÃO DE MEDICAMENTOS DO COMPONENTE ESPECIALIZADO DA ASSISTÊNCIA FARMACÊUTICA (CEAF)?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 61,54
  - Valor (Estadual): 61,54 (média de 26 UFs)

- **2.3**. O ESTADO OFERECE SERVIÇOS ESTRUTURADOS DE TELESSAÚDE PARA O CIDADÃO?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 66,35
  - Valor (Estadual): 66,35 (média de 26 UFs)

- **2.6**. DISPONIBILIZA CONSULTA ONLINE DOS MEDICAMENTOS DISPONÍVEIS NA REDE ESTADUAL DE SAÚDE?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 69,23
  - Valor (Estadual): 69,23 (média de 26 UFs)

- **2.7**. A REDE ESTADUAL DE SAÚDE DISPONIBILIZA A EMISSÃO E O ENVIO ONLINE DE RECEITA MÉDICA AO CIDADÃO, APÓS AVALIAÇÃO CLÍNICA POR PROFISSIONAL HABILITADO?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 50,00
  - Valor (Estadual): 50,00 (média de 26 UFs)

- **2.12**. O ESTADO OFERECE ACESSO A SERVIÇOS DE SAÚDE POR MEIO DE UMA PLATAFORMA DIGITAL (OU APLICATIVO)?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 49,04
  - Valor (Estadual): 49,04 (média de 26 UFs)

*MUNIC 2024 (IBGE):*

- **Mtic12b10**. Dentre os serviços relacionados abaixo, quais os disponibilizados atualmente para o público em geral na página da Internet? Agendamento de consulta e exame na rede pública de saúde
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 6,09
  - Valor (Capitais): 48,15 (13/27 capitais)

### 5.3.4 Serviços setoriais: Educação

*Definição:* Serviços públicos digitais específicos da área de educação básica: matrícula e rematrícula online, transferência online de alunos, emissão de diploma do ensino médio. Corresponde à Recomendação 2.3.

*Média Nacional:* 50,3 (n=4; 4 itens).

**Indicadores:**

*IOSPD 2026 (ABEP-TIC):*

- **2.1**. DISPONIBILIZA SERVIÇO DIGITAL DE REMATRÍCULA ONLINE NAS ESCOLAS ESTADUAIS?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 76,92
  - Valor (Estadual): 76,92 (média de 26 UFs)

- **2.8**. DISPONIBILIZA SERVIÇO DE SOLICITAÇÃO E EMISSÃO ONLINE DE CERTIFICADO DE CONCLUSÃO DO ENSINO MÉDIO NAS ESCOLAS DA REDE ESTADUAL DE EDUCAÇÃO?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 53,85
  - Valor (Estadual): 53,85 (média de 26 UFs)

- **2.9**. DISPONIBILIZA SERVIÇOS DE TRANSFERÊNCIA ONLINE DE ALUNOS ENTRE ESCOLAS DA REDE ESTADUAL?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 61,54
  - Valor (Estadual): 61,54 (média de 26 UFs)

*MUNIC 2024 (IBGE):*

- **Mtic12b9**. Dentre os serviços relacionados abaixo, quais os disponibilizados atualmente para o público em geral na página da Internet? Matrícula escolar na rede pública online
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 8,80
  - Valor (Capitais): 74,07 (20/27 capitais)

### 5.3.5 Serviços setoriais: Cidadania, segurança e fiscal

*Definição:* Serviços públicos digitais de cidadania, trânsito e administração fiscal/tributária: prova de vida online para servidores, aposentados e pensionistas, recurso e defesa online contra infrações de trânsito e transferência digital de veículos, nos governos estaduais; certidão negativa de débito, nota fiscal eletrônica, guia de pagamento de tributos e boletos por celular, nas prefeituras. Corresponde à Recomendação 2.3.

*Média Nacional:* 62,8 (n=7; 7 itens).

**Indicadores:**

*IOSPD 2026 (ABEP-TIC):*

- **2.4**. DISPONIBILIZA PROVA DE VIDA ONLINE PARA SERVIDORES, APOSENTADOS E PENSIONISTAS?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 92,31
  - Valor (Estadual): 92,31 (média de 26 UFs)

- **2.5**. DISPONIBILIZA FUNCIONALIDADE DE APRESENTAÇÃO DE RECURSO E DEFESA ONLINE PARA INFRAÇÕES DE TRÂNSITO EM ÂMBITO ESTADUAL?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 73,08
  - Valor (Estadual): 73,08 (média de 26 UFs)

- **2.10**. DISPONIBILIZA TRANSFERÊNCIA DIGITAL DE VEÍCULOS?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 57,69
  - Valor (Estadual): 57,69 (média de 26 UFs)

*MUNIC 2024 (IBGE):*

- **Mtic12b6**. Dentre os serviços relacionados abaixo, quais os disponibilizados atualmente para o público em geral na página da Internet? Emissão de certidão negativa de débito
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 58,06
  - Valor (Capitais): 92,59 (25/27 capitais)

- **Mtic12b8**. Dentre os serviços relacionados abaixo, quais os disponibilizados atualmente para o público em geral na página da Internet? Emissão de Nota Fiscal Eletrônica
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 74,97
  - Valor (Capitais): 96,30 (26/27 capitais)

- **Mtic12b11**. Dentre os serviços relacionados abaixo, quais os disponibilizados atualmente para o público em geral na página da Internet? Emissão de guia de pagamento de tributos
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 55,98
  - Valor (Capitais): 96,30 (26/27 capitais)

- **Mtic166**. A prefeitura disponibilizou, nos últimos 12 meses, para o cidadão por meio de celular ou smartphones: Emissão de boletos de tributos ou outras guias de pagamento
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 27,81
  - Valor (Capitais): 70,37 (19/27 capitais)

### 5.3.6 Canais e atendimento multicanal

*Definição:* Diversidade de canais de atendimento e comunicação entre cidadão e governo: atendimento à distância, atendimento digital integrado entre portal, aplicativo e assistente virtual, serviços oferecidos por celular, presença em redes sociais (existência, atividade e frequência) e em plataformas digitais por estabelecimentos, presença mobile (apps de governo, website mobile, SMS e mensageria) e as formas de contato pela Internet oferecidas no website (e-mail, formulário eletrônico, chat em tempo real, denúncia, solicitação de acesso à informação, sugestões e chatbot). Corresponde às Recomendações 2.4 (integração de canais digitais, em especial apps móveis) e 2.5 (omnicanalidade físico-digital).

*Média Nacional:* 52,3 (n=19; 32 itens).

**Indicadores:**

*TIC Governo Eletrônico 2025 (CETIC.br):*

- **C5B**. Neste município, o cidadão pode solicitar serviços públicos como limpeza, reparo de buracos e iluminação ________________:
  - *Contagem:* O valor é a maior proporção dos itens selecionados: Telefone; Website da prefeitura; WhatsApp ou Telegram; Outras redes sociais como Facebook e Instagram; Aplicativos de celular da prefeitura. É um limite inferior de pelo menos um item, não a união exata das respostas.
  - *Normalização:* Proporção 0-100% sobre o universo de prefeituras, usada diretamente.
  - Valor (Nacional): 82,58

- **E1**. ÓRGÃOS PÚBLICOS FEDERAIS E ESTADUAIS QUE DISPONIBILIZARAM FORMAS DE CONTATO COM OS CIDADÃOS PELA INTERNET NOS ÚLTIMOS 12 MESES, POR TIPO DE CONTATO: Endereço de e-mail / PREFEITURAS QUE DISPONIBILIZARAM FORMAS DE CONTATO COM O CIDADÃO PELA INTERNET NOS ÚLTIMOS 12 MESES, POR TIPO DE CONTATO: Endereço de e-mail
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 91,80
  - Valor (Federal): 96,43

- **E1**. ÓRGÃOS PÚBLICOS FEDERAIS E ESTADUAIS QUE DISPONIBILIZARAM FORMAS DE CONTATO COM OS CIDADÃOS PELA INTERNET NOS ÚLTIMOS 12 MESES, POR TIPO DE CONTATO: Formulário eletrônico / PREFEITURAS QUE DISPONIBILIZARAM FORMAS DE CONTATO COM O CIDADÃO PELA INTERNET NOS ÚLTIMOS 12 MESES, POR TIPO DE CONTATO: Formulário eletrônico
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 61,76
  - Valor (Federal): 75,00

- **E1**. ÓRGÃOS PÚBLICOS FEDERAIS E ESTADUAIS QUE DISPONIBILIZARAM FORMAS DE CONTATO COM OS CIDADÃOS PELA INTERNET NOS ÚLTIMOS 12 MESES, POR TIPO DE CONTATO: Atendimento por chat com atendentes em tempo real / PREFEITURAS QUE DISPONIBILIZARAM FORMAS DE CONTATO COM O CIDADÃO PELA INTERNET NOS ÚLTIMOS 12 MESES, POR TIPO DE CONTATO: Atendimento por chat com atendentes em tempo real
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 20,59
  - Valor (Federal): 32,14

- **E1**. ÓRGÃOS PÚBLICOS FEDERAIS E ESTADUAIS QUE DISPONIBILIZARAM FORMAS DE CONTATO COM OS CIDADÃOS PELA INTERNET NOS ÚLTIMOS 12 MESES, POR TIPO DE CONTATO: Denúncia online / PREFEITURAS QUE DISPONIBILIZARAM FORMAS DE CONTATO COM O CIDADÃO PELA INTERNET NOS ÚLTIMOS 12 MESES, POR TIPO DE CONTATO: Denúncia online
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 73,15
  - Valor (Federal): 90,71

- **E1**. ÓRGÃOS PÚBLICOS FEDERAIS E ESTADUAIS QUE DISPONIBILIZARAM FORMAS DE CONTATO COM OS CIDADÃOS PELA INTERNET NOS ÚLTIMOS 12 MESES, POR TIPO DE CONTATO: Serviço de solicitação de acesso à informação / PREFEITURAS QUE DISPONIBILIZARAM FORMAS DE CONTATO COM O CIDADÃO PELA INTERNET NOS ÚLTIMOS 12 MESES, POR TIPO DE CONTATO: Serviço de solicitação de acesso à informação
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 70,10
  - Valor (Federal): 90,00

- **E1**. ÓRGÃOS PÚBLICOS FEDERAIS E ESTADUAIS QUE DISPONIBILIZARAM FORMAS DE CONTATO COM OS CIDADÃOS PELA INTERNET NOS ÚLTIMOS 12 MESES, POR TIPO DE CONTATO: Sugestões para melhoria de serviços públicos / PREFEITURAS QUE DISPONIBILIZARAM FORMAS DE CONTATO COM O CIDADÃO PELA INTERNET NOS ÚLTIMOS 12 MESES, POR TIPO DE CONTATO: Sugestões para melhoria de serviços públicos
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 70,45
  - Valor (Federal): 84,29

- **E1**. ÓRGÃOS PÚBLICOS FEDERAIS E ESTADUAIS QUE DISPONIBILIZARAM FORMAS DE CONTATO COM OS CIDADÃOS PELA INTERNET NOS ÚLTIMOS 12 MESES, POR TIPO DE CONTATO: Atendimento automatizado com assistente virtual ou chatbots / PREFEITURAS QUE DISPONIBILIZARAM FORMAS DE CONTATO COM O CIDADÃO PELA INTERNET NOS ÚLTIMOS 12 MESES, POR TIPO DE CONTATO: Atendimento automatizado com assistente virtual ou chatbots
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 16,58
  - Valor (Federal): 36,43

- **C6B**. Este órgão público disponibilizou os seguintes recursos para o cidadão por meio celular ou smartphones, nos últimos 12 meses: Envio de SMS para o cidadão / Esta prefeitura disponibilizou os seguintes recursos para o cidadão por meio de celular ou smartphones nos últimos 12 meses: Envio de SMS para o cidadão
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 24,45
  - Valor (Federal): 17,86

- **C6B**. Este órgão público disponibilizou os seguintes recursos para o cidadão por meio celular ou smartphones, nos últimos 12 meses: Recebimento de SMS enviado pelo cidadão / Esta prefeitura disponibilizou os seguintes recursos para o cidadão por meio de celular ou smartphones nos últimos 12 meses: Recebimento de SMS enviado pelo cidadão
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 21,44
  - Valor (Federal): 11,43

- **C6B**. Este órgão público disponibilizou os seguintes recursos para o cidadão por meio celular ou smartphones, nos últimos 12 meses: Aplicativos criados pelo órgão público / Esta prefeitura disponibilizou os seguintes recursos para o cidadão por meio de celular ou smartphones nos últimos 12 meses: Aplicativos criados pela prefeitura
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 35,00
  - Valor (Federal): 57,86

- **C6B**. Este órgão público disponibilizou os seguintes recursos para o cidadão por meio celular ou smartphones, nos últimos 12 meses: Website adaptado para dispositivos móveis / Esta prefeitura disponibilizou os seguintes recursos para o cidadão por meio de celular ou smartphones nos últimos 12 meses: Website adaptado para dispositivos móveis
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 72,04
  - Valor (Federal): 83,57

- **C6B**. Este órgão público disponibilizou os seguintes recursos para o cidadão por meio celular ou smartphones, nos últimos 12 meses: Envio de mensagens por WhatsApp ou Telegram / Esta prefeitura disponibilizou os seguintes recursos para o cidadão por meio de celular ou smartphones nos últimos 12 meses: Envio de mensagem por WhatsApp ou Telegram
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 49,18
  - Valor (Federal): 38,57

*TIC Saúde 2025 (CETIC.br):*

- **C5**. Este estabelecimento possui um website ou página na Internet?
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 17,67

- **C6**. Este estabelecimento possui perfil ou conta próprios em alguma rede social online, como Facebook, Instagram, X (antigo Twitter), LinkedIn ou outras?
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 23,51

*IOSPD 2026 (ABEP-TIC):*

- **4.3**. POSSUI EM OPERAÇÃO UMA ESTRATÉGIA DE OMNICANALIDADE QUE INTEGRE DIFERENTES CANAIS DE ATENDIMENTO?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 69,23
  - Valor (Estadual): 69,23 (média de 26 UFs)

*MUNIC 2024 (IBGE):*

- **Mtic013-Mtic014, Mtic018**. Quais as formas de atendimento à distância disponibilizadas ao público pela prefeitura?
  - *Contagem:* Conta 100 a prefeitura que marcou Website ou WhatsApp e não marcou Não disponibiliza. Correio, jornais, telefone, telefone exclusivo e outros meios ficam registrados na pergunta. Os demais casos recebem 0.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 92,57
  - Valor (Capitais): 100,00 (27/27 capitais)

- **Mtic131-Mtic139**. A prefeitura possui perfil ou conta própria em alguma das seguintes redes sociais online:
  - *Contagem:* Conta como sim o município que marcou ao menos uma de Facebook, Instagram, YouTube, Vimeo, Telegram, Whatsapp, Twitter ou Tik Tok e não marcou Não possui; o resto conta como não. Recusa e Não informou também contam como não.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 95,42
  - Valor (Capitais): 100,00 (27/27 capitais)

- **Mtic144**. Nos últimos 12 meses, esta prefeitura realizou as seguintes atividades nas redes sociais online das quais participa: Divulgar serviços ou campanhas
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 86,75
  - Valor (Capitais): 96,30 (26/27 capitais)

- **Mtic141**. Nos últimos 12 meses, esta prefeitura realizou as seguintes atividades nas redes sociais online das quais participa: Postar notícias sobre a prefeitura
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 93,57
  - Valor (Capitais): 100,00 (27/27 capitais)

- **Mtic142**. Nos últimos 12 meses, esta prefeitura realizou as seguintes atividades nas redes sociais online das quais participa: Responder a comentários e dúvidas dos cidadãos
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 61,22
  - Valor (Capitais): 100,00 (27/27 capitais)

- **Mtic143**. Nos últimos 12 meses, esta prefeitura realizou as seguintes atividades nas redes sociais online das quais participa: Realizar consulta pública ou enquete
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 26,36
  - Valor (Capitais): 48,15 (13/27 capitais)

- **Mtic164**. A prefeitura disponibilizou, nos últimos 12 meses, para o cidadão por meio de celular ou smartphones: Aplicativos criados por outros organismos (como empresas, universidades e outros) ou cidadãos a partir de informações ou dados disponibilizados pela prefeitura
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 7,59
  - Valor (Capitais): 48,15 (13/27 capitais)

- **Mtic163**. A prefeitura disponibilizou, nos últimos 12 meses, para o cidadão por meio de celular ou smartphones: Aplicativos criados pela prefeitura ou outros organismos
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 10,31
  - Valor (Capitais): 66,67 (18/27 capitais)

- **Mtic165**. A prefeitura disponibilizou, nos últimos 12 meses, para o cidadão por meio de celular ou smartphones: Website adaptado para dispositivos móveis ou desenhado em versão mobile
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 38,98
  - Valor (Capitais): 70,37 (19/27 capitais)

- **Mtic161**. A prefeitura disponibilizou, nos últimos 12 meses, para o cidadão por meio de celular ou smartphones: Envio de SMS para o cidadão
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 7,86
  - Valor (Capitais): 37,04 (10/27 capitais)

- **Mtic162**. A prefeitura disponibilizou, nos últimos 12 meses, para o cidadão por meio de celular ou smartphones: Recebimento de SMS enviado pelo cidadão
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 5,91
  - Valor (Capitais): 22,22 (6/27 capitais)

*ESTADIC 2024 (IBGE):*

- **Etic011-Etic018**. Quais as formas de atendimento à distância disponibilizadas ao público pelo governo estadual?
  - 1.1) Correio
  - 1.2) Jornais
  - 1.3) Website
  - 1.4) WhatsApp
  - 1.5) Telefone
  - 1.6) Telefone exclusivo
  - 1.7) Outros
  - 1.8) Não disponibiliza
  - *Contagem:* Conta 100 a UF que marcou Website ou WhatsApp e não marcou Não disponibiliza, e 0 as demais; o valor nacional é a média das 27 UFs, isto é, a proporção de UFs com atendimento por um desses dois canais. Correio, Jornais, Telefone, Telefone exclusivo e Outros não contam.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 96,30
  - Valor (Estadual): 96,30 (média de 27 UFs)

- **Etic141-Etic146**. Nos últimos 12 meses, este governo realizou as seguintes atividades nas redes sociais online das quais participa:
  - *Contagem:* O Observatório calcula, por UF, a média dos itens que entram, com Sim = 100 e Não ou sem resposta = 0, e a média nacional das 27 UFs. Entram: 14.1 Postar notícias sobre o governo; 14.2 Responder a comentários e dúvidas dos cidadãos; 14.3 Realizar consulta pública ou enquete; 14.4 Divulgar serviços ou campanhas. Ficam fora: 14.5 Não realizou nenhuma das atividades; 14.6 Não sabe informar.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 89,81
  - Valor (Estadual): 89,81 (média de 27 UFs)

- **Etic15**. Em média com que frequência o governo estadual atualiza o conteúdo do seu perfil ou conta nas redes sociais online?
  - 1) Diariamente
  - 2) Pelo menos uma vez por semana
  - 3) Pelo menos uma vez por mês
  - 4) Pelo menos uma vez a cada três meses
  - 5) Pelo menos uma vez a cada seis meses
  - 6) Pelo menos uma vez por ano
  - 7) Menos frequente ou nunca atualizou
  - 8) Não sabe informar
  - *Contagem:* O Observatório pontua Diariamente = 100, Pelo menos uma vez por semana = 50 e Não sabe informar ou sem resposta = 0; as categorias 3 a 7 não têm escore no dataset porque nenhuma UF as marcou em 2024 (24 diariamente, 2 semanal, 1 não sabe).
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 92,59
  - Valor (Estadual): 92,59 (média de 27 UFs)

- **Etic161-Etic167**. O governo estadual disponibilizou, nos últimos 12 meses, para o cidadão por meio de celular ou smartphones:
  - *Contagem:* O Observatório calcula, por UF, a média dos itens que entram, com Sim = 100 e Não ou sem resposta = 0, e a média nacional das 27 UFs. Entram: 16.1 Envio de SMS para o cidadão; 16.2 Recebimento de SMS enviado pelo cidadão; 16.3 Aplicativos criados pelo governo; 16.4 Aplicativos criados por outros organismos (como empresas, universidades e outros) ou cidadãos a partir de informações ou dados disponibilizados pelo governo; 16.5 Website adaptado para dispositivos móveis ou desenhado em versão mobile; 16.6 Emissão de boletos de tributos ou outras guias de pagamento. Fica fora: 16.7 Não disponibilizou.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 55,56
  - Valor (Estadual): 55,56 (média de 27 UFs)

*iGovSISP 2026 (SGD/MGI):*

- **G632IPD**. Seu órgão possui algum aplicativo móvel?
  - *Normalização:* Proporção de respostas Sim sobre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 42,86
  - Valor (Federal): 42,86





*Bateria de atividades nas redes sociais: os 4 itens apresentados nesta seção entram no índice como um único componente (média dos itens observados; ver Capítulo 3).*


*Bateria de formas de contato pela Internet: os 7 itens apresentados nesta seção entram no índice como um único componente (média dos itens observados; ver Capítulo 3).*

*Bateria de recursos móveis: os 5 itens apresentados nesta seção entram no índice como um único componente (média dos itens observados; ver Capítulo 3).*

### 5.3.7 Linguagem e usabilidade

*Definição:* Clareza textual, simplicidade de jornada, adequação do conteúdo à compreensão do cidadão e mecanismos de feedback do usuário sobre a apresentação dos serviços. Corresponde à Recomendação 2.1 (linguagem simplificada, experiência do usuário).

*Média Nacional:* 62,3 (n=3; 3 itens).

**Indicadores:**

*IOSPD 2026 (ABEP-TIC):*

- **3.5**. POSSUI NORMA, MANUAL OU DIRETRIZ OFICIAL SOBRE LINGUAGEM SIMPLES APLICADA À COMUNICAÇÃO PÚBLICA?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 76,92
  - Valor (Estadual): 76,92 (média de 26 UFs)

- **4.1**. OS SERVIÇOS PÚBLICOS ESTÃO DESCRITOS COM LINGUAGEM SIMPLES?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 71,54
  - Valor (Estadual): 71,54 (média de 26 UFs)

- **4.2**. O ESTADO POSSUI UM KIT DE FERRAMENTAS PARA FORMALIZAR O PROCESSO DE PARTICIPAÇÃO DOS CIDADÃOS E EMPRESAS NO DESENHO, TESTE OU MELHORIA DOS SERVIÇOS DIGITAIS, REALIZANDO TESTES DE USABILIDADE E COMPREENSÃO COM USUÁRIOS REAIS?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 38,46
  - Valor (Estadual): 38,46 (média de 26 UFs)




### 5.3.8 Acessibilidade

*Definição:* Adequação dos serviços digitais a pessoas com deficiência (visual, auditiva, motora), nos órgãos federais (alinhamento dos investimentos do Plano de Transformação Digital às diretrizes de acessibilidade), no nível estadual (acessibilidade global da página, modelo de padrão adotado e plataforma adaptada a surdos e deficientes visuais) e nas páginas das prefeituras (recursos específicos: navegação por tecnologia assistiva, descrição de imagens, LIBRAS, título descritivo da página na aba do navegador). Corresponde à Recomendação 2.1 (acessibilidade); com vínculo secundário à Recomendação 2.7 (canais acessíveis).

*Média Nacional:* 61,9 (n=5; 9 itens).

**Indicadores:**

*IOSPD 2026 (ABEP-TIC):*

- **4.4**. QUAL O GRAU DE ADAPTAÇÃO DO PORTAL ÚNICO OU DE SERVIÇOS PARA GARANTIR ACESSIBILIDADE A PESSOAS COM DEFICIÊNCIA AUDITIVA E VISUAL, EM CONFORMIDADE COM AS LEGISLAÇÕES VIGENTES, LEI Nº 13.146/2015 E COM OS PADRÕES DE ACESSIBILIDADE (EMAG, W3C)?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 78,85
  - Valor (Estadual): 78,85 (média de 26 UFs)

*MUNIC 2024 (IBGE):*

- **Mtic281**. A página na internet e os serviços eletrônicos disponibilizados pela prefeitura: Permitem navegação por todos os itens interativos da página sem necessidade do mouse
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 46,30
  - Valor (Capitais): 51,85 (14/27 capitais)

- **Mtic282**. A página na internet e os serviços eletrônicos disponibilizados pela prefeitura: Permitem ao usuário de tecnologia assistiva saltar itens repetidos na página
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 17,43
  - Valor (Capitais): 33,33 (9/27 capitais)

- **Mtic283**. A página na internet e os serviços eletrônicos disponibilizados pela prefeitura: Descrevem o conteúdo das imagens
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 33,72
  - Valor (Capitais): 51,85 (14/27 capitais)

- **Mtic284**. A página na internet e os serviços eletrônicos disponibilizados pela prefeitura: Incluem tradução de conteúdo para LIBRAS
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 31,81
  - Valor (Capitais): 62,96 (17/27 capitais)

- **Mtic285**. A página na internet e os serviços eletrônicos disponibilizados pela prefeitura: Descrevem o conteúdo das páginas com o texto que aparece na aba do navegador
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 37,50
  - Valor (Capitais): 44,44 (12/27 capitais)

*ESTADIC 2024 (IBGE):*

- **Etic261-Etic269**. A página na internet e os serviços eletrônicos disponibilizados pelo governo estadual:
  - *Contagem:* O Observatório calcula, por UF, a média dos itens que entram, com Sim = 100 e Não ou sem resposta = 0, e a média nacional das 27 UFs. Entram: 26.1 Permitem navegação por todos os itens interativos da página sem necessidade do mouse; 26.2 Permitem ao usuário de tecnologia assistiva saltar itens repetidos na página; 26.3 Descrevem o conteúdo das imagens; 26.4 Incluem tradução de conteúdo para LIBRAS; 26.5 Descrevem o conteúdo das páginas com o texto que aparece na aba do navegador. Ficam fora: 26.6 Usam CAPTCHA para solicitações, que registra só o uso do desafio, sem dizer se há alternativa acessível; 26.7 Nenhuma das alternativas; 26.8 Não possui página na internet e/ou serviços eletrônicos; 26.9 Não sabe informar.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 59,26
  - Valor (Estadual): 59,26 (média de 27 UFs)

- **Etic27**. Qual o modelo de acessibilidade digital é utilizado?
  - 1) Modelo próprio de acessibilidade digital
  - 2) Modelo federal de acessibilidade digital (e-MAG)
  - 3) Modelo global acessibilidade digital (WCAG/WAI)
  - 4) Não há qualquer modelo de acessibilidade digital
  - *Contagem:* Conta 100 a UF que usa algum modelo de acessibilidade digital (próprio, e-MAG ou WCAG/WAI) e 0 a que marcou Não há qualquer modelo de acessibilidade digital ou não respondeu.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 96,30
  - Valor (Estadual): 96,30 (média de 27 UFs)

*iGovSISP 2026 (SGD/MGI):*

- **G226SPD**. Os investimentos em sistemas e serviços digitais previstos no PTD estão alinhados aos padrões e diretrizes de acessibilidade digital, conforme as Normas ABNT NBR 17225/2025 e NBR 17060/2022, bem como o Modelo de Acessibilidade em Governo Eletrônico (eMAG 3.1)?
  - *Normalização:* Proporção a partir do terceiro estágio de maturidade, sobre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 41,60
  - Valor (Federal): 41,60
  - *Estágio positivo mínimo:* Os principais sistemas e serviços digitais consideram as diretrizes de acessibilidade no planejamento e desenvolvimento.
  - *Leitura:* Mede alinhamento dos investimentos às diretrizes de acessibilidade, não acessibilidade efetivamente alcançada.

*Bateria de acessibilidade do website da prefeitura: os 5 itens apresentados nesta seção entram no índice como um único componente (média dos itens observados; ver Capítulo 3).*

### 5.3.9 Satisfação e experiência do cidadão

*Definição:* Pesquisas de satisfação dos usuários dos serviços públicos digitais, metodologia institucional de avaliação, acesso e uso de serviços e necessidade de deslocamento para sua conclusão. A coleta de dados ou estatísticas sobre o uso dos serviços digitais (C10) é observada, sem dever normativo específico correspondente. Corresponde à Recomendação 2.2 (avaliação de satisfação e melhoria contínua).

*Média Nacional:* 40,5 (n=9; 9 itens).

**Indicadores:**

*TIC Governo Eletrônico 2025 (CETIC.br):*

- **C10**. E nos últimos 12 meses, este órgão público coletou dados ou estatísticas sobre o uso dos serviços digitais que oferece? / E nos últimos 12 meses, esta prefeitura coletou dados ou estatísticas sobre o uso dos serviços digitais que oferece?
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 37,87
  - Valor (Federal): 62,86

- **C11**. Nos últimos 12 meses, este órgão público mediu a satisfação dos usuários em relação aos serviços digitais que oferece? / Nos últimos 12 meses, esta prefeitura mediu a satisfação dos usuários em relação aos serviços digitais que oferece?
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 27,50
  - Valor (Federal): 55,71

*TIC Domicílios 2025 (CETIC.br):*

- **G2A**. USUÁRIOS DE INTERNET, POR NECESSIDADE DE DESLOCAMENTO PARA FINALIZAR O SERVIÇO PÚBLICO
  - *Contagem:* O valor é a média das proporções dos itens selecionados: Documentos pessoais, como RG, CPF, passaporte, ou carteira de trabalho: Realizou serviço na Internet sem precisar ir até um posto; Saúde pública, como agendamento de consultas, remédios ou outros serviços do sistema público de saúde: Realizou serviço na Internet sem precisar ir até um posto; Educação pública, como ENEM, PROUNI, matrícula em escolas ou universidades públicas: Realizou serviço na Internet sem precisar ir até um posto; Direitos do trabalhador ou previdência social, como INSS, FGTS, seguro-desemprego, auxílio-doença, ou aposentadoria: Realizou serviço na Internet sem precisar ir até um posto; Impostos e taxas governamentais, como declaração de imposto de renda, IPVA, ou IPTU: Realizou serviço na Internet sem precisar ir até um posto; Polícia e segurança como boletim de ocorrência, antecedentes criminais ou denúncias: Realizou serviço na Internet sem precisar ir até um posto; Transporte público ou outros serviços urbanos, como limpeza e conservação de vias, iluminação: Realizou serviço na Internet sem precisar ir até um posto; Justiça, como consulta de processos ou defensoria pública: Realizou serviço na Internet sem precisar ir até um posto. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 7,67

- **G1**. INDIVÍDUOS QUE UTILIZARAM GOVERNO ELETRÔNICO NOS ÚLTIMOS 12 MESES
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 59,95

*IOSPD 2026 (ABEP-TIC):*

- **4.5**. OS CIDADÃOS EFETIVAMENTE ACESSAM E UTILIZAM O PORTAL DE SERVIÇOS DIGITAIS?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 27,69
  - Valor (Estadual): 27,69 (média de 26 UFs)

- **4.7**. POSSUI METODOLOGIA E FERRAMENTA DE AVALIAÇÃO DA SATISFAÇÃO DOS USUÁRIOS EM RELAÇÃO AOS SERVIÇOS PÚBLICOS PRESTADOS?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 70,52
  - Valor (Estadual): 70,52 (média de 26 UFs)

*MUNIC 2024 (IBGE):*

- **Mtic12b13**. Dentre os serviços relacionados abaixo, quais os disponibilizados atualmente para o público em geral na página da Internet? Pesquisa de satisfação relacionada aos serviços prestados pela prefeitura
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 23,03
  - Valor (Capitais): 48,15 (13/27 capitais)

*iGovSISP 2026 (SGD/MGI):*

- **G206SPD**. O órgão monitora o índice de satisfação dos usuários e/ou cidadãos com os sistemas e serviços públicos digitais?
  - *Normalização:* Proporção a partir do terceiro estágio de maturidade, sobre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 63,87
  - Valor (Federal): 63,87
  - *Estágio positivo mínimo:* Monitora poucos sistemas e serviços públicos digitais
  - *Leitura:* Mede monitoramento da satisfação, não satisfação alta.

- **G631IPD**. Dentro dos serviços oferecidos para a sociedade, quantos estão integrados ao módulo de Avaliação, api de avaliação da satisfação dos usuários, ofertada pelo Ministério da Gestão, sem ônus para o órgão?
  - *Normalização:* Média dos tetos reais das faixas, ponderada pelas contagens, com peso igual entre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 46,85
  - Valor (Federal): 46,85
  - *Leitura:* Mede integração ao módulo de avaliação, não satisfação nem uso efetivo das avaliações. A média dos tetos aproxima por cima a média entre órgãos.

### 5.3.10 Recorte Estadual

*Definição:* Conjunto das variáveis do Objetivo 2 com observação por UF, agregadas para leitura federativa estadual. Reúne 20 variáveis IOSPD e 8 variáveis ESTADIC. Inclui variáveis também classificadas em dimensões temáticas (única exceção à regra de não-repetição). As perguntas estão nas dimensões temáticas indicadas na tabela.

*Média Estadual:* 70,4 (n=28; 28 itens).

![Recorte Estadual do Objetivo 2](../graficos/recortes/cap05_estadual.png)

<!-- federal:tabela-estadual -->
*Tabela 5. Indicadores do Recorte Estadual do Objetivo 2, com a dimensão temática da pergunta e o valor estadual*

| Código | Fonte | Pergunta na dimensão | Valor (Estadual) |
|---|---|---|---:|
| `1.7` | IOSPD | 5.3.2 Serviços transversais | 82,23 |
| `1.9` | IOSPD | 5.3.2 Serviços transversais | 73,08 |
| `2.2` | IOSPD | 5.3.3 Serviços setoriais: Saúde | 61,54 |
| `2.3` | IOSPD | 5.3.3 Serviços setoriais: Saúde | 66,35 |
| `2.6` | IOSPD | 5.3.3 Serviços setoriais: Saúde | 69,23 |
| `2.7` | IOSPD | 5.3.3 Serviços setoriais: Saúde | 50,00 |
| `2.12` | IOSPD | 5.3.3 Serviços setoriais: Saúde | 49,04 |
| `2.1` | IOSPD | 5.3.4 Serviços setoriais: Educação | 76,92 |
| `2.8` | IOSPD | 5.3.4 Serviços setoriais: Educação | 53,85 |
| `2.9` | IOSPD | 5.3.4 Serviços setoriais: Educação | 61,54 |
| `2.4` | IOSPD | 5.3.5 Serviços setoriais: Cidadania, segurança e fiscal | 92,31 |
| `2.5` | IOSPD | 5.3.5 Serviços setoriais: Cidadania, segurança e fiscal | 73,08 |
| `2.10` | IOSPD | 5.3.5 Serviços setoriais: Cidadania, segurança e fiscal | 57,69 |
| `4.3` | IOSPD | 5.3.6 Canais e atendimento multicanal | 69,23 |
| `3.5` | IOSPD | 5.3.7 Linguagem e usabilidade | 76,92 |
| `4.1` | IOSPD | 5.3.7 Linguagem e usabilidade | 71,54 |
| `4.2` | IOSPD | 5.3.7 Linguagem e usabilidade | 38,46 |
| `4.4` | IOSPD | 5.3.8 Acessibilidade | 78,85 |
| `4.5` | IOSPD | 5.3.9 Satisfação e experiência do cidadão | 27,69 |
| `4.7` | IOSPD | 5.3.9 Satisfação e experiência do cidadão | 70,52 |
| `Etic12a1-Etic12a8` | ESTADIC | 5.3.1 Informação pública digital | 92,59 |
| `Etic12b1-Etic12b13` | ESTADIC | 5.3.2 Serviços transversais | 81,48 |
| `Etic011-Etic018` | ESTADIC | 5.3.6 Canais e atendimento multicanal | 96,30 |
| `Etic141-Etic146` | ESTADIC | 5.3.6 Canais e atendimento multicanal | 89,81 |
| `Etic15` | ESTADIC | 5.3.6 Canais e atendimento multicanal | 92,59 |
| `Etic161-Etic167` | ESTADIC | 5.3.6 Canais e atendimento multicanal | 55,56 |
| `Etic261-Etic269` | ESTADIC | 5.3.8 Acessibilidade | 59,26 |
| `Etic27` | ESTADIC | 5.3.8 Acessibilidade | 96,30 |
<!-- /federal:tabela-estadual -->

**Topo (top-3) no Recorte Estadual do Objetivo 2:** PI (97,6), GO (95,7), RJ (93,3).

**Base (bottom-3) no Recorte Estadual do Objetivo 2:** RR (33,5), PA (41,0), AM (43,6).

### 5.3.11 Recorte de Capitais

*Definição:* Conjunto das variáveis do Objetivo 2 com observação por capital, agregadas para leitura federativa municipal. Reúne 33 variáveis MUNIC. Inclui variáveis também classificadas em dimensões temáticas (única exceção à regra de não-repetição). As perguntas estão nas dimensões temáticas indicadas na tabela.

*Média Capitais:* 77,6 (n=26; 33 itens).

![Recorte de Capitais do Objetivo 2](../graficos/recortes/cap05_capitais.png)

<!-- federal:tabela-capitais -->
*Tabela 6. Indicadores do Recorte de Capitais do Objetivo 2, com a dimensão temática da pergunta e o valor das capitais*

| Código | Fonte | Pergunta na dimensão | Valor (Capitais) |
|---|---|---|---:|
| `Mtic12a1` | MUNIC | 5.3.1 Informação pública digital | 92,59 |
| `Mtic12a4` | MUNIC | 5.3.1 Informação pública digital | 92,59 |
| `Mtic12a2` | MUNIC | 5.3.1 Informação pública digital | 88,89 |
| `Mtic12a5` | MUNIC | 5.3.1 Informação pública digital | 88,89 |
| `Mtic12a3` | MUNIC | 5.3.1 Informação pública digital | 88,89 |
| `Mtic12a7` | MUNIC | 5.3.1 Informação pública digital | 88,89 |
| `Mtic10` | MUNIC | 5.3.2 Serviços transversais | 100,00 |
| `Mtic12b1` | MUNIC | 5.3.2 Serviços transversais | 96,30 |
| `Mtic12b2` | MUNIC | 5.3.2 Serviços transversais | 85,19 |
| `Mtic12b3` | MUNIC | 5.3.2 Serviços transversais | 88,89 |
| `Mtic12b10` | MUNIC | 5.3.3 Serviços setoriais: Saúde | 48,15 |
| `Mtic12b9` | MUNIC | 5.3.4 Serviços setoriais: Educação | 74,07 |
| `Mtic12b6` | MUNIC | 5.3.5 Serviços setoriais: Cidadania, segurança e fiscal | 92,59 |
| `Mtic12b8` | MUNIC | 5.3.5 Serviços setoriais: Cidadania, segurança e fiscal | 96,30 |
| `Mtic12b11` | MUNIC | 5.3.5 Serviços setoriais: Cidadania, segurança e fiscal | 96,30 |
| `Mtic166` | MUNIC | 5.3.5 Serviços setoriais: Cidadania, segurança e fiscal | 70,37 |
| `Mtic013-Mtic014, Mtic018` | MUNIC | 5.3.6 Canais e atendimento multicanal | 100,00 |
| `Mtic131-Mtic139` | MUNIC | 5.3.6 Canais e atendimento multicanal | 100,00 |
| `Mtic144` | MUNIC | 5.3.6 Canais e atendimento multicanal | 96,30 |
| `Mtic141` | MUNIC | 5.3.6 Canais e atendimento multicanal | 100,00 |
| `Mtic142` | MUNIC | 5.3.6 Canais e atendimento multicanal | 100,00 |
| `Mtic143` | MUNIC | 5.3.6 Canais e atendimento multicanal | 48,15 |
| `Mtic164` | MUNIC | 5.3.6 Canais e atendimento multicanal | 48,15 |
| `Mtic163` | MUNIC | 5.3.6 Canais e atendimento multicanal | 66,67 |
| `Mtic165` | MUNIC | 5.3.6 Canais e atendimento multicanal | 70,37 |
| `Mtic161` | MUNIC | 5.3.6 Canais e atendimento multicanal | 37,04 |
| `Mtic162` | MUNIC | 5.3.6 Canais e atendimento multicanal | 22,22 |
| `Mtic281` | MUNIC | 5.3.8 Acessibilidade | 51,85 |
| `Mtic282` | MUNIC | 5.3.8 Acessibilidade | 33,33 |
| `Mtic283` | MUNIC | 5.3.8 Acessibilidade | 51,85 |
| `Mtic284` | MUNIC | 5.3.8 Acessibilidade | 62,96 |
| `Mtic285` | MUNIC | 5.3.8 Acessibilidade | 44,44 |
| `Mtic12b13` | MUNIC | 5.3.9 Satisfação e experiência do cidadão | 48,15 |
<!-- /federal:tabela-capitais -->

*Bateria de atividades nas redes sociais: os 4 itens apresentados nesta seção entram no índice como um único componente (média dos itens observados; ver Capítulo 3).*

**Topo (top-3) no Recorte de Capitais do Objetivo 2:** Belo Horizonte (MG) e Curitiba (PR), empatadas com 100,0; Salvador (BA) e Brasília (DF), empatadas com 95,4.

**Base (bottom-3) no Recorte de Capitais do Objetivo 2:** Rio Branco (AC) com 37,5; Maceió (AL) com 54,2; Palmas (TO) com 54,6.

<!-- federal:secao -->
### 5.3.12 Recorte Federal

*Definição:* Conjunto das variáveis do Objetivo 2 com observação dos órgãos federais, agregadas para leitura do governo federal como ente único. Reúne as 16 variáveis TIC Governo Eletrônico e as 5 variáveis iGovSISP do objetivo. Inclui variáveis também classificadas em dimensões temáticas (única exceção à regra de não-repetição). As perguntas estão nas dimensões temáticas indicadas na tabela.

*Média Federal:* 62,6 (n=11; 21 itens).

*Tabela 7. Indicadores do Recorte Federal do Objetivo 2, com a dimensão temática da pergunta e o valor federal (TIC Gov.: TIC Governo Eletrônico)*

| Código | Fonte | Pergunta na dimensão | Valor (Federal) |
|---|---|---|---:|
| `C1` | TIC Gov. | 5.3.1 Informação pública digital | 99,29 |
| `C3` | TIC Gov. | 5.3.2 Serviços transversais | 92,86 |
| `E1`, Endereço de e-mail como forma de contato | TIC Gov. | 5.3.6 Canais e atendimento multicanal | 96,43 |
| `E1`, Formulário eletrônico como forma de contato | TIC Gov. | 5.3.6 Canais e atendimento multicanal | 75,00 |
| `E1`, Chat com atendentes em tempo real | TIC Gov. | 5.3.6 Canais e atendimento multicanal | 32,14 |
| `E1`, Denúncia online como forma de contato | TIC Gov. | 5.3.6 Canais e atendimento multicanal | 90,71 |
| `E1`, Serviço de solicitação de acesso à informação | TIC Gov. | 5.3.6 Canais e atendimento multicanal | 90,00 |
| `E1`, Canal de sugestões para melhoria de serviços públicos | TIC Gov. | 5.3.6 Canais e atendimento multicanal | 84,29 |
| `E1`, Atendimento automatizado por assistente virtual ou chatbot | TIC Gov. | 5.3.6 Canais e atendimento multicanal | 36,43 |
| `C6B`, Envio de SMS para o cidadão | TIC Gov. | 5.3.6 Canais e atendimento multicanal | 17,86 |
| `C6B`, Recebimento de SMS enviado pelo cidadão | TIC Gov. | 5.3.6 Canais e atendimento multicanal | 11,43 |
| `C6B`, Aplicativo criado pelo ente | TIC Gov. | 5.3.6 Canais e atendimento multicanal | 57,86 |
| `C6B`, Website adaptado para dispositivos móveis | TIC Gov. | 5.3.6 Canais e atendimento multicanal | 83,57 |
| `C6B`, Envio de mensagens por WhatsApp ou Telegram | TIC Gov. | 5.3.6 Canais e atendimento multicanal | 38,57 |
| `C10` | TIC Gov. | 5.3.9 Satisfação e experiência do cidadão | 62,86 |
| `C11` | TIC Gov. | 5.3.9 Satisfação e experiência do cidadão | 55,71 |
| `G628IPD` | iGovSISP | 5.3.2 Serviços transversais | 68,91 |
| `G632IPD` | iGovSISP | 5.3.6 Canais e atendimento multicanal | 42,86 |
| `G226SPD` | iGovSISP | 5.3.8 Acessibilidade | 41,60 |
| `G206SPD` | iGovSISP | 5.3.9 Satisfação e experiência do cidadão | 63,87 |
| `G631IPD` | iGovSISP | 5.3.9 Satisfação e experiência do cidadão | 46,85 |
<!-- /federal:secao -->
