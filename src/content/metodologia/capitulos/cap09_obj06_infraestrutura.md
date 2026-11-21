# 9. Objetivo 6: Infraestrutura

> Dispor de infraestrutura moderna, segura, escalável e robusta para a implantação e evolução de soluções de governo digital, promovendo soluções estruturantes compartilhadas, uso de padrões comuns e a integração entre os entes federados.

A metodologia (normalização, agregação, tratamento de não-resposta) está descrita no Capítulo 3.

## 9.1 Recomendações da ENGD para este objetivo

A Portaria SGD/MGI nº 5.395/2026 elenca sete recomendações aos entes federados para a oferta de infraestrutura digital adequada:

- **6.1** Adotar e contribuir com o desenvolvimento de soluções de plataformas digitais escaláveis e responsáveis no provimento de serviços públicos e demais processos da administração pública, incluindo a disponibilização de assistentes e agentes e automação de processos com sistemas de inteligência artificial.
- **6.2** Adotar e contribuir para formação de arranjos colaborativos de disponibilização de infraestrutura e soluções digitais, fomentando inclusive a participação das empresas públicas de tecnologia de informação nesses arranjos, e promovendo o reúso de serviços digitais entre entes federados por meio de mecanismos abertos e padronizados de documentação e disponibilização.
- **6.3** Prover opções de conectividade pública, para acesso gratuito e facilitado a soluções de prestação de serviço digital pela sociedade, especialmente utilizando estrutura de canais de atendimento presencial e outros prédios e equipamentos públicos.
- **6.4** Estabelecer iniciativas para ampliar e melhorar a infraestrutura de rede em órgãos públicos, especialmente em locais de grande demanda, garantindo conectividade adequada para a prestação eficiente de serviços e o trabalho dos servidores, considerando inclusive parcerias e programas nacionais voltados para essa finalidade.
- **6.5** Definir uma estratégia adequada para armazenamento e processamento de dados, levando em conta a economicidade, segurança, soberania e resiliência, com atenção especial às condições dos data centers em uso.
- **6.6** Adotar e disseminar guias, diretrizes, padrões e modelos de referência para orientar a aquisição, o desenvolvimento, a implementação e o uso de soluções de inteligência artificial nos serviços públicos.
- **6.7** Promover a adoção de arquiteturas orientadas à integração e à disponibilização de infraestrutura compartilhada que permita a orquestração automatizada de serviços entre diferentes entes federados, especialmente para jornadas de vida do cidadão que exijam tramitação em mais de uma esfera de governo.

## 9.2 Cobertura por nível federativo

O Objetivo 6 conta com 32 variáveis ativas no índice (1 da Cobertura móvel (ANATEL), 5 do Censo Escolar (INEP), 2 da ESTADIC (IBGE), 6 do iGovSISP (SGD/MGI), 8 da MUNIC (IBGE), 1 da PNAD Contínua TIC (IBGE), 1 da TIC Educação (CETIC.br) e 8 da TIC Governo Eletrônico (CETIC.br)), que entram na agregação do índice como 21 componentes (ver Capítulo 3). Todas contribuem para a visão Nacional. Quatorze variáveis têm observação por capital: uma da Cobertura móvel (`BLM02`), as cinco do Censo Escolar e as oito da MUNIC. Isso justifica a dimensão **`Recorte de Capitais`**. Duas variáveis têm observação por UF (`Etic20` e `Etic17`, ESTADIC 2024), cumprindo o limiar mínimo de duas variáveis no mesmo nível federativo, o que justifica a dimensão **`Recorte Estadual`**.

## 9.3 Dimensões

As 32 variáveis ativas do Objetivo 6 foram organizadas em sete dimensões temáticas, complementadas pelas dimensões federativas `Recorte Estadual` e `Recorte de Capitais`. A primeira dimensão temática cobre a conectividade do ambiente brasileiro (acesso da população à Internet, pré-condição do governo digital, não enunciada pelas recomendações). As três seguintes cobrem aspectos diretamente enunciados pela Portaria: infraestrutura digital nas escolas, conectividade pública em equipamentos públicos, e plataformas digitais e armazenamento de dados. A quinta agrupa indicadores de maturidade operacional da rede de TI nos órgãos federais (autodiagnóstico SISP), que correspondem à infraestrutura de rede da Recomendação 6.4 vista de dentro dos órgãos. A sexta agrupa programas formais de inclusão digital ao cidadão, aspecto não enunciado pelas recomendações, complementando a conectividade em equipamentos públicos com a face programática. A última cobre a infraestrutura urbana inteligente das prefeituras, soluções digitais aplicadas à operação urbana municipal, aspecto não enunciado pelas recomendações. Os recortes consolidam, respectivamente, as duas variáveis com observação por UF e as quatorze variáveis com observação por capital para leitura subnacional.

