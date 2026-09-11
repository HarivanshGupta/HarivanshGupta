import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import Link from "next/link";
import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description="I'm always interested in building useful projects, learning new technologies, and connecting with other developers."
    >
      <div className="flex flex-wrap gap-3">
        <Link href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants())}><Icons.gitHub className="mr-2 h-4 w-4" />GitHub</Link>
        <Link href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline" }))}><Icons.linkedin className="mr-2 h-4 w-4" />LinkedIn</Link>
      </div>
    </PageContainer>
  );
}
