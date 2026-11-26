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

O Objetivo 6 conta com 46 variáveis ativas no índice (9 de TIC Governo Eletrônico (CETIC.br), 5 de TIC Educação (CETIC.br), 2 de IOSPD (ABEP-TIC), 5 de Censo Escolar (INEP), 1 de PNAD Contínua TIC (IBGE), 1 de Cobertura móvel (ANATEL), 10 de MUNIC (IBGE), 3 de ESTADIC (IBGE), 10 de iGovSISP (SGD/MGI)), que entram na agregação como 35 componentes, após o colapso das baterias (ver Capítulo 3). Todas contribuem para a visão Nacional. Há 5 variáveis com observação por UF, reunidas também na dimensão `Recorte Estadual`. Há 16 variáveis com observação por capital, reunidas também na dimensão `Recorte de Capitais`.

<!-- federal:cobertura -->
No recorte federal, 12 variáveis do objetivo têm observação dos órgãos federais (2 da TIC Governo Eletrônico (CETIC.br) e 10 do iGovSISP (SGD/MGI)), que entram na média do recorte como 10 componentes. O limiar mínimo de duas variáveis efetivas observadas justifica a criação da dimensão **`Recorte Federal`**, em que a União é o único ente, sem ranking (Seção 3.1.6).
<!-- /federal:cobertura -->

## 9.3 Dimensões

As 46 variáveis ativas do Objetivo 6 foram organizadas em oito dimensões temáticas, complementadas pelas dimensões federativas `Recorte Estadual`, `Recorte de Capitais` e `Recorte Federal`. A primeira dimensão temática cobre a conectividade do ambiente brasileiro (acesso da população à Internet, pré-condição do governo digital, não enunciada pelas recomendações). As três seguintes correspondem a recomendações da Portaria: infraestrutura digital nas escolas, por aproximação à infraestrutura de rede em órgãos públicos da Recomendação 6.4, conectividade pública em equipamentos públicos, e plataformas digitais e armazenamento de dados. A quinta agrupa indicadores de maturidade operacional da rede de TI nos órgãos federais (autodiagnóstico SISP), que correspondem à infraestrutura de rede da Recomendação 6.4 vista de dentro dos órgãos. A sexta agrupa programas formais de inclusão digital ao cidadão, aspecto não enunciado pelas recomendações, complementando a conectividade em equipamentos públicos com a face programática. A sétima cobre a infraestrutura urbana inteligente, soluções digitais aplicadas à operação urbana e ao transporte público nas prefeituras e o bilhete único dos governos estaduais, aspecto não enunciado pelas recomendações. A oitava reúne guias e orientações institucionais para uso de inteligência artificial, correspondentes à Recomendação 6.6. Os recortes consolidam, respectivamente, as cinco variáveis com observação por UF e as dezesseis variáveis com observação por capital para leitura subnacional. O `Recorte Federal` reagrupa as variáveis com observação dos órgãos federais, com a União como ente único.

![Dimensões do Objetivo 6](../graficos/dimensoes/cap09.png)

### 9.3.1 Conectividade do ambiente brasileiro

*Definição:* Acesso da população brasileira à Internet (cobertura móvel e uso domiciliar), aferido por dados administrativos da ANATEL e pela PNAD Contínua TIC do IBGE. Esta dimensão mede o ambiente em que o governo digital opera, e não a ação direta dos entes públicos. Sub-conceito não enunciado pelas recomendações da ENGD, mas pré-condição para a entrega de serviços digitais à sociedade. A densidade de acessos de banda larga fixa não integra o índice: o indicador está suspenso até haver denominador domiciliar oficial reproduzível.

*Média Nacional:* 94,5 (n=2; 2 itens).

**Indicadores:**

*PNAD Contínua TIC 2025 (IBGE):*

- **S01029**. Algum morador tem acesso à Internet no domicílio por meio de microcomputador, tablet, telefone móvel celular, televisão ou outro equipamento?
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 94,97

*Cobertura móvel 2025 (ANATEL):*

- **BLM02**. % domicilios cobertos, com Operadora "Todas" e Tecnologia "Todas"
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 93,97
  - Valor (Capitais): 98,99 (média de 27 capitais)

