import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

const skillData = [
  ["HTML5", "Semantic structure for the web.", Icons.html5],
  ["CSS", "Styling responsive digital experiences.", Icons.css3],
  ["JavaScript", "Building interactive web experiences.", Icons.javascript],
  ["Python", "A language for practical problem solving.", Icons.javascript],
  ["C", "Learning the foundations of programming.", Icons.gitBranch],
  ["C++", "Object-oriented programming and console projects.", Icons.gitBranch],
  ["SQL", "Working with structured data.", Icons.gitRepoIcon],
  ["Git", "Tracking changes and collaborating on code.", Icons.gitBranch],
  ["GitHub", "Sharing and managing software projects.", Icons.gitHub],
] as const;

export const skills: skillsInterface[] = skillData.map(([name, description, icon]) => ({
  name,
  description,
  rating: 4,
  icon,
}));

export const featuredSkills = skills.slice(0, 6);
