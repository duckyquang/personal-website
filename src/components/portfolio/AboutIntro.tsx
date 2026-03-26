"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import type {
  IntroHoverOrientation,
  IntroHoverSize,
  IntroSegment,
} from "@/content/portfolio";

function introSegmentClass(part: Pick<IntroSegment, "tone" | "italic">) {
  const tone = part.tone ?? "body";
  const color =
    tone === "name"
      ? "text-[#1A1A1A]"
      : tone === "accent"
        ? "text-[#2563eb]"
        : "text-[#999999]";
  return `${color}${part.italic ? " italic" : ""}`;
}

function CursorHoverImage({
  src,
  alt,
  orientation = "portrait",
  size = "md",
  children,
}: {
  src: string;
  alt: string;
  orientation?: IntroHoverOrientation;
  size?: IntroHoverSize;
  children: React.ReactNode;
}) {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = useCallback((e: React.MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
  }, []);

  const portrait = orientation === "portrait";
  const small = size === "sm";
  const large = size === "lg";

  const frameClass = portrait
    ? small
      ? "flex w-auto max-w-[44vw] items-center justify-center"
      : "flex w-auto max-w-[48vw] items-center justify-center"
    : small
      ? "inline-flex w-auto max-w-[56vw] min-w-0 items-center justify-center"
      : "inline-flex w-auto max-w-[62vw] min-w-0 items-center justify-center";

  const imageClass = portrait
    ? small
      ? "h-[15vh] w-auto max-w-full rounded-md object-contain"
      : large
        ? "h-[22.5vh] w-auto max-w-full rounded-md object-contain"
        : "h-[15vh] w-auto max-w-full rounded-md object-contain"
    : large
      ? "h-[22.5vh] w-auto max-w-[62vw] rounded-md object-contain"
      : "h-[15vh] w-auto max-w-[62vw] rounded-md object-contain";

  return (
    <>
      <span
        className="relative inline cursor-default"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onMouseMove={onMove}
      >
        {children}
      </span>
      {visible ? (
        <div
          className={`pointer-events-none fixed z-[200] -translate-x-1/2 -translate-y-[calc(100%+10px)] rounded-lg border border-[#E5E5E5] bg-white p-1 shadow-[0_8px_32px_rgba(0,0,0,0.12)] ${frameClass}`}
          style={{ left: pos.x, top: pos.y }}
          role="presentation"
        >
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={900}
            sizes={
              portrait
                ? small
                  ? "(max-width: 768px) 40vw, 240px"
                  : "(max-width: 768px) 50vw, 300px"
                : small
                  ? "(max-width: 768px) 80vw, 360px"
                  : "(max-width: 768px) 90vw, 450px"
            }
            className={imageClass}
            priority={false}
          />
        </div>
      ) : null}
    </>
  );
}

export function AboutIntro({ segments }: { segments: IntroSegment[] }) {
  return (
    <div className="w-full max-w-none text-[clamp(1.85rem,4.5vw+0.5rem,3.75rem)] font-semibold leading-[1.2] tracking-[-0.03em] text-[#999999] sm:leading-[1.22] md:text-[clamp(2rem,2.3vw+1.05rem,3.8rem)] lg:text-[clamp(2.2rem,2vw+1rem,3.6rem)]">
      {segments.map((segment, i) => {
        const className = introSegmentClass(segment);
        if (segment.hoverImage) {
          const inner = segment.hoverParts?.length ? (
            <>
              {segment.hoverParts.map((part, j) => {
                const c = introSegmentClass(part);
                return part.italic ? (
                  <em key={j} className={c}>
                    {part.text}
                  </em>
                ) : (
                  <span key={j} className={c}>
                    {part.text}
                  </span>
                );
              })}
            </>
          ) : segment.italic ? (
            <em className={className}>{segment.text}</em>
          ) : (
            <span className={className}>{segment.text}</span>
          );
          return (
            <CursorHoverImage
              key={i}
              src={segment.hoverImage}
              alt={segment.hoverAlt ?? ""}
              orientation={segment.hoverOrientation ?? "portrait"}
              size={segment.hoverSize ?? "md"}
            >
              {inner}
            </CursorHoverImage>
          );
        }
        return segment.italic ? (
          <em key={i} className={className}>
            {segment.text ?? ""}
          </em>
        ) : (
          <span key={i} className={className}>
            {segment.text ?? ""}
          </span>
        );
      })}
    </div>
  );
}
