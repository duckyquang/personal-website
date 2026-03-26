import { AboutIntro } from "@/components/portfolio/AboutIntro";
import { ClientClock } from "@/components/portfolio/ClientClock";
import { LandingQuickLinks } from "@/components/portfolio/LandingQuickLinks";
import { introSegments } from "@/content/portfolio";

export default function Home() {
  return (
    <>
      <header
        className="mb-10 flex flex-col gap-2 border-b border-[#EEEEEE] pb-6 sm:mb-14 sm:flex-row sm:items-start sm:justify-between"
        aria-label="Greeting"
      >
        <p className="max-w-xl text-[15px] leading-relaxed text-[#999999] md:text-[17px] md:leading-[1.65]">
          Hello! ~ Xin chào!{""}
          <span> /seen-chow/</span>
        </p>
        <ClientClock />
      </header>
      <AboutIntro segments={introSegments} />
      <LandingQuickLinks />
    </>
  );
}