### 9.3.2 Infraestrutura digital nas escolas

*Definição:* Recursos digitais nas unidades escolares: acesso à Internet, computadores, laboratório de informática, finalidades de uso (alunos, processo de ensino-aprendizagem) e uso de ambientes digitais de aprendizagem e avaliação, acesso dos alunos aos recursos fora do horário de aula e acesso de familiares e da comunidade. Combina o universo das escolas públicas em atividade do Censo Escolar (INEP) com o levantamento amostral TIC Educação. Corresponde à Recomendação 6.4 (ampliar e melhorar a infraestrutura de rede em órgãos públicos, especialmente em locais de grande demanda), por aproximação: a recomendação fala de órgãos públicos e não menciona escolas.

*Média Nacional:* 54,3 (n=5; 9 itens).

**Indicadores:**

*TIC Educação 2025 (CETIC.br):*

- **A4**. A escola tem Wi-Fi?
  - *Contagem:* Proporção de escolas públicas com Wi-Fi sobre todas as escolas públicas. Em 2025: 98,8843% entre escolas com Internet, multiplicados por 93,921% de escolas com Internet, resultam em 92,8731% na população inteira.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 92,87

- **G4**. Nos últimos 12 meses, a escola utilizou_____________?
  - *Contagem:* O valor é a maior proporção dos itens selecionados: Microsoft Teams ou Microsoft Teams for Education; Zoom; Moodle; Google Sala de Aula, Classroom ou Google For Education; Google Meet; AVAMEC; Outros ambientes ou plataformas; Plataforma Caed. É um limite inferior de pelo menos um item, não a união exata das respostas. Os percentuais condicionados já foram recalculados na fonte sobre a população inteira, com leitura de piso quando existe filtro.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 74,53

- **C4_2**. Os alunos podem utilizar a Internet ou os computadores que ficam na escola fora do horário de aula, como no contraturno?
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 27,75

- **C5_1**. A Internet e os computadores que ficam na escola podem ser utilizados pelas pessoas que moram perto da escola ou pelos familiares dos alunos?
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 14,72

*Censo Escolar 2024 (INEP):*

- **IN_INTERNET**. Acesso à internet
  - *Normalização:* Binário por unidade: (soma_positivos/total)×100
  - Valor (Nacional): 89,99
  - Valor (Capitais): 96,65 (média de 27 capitais)

- **IN_COMPUTADOR**. Equipamentos existentes na escola para uso técnico e administrativo - Computadores
  - *Normalização:* Binário por unidade: (soma_positivos/total)×100
  - Valor (Nacional): 83,25
  - Valor (Capitais): 96,31 (média de 27 capitais)

- **IN_LABORATORIO_INFORMATICA**. Dependências físicas existentes na escola - Laboratório de informática
  - *Normalização:* Binário por unidade: (soma_positivos/total)×100
  - Valor (Nacional): 29,05
  - Valor (Capitais): 41,92 (média de 27 capitais)

- **IN_INTERNET_ALUNOS**. Acesso à internet - Para uso dos alunos
  - *Normalização:* Binário por unidade: (soma_positivos/total)×100
  - Valor (Nacional): 40,42
  - Valor (Capitais): 46,89 (média de 27 capitais)

- **IN_INTERNET_APRENDIZAGEM**. Acesso à internet - Para uso no processo de ensino aprendizagem
  - *Normalização:* Binário por unidade: (soma_positivos/total)×100
  - Valor (Nacional): 66,32
  - Valor (Capitais): 69,26 (média de 27 capitais)


*Bateria de infraestrutura de TIC da escola: os 5 itens apresentados nesta seção entram no índice como um único componente (média dos itens observados; ver Capítulo 3).*

### 9.3.3 Conectividade pública e em equipamentos públicos

*Definição:* Oferta de acesso à Internet pelos órgãos da administração e por equipamentos públicos: centros públicos de acesso gratuito, Wi-Fi gratuito ao público e conectividade de prefeituras e governos estaduais. Corresponde às Recomendações 6.3 (conectividade pública gratuita) e 6.4 (rede em prédios públicos). O Wi-Fi gratuito ao público em instituições culturais não integra o índice porque a fonte não publica o total nacional do indicador.

