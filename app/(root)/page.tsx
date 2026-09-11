import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { InteractiveHero } from "@/components/common/interactive-hero";
import { Icons } from "@/components/common/icons";
import ProjectCard from "@/components/projects/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpg";

export const metadata: Metadata = {
  title: "Harivansh Kumar Gupta - Software Engineer & Full Stack Developer",
  description: siteConfig.description,
};

const certificates = [
  ["Localhost To Cloud Workshop", "/certificates/cloud-workshop.jpg"],
  ["Certificate of Appreciation - Computer Programming", "/certificates/c-programming.jpg"],
  ["Course Completion Certificate - Introduction to AI", "/certificates/introduction-ai.jpg"],
  ["Certificate of Achievement - Introduction to Python", "/certificates/python-certificate.jpg"],
] as const;

export default function IndexPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: "/profile-img.jpg",
    jobTitle: "Software Engineer & Full Stack Developer",
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  };

  return (
    <ClientPageWrapper>
      <Script id="schema-person" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <section className="hero-section relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden py-16 md:py-24">
        <InteractiveHero />
        <div className="container relative z-10 flex max-w-[64rem] flex-col items-center gap-5 text-center">
          <Image src={profileImg} height={160} width={160} sizes="160px" className="hero-profile mb-2 h-32 w-32 rounded-full border-8 border-primary object-cover md:h-40 md:w-40" alt="Harivansh Kumar Gupta" priority />
          <AnimatedText as="h1" delay={0.2} className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">Harivansh Kumar Gupta</AnimatedText>
          <AnimatedText as="h2" delay={0.4} className="font-heading text-base sm:text-xl md:text-2xl">Software Engineer &amp; Full Stack Developer</AnimatedText>
          <AnimatedText as="p" delay={0.5} className="text-sm text-muted-foreground sm:text-base">Exploring Applied AI</AnimatedText>
          <AnimatedText as="p" delay={0.6} className="mt-2 max-w-[42rem] leading-normal text-muted-foreground">I&apos;m a software engineer and full-stack developer passionate about building valuable, practical projects and creating useful digital experiences.</AnimatedText>
          <div className="hero-cta mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link href="#projects" className={cn(buttonVariants({ size: "lg" }))}>View Projects</Link>
            <Link href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}><Icons.gitHub className="mr-2 h-4 w-4" />GitHub</Link>
            <Link href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}><Icons.linkedin className="mr-2 h-4 w-4" />LinkedIn</Link>
            <Link href="/resume/Harivansh-Kumar-Gupta-Resume.pdf" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}><Icons.post className="mr-2 h-4 w-4" />View Resume</Link>
          </div>
        </div>
      </section>

      <AnimatedSection direction="up" className="container space-y-5 py-14" id="about">
        <h2 className="font-heading text-3xl md:text-5xl">About</h2>
        <p className="max-w-3xl leading-7 text-muted-foreground">I am pursuing a B.Tech in Computer Science &amp; Engineering at Lovely Professional University (LPU), currently in my 2nd Year. My focus is on learning software development, full-stack web development, and practical project building while exploring applied AI.</p>
      </AnimatedSection>

      <AnimatedSection direction="up" className="container space-y-6 bg-muted py-14" id="skills">
        <div><h2 className="font-heading text-3xl md:text-5xl">Skills</h2><p className="mt-3 text-muted-foreground">Languages and tools I am learning and using.</p></div>
        <SkillsCard skills={featuredSkills} />
        <div className="flex justify-center"><Link href="/skills"><Button variant="outline">View All Skills<Icons.chevronRight className="ml-2 h-4 w-4" /></Button></Link></div>
      </AnimatedSection>

      <AnimatedSection direction="up" className="container space-y-6 py-14" id="projects">
        <div><h2 className="font-heading text-3xl md:text-5xl">Projects</h2><p className="mt-3 text-muted-foreground">Practical software projects built while learning and exploring.</p></div>
        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3">{featuredProjects.map((project, index) => <AnimatedSection key={project.id} delay={index * 0.1} direction="up" className={cn("h-full", index === 0 && "md:col-span-2 lg:col-span-1")}><ProjectCard project={project} featured={index === 0} /></AnimatedSection>)}</div>
      </AnimatedSection>

      <AnimatedSection direction="up" className="container space-y-6 bg-muted py-14" id="certificates">
        <div><h2 className="font-heading text-3xl md:text-5xl">Certificates</h2><p className="mt-3 text-muted-foreground">A few milestones from my learning journey.</p></div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{certificates.map(([title, image]) => <article key={image} className="overflow-hidden rounded-lg border bg-background transition duration-300 hover:-translate-y-1 hover:shadow-md"><Image src={image} alt={title} width={600} height={425} className="aspect-[4/3] w-full object-cover" /><div className="space-y-3 p-4"><h3 className="font-semibold">{title}</h3><Link href={image} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full")}>View Certificate</Link></div></article>)}</div>
      </AnimatedSection>

      <AnimatedSection direction="up" className="container space-y-5 py-14" id="education">
        <h2 className="font-heading text-3xl md:text-5xl">Education</h2><div className="rounded-lg border bg-background p-6"><h3 className="text-xl font-semibold">B.Tech in Computer Science &amp; Engineering</h3><p className="mt-2 text-muted-foreground">Lovely Professional University (LPU)</p><p className="mt-1 text-muted-foreground">Currently in 2nd Year</p></div>
      </AnimatedSection>

      <AnimatedSection direction="up" className="container space-y-5 py-14" id="connect">
        <h2 className="font-heading text-3xl md:text-5xl">Let&apos;s Connect</h2><p className="max-w-2xl text-muted-foreground">I&apos;m always interested in building useful projects, learning new technologies, and connecting with other developers.</p><div className="flex flex-wrap gap-3"><Link href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants())}><Icons.gitHub className="mr-2 h-4 w-4" />GitHub</Link><Link href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline" }))}><Icons.linkedin className="mr-2 h-4 w-4" />LinkedIn</Link></div>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
