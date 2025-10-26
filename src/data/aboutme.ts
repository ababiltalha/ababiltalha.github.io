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
    "Hi, I am Ababil (pronounced A-ba-beel), a CSE graduate from Bangladesh University of Engineering and Technology (BUET). I am working as a Software Engineer I at <a href='https://synesisitltd.com/'>Synesis IT PLC</a>, Dhaka, Bangladesh, assigned to the <a href='https://convay.com/'>Convay</a> team. Currently, I am <b>looking for Ph.D. opportunities</b> in the broad field of autonomous systems and security.<br><br>I completed my B.Sc. in July 2024. My undergraduate thesis was under the supervision of <a href='https://scholar.google.com/citations?user=K-AIPzQAAAAJ&hl=en'>Dr. A. B. M. Alim Al Islam</a>, where we <b>proposed a system architecture and developed a single-intersection traffic signaling system prototype</b> tailored to the unstructured traffic of Dhaka. Post-graduation I have been involved in different projects to delve into different research fields. Currently I am working with <a href='https://scholar.google.com/citations?hl=en&user=yRHRA4QAAAAJ'>Dr. Dipto Das</a> and <a href='https://scholar.google.com/citations?user=YqQRjfgAAAAJ&hl=en'>Dr. Imtiaz Karim</a> on a data privacy related project where we are looking to <b>find privacy concerns amongst the users of sensitive AI chatbots</b> through their anonymous posts on the internet. I am also involved in two more research projects under <a href='https://scholar.google.com/citations?hl=en&user=RDa4TOgAAAAJ'> Dr. Golam Md Muktadir</a>. On one of them, we aim to <b>evaluate how much a model actually \'thinks\' when it is given a problem to solve</b>, by comparing different AI models based on their responses as they try to solve difficult problems which require logical reasoning. On another of the projects, which is co-supervised by Dr. A. B. M. Alim Al Islam, I am working on <b>finding structural categories between real trajectories found in public datasets</b> based on different algorithms, including human perception and annotation over the trajectories.<br><br>Besides, I enjoy watching and playing all kinds of sports, but mostly football (the European kind). I am fond of pop culture in general, and am an avid rewatcher of TV shows and anime. <br>",
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
  altName: "Prospective PhD Student",
  secretDescription: "Cristiano Ronaldo dos Santos Aveiro is the greatest footballer of all time.",
};
