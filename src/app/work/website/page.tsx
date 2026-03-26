import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { sectionWorkWebsite } from "@/content/portfolio";

export default function WorkWebsitePage() {
  return (
    <SectionHeading
      title={sectionWorkWebsite.title}
      subtitle={sectionWorkWebsite.subtitle}
    />
  );
}
