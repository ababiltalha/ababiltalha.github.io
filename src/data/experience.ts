export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
  location?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Jun 2024 - Present",
    title: "Software Engineer I",
    company: "Synesis IT PLC",
    description:
      "Worked as a part of the Convay team at Synesis IT PLC, developing and maintaining the desktop application for Convay, a video conferencing web application, and migrating features from web version for seamless experience. Most notable contributions include the implementation and improvement of the annotation feature in the application.",
    // advisor: "Peter Wang",
    companyUrl: "https://synesisitltd.com",
    location: "Dhaka, Bangladesh",
  },
  {
    date: "May 2023 - Jun 2023",
    title: "Project Intern",
    company: "ERA InfoTech Limited",
    description:
      "Worked on a project where we analyzed real-life business data using clustering methods enhanced by natural language processing techniques.",
    // manager: "Elise Brown",
    // companyUrl: "https://google.com",
    location: "Dhaka, Bangladesh",
  },
];
