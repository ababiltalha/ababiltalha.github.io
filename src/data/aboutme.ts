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
    "Hi, I am Ababil (pronounced A-ba-beel), a CSE graduate from Dhaka, Bangladesh. I graduated in July 2024, earning my B.Sc. degree from Bangladesh University of Engineering and Technology (BUET). Since then, I have been working as a Software Engineer I at <a href='https://synesisitltd.com/'>Synesis IT PLC</a>, Dhaka, Bangladesh, assigned to the <a href='https://convay.com/'>Convay</a> team. Currently, I am <b>looking for Ph.D. opportunities</b> in the broad field of autonomous systems and security. <br><br>Outside of academic and professional life, I enjoy watching and playing all kinds of sports, but mostly football (the European kind). I am fond of pop culture in general, and am an avid rewatcher of TV shows and anime. <br>",
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
  altName: "Software Engineer, Research Enthusiast, Ph.D. Applicant",
  secretDescription: "Cristiano Ronaldo dos Santos Aveiro is the greatest footballer of all time.",
};
