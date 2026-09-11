import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@HarivanshGupta",
    icon: Icons.gitHub,
    link: "https://github.com/HarivanshGupta",
  },
  {
    name: "LinkedIn",
    username: "Harivansh Kumar Gupta",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/harivanshgupta/",
  },
];
