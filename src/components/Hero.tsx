import { profile } from "../data";

const stats = [
  { value: "6+", label: "Years building for the web" },
  { value: "95%", label: "Lighthouse performance shipped" },
  { value: "30%", label: "Lift in successful transactions" },
];

export function Hero() {
  return (
    <section id="top" className="section pt-24">
      <p className="mb-4 text-sm uppercase tracking-[0.2em] text-accent">
        {profile.title}
      </p>
      <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
        I build fast, reliable front-ends for products people use every day.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
        {profile.summary}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-sky-300"
        >
          Get in touch
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-accent/50"
        >
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-accent/50"
        >
          LinkedIn
        </a>
      </div>

      <dl className="mt-14 grid gap-6 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="card">
            <dt className="text-3xl font-semibold text-white">{stat.value}</dt>
            <dd className="mt-2 text-sm text-slate-400">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
