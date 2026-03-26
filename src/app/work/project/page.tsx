import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { sectionWorkProject } from "@/content/portfolio";

export default function WorkProjectPage() {
  return (
    <SectionHeading
      title={sectionWorkProject.title}
      subtitle={sectionWorkProject.subtitle}
    />
  );
}
