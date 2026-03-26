"use client";

import { useEffect } from "react";
import { contactMailAddress } from "@/content/portfolio";

export function MailModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const mailto = `mailto:${contactMailAddress}`;

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="mail-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/25 backdrop-blur-[2px]"
        onClick={onClose}
        aria-label="Close dialog"
      />
      <div className="relative z-[1] w-full max-w-[380px] rounded-2xl border border-[#EEEEEE] bg-white p-5 shadow-xl">
        <div className="flex items-start justify-between gap-3">
          <h2
            id="mail-modal-title"
            className="min-w-0 flex-1 text-base font-semibold leading-snug text-[#1A1A1A]"
          >
            Oh so you want my email 👀?
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="-m-1 shrink-0 rounded-full p-1.5 text-[#666666] transition-colors hover:bg-black/[0.06] hover:text-[#1A1A1A]"
            aria-label="Close"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="mt-4 text-[15px] leading-relaxed text-[#555555]">
          Here you go:{" "}
          <a
            href={mailto}
            className="font-medium text-[#2563eb] underline decoration-[#2563eb]/30 underline-offset-2"
          >
            {contactMailAddress}
          </a>
        </p>
      </div>
    </div>
  );
}
