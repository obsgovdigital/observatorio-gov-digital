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

O Objetivo 5 conta com 38 variáveis ativas no índice (2 da ESTADIC (IBGE), 30 do iGovSISP (SGD/MGI), 1 do IOSPD (ABEP-TIC), 1 da MUNIC (IBGE), 1 da TIC Governo Eletrônico (CETIC.br) e 3 da TIC Saúde (CETIC.br)), que entram na agregação do índice como 26 componentes (ver Capítulo 3). Todas contribuem para a visão Nacional. **Três** têm observação por UF (`Egov0711-Egov0713, Egov0715, Egov0721-Egov0723, Egov0725, Egov0731-Egov0733, Egov0735, Egov0741-Egov0743, Egov0745, Egov0751-Egov0753, Egov0755, Egov0761-Egov0763, Egov0765, Egov0771-Egov0773, Egov0775`, `Etic252` e `I.5`) e dão origem à dimensão `Recorte Estadual`. Apenas **uma** tem observação por capital (`Mtic272`), abaixo do limiar de duas variáveis para criação de dimensão federativa dedicada: não se cria `Recorte de Capitais`, e a variável aparece na dimensão temática `Dados abertos`.

## 8.3 Dimensões

As 38 variáveis ativas do Objetivo 5 foram organizadas em cinco dimensões temáticas, complementadas pela dimensão federativa `Recorte Estadual`. As dimensões temáticas se alinham, quando aplicável, às Recomendações 5.1 (governança de dados), 5.2 (interoperabilidade), 5.4 (análise de dados) e 5.6 (compartilhamento e padrões comuns de dados entre entes) da Portaria. O recorte reagrupa as variáveis com observação por UF.

![Dimensões do Objetivo 5](../graficos/dimensoes/cap08.png)

### 8.3.1 Governança de dados

*Definição:* Estruturas, políticas, cultura e princípios éticos de governança de dados, incluindo sua orientação à qualidade e consistência das políticas públicas e às entregas à sociedade. Essa orientação não é uma medida de qualidade técnica dos dados. Corresponde à Recomendação 5.1; com vínculo secundário à Recomendação 5.4.

*Média Nacional:* 38,7 (n=5; 6 itens).

**Indicadores:**

*IOSPD 2025 (ABEP-TIC):*

- **I.5**. A UF possui estrutura colegiada de governança de dados, ampla, instituída formalmente e ativa?
  - *Normalização:* Índice 0-10, multiplicado por 10.
  - Valor (Nacional): 48,15
  - Valor (Estadual): 48,1 (média das 27 UFs)

*iGovSISP 2025 (SGD/MGI):*

*Esta seção apresenta 1 dos 3 indicadores de uma mesma bateria no objetivo. A média dimensional usa o item desta seção; o índice do objetivo agrega a bateria uma só vez, conforme o Capítulo 3.*

- **G333DI**. TEMA: Dados como Pilar para Entregas à Sociedade Assertiva: A governança e gestão de dados estão estruturadas para melhorar a qualidade e a consistência das políticas públicas, maximizando os benefícios para a sociedade.
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 50,43
  - *Estágio positivo mínimo:* Existe a preocupação sobre a compreensão de como as práticas de governança de dados são importantes para integrar e convergir os esforços das diversas unidades e que isso tem impacto direto nas entregas de produtos de dados para a sociedade. Embora haja uma conscientização sobre como uma boa gestão de dados pode apoiar essas entregas, as iniciativas nesse sentido podem não estar totalmente alinhadas com todas as áreas de entrega para a sociedade, sendo necessário um esforço para melhorar a consistência e a integração de dados e das equipes.
  - *Leitura:* Mede governança e gestão de dados orientadas às entregas à sociedade, não qualidade técnica dos dados.

