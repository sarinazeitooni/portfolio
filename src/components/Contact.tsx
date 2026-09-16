import { profile } from "../data";

export function Contact() {
  return (
    <section id="contact" className="section pb-28">
      <h2 className="section-title">Contact</h2>
      <div className="card">
        <p className="max-w-xl text-slate-400">
          Open to senior front-end roles and consulting. The fastest way to reach
          me is email.
        </p>
        <div className="mt-6 grid gap-4 text-sm sm:grid-cols-3">
          <a
            href={`mailto:${profile.email}`}
            className="text-accent transition hover:text-sky-300"
          >
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-accent transition hover:text-sky-300"
          >
            github.com/sarinazeitooni
          </a>
          <span className="text-slate-400">{profile.location}</span>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </section>
  );
}
