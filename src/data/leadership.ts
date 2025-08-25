export interface Leadership {
  date: string;
  title: string;
  description: string;
  imageUrl?: string;
  linkUrl?: string;
}

export const leadershipData: Leadership[] = [
  {
    date: "Jun 2023 - Jul 2023",
    title: "Organizer, BUET CSE Fest 2023",
    description: 
      "A proud part of the organizing team of BUET CSE Fest 2023, the 2023 edition of the annual departmental festival consisting inter-university competitions such as hackathon, programming contest, deep learning competition, CTF competition and extra-curricular events such as cultural program, dance mob, treasure hunt, indoor and outdoor games.",
    imageUrl: "/assets/images/leadership/fest.jpg",
    linkUrl: "https://buet-cse-fest-2023-main-mauve.vercel.app",
  },
  {
    date: "Jun 2023 - Apr 2024",
    title: "Director of Events, BUET Cyber Security Club",
    description: 
      "Served as the Director (Events) of BUET Cyber Security Club, a student-run organization under the Department of CSE, BUET. I was responsible for promotion and organization of cybersecurity related events, seminars and both intra and inter-university Capture The Flag (CTF) competitions multiple times through-out the tenure.",
    imageUrl: "/assets/images/leadership/buetsec.jpg",
    linkUrl: "https://www.linkedin.com/company/buetsec",
  },
  // Add more leadership entries as needed
];
  