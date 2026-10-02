# 8. Objetivo 5: Dados e Interoperabilidade

> Qualificar a tomada de decisões e a oferta de serviços nas organizações públicas com o reuso constante e de forma ética dos dados disponíveis para análises, interoperabilidade e personalização.

A metodologia (normalização, agregação, tratamento de não-resposta) está descrita no Capítulo 3.

## 8.1 Recomendações da ENGD para este objetivo

A Portaria SGD/MGI nº 5.395/2026 elenca sete recomendações aos entes federados para qualificar o uso de dados e a interoperabilidade nas organizações públicas:

- **5.1** Elaborar, publicar e implementar um programa de governança de dados.
- **5.2** Estabelecer e adotar mecanismos de interoperabilidade e compartilhamento de dados, entre os órgãos e com outros entes federados, especialmente os ofertados pela Plataforma GOV.BR, adotando padrões abertos e catálogos comuns, para qualificação das políticas públicas e eliminação de pedidos de dados dispensáveis na oferta de serviços públicos, com prioridade para jornadas de serviços que envolvam múltiplos entes federados em sua execução.
- **5.3** Contribuir para a elaboração e adotar um modelo de compartilhamento de dados que permita ao cidadão o uso seguro dos seus dados e melhore sua experiência no acesso a serviços.
- **5.4** Estimular o uso responsável de análise de dados na tomada de decisão de políticas públicas e na personalização de serviços, observadas a finalidade pública, a ética, a transparência, a proteção de dados pessoais, a prevenção de vieses discriminatórios e a avaliação de resultados.
- **5.5** Instituir mecanismos de governança proporcionais ao risco para o uso de inteligência artificial no setor público, com definição de responsabilidades, instâncias de supervisão e processos de autoavaliação de impacto, observados os princípios éticos, os direitos fundamentais e o interesse público.
- **5.6** Instituir plataformas federativas de compartilhamento de dados que permitam a troca segura e padronizada de informações entre União, estados e municípios para a prestação integrada de serviços, adotando modelos de governança de dados interfederativa e padrões de qualidade, catalogação e semântica comuns.
- **5.7** Adotar a regra de que dados e documentos já disponíveis em bases oficiais não sejam novamente solicitados ao cidadão na prestação de serviços públicos, cabendo aos órgãos a consulta automatizada às fontes autoritativas, respeitadas a legislação de proteção de dados pessoais, as hipóteses legais de tratamento e o consentimento do titular quando aplicável.

## 8.2 Cobertura por nível federativo

O Objetivo 5 conta com 37 variáveis ativas no índice (1 da ESTADIC (IBGE), 30 do iGovSISP (SGD/MGI), 1 do IOSPD (ABEP-TIC), 1 da MUNIC (IBGE), 1 da TIC Governo Eletrônico (CETIC.br) e 3 da TIC Saúde (CETIC.br)), que entram na agregação do índice como 25 componentes (ver Capítulo 3). Todas contribuem para a visão Nacional. **Duas** têm observação por UF (`ESTADIC_FORMATO_DADOS` e `IOSPD_I05`) e dão origem à dimensão `Recorte Estadual`. Apenas **uma** tem observação por capital (`MUNIC_DADOS_ABERTOS`), abaixo do limiar de duas variáveis para criação de dimensão federativa dedicada — não se cria `Recorte de Capitais`, e a variável aparece na dimensão temática `Dados abertos`.

## 8.3 Dimensões

As 37 variáveis ativas do Objetivo 5 foram organizadas em cinco dimensões temáticas, complementadas pela dimensão federativa `Recorte Estadual`. As dimensões temáticas se alinham, quando aplicável, às Recomendações 5.1 (governança de dados), 5.2 (interoperabilidade) e 5.4 (análise de dados) da Portaria. O recorte reagrupa as variáveis com observação por UF.

![Dimensões do Objetivo 5](../graficos/dimensoes/cap08.png)

### 8.3.1 Governança de dados

*Definição:* Estruturas, políticas, cultura e princípios éticos de governança de dados, incluindo sua orientação à qualidade e consistência das políticas públicas e às entregas à sociedade. Essa orientação não é uma medida de qualidade técnica dos dados. Corresponde à Recomendação 5.1.

*Média Nacional:* 76.8 (n=5; 6 itens).

