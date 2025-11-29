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
      "This was my undergraduate thesis project under the supervision of Dr. A. B. M. Alim Al Islam, where we proposed a system architecture for an intelligent traffic signaling system suited for the non-lane based, heterogeneous traffic in Dhaka city. The single-intersection traffic signaling system uses object detection and multi-objective optimization on a Raspberry Pi. The devised system architecture was developed into a prototype, which was then tested at a five-road intersection in Dhaka, Bangladesh. We have worked on real-time video processing, object detection in low-resource environments, and multi-objective optimization algorithms. My personal contributions to the project include the dataset preparation to train the model, the evaluation and selection of the object detection model, the overall integration of the cyber-physical system, and the testing and evaluation of the system at the intersection. [Manuscript on arXiv]",
    technologies: ["Intelligent Traffic Signaling", "Real-Time Video Processing", "Object Detection", "Multi-Objective Optimization", "Cyber-Physical Systems"],
    supervisors: ["Dr. A. B. M. Alim Al Islam"],
    supervisorLinks: ["https://scholar.google.com/citations?user=K-AIPzQAAAAJ&hl=en"],
    imageUrl: "/assets/images/research-projects/system-architecture-1.png",
    paperUrl: "https://arxiv.org/abs/2510.16622",
  },
  {
    title: "Investigating Data Privacy in AI Chatbots",
    description:
      "Romantic and emotional AI chatbots are becoming increasingly popular, but they raise significant concerns regarding data privacy and security. In this project, we aim to investigate the data privacy of these chatbots by analyzing posts about these applications on Reddit. We have collected posts related to romantic chatbots and AI partners from related subreddits, which we are thematically analyzing to understand the shared data and concerns regarding privacy.",
    technologies: ["Data Privacy", "Human-AI Interaction", "Qualitative Analysis", "Data Scraping"],
    supervisors: ["Dr. Dipto Das", "Dr. Imtiaz Karim"],
    supervisorLinks: ["https://scholar.google.com/citations?hl=en&user=yRHRA4QAAAAJ", "https://scholar.google.com/citations?user=YqQRjfgAAAAJ&hl=en"],
    imageUrl: "/assets/images/research-projects/methodology-1.png",
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
    title: "Evaluating Reasoning in Large Language Models",
    description:
      "Large language models (LLMs) have shown impressive performance in various tasks, the newer versions with reasoning capabilities are even more impressive. But are these models really capable of reasoning through a complicated problem and finding the solution? In this project, we are challenging reasoning and regular LLMs to solve different complex problems which require logical reasoning and perceptional skills.",
    technologies: ["LLMs", "Reasoning", "CoT"],
    supervisors: ["Dr. Golam Md Muktadir"],
    supervisorLinks: ["https://scholar.google.com/citations?user=RDa4TOgAAAAJ&hl=en"],
    imageUrl: "/assets/images/research-projects/performance.png",
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
  