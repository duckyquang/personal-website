"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";
import { MailModal } from "@/components/portfolio/MailModal";
import {
  contactUrls,
  landingQuickLinks,
  type LandingQuickLink,
} from "@/content/portfolio";

const cardShell =
  "overflow-hidden rounded-2xl border border-white/60 bg-white/35 shadow-[0_8px_32px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04] backdrop-blur-xl";
const contactCardShell =
  "overflow-hidden rounded-2xl border border-white/60 bg-white/35 shadow-[0_8px_32px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04] backdrop-blur-xl";

const cardImages = [
  "/images/profile/image-1.jpg",
  "/images/profile/image-2.jpg",
  "/images/profile/image-3.jpg",
  "/images/profile/image-4.jpg",
  "/images/profile/image-5.jpg",
  "/images/profile/image-6.jpg",
  "/images/profile/image-7.jpeg",
  "/images/profile/image-8.jpg",
  "/images/profile/image-9.jpg",
] as const;

function getCardImage(index: number) {
  return cardImages[index % cardImages.length]!;
}

function LinkCard({
  item,
  imageSrc,
}: {
  item: Extract<LandingQuickLink, { kind: "link" }>;
  imageSrc: string;
}) {
  const isIdeasCard = item.label === "Ideas";

  return (
    <Link
      href={item.href}
      className={`group relative flex min-h-[260px] w-full flex-col self-start ${cardShell} lg:min-h-0 lg:h-full`}
    >
      {isIdeasCard ? (
        <div className="relative h-full w-full flex-1 bg-white">
          <span
            className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-[#E9E9E9]"
            aria-hidden
          />
        </div>
      ) : (
        <div className="relative flex-1 w-full">
          <Image
            src={imageSrc}
            alt={item.label}
            fill
            sizes="(max-width: 640px) 78vw, 360px"
            className="object-cover"
          />
        </div>
      )}

      {isIdeasCard ? (
        <span className="absolute left-4 top-4 text-[16px] font-medium uppercase tracking-[0.08em] text-[#555555]">
          IDEAS
        </span>
      ) : (
        <span className="absolute left-4 top-4 w-fit rounded-full border border-[#E8E8E8] bg-white/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-[#555555] shadow-sm backdrop-blur-sm">
          {item.label}
        </span>
      )}
    </Link>
  );
}

function MailContactCard({
  label,
}: {
  label: string;
}) {
  const [open, setOpen] = useState(false);

  function MailIcon() {
    return (
      <svg
        className="h-[6px] w-[6px] md:h-[7px] md:w-[7px] lg:h-[9px] lg:w-[9px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden
      >
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  function LinkedinIcon() {
    return (
      <svg
        className="h-[7px] w-[7px] md:h-[7px] md:w-[7px] lg:h-[10px] lg:w-[10px]"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <rect x="2.5" y="2.5" width="19" height="19" rx="2.2" />
        <rect x="5.6" y="9.6" width="3" height="8.8" fill="#ffffff" />
        <circle cx="7.1" cy="6.9" r="1.5" fill="#ffffff" />
        <path
          d="M10.8 9.6h2.8v1.2h.04c.4-.76 1.36-1.54 2.82-1.54 3.02 0 3.56 1.98 3.56 4.56v4.58h-2.96v-4.06c0-.98-.02-2.22-1.34-2.22-1.36 0-1.56 1.04-1.56 2.14v4.14h-3.36V9.6Z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  function GithubIcon() {
    return (
      <svg
        className="h-[7px] w-[7px] md:h-[7px] md:w-[7px] lg:h-[10px] lg:w-[10px]"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M12 .5A11.5 11.5 0 0 0 .5 12.2c0 5.2 3.4 9.6 8.1 11.2.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.5-1.4-1.9-1.4-1.9-1.1-.8.1-.8.1-.8 1.3.1 1.9 1.3 1.9 1.3 1.1 2 2.9 1.4 3.6 1.1.1-.8.4-1.4.8-1.8-2.7-.3-5.5-1.4-5.5-6 0-1.3.4-2.3 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2A11 11 0 0 1 12 5.8c1 0 2 .1 2.9.4 2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.9.1 3.2.8.9 1.2 2 1.2 3.2 0 4.7-2.9 5.7-5.6 6 .4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6a11.5 11.5 0 0 0 8.1-11.2A11.5 11.5 0 0 0 12 .5Z" />
      </svg>
    );
  }

  const rowClass =
    "group flex w-full items-center justify-between rounded-xl px-1.5 py-0.5 text-left transition-colors duration-150 hover:bg-black/5";

  return (
    <>
      <div
        className={`group relative flex h-[257px] w-full flex-col self-start text-left ${contactCardShell} lg:h-full`}
        aria-label={label}
      >
        <div className="flex h-full flex-col px-6 py-4">
          <div className="flex items-center gap-3 text-[12px] md:text-[12px] lg:text-[16px]">
            <span
              className="relative inline-flex h-[0.75em] w-[0.75em] items-center justify-center"
              aria-hidden
            >
              <span className="absolute inline-flex h-[0.66em] w-[0.66em] rounded-full bg-[#72d34b] opacity-50 blur-[2px]" />
              <span className="relative inline-flex h-[0.5em] w-[0.5em] rounded-full bg-[#72d34b]" />
            </span>
            <span className="text-[1em] font-semibold leading-none tracking-[-0.02em] text-[#070707]">
              Contact
            </span>
          </div>

          <div className="mt-auto space-y-0">
            <button
              type="button"
              className={`${rowClass} cursor-pointer`}
              onClick={() => setOpen(true)}
            >
              <span className="text-[9px] leading-none tracking-[-0.02em] text-[#070707] transition-colors duration-150 group-hover:text-[#222222] md:text-[10px] lg:text-[13px]">
                Email
              </span>
              <span className="text-[#101010] transition-transform duration-150 group-hover:translate-x-0.5">
                <MailIcon />
              </span>
            </button>

            <a
              href={contactUrls.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={rowClass}
            >
              <span className="text-[9px] leading-none tracking-[-0.02em] text-[#070707] transition-colors duration-150 group-hover:text-[#222222] md:text-[10px] lg:text-[13px]">
                LinkedIn
              </span>
              <span className="text-[#101010] transition-transform duration-150 group-hover:translate-x-0.5">
                <LinkedinIcon />
              </span>
            </a>

            <a
              href={contactUrls.github}
              target="_blank"
              rel="noopener noreferrer"
              className={rowClass}
            >
              <span className="text-[9px] leading-none tracking-[-0.02em] text-[#070707] transition-colors duration-150 group-hover:text-[#222222] md:text-[10px] lg:text-[13px]">
                GitHub
              </span>
              <span className="text-[#101010] transition-transform duration-150 group-hover:translate-x-0.5">
                <GithubIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
      <MailModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function MenuCard({
  item,
  imageSrc,
  open,
  onToggle,
  onClose,
}: {
  item: Extract<LandingQuickLink, { kind: "menu" }>;
  imageSrc: string;
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      className={`relative flex min-h-[260px] w-full flex-col self-start ${cardShell} ${
        open ? "" : ""
      } lg:min-h-0 lg:h-full`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="relative flex-1 w-full p-0 text-left outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]/30"
        aria-expanded={open}
        aria-controls={panelId}
      >
        <Image
          src={imageSrc}
          alt={item.label}
          fill
          sizes="(max-width: 640px) 78vw, 360px"
          className="object-cover"
        />
        <span className="absolute left-4 top-4 w-fit rounded-full border border-[#E8E8E8] bg-white/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-[#555555] shadow-sm backdrop-blur-sm">
          {item.label}
        </span>
      </button>

      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out border-t border-white/40 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <ul className="space-y-0.5 border-t border-white/45 px-4 pb-4 pt-2">
            {item.items.map((sub) => (
              <li key={sub.href}>
                <Link
                  href={sub.href}
                  className="block rounded-lg px-2 py-2 text-[14px] text-[#1A1A1A]"
                >
                  {sub.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function LandingQuickLinks() {
  const [openMenuLabel, setOpenMenuLabel] = useState<string | null>(null);

  const toggleMenu = useCallback((label: string) => {
    setOpenMenuLabel((prev) => (prev === label ? null : label));
  }, []);

  const closeMenus = useCallback(() => setOpenMenuLabel(null), []);

  function getCardPlacement(index: number) {
    // Grid layout for large screens (matches the placeholder screenshot):
    // Row 1: [0] [1 spans] [2 (tall)]
    // Row 2: [2 (tall continues)] [3 (wide)] [empty]
    // Row 3: [3 (wide continues)] [4] [5]
    switch (index) {
      case 0:
        return "lg:col-start-1 lg:row-start-1 lg:col-span-1 lg:row-span-1";
      case 1:
        return "lg:col-start-2 lg:row-start-1 lg:col-span-2 lg:row-span-1";
      case 2:
        return "lg:col-start-4 lg:row-start-1 lg:col-span-1 lg:row-span-2";
      case 3:
        return "lg:col-start-1 lg:row-start-2 lg:col-span-2 lg:row-span-2";
      case 4:
        return "lg:col-start-3 lg:row-start-2 lg:col-span-1 lg:row-span-2";
      case 5:
        return "lg:col-start-4 lg:row-start-3 lg:col-span-1 lg:row-span-1";
      default:
        return "";
    }
  }

  return (
    <nav
      className="mt-10 grid grid-cols-1 items-start gap-4 sm:mt-14 md:mt-16 lg:grid-cols-4 lg:[--card-unit:clamp(90px,9.5vw,168px)] lg:grid-rows-[var(--card-unit)_calc(var(--card-unit)*1.72)_var(--card-unit)] lg:gap-6"
      aria-label="Site sections"
    >
      {landingQuickLinks.map((item, index) => {
        const placement = getCardPlacement(index);
        return (
          <div key={item.label} className={`lg:h-full ${placement}`}>
            {item.kind === "link" ? (
              <LinkCard item={item} imageSrc={getCardImage(index)} />
            ) : item.kind === "menu" ? (
              <MenuCard
                item={item}
                imageSrc={getCardImage(index)}
                open={openMenuLabel === item.label}
                onToggle={() => toggleMenu(item.label)}
                onClose={closeMenus}
              />
            ) : (
              <MailContactCard label={item.label} />
            )}
          </div>
        );
      })}
    </nav>
  );
}