**Indicadores:**

*IOSPD 2025 (ABEP-TIC):*

- **IOSPD_I05** — A UF possui estrutura colegiada de governança de dados, ampla, instituída formalmente e ativa?
  - *Normalização:* Índice 0-10 — multiplicado por 10.
  - Valor (Nacional): 48.15
  - Valor (Estadual): 48.1 (média das 27 UFs)

*iGovSISP 2025 (SGD/MGI):*

*Esta seção apresenta 1 dos 3 indicadores de uma mesma bateria no objetivo. A média dimensional usa os itens desta seção; o índice do objetivo agrega a bateria uma só vez, conforme o Capítulo 3.*

- **G333DI**. iGovSISP: TEMA: Dados como Pilar para Entregas à Sociedade Assertiva: A governança e gestão de dados estão estruturadas para melhorar a qualidade e a consistência das políticas públicas, maximizando os benefícios para a sociedade. (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 87.61
  - *Estágio positivo mínimo:* A conexão entre a ausência da governança de dados e uma gestão deficiente de dados é reconhecida, bem como os riscos de impacto negativo para as entregas à sociedade de produtos de dados. A alta administração percebe que a indução de suas unidades com propósitos comuns para uso de dados alavancam políticas baseadas em evidências robustas e reduz os riscos de fracasso ou atrasos na implementação de produtos de dados.
  - *Leitura:* Mede governança e gestão de dados orientadas às entregas à sociedade, não qualidade técnica dos dados.

- **G309DI**. iGovSISP: TEMA: Promoção da Cultura de Dados pela Alta Gestão Assertiva: A alta gestão demonstra compromisso ativo na promoção de uma cultura orientada a dados, atuando como exemplo e engajando as equipes na valorização dos dados como ativos estratégicos. (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 91.45
  - *Estágio positivo mínimo:* A alta gestão da instituição reconhece verbalmente a importância dos dados, mas ainda não há um compromisso formal e estratégico consolidado sobre o tema. Esse reconhecimento, embora positivo, é insuficiente para assegurar uma compreensão ampla e o aculturamento de toda a organização em relação à governança e ao uso estratégico de dados.

*Esta seção apresenta 2 dos 6 indicadores de uma mesma bateria no objetivo. A média dimensional usa os itens desta seção; o índice do objetivo agrega a bateria uma só vez, conforme o Capítulo 3.*

- **G321DI**. iGovSISP: TEMA: Princípios e Políticas de Dados Assertiva: Princípios e políticas de dados são definidos e implementados visando o estabelecimento de valores e diretrizes para garantir que os dados sejam geridos de forma ética, segura e estratégica, alinhados aos objetivos institucionais e às regulamentações aplicáveis. (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 73.93
  - *Estágio positivo mínimo:* Princípios e políticas de dados são preliminares, mas de forma fragmentada ou não formalizada. Ainda não há disseminação ampla ou adesão consistente por parte das equipes.

- **G322DI**. iGovSISP: TEMA: Estrutura Organizacional para Governança de Dados Assertiva: Existe uma estrutura de governança de dados formalmente estabelecida, com papéis, responsabilidades e mecanismos de comunicação claros, garantindo a colaboração entre as áreas e a supervisão contínua do progresso e da efetividade do Programa de Governança de Dados. (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 61.54
  - *Estágio positivo mínimo:* Existem algumas iniciativas voltadas à gestão e governança de dados, como ações de conscientização ou projetos específicos, mas ainda sem a definição formal de papéis, responsabilidades ou mecanismos estruturados de coordenação e acompanhamento. A governança de dados ainda não está institucionalizada, e as ações ocorrem de forma isolada ou sem integração entre as áreas, sem supervisão clara sobre seu progresso.

- **G334DI**. iGovSISP: TEMA: Ética no Tratamento de Dados Assertiva: Princípios éticos sólidos no tratamento de dados são adotados, garantindo imparcialidade, equidade e transparência. São implementadas políticas robustas para a identificação e mitigação de vieses, auditorias regulares e treinamentos contínuos, assegurando que as decisões baseadas em dados sejam justas e responsáveis. (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 88.89
  - *Estágio positivo mínimo:* A importância da ética no tratamento de dados é reconhecida, assim como o risco de viés, mas ainda não possui um framework ou políticas específicas para lidar com essas questões. O conhecimento sobre riscos éticos ainda é limitado e não há diretrizes formais para mitigação.

### 8.3.2 Qualidade e gestão dos ativos de dados

*Definição:* Práticas de catalogação, modelagem, armazenamento e mensuração da qualidade dos dados produzidos pelos órgãos — documentação de ativos, glossário de termos de negócio, dados mestres, gestão de metadados, ciclo de vida, modelagem, dados não estruturados e geoespaciais. Sub-conceito não enunciado pelas recomendações da ENGD, mas presente no autodiagnóstico SISP como bloco operacional da governança.

*Média Nacional:* 62.8 (n=9; 14 itens).

**Indicadores:**

*iGovSISP 2025 (SGD/MGI):*

- **G301DI**. iGovSISP: TEMA: Relevância e Suficiência dos Dados Assertiva: Os dados coletados são relevantes e suficientes para embasar as análises e tomadas de decisão necessárias à gestão institucional. (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 90.17
  - *Estágio positivo mínimo:* Há iniciativas de esforços para garantir que os dados coletados sejam pertinentes aos objetivos da análise. No entanto, os dados ainda são insuficientes, necessitando de melhorias na quantidade e representatividade dos dados coletados. Processos de governança incipientes ou inexistentes.

*Esta seção apresenta 4 dos 6 indicadores de uma mesma bateria no objetivo. A média dimensional usa os itens desta seção; o índice do objetivo agrega a bateria uma só vez, conforme o Capítulo 3.*

- **G311DI**. iGovSISP: TEMA: Documentação dos Ativos de Dados Assertiva: Práticas para a documentação de seus ativos de dados são adotadas para garantir o registro padronizado de informações essenciais, como propriedade, formato, origem e descrição. (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 86.32
  - *Estágio positivo mínimo:* Há iniciativas pontuais de documentação dos ativos de dados, geralmente conduzidas por áreas específicas, sem uma abordagem padronizada ou diretrizes institucionais.

- **G312DI**. iGovSISP: TEMA: Glossário de Termos de Negócio Assertiva: Glossário de termos de negócio é mantido e utilizado para padronizar definições, reduzir ambiguidades e promover a comunicação clara entre as áreas. (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 55.98
  - *Estágio positivo mínimo:* A necessidade de um glossário de termos de negócio é reconhecida e iniciaram-se esforços pontuais para documentar alguns termos e definições. No entanto, essa documentação ainda não é abrangente nem amplamente adotada.

- **G313DI**. iGovSISP: TEMA: Gerenciamento de Dados Mestres e Dados de Referência Assertiva: Os processos para gerenciar dados mestres e dados de referência estão definidos, garantindo padronização e integridade nas bases utilizadas. (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 56.84
  - *Estágio positivo mínimo:* A importância de dados mestres e de referência começa a ser reconhecida, e iniciativas estruturadas estão sendo implementadas para sua identificação e mapeamento.

- **G324DI**. iGovSISP: TEMA: Gestão de Metadados Assertiva: Os metadados são gerenciados para aprimorar a capacidade da instituição de processar, manter, integrar, proteger, auditar e governar seus dados. (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 64.53
  - *Estágio positivo mínimo:* A importância da gestão de metadados é reconhecida e iniciaram-se esforços pontuais para documentar metadados técnicos, negociais e operacionais. No entanto, essas iniciativas são isoladas, sem padronização ou governança estabelecida.

*Esta seção apresenta 2 dos 6 indicadores de uma mesma bateria no objetivo. A média dimensional usa os itens desta seção; o índice do objetivo agrega a bateria uma só vez, conforme o Capítulo 3.*

- **G325DI**. iGovSISP: TEMA: Ciclo de Vida dos Dados Assertiva: Os dados da instituição seguem um ciclo de vida estruturado, com práticas de coleta, armazenamento, uso e descarte bem definidas. (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 67.95
  - *Estágio positivo mínimo:* A importância de gerenciar as etapas de ciclo de vida dos dados é reconhecida, mas só é feita apenas quando provocado por agente externo. Estão estabelecidos processos básicos de coleta, armazenamento e compartilhamento de dados. Está implementado um sistema de armazenamento centralizado, como um banco de dados. No entanto, ainda existem lacunas em termos de padronização e documentação adequada dos processos.

- **G326DI**. iGovSISP: TEMA: Dados não Estruturados Assertiva: Boas práticas e ferramentas são adotadas para coleta, armazenamento e análise de dados não estruturados, garantindo seu aproveitamento estratégico. (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 63.25
  - *Estágio positivo mínimo:* Existem habilidades limitadas, voltadas apenas para tipos específicos e previamente definidos de dados não estruturados.

- **G359DI**. iGovSISP: TEMA: Modelagem de Dados Assertiva: Práticas de modelagem de dados são adotadas para estruturar, organizar e documentar suas bases de dados, garantindo padronização e facilitando a gestão e o uso estratégico dos dados. (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 74.79
  - *Estágio positivo mínimo:* A importância da modelagem de dados é reconhecida e esforços pontuais foram iniciados para estruturar e documentar algumas bases de dados. No entanto, essas iniciativas são isoladas, não seguem um padrão institucional e não há governança definida sobre os modelos criados.

- **G361DI**. iGovSISP: TEMA: Alinhamento com Objetivos Estratégicos Assertiva: As atividades de coleta, análise e tomada de decisão com base em dados estão alinhadas à visão, missão e metas institucionais, garantindo suporte efetivo ao planejamento estratégico e à governança corporativa. (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 82.48
  - *Estágio positivo mínimo:* Práticas e processos alinhados com os objetivos estratégicos institucionais começam a ser implementados para tratamento e uso de dados, mas ainda não estão plenamente incorporados às atividades de governança e gestão de dados.

- **G381DI**. iGovSISP: TEMA: Letramento em Dados Assertiva: A promoção da capacitação é contínua entre os envolvidos para o uso efetivo de dados no apoio à tomada de decisões, assegurando que as habilidades necessárias sejam desenvolvidas em todas as áreas, de maneira alinhada aos objetivos estratégicos e às demandas institucionais. (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 64.10
  - *Estágio positivo mínimo:* Recursos começam a ser alocados para oferecer treinamento voltado ao aprimoramento de habilidades em dados, sempre que exigido externamente por requisitos legais ou políticas.

- **G382DI**. iGovSISP: TEMA: Gerenciamento de Dados Geoespaciais Assertiva: A captura, armazenamento e utilização dos dados geoespaciais é feita de forma estruturada, permitindo sua integração e análise para tomada de decisão, combinando atributos espaciais e não espaciais. (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 17.09
  - *Estágio positivo mínimo:* Os dados geoespaciais gerados são mantidos em silos informacionais, contudo já existem iniciativas voltadas à sua integração, compartilhamento e disseminação por meio da INDE, em conformidade com os padrões e normas homologados pela Comissão Nacional de Geoinformação (CONGEO). A difusão do uso da tecnologia junto a usuários não- especialistas é feita de forma esparsa.

*Esta seção apresenta 2 dos 3 indicadores de uma mesma bateria no objetivo. A média dimensional usa os itens desta seção; o índice do objetivo agrega a bateria uma só vez, conforme o Capítulo 3.*

- **G384DI**. iGovSISP: TEMA: Gestão de Qualidade de Dados Assertiva: Há adoção de uma abordagem governada para planejar, implementar e controlar atividades que garantam que os dados sejam coletados, gerenciados e utilizados de forma adequada ao seu propósito, assegurando a identificação, correção e prevenção de inconsistências e desvios de qualidade ao longo de todo o ciclo de vida dos dados. (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 59.40
  - *Estágio positivo mínimo:* Algumas áreas começam a adotar práticas básicas de gestão da qualidade, mas de forma isolada, sem integração com as demais iniciativas institucionais e sem uma abordagem governada.

- **G385DI**. iGovSISP: TEMA: Cultura de Qualidade de Dados Assertiva: Há promoção e estabelecimento de uma mentalidade orientada ao aumento da qualidade dos dados coletados, gerenciados e utilizados pela organização, fomentando uma mudança cultural para que os colaboradores compreendam seu papel e atuem ativamente na manutenção e aprimoramento da confiabilidade dos dados. (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 61.97
  - *Estágio positivo mínimo:* Algumas ações pontuais de conscientização sobre qualidade de dados começam a ser implementadas, mas sem um processo contínuo, engajamento efetivo das equipes ou integração com os objetivos organizacionais, o que limita o impacto na cultura organizacional.

- **G386DI**. iGovSISP: TEMA: Medição e Controle da Qualidade de Dados Assertiva: Há aferição e monitoramento contínuos sobre a qualidade dos dados coletados, gerenciados e utilizados, utilizando métricas, indicadores e técnicas diversas, como profilamento de dados e monitoramento de tendências, assegurando a confiabilidade, integridade e adequação ao uso. (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 44.44
  - *Estágio positivo mínimo:* Algumas métricas começam a ser aplicadas, mas sem padronização ou integração com processos institucionais. O monitoramento é esporádico, com o uso de técnicas isoladas, sem uma abordagem estruturada e contínua.

### 8.3.3 Interoperabilidade e compartilhamento entre órgãos

*Definição:* Mecanismos técnicos e institucionais que permitem integração de dados e sistemas entre órgãos públicos e estabelecimentos — adoção de padrões de interoperabilidade, integração de dados, integração de sistemas, monitoramento, compartilhamento de dados externos e troca eletrônica de informações na rede de saúde. Corresponde à Recomendação 5.2.

*Média Nacional:* 59.3 (n=5; 7 itens).

**Indicadores:**

*TIC Saúde 2024 (CETIC.br):*

- **B6** — O estabelecimento de saúde que utilizou Internet nos últimos 12 meses troca informações eletrônicas com outros estabelecimentos de saúde? (C7 questionário)
  - *Normalização:* Proporção 0-100% — agregação `mean` sobre as alternativas A-G (amplitude média de adoção).
  - Valor (Nacional): 33.30
- **B9** — O estabelecimento de saúde que utilizou Internet nos últimos 12 meses compartilha informações com a rede de atenção à saúde? (C8 questionário)
  - *Normalização:* Proporção 0-100% — usado diretamente.
  - Valor (Nacional): 26.10

*iGovSISP 2025 (SGD/MGI):*

- **G222SPD**. iGovSISP: Como o órgão gerencia a integração entre sistemas e bases de dados internas e externas? (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 89.74
  - *Estágio positivo mínimo:* Integrações parciais via scripts ou planilhas.
  - *Leitura:* Mede integração de sistemas e bases internas e externas, não comprova por si integração federativa.

*Esta seção apresenta 3 dos 6 indicadores de uma mesma bateria no objetivo. A média dimensional usa os itens desta seção; o índice do objetivo agrega a bateria uma só vez, conforme o Capítulo 3.*

- **G328DI**. iGovSISP: TEMA: Padrões e Normas para Interoperabilidade Assertiva: Normas, diretrizes e padrões são adotados para garantir a consistência e a compatibilidade dos dados compartilhados entre diferentes sistemas, aplicativos e plataformas. (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 76.92
  - *Estágio positivo mínimo:* Há adoção pontual de abordagem padronizada ou diretrizes institucionais de interoperabilidade de dados. A adoção de registros de referência estão em fase de implementação e isso limita a consistência e a compatibilidade dos dados compartilhados.

- **G329DI**. iGovSISP: TEMA: Integração de Sistemas Assertiva: Os sistemas heterogêneos da instituição estão integrados, permitindo a troca eficiente de informações entre diferentes plataformas, o que pode envolver a criação de mecanismos de interoperabilidade e canais de comunicação que permitam a troca de informações entre os sistemas de maneira padronizada e compatível. (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 93.59
  - *Estágio positivo mínimo:* A troca de dados entre sistemas, quando ocorre, se dá de forma limitada e pouco estruturada. Não são considerados os registros de referência definidos pela Infraestrutura Nacional de Dados.

- **G330DI**. iGovSISP: TEMA: Monitoramento e Avaliação da Interoperabilidade Assertiva: O monitoramento contínuo da interoperabilidade dos sistemas que permite identificar eventuais problemas ou gargalos são realizados, permitindo ações corretivas e melhorias do monitoramento da coleta, análise e interpretação de dados relacionado garantindo desempenho e confiabilidade. (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 27.78
  - *Estágio positivo mínimo:* Há iniciativas de monitoramento e a avaliação da interoperabilidade com objetivos claros e indicadores de desempenho definidos para medir a eficácia e a eficiência da interoperabilidade, para os quais há processos para coleta de dados relacionados à interoperabilidade, que são documentados e armazenados de forma estruturada.

- **G336DI**. iGovSISP: TEMA: Compartilhamento de Dados com Atores Externos Assertiva: O compartilhamento de dados com atores externos à instituição ocorre de forma eficiente, segura e em conformidade com regulamentações. (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 81.20
  - *Estágio positivo mínimo:* O estabelecimento e definição de políticas básicas para compartilhamento de dados com atores externos está iniciado, considerando requisitos de segurança, privacidade e conformidade.

### 8.3.4 Dados abertos

*Definição:* Existência e maturidade da publicação ativa de dados em formato aberto pelo poder público — política institucional, ecossistema de dados abertos no autodiagnóstico SISP, portal de dados abertos das prefeituras e formato de publicação dos dados administrativos pelos governos estaduais. Corresponde à Recomendação 5.2 (compartilhamento de dados) na vertente de transparência ativa via dados abertos.

*Média Nacional:* 61.0 (n=4; 4 itens).

**Indicadores:**

*MUNIC 2024 (IBGE):*

- **MUNIC_DADOS_ABERTOS** — A prefeitura possui portal de dados abertos?
  - *Normalização:* Proporção 0-100% — usado diretamente.
  - Valor (Nacional): 27.72

*ESTADIC 2024 (IBGE):*

- **ESTADIC_FORMATO_DADOS** — Formato de publicação dos dados da administração estadual (por tipo: orçamentos, receitas, despesas, balanços, LRF, compras/licitações, remunerações):
  - A) Em CSV/ODS/XLS/DOC (formato aberto)
  - B) Em PDF/imagem (formato fechado)
  - C) Em outro tipo
  - D) Não publica
  - Valor (Nacional): 48.50
  - Valor (Estadual): 48.5 (média das 27 UFs)

*iGovSISP 2025 (SGD/MGI):*

- **G314DI**. iGovSISP: TEMA: Implementação da Política de Dados Abertos Assertiva: A política de dados abertos da instituição está implementada com processos definidos para seleção, publicação e manutenção dos conjuntos de dados. (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 89.32
  - *Estágio positivo mínimo:* Existe um Plano de Dados Abertos (PDA) vigente, mas não se realiza a gestão dos dados abertos de forma centralizada, com um responsável específico para liderar sua execução. Os dados compartilhados ainda são limitados em escopo e volume e disponibilizados em formatos simples, como planilhas ou arquivos CSV, sem um esforço contínuo para aumentar sua quantidade ou qualidade. A reutilização dos dados está em um estágio inicial, com poucos incentivos ou mecanismos para fomentar a criação de novos produtos a partir dos dados abertos.

- **G315DI**. iGovSISP: TEMA: Ecossistema de Dados Abertos Assertiva: As contribuições para o ecossistema de dados abertos promovem um ambiente constituído por um conjunto de atores, tecnologias, processos e políticas que visam à disponibilização, acesso e reutilização de dados governamentais de forma livre e aberta para os interessados. (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 78.63
  - *Estágio positivo mínimo:* Iniciativas limitadas começam a ser implementadas e isoladas de colaboração com alguns atores, mas não há uma abordagem consistente para o mapeamento de atores envolvidos e interessados na produção e uso dos dados abertos disponibilizados. Além disso, os dados abertos compartilhados ainda são limitados em escopo, volume e qualidade, dificultando iniciativas de reutilização.

### 8.3.5 Análise de dados e decisão

*Definição:* Adoção de big data, capacidade analítica institucional, infraestrutura para análise de dados e uso efetivo dos dados na tomada de decisão pelos órgãos públicos e estabelecimentos de saúde. Corresponde à Recomendação 5.4.

*Média Nacional:* 63.1 (n=6; 6 itens).

**Indicadores:**

*TIC Governo Eletrônico 2023 (CETIC.br):*

- **H1** — O órgão realizou análise de grandes volumes de dados (big data)?
  - *Normalização:* Proporção 0-100% — usado diretamente.
  - Valor (Nacional): 25.01

*TIC Saúde 2024 (CETIC.br):*

- **D2** — O estabelecimento de saúde que utilizou Internet nos últimos 12 meses utiliza análise de grandes volumes de dados (big data) em saúde? (H2 questionário)
  - *Normalização:* Proporção 0-100% — usado diretamente.
  - Valor (Nacional): 5.02

*iGovSISP 2025 (SGD/MGI):*

*Esta seção apresenta 1 dos 6 indicadores de uma mesma bateria no objetivo. A média dimensional usa os itens desta seção; o índice do objetivo agrega a bateria uma só vez, conforme o Capítulo 3.*

- **G310DI**. iGovSISP: TEMA: Gestão Orientada a Dados Assertiva: Os dados são reconhecidos como um recurso estratégico na instituição e são utilizados de forma sistemática para embasar decisões em todos os níveis hierárquicos. (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 92.31
  - *Estágio positivo mínimo:* A importância dos dados para a tomada de decisão começa a ser reconhecida, mas a cultura de uso de dados ainda é incipiente. Existem algumas iniciativas isoladas para coleta e análise de dados, mas sem padronização ou integração entre áreas. O uso de dados na tomada de decisão ainda é limitado e ocorre de maneira reativa.
  - *Leitura:* Mede uso sistemático de dados nas decisões, não integração de bases.

- **G307DI**. iGovSISP: TEMA: Tomada de Decisão Baseada em Dados Assertiva: As decisões estratégicas e operacionais são fundamentadas em dados e em informações confiáveis, relevantes e alinhadas aos objetivos estratégicos organizacionais, garantindo maior assertividade e transparência. (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 89.74
  - *Estágio positivo mínimo:* Os primeiros esforços para utilizar dados na tomada de decisão, mas de forma limitada e reativa. Algumas ferramentas de BI começam a ser exploradas com uso de dashboards e automação de relatórios, mas ainda em fase inicial.

- **G308DI**. iGovSISP: TEMA: Desenvolvimento da Capacidade Analítica Assertiva: A instituição promove ações de capacitação para fortalecer a capacidade analítica dos servidores no uso de dados. (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 79.06
  - *Estágio positivo mínimo:* Há conhecimento básico em estatística descritiva e gráficos, mas com aplicação limitada. O interesse em capacitação é crescente, porém sem estrutura formal. A dependência de especialistas para análises ainda é alta, impactando a autonomia. Busca-se evoluir para interpretação independente e domínio prático dos dados.

- **G383DI**. iGovSISP: TEMA: Infraestrutura e Ferramentas para Análise de Dados Assertiva: A Infraestrutura e as ferramentas são adequadas para análise eficiente de dados em larga escala. (autodiagnóstico SISP, ordinal_maturidade)
  - *Normalização:* Percentual de respostas acima do primeiro estágio, sem presumir adoção plena.
  - Valor (Nacional): 87.18
  - *Estágio positivo mínimo:* Existem iniciativas pontuais de estruturação da infraestrutura de dados, mas de forma fragmentada e sem padronização. Ferramentas disponíveis são subutilizadas.

### 8.3.6 Recorte Estadual

*Definição:* Conjunto das variáveis dimensionadas do Objetivo 5 com observação por UF, agregadas para leitura federativa. Reúne `IOSPD_I05` (também presente em `Governança de dados`) e `ESTADIC_FORMATO_DADOS` (também presente em `Dados abertos`) — única exceção à regra de não-repetição entre dimensões.

*Média Estadual:* 48.3 (n=2; 2 itens).

![Recorte Estadual — Objetivo 5](../graficos/recortes/cap08_estadual.png)

**Indicadores:**

*ESTADIC 2024 (IBGE):*

- **ESTADIC_FORMATO_DADOS** — Formato de publicação dos dados da administração estadual (por tipo: orçamentos, receitas, despesas, balanços, LRF, compras/licitações, remunerações):
  - A) Em CSV/ODS/XLS/DOC (formato aberto)
  - B) Em PDF/imagem (formato fechado)
  - C) Em outro tipo
  - D) Não publica
  - Valor (Estadual): 48.5 (média das 27 UFs)

*IOSPD 2025 (ABEP-TIC):*

- **IOSPD_I05** — A UF possui estrutura colegiada de governança de dados, ampla, instituída formalmente e ativa?
  - Valor (Estadual): 48.1 (média das 27 UFs)