*Média Nacional:* 65,2 (n=5; 5 itens).

**Indicadores:**

*TIC Governo Eletrônico 2025 (CETIC.br):*

- **C7**. A prefeitura disponibilizou aos cidadãos nos últimos 12 meses: Centros públicos de acesso gratuito, como telecentros
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100% sobre o universo de prefeituras, usada diretamente.
  - Valor (Nacional): 41,63

*IOSPD 2026 (ABEP-TIC):*

- **1.12**. COM RELAÇÃO À CONECTIVIDADE, O ESTADO:
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 74,00
  - Valor (Estadual): 74,00 (média de 26 UFs)

*MUNIC 2024 (IBGE):*

- **Mtic04**. Qual o tipo de conexão é disponibilizada para acesso à internet pela maior parte dos computadores da prefeitura?
  - *Contagem:* Conta como sim qualquer tipo de conexão: Via cabo ou fibra ótica, Via modem 3G, 4G ou 5G, Via linha telefônica (DSL), Via rádio, Via satélite e Acesso discado/conexão discada via telefone; Nenhuma e Não sabe informar contam como não. Recusa e Não informou também contam como não.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 99,48
  - Valor (Capitais): 100,00 (27/27 capitais)

- **Mtic22**. A prefeitura disponibiliza para a população acesso através de conexão via Wi-Fi (Internet sem fio)?
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 48,08
  - Valor (Capitais): 85,19 (23/27 capitais)

*ESTADIC 2024 (IBGE):*

- **Etic20**. O governo estadual disponibiliza para a população acesso através de conexão via Wi-Fi (Internet sem fio)?
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 62,96
  - Valor (Estadual): 62,96 (média de 27 UFs; 17 UFs em 100,0 e 10 em 0,0)

### 9.3.4 Plataformas digitais e armazenamento de dados

*Definição:* Estratégia de armazenamento de dados e adoção de plataformas de computação em nuvem: Centros de Processamento de Dados (CPD) próprios e serviços de nuvem, incluindo a nuvem governamental e o conhecimento e a utilização da Portaria SGD/MGI nº 5.950/2023, que disciplina o uso de nuvem na Administração Pública Federal. Corresponde às Recomendações 6.1 (plataformas digitais para provimento de serviços) e 6.5 (estratégia de armazenamento, com atenção a data centers). O uso de computação em nuvem medido pela TIC Governo Eletrônico entra como piso nos universos de órgãos públicos e de prefeituras, após o recálculo da Seção 3.2.4.

*Média Nacional:* 37,7 (n=6; 6 itens).

**Indicadores:**

*TIC Governo Eletrônico 2025 (CETIC.br):*

- **B9B**. Este órgão público contrata serviços de: / Esta prefeitura contrata serviços de: E-mail em nuvem / Esta prefeitura contrata serviços de: Software de escritório em nuvem / Esta prefeitura contrata serviços de: Armazenamento de arquivos ou banco de dados em nuvem / Esta prefeitura contrata serviços de: Capacidade de processamento em nuvem
  - *Contagem:* O valor é a maior proporção dos itens selecionados: E-mail em nuvem; Software de escritório em nuvem; Armazenamento de arquivos ou banco de dados em nuvem; Capacidade de processamento em nuvem. É um limite inferior de pelo menos um item, não a união exata das respostas. Cada tipo é primeiro reduzido pela média entre os universos de órgãos e prefeituras observados; aplica-se então o máximo entre os quatro tipos. No recorte Federal, considera-se somente a linha dos órgãos federais. A média entre órgãos e prefeituras é um escore entre universos, não uma proporção conjunta de entes. Os percentuais condicionados já foram recalculados na fonte sobre a população inteira, com leitura de piso quando existe filtro.
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 48,67
  - Valor (Federal): 87,86

*MUNIC 2024 (IBGE):*

- **Mtic08**. Na prefeitura existe Centro de Processamento de Dados (CPD)?
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 50,38
  - Valor (Capitais): 92,59 (25/27 capitais)