![Dimensões do Objetivo 6](../graficos/dimensoes/cap09.png)

### 9.3.1 Conectividade do ambiente brasileiro

*Definição:* Acesso da população brasileira à Internet (cobertura móvel e uso domiciliar), aferido por dados administrativos da ANATEL e pela PNAD Contínua TIC do IBGE. Esta dimensão mede o ambiente em que o governo digital opera, e não a ação direta dos entes públicos. Sub-conceito não enunciado pelas recomendações da ENGD, mas pré-condição para a entrega de serviços digitais à sociedade. A densidade de acessos de banda larga fixa não integra o índice: o indicador está suspenso até haver denominador domiciliar oficial reproduzível.

*Média Nacional:* 93,8 (n=2; 2 itens).

**Indicadores:**

*Cobertura móvel 2025 (ANATEL):*

- **BLM02**. % domicilios cobertos, com Operadora "Todas" e Tecnologia "Todas"
  - *Normalização:* Proporção 0-100%, usada diretamente.
  - Valor (Nacional): 93,97

*PNAD Contínua TIC 2024 (IBGE):*

- **S01029**. Algum morador tem acesso à Internet no domicílio por meio de microcomputador, tablet, telefone móvel celular, televisão ou outro equipamento?
  - *Normalização:* Proporção 0-100%, usada diretamente.
  - Valor (Nacional): 93,68

### 9.3.2 Infraestrutura digital nas escolas

*Definição:* Recursos digitais nas unidades escolares: acesso à Internet, computadores, laboratório de informática, finalidades de uso (alunos, processo de ensino-aprendizagem) e uso de plataformas digitais de aprendizagem. Combina o universo das escolas em atividade do Censo Escolar (INEP) com o levantamento amostral TIC Educação. Corresponde à Recomendação 6.4 (ampliar e melhorar a infraestrutura de rede em órgãos públicos, especialmente em locais de grande demanda).

*Média Nacional:* 59,9 (n=2; 6 itens).

**Indicadores:**

*Censo Escolar 2024 (INEP):*

*Bateria de infraestrutura de TIC da escola: os 5 itens a seguir entram no índice como um único componente (média dos itens observados; ver Capítulo 3).*

- **IN_INTERNET**. Acesso à internet
  - *Normalização:* Binário por escola pública em atividade: (soma_positivos/total)×100.
  - Valor (Nacional): 89,99

- **IN_COMPUTADOR**. Equipamentos existentes na escola para uso técnico e administrativo - Computadores
  - *Normalização:* Binário por escola pública em atividade: (soma_positivos/total)×100.
  - Valor (Nacional): 83,25

- **IN_LABORATORIO_INFORMATICA**. Dependências físicas existentes na escola - Laboratório de informática
  - *Normalização:* Binário por escola pública em atividade: (soma_positivos/total)×100.
  - Valor (Nacional): 29,05

- **IN_INTERNET_ALUNOS**. Acesso à internet - Para uso dos alunos
  - *Normalização:* Binário por escola pública em atividade: (soma_positivos/total)×100.
  - Valor (Nacional): 40,42

- **IN_INTERNET_APRENDIZAGEM**. Acesso à internet - Para uso no processo de ensino aprendizagem
  - *Normalização:* Binário por escola pública em atividade: (soma_positivos/total)×100.
  - Valor (Nacional): 66,32

*TIC Educação 2024 (CETIC.br):*

