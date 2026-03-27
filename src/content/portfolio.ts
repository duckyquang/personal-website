import { siteImages } from "@/content/media";

export type NavItem = {
  label: string;
  href: string;
  /** Open in a new tab (external URLs). */
  external?: boolean;
  /** If true, opens the mail reveal modal instead of navigating. */
  mailModal?: boolean;
};

export const site = {
  name: "Quang Bui",
  /** Home button label in the top-left square. */
  logoChars: "QB",
} as const;

export const primaryNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Ideas", href: "/ideas" },
  { label: "CV", href: "/cv" },
];

export const researchNav: NavItem[] = [
  { label: "AI/ML", href: "/research/ai-ml" },
  { label: "CS", href: "/research/cs" },
  { label: "Synthica", href: "/research/synthica" },
];

export const workNav: NavItem[] = [
  { label: "Website", href: "/work/website" },
  { label: "BuildNext", href: "/work/buildnext" },
  { label: "Jammy", href: "/work/jammy" },
];

export const contact: NavItem[] = [
  { label: "Mail", href: "mailto:quang@synthica.org", mailModal: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/buiducquang/",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/duckyquang",
    external: true,
  },
];

/** Public email shown in the mail modal and on the mail page. */
export const contactMailAddress = "quang@synthica.org" as const;

/** Home page glass cards: plain links, mail modal, or expandable menus (Research / Work only). */
export type LandingQuickLink =
  | { kind: "link"; label: string; href: string }
  | { kind: "menu"; label: string; items: NavItem[] }
  | { kind: "mail"; label: string };

export const landingQuickLinks: LandingQuickLink[] = [
  { kind: "link", label: "About", href: "/about" },
  { kind: "link", label: "Ideas", href: "/ideas" },
  { kind: "link", label: "CV", href: "/cv" },
  { kind: "menu", label: "Research", items: researchNav },
  { kind: "menu", label: "Work", items: workNav },
  { kind: "mail", label: "Contact" },
];

export const contactUrls = {
  mail: `mailto:${contactMailAddress}` as const,
  linkedin: "https://www.linkedin.com/in/buiducquang/" as const,
  github: "https://github.com/duckyquang" as const,
} as const;

export type IntroTone = "body" | "name" | "accent";

/** Hover popup frame: portrait = narrow width × tall max; landscape swaps axes (wide × short). */
export type IntroHoverOrientation = "portrait" | "landscape";

export type IntroHoverSize = "md" | "sm" | "lg";

export type IntroHoverPart = {
  text: string;
  tone?: IntroTone;
  italic?: boolean;
};

export type IntroSegment = {
  text?: string;
  tone?: IntroTone;
  italic?: boolean;
  /** If set, this span shows `src` in a cursor-following popup on hover. */
  hoverImage?: string;
  hoverAlt?: string;
  /** Multiple styled runs inside one hover target (omit `text` when using this). */
  hoverParts?: IntroHoverPart[];
  /** Defaults to portrait. Use landscape for wide photos (frame width/height caps are swapped). */
  hoverOrientation?: IntroHoverOrientation;
  /** Defaults to `md`. Use `sm` for smaller hover previews on select words. */
  hoverSize?: IntroHoverSize;
};

