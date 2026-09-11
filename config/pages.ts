import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Harivansh Kumar Gupta's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "The languages and tools Harivansh Kumar Gupta is learning and using.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description: "Practical software projects built while learning and exploring.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect.",
    metadata: {
      title: "Contact",
      description: "Connect with Harivansh Kumar Gupta.",
    },
  },
  resume: {
    title: "Resume",
    description: "Harivansh Kumar Gupta's resume.",
    metadata: {
      title: "Resume",
      description: "Harivansh Kumar Gupta's resume.",
    },
  },
};
