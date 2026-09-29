import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { identity, links, navItems } from '../config/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-line/70 bg-black/60">
      <div className="page-container py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent-400/[0.35] bg-accent-500/10 font-display text-xs font-semibold text-accent-300">
                {identity.initials}
              </span>
              <span className="font-display text-sm font-semibold text-white">{identity.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              {identity.degree}, {identity.university}. Building intelligent hardware, secure
              embedded systems and autonomous technologies.
            </p>
          </div>

          <nav aria-label="Footer" className="grid gap-6 sm:grid-cols-2">
            <div>
              <h2 className="font-mono text-[0.62rem] uppercase tracking-widest2 text-accent-400/85">
                Sections
              </h2>
              <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-0.5 sm:grid-cols-1">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="inline-block py-1.5 text-sm text-neutral-200 transition-colors hover:text-accent-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-mono text-[0.62rem] uppercase tracking-widest2 text-accent-400/85">
                Elsewhere
              </h2>
              <ul className="mt-3 grid gap-0.5">
                <li>
                  <a
                    href={links.emailHref}
                    className="inline-flex items-center gap-2 py-1.5 text-sm text-neutral-200 transition-colors hover:text-accent-300"
                  >
                    <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 py-1.5 text-sm text-neutral-200 transition-colors hover:text-accent-300"
                  >
                    <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 py-1.5 text-sm text-neutral-200 transition-colors hover:text-accent-300"
                  >
                    <Github className="h-3.5 w-3.5" aria-hidden="true" />
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-9 flex flex-col-reverse items-start gap-4 border-t border-line/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.68rem] text-neutral-500">
            &copy; {year} {identity.name}. All project content belongs to its respective authors.
          </p>

          <div className="flex items-center gap-4">
            <p className="font-mono text-[0.68rem] text-neutral-500">
              Built with React, Vite &amp; Tailwind CSS
            </p>
            <a
              href="#home"
              className="inline-flex items-center gap-1.5 rounded-lg border border-line/70 bg-white/[0.03] px-3 py-1.5 font-mono text-[0.68rem] text-neutral-200 transition hover:border-accent-400/40 hover:text-accent-300"
            >
              <ArrowUp className="h-3 w-3" aria-hidden="true" />
              Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
