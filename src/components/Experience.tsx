import { experience } from "../data";

export function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <ol className="space-y-6 border-l border-white/10 pl-6">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="relative">
            <span className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
            <div className="card">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">
                  {job.role} · {job.company}
                </h3>
                <span className="text-sm text-slate-500">{job.period}</span>
              </div>
              <p className="mt-1 text-sm text-accent">{job.domain}</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-400">
                {job.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-600" />
                    {highlight}
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <li key={tech} className="tag">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
