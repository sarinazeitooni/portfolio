import { Card, Section, TagList } from "../design-system";
import { usePreferences } from "../preferences/PreferencesProvider";

export function Skills() {
  const { content } = usePreferences();

  return (
    <Section id="skills" title={content.ui.sections.skills}>
      <div className="grid gap-4 sm:grid-cols-2">
        {content.skills.map((group) => (
          <Card key={group.group}>
            <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-accent">
              {group.group}
            </h3>
            <TagList items={group.items} />
          </Card>
        ))}
      </div>
    </Section>
  );
}
