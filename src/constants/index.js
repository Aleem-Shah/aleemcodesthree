import {
  mobile,
  backend,
  creator,
  web,
  javascript,

  html,
  css,
  reactjs,
 
  tailwind,
  nodejs,
  mongodb,
  git,

  threejs,
  rust,
  python,
  cpp,
  nextjs,
  TinDog,
  shoppay,
  PanunBlog,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },

];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "rust",
    icon: rust,
  },

  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Next",
    icon: nextjs,
  },

  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "NextJS",
    learning_method: "Self-Taught",
    icon: nextjs,
    iconBg: "#fff",
    date: "Jan 2021",
    points: [
      "My most preferred framework ",
      "Making highly complex and advance applications.",
      "Makes development in React more easy and fast",
      "Supports Dynamic Routing",
    ],
  },
  {
    title: "React.js Developer",
    learning_method: "Self-Taught",
    icon: reactjs,
    iconBg: "#383E56",
    date: "March 2020 ",
    points: [
      "Best web framework in the market",
      "Makes it easy to develop highly complex web-apps.",
      "JSX makes it easy and super fast to run highly complex tasks.",
      "Fast and easy to use.",
    ],
  },
  {
    title: "Javascript",
    learning_method: "Self-Taught",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "Jan 2020",
    points: [
      "Light-weight and easy to learn",
      "Used for mainly web-dev ",
      "Tons of libraries and frameworks to play with.",
      "If you are going to learn JS I will suggest you to go with TS ",
    ],
  },
  {
    title: "Python",
    learning_method: "Self-Taught",
    icon: python,
    iconBg: "#383E56",
    date: "Jan 2019",
    points: [
      "A language I will prefer if you want to start programming",
      "Used mainly for AI development and web dev.",
      "Easy to learn and highly powerful",
      "Has awesome frameworks like pandas,django,numpy,matplotlib that make development easy and  fast",
    ],
  },
  {
    title: "C++",
    learning_method: "Self-Taught",
    icon: cpp,
    iconBg: "#fff",
    date: "Jan 2022",
    points: [
      "One of the fastest programming language",
      "Used to create Apps,Web-Apps,Desktop-Apps",
      "Mainly used for competitive programmers .",
      "Rich library support.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Shoppay",
    description:
      "With features like user authentication, checkout/payment gateway, user dashboards, and admin dashboards, Shoppay is a pretty advanced e-commerce web application.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: shoppay,
    source_code_link: "https://github.com/",
  },
  {
    name: "The Panun Blog",
    description:
      "Panun Blog is a Kashmir-based web app for users to share and read blogs on diverse opinions. Access to post blogs is limited to some users currently, but it will be available to all users soon",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "green-text-gradient",
      },
      {
        name: "Sanity CMS",
        color: "pink-text-gradient",
      },
    ],
    image: PanunBlog,
    source_code_link: "https://github.com/",
  },
  {
    name: "TinDog",
    description:
      " Tindog is a vanila online project that showcases my ui design expertise. The app is still in progress but will be made publicly available shortly. You can learn more about the project on my github.       ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: TinDog,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
