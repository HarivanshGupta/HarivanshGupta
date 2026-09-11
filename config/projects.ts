import { ValidCategory, ValidExpType } from "./constants";

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  githubLink: string;
  techStack: string[];
  companyLogoImg: string;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: { title: string; description?: string; imgArr: string[] }[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "task-management-system",
    type: "Personal",
    companyName: "Task Management System",
    category: ["Web Dev", "Frontend"],
    shortDescription: "A Task Management System that allows users to create, organize, track, and manage daily tasks efficiently with an intuitive interface.",
    githubLink: "https://github.com/HarivanshGupta/task-management.git",
    techStack: ["HTML5", "CSS", "JavaScript"],
    companyLogoImg: "/project-image/task-img.jpeg",
    descriptionDetails: {
      paragraphs: ["A practical task management project focused on creating, organizing, tracking, and managing daily tasks through an intuitive interface."],
      bullets: ["HTML5", "CSS", "JavaScript"],
    },
    pagesInfoArr: [],
  },
  {
    id: "smart-cgpa-academic-analyzer",
    type: "Personal",
    companyName: "Smart CGPA & Academic Analyzer",
    category: ["Web Dev"],
    shortDescription: "A console-based C++ application designed to manage and analyze a student's academic performance beyond CGPA calculation.",
    githubLink: "https://github.com/HarivanshGupta/codealpha_tasks1_CGPA_Calculator.git",
    techStack: ["C++"],
    companyLogoImg: "/project-image/cgpa-img.jpeg",
    descriptionDetails: {
      paragraphs: ["A console-based C++ application for academic record management, CGPA calculation, and useful performance analysis."],
      bullets: ["Academic record management", "CGPA calculation", "Performance analysis"],
    },
    pagesInfoArr: [],
  },
  {
    id: "banking-system",
    type: "Personal",
    companyName: "Banking System",
    category: ["Backend"],
    shortDescription: "A multi-file, console-based, object-oriented banking simulation written in modern C++17.",
    githubLink: "https://github.com/HarivanshGupta/codealpha_tasks2_Baking_System.git",
    techStack: ["C++17", "Object-Oriented Programming"],
    companyLogoImg: "/project-image/baking-img.jpeg",
    descriptionDetails: {
      paragraphs: ["A console-based banking simulation that manages customers, accounts, and transactions with PIN authentication, an admin dashboard, local file persistence, and input validation."],
      bullets: ["Customer and account management", "Transactions and PIN authentication", "Admin dashboard and file persistence", "Input validation"],
    },
    pagesInfoArr: [],
  },
];

export const featuredProjects = Projects;