- **G309DI**. TEMA: Promoção da Cultura de Dados pela Alta Gestão Assertiva: A alta gestão demonstra compromisso ativo na promoção de uma cultura orientada a dados, atuando como exemplo e engajando as equipes na valorização dos dados como ativos estratégicos.
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 50,00
  - *Estágio positivo mínimo:* A alta gestão demonstra um compromisso crescente com o uso estratégico dos dados, promovendo a tomada de decisão orientada por dados. Além disso, patrocina ações para conscientizar e engajar a organização sobre as estruturas, diretrizes e processos de governança de dados, fortalecendo a cultura organizacional nesse tema.

*Esta seção apresenta 2 dos 6 indicadores de uma mesma bateria no objetivo. A média dimensional usa os itens desta seção; o índice do objetivo agrega a bateria uma só vez, conforme o Capítulo 3.*

- **G321DI**. TEMA: Princípios e Políticas de Dados Assertiva: Princípios e políticas de dados são definidos e implementados visando o estabelecimento de valores e diretrizes para garantir que os dados sejam geridos de forma ética, segura e estratégica, alinhados aos objetivos institucionais e às regulamentações aplicáveis.
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 31,20
  - *Estágio positivo mínimo:* Princípios e políticas de dados estão formalizados e abrangem diretrizes gerais para a gestão e governança de dados. Contudo, sua aplicação ainda é limitada, e a disseminação para as equipes e processos está em progresso.

- **G322DI**. TEMA: Estrutura Organizacional para Governança de Dados Assertiva: Existe uma estrutura de governança de dados formalmente estabelecida, com papéis, responsabilidades e mecanismos de comunicação claros, garantindo a colaboração entre as áreas e a supervisão contínua do progresso e da efetividade do Programa de Governança de Dados.
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 31,20
  - *Estágio positivo mínimo:* A estrutura de governança de dados está em processo de desenvolvimento, com a definição inicial de alguns papéis e responsabilidades. Diretrizes, políticas e frameworks estão em elaboração ou avaliação. Já há esforços para disseminação do tema por meio de treinamentos, workshops ou iniciativas de comunicação, promovendo maior engajamento e alinhamento entre as partes envolvidas. Iniciam-se mecanismos básicos de supervisão, mas ainda sem uma estrutura consolidada para monitoramento contínuo.

- **G334DI**. TEMA: Ética no Tratamento de Dados Assertiva: Princípios éticos sólidos no tratamento de dados são adotados, garantindo imparcialidade, equidade e transparência. São implementadas políticas robustas para a identificação e mitigação de vieses, auditorias regulares e treinamentos contínuos, assegurando que as decisões baseadas em dados sejam justas e responsáveis.
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 13,68
  - *Estágio positivo mínimo:* Diretrizes básicas para ética no tratamento de dados estão implementadas, incluindo medidas iniciais para identificação e mitigação de viés. Equipes começam a receber treinamento sobre ética de dados, e há discussões sobre a necessidade de mecanismos de responsabilização e auditoria.

### 8.3.2 Qualidade e gestão dos ativos de dados

*Definição:* Práticas de catalogação, modelagem, armazenamento e mensuração da qualidade dos dados produzidos pelos órgãos: relevância e suficiência dos dados, documentação de ativos, glossário de termos de negócio, dados mestres, gestão de metadados, ciclo de vida, modelagem, dados não estruturados e geoespaciais, alinhamento do tratamento de dados aos objetivos estratégicos, letramento em dados e gestão, cultura e medição da qualidade dos dados. Corresponde à Recomendação 5.6 (padrões de qualidade, catalogação e semântica); com vínculo secundário à Recomendação 5.4.

*Média Nacional:* 26,8 (n=9; 14 itens).

**Indicadores:**

*iGovSISP 2025 (SGD/MGI):*

- **G301DI**. TEMA: Relevância e Suficiência dos Dados Assertiva: Os dados coletados são relevantes e suficientes para embasar as análises e tomadas de decisão necessárias à gestão institucional.
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 46,58
  - *Estágio positivo mínimo:* Os processos de gestão de dados são formalizados e documentados. Existem políticas e procedimentos claros para a coleta, armazenamento e uso de dados. Monitoramento inicial da completude, consistência e acurácia dos dados.

