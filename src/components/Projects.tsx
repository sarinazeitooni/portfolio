import { projects } from "../data";

export function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="grid gap-6">
        {projects.map((project) => (
          <article key={project.name} className="card">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-lg font-semibold text-white">{project.name}</h3>
              {project.repo ? (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-accent transition hover:text-sky-300"
                >
                  View source →
                </a>
              ) : (
                <span className="text-xs text-slate-500">{project.note}</span>
              )}
            </div>
            <p className="mt-1 text-sm text-accent">{project.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {project.description}
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-400">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-600" />
                  {highlight}
                </li>
              ))}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li key={tech} className="tag">
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
