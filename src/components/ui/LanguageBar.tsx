"use client";

import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

export function LanguageBar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="hidden md:block fixed left-0 right-0 z-[60] pointer-events-none"
      style={{
        top: "92px",
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(-8px)",
        transition:
          "opacity 0.7s cubic-bezier(0.22,1,0.36,1) 200ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) 200ms",
      }}
    >
      <div className="mx-auto flex justify-end max-w-[1600px] w-full px-6 md:px-12">
        <div className="pointer-events-auto bg-white/70 backdrop-blur-md rounded-full px-4 py-2 border border-slate-200/60 shadow-sm">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}
