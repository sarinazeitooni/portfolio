import { Card, Section } from "../design-system";
import { usePreferences } from "../preferences/PreferencesProvider";

export function Contact() {
  const { content } = usePreferences();
  const { profile, ui } = content;

  return (
    <Section id="contact" title={ui.sections.contact} className="pb-20">
      <Card>
        <p className="max-w-xl text-muted">{ui.contact.blurb}</p>
        <div className="mt-5 grid gap-3 text-sm sm:grid-cols-3">
          <a href={`mailto:${profile.email}`} className="ds-link">
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="ds-link"
          >
            github.com/sarinazeitooni
          </a>
          <span className="text-muted">{profile.location}</span>
        </div>
      </Card>
      <p className="mt-8 text-center text-xs text-subtle">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </Section>
  );
}