*iGovSISP 2026 (SGD/MGI):*

- **G625IPD**. Em relação à computação em nuvem, como você classificaria seu órgão ou órgão governamental em termos de maturidade na adoção da nuvem?
  - *Normalização:* Proporção a partir do terceiro estágio de maturidade, sobre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 34,87
  - Valor (Federal): 34,87
  - *Estágio positivo mínimo:* Intermediário: O órgão utiliza a nuvem em alguns aspectos, mas não de forma abrangente em todos os setores.

- **G637IPD**. Acerca da Portaria SGD/MGI nº 5.950, de 26 de outubro de 2023, que estabelece modelo de contratação de software e de serviços de computação em nuvem de governo, no âmbito dos órgãos e entidades integrantes do Sistema de Administração dos Recursos de Tecnologia da Informação - SISP do Poder Executivo Federal, o seu órgão:
  - *Normalização:* Proporção nos níveis 4 e 5 de conhecimento e utilização, sobre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 10,08
  - Valor (Federal): 10,08
  - *Leitura:* O nível 3 já declara uso pequeno. O resultado considera utilização na maior parte ou na totalidade da infraestrutura de nuvem de governo.

- **G6001IPD**. O órgão possui sala-cofre ou sala segura (centro de dados), conforme definição presente no item 4 do Anexo I da IN SGD nº 94/2022?
  - *Normalização:* Proporção de respostas Sim sobre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 45,80
  - Valor (Federal): 45,80

- **G642IPD**. O órgão possui contrato de nuvem?
  - *Normalização:* Proporção de respostas Sim sobre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 36,55
  - Valor (Federal): 36,55

### 9.3.5 Gestão e qualificação da rede de TI federal

*Definição:* Maturidade operacional da rede de TI nos órgãos federais SISP: documentação de ativos, monitoramento, manutenção preventiva, adoção do protocolo IPv6 e estratégia formal de infraestrutura computacional. Corresponde à Recomendação 6.4 (infraestrutura de rede em órgãos públicos), vista de dentro dos órgãos. Aspecto medido apenas para os órgãos do SISP via autodiagnóstico (sem cobertura subnacional).

*Média Nacional:* 53,6 (n=4; 6 itens).

**Indicadores:**

*iGovSISP 2026 (SGD/MGI):*

- **G607IPD**. Qual é o nível de documentação dos ativos de rede em seu órgão?
  - *Normalização:* Proporção a partir do terceiro estágio de maturidade, sobre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 87,82
  - Valor (Federal): 87,82
  - *Estágio positivo mínimo:* Parcialmente documentado.

- **G608IPD**. Como seu órgão monitora a disponibilidade o desempenho dos ativos de rede?
  - *Normalização:* Proporção a partir do terceiro estágio de maturidade, sobre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 76,05
  - Valor (Federal): 76,05
  - *Estágio positivo mínimo:* Monitoramento periódico trimestral, semestral ou anual.

- **G609IPD**. Como o seu órgão gerencia a manutenção preventiva dos ativos de rede?
  - *Normalização:* Proporção a partir do terceiro estágio de maturidade, sobre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 81,93
  - Valor (Federal): 81,93
  - *Estágio positivo mínimo:* Manutenção ocasional conforme necessário.

- **G634IPD**. Em qual estágio de maturidade o seu órgão se encontra em relação à adoção do IPv6?
  - *Normalização:* Proporção a partir do terceiro estágio de maturidade, sobre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 35,29
  - Valor (Federal): 35,29
  - *Estágio positivo mínimo:* A implementação do IPv6 já começou, com algumas redes e serviços adaptados, mas o IPv4 ainda é amplamente utilizado.

- **G636IPD**. O órgão possui estratégia de sustentação e provimento da infraestrutura computacional formalmente definida na instituição, conforme diretrizes da Portaria SGD/MGI nº 2.715/2023, que estabelece Modelo de Contratação e Gestão de Estações de Trabalho, no âmbito dos órgãos e entidades integrantes do Sistema de Administração dos Recursos de Tecnologia da Informação - SISP do Poder Executivo Federal?
  - *Normalização:* Proporção a partir do terceiro estágio de maturidade, sobre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 35,71
  - Valor (Federal): 35,71

