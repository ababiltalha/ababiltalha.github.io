export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
  location?: string;
  logoUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Aug 2026 - Present",
    title: "Graduate Research Assistant",
    company: "George Mason University",
    logoUrl: "/assets/logos/gmu.jpeg",
    description:
      "Working on hardware (GPU) security at the MASS Lab (Mason Augmented/Virtual Reality and System Security Lab), led by Dr. Yicheng Zhang.",
    companyUrl: "https://www.gmu.edu/",
    location: "Fairfax, Virginia, USA",
  },
  {
    date: "Jun 2024 - Aug 2026",
    title: "Software Engineer I",
    company: "Synesis IT PLC",
    logoUrl: "/assets/logos/synesis.png",
    description:
      "Working as a part of the Convay team at Synesis IT PLC, developing and maintaining the desktop application for Convay, a video conferencing web application with collaborative workspace features. My personal contributions include the development and maintenance of the Convay desktop app, including features such as in-meeting annotation, remote desktop control, and offline functionalities.",
    companyUrl: "https://synesisitltd.com",
    location: "Dhaka, Bangladesh",
  },
  {
    date: "May 2023 - Jun 2023",
    title: "Project Intern",
    company: "ERA InfoTech Limited",
    logoUrl: "/assets/logos/eil.jpg",
    description:
      "Worked on a project where we analyzed real-life business data using clustering methods enhanced by natural language processing techniques.",
    // manager: "Elise Brown",
    // companyUrl: "https://google.com",
    location: "Dhaka, Bangladesh",
  },
];
