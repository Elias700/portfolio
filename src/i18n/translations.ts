export type Lang = 'pt' | 'en';

export type TranslationDict = {
 // Header
 'nav.home': string;
 'nav.about': string;
 'nav.projects': string;
 'nav.skills': string;
 'nav.contact': string;
 // Home
 'home.hello': string;
 'home.myNameIs': string;
 'home.role': string;
 'home.resume': string;
 // About
 'about.title': string;
 'about.subtitle': string;
 'about.paragraph': string;
 'about.button': string;
 // Projects
 'projects.title': string;
 'projects.subtitle': string;
 
  // --- CHAVES NOVAS ADICIONADAS AQUI ---
 'projects.item.nikel.name': string; 
 'projects.item.nikel.desc': string;
 'projects.item.batman.name': string;       
 'projects.item.batman.desc': string;
  // --- FIM CHAVES NOVAS ---

 'projects.item.bmi.name': string;
 'projects.item.bmi.desc': string;
 'projects.deploy': string;
 'projects.github': string;
 // Skills
 'skills.title': string;
 'skills.subtitle': string;
 'skills.desc.react': string;
 'skills.desc.ts': string;
 'skills.desc.js': string;
 'skills.desc.tailwind': string;
 'skills.desc.html5': string;
 'skills.desc.css3': string;
 'skills.desc.github': string;
 'skills.desc.git': string;
 'skills.desc.figma': string;
 // LearningSkills
 'learning.title': string;
 'learning.subtitle': string;
 'learning.mysql.desc': string;
 'learning.java.desc': string;
 'learning.linux.desc': string;
 // Contact
 'contact.title': string;
 'contact.subtitle': string;
 'contact.name': string;
 'contact.email': string;
 'contact.phone': string;
 'contact.message': string;
 'contact.message.placeholder': string;
 'contact.send': string;
 // Footer
 'footer.rights': string;
};

