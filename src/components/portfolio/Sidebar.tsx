"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { MailModal } from "@/components/portfolio/MailModal";
import {
  contact,
  type NavItem,
  primaryNav,
  researchNav,
  site,
  workNav,
} from "@/content/portfolio";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-8 mb-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#999999] first:mt-0 md:text-[12px]">
      {children}
    </p>
  );
}

function NavLink({
  href,
  children,
  onNavigate,
}: {
  href: string;
  children: React.ReactNode;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      onClick={() => onNavigate?.()}
      className={`block py-0.5 text-[15px] leading-snug transition-colors hover:text-[#000000] md:text-[16px] ${
        active ? "font-medium text-[#000000]" : "text-[#1A1A1A]"
      }`}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </Link>
  );
}

function ExternalNavLink({
  href,
  children,
  onNavigate,
}: {
  href: string;
  children: React.ReactNode;
  onNavigate?: () => void;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => onNavigate?.()}
      className="block py-0.5 text-[15px] leading-snug text-[#1A1A1A] transition-colors hover:text-[#000000] md:text-[16px]"
    >
      {children}
    </a>
  );
}

function ContactNavItem({
  item,
  onMailClick,
  onNavigate,
}: {
  item: NavItem;
  onMailClick: () => void;
  onNavigate?: () => void;
}) {
  if (item.mailModal) {
    return (
      <button
        type="button"
        onClick={() => {
          onMailClick();
          onNavigate?.();
        }}
        className="block w-full cursor-pointer py-0.5 text-left text-[15px] leading-snug text-[#1A1A1A] transition-colors hover:text-[#000000] md:text-[16px]"
      >
        {item.label}
      </button>
    );
  }
  if (item.external) {
    return (
      <ExternalNavLink href={item.href} onNavigate={onNavigate}>
        {item.label}
      </ExternalNavLink>
    );
  }
  return (
    <NavLink href={item.href} onNavigate={onNavigate}>
      {item.label}
    </NavLink>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M18 6 6 18M6 6l12 12" />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

function SidebarNav({
  onNavigate,
  onMailClick,
}: {
  onNavigate?: () => void;
  onMailClick: () => void;
}) {
  return (
    <>
      <Link
        href="/"
        onClick={() => onNavigate?.()}
        className="mb-8 flex h-12 w-12 shrink-0 items-center justify-center border border-[#EEEEEE] bg-white transition-colors hover:bg-[#FAFAFA]"
        aria-label="Home"
      >
        <span className="text-[13px] font-semibold tracking-tight text-[#1A1A1A] md:text-[14px]">
          {site.logoChars}
        </span>
      </Link>

      <nav className="flex flex-col gap-0" aria-label="Primary">
        {primaryNav.map((item) => (
          <NavLink key={item.href} href={item.href} onNavigate={onNavigate}>
            {item.label}
          </NavLink>
        ))}

        <SectionLabel>Research</SectionLabel>
        {researchNav.map((item) => (
          <NavLink key={item.href} href={item.href} onNavigate={onNavigate}>
            {item.label}
          </NavLink>
        ))}

        <SectionLabel>Work</SectionLabel>
        {workNav.map((item) => (
          <NavLink key={item.href} href={item.href} onNavigate={onNavigate}>
            {item.label}
          </NavLink>
        ))}

        <SectionLabel>Contact</SectionLabel>
        {contact.map((item) => (
          <ContactNavItem
            key={item.label + item.href}
            item={item}
            onMailClick={onMailClick}
            onNavigate={onNavigate}
          />
        ))}
      </nav>
    </>
  );
}

export function Sidebar() {
  const [mailOpen, setMailOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const openMail = useCallback(() => {
    setMailOpen(true);
    setMobileOpen(false);
  }, []);

  return (
    <>
      {/* Mobile: menu / close toggle — top left */}
      <button
        type="button"
        onClick={() => setMobileOpen((o) => !o)}
        className="fixed left-[max(0.75rem,env(safe-area-inset-left,0px))] top-[max(0.75rem,env(safe-area-inset-top,0px))] z-[60] flex h-11 w-11 touch-manipulation items-center justify-center rounded-lg border border-[#EEEEEE] bg-white text-[#1A1A1A] shadow-md transition-colors hover:bg-[#FAFAFA] md:hidden"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
      >
        <MenuIcon open={mobileOpen} />
      </button>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[50] bg-black/45 backdrop-blur-[1px] transition-opacity duration-300 md:hidden ${
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!mobileOpen}
        onClick={closeMobile}
      />

      {/* Sidebar: off-canvas on small screens, fixed on md+ */}
      <aside
        className={`fixed left-0 top-0 z-[55] flex h-dvh w-[min(88vw,320px)] max-w-[320px] shrink-0 flex-col overflow-y-auto border-[#EEEEEE] bg-white px-6 py-8 shadow-xl transition-transform duration-300 ease-out md:z-20 md:w-[220px] md:max-w-none md:border-r md:px-8 md:py-10 md:shadow-none lg:w-[240px] ${
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
        aria-hidden={false}
      >
        <SidebarNav onNavigate={closeMobile} onMailClick={openMail} />
      </aside>

      <MailModal open={mailOpen} onClose={() => setMailOpen(false)} />
    </>
  );
}
