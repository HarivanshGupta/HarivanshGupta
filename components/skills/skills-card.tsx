import Rating from "@/components/skills/rating";
import { skillsInterface } from "@/config/skills";
import { cn } from "@/lib/utils";

interface SkillsCardProps {
  skills: skillsInterface[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill, id) => (
        <div
          key={id}
          className="group relative overflow-hidden rounded-lg border bg-background p-2 transition duration-300 hover:-translate-y-1 hover:scale-[1.015] hover:border-foreground/30 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:transform-none"
        >
          <div className="flex h-[230px] flex-col justify-between rounded-md p-6 sm:h-[230px]">
            <skill.icon size={50} className={cn("text-foreground transition-transform duration-300 group-hover:-translate-y-0.5 motion-reduce:transition-none")} />
            <div className="space-y-2">
              <h3 className="font-bold">{skill.name}</h3>
              <p className="text-sm text-muted-foreground">
                {skill.description}
              </p>
              <Rating stars={skill.rating} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
