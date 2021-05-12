import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'About', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "that's all anout me", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Thanh-Sang Nguyen',
  subtitle: "I'm a Developer and Researcher",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'avt.jpg',
  paragraphOne: "I'm currently a Data Enginnering at Faculty of Information and Technology in Ho CHi Minh University of Technology and Education",
  paragraphTwo:  "I'm passionate about programing, AI things like: Computer Vision and NLP, At this time, I doing research in HCMUTE's laboratory which call Intelligent System Laboratory(ISLAB) ",
  paragraphThree: 'In my spare time, I enjoy acoustic music with a cup of coffe',
  resume: '/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'scar.png',
    title: 'Vision-based Self-Driving Car',
    info: 'In this project we proposed a lightweight deep learning method which base on CNN architecture and Control algorithm.',
    info2: 'Then deploy this method to make  a golf-car run itself',
    url: '',
    repo: '', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'https://tsdocode.github.io',
  email: 'hcmute.ts@hotmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    
    
   
    {
      id: nanoid(),
      name: 'github',
      url: 'githhub.com/tsdocode',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
