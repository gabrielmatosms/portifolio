import { Github, Instagram, Linkedin } from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoExpress from "/public/images/logos/icon-express.svg";
import LogoExpressLight from "/public/images/logos/icon-express-light.svg";
import LogoPostgreSQL from "/public/images/logos/icon-postgresql.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoSass from "/public/images/logos/icon-sass.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoGit from "/public/images/logos/icon-git.svg";
import Logocsharp from "/public/images/logos/icon-csharp.svg";
import LogoJest from "/public/images/logos/icon-jest.svg";
import LogoVue from "/public/images/logos/icon-vue.svg";
import LogoAzure from "/public/images/logos/icon-azure.svg";
import LogoDocker from "/public/images/logos/icon-docker.svg";
import LogoSonda from "/public/images/logos/logo-sonda.png";
import LogoSondaDark from "/public/images/logos/logo-sonda-dark.png";
import LogoAgrotools from "/public/images/logos/logo-agrotools.png";
import LogoAgrotoolsDark from "/public/images/logos/logo-agrotools-dark.png";
import ProjectLibras from "/public/images/libras-page.png";
import ProjectStop from "/public/images/stop-page.jpg";
import ProjectTodo from "/public/images/todo-page.jpg";
import ProjectPanela from "/public/images/panelaaberta-page.png";
import ProjectAdvocacy from "/public/images/santanafelicio-page.png";
import EmbraerLogoWhite from "/public/images/logos/embraerLogoWhite.png";
import EmbraerLogoBlue from "/public/images/logos/embraerLogo.png";

import { ExperienceDetails, ProjectDetails, TechDetails } from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/gabrielmatosms",
  INSTAGRAM: "https://instagram.com/gabrielmatosms",
  LINKEDIN: "https://linkedin.com/in/gabrielmms",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Journey",
    href: "#journey",
  },
  {
    label: "Projects",
    href: "#work",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/gabrielmatosms",
  },
  {
    icon: Instagram,
    url: "https://instagram.com/gabrielmatosms",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/gabrielmms",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "C#",
    logo: Logocsharp,
    url: "https://learn.microsoft.com/pt-br/dotnet/csharp/tour-of-csharp/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Vue",
    logo: LogoVue,
    url: "https://vuejs.org/",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  {
    label: "Docker",
    logo: LogoDocker,
    url: "https://www.docker.com/",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Azure",
    logo: LogoAzure,
    url: "https://azure.microsoft.com/pt-br/",
  },
  {
    label: "Jest",
    logo: LogoJest,
    url: "https://jestjs.io/pt-BR/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: EmbraerLogoBlue,
    darkModeLogo: EmbraerLogoWhite,
    logoAlt: "embraer logo",
    position: "DevOps Coordinator",
    startDate: new Date(2025, 2),
    currentlyWorkHere: true,
    summary: [
      "Coordinated a third-party software quality team, ensuring compliance with international standards and increasing \n" +
        "quality audit approval rates by 30%.",
      "Managed licenses for critical tools such as SonarQube, Nexus, and the Atlassian suite (Jira, Confluence, Bitbucket) , \n" +
        "ensuring legal compliance and cost efficiency.",
      "Optimized CI/CD pipelines, reducing average deployment time by 35% and ensuring faster and more reliable deliveries \n" +
        "across development teams. \n",
      "Lead continuous improvement initiatives in software development processes, implementing practices that boosted \n" +
        "productivity and reduced rework.",
    ],
    link: "https://www.embraer.com/",
  },
  {
    logo: LogoAgrotoolsDark,
    darkModeLogo: LogoAgrotools,
    logoAlt: "Agrotools logo",
    position: "Software Developer",
    startDate: new Date(2023, 0),
    endDate: new Date(2025, 0),
    currentlyWorkHere: false,
    summary: [
      "Developed functionalities in the front-end layer in applications aimed at agribusiness, using technologies such as Vuejs,\n" +
        "Javascript, Jquery, and Axios.",
      "Designed and implemented scalable APIs and background workers for managing first- and third-party proprietary\n" +
        "licenses using .net 6, PostgreSQL, and Azure cloud technologies that serve daily license requests.",
      "I excel in extracting insights and knowledge from datasets. Using Python and pandas library to create data frames and\n" +
        "Postgres to store all analyzed data.",
    ],
    link: "https://www.agrotools.com.br/",
  },
  {
    logo: LogoSonda,
    darkModeLogo: LogoSondaDark,
    logoAlt: "Sonda logo",
    position: "Software Developer",
    startDate: new Date(2019, 8),
    endDate: new Date(2022, 11),
    summary: [
      "Engineered advanced front-end functionalities for aviation applications using Javascript, React, and Angular; improved\n" +
        "user experience and performance, leading to a 40% increase in user engagement and satisfaction.",
      "Designed and implemented scalable APIs and background workers for managing first- and third-party proprietary\n" +
        "licenses using Java, PostgreSQL, Oracle, RabbitMQ, and Heroku cloud technologies that serve millions of license requests\n" +
        "daily.",
      "Infrastructure maintenance in the context of JBOSS typically entails managing and ensuring the stability and reliability of\n" +
        "the JBOSS application server.",
    ],
    link: "https://www.sonda.com/",
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Libras Detection",
    description:
      "A Platform to help children with hearing impairment to become literate using an artificial intelligence capable of recognizing LIBRAS (Brazilian Sign Language) gestures.",
    url: "https://github.com/gabrielmatosms/LibrasDetection",
    previewImage: ProjectLibras,
    technologies: [
      "React",
      "Javascript",
      "React Bootstrap",
      "Tensorflow.js",
      "Express.js",
    ],
  },
  {
    name: "Stop Sort",
    description:
      "A platform designed to help you play the popular Brazilian game STOP, where a random letter is generated for each round.",
    url: "https://stopsort.vercel.app/",
    previewImage: ProjectStop,
    technologies: ["HTML", "CSS", "Javascript", "Vercel"],
  },
  {
    name: "Just a To-Do",
    description:
      "As the name suggests, it’s a simple TO-DO list web app for organizing your daily tasks.",
    url: "https://justtodo.vercel.app/",
    previewImage: ProjectTodo,
    technologies: ["HTML", "Tailwind", "Javascript", "Vercel"],
  },
  {
    name: "Panela Aberta",
    description:
      "A blog created for an extension group from the Nutrition course at UNIFESP (Federal University of São Paulo), aimed at helping people gain a better understanding of food.",
    url: "https://panelaaberta.unifesp.br/",
    previewImage: ProjectPanela,
    technologies: ["Wordpress", "Elementor", "Hostinger"],
  },
  {
    name: "Santana Felicio Advocacy",
    description:
      "A website developed for a law firm in Brazil, designed to provide information about legal services and facilitate client engagement.",
    url: "https://santanafelicio.com.br/",
    previewImage: ProjectAdvocacy,
    technologies: ["Wordpress", "Elementor", "Hostinger"],
  },
];
