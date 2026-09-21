import { ButtonLink, Body, Display, Eyebrow } from "../design-system";
import { usePreferences } from "../preferences/PreferencesProvider";

export function Hero() {
  const { content } = usePreferences();
  const { profile, ui } = content;

  return (
    <section id="top" className="ds-container ds-section pt-16 sm:pt-20">
      <Eyebrow>{profile.title}</Eyebrow>
      <Display>{profile.headline}</Display>
      <div className="mt-5">
        <Body large>{profile.summary}</Body>
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <ButtonLink href={`mailto:${profile.email}`} variant="primary">
          {ui.hero.ctaContact}
        </ButtonLink>
        <ButtonLink href="#projects" variant="ghost">
          {ui.hero.ctaProjects}
        </ButtonLink>
        <ButtonLink
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          variant="ghost"
        >
          {ui.hero.github}
        </ButtonLink>
        <ButtonLink
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          variant="ghost"
        >
          {ui.hero.linkedin}
        </ButtonLink>
      </div>
    </section>
  );
}
