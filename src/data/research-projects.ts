export interface ResearchProjects {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
  paperUrl?: string;
  supervisors?: string[];
  supervisorLinks?: string[];
}

export const researchProjectsData: ResearchProjects[] = [

  {
    title: "Towards Intelligent Traffic Signaling in Dhaka City Based on Vehicle Detection and Congestion Optimization",
    description:
      "This was my undergraduate thesis project, where we proposed a system architecture for an intelligent traffic signaling system suited for the non-lane based, heterogeneous traffic in Dhaka city. The single-intersection traffic signaling system uses object detection and multi-objective optimization on a Raspberry Pi. The devised system architecture was developed into a prototype, which was then tested at a five-road intersection in Dhaka, Bangladesh.",
    technologies: ["Intelligent Traffic Signaling", "Real-Time Video Processing", "Object Detection", "Multi-Objective Optimization", "Cyber-Physical Systems"],
    supervisors: ["Dr. A. B. M. Alim Al Islam"],
    supervisorLinks: ["https://scholar.google.com/citations?user=K-AIPzQAAAAJ&hl=en"],
    imageUrl: "/assets/images/research-projects/system-architecture-1.png",
    paperUrl: "https://arxiv.org/abs/2510.16622",
  },
  {
    title: "Tracing Users' Privacy Concerns Across the Lifecycle of a Romantic AI Companion",
    description:
      "As people turn to Romantic AI platforms for intimacy, comfort, and emotionally significant interaction, they often disclose highly sensitive information. Yet the privacy implications of such disclosure remain poorly understood in platforms shaped by persistence, intimacy, and opaque data practices. We examine public Reddit discussions about privacy in romantic AI chatbot ecosystems through a lifecycle lens. Analyzing posts from relevant subreddits collected over one year, we identify four recurring patterns and show that privacy in romantic AI is best understood as an evolving socio-technical governance problem spanning access, disclosure, interpretation, retention, and exit.",
    technologies: ["Privacy Frameworks", "Human-AI Interaction", "Qualitative Analysis", "Data Scraping"],
    supervisors: ["Dr. Dipto Das", "Dr. Imtiaz Karim"],
    supervisorLinks: ["https://scholar.google.com/citations?hl=en&user=yRHRA4QAAAAJ", "https://scholar.google.com/citations?user=YqQRjfgAAAAJ&hl=en"],
    imageUrl: "/assets/images/research-projects/methodology-1.jpg",
    paperUrl: "https://arxiv.org/abs/2603.21106",
  },
  {
    title: "Pedestrian Trajectory Categorization and Analysis in AV Simulation",
    description:
      "In simulation-based testing of autonomous vehicles, it is essential that simulation models generate diverse pedestrian trajectories and cover a wide range of real-life possible situations. As a result, there is a need for metrics to assess whether the synthetic trajectories produced by simulation models truly represent all kinds of real-world trajectories. To address this gap in literature, we propose formulating such metrics by analyzing real-world pedestrian trajectory datasets. Currently, we are categorizing the trajectories through finding structures based on different algorithms, including human annotation over the trajectories. We are conducting an online survey, asking participants to annotate the trajectories, compare annotations, and reconstruct the trajectories based on the annotations.",
    technologies: ["AV", "Data Analysis", "Visualization", "Online Survey"],
    supervisors: ["Dr. Golam Md. Muktadir", "Dr. A. B. M. Alim Al Islam", "Dr. Fahim Hasan Khan"],
    supervisorLinks: ["https://scholar.google.com/citations?user=RDa4TOgAAAAJ&hl=en", "https://scholar.google.com/citations?user=K-AIPzQAAAAJ&hl=en", "https://scholar.google.com/citations?hl=en&user=zkUX0q0AAAAJ"],
    imageUrl: "/assets/images/research-projects/annotation.png",
  },
  {
    title: "NHT1071: A Traffic Image Dataset for Non lane-based and Heterogeneous Traffic for Adaptive Traffic Signal Scheduling",
    description:
      "The Non-lane based Heterogeneous Traffic dataset NHT1071 was prepared with 1071 traffic images from different locations in Dhaka city, taken in various times of the day. The dataset was prepared to train the object detection model for vision-based traffic signaling systems. We labeled the dataset with the help of human annotators and trained object detection models with the help of the labeled dataset, the best of which was used in the traffic signaling system project above.",
    technologies: ["Traffic Image Dataset", "Object Detection", "Intelligent Traffic Signaling"],
    supervisors: ["Masfiqur Rahaman", "Dr. A. B. M. Alim Al Islam"],
    supervisorLinks: ["https://scholar.google.com/citations?user=kO1x10QAAAAJ&hl=en", "https://scholar.google.com/citations?user=K-AIPzQAAAAJ&hl=en"],
    imageUrl: "/assets/images/research-projects/nht.png",
  }
  
];
  