*Esta seção apresenta 4 dos 6 indicadores de uma mesma bateria no objetivo. A média dimensional usa os itens desta seção; o índice do objetivo agrega a bateria uma só vez, conforme o Capítulo 3.*

- **G311DI**. TEMA: Documentação dos Ativos de Dados Assertiva: Práticas para a documentação de seus ativos de dados são adotadas para garantir o registro padronizado de informações essenciais, como propriedade, formato, origem e descrição.
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 40,17
  - *Estágio positivo mínimo:* A importância da documentação dos ativos de dados é reconhecida e iniciou a definição de diretrizes para padronizar esse processo. Algumas áreas já adotam práticas mais estruturadas, mas ainda há inconsistências na aplicação e na abrangência da documentação.

- **G312DI**. TEMA: Glossário de Termos de Negócio Assertiva: Glossário de termos de negócio é mantido e utilizado para padronizar definições, reduzir ambiguidades e promover a comunicação clara entre as áreas.
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 19,23
  - *Estágio positivo mínimo:* Existe um glossário de termos de negócio em estágio inicial, abrangendo os principais conceitos utilizados internamente. Entretanto, sua adoção ainda é parcial, sem um processo estruturado de atualização e governança.

- **G313DI**. TEMA: Gerenciamento de Dados Mestres e Dados de Referência Assertiva: Os processos para gerenciar dados mestres e dados de referência estão definidos, garantindo padronização e integridade nas bases utilizadas.
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 16,67
  - *Estágio positivo mínimo:* Os processos formais de gestão de dados mestres e de referência estão disponíveis e estabelecidos.

- **G324DI**. TEMA: Gestão de Metadados Assertiva: Os metadados são gerenciados para aprimorar a capacidade da instituição de processar, manter, integrar, proteger, auditar e governar seus dados.
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 23,93
  - *Estágio positivo mínimo:* Práticas iniciais e padronizadas são adotadas na gestão de metadados em alguns domínios de dados. No entanto, a documentação ainda não é abrangente, e a integração entre metadados técnicos, negociais e operacionais é limitada.

*Esta seção apresenta 2 dos 6 indicadores de uma mesma bateria no objetivo. A média dimensional usa os itens desta seção; o índice do objetivo agrega a bateria uma só vez, conforme o Capítulo 3.*

- **G325DI**. TEMA: Ciclo de Vida dos Dados Assertiva: Os dados da instituição seguem um ciclo de vida estruturado, com práticas de coleta, armazenamento, uso e descarte bem definidas.
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 37,61
  - *Estágio positivo mínimo:* Diretrizes, políticas, orientações, tecnologias e processos estão implementados para gerenciar todas as etapas de ciclo de vida dos dados. Os dados coletados são armazenados em repositórios apropriados, como bancos de dados, Data Warehaouse (DW) ou outras soluções equivalentes. A arquitetura de armazenamento garante compartilhamento, segurança e privacidade dos dados.

- **G326DI**. TEMA: Dados não Estruturados Assertiva: Boas práticas e ferramentas são adotadas para coleta, armazenamento e análise de dados não estruturados, garantindo seu aproveitamento estratégico.
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 31,20
  - *Estágio positivo mínimo:* Começam a surgir iniciativas e pesquisas voltadas ao desenvolvimento de novas habilidades para análise de dados não estruturados, conforme demandas pontuais.

- **G359DI**. TEMA: Modelagem de Dados Assertiva: Práticas de modelagem de dados são adotadas para estruturar, organizar e documentar suas bases de dados, garantindo padronização e facilitando a gestão e o uso estratégico dos dados.
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 41,88
  - *Estágio positivo mínimo:* Práticas iniciais e padronizadas de modelagem de dados são aplicadas a alguns sistemas ou projetos específicos. Contudo, a adoção ainda é limitada e os modelos não são amplamente documentados nem possuem uma governança centralizada para garantir sua consistência e evolução.

- **G361DI**. TEMA: Alinhamento com Objetivos Estratégicos Assertiva: As atividades de coleta, análise e tomada de decisão com base em dados estão alinhadas à visão, missão e metas institucionais, garantindo suporte efetivo ao planejamento estratégico e à governança corporativa.
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 33,76
  - *Estágio positivo mínimo:* Uma abordagem mais estruturada para o uso de dados está sendo desenvolvida, visando alinhar as ações de governança e gestão de dados ao planejamento estratégico.

- **G381DI**. TEMA: Letramento em Dados Assertiva: A promoção da capacitação é contínua entre os envolvidos para o uso efetivo de dados no apoio à tomada de decisões, assegurando que as habilidades necessárias sejam desenvolvidas em todas as áreas, de maneira alinhada aos objetivos estratégicos e às demandas institucionais.
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 32,05
  - *Estágio positivo mínimo:* Treinamentos pontuais e direcionados são promovidos, voltados principalmente a um grupo restrito de colaboradores especializados. Complementarmente, suporte e capacitações personalizadas são oferecidas para servidores envolvidos na gestão de dados, atendendo às demandas específicas de suas funções.

- **G382DI**. TEMA: Gerenciamento de Dados Geoespaciais Assertiva: A captura, armazenamento e utilização dos dados geoespaciais é feita de forma estruturada, permitindo sua integração e análise para tomada de decisão, combinando atributos espaciais e não espaciais.
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 6,41
  - *Estágio positivo mínimo:* Dados geoespaciais são compartilhados por meio de metadados na INDE e em conformidade com os padrões e normas homologados pela Comissão Nacional de Geoinformação (CONGEO), promovendo a transparência e eliminando a duplicidade de esforços e recursos, ao permitir que o acesso público aos dados geoespaciais sejam amplamente utilizados e aproveitados por diferentes usuários e instituições. Há treinamentos periódicos para utilização da tecnologia por usuários não-especializados. A plataforma de SIG é reconhecida como um ativo importante para a instituição.

*Esta seção apresenta 2 dos 3 indicadores de uma mesma bateria no objetivo. A média dimensional usa os itens desta seção; o índice do objetivo agrega a bateria uma só vez, conforme o Capítulo 3.*

- **G384DI**. TEMA: Gestão de Qualidade de Dados Assertiva: Há adoção de uma abordagem governada para planejar, implementar e controlar atividades que garantam que os dados sejam coletados, gerenciados e utilizados de forma adequada ao seu propósito, assegurando a identificação, correção e prevenção de inconsistências e desvios de qualidade ao longo de todo o ciclo de vida dos dados.
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 15,38
  - *Estágio positivo mínimo:* São definidos padrões, requisitos e especificações iniciais para controles de qualidade, e a organização começa a implementar processos para medir, monitorar e relatar os níveis de qualidade dos dados, focando nos dados críticos.

- **G385DI**. TEMA: Cultura de Qualidade de Dados Assertiva: Há promoção e estabelecimento de uma mentalidade orientada ao aumento da qualidade dos dados coletados, gerenciados e utilizados pela organização, fomentando uma mudança cultural para que os colaboradores compreendam seu papel e atuem ativamente na manutenção e aprimoramento da confiabilidade dos dados.
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 9,83
  - *Estágio positivo mínimo:* Os processos estruturados de treinamento e sensibilização sobre a importância da qualidade de dados são implementados, promovendo maior engajamento e desenvolvendo competências essenciais entre os colaboradores, estabelecendo as bases para uma mudança cultural positiva.