- **G641IPD**. O órgão possui rede de Longa Distância (link WAN)?
  - *Normalização:* Proporção de respostas Sim sobre os 238 órgãos respondentes; a fonte observa só órgãos federais, e por isso o valor Nacional é o mesmo do Federal.
  - Valor (Nacional): 61,34
  - Valor (Federal): 61,34


*Esta seção apresenta 3 dos 3 indicadores de uma mesma bateria no objetivo. A média dimensional usa os itens desta seção; o índice do objetivo agrega a bateria uma só vez, conforme o Capítulo 3.*

### 9.3.6 Programas de inclusão digital ao cidadão

*Definição:* Iniciativas formais de prefeituras e governos estaduais para inclusão digital da população: existência de programa ou ação estruturada de inclusão digital. Complementa a Seção 9.3.3, "Conectividade pública e em equipamentos públicos", com a face programática: existência de iniciativa formal, não apenas provisão física de pontos de acesso. Sub-conceito não enunciado pelas recomendações da ENGD, mas convergente com a Recomendação 6.3 ao ampliar o alcance social do governo digital.

*Média Nacional:* 74,0 (n=3; 3 itens).

**Indicadores:**

*IOSPD 2026 (ABEP-TIC):*

- **4.6**. O ESTADO POSSUI UMA ESTRATÉGIA DE ALFABETIZAÇÃO DIGITAL E FECHAMENTO DE BRECHAS DIGITAIS?
  - *Normalização:* Índice 0-10, multiplicado por 10
  - Valor (Nacional): 70,19
  - Valor (Estadual): 70,19 (média de 26 UFs)

*MUNIC 2024 (IBGE):*

- **Mtic19**. A prefeitura desenvolve programa ou ação de inclusão/educação digital?
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 55,57
  - Valor (Capitais): 92,59 (25/27 capitais)

*ESTADIC 2024 (IBGE):*

- **Etic17**. O governo estadual desenvolve programa ou ação de inclusão/educação digital?
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 96,30
  - Valor (Estadual): 96,30 (média de 27 UFs; 26 UFs em 100,0 e 1 em 0,0)

### 9.3.7 Infraestrutura urbana inteligente

*Definição:* Equipamentos e sistemas que automatizam a operação urbana e o transporte público: nas prefeituras, centro de controle operacional, iluminação inteligente com medição de consumo, semáforos remotos, sensores de monitoramento de áreas de risco, bilhete ou cartão eletrônico no transporte público e ônibus com GPS que envia localização e velocidade; nos governos estaduais, o bilhete único. A MUNIC coleta esses equipamentos em todas as prefeituras, e a TIC Governo acrescenta as áreas monitoradas pelos centros de operações, recalculadas sobre todas as prefeituras. Sub-conceito não enunciado pelas recomendações da ENGD, mas captado pela MUNIC como automação da operação urbana. O monitoramento setorial aferido pela TIC Governo Eletrônico entra como piso sobre todas as prefeituras, após o recálculo da Seção 3.2.4. Os quatro itens de tecnologias para gestão urbana da mesma fonte saíram do índice por duplicar indicadores que a MUNIC mede em todas as prefeituras, nesta dimensão.

*Média Nacional:* 16,0 (n=8; 13 itens).

**Indicadores:**

*TIC Governo Eletrônico 2025 (CETIC.br):*

- **F2C**. PREFEITURAS QUE POSSUEM CENTRO DE OPERAÇÕES PARA MONITORAMENTO DE SITUAÇÕES COMO TRÂNSITO, SEGURANÇA OU EMERGÊNCIA, POR ÁREA DE MONITORAMENTO: Outros
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100% sobre o universo de prefeituras, usada diretamente.
  - Valor (Nacional): 3,99

