import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { sectionCv } from "@/content/portfolio";

export default function CvPage() {
  return <SectionHeading title={sectionCv.title} subtitle={sectionCv.subtitle} />;
}
