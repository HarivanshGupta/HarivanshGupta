import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: ProjectInterface;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <div data-cursor-card className="group relative flex h-full w-full flex-col rounded-lg border border-border bg-background p-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-foreground/40 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:transform-none">
      <div className="relative h-[200px] w-full flex-shrink-0 overflow-hidden rounded-lg border border-border">
        <Image
          className="object-cover transition duration-300 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          src={project.companyLogoImg}
          alt={`${project.companyName} project visual`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="pt-5 space-y-3 flex flex-col flex-grow">
        <h5 className={cn("font-bold tracking-tight text-foreground", featured ? "text-3xl" : "text-2xl")}>
          {project.companyName}
        </h5>
        <p className="line-clamp-3 font-normal text-muted-foreground flex-grow">
          {project.shortDescription}
        </p>
        <div className="flex gap-2 flex-wrap">
          <ChipContainer textArr={project.category} />
        </div>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          <Link href={project.githubLink} target="_blank" rel="noopener noreferrer"><Button variant="default"><Icons.gitHub className="mr-2 h-4 w-4" />GitHub</Button></Link>
          <Link href={`/projects/${project.id}`}><Button variant="outline">Details<Icons.chevronRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" /></Button></Link>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 p-3 rounded-full bg-background border border-border hidden md:block">
        {project.type === "Personal" ? (
          <Icons.userFill className="h-4 w-4" />
        ) : (
          <Icons.work className="h-4 w-4" />
        )}
      </div>
    </div>
  );
}