- **F2C**. PREFEITURAS QUE POSSUEM CENTRO DE OPERAÇÕES PARA MONITORAMENTO DE SITUAÇÕES COMO TRÂNSITO, SEGURANÇA OU EMERGÊNCIA, POR ÁREA DE MONITORAMENTO: Patrimônio ou prédios públicos municipais
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100% sobre o universo de prefeituras, usada diretamente.
  - Valor (Nacional): 25,94

- **F2C**. PREFEITURAS QUE POSSUEM CENTRO DE OPERAÇÕES PARA MONITORAMENTO DE SITUAÇÕES COMO TRÂNSITO, SEGURANÇA OU EMERGÊNCIA, POR ÁREA DE MONITORAMENTO: Situações de emergência ou desastres
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100% sobre o universo de prefeituras, usada diretamente.
  - Valor (Nacional): 22,05

- **F2C**. PREFEITURAS QUE POSSUEM CENTRO DE OPERAÇÕES PARA MONITORAMENTO DE SITUAÇÕES COMO TRÂNSITO, SEGURANÇA OU EMERGÊNCIA, POR ÁREA DE MONITORAMENTO: Transporte público
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100% sobre o universo de prefeituras, usada diretamente.
  - Valor (Nacional): 14,50

- **F2C**. PREFEITURAS QUE POSSUEM CENTRO DE OPERAÇÕES PARA MONITORAMENTO DE SITUAÇÕES COMO TRÂNSITO, SEGURANÇA OU EMERGÊNCIA, POR ÁREA DE MONITORAMENTO: Trânsito
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100% sobre o universo de prefeituras, usada diretamente.
  - Valor (Nacional): 26,28

- **F2C**. PREFEITURAS QUE POSSUEM CENTRO DE OPERAÇÕES PARA MONITORAMENTO DE SITUAÇÕES COMO TRÂNSITO, SEGURANÇA OU EMERGÊNCIA, POR ÁREA DE MONITORAMENTO: Segurança pública
  - *Contagem:* O valor é a proporção de respostas positivas na população indicada. Percentuais condicionados são recalculados sobre a população inteira, no mesmo estrato; quem ficou fora do filtro conta como resposta negativa, com leitura de piso.
  - *Normalização:* Proporção 0-100% sobre o universo de prefeituras, usada diretamente.
  - Valor (Nacional): 29,76

*MUNIC 2024 (IBGE):*

- **Mtic263**. O município conta atualmente com: Centro de controle operacional
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 22,98
  - Valor (Capitais): 96,30 (26/27 capitais)

- **Mtic264**. O município conta atualmente com: Sistema de iluminação inteligente que permite a medição de consumo de energia ou alteração à distância da iluminação de áreas do município
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 7,04
  - Valor (Capitais): 44,44 (12/27 capitais)

- **Mtic265**. O município conta atualmente com: Semáforos inteligentes controlados a distância para ações como priorizar o transporte público ou a circulação em rotas expressas
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 5,03
  - Valor (Capitais): 77,78 (21/27 capitais)

- **Mtic266**. O município conta atualmente com: Sensores para monitoramento de áreas com risco de enchentes, alagamentos ou outros desastres naturais
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 7,36
  - Valor (Capitais): 51,85 (14/27 capitais)

- **Mtic261**. O município conta atualmente com: Bilhete ou cartão eletrônico aos cidadãos para uso de transporte público
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 9,34
  - Valor (Capitais): 100,00 (27/27 capitais)

- **Mtic262**. O município conta atualmente com: Ônibus municipais com dispositivo de GPS que envia informações de localização e velocidade dos veículos
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 11,54
  - Valor (Capitais): 92,59 (25/27 capitais)

*ESTADIC 2024 (IBGE):*

- **Etic241**. O governo estadual: Instituiu o bilhete único para uso de transporte público
  - *Contagem:* Conta como sim a categoria Sim; Não e sem resposta contam como não. Rondônia, que não informou, conta como não.
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 44,44
  - Valor (Estadual): 44,44 (média de 27 UFs)


*Bateria de monitoramento setorial: os 6 itens apresentados nesta seção entram como um único componente, pela média dos itens observados (ver Capítulo 3).*

### 9.3.8 Orientações para uso de inteligência artificial

