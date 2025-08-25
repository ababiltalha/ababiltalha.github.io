export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
  videoUrl?: string;
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "SyncInc",
    description:
      "A web-based project and task delegation management software designed for organizations. Stack includes PostgreSQL as the database, Django for the backend, ReactJS with Material UI for the frontend, Django REST framework for API development, and Django Channels for real-time notifications.",
    technologies: ["Django", "React", "MUI", "PostgreSQL", "Software Development"],
    imageUrl: "/assets/images/portfolio/syncinc-dark.webp",
    codeUrl: "https://github.com/fardinanam/SyncInc",
  },
  {
    title: "Contradictory, My Dear Watson (Extended)",
    description:
      "A project extended from a Kaggle competition to detect contradictions in multilingual text data, including Bangla text, through rigorous preprocessing and fine-tuning.",
    technologies: ["Python", "Machine Learning", "Natural Language Inference"],
    // imageUrl: 
    codeUrl: "https://github.com/ababiltalha/CSE472_MycroftOrMoriarty",
  },
  {
    title: "Laser Security System With Arduino",
    description:
      "A project to control a laser security system with microcontrollers, where the ATMega32 unit manages the laser and the Arduino unit controls the alarm system and overall coordination.",
    technologies: ["Arduino", "Embedded Systems"],
    imageUrl: "/assets/images/portfolio/laser-security-system.webp",
    videoUrl: "https://www.youtube.com/watch?v=q3XVyX2HZ3A",
    codeUrl: "https://github.com/fardinanam/Laser-Security-System-With-Arduino",
  },
  {
    title: "Ray Tracing and Illumination Using OpenGL",
    description:
      "Implementation of an image generation pipeline using ray tracing and illumination techniques to create realistic images of geometric shapes (sphere, pyramid, cube) and a 2D plane using OpenGL.",
    technologies: ["OpenGL", "C++", "Computer Graphics"],
    imageUrl: "/assets/images/portfolio/ray-tracing.png",
    codeUrl: "https://github.com/ababiltalha/CSE410_graphics",
  },
  {
    title: "Asteroids",
    description:
      "5th position (out of 15 teams in the final round, 68 teams overall) by developing 'Asteroids', a level-based top-down shooter game using p5.js.",
    technologies: ["p5.js", "JavaScript", "Game Development"],
    imageUrl: "/assets/images/portfolio/game_level_1.jpg",
    codeUrl: "https://github.com/RazinReaz/GameJam-2023-Asteroids",
    projectUrl: "https://razinreaz.github.io/GameJam-2023-Asteroids/",
    videoUrl: "https://www.youtube.com/watch?v=dac8ezI2uDI",
  },
  {
    title: "Implementation of a Congestion Control Algorithm for TCP Flows in ns-2",
    description:
      "Implementation of a research paper on congestion control in ns-2 codebase, specifically in TCP to achieve improved throughput in wired and wireless networks.",
    technologies: ["ns-2", "TCP", "Congestion Control"],
    // imageUrl: 
    codeUrl: "https://github.com/ababiltalha/CSE322_network",
  },
  {
    title: "Compiler",
    description:
      "Built a compiler from scratch including steps for creating a symbol table, building a lexical analyzer, semantic analyzer, and generating intermediate code.",
    technologies: ["Bison", "Flex", "Compiler"],
    imageUrl: "/assets/images/portfolio/compiler.webp",
    codeUrl: "https://github.com/ababiltalha/CSE310_compiler",
  },
];