- **G386DI**. TEMA: Medição e Controle da Qualidade de Dados Assertiva: Há aferição e monitoramento contínuos sobre a qualidade dos dados coletados, gerenciados e utilizados, utilizando métricas, indicadores e técnicas diversas, como profilamento de dados e monitoramento de tendências, assegurando a confiabilidade, integridade e adequação ao uso.
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 8,12
  - *Estágio positivo mínimo:* Métricas iniciais para qualidade de dados são estabelecidas, o monitorar dados críticos é iniciado e já se aplica técnicas como profilamento de dados, análise de tendências e monitoramento de incidentes de qualidade, permitindo identificar padrões, violação de requisitos e tendências ao longo do tempo.

### 8.3.3 Interoperabilidade e compartilhamento entre órgãos

*Definição:* Mecanismos técnicos e institucionais que permitem integração de dados e sistemas entre órgãos públicos e estabelecimentos: adoção de padrões de interoperabilidade, integração de dados, integração de sistemas, monitoramento, compartilhamento de dados externos e troca eletrônica de informações na rede de saúde. Corresponde à Recomendação 5.2; com vínculo secundário à Recomendação 5.6.

*Média Nacional:* 42,5 (n=5; 7 itens).

**Indicadores:**

*TIC Saúde 2024 (CETIC.br):*

- **B6**. Neste estabelecimento, há algum sistema eletrônico que permite enviar ou receber [...]
  - *Normalização:* Piso sobre a população inteira, com os casos fora do filtro contados como resposta negativa (ver Seção 3.2.4).
  - *Contagem:* Não há sim por estabelecimento: o valor é a média das proporções de Sim nos itens Informações clínicas para profissionais de saúde de outros estabelecimentos; Encaminhamentos de pacientes para outros estabelecimentos; Relatório sobre a assistência prestada ao paciente no momento em que teve alta ou foi encaminhado a outro estabelecimento; Lista de todos os medicamentos prescritos ao paciente para outros estabelecimentos; Resultados de exames laboratoriais do paciente para outros estabelecimentos; Resultados de exames de imagem do paciente para outros estabelecimentos; Plano de cuidados da enfermagem para outros estabelecimentos. O percentual condicionado é multiplicado pela proporção de Sim do filtro no mesmo estrato, em cadeia quando necessário; quem ficou fora do filtro conta como resposta negativa. O resultado é um piso sobre a população inteira dos estabelecimentos públicos, conforme a Seção 3.2.4.
  - Valor (Nacional): 45,11
- **B9**. O sistema eletrônico de registro das informações dos pacientes deste estabelecimento recebe ou envia informações diretamente para outros sistemas eletrônicos da rede de atenção à saúde básica, especializada ou hospitalar?
  - *Normalização:* Piso sobre a população inteira, com os casos fora do filtro contados como resposta negativa (ver Seção 3.2.4).
  - *Contagem:* Categorias: Sim, Não, Não sabe e Não respondeu; só Sim conta. O percentual condicionado é multiplicado pela proporção de Sim do filtro no mesmo estrato, em cadeia quando necessário; quem ficou fora do filtro conta como resposta negativa. O resultado é um piso sobre a população inteira dos estabelecimentos públicos, conforme a Seção 3.2.4.
  - Valor (Nacional): 40,28

*iGovSISP 2025 (SGD/MGI):*

- **G222SPD**. Como o órgão gerencia a integração entre sistemas e bases de dados internas e externas?
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 73,93
  - *Estágio positivo mínimo:* Integrações automatizadas apenas entre sistemas internos.
  - *Leitura:* Mede integração de sistemas e bases internas e externas, não comprova por si integração federativa.

*Esta seção apresenta 3 dos 6 indicadores de uma mesma bateria no objetivo. A média dimensional usa os itens desta seção; o índice do objetivo agrega a bateria uma só vez, conforme o Capítulo 3.*

- **G328DI**. TEMA: Padrões e Normas para Interoperabilidade Assertiva: Normas, diretrizes e padrões são adotados para garantir a consistência e a compatibilidade dos dados compartilhados entre diferentes sistemas, aplicativos e plataformas.
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 20,51
  - *Estágio positivo mínimo:* Há o reconhecimento da importância da interoperabilidade dos ativos de dados e iniciou-se a definição de diretrizes para padronizar esse processo. Há inventário de metadados estruturado ou adesão ao Catálogo Nacional de Metadados, há adoção parcial de registros de referência.

