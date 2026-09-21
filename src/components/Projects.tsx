import type { Project } from "../content";
import {
  BulletList,
  Card,
  Label,
  Section,
  TagList,
} from "../design-system";
import { usePreferences } from "../preferences/PreferencesProvider";

function FeaturedProject({
  project,
  labels,
}: {
  project: Project;
  labels: ReturnType<typeof usePreferences>["content"]["ui"]["project"];
}) {
  const sections = project.sections;
  if (!sections) return null;

  return (
    <Card as="article" className="space-y-5">
      <header>
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="text-lg font-semibold text-heading sm:text-xl">
            {project.name}
          </h3>
          {project.note ? (
            <span className="text-xs text-subtle">{project.note}</span>
          ) : null}
        </div>
        <p className="mt-1 text-sm text-accent">{project.tagline}</p>
      </header>

      <div>
        <Label>{labels.overview}</Label>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">
          {sections.overview}
        </p>
      </div>

      <div>
        <Label>{labels.role}</Label>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{sections.role}</p>
      </div>

      <div>
        <Label>{labels.engineering}</Label>
        <div className="mt-2">
          <BulletList items={sections.engineering} accent />
        </div>
      </div>

      <div>
        <Label>{labels.technical}</Label>
        <TagList items={sections.technical} className="mt-2" />
      </div>

      {sections.decisions && sections.decisions.length > 0 ? (
        <details className="group ds-surface open:border-line-strong">
          <summary className="cursor-pointer list-none px-4 py-2.5 text-sm font-medium text-heading marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="flex items-center justify-between gap-3">
              {labels.decisions}
              <span className="text-xs text-subtle transition group-open:rotate-180">
                ▼
              </span>
            </span>
          </summary>
          <div className="border-t border-line px-4 py-3">
            <BulletList items={sections.decisions} />
          </div>
        </details>
      ) : null}

      {sections.impact && sections.impact.length > 0 ? (
        <details className="group ds-surface open:border-line-strong">
          <summary className="cursor-pointer list-none px-4 py-2.5 text-sm font-medium text-heading marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="flex items-center justify-between gap-3">
              {labels.impact}
              <span className="text-xs text-subtle transition group-open:rotate-180">
                ▼
              </span>
            </span>
          </summary>
          <div className="border-t border-line px-4 py-3">
            <BulletList items={sections.impact} />
          </div>
        </details>
      ) : null}

      <div className="border-t border-line pt-4">
        <TagList items={project.stack} />
      </div>
    </Card>
  );
}

function SecondaryProject({
  project,
  viewSourceLabel,
}: {
  project: Project;
  viewSourceLabel: string;
}) {
  return (
    <Card as="article" interactive>
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="text-base font-semibold text-heading sm:text-lg">
          {project.name}
        </h3>
        {project.repo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="ds-link text-sm"
          >
            {viewSourceLabel} →
          </a>
        ) : project.note ? (
          <span className="text-xs text-subtle">{project.note}</span>
        ) : null}
      </div>
      <p className="mt-1 text-sm text-accent">{project.tagline}</p>
      {project.description ? (
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
      ) : null}
      {project.highlights && project.highlights.length > 0 ? (
        <div className="mt-3">
          <BulletList items={project.highlights} />
        </div>
      ) : null}
      <TagList items={project.stack} className="mt-4" />
    </Card>
  );
}

export function Projects() {
  const { content } = usePreferences();
  const featured = content.projects.filter((project) => project.featured);
  const secondary = content.projects.filter((project) => !project.featured);

  return (
    <Section id="projects" title={content.ui.sections.projects}>
      <div className="grid gap-5">
        {featured.map((project) => (
          <FeaturedProject
            key={project.name}
            project={project}
            labels={content.ui.project}
          />
        ))}
      </div>

      {secondary.length > 0 ? (
        <div className="mt-10">
          <h3 className="mb-4 text-base font-semibold tracking-tight text-heading sm:text-lg">
            {content.ui.sections.otherWork}
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {secondary.map((project) => (
              <SecondaryProject
                key={project.name}
                project={project}
                viewSourceLabel={content.ui.project.viewSource}
              />
            ))}
          </div>
        </div>
      ) : null}
    </Section>
  );
}
