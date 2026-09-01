export type Recommendation = {
  label: string
  text: string
}

export type Objective = {
  slug: string
  title: string
  summary: string
  description: string
  recommendations: Recommendation[]
}

export const objectives: Objective[] = [
  {
    slug: 'gestao-e-governanca',
    title: 'Governança do Governo Digital',
    summary:
      'Qualificar a gestão e governança das políticas de governo digital, promovendo a colaboração entre União, Distrito Federal, estados e municípios.',
    description:
      'Qualificar a gestão e governança das políticas de governo digital, promovendo a colaboração entre União, Distrito Federal, estados e municípios. Uma estratégia com amplitude nacional e capilaridade em todos os municípios demanda diretrizes concretas para sua institucionalização e governança, articulando uma atuação em rede, replicável nas escalas regionais e locais, para estabelecer políticas de estado para a transformação digital dos governos, com sustentabilidade e previsão de recursos.',
    recommendations: [
      {
        label: 'Recomendação 1.1',
        text: 'Contribuir com a criação, participação e subsídio às atividades de redes nacionais, estaduais, regionais e associativas de políticas públicas de inovação e governo digital no país, em especial da Rede GOV.BR e do seu Comitê Consultivo da Estratégia Nacional de Governo Digital.',
      },
      {
        label: 'Recomendação 1.2',
        text: 'Diversificar e indicar as fontes de financiamento da transformação digital, considerando a perenidade e a disponibilidade dos recursos.',
      },
      {
        label: 'Recomendação 1.3',
        text: 'Elaborar, publicar e implementar uma estratégia de governo digital adequada à realidade territorial e alinhada à Estratégia Nacional de Governo Digital.',
      },
      {
        label: 'Recomendação 1.4',
        text: 'Implementar uma estrutura de governança para as políticas de governo digital, com a designação de área responsável e instâncias colegiadas para acompanhamento e monitoramento da estratégia local.',
      },
      {
        label: 'Recomendação 1.5',
        text: 'Prever as ações de governo digital nos instrumentos de planejamento e orçamento do ciclo de políticas públicas (PPA, LDO, LOA), além de planos de governo.',
      },
      {
        label: 'Recomendação 1.6',
        text: 'Estabelecer governança interfederativa para a orquestração de serviços públicos que envolvam mais de um ente federado em sua execução, definindo responsabilidades, níveis de serviço e padrões de integração para jornadas de vida do cidadão.',
      },
      {
        label: 'Recomendação 1.7',
        text: 'Prever ações voltadas à implementação e consolidação da Infraestrutura Nacional de Dados da Educação (EducaDados) em alinhamento com a Infraestrutura Nacional de Dados (IND).',
      },
    ],
  },
  {
    slug: 'qualidade-dos-servicos-publicos',
    title: 'Qualidade dos Serviços Digitais',
    summary:
      'Aprimorar a qualidade dos serviços públicos com abordagem inclusiva, acessível, proativa e em canais integrados de atendimento, com atenção à experiência dos usuários.',
    description:
      'Aprimorar a qualidade dos serviços públicos com abordagem inclusiva, acessível, proativa e em canais integrados de atendimento, com atenção à experiência dos usuários. A avaliação e a experiência do usuário devem orientar a eficiência governamental e intensificar a entrega de valor.',
    recommendations: [
      {
        label: 'Recomendação 2.1',
        text: 'Desenhar serviços com linguagem simplificada, acessibilidade e jornada personalizada, aprimorando a experiência do usuário, com prioridade para populações vulneráveis, adotando a abordagem de eventos de vida do cidadão e assegurando que informações já disponíveis em bases governamentais não sejam novamente solicitadas.',
      },
      {
        label: 'Recomendação 2.2',
        text: 'Implementar ações de melhoria dos serviços públicos prestados, com base nos resultados da avaliação de satisfação e pesquisa direta com os usuários dos serviços, usando indicadores e modelagens padronizadas.',
      },
      {
        label: 'Recomendação 2.3',
        text: 'Disponibilizar serviços em canais digitais, preferencialmente por meio de autosserviço, e sem prejuízo do direito a atendimento presencial.',
      },
      {
        label: 'Recomendação 2.4',
        text: 'Integrar os canais digitais de prestação de serviços públicos e de comunicação, preferencialmente consolidando portais e aplicativos de dispositivos móveis, promovendo a integração de serviços de diferentes entes federados em uma experiência unificada para o cidadão.',
      },
      {
        label: 'Recomendação 2.5',
        text: 'Integrar os serviços públicos em diversidade de canais digitais e físicos, dispondo de canais de atendimento presencial para demandas não resolvidas plenamente pelos serviços públicos digitais, com investigação acerca das dificuldades e barreiras na prestação de serviços.',
      },
      {
        label: 'Recomendação 2.6',
        text: 'Desenvolver e implementar serviços públicos proativos, nos quais o governo, com base em dados e eventos de vida, notifique e ofereça automaticamente serviços e benefícios ao cidadão, eliminando a necessidade de solicitação prévia pelo usuário, respeitados a legislação de proteção de dados pessoais e o consentimento do titular.',
      },
      {
        label: 'Recomendação 2.7',
        text: 'Integrar os canais de atendimento físicos e digitais, assegurando que sejam acessíveis, adequados às necessidades do público e capazes de oferecer respostas efetivas às demandas.',
      },
      {
        label: 'Recomendação 2.8',
        text: 'Promover a criação de pontos únicos de atendimento digital (balcão único) para serviços que envolvam múltiplos entes federados, de forma que o cidadão realize uma única solicitação e que a orquestração entre os entes ocorra de forma automatizada, transparente e com interoperabilidade.',
      },
      {
        label: 'Recomendação 2.9',
        text: 'Adotar, como padrão na oferta de serviços públicos digitais, soluções web responsivas e progressivas, acessíveis em qualquer dispositivo sem necessidade de instalação, reservando o desenvolvimento de aplicativos nativos aos casos em que haja justificativa técnica ou funcional que o exija.',
      },
    ],
  },
  {
    slug: 'identidade-unica-do-cidadao',
    title: 'Identificação Única',
    summary:
      'Implementar e manter solução estruturante de identificação única e nacional, com ampla disponibilidade e validade para todos os entes federados.',
    description:
      'Implementar e manter solução estruturante de identificação única e nacional, com ampla disponibilidade e validade para todos os entes federados. A identidade digital única funciona como conexão entre o mundo físico e o digital nos serviços públicos, reduzindo fraudes e burocracia.',
    recommendations: [
      {
        label: 'Recomendação 3.1',
        text: 'Integrar os serviços públicos digitais ao mecanismo de autenticação digital da Plataforma GOV.BR.',
      },
      {
        label: 'Recomendação 3.2',
        text: 'Integrar os serviços públicos para dar a opção de uso das ferramentas de assinatura eletrônica, inclusive o mecanismo da Plataforma GOV.BR.',
      },
      {
        label: 'Recomendação 3.3',
        text: 'Integrar todos os órgãos estaduais de emissão de identidade civil ao Serviço de Identificação do Cidadão.',
      },
      {
        label: 'Recomendação 3.4',
        text: 'Participar, sob coordenação da União, das definições e desenvolvimento de ferramentas cooperativas para implementação do Serviço de Identificação Civil em canais físicos e digitais, incluindo a integração com a solução de autenticação digital da Plataforma GOV.BR.',
      },
      {
        label: 'Recomendação 3.5',
        text: 'Prover aos cidadãos repositórios digitais de seus documentos e informações, consolidando-os de forma integrada entre os entes federados, para dispor proativamente de atestados, certidões, documentos comprobatórios de regularidade, dentre outros, preferencialmente integrados à Plataforma GOV.BR, permitindo o compartilhamento seguro e consentido de dados entre órgãos para eliminação de exigências documentais redundantes.',
      },
      {
        label: 'Recomendação 3.6',
        text: 'Regulamentar uso de assinaturas eletrônicas nas suas interações internas e com a sociedade.',
      },
      {
        label: 'Recomendação 3.7',
        text: 'Utilizar o número de inscrição no Cadastro de Pessoas Físicas - CPF como número suficiente para identificação do cidadão, fazendo constar nos cadastros e documentos de órgãos públicos.',
      },
      {
        label: 'Recomendação 3.8',
        text: 'Contribuir para a instituição e manutenção de um cadastro base do cidadão, de âmbito nacional, que consolide dados essenciais compartilhados entre União, estados e municípios, observada a legislação de proteção de dados pessoais, como instrumento para a oferta integrada e proativa de serviços públicos.',
      },
      {
        label: 'Recomendação 3.9',
        text: 'Permitir que órgãos da administração pública, de qualquer ente federado, acessem documentos e informações já disponíveis nos repositórios digitais do cidadão para a prestação de serviços, mediante base legal adequada, consentimento granular e revogável do titular quando aplicável, registro auditável de acessos e adoção de mecanismos de segurança e proteção de dados pessoais.',
      },
    ],
  },
  {
    slug: 'privacidade-e-seguranca',
    title: 'Segurança e LGPD',
    summary:
      'Ampliar a resiliência e a maturidade das estruturas tecnológicas governamentais com atenção à privacidade, proteção de dados pessoais, segurança da informação e segurança cibernética.',
    description:
      'Ampliar a resiliência e a maturidade das estruturas tecnológicas governamentais com atenção à privacidade, proteção de dados pessoais, segurança da informação e segurança cibernética. Um mundo cada vez mais digitalizado demanda proteção crescente para resguardar dados de cidadãos e governos contra ameaças cibernéticas, garantindo conformidade com requisitos de segurança e privacidade.',
    recommendations: [
      {
        label: 'Recomendação 4.1',
        text: 'Instituir estrutura de governança e coordenação para implementação de medidas de reforço à privacidade, proteção de dados pessoais, segurança da informação e segurança cibernética, em articulação com estruturas de mesmo propósito de âmbito regional e nacional, em especial o Programa de Privacidade e Segurança da Informação - PPSI do Governo Federal.',
      },
      {
        label: 'Recomendação 4.2',
        text: 'Estabelecer plano de ação de reforço à privacidade, proteção de dados pessoais, segurança da informação e segurança cibernética que contemple diagnóstico, controles, metodologias e soluções tecnológicas adequadas aos riscos identificados.',
      },
      {
        label: 'Recomendação 4.3',
        text: 'Designar encarregado pelo tratamento de dados pessoais e gestor de segurança da informação.',
      },
      {
        label: 'Recomendação 4.4',
        text: 'Promover ações de sensibilização, conscientização e capacitação para agentes públicos, lideranças governamentais e sociedade sobre privacidade, proteção de dados pessoais, segurança da informação e segurança cibernética, sendo o Centro de Excelência em Privacidade e Segurança da Informação - CEPS Gov.br a unidade de referência para tais atividades.',
      },
      {
        label: 'Recomendação 4.5',
        text: 'Contribuir com a criação, participação e subsídio das atividades de redes nacionais, estaduais, regionais e associativas das equipes de prevenção, tratamento e resposta a incidentes cibernéticos, sendo o Centro Integrado de Segurança Cibernética do Governo Digital - CISC Gov.br a unidade de referência para tais atividades.',
      },
    ],
  },
  {
    slug: 'inteligencia-de-dados',
    title: 'Dados e Interoperabilidade',
    summary:
      'Qualificar a tomada de decisões e a oferta de serviços nas organizações públicas com o reuso constante e de forma ética dos dados disponíveis para análises, interoperabilidade e personalização.',
    description:
      'Qualificar a tomada de decisões e a oferta de serviços nas organizações públicas com o reuso constante e de forma ética dos dados disponíveis para análises, interoperabilidade e personalização. A estratégia propõe eliminar a necessidade de os cidadãos reunirem documentos que o governo já possui, reduzindo a burocracia e permitindo um governo proativo, que atenda antes mesmo da solicitação.',
    recommendations: [
      {
        label: 'Recomendação 5.1',
        text: 'Elaborar, publicar e implementar um programa de governança de dados.',
      },
      {
        label: 'Recomendação 5.2',
        text: 'Estabelecer e adotar mecanismos de interoperabilidade e compartilhamento de dados, entre os órgãos e com outros entes federados, especialmente os ofertados pela Plataforma GOV.BR, adotando padrões abertos e catálogos comuns, para qualificação das políticas públicas e eliminação de pedidos de dados dispensáveis na oferta de serviços públicos, com prioridade para jornadas de serviços que envolvam múltiplos entes federados em sua execução.',
      },
      {
        label: 'Recomendação 5.3',
        text: 'Contribuir para a elaboração e adotar um modelo de compartilhamento de dados que permita ao cidadão o uso seguro dos seus dados e melhore sua experiência no acesso a serviços.',
      },
      {
        label: 'Recomendação 5.4',
        text: 'Estimular o uso responsável de análise de dados na tomada de decisão de políticas públicas e na personalização de serviços, observadas a finalidade pública, a ética, a transparência, a proteção de dados pessoais, a prevenção de vieses discriminatórios e a avaliação de resultados.',
      },
      {
        label: 'Recomendação 5.5',
        text: 'Instituir mecanismos de governança proporcionais ao risco para o uso de inteligência artificial no setor público, com definição de responsabilidades, instâncias de supervisão e processos de autoavaliação de impacto, observados os princípios éticos, os direitos fundamentais e o interesse público.',
      },
      {
        label: 'Recomendação 5.6',
        text: 'Instituir plataformas federativas de compartilhamento de dados que permitam a troca segura e padronizada de informações entre União, estados e municípios para a prestação integrada de serviços, adotando modelos de governança de dados interfederativa e padrões de qualidade, catalogação e semântica comuns.',
      },
      {
        label: 'Recomendação 5.7',
        text: 'Adotar a regra de que dados e documentos já disponíveis em bases oficiais não sejam novamente solicitados ao cidadão na prestação de serviços públicos, cabendo aos órgãos a consulta automatizada às fontes autoritativas, respeitadas a legislação de proteção de dados pessoais, as hipóteses legais de tratamento e o consentimento do titular quando aplicável.',
      },
    ],
  },
  {
    slug: 'infraestrutura-digital',
    title: 'Infraestrutura',
    summary:
      'Dispor de infraestrutura moderna, segura, escalável e robusta para a implantação e evolução de soluções de governo digital, promovendo soluções estruturantes compartilhadas, uso de padrões comuns e a integração entre os entes federados.',
    description:
      'Dispor de infraestrutura moderna, segura, escalável e robusta para a implantação e evolução de soluções de governo digital, promovendo soluções estruturantes compartilhadas, uso de padrões comuns e a integração entre os entes federados. A infraestrutura que sustenta os serviços públicos digitais inclui conectividade, plataformas, capacidade de processamento, armazenamento e padrões tecnológicos.',
    recommendations: [
      {
        label: 'Recomendação 6.1',
        text: 'Adotar e contribuir com o desenvolvimento de soluções de plataformas digitais escaláveis e responsáveis no provimento de serviços públicos e demais processos da administração pública, incluindo a disponibilização de assistentes e agentes e automação de processos com sistemas de inteligência artificial.',
      },
      {
        label: 'Recomendação 6.2',
        text: 'Adotar e contribuir para formação de arranjos colaborativos de disponibilização de infraestrutura e soluções digitais, fomentando inclusive a participação das empresas públicas de tecnologia de informação nesses arranjos, e promovendo o reúso de serviços digitais entre entes federados por meio de mecanismos abertos e padronizados de documentação e disponibilização.',
      },
      {
        label: 'Recomendação 6.3',
        text: 'Prover opções de conectividade pública, para acesso gratuito e facilitado a soluções de prestação de serviço digital pela sociedade, especialmente utilizando estrutura de canais de atendimento presencial e outros prédios e equipamentos públicos.',
      },
      {
        label: 'Recomendação 6.4',
        text: 'Estabelecer iniciativas para ampliar e melhorar a infraestrutura de rede em órgãos públicos, especialmente em locais de grande demanda, garantindo conectividade adequada para a prestação eficiente de serviços e o trabalho dos servidores, considerando inclusive parcerias e programas nacionais voltados para essa finalidade.',
      },
      {
        label: 'Recomendação 6.5',
        text: 'Definir uma estratégia adequada para armazenamento e processamento de dados, levando em conta a economicidade, segurança, soberania e resiliência, com atenção especial às condições dos data centers em uso.',
      },
      {
        label: 'Recomendação 6.6',
        text: 'Adotar e disseminar guias, diretrizes, padrões e modelos de referência para orientar a aquisição, o desenvolvimento, a implementação e o uso de soluções de inteligência artificial nos serviços públicos.',
      },
      {
        label: 'Recomendação 6.7',
        text: 'Promover a adoção de arquiteturas orientadas à integração e à disponibilização de infraestrutura compartilhada que permita a orquestração automatizada de serviços entre diferentes entes federados, especialmente para jornadas de vida do cidadão que exijam tramitação em mais de uma esfera de governo.',
      },
    ],
  },
  {
    slug: 'ecossistema-de-inovacao',
    title: 'Inovação e Tecnologias Emergentes',
    summary:
      'Estimular e fomentar o desenvolvimento do ecossistema de inovação e de governo digital, envolvendo todos os entes federados e a sociedade, gerando novas oportunidades para o aprimoramento do setor público e desenvolvimento de negócios, inclusive para o desenvolvimento e o uso de tecnologias emergentes.',
    description:
      'Estimular e fomentar o desenvolvimento do ecossistema de inovação e de governo digital, envolvendo todos os entes federados e a sociedade, gerando novas oportunidades para o aprimoramento do setor público e desenvolvimento de negócios, inclusive para o desenvolvimento e o uso de tecnologias emergentes. Busca-se criar um ambiente propício que reúna setor público, empresas, centros de pesquisa, aceleradoras e sociedade civil, com foco nas necessidades dos cidadãos e nas potencialidades governamentais.',
    recommendations: [
      {
        label: 'Recomendação 7.1',
        text: 'Contribuir com a criação, participar e subsidiar as atividades de redes nacionais, estaduais, regionais e associativas de políticas públicas de inovação em governo no país, em especial da Rede InovaGOV e da Rede GOV.BR.',
      },
      {
        label: 'Recomendação 7.2',
        text: 'Desenvolver mecanismos que permitam parcerias com o setor privado e com demais organizações não governamentais para transformação digital, especialmente com startups voltadas para soluções de valor público (Govtechs).',
      },
      {
        label: 'Recomendação 7.3',
        text: 'Implementar e utilizar abordagens de laboratórios de inovação como espaços abertos à participação e à colaboração da sociedade para o desenvolvimento de ideias, de ferramentas e de métodos inovadores para a gestão pública e prestação de serviços públicos.',
      },
      {
        label: 'Recomendação 7.4',
        text: 'Mapear e desenvolver casos de uso de tecnologias baseadas em inteligência artificial e outras tecnologias emergentes, atentando para capacitação dos agentes envolvidos e para designação de cuidados éticos no uso.',
      },
      {
        label: 'Recomendação 7.5',
        text: 'Utilizar compras públicas como mecanismo fomentador de inovação, especialmente por meio dos mecanismos de compras públicas de inovação e inovação aberta.',
      },
      {
        label: 'Recomendação 7.6',
        text: 'Utilizar infraestrutura tecnológica que facilite o uso de dados de acesso público e promova a interação entre diversos agentes, de forma segura, eficiente e responsável, para estímulo à inovação, à exploração de atividade econômica e à prestação de serviços à população.',
      },
    ],
  },
  {
    slug: 'eficiencia-e-colaboracao',
    title: 'Eficiência e Processos',
    summary:
      'Otimizar e promover a eficiência dos processos das organizações públicas por meio da racionalização de procedimentos e compartilhamento de soluções para problemas comuns.',
    description:
      'Otimizar e promover a eficiência dos processos das organizações públicas por meio da racionalização de procedimentos e compartilhamento de soluções para problemas comuns. Busca-se abandonar perspectivas analógicas e adotar uma lógica digital que maximize o valor da informação e a interoperabilidade.',
    recommendations: [
      {
        label: 'Recomendação 8.1',
        text: 'Adotar e desenvolver soluções de compras públicas de forma integrada e compartilhada, em portais padronizados, alinhadas à legislação federal.',
      },
      {
        label: 'Recomendação 8.2',
        text: 'Adotar metodologias de cálculo de impacto econômico, social e ambiental para mensuração dos efeitos da transformação digital, divulgando os resultados periodicamente.',
      },
      {
        label: 'Recomendação 8.3',
        text: 'Adotar padrões e boas práticas estabelecidas para a contratação de serviços de tecnologia, garantindo o máximo de interoperabilidade e formas de integração com os sistemas já disponíveis.',
      },
      {
        label: 'Recomendação 8.4',
        text: 'Adotar sistemas de processos administrativos eletrônicos compatíveis com o Processo Eletrônico Nacional - PEN, proporcionando maior segurança jurídica, eficiência e celeridade, e viabilizando a tramitação automatizada de processos entre diferentes entes federados quando o serviço assim o exigir, de forma transparente para o cidadão.',
      },
      {
        label: 'Recomendação 8.5',
        text: 'Disponibilizar soluções tecnológicas de uso comum em plataformas centralizadas, com uso de padrões abertos que garantam interoperabilidade, possibilitando sua integração, reutilização e compartilhamento com outros entes federados e organizações.',
      },
      {
        label: 'Recomendação 8.6',
        text: 'Inovar na gestão com arranjos organizacionais mais integrados, baseados nos modelos de serviços compartilhados, contemplando processos de monitoramento contínuo das soluções digitais e avaliação periódica de desempenho e de conformidade proporcionais aos riscos.',
      },
      {
        label: 'Recomendação 8.7',
        text: 'Revisar, simplificar e digitalizar processos e rotinas de trabalho com foco na eficiência e na qualidade da entrega, e adotando metodologias ágeis e iterativas para o desenvolvimento de soluções e resolução de problemas.',
      },
      {
        label: 'Recomendação 8.8',
        text: 'Mapear, redesenhar e digitalizar as jornadas de serviços públicos que envolvam a atuação de múltiplos entes federados (jornadas interfederativas), adotando metodologias de simplificação, automação e integração de processos, com foco na eliminação de redundâncias e na redução do tempo e do esforço exigidos do cidadão.',
      },
    ],
  },
  {
    slug: 'transparencia-e-participacao',
    title: 'Transparência e Participação',
    summary:
      'Contribuir para a ampliação da abertura e da transparência das organizações públicas, para legitimar o controle e a participação social, bem como potencializar a colaboração com a sociedade para entregar valor público.',
    description:
      'Contribuir para a ampliação da abertura e da transparência das organizações públicas, para legitimar o controle e a participação social, bem como potencializar a colaboração com a sociedade para entregar valor público. As tecnologias digitais permitem maior transparência das atividades e gastos públicos, abrindo novos canais para a participação cidadã nas decisões governamentais e expandindo dados abertos e meios de controle social.',
    recommendations: [
      {
        label: 'Recomendação 9.1',
        text: 'Implementar instrumentos de participação social e cocriação que permitam ao cidadão contribuir para a melhoria contínua dos serviços públicos e das políticas de governo digital, com mecanismos de devolutiva sobre as contribuições recebidas.',
      },
      {
        label: 'Recomendação 9.2',
        text: 'Instituir canais, espaços e ações para promover a transparência do governo digital.',
      },
      {
        label: 'Recomendação 9.3',
        text: 'Promover a transparência, o acesso à informação e o uso de dados abertos pelos cidadãos.',
      },
      {
        label: 'Recomendação 9.4',
        text: 'Promover a transparência no uso de inteligência artificial, com informações claras sobre a finalidade, o funcionamento e os impactos das soluções, com nível de detalhamento proporcional aos riscos e resguardadas as informações legalmente protegidas.',
      },
    ],
  },
  {
    slug: 'competencias-e-capacitacao',
    title: 'Competências em Governo Digital',
    summary:
      'Desenvolver competências nas pessoas e equipes para consolidar a cultura de governo digital e inovação nas organizações públicas, ampliando a atração e retenção de talentos.',
    description:
      'Desenvolver competências nas pessoas e equipes para consolidar a cultura de governo digital e inovação nas organizações públicas, ampliando a atração e retenção de talentos. A transformação digital requer desenvolver novos conhecimentos e habilidades, estabelecer uma nova cultura organizacional e fomentar o pensamento digital para melhorar o uso da tecnologia no governo.',
    recommendations: [
      {
        label: 'Recomendação 10.1',
        text: 'Contribuir com a criação, participação e subsídio às atividades de redes nacionais, estaduais, regionais e associativas de capacitação de servidores e lideranças públicas no país em temáticas de governo digital e inovação, em especial das escolas de governo e do Programa Capacita GOV.BR.',
      },
      {
        label: 'Recomendação 10.2',
        text: 'Implementar, difundir e participar de capacitações especificas voltadas para abordagens inclusivas na prestação de serviços e políticas públicas, minimamente sobre acessibilidade, linguagem simples, interfaces intuitivas, e integração de canais físicos e digitais.',
      },
      {
        label: 'Recomendação 10.3',
        text: 'Instituir ações específicas de capacitação continuada, aprimoramento da gestão e retenção de talentos.',
      },
      {
        label: 'Recomendação 10.4',
        text: 'Realizar e promover a participação em eventos específicos para disseminação de conhecimento a respeito de transformação digital e inovação, em especial aqueles voltados para lideranças e servidores públicos.',
      },
      {
        label: 'Recomendação 10.5',
        text: 'Promover programas de capacitação e de letramento em dados, computação em nuvem, cibersegurança e inteligência artificial para servidores públicos de todos os níveis, com ênfase na compreensão ética, na análise crítica de dados e na aplicação prática dessas competências na melhoria de serviços e políticas públicas.',
      },
      {
        label: 'Recomendação 10.6',
        text: 'Desenvolver e disseminar programas de capacitação voltados à liderança digital no setor público, formando gestores capazes de conduzir projetos de transformação digital, governança de dados e integração de serviços em contextos interfederativos.',
      },
    ],
  },
]

export function getObjective(slug: string): Objective | undefined {
  return objectives.find(objective => objective.slug === slug)
}

export function getObjectiveNumber(slug: string): number {
  return objectives.findIndex(objective => objective.slug === slug) + 1
}
