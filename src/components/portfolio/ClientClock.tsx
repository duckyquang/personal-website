"use client";

import { useEffect, useState } from "react";

function formatNow() {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date());
}

export function ClientClock() {
  const [label, setLabel] = useState(formatNow);

  useEffect(() => {
    const id = setInterval(() => setLabel(formatNow()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <time
      className="text-[14px] tabular-nums text-[#999999] md:text-[15px]"
      dateTime={new Date().toISOString()}
      suppressHydrationWarning
    >
      {label}
    </time>
  );
}