- **G4**. Nos últimos 12 meses, a escola utilizou [...]?
  - *Contagem:* O valor é a maior proporção de Sim entre os itens publicados Microsoft Teams; Zoom; Google Sala de Aula, Classroom ou Google For Education; Moodle; Google Meet; AVAMEC; Outra plataforma educacional? Qual? Fica fora a coluna Google (total) do portal. Não é a proporção de quem marcou ao menos um.
  - *Normalização:* Proporção 0-100% por plataforma; agregação `max` (a maior proporção entre as plataformas, que é o piso da proporção de escolas que usam ao menos uma; sub-item F = Google em geral, excluído por redundância com D+E).
  - Valor (Nacional): 57,93

### 9.3.3 Conectividade pública e em equipamentos públicos

*Definição:* Oferta de acesso à Internet pelos órgãos da administração e por equipamentos públicos: centros públicos de acesso gratuito, Wi-Fi gratuito ao público e conectividade de prefeituras e governos estaduais. Corresponde às Recomendações 6.3 (conectividade pública gratuita) e 6.4 (rede em prédios públicos). O Wi-Fi gratuito ao público em instituições culturais não integra o índice porque a fonte não publica o total nacional do indicador.

*Média Nacional:* 64,0 (n=4; 4 itens).

**Indicadores:**

*MUNIC 2024 (IBGE):*

- **Mtic04**. Qual o tipo de conexão é disponibilizada para acesso à internet pela maior parte dos computadores da prefeitura?
  - *Contagem:* Conta como sim qualquer tipo de conexão: Via cabo ou fibra ótica, Via modem 3G, 4G ou 5G, Via linha telefônica (DSL), Via rádio, Via satélite e Acesso discado/conexão discada via telefone; Nenhuma e Não sabe informar contam como não. Recusa e Não informou também contam como não.
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0; valor Nacional é a proporção 0-100% de municípios com evidência afirmativa de conexão sobre o universo de prefeituras.
  - Valor (Nacional): 99,48
  - Valor (Capitais): 100,00 (27/27 capitais)

- **Mtic22**. A prefeitura disponibiliza para a população acesso através de conexão via Wi-Fi (Internet sem fio)?
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0; valor Nacional é a proporção 0-100% sobre o universo de prefeituras.
  - Valor (Nacional): 48,08
  - Valor (Capitais): 85,19 (23/27 capitais)

*ESTADIC 2024 (IBGE):*

- **Etic20**. O governo estadual disponibiliza para a população acesso através de conexão via Wi-Fi (Internet sem fio)?
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0; valor Nacional é a proporção 0-100% sobre as 27 UFs.
  - Valor (Nacional): 62,96
  - Valor (Estadual): 63,0 (média das 27 UFs; distribuição binária: 17 UFs em 100,0 e 10 em 0,0).

*TIC Governo Eletrônico 2023 (CETIC.br):*

- **C7**. A prefeitura disponibilizou aos cidadãos nos últimos 12 meses: Acesso à Internet por meio de centros públicos de acesso gratuito, como telecentros
  - *Normalização:* Piso sobre a população inteira, com os casos fora do filtro contados como resposta negativa (ver Seção 3.2.4).
  - *Contagem:* Categorias: Sim, Não, Não sabe e Não respondeu; só Sim conta. O percentual condicionado é multiplicado pela proporção de Sim do filtro no mesmo estrato, em cadeia quando necessário; quem ficou fora do filtro conta como resposta negativa. O resultado é um piso sobre a população inteira das prefeituras, conforme a Seção 3.2.4.
  - Valor (Nacional): 45,35

### 9.3.4 Plataformas digitais e armazenamento de dados

*Definição:* Estratégia de armazenamento de dados e adoção de plataformas de computação em nuvem: Centros de Processamento de Dados (CPD) próprios e serviços de nuvem, incluindo a nuvem governamental e o conhecimento e a utilização da Portaria SGD/MGI nº 5.950/2023, que disciplina o uso de nuvem na Administração Pública Federal. Corresponde às Recomendações 6.1 (plataformas digitais para provimento de serviços) e 6.5 (estratégia de armazenamento, com atenção a data centers). O uso de computação em nuvem medido pela TIC Governo Eletrônico entra como piso sobre todos os órgãos públicos, após o recálculo da Seção 3.2.4.

*Média Nacional:* 36,5 (n=4; 4 itens).

**Indicadores:**

*MUNIC 2024 (IBGE):*