*Definição:* Guias, manuais, diretrizes ou orientações institucionais para o uso de inteligência artificial em serviços públicos e na educação pública. Corresponde à Recomendação 6.6.

*Média Nacional:* 20,8 (n=2; 2 itens).

**Indicadores:**

*TIC Governo Eletrônico 2025 (CETIC.br):*

- **H3E**. Em relação a ferramentas de Inteligência Artificial Generativa que ajudam a criar conteúdo automaticamente, como ChatGpt, Copilot, Gemini ou similares, este órgão público Disponibilizou algum guia, manual, diretrizes ou orientações para uso dessas tecnologias para seus funcionários? / Em relação a ferramentas de Inteligência Artificial Generativa que ajudam a criar conteúdo automaticamente, como ChatGpt, Copilot, Gemini ou similares, esta prefeitura Disponibilizou algum guia, manual, diretrizes ou orientações para uso dessas tecnologias para seus funcionários:
  - *Normalização:* Proporção 0-100%; valor Nacional é a média das proporções sobre os universos de órgãos públicos e de prefeituras (peso igual; ver Seção 3.3.4); valor Federal é a proporção sobre os órgãos federais (linha Federal do nível de governo na tabela de órgãos).
  - Valor (Nacional): 20,72
  - Valor (Federal): 42,86

*TIC Educação 2025 (CETIC.br):*

- **E5A**. A escola possui guia de orientações sobre o uso de Inteligência Artificial nas atividades de ensino e de aprendizagem e de gestão?
  - *Normalização:* Proporção 0-100%, usada diretamente
  - Valor (Nacional): 20,85

### 9.3.9 Recorte Estadual

*Definição:* Conjunto das variáveis do Objetivo 6 com observação por UF, agregadas para leitura federativa estadual. Reúne 2 variáveis IOSPD e 3 variáveis ESTADIC. Inclui variáveis também classificadas em dimensões temáticas (única exceção à regra de não-repetição). As perguntas estão nas dimensões temáticas indicadas na tabela.

*Média Estadual:* 69,5 (n=5; 5 itens).

![Recorte Estadual do Objetivo 6](../graficos/recortes/cap09_estadual.png)

<!-- federal:tabela-estadual -->
*Tabela 15. Indicadores do Recorte Estadual do Objetivo 6, com a dimensão temática da pergunta e o valor estadual*

| Código | Fonte | Pergunta na dimensão | Valor (Estadual) |
|---|---|---|---:|
| `1.12` | IOSPD | 9.3.3 Conectividade pública e em equipamentos públicos | 74,00 |
| `4.6` | IOSPD | 9.3.6 Programas de inclusão digital ao cidadão | 70,19 |
| `Etic20` | ESTADIC | 9.3.3 Conectividade pública e em equipamentos públicos | 62,96 |
| `Etic17` | ESTADIC | 9.3.6 Programas de inclusão digital ao cidadão | 96,30 |
| `Etic241` | ESTADIC | 9.3.7 Infraestrutura urbana inteligente | 44,44 |
<!-- /federal:tabela-estadual -->

### 9.3.10 Recorte de Capitais

*Definição:* Conjunto das variáveis do Objetivo 6 com observação por capital, agregadas para leitura federativa municipal. Reúne 5 variáveis Censo Escolar, 1 variável Cobertura móvel e 10 variáveis MUNIC. Inclui variáveis também classificadas em dimensões temáticas (única exceção à regra de não-repetição). As perguntas estão nas dimensões temáticas indicadas na tabela.

*Média Capitais:* 83,5 (n=12; 16 itens).

![Recorte de Capitais do Objetivo 6](../graficos/recortes/cap09_capitais.png)

<!-- federal:tabela-capitais -->
*Tabela 16. Indicadores do Recorte de Capitais do Objetivo 6, com a dimensão temática da pergunta e o valor das capitais*