- **G329DI**. TEMA: Integração de Sistemas Assertiva: Os sistemas heterogêneos da instituição estão integrados, permitindo a troca eficiente de informações entre diferentes plataformas, o que pode envolver a criação de mecanismos de interoperabilidade e canais de comunicação que permitam a troca de informações entre os sistemas de maneira padronizada e compatível.
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 39,32
  - *Estágio positivo mínimo:* Há diretrizes e padrões estabelecidos para a interoperabilidade de dados da Instituição em compatibilidade com a Infraestrutura Nacional de Dados (IND), por exemplo registros de referência, conecta gov.br e o Catálogo Nacional de Metadados.

- **G330DI**. TEMA: Monitoramento e Avaliação da Interoperabilidade Assertiva: O monitoramento contínuo da interoperabilidade dos sistemas que permite identificar eventuais problemas ou gargalos são realizados, permitindo ações corretivas e melhorias do monitoramento da coleta, análise e interpretação de dados relacionado garantindo desempenho e confiabilidade.
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 6,84
  - *Estágio positivo mínimo:* Há um programa de implementação do monitoramento integrado de avaliação da interoperabilidade dos sistemas que compõem o conjunto de dados, com processos contínuos de coleta e análise dados e geração de relatórios por meio de ferramentas. Há metas de desempenho estabelecidas, comparando os resultados atuais com as expectativas e os requisitos preestabelecidos.

- **G336DI**. TEMA: Compartilhamento de Dados com Atores Externos Assertiva: O compartilhamento de dados com atores externos à instituição ocorre de forma eficiente, segura e em conformidade com regulamentações.
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 31,20
  - *Estágio positivo mínimo:* Há um programa estruturado para compartilhamento de dados com atores externos constituído de processos formais implementados e os processos são revisados e atualizados periodicamente.

### 8.3.4 Dados abertos

*Definição:* Existência e maturidade da publicação ativa de dados pelo poder público: política institucional de dados abertos, ecossistema de dados abertos no autodiagnóstico SISP, portal de dados abertos das prefeituras e dos governos estaduais e publicação, em qualquer formato, dos dados gerais da administração pelos governos estaduais. Corresponde à Recomendação 5.2 (compartilhamento de dados) na vertente de transparência ativa via dados abertos.

*Média Nacional:* 56,0 (n=5; 5 itens).

**Indicadores:**

*MUNIC 2024 (IBGE):*

- **Mtic272**. Existe atualmente no município: Portal de dados abertos
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0; valor Nacional é a proporção 0-100% sobre o universo de prefeituras.
  - Valor (Nacional): 27,72

*ESTADIC 2024 (IBGE):*

- **Egov0711-Egov0713, Egov0715, Egov0721-Egov0723, Egov0725, Egov0731-Egov0733, Egov0735, Egov0741-Egov0743, Egov0745, Egov0751-Egov0753, Egov0755, Egov0761-Egov0763, Egov0765, Egov0771-Egov0773, Egov0775**. Em relação à publicação dos dados gerais da administração estadual:
  - *Contagem:* Linhas da grade: Orçamentos; Receitas; Despesas; Balanços; Prestação de contas da Lei de Responsabilidade Fiscal; Compras e licitações; Dados individualizados das remunerações e subsídios recebidos pelos servidores do governo estadual. O Observatório pontua cada uma das linhas 7.1 a 7.7 com 100 se a UF marcou algum formato (x.1, x.2 ou x.3) e com 0 se não marcou nenhum, seja porque marcou Não publica (x.5), seja por não resposta; calcula, por UF, a média das sete linhas e a média nacional das 27 UFs. Publicar o mesmo conjunto em mais de um formato não aumenta a nota, e publicar em PDF ou imagem conta tanto quanto publicar em CVS, ODS, XLS, DOC: a variável mede se o conjunto é publicado, não a qualidade do formato.
  - 1) CVS, ODS, XLS, DOC
  - 2) PDF ou imagem
  - 3) Outro tipo de arquivo
  - 5) Não publica
  - Valor (Nacional): 96,30
  - Valor (Estadual): 96,3 (média das 27 UFs; 26 UFs em 100,0 e 1 em 0,0).