- **Mtic08**. Na prefeitura existe Centro de Processamento de Dados (CPD)?
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0; valor Nacional é a proporção 0-100% sobre o universo de prefeituras.
  - Valor (Nacional): 50,38
  - Valor (Capitais): 92,59 (25/27 capitais)

*iGovSISP 2025 (SGD/MGI):*

- **G625IPD**. Em relação à computação em nuvem, como você classificaria seu órgão ou órgão governamental em termos de maturidade na adoção da nuvem?
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 31,20
  - *Estágio positivo mínimo:* Intermediário: O órgão utiliza a nuvem em alguns aspectos, mas não de forma abrangente em todos os setores.

- **G637IPD**. Acerca da Portaria SGD/MGI nº 5.950, de 26 de outubro de 2023, que estabelece modelo de contratação de software e de serviços de computação em nuvem de governo, no âmbito dos órgãos e entidades integrantes do Sistema de Administração dos Recursos de Tecnologia da Informação - SISP do Poder Executivo Federal, o seu órgão:
  - *Normalização:* Percentual de respostas nos níveis 4 e 5 de conhecimento e utilização.
  - Valor (Nacional): 8,55
  - *Leitura:* O nível 3 já declara uso pequeno. O resultado considera utilização na maior parte ou na totalidade da infraestrutura de nuvem de governo.

*TIC Governo Eletrônico 2023 (CETIC.br):*

- **B9B**. Este órgão público contrata serviços de:
  - *Normalização:* Piso sobre a população inteira, com os casos fora do filtro contados como resposta negativa (ver Seção 3.2.4).
  - *Contagem:* Itens: E-mail em nuvem; Software de escritório em nuvem; Armazenamento de arquivos ou banco de dados em nuvem; Capacidade de processamento em nuvem. Categorias: Sim, Não, NS, NR; só Sim conta. O valor é a maior proporção de Sim entre os itens publicados na tabela; não é a proporção de quem marcou ao menos um item, que a tabela não permite calcular. O percentual condicionado é multiplicado pela proporção de Sim do filtro no mesmo estrato, em cadeia quando necessário; quem ficou fora do filtro conta como resposta negativa. O resultado é um piso sobre a população inteira dos órgãos, conforme a Seção 3.2.4.
  - Valor (Nacional): 55,70

### 9.3.5 Gestão e qualificação da rede de TI federal

*Definição:* Maturidade operacional da rede de TI nos órgãos federais SISP: documentação de ativos, monitoramento, manutenção preventiva e adoção do protocolo IPv6. Corresponde à Recomendação 6.4 (infraestrutura de rede em órgãos públicos), vista de dentro dos órgãos. Aspecto medido apenas para os órgãos do SISP via autodiagnóstico (sem cobertura subnacional).

*Média Nacional:* 58,4 (n=2; 4 itens).

**Indicadores:**

*iGovSISP 2025 (SGD/MGI):*

*Esta seção apresenta 3 dos 3 indicadores de uma mesma bateria no objetivo. A média dimensional usa os itens desta seção; o índice do objetivo agrega a bateria uma só vez, conforme o Capítulo 3.*

- **G607IPD**. Qual é o nível de documentação dos ativos de rede em seu órgão?
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 87,18
  - *Estágio positivo mínimo:* Parcialmente documentado.

- **G608IPD**. Como seu órgão monitora a disponibilidade o desempenho dos ativos de rede?
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 76,50
  - *Estágio positivo mínimo:* Monitoramento periódico trimestral, semestral ou anual.

- **G609IPD**. Como o seu órgão gerencia a manutenção preventiva dos ativos de rede?
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 81,62
  - *Estágio positivo mínimo:* Manutenção ocasional conforme necessário.

- **G634IPD**. Em qual estágio de maturidade o seu órgão se encontra em relação à adoção do IPv6?
  - *Normalização:* Percentual de respostas a partir do terceiro estágio, o ponto de corte comum da escala.
  - Valor (Nacional): 35,04
  - *Estágio positivo mínimo:* A implementação do IPv6 já começou, com algumas redes e serviços adaptados, mas o IPv4 ainda é amplamente utilizado.

### 9.3.6 Programas de inclusão digital ao cidadão