| Código | Fonte | Pergunta na dimensão | Valor (Capitais) |
|---|---|---|---:|
| `IN_INTERNET` | Censo Escolar | 9.3.2 Infraestrutura digital nas escolas | 96,65 |
| `IN_COMPUTADOR` | Censo Escolar | 9.3.2 Infraestrutura digital nas escolas | 96,31 |
| `IN_LABORATORIO_INFORMATICA` | Censo Escolar | 9.3.2 Infraestrutura digital nas escolas | 41,92 |
| `IN_INTERNET_ALUNOS` | Censo Escolar | 9.3.2 Infraestrutura digital nas escolas | 46,89 |
| `IN_INTERNET_APRENDIZAGEM` | Censo Escolar | 9.3.2 Infraestrutura digital nas escolas | 69,26 |
| `BLM02` | Cobertura móvel | 9.3.1 Conectividade do ambiente brasileiro | 98,99 |
| `Mtic04` | MUNIC | 9.3.3 Conectividade pública e em equipamentos públicos | 100,00 |
| `Mtic22` | MUNIC | 9.3.3 Conectividade pública e em equipamentos públicos | 85,19 |
| `Mtic08` | MUNIC | 9.3.4 Plataformas digitais e armazenamento de dados | 92,59 |
| `Mtic19` | MUNIC | 9.3.6 Programas de inclusão digital ao cidadão | 92,59 |
| `Mtic263` | MUNIC | 9.3.7 Infraestrutura urbana inteligente | 96,30 |
| `Mtic264` | MUNIC | 9.3.7 Infraestrutura urbana inteligente | 44,44 |
| `Mtic265` | MUNIC | 9.3.7 Infraestrutura urbana inteligente | 77,78 |
| `Mtic266` | MUNIC | 9.3.7 Infraestrutura urbana inteligente | 51,85 |
| `Mtic261` | MUNIC | 9.3.7 Infraestrutura urbana inteligente | 100,00 |
| `Mtic262` | MUNIC | 9.3.7 Infraestrutura urbana inteligente | 92,59 |
<!-- /federal:tabela-capitais -->

<!-- federal:secao -->
### 9.3.11 Recorte Federal

*Definição:* Conjunto das variáveis do Objetivo 6 com observação dos órgãos federais, agregadas para leitura do governo federal como ente único. Reúne as 2 variáveis TIC Governo Eletrônico e as 10 variáveis iGovSISP do objetivo. Inclui variáveis também classificadas em dimensões temáticas (única exceção à regra de não-repetição). As perguntas estão nas dimensões temáticas indicadas na tabela.

*Média Federal:* 47,2 (n=10; 12 itens).

*Tabela 17. Indicadores do Recorte Federal do Objetivo 6, com a dimensão temática da pergunta e o valor federal (TIC Gov.: TIC Governo Eletrônico)*

| Código | Fonte | Pergunta na dimensão | Valor (Federal) |
|---|---|---|---:|
| `B9B` | TIC Gov. | 9.3.4 Plataformas digitais e armazenamento de dados | 87,86 |
| `H3E` | TIC Gov. | 9.3.8 Orientações para uso de inteligência artificial | 42,86 |
| `G625IPD` | iGovSISP | 9.3.4 Plataformas digitais e armazenamento de dados | 34,87 |
| `G637IPD` | iGovSISP | 9.3.4 Plataformas digitais e armazenamento de dados | 10,08 |
| `G6001IPD` | iGovSISP | 9.3.4 Plataformas digitais e armazenamento de dados | 45,80 |
| `G642IPD` | iGovSISP | 9.3.4 Plataformas digitais e armazenamento de dados | 36,55 |
| `G607IPD` | iGovSISP | 9.3.5 Gestão e qualificação da rede de TI federal | 87,82 |
| `G608IPD` | iGovSISP | 9.3.5 Gestão e qualificação da rede de TI federal | 76,05 |
| `G609IPD` | iGovSISP | 9.3.5 Gestão e qualificação da rede de TI federal | 81,93 |
| `G634IPD` | iGovSISP | 9.3.5 Gestão e qualificação da rede de TI federal | 35,29 |
| `G636IPD` | iGovSISP | 9.3.5 Gestão e qualificação da rede de TI federal | 35,71 |
| `G641IPD` | iGovSISP | 9.3.5 Gestão e qualificação da rede de TI federal | 61,34 |
<!-- /federal:secao -->
