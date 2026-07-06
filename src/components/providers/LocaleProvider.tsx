"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  detectLocaleFromNavigator,
  readStoredLocale,
  writeStoredLocale,
  type Locale,
} from "@/lib/locale";
import { messages, type Messages } from "@/i18n/messages";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  isLoading: boolean;
  t: Messages;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("EN");
  const [isLoading, setIsLoading] = useState(true);
  const localeRef = useRef(locale);
  localeRef.current = locale;

  useEffect(() => {
    const stored = readStoredLocale();
    const detected = stored ?? detectLocaleFromNavigator();
    setLocaleState(detected);
    if (!stored) writeStoredLocale(detected);
    const t = setTimeout(() => setIsLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  // Keep the document language in sync so screen readers and search engines
  // see the right language when the user (or their browser) picks Spanish.
  useEffect(() => {
    document.documentElement.lang = locale.toLowerCase();
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    // Side effects live in the event handler (not the state updater) so they
    // run exactly once per switch, including under React StrictMode.
    if (localeRef.current === next) return;
    setLocaleState(next);
    writeStoredLocale(next);
    setIsLoading(true);
    window.setTimeout(() => setIsLoading(false), 1100);
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, isLoading, t: messages[locale] }),
    [locale, setLocale, isLoading],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

export function useT(): Messages {
  return useLocale().t;
}
