// Portfolio Website Configuration
// Easily enable/disable pages and add new ones here

const SITE_CONFIG = {
    // Site Information
    siteName: "Kazi Ababil Azam | Personal Website",
    author: "Kazi Ababil Azam",
    
    // Page Configuration
    // Set enabled: false to hide a page from navigation
    // Add new pages by adding entries here
    pages: {
        home: {
            enabled: true,
            title: "About",
            url: "/",
            navText: "About",
            order: 1
        },
        research: {
            enabled: true,
            title: "Research Experience",
            url: "/research",
            navText: "Research",
            order: 2
        },
        work: {
            enabled: true,
            title: "Professional Experience", 
            url: "/work",
            navText: "Work",
            order: 3
        },
        education: {
            enabled: true,
            title: "Academic History",
            url: "/education", 
            navText: "Education",
            order: 4
        },
        projects: {
            enabled: true,
            title: "Projects",
            url: "/projects",
            navText: "Projects",
            order: 5
        },
        leadership: {
            enabled: true,
            title: "Leadership",
            url: "/leadership",
            navText: "Leadership",
            order: 6
        },
        miscellaneous: {
            enabled: false,
            title: "Miscellaneous", 
            url: "/miscellaneous",
            navText: "Miscellaneous",
            order: 7
        }
    }
};

// Helper function to get enabled pages sorted by order
function getEnabledPages() {
    return Object.entries(SITE_CONFIG.pages)
        .filter(([key, page]) => page.enabled)
        .sort(([, a], [, b]) => a.order - b.order)
        .map(([key, page]) => ({ key, ...page }));
}

// Export for use in other files
window.SITE_CONFIG = SITE_CONFIG;
window.getEnabledPages = getEnabledPages;

const SITE_DATA = {
  home: {
    title: "About Me",
    content: {
      bio: 
        "<p>Hi, I am Ababil (pronounced A-ba-beel), a CSE graduate from Bangladesh University of Engineering and Technology (BUET). I am working as a Software Engineer I at <a href='https://synesisitltd.com/'>Synesis IT PLC</a>, Dhaka, Bangladesh, assigned to the <a href='https://convay.com/'>Convay</a> team. Currently, I am <b>looking for Ph.D. opportunities</b> in the broad field of autonomous systems and security.</p><p>I completed my B.Sc. in July 2024. My undergraduate thesis was under the supervision of <a href='https://scholar.google.com/citations?user=K-AIPzQAAAAJ&hl=en'>Dr. A. B. M. Alim Al Islam</a>, where we <b>proposed a system architecture and developed a single-intersection traffic signaling system prototype</b> tailored to the unstructured traffic of Dhaka. Post-graduation I have been involved in different projects to delve into different research fields. Currently I am working with <a href='https://scholar.google.com/citations?hl=en&user=yRHRA4QAAAAJ'>Dr. Dipto Das</a> and <a href='https://scholar.google.com/citations?user=YqQRjfgAAAAJ&hl=en'>Dr. Imtiaz Karim</a> on a data privacy related project where we are looking to <b>find privacy concerns amongst the users of sensitive AI chatbots</b> through their anonymous posts on the internet. I am also involved in two more research projects under <a href='https://scholar.google.com/citations?hl=en&user=RDa4TOgAAAAJ'> Dr. Golam Md Muktadir</a>. On one of them, we aim to <b>evaluate how much a model actually \'thinks\' when it is given a problem to solve</b>, by comparing different AI models based on their responses as they try to solve difficult problems which require logical reasoning. On another of the projects, which is co-supervised by Dr. A. B. M. Alim Al Islam, I am working on <b>finding structural categories between real trajectories found in public datasets</b> based on different algorithms, including human perception and annotation over the trajectories. Details about these projects are discussed on this <a href='#/research'>tab</a>.</p><p>Besides my research and professional life, I enjoy watching and playing all kinds of sports, but mostly football (the European kind). I am fond of pop culture in general, and am an avid rewatcher of TV shows and anime. </p>",
      mail: "kaziababilazamtalha@gmail.com",
      github: "https://github.com/ababiltalha",
      linkedin: "https://www.linkedin.com/in/Kazi%20Ababil%20Azam",
      orcid: "https://orcid.org/0000-0002-8434-6732",
      kaggle: "https://www.kaggle.com/kaziababilazam",
      youtube: "https://youtube.com/@kaziababilazamtalha",
      twitter: "https://twitter.com/ababiltalha",
      cv: "assets/pdf/cv.pdf"
    }
  },
  research: {
    title: "Research Experience",
    content: {}
  },
  work: {
    title: "Professional Experience",
    content: {}
  },
  education: {
    title: "Academic History",
    content: {}
  },
  projects: {
    title: "Projects",
    content: {}
  },
  leadership: {
    title: "Leadership",
    content: {}
  },
  miscellaneous: {
    title: "Miscellaneous",
    content: {}
  }
};

// Export SITE_DATA after it's defined
window.SITE_DATA = SITE_DATA;
