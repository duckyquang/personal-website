import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { contactUrls, sectionContactLinkedin } from "@/content/portfolio";

export default function ContactLinkedinPage() {
  return (
    <>
      <SectionHeading
        title={sectionContactLinkedin.title}
        subtitle={sectionContactLinkedin.subtitle}
      />
      <div className="mt-8 flex justify-center">
        <a
          href={contactUrls.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[17px] text-[#1A1A1A] underline decoration-[#EEEEEE] underline-offset-4 transition-colors hover:decoration-[#999999]"
        >
          {contactUrls.linkedin}
        </a>
      </div>
    </>
  );
}
