import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { sectionWorkJammy } from "@/content/portfolio";

export default function WorkJammyPage() {
  return (
    <SectionHeading
      title={sectionWorkJammy.title}
      subtitle={sectionWorkJammy.subtitle}
    />
  );
}
