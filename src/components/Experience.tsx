import { BulletList, Card, Section, TagList } from "../design-system";
import { usePreferences } from "../preferences/PreferencesProvider";

export function Experience() {
  const { content } = usePreferences();

  return (
    <Section id="experience" title={content.ui.sections.experience}>
      <ol className="space-y-4 border-s border-line ps-5 sm:ps-6">
        {content.experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="relative">
            <span className="absolute -start-[27px] top-2.5 h-2.5 w-2.5 rounded-full bg-accent sm:-start-[31px]" />
            <Card>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold text-heading sm:text-lg">
                  {job.role} · {job.company}
                </h3>
                <span className="text-sm text-subtle">{job.period}</span>
              </div>
              <p className="mt-1 text-sm text-accent">{job.domain}</p>
              <div className="mt-3">
                <BulletList items={job.highlights} />
              </div>
              <TagList items={job.stack} className="mt-4" />
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}
