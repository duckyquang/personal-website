import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { sectionAbout } from "@/content/portfolio";

export default function AboutPage() {
  return (
    <SectionHeading title={sectionAbout.title} subtitle={sectionAbout.subtitle} />
  );
}
