/** Centered title + subtitle (used outside About). */
export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <header className="mx-auto max-w-3xl text-center">
      <h2 className="text-[clamp(1.55rem,3.2vw+0.5rem,2.25rem)] font-semibold tracking-[-0.02em] text-[#1A1A1A] md:text-[clamp(1.7rem,2.2vw+0.85rem,2.5rem)]">
        {title}
      </h2>
      <p className="mt-5 text-[15px] font-normal leading-[1.65] text-[#737373] sm:mt-6 sm:text-[17px] sm:leading-[1.7] md:text-[18px] md:leading-[1.72]">
        {subtitle}
      </p>
    </header>
  );
}
