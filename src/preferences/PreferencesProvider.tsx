import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getContent, type Content, type Locale, type Theme } from "../content";

const THEME_KEY = "portfolio-theme";
const LOCALE_KEY = "portfolio-locale";

type PreferencesContextValue = {
  theme: Theme;
  locale: Locale;
  content: Content;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const PreferencesContext = createContext<PreferencesContextValue | null>(null);

function readStoredTheme(): Theme {
  const stored = localStorage.getItem(THEME_KEY);
  return stored === "light" || stored === "dark" ? stored : "dark";
}

function readStoredLocale(): Locale {
  const stored = localStorage.getItem(LOCALE_KEY);
  return stored === "fa" || stored === "en" ? stored : "en";
}

function applyDocumentPreferences(theme: Theme, locale: Locale) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.lang = locale;
  root.dir = locale === "fa" ? "rtl" : "ltr";

  const content = getContent(locale);
  document.title = content.meta.title;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", content.meta.description);
  }
}

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() =>
    typeof window === "undefined" ? "dark" : readStoredTheme(),
  );
  const [locale, setLocaleState] = useState<Locale>(() =>
    typeof window === "undefined" ? "en" : readStoredLocale(),
  );

  useEffect(() => {
    applyDocumentPreferences(theme, locale);
    localStorage.setItem(THEME_KEY, theme);
    localStorage.setItem(LOCALE_KEY, locale);
  }, [theme, locale]);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((current) => (current === "en" ? "fa" : "en"));
  }, []);

  const value = useMemo<PreferencesContextValue>(
    () => ({
      theme,
      locale,
      content: getContent(locale),
      setTheme,
      toggleTheme,
      setLocale,
      toggleLocale,
    }),
    [theme, locale, setTheme, toggleTheme, setLocale, toggleLocale],
  );

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error("usePreferences must be used within PreferencesProvider");
  }
  return context;
}
