export interface Education {
  year: string;
  institution: string;
  degree: string[];
  cgpa?: string[];
  logoUrl?: string;
  gpa?: string[];
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2024",
    institution: "Bangladesh University of Engineering and Technology (BUET)",
    logoUrl: "/assets/logos/buet.png",
    degree: ["B.Sc. in Computer Science and Engineering (CSE)"],
    cgpa: ["3.67/4.00"],
  },
  {
    year: "2011 - 2018",
    institution: "Military Collegiate School Khulna (MCSK)",
    logoUrl: "/assets/logos/mcsk.jpeg",
    degree: ["Higher Secondary Certificate (HSC)", "Secondary School Certificate (SSC)"],
    gpa: ["5.00/5.00", "5.00/5.00"],
  },
];
