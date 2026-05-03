"use client";

import { LOCALES } from "@/lib/locale";
import { useLocale } from "@/components/providers/LocaleProvider";

type Props = {
  className?: string;
};

export function LanguageSwitcher({ className }: Props) {
  const { locale, setLocale } = useLocale();

  return (
    <ul
      className={`flex items-center gap-1 text-[11px] font-medium tracking-[0.18em] uppercase ${className ?? ""}`}
      role="list"
      aria-label="Language"
    >
      {LOCALES.map((code) => {
        const isActive = code === locale;
        return (
          <li key={code}>
            <button
              type="button"
              onClick={() => setLocale(code)}
              aria-pressed={isActive}
              className={`relative px-2 py-1 cursor-pointer transition-colors duration-200 ${
                isActive ? "text-slate-900" : "text-slate-400 hover:text-slate-700"
              }`}
            >
              <span className={isActive ? "line-through decoration-1 underline-offset-2" : ""}>
                {code}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
