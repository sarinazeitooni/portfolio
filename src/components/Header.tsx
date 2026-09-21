import { IconButton } from "../design-system";
import { usePreferences } from "../preferences/PreferencesProvider";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 2.5v2.25M12 19.25V21.5M4.57 4.57l1.59 1.59M17.84 17.84l1.59 1.59M2.5 12h2.25M19.25 12H21.5M4.57 19.43l1.59-1.59M17.84 6.16l1.59-1.59"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <path
        d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 7.2 7.2 0 1 0 20.5 14.2Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header() {
  const { content, theme, locale, toggleTheme, toggleLocale } = usePreferences();
  const { ui, profile } = content;

  const links = [
    { href: "#skills", label: ui.nav.skills },
    { href: "#experience", label: ui.nav.experience },
    { href: "#projects", label: ui.nav.projects },
    { href: "#contact", label: ui.nav.contact },
  ];

  const localeLabel =
    locale === "en" ? ui.a11y.switchToFa : ui.a11y.switchToEn;
  const themeLabel =
    theme === "dark" ? ui.a11y.themeToLight : ui.a11y.themeToDark;

  return (
    <header className="ds-header">
      <nav className="ds-container flex items-center justify-between gap-3 py-3">
        <a
          href="#top"
          className="shrink-0 text-sm font-semibold tracking-tight text-heading"
        >
          {profile.name}
        </a>

        <ul className="hidden items-center gap-5 text-sm md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a className="ds-nav-link" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <IconButton
            label={localeLabel}
            onClick={toggleLocale}
            className="text-xs font-semibold tracking-wide"
          >
            {locale === "en" ? "فا" : "EN"}
          </IconButton>
          <IconButton label={themeLabel} onClick={toggleTheme}>
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </IconButton>
        </div>
      </nav>

      <ul className="ds-container flex gap-4 overflow-x-auto pb-3 text-sm md:hidden">
        {links.map((link) => (
          <li key={link.href} className="shrink-0">
            <a className="ds-nav-link" href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
