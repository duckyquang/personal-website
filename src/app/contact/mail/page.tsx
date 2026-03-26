import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { contactMailAddress, contactUrls, sectionContactMail } from "@/content/portfolio";

export default function ContactMailPage() {
  return (
    <>
      <SectionHeading
        title={sectionContactMail.title}
        subtitle={sectionContactMail.subtitle}
      />
      <div className="mt-8 flex justify-center">
        <a
          href={contactUrls.mail}
          className="text-[17px] text-[#1A1A1A] underline decoration-[#EEEEEE] underline-offset-4 transition-colors hover:decoration-[#999999]"
        >
          {contactMailAddress}
        </a>
      </div>
    </>
  );
}
