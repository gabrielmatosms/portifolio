import { Github, Instagram, Linkedin } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import Logocsharp from '/public/images/logos/icon-csharp.svg';
import LogoJest from '/public/images/logos/icon-jest.svg';
import LogoVue from '/public/images/logos/icon-vue.svg';
import LogoAzure from '/public/images/logos/icon-azure.svg';
import LogoDocker from '/public/images/logos/icon-docker.svg';
import LogoSonda from '/public/images/logos/logo-sonda.png';
import LogoSondaDark from '/public/images/logos/logo-sonda-dark.png';
import LogoAgrotools from '/public/images/logos/logo-agrotools.png';
import LogoAgrotoolsDark from '/public/images/logos/logo-agrotools-dark.png';
import ProjectLibras from '/public/images/libras-page.png';
import ProjectStop from '/public/images/stop-page.png';
import ProjectTodo from '/public/images/todo-page.png';
import ProjectPanela from '/public/images/panelaaberta-page.png';
import ProjectAdvocacy from '/public/images/santanafelicio-page.png';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/gamatosms',
  INSTAGRAM: 'https://instagram.com/shahsagar',
  LINKEDIN: 'https://linkedin.com/in/shahsagar',
  FIGMA_FILE:
    'https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Journey',
    href: '#journey',
  },
  {
    label: 'Projects',
    href: '#work',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/gamatosms',
  },
  {
    icon: Instagram,
    url: 'https://instagram.com/gabrielmatosms',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/gabrielmms',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'C#',
    logo: Logocsharp,
    url: 'https://learn.microsoft.com/pt-br/dotnet/csharp/tour-of-csharp/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Vue',
    logo: LogoVue,
    url: 'https://vuejs.org/',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  {
    label: 'Docker',
    logo: LogoDocker,
    url: 'https://www.docker.com/',
  },
  {
    label: 'PostgreSQL',
    logo: LogoPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'Sass/Scss',
    logo: LogoSass,
    url: 'https://sass-lang.com/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Azure',
    logo: LogoAzure,
    url: 'https://azure.microsoft.com/pt-br/',
  },
  {
    label: 'Jest',
    logo: LogoJest,
    url: 'https://jestjs.io/pt-BR/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  }
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoAgrotoolsDark,
    darkModeLogo: LogoAgrotools,
    logoAlt: 'Agrotools logo',
    position: 'Software Developer',
    startDate: new Date(2023, 0),
    currentlyWorkHere: true,
    summary: [
      'Developed functionalities in the front-end layer in applications aimed at agribusiness, using technologies such as Vuejs,\n' +
      'Javascript, Jquery, and Axios.',
      'Designed and implemented scalable APIs and background workers for managing first- and third-party proprietary\n' +
      'licenses using .net 6, PostgreSQL, and Azure cloud technologies that serve daily license requests.',
      'I excel in extracting insights and knowledge from datasets. Using Python and pandas library to create data frames and\n' +
      'Postgres to store all analyzed data.'
    ],
  },
  {
    logo: LogoSonda,
    darkModeLogo: LogoSondaDark,
    logoAlt: 'Sonda logo',
    position: 'Software Developer',
    startDate: new Date(2021, 0),
    endDate: new Date(2022, 11),
    summary: [
      'Engineered advanced front-end functionalities for aviation applications using Javascript, React, and Angular; improved\n' +
      'user experience and performance, leading to a 40% increase in user engagement and satisfaction.',
      'Designed and implemented scalable APIs and background workers for managing first- and third-party proprietary\n' +
      'licenses using Java, PostgreSQL, Oracle, RabbitMQ, and Heroku cloud technologies that serve millions of license requests\n' +
      'daily.',
      'Infrastructure maintenance in the context of JBOSS typically entails managing and ensuring the stability and reliability of\n' +
      'the JBOSS application server.'
    ],
  },
  {
    logo: LogoSonda,
    darkModeLogo: LogoSondaDark,
    logoAlt: 'Sonda logo',
    position: 'Software Developer - Intern',
    startDate: new Date(2019, 8),
    endDate: new Date(2020, 11),
    summary: [
        'Enhanced software applications using Java and JavaScript, resulting in a 25% increase in performance; ensured robust\n' +
    'security protocols and handled SQL database queries to maintain 99.9% data integrity.',
    'Creating and executing specific database queries and transactions within the SAP (Systems, Applications, and Products)\n' +
    'Material Management module.'
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Libras Detection',
    description:
      'A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.',
    url: 'https://github.com/gamatosms/LibrasDetection',
    previewImage: ProjectLibras,
    technologies: [
      'React',
      'Javascript',
      'React Bootstrap',
      'Tensorflow.js',
      'Express.js'
    ],
  },
  {
    name: 'Stop Sort',
    description:
      'A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.',
    url: 'https://stopsort.vercel.app/',
    previewImage: ProjectStop,
    technologies: [
      'HTML',
      'CSS',
      'Javascript',
      'Vercel'
    ],
  },
  {
    name: 'Just a To-Do',
    description:
      'A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.',
    url: 'https://justtodo.vercel.app/',
    previewImage: ProjectTodo,
    technologies: [
      'HTML',
      'Tailwind',
      'Javascript',
      'Vercel'
    ],
  },
  {
    name: 'Panela Aberta',
    description:
        'A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.',
    url: 'https://panelaaberta.unifesp.br/',
    previewImage: ProjectPanela,
    technologies: [
      'Wordpress',
      'Elementor',
      'Hostinger'
    ],
  },
  {
    name: 'Santana Felicio Advocacy',
    description:
        'A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.',
    url: 'https://santanafelicio.com.br/',
    previewImage: ProjectAdvocacy,
    technologies: [
      'Wordpress',
      'Elementor',
      'Hostinger'
    ],
  },
];