*Definição:* Iniciativas formais de prefeituras e governos estaduais para inclusão digital da população: existência de programa ou ação estruturada de inclusão digital. Complementa a Seção 9.3.3, "Conectividade pública e em equipamentos públicos", com a face programática: existência de iniciativa formal, não apenas provisão física de pontos de acesso. Sub-conceito não enunciado pelas recomendações da ENGD, mas convergente com a Recomendação 6.3 ao ampliar o alcance social do governo digital.

*Média Nacional:* 75,9 (n=2; 2 itens).

**Indicadores:**

*MUNIC 2024 (IBGE):*

- **Mtic19**. A prefeitura desenvolve programa ou ação de inclusão/educação digital?
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0; valor Nacional é a proporção 0-100% sobre o universo de prefeituras.
  - Valor (Nacional): 55,57
  - Valor (Capitais): 92,59 (25/27 capitais)

*ESTADIC 2024 (IBGE):*

- **Etic17**. O governo estadual desenvolve programa ou ação de inclusão/educação digital?
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0; valor Nacional é a proporção 0-100% sobre as 27 UFs.
  - Valor (Nacional): 96,30
  - Valor (Estadual): 96,3 (média das 27 UFs; 26 UFs em 100,0 e 1 em 0,0).

### 9.3.7 Infraestrutura urbana inteligente

*Definição:* Equipamentos e sistemas instalados pelas prefeituras municipais que automatizam a operação urbana: centro de controle operacional, iluminação inteligente com medição de consumo, semáforos remotos e sensores de monitoramento de áreas de risco. A MUNIC coleta esses equipamentos em todas as prefeituras, e a TIC Governo acrescenta as áreas monitoradas pelos centros de operações, recalculadas sobre todas as prefeituras. Sub-conceito não enunciado pelas recomendações da ENGD, mas captado pela MUNIC como automação da operação urbana. O monitoramento setorial aferido pela TIC Governo Eletrônico entra como piso sobre todas as prefeituras, após o recálculo da Seção 3.2.4. Os quatro itens de tecnologias para gestão urbana da mesma fonte saíram do índice por duplicar indicadores que a MUNIC mede em todas as prefeituras, dois deles nesta dimensão e dois no Objetivo 2.

*Média Nacional:* 12,4 (n=5; 10 itens).

**Indicadores:**

*MUNIC 2024 (IBGE):*

- **Mtic263**. O município conta atualmente com: Centro de controle operacional
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0; valor Nacional é a proporção 0-100% sobre o universo de prefeituras.
  - Valor (Nacional): 22,98
  - Valor (Capitais): 96,30 (26/27 capitais)
- **Mtic264**. O município conta atualmente com: Sistema de iluminação inteligente que permite a medição de consumo de energia ou alteração à distância da iluminação de áreas do município
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0; valor Nacional é a proporção 0-100% sobre o universo de prefeituras.
  - Valor (Nacional): 7,04
  - Valor (Capitais): 44,44 (12/27 capitais)
- **Mtic265**. O município conta atualmente com: Semáforos inteligentes controlados a distância para ações como priorizar o transporte público ou a circulação em rotas expressas
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0; valor Nacional é a proporção 0-100% sobre o universo de prefeituras.
  - Valor (Nacional): 5,03
  - Valor (Capitais): 77,78 (21/27 capitais)
- **Mtic266**. O município conta atualmente com: Sensores para monitoramento de áreas com risco de enchentes, alagamentos ou outros desastres naturais
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0; valor Nacional é a proporção 0-100% sobre o universo de prefeituras.
  - Valor (Nacional): 7,36
  - Valor (Capitais): 51,85 (14/27 capitais)

*TIC Governo Eletrônico 2023 (CETIC.br):*

*Bateria de monitoramento setorial: os 6 itens a seguir entram como um único componente, pela média dos itens observados (ver Capítulo 3).*

- **F2C**. Este Centro de Operações monitora: Outros setores ou áreas. Quais?
  - *Normalização:* Piso sobre a população inteira, com os casos fora do filtro contados como resposta negativa (ver Seção 3.2.4).
  - *Contagem:* Categorias: Sim, Não, Não sabe e Não respondeu; só Sim conta. O percentual condicionado é multiplicado pela proporção de Sim do filtro no mesmo estrato, em cadeia quando necessário; quem ficou fora do filtro conta como resposta negativa. O resultado é um piso sobre a população inteira das prefeituras, conforme a Seção 3.2.4.
  - Valor (Nacional): 2,02

- **F2C**. Este Centro de Operações monitora: Patrimônio ou prédios públicos municipais
  - *Normalização:* Piso sobre a população inteira, com os casos fora do filtro contados como resposta negativa (ver Seção 3.2.4).
  - *Contagem:* Categorias: Sim, Não, Não sabe e Não respondeu; só Sim conta. O percentual condicionado é multiplicado pela proporção de Sim do filtro no mesmo estrato, em cadeia quando necessário; quem ficou fora do filtro conta como resposta negativa. O resultado é um piso sobre a população inteira das prefeituras, conforme a Seção 3.2.4.
  - Valor (Nacional): 26,37

- **F2C**. Este Centro de Operações monitora: Situações de emergência ou desastres como, por exemplo, enchentes, desabamentos, incêndios ou situações inesperadas
  - *Normalização:* Piso sobre a população inteira, com os casos fora do filtro contados como resposta negativa (ver Seção 3.2.4).
  - *Contagem:* Categorias: Sim, Não, Não sabe e Não respondeu; só Sim conta. O percentual condicionado é multiplicado pela proporção de Sim do filtro no mesmo estrato, em cadeia quando necessário; quem ficou fora do filtro conta como resposta negativa. O resultado é um piso sobre a população inteira das prefeituras, conforme a Seção 3.2.4.
  - Valor (Nacional): 19,90

- **F2C**. Este Centro de Operações monitora: Transporte público
  - *Normalização:* Piso sobre a população inteira, com os casos fora do filtro contados como resposta negativa (ver Seção 3.2.4).
  - *Contagem:* Categorias: Sim, Não, Não sabe e Não respondeu; só Sim conta. O percentual condicionado é multiplicado pela proporção de Sim do filtro no mesmo estrato, em cadeia quando necessário; quem ficou fora do filtro conta como resposta negativa. O resultado é um piso sobre a população inteira das prefeituras, conforme a Seção 3.2.4.
  - Valor (Nacional): 14,08

- **F2C**. Este Centro de Operações monitora: Trânsito
  - *Normalização:* Piso sobre a população inteira, com os casos fora do filtro contados como resposta negativa (ver Seção 3.2.4).
  - *Contagem:* Categorias: Sim, Não, Não sabe e Não respondeu; só Sim conta. O percentual condicionado é multiplicado pela proporção de Sim do filtro no mesmo estrato, em cadeia quando necessário; quem ficou fora do filtro conta como resposta negativa. O resultado é um piso sobre a população inteira das prefeituras, conforme a Seção 3.2.4.
  - Valor (Nacional): 24,89

- **F2C**. Este Centro de Operações monitora: Segurança pública
  - *Normalização:* Piso sobre a população inteira, com os casos fora do filtro contados como resposta negativa (ver Seção 3.2.4).
  - *Contagem:* Categorias: Sim, Não, Não sabe e Não respondeu; só Sim conta. O percentual condicionado é multiplicado pela proporção de Sim do filtro no mesmo estrato, em cadeia quando necessário; quem ficou fora do filtro conta como resposta negativa. O resultado é um piso sobre a população inteira das prefeituras, conforme a Seção 3.2.4.
  - Valor (Nacional): 29,29

### 9.3.8 Recorte Estadual

*Definição:* Conjunto das variáveis do Objetivo 6 com observação por UF, agregadas para leitura federativa do desempenho subnacional em infraestrutura digital. Reúne `Etic20` e `Etic17`. Inclui variáveis também classificadas em dimensões temáticas (única exceção à regra de não-repetição).

*Média Estadual:* 79,6 (n=2; 2 itens).

![Recorte Estadual do Objetivo 6](../graficos/recortes/cap09_estadual.png)

**Indicadores:**

*ESTADIC 2024 (IBGE):*

- **Etic20**. O governo estadual disponibiliza para a população acesso através de conexão via Wi-Fi (Internet sem fio)?
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0; valor Estadual é a proporção 0-100% sobre as 27 UFs.
  - Valor (Estadual): 63,0 (17 UFs em 100,0 e 10 em 0,0).

- **Etic17**. O governo estadual desenvolve programa ou ação de inclusão/educação digital?
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0; valor Estadual é a proporção 0-100% sobre as 27 UFs.
  - Valor (Estadual): 96,3 (26 UFs em 100,0 e 1 em 0,0).

### 9.3.9 Recorte de Capitais

*Definição:* Conjunto das variáveis do Objetivo 6 com observação por capital, agregadas para leitura federativa municipal do desempenho em infraestrutura digital. Reúne 1 variável de Cobertura móvel 2025 (ANATEL), 5 variáveis Censo Escolar 2024 (INEP) e 8 variáveis MUNIC 2024. Inclui variáveis também classificadas em dimensões temáticas (única exceção à regra de não-repetição).

*Média Capitais:* 81,0 (n=10; 14 itens).

![Recorte de Capitais do Objetivo 6](../graficos/recortes/cap09_capitais.png)

**Indicadores:**

*Cobertura móvel 2025 (ANATEL):*

- **BLM02**. % domicilios cobertos, com Operadora "Todas" e Tecnologia "Todas"
  - *Normalização:* Proporção 0-100%, usada diretamente.
  - Valor (Capitais): 98,99

*Censo Escolar 2024 (INEP):*

- **IN_INTERNET**. Acesso à internet
  - *Normalização:* Binário por escola pública em atividade: (soma_positivos/total)×100, agregado por capital.
  - Valor (Capitais): 96,65

- **IN_COMPUTADOR**. Equipamentos existentes na escola para uso técnico e administrativo - Computadores
  - *Normalização:* Binário por escola pública em atividade: (soma_positivos/total)×100, agregado por capital.
  - Valor (Capitais): 96,31

- **IN_LABORATORIO_INFORMATICA**. Dependências físicas existentes na escola - Laboratório de informática
  - *Normalização:* Binário por escola pública em atividade: (soma_positivos/total)×100, agregado por capital.
  - Valor (Capitais): 41,92

- **IN_INTERNET_ALUNOS**. Acesso à internet - Para uso dos alunos
  - *Normalização:* Binário por escola pública em atividade: (soma_positivos/total)×100, agregado por capital.
  - Valor (Capitais): 46,89

- **IN_INTERNET_APRENDIZAGEM**. Acesso à internet - Para uso no processo de ensino aprendizagem
  - *Normalização:* Binário por escola pública em atividade: (soma_positivos/total)×100, agregado por capital.
  - Valor (Capitais): 69,26

*MUNIC 2024 (IBGE):*

- **Mtic04**. Qual o tipo de conexão é disponibilizada para acesso à internet pela maior parte dos computadores da prefeitura?
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0.
  - Valor (Capitais): 100,00 (27/27 capitais)

- **Mtic22**. A prefeitura disponibiliza para a população acesso através de conexão via Wi-Fi (Internet sem fio)?
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0.
  - Valor (Capitais): 85,19 (23/27 capitais)

- **Mtic08**. Na prefeitura existe Centro de Processamento de Dados (CPD)?
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0.
  - Valor (Capitais): 92,59 (25/27 capitais)

- **Mtic19**. A prefeitura desenvolve programa ou ação de inclusão/educação digital?
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0.
  - Valor (Capitais): 92,59 (25/27 capitais)

- **Mtic263**. O município conta atualmente com: Centro de controle operacional
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0.
  - Valor (Capitais): 96,30 (26/27 capitais)
- **Mtic264**. O município conta atualmente com: Sistema de iluminação inteligente que permite a medição de consumo de energia ou alteração à distância da iluminação de áreas do município
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0.
  - Valor (Capitais): 44,44 (12/27 capitais)
- **Mtic265**. O município conta atualmente com: Semáforos inteligentes controlados a distância para ações como priorizar o transporte público ou a circulação em rotas expressas
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0.
  - Valor (Capitais): 77,78 (21/27 capitais)
- **Mtic266**. O município conta atualmente com: Sensores para monitoramento de áreas com risco de enchentes, alagamentos ou outros desastres naturais
  - *Normalização:* Binário Sim/Não: Sim=100, Não=0.
  - Valor (Capitais): 51,85 (14/27 capitais)
