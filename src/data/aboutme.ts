export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Kazi Ababil Azam",
  title: "Software Engineer I",
  institution: "Synesis IT PLC, Dhaka, BD",
  // Note that links work in the description
  description:
    "Hi, I am Ababil (pronounced A-ba-beel), and I am from Dhaka, Bangladesh. I completed my B.Sc. in Computer Science and Engineering back in July 2024 from Bangladesh University of Engineering and Technology (BUET). Since then, I have been working as a Software Engineer I at <a href='https://synesisitltd.com/'>Synesis IT PLC</a>, Dhaka, Bangladesh, assigned to the <a href='https://convay.com/'>Convay</a> team. <s>Currently, I am looking for Ph.D. opportunities in the broad field of systems and security.</s> <b>I am excited to share that I will be joining the lab of Dr. Yicheng Zhang at George Mason University, Virginia as an incoming Ph.D. student starting Fall 2026!</b> <br><br>My research interests lie in the broad field of systems security. Outside of research and work, I enjoy watching and playing all kinds of sports, but mostly football (the European kind). I enjoy pop culture in general and often rewatch TV shows and anime. <br>",
  email: "kaziababilazamtalha@gmail.com",
  imageUrl:
    "/assets/images/photo.png",
  googleScholarUrl: "https://scholar.google.com/citations?user=bKrokCIAAAAJ",
  githubUsername: "ababiltalha",
  linkedinUsername: "kazi-ababil-azam",
  twitterUsername: "ababiltalha",
  // blogUrl: "https://",
  cvUrl: "/assets/pdf/cv.pdf",
  institutionUrl: "https://synesisitltd.com/",
  altName: "",
  secretDescription: "Cristiano Ronaldo dos Santos Aveiro is the greatest footballer of all time.",
};
