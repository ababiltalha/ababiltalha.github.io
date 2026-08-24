export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  /*{
    date: "March 2024",
    title: "Paper accepted at ICML 2024",
    description: "Our work on causal discovery in time series data has been accepted at ICML 2024.",
    link: "https://icml.cc/",
  }*/
 {
    date: "August 2026",
    title: "Started my PhD at George Mason University!",
    description: "I have started pursuing my PhD in ECE at George Mason University.",
  }
];
