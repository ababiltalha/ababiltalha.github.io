export interface ResearchProjects {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
  supervisors?: string[];
  supervisorLinks?: string[];
}

export const researchProjectsData: ResearchProjects[] = [

  {
    title: "Investigating Data Privacy in AI Chatbots",
    description:
      "Sensitive AI chatbots are becoming increasingly popular, but they raise significant concerns based on usage patterns. In this project, we aim to investigate the data privacy of these chatbots by analyzing posts about using these chatbots on the internet. We are collecting anonymous posts related to romantic chatbots and AI partners from Reddit, which we are analyzing to understand the shared data and concerns regarding the privacy of these chatbots.",
    technologies: ["Data Privacy", "NLP", "Human-AI Interaction"],
    supervisors: ["Dr. Dipto Das", "Dr. Imtiaz Karim"],
    supervisorLinks: ["https://scholar.google.com/citations?hl=en&user=yRHRA4QAAAAJ", "https://scholar.google.com/citations?user=YqQRjfgAAAAJ&hl=en"],
    // projectUrl: "https://project-demo.com",
    // imageUrl: "/assets/images/research-projects/data-privacy.png",
    // codeUrl: "https://github.com/username/project",
  },
  {
    title: "Evaluating Reasoning in Large Language Models",
    description:
      "Large language models (LLMs) have shown impressive performance in various tasks, the newer versions with reasoning capabilities are even more impressive. But are these models really capable of reasoning through a complicated problem and finding the solution? In this project, we are challenging reasoning and regular LLMs to solve different complex problems which require logical reasoning and perceptional skills.",
    technologies: ["LLMs", "Reasoning", "CoT"],
    supervisors: ["Dr. Golam Md Muktadir"],
    supervisorLinks: ["https://scholar.google.com/citations?user=RDa4TOgAAAAJ&hl=en"],
    // imageUrl: "/assets/images/research-projects/reasoning.png",
  },
  {
    title: "Pedestrian Trajectory Categorization and Analysis in AV Simulation",
    description:
      "In simulation-based testing of autonomous vehicles, it is essential that simulation models generate diverse pedestrian trajectories and cover a wide range of real-life possible situations. As a result, there is a need for metrics to assess whether the synthetic trajectories produced by simulation models truly represent all kinds of real-world trajectories. To address this gap in literature, we propose formulating such metrics by analyzing real-world pedestrian trajectory datasets. Currently, we are categorizing the trajectories through finding structures based on different algorithms, including human annotation over the trajectories.",
    technologies: ["AV", "Data Analysis", "Visualization"],
    supervisors: ["Dr. Golam Md. Muktadir", "Dr. A. B. M. Alim Al Islam", "Dr. Mahmuda Naznin"],
    supervisorLinks: ["https://scholar.google.com/citations?user=RDa4TOgAAAAJ&hl=en", "https://scholar.google.com/citations?user=K-AIPzQAAAAJ&hl=en", "https://scholar.google.com/citations?user=dJx58AQAAAAJ&hl=en"],
    // imageUrl: "/assets/images/research-projects/pedestrian-trajectory.png",
  },
  {
    title: "Towards Intelligent Traffic Signaling in Dhaka City Based on Vehicle Detection and Congestion Optimization",
    description:
      "This was my undergraduate thesis project under the supervision of Dr. A. B. M. Alim Al Islam, where we proposed a system architecture for an intelligent traffic signaling system suited for the non-lane based, heterogeneous traffic scenario in Dhaka city. The single-intersection traffic signaling system uses SoTA object detection models and multi-objective optimization on a Raspberry Pi. The devised system architecture was developed into a prototype, which was then tested at a five-road intersection in Dhaka, Bangladesh. We have worked on real-time video processing, object detection in low-resource environments, and multi-objective optimization algorithms. My personal contributions to the project include the dataset preparation to train the model, the evaluation and selection of the object detection model, the overall integration of the cyber-physical system, and the testing and evaluation of the system at the intersection. [Manuscript in submission]",
    technologies: ["Intelligent Traffic Signaling", "Real-Time Video Processing", "Object Detection", "Multi-Objective Optimization", "Cyber-Physical Systems"],
    supervisors: ["Dr. A. B. M. Alim Al Islam"],
    supervisorLinks: ["https://scholar.google.com/citations?user=K-AIPzQAAAAJ&hl=en"],
    // imageUrl: "/assets/images/research-projects/traffic-signaling.png",
  },
  {
    title: "NHT1071: A Traffic Image Dataset for Non lane-based and Heterogeneous Traffic for Adaptive Traffic Signal Scheduling",
    description:
      "The Non-lane based Heterogeneous Traffic dataset NHT1071 was prepared with 1071 traffic images from different locations in Dhaka city, taken in various times of the day. The dataset was prepared to train the object detection model for vision-based traffic signaling systems. We labeled the dataset with the help of human annotators and trained object detection models with the help of the labeled dataset, the best of which was used in the traffic signaling system project above. [Manuscript in submission]",
    technologies: ["Traffic Image Dataset", "Object Detection", "Intelligent Traffic Signaling"],
    supervisors: ["Masfiqur Rahaman", "Dr. A. B. M. Alim Al Islam"],
    supervisorLinks: ["https://scholar.google.com/citations?user=kO1x10QAAAAJ&hl=en", "https://scholar.google.com/citations?user=K-AIPzQAAAAJ&hl=en"],
    // imageUrl: "/assets/images/research-projects/traffic-image-dataset.png",
  }
  
];
  