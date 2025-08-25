export interface Education {
  year: string;
  institution: string;
  degree: string;
  cgpa?: string;
  notableCourses?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2019—2024",
    institution: "Bangladesh University of Engineering and Technology",
    degree: "B.Sc. in Computer Science and Engineering (CSE)",
    cgpa: "3.67/4.00",
    notableCourses: "Machine Learning, Microprocessor Microcontroller & Embedded Systems, Compiler, Computer Networking, Software Engineering, Computer Architecture, Operating System, Simulation & Modelling, Computer Security, Computer Graphics, Artificial Intelligence"
  },
];
