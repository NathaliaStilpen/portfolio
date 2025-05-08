import project1 from "../assets/app-tempo.png";
import project2 from "../assets/app-twitter.png";
import project3 from "../assets/app-jogo.png";
import project4 from "../assets/app-dr.png";
import project5 from "../assets/app-book.png";
import project6 from "../assets/app-porti.png";

export const HERO_CONTENT = `Sou Desenvolvedora Frontend, com experiência em React.js, Next.js, Vue.js, Flutter e WordPress. Já atuei em projetos internacionais, como o R/GA Google Califórnia, desenvolvendo habilidades em colaboração global e atenção aos detalhes. Estudo Ciência da Computação na UNIFEI e busco sempre criar soluções eficientes e com boa experiência para o usuário.`;

export const ABOUT_TEXT = `Sou Desenvolvedora Frontend e Analista de QA, com experiência em React.js, Next.js, Vue.js, Flutter e WordPress. Já atuei em projetos internacionais, como o R/GA Google Califórnia, desenvolvendo habilidades em colaboração global e atenção aos detalhes. Estudo Ciência da Computação na UNIFEI e busco sempre criar soluções eficientes e com boa experiência para o usuário.`;

export const EXPERIENCES = [
  {
    year: "Julho 2024 - O momento",
    role: "Desenvolvedor Front-end Júnior",
    company: "Digital Republic",
    description: `Responsável pelo desenvolvimento de aplicações Web e Mobile, utilizando React e Next JS.`,
    technologies: ["Javascript", "React.js", "Next.js"],
  },
  {
    year: "Julho 2024 - O momento",
    role: "Analista de QA",
    company: "Digital Republic",
    description: `Responsável pela garantia da qualidade em diversos projetos, com foco na estabilidade e usabilidade dos produtos. Além disso executava testes funcionais, regressivos e exploratórios para otimizar a performance das aplicações e gerenciava relatórios de bugs.`,
    technologies: ["JavaScript", "Jest"],
  },
  {
    year: "Outubro 2021 - Julho 2024",
    role: "Content Engineer",
    company: "Digital Republic",
    description: `Alocada no projeto R/GA Google Califórnia, trabalhando em um ambiente totalmente em inglês. Responsável pelo gerenciamento de conteúdos para sites do Google em mais de 50 países. Além disso executava releases, coordenação de traduções e atualizações alinhadas a lançamentos de produtos, colaborando com equipes globais e engenheiros de software para otimizar processos.`,
    technologies: ["Kintaro", "HTML", "GIT", "Docker"],
  },
  {
    year: "Julho 2021 - Janeiro 2022",
    role: "Estagiário Desenvolvedor Front-end Júnior",
    company: "Mova",
    description: `Responsável pelo desenvolvimento de aplicações web utilizando Vue Js`,
    technologies: ["VueJS", "JavaScript"],
  },
  {
    year: "Maio 2021 - Agosto 2021",
    role: "Desenvolvedor Web",
    company: "180 Soluções",
    description: `Responsável pelo desenvolvimento de aplicações web e mobile utilizando  HTML, CSS e Wordpress`,
    technologies: ["WordPress", "HTML", "CSS"],
  },
];

export const PROJECTS = [
  {
    title: "Aplicação de Portfólio",
    image: project6 ,
    description:
      "Aplicação web e mobile de portfólio com o objetivo de apresentar experiências profissionais, habilidades e projetos",
    technologies: ["React", "HTML", "CSS", "Tailwind"],
    git: 'https://github.com/NathaliaStilpen/portfolio'
  },
  {
    title: "Aplicação de Cadastro de Cv",
    image: project4,
    description:
      "Aplicação web e mobile para cadastro de currículos, com páginas de login, cadastro e envio de currículo, desenvolvida com Next.js, Tailwind CSS, autenticação via NextAuth e validação com Zod.",
    technologies: ["NextJs", "Tailwind"],
    git: 'https://gitlab.com/NathaliaStilpen/recruiter'
  },
  {
    title: "Aplicação de Previsão de Tempo",
    image: project1,
    description:
      "Projeto desenvolvido utilizando a API OpenWeather, que permite ao usuário buscar qualquer localização e visualizar a previsão do tempo atual, além da previsão estendida para os próximos 5 dias. A interface é intuitiva e responsiva, oferecendo informações como temperatura, sensação térmica, umidade e condições climáticas de forma clara e acessível.",
    technologies: ["React", "HTML", "CSS", "Axios", "API"],
    git: 'https://github.com/NathaliaStilpen/previsao-tempo'
  },
  {
    title: "Aplicação Pesquisa de Livros",
    image: project5,
    description:
      "Aplicação de pesquisa de livros utilizando a API do Google Books, onde é possível buscar por título ou autor e visualizar um resumo do livro.",
    technologies: ["React", "HTML", "CSS", "Axios", "API"],
    git: 'https://github.com/NathaliaStilpen/ProjetoBook'
  },
  {
    title: "Aplicação Twitter",
    image: project2,
    description:
      "Aplicação inspirada no Twitter, com funcionalidades essenciais como feed de postagens, criação de tweets e interface similar à rede social. Além disso, conta com um sistema de postagens automáticas programadas, simulando atividade contínua no feed.",
    technologies: ["React ", "HTML", "CSS", "JavaScript"],
    git: 'https://github.com/NathaliaStilpen/twitter'
  },
  {
    title: "Aplicação Jogo de Jokenpô ",
    image: project3,
    description:
      "Aplicativo simples e interativo do clássico jogo Jokenpô, onde o usuário pode escolher entre pedra, papel ou tesoura e jogar contra o computador. O resultado é exibido imediatamente após a escolha.",
    technologies: ["HTML", "CSS", "JavaScript"],
    git: 'https://github.com/NathaliaStilpen/joken-pow'
  },
];

export const CONTACT = {
  phoneNo: "+55 35 9 84039100",
  email: "nathaliaafss@gmail.com",
};