- **Etic252**. O estado conta atualmente com: Portal de dados abertos
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0; valor Nacional é a proporção 0-100% sobre o universo de governos estaduais.
  - Valor (Nacional): 70,37
  - Valor (Estadual): 70,37

*iGovSISP 2025 (SGD/MGI):*

- **G314DI**. TEMA: Implementação da Política de Dados Abertos Assertiva: A política de dados abertos da instituição está implementada com processos definidos para seleção, publicação e manutenção dos conjuntos de dados.
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 56,41
  - *Estágio positivo mínimo:* A abertura de dados é realizada com objetivos claros de gerar valor, fomentar a inovação e promover soluções que atendam a necessidades específicas da sociedade e do governo. A gestão de dados abertos é realizada de forma centralizada, com um responsável específico por sua condução. A cultura de dados abertos está se fortalecendo, com foco crescente na formação e no uso estratégico dos dados. Adicionalmente, processos regulares de atualização das bases de dados abertos já publicadas são estabelecidos.

- **G315DI**. TEMA: Ecossistema de Dados Abertos Assertiva: As contribuições para o ecossistema de dados abertos promovem um ambiente constituído por um conjunto de atores, tecnologias, processos e políticas que visam à disponibilização, acesso e reutilização de dados governamentais de forma livre e aberta para os interessados.
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 29,06
  - *Estágio positivo mínimo:* Os atores que compõem o ecossistema estão mapeados, os processos estruturados foram definidos, e os canais de comunicação e interação entre publicadores e consumidores de dados abertos estão estabelecidos. Ferramentas tecnológicas permitem que os dados abertos sejam disponibilizados de forma acessível e organizada e a instituição estabelece diretrizes e processos que incentivam a publicação de dados abertos de forma mais consistente e ampla.

### 8.3.5 Análise de dados e decisão

*Definição:* Adoção de big data, capacidade analítica institucional, infraestrutura para análise de dados e uso efetivo dos dados na tomada de decisão pelos órgãos públicos e estabelecimentos de saúde. Corresponde à Recomendação 5.4.

*Média Nacional:* 34,2 (n=6; 6 itens).

**Indicadores:**

*TIC Governo Eletrônico 2023 (CETIC.br):*

- **H1**. Nos últimos 12 meses, este órgão fez análises de Big Data?
  - *Normalização:* Proporção 0-100%, usada diretamente.
  - Valor (Nacional): 25,01

*TIC Saúde 2024 (CETIC.br):*

- **D2A**. Nos últimos 12 meses, este estabelecimento de saúde fez análises de Big Data?
  - *Normalização:* Piso sobre a população inteira, com os casos fora do filtro contados como resposta negativa (ver Seção 3.2.4).
  - *Contagem:* Categorias: Sim, Não, Não sabe e Não respondeu; só Sim conta. O percentual condicionado é multiplicado pela proporção de Sim do filtro no mesmo estrato, em cadeia quando necessário; quem ficou fora do filtro conta como resposta negativa. O resultado é um piso sobre a população inteira dos estabelecimentos públicos, conforme a Seção 3.2.4.
  - Valor (Nacional): 2,25

*iGovSISP 2025 (SGD/MGI):*

*Esta seção apresenta 1 dos 6 indicadores de uma mesma bateria no objetivo. A média dimensional usa o item desta seção; o índice do objetivo agrega a bateria uma só vez, conforme o Capítulo 3.*

- **G310DI**. TEMA: Gestão Orientada a Dados Assertiva: Os dados são reconhecidos como um recurso estratégico na instituição e são utilizados de forma sistemática para embasar decisões em todos os níveis hierárquicos.
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 40,17
  - *Estágio positivo mínimo:* A cultura de decisão baseada em dados está em fase de consolidação e já se reconhecem os dados como um ativo estratégico. Existem processos estruturados para coleta, armazenamento e análise de dados, com maior integração entre áreas. Técnicas de análise começam a ser utilizadas para subsidiar decisões, e há um esforço para capacitação das equipes em gestão e uso de dados.
  - *Leitura:* Mede uso sistemático de dados nas decisões, não integração de bases.

- **G307DI**. TEMA: Tomada de Decisão Baseada em Dados Assertiva: As decisões estratégicas e operacionais são fundamentadas em dados e em informações confiáveis, relevantes e alinhadas aos objetivos estratégicos organizacionais, garantindo maior assertividade e transparência.
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 52,56
  - *Estágio positivo mínimo:* Decisões começam a ser frequentemente baseadas em dados, com o uso de BI e análises descritivas. Indicadores e métricas bem definidos e monitorados regularmente.

- **G308DI**. TEMA: Desenvolvimento da Capacidade Analítica Assertiva: A instituição promove ações de capacitação para fortalecer a capacidade analítica dos servidores no uso de dados.
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 37,61
  - *Estágio positivo mínimo:* As equipes começam a desenvolver habilidades analíticas, incluindo estatística básica. Treinamentos internos começam a ser oferecidos, mas a expertise ainda é limitada.

- **G383DI**. TEMA: Infraestrutura e Ferramentas para Análise de Dados Assertiva: A Infraestrutura e as ferramentas são adequadas para análise eficiente de dados em larga escala.
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 47,44
  - *Estágio positivo mínimo:* Há uma infraestrutura tecnológica minimamente estabelecida, com bancos de dados centralizados e uso de ferramentas analíticas mais robustas em contextos específicos.

### 8.3.6 Recorte Estadual

*Definição:* Conjunto das variáveis dimensionadas do Objetivo 5 com observação por UF, agregadas para leitura federativa. Reúne `I.5` (também presente em `Governança de dados`) e `Egov0711-Egov0713, Egov0715, Egov0721-Egov0723, Egov0725, Egov0731-Egov0733, Egov0735, Egov0741-Egov0743, Egov0745, Egov0751-Egov0753, Egov0755, Egov0761-Egov0763, Egov0765, Egov0771-Egov0773, Egov0775` e `Etic252` (também presentes em `Dados abertos`), única exceção à regra de não-repetição entre dimensões.

*Média Estadual:* 71,6 (n=3; 3 itens).

![Recorte Estadual do Objetivo 5](../graficos/recortes/cap08_estadual.png)

**Indicadores:**

*ESTADIC 2024 (IBGE):*

- **Egov0711-Egov0713, Egov0715, Egov0721-Egov0723, Egov0725, Egov0731-Egov0733, Egov0735, Egov0741-Egov0743, Egov0745, Egov0751-Egov0753, Egov0755, Egov0761-Egov0763, Egov0765, Egov0771-Egov0773, Egov0775**. Em relação à publicação dos dados gerais da administração estadual:
  - 1) CVS, ODS, XLS, DOC
  - 2) PDF ou imagem
  - 3) Outro tipo de arquivo
  - 5) Não publica
  - Valor (Estadual): 96,3 (26 UFs em 100,0 e 1 em 0,0).

- **Etic252**. O estado conta atualmente com: Portal de dados abertos
  - Valor (Estadual): 70,37

*IOSPD 2025 (ABEP-TIC):*

- **I.5**. A UF possui estrutura colegiada de governança de dados, ampla, instituída formalmente e ativa?
  - Valor (Estadual): 48,1 (média das 27 UFs)