export const translations: Record<Lang, TranslationDict> = {
 pt: {
  // Header
  'nav.home': 'Home',
  'nav.about': 'Sobre mim',
  'nav.projects': 'Meus projetos',
  'nav.skills': 'Habilidades',
  'nav.contact': 'Contato',
  // Home
  'home.hello': 'Olá!',
  'home.myNameIs': 'Me chamo',
  'home.role': 'Desenvolvedor Front-end',
  'home.resume': 'Currículo',
  // About
  'about.title': 'Sobre',
  'about.subtitle': 'Um pouco sobre mim',
  'about.paragraph': 'Sou formado em Licenciatura em Pedagogia e, atualmente, curso Análise e Desenvolvimento de Sistemas na Fundação Visconde de Cairu. Estou em processo de transição de carreira, tendo encontrado na programação uma verdadeira paixão. Gosto de transformar ideias em código e de dar vida a projetos que unem lógica, criatividade e funcionalidade. Desenvolver soluções, criar interfaces e aprender novas tecnologias me motiva diariamente, trazendo realização pessoal e profissional.',
  'about.button': 'Contato',
  // Projects
  'projects.title': 'Projetos',
  'projects.subtitle': 'Meus Projetos Principais',
    // --- VALORES NOVOS ADICIONADOS AQUI ---
  'projects.item.nikel.name': 'Nikel - Gestão Financeira',
  'projects.item.nikel.desc': 'Sistema de gestão de finanças pessoais com autenticação de usuário e controle detalhado de transações.',
  'projects.item.batman.name': 'The Batman',
  'projects.item.batman.desc': 'Site inspirado no filme The Batman, criado para fornecer informações sobre o longa e permitir que os usuários simulem a compra de ingressos.',
    // --- FIM VALORES NOVOS ---
  'projects.item.bmi.name': 'Calculadora IMC',
  'projects.item.bmi.desc': 'Calcular IMC',
  'projects.deploy': 'Deploy',
  'projects.github': 'Github',
  // Skills
  'skills.title': 'Habilidades',
  'skills.subtitle': 'Principais Habilidades',
  'skills.desc.react': 'Construção de interfaces de usuário interativas e reativas com componentes reutilizáveis. Utiliza o Virtual DOM e arquitetura baseada em componentes.',
  'skills.desc.ts': 'Superset do JavaScript que adiciona tipagem estática e recursos avançados, tornando o código mais seguro, escalável e fácil de manter.',
  'skills.desc.js': 'Linguagem de programação que dá interatividade e dinamismo às páginas web. É a base do desenvolvimento front-end moderno e também usada no back-end com Node.js.',
  'skills.desc.tailwind': 'Framework utilitário-first com classes prontas para estilização, permitindo montar layouts diretamente no HTML sem muito CSS customizado.',
  'skills.desc.html5': 'Linguagem de marcação padrão da web, responsável por estruturar o conteúdo de páginas: títulos, parágrafos, links, imagens e formulários.',
  'skills.desc.css3': 'Linguagem usada para estilizar páginas web, controlando cores, fontes, espaçamentos e layouts, tornando os sites mais atraentes e responsivos.',
  'skills.desc.github': 'Plataforma que hospeda repositórios Git e oferece recursos de colaboração, versionamento e integração, essencial para projetos open-source e trabalho em equipe.',
  'skills.desc.git': 'Sistema de controle de versão distribuído que permite acompanhar mudanças no código, trabalhar em equipe e gerenciar diferentes versões de um projeto.',
  'skills.desc.figma': 'Ferramenta de design colaborativa para prototipação e criação de interfaces, facilitando a integração entre designers e desenvolvedores.',
  // LearningSkills
  'learning.title': 'Habilidades',
  'learning.subtitle': 'Habilidades em aprendizado',
  'learning.mysql.desc': 'O MySQL Workbench é uma ferramenta gráfica oficial do MySQL usada para modelagem, desenvolvimento e administração de bancos de dados. Ele permite criar e gerenciar esquemas, executar consultas SQL e visualizar relações entre tabelas de forma intuitiva.',
  'learning.java.desc': 'Java é uma linguagem de programação robusta e orientada a objetos, amplamente utilizada no desenvolvimento de aplicações web, desktop e mobile. Sua principal característica é a portabilidade.',
  'learning.linux.desc': 'O Linux é um sistema operacional de código aberto conhecido por sua estabilidade, segurança e flexibilidade. É amplamente utilizado em servidores, desenvolvimento de software e ambientes de programação, sendo uma das bases mais importantes do ecossistema tecnológico atual.',
  // Contact
  'contact.title': 'Contato',
  'contact.subtitle': 'Quer enviar uma mensagem? Preencha o formulário abaixo.',
  'contact.name': 'Nome',
  'contact.email': 'Email',
  'contact.phone': 'Telefone',
  'contact.message': 'Mensagem',
  'contact.message.placeholder': 'Digite sua mensagem detalhada aqui...',
  'contact.send': 'Enviar mensagem',
  // Footer
  'footer.rights': '© Elias Ribeiro 2025. Todos os direitos reservados.',
 },
 en: {
   // Header
   'nav.home': 'Home',
   'nav.about': 'About me',
   'nav.projects': 'My projects',
   'nav.skills': 'Skills',
   'nav.contact': 'Contact',
   // Home
   'home.hello': 'Hello!',
   'home.myNameIs': 'My name is',
   'home.role': 'Front-end Developer',
   'home.resume': 'Resume',
   // About
   'about.title': 'About',
   'about.subtitle': 'A bit about me',
   'about.paragraph': 'I hold a degree in Pedagogy and I am currently studying Systems Analysis and Development at Fundação Visconde de Cairu. I am transitioning careers and have found a real passion in programming. I enjoy turning ideas into code and bringing projects to life that combine logic, creativity, and functionality. Developing solutions, creating interfaces, and learning new technologies motivates me every day, bringing personal and professional fulfillment.',
   'about.button': 'Contact',
   // Projects
   'projects.title': 'Projects',
   'projects.subtitle': 'My Main Projects',
     // --- VALORES NOVOS ADICIONADOS AQUI ---
    'projects.item.nikel.name': 'Nikel - Financial Management',
    'projects.item.nikel.desc': 'Personal finance management system with user authentication and detailed transaction control.',
    'projects.item.batman.name': 'The Batman',
    'projects.item.batman.desc': 'Website inspired by the movie The Batman, created to provide information about the film and allow users to simulate ticket purchases.',
     // --- FIM VALORES NOVOS ---
   'projects.item.bmi.name': 'BMI Calculator',
   'projects.item.bmi.desc': 'Calculate BMI',
   'projects.deploy': 'Deploy',
   'projects.github': 'Github',
   // Skills
   'skills.title': 'Skills',
   'skills.subtitle': 'Main Skills',
   'skills.desc.react': 'Building interactive and reactive UIs with reusable components. Uses the Virtual DOM and a component-based architecture.',
   'skills.desc.ts': 'A superset of JavaScript that adds static typing and advanced features, making code safer, more scalable, and easier to maintain.',
   'skills.desc.js': 'The programming language that brings interactivity and dynamism to web pages. It is the basis of modern front-end and is also used on the back-end with Node.js.',
   'skills.desc.tailwind': 'A utility-first CSS framework with ready-to-use classes that lets you compose layouts directly in markup without much custom CSS.',
   'skills.desc.html5': 'The standard web markup language responsible for structuring page content: headings, paragraphs, links, images, and forms.',
   'skills.desc.css3': 'The language used to style web pages, controlling colors, fonts, spacing, and layouts, making sites more appealing and responsive.',
   'skills.desc.github': 'A platform that hosts Git repositories and offers collaboration, versioning, and integration features—essential for open-source projects and teamwork.',
   'skills.desc.git': 'A distributed version control system that allows tracking code changes, teamwork, and managing different versions of a project.',
   'skills.desc.figma': 'A collaborative design tool for prototyping and UI creation, helping integrate designers and developers.',
  // ESTA LINHA ABAIXO FOI REMOVIDA, POIS ESTAVA DUPLICADA:
   // 'skills.desc.figma': 'A collaborative design tool for prototyping and UI creation, helping integrate designers and developers.',
   // LearningSkills
   'learning.title': 'Skills',
   'learning.subtitle': 'Skills I\'m learning',
   'learning.mysql.desc': 'MySQL Workbench is the official MySQL graphical tool used for database modeling, development, and administration. It allows you to create and manage schemas, run SQL queries, and visualize table relationships intuitively.',
   'learning.java.desc': 'Java is a robust, object-oriented programming language widely used for web, desktop, and mobile applications. Its main feature is portability.',
   'learning.linux.desc': 'Linux is an open-source operating system known for its stability, security, and flexibility. It is widely used in servers, software development, and programming environments, being one of the most important foundations of today\'s tech ecosystem.',
   // Contact
   'contact.title': 'Contact',
   'contact.subtitle': 'Want to send a message? Fill out the form below.',
   'contact.name': 'Name',
   'contact.email': 'Email',
   'contact.phone': 'Phone',
   'contact.message': 'Message',
   'contact.message.placeholder': 'Type your detailed message here...',
   'contact.send': 'Send message',
   // Footer
   'footer.rights': '© Elias Ribeiro 2025. All rights reserved.',
  }
};