/** Segments: default body is grey; `name` black; `accent` blue. */
export const introSegments: IntroSegment[] = [
  {
    text: "Quang (Buno)",
    tone: "name",
    hoverImage: "/images/profile/image-9.jpg",
    hoverAlt: "Quang (Buno)",
    hoverOrientation: "portrait",
    hoverSize: "sm",
  },
  { text: " is an ", tone: "body" },
  {
    text: "AI/ML enthusiast",
    tone: "accent",
    hoverImage: siteImages.profileAiMlEnthusiast,
    hoverAlt: "AI/ML enthusiast",
    hoverOrientation: "landscape",
    hoverSize: "sm",
  },
  { text: " who loves to ", tone: "body" },
  {
    text: "build",
    tone: "name",
    hoverImage: "/images/profile/image-1.jpg",
    hoverAlt: "build",
    hoverOrientation: "portrait",
    hoverSize: "sm",
  },
  { text: ", ", tone: "name" },
  {
    text: "research",
    tone: "name",
    hoverImage: "/images/profile/image-8.jpg",
    hoverAlt: "research",
    hoverOrientation: "landscape",
    hoverSize: "sm",
  },
  { text: ", and ", tone: "name" },
  {
    hoverImage: siteImages.profileBreakLlm,
    hoverAlt: "Sometimes break LLM models",
    hoverOrientation: "portrait",
    hoverSize: "lg",
    hoverParts: [
      { text: "sometimes", tone: "name", italic: true },
      { text: " break LLM models", tone: "name" },
    ],
  },
  { text: ". Currently, he is researching AI at ", tone: "body" },
  {
    text: "VNU",
    tone: "accent",
    hoverImage: siteImages.profileVnu,
    hoverAlt: "VNU",
    hoverOrientation: "landscape",
  },
  { text: " and ", tone: "body" },
  {
    text: "MIT",
    tone: "accent",
    hoverImage: siteImages.profileMit,
    hoverAlt: "MIT",
    hoverOrientation: "landscape",
    hoverSize: "sm",
  },
  {
    text: " while running his own research organization ",
    tone: "body",
  },
  {
    text: "Synthica",
    tone: "accent",
    hoverImage: siteImages.profileSynthica,
    hoverAlt: "Synthica",
    hoverOrientation: "portrait",
  },
  {
    text: ". He also picks up side gigs every now and then such as ",
    tone: "body",
  },
  {
    text: "website building",
    tone: "name",
    hoverImage: siteImages.profileWebsiteBuilding,
    hoverAlt: "Website building",
    hoverOrientation: "landscape",
    hoverSize: "sm",
  },
  { text: ".", tone: "body" },
];

/** Title + subtitle for inner pages. */
export type SectionHeadingCopy = { title: string; subtitle: string };

/** `/about` — not the home intro paragraph; add bio or structure here. */
export const sectionAbout: SectionHeadingCopy = {
  title: "About",
  subtitle:
    "Longer bio, timeline, or credits belong here. The short intro with hover images stays on the home page only.",
};

export const sectionIdeas: SectionHeadingCopy = {
  title: "Ideas",
  subtitle:
    "Explorations in AI, interfaces, and systems—notes and prototypes that do not fit anywhere else yet.",
};

export const sectionCv: SectionHeadingCopy = {
  title: "CV",
  subtitle:
    "Education, experience, and selected work. Replace this line with a short summary or link to a PDF.",
};

export const sectionResearchAiMl: SectionHeadingCopy = {
  title: "AI/ML",
  subtitle:
    "Research threads on learning algorithms, evaluation, and applied machine learning in your projects.",
};

export const sectionResearchCs: SectionHeadingCopy = {
  title: "CS",
  subtitle:
    "Computer science foundations and engineering work—systems, theory, and implementation details.",
};

export const sectionResearchSynthica: SectionHeadingCopy = {
  title: "Synthica",
  subtitle:
    "Your research organization: mission, collaborators, and how others can get involved.",
};

export const sectionWorkWebsite: SectionHeadingCopy = {
  title: "Website",
  subtitle:
    "Web builds and experiments—layout, performance, and craft for the projects you ship.",
};

export const sectionWorkProject: SectionHeadingCopy = {
  title: "Project",
  subtitle:
    "A focused project write-up—problem, approach, and what you learned shipping it.",
};

export const sectionWorkBuildNext: SectionHeadingCopy = {
  title: "BuildNext",
  subtitle:
    "Describe BuildNext: what it is, who it is for, and what you are building next.",
};

export const sectionWorkJammy: SectionHeadingCopy = {
  title: "Jammy",
  subtitle:
    "Describe Jammy in a sentence or two so visitors know what to expect.",
};

export const sectionContactMail: SectionHeadingCopy = {
  title: "Mail",
  subtitle:
    "Best channel for longer messages, opportunities, or anything that does not fit a quick social reply.",
};

export const sectionContactLinkedin: SectionHeadingCopy = {
  title: "LinkedIn",
  subtitle:
    "Professional history and network—point people to what you want them to see first.",
};
