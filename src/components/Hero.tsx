import { ArrowRight, Github, Linkedin } from 'lucide-react'
import { identity, links, skillGroups } from '../config/site'

const tickerItems = skillGroups.flatMap((group) => group.items.map((item) => item.name))

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 sm:pt-32 lg:pt-40">
      <div className="page-container">
        <div className="max-w-5xl">
          <h1 className="font-editorial text-accent-200 text-[clamp(3.25rem,17vw,11rem)] font-bold leading-[0.86] tracking-[-0.03em]">
            {identity.name}
          </h1>

          <p className="mt-7 max-w-2xl border-l border-accent-400/40 pl-4 text-pretty text-base font-normal leading-relaxed text-neutral-200 sm:mt-8 sm:pl-5 sm:text-lg lg:text-xl">
            {identity.tagline}
          </p>

          <p className="mt-6 max-w-2xl text-pretty text-[0.95rem] leading-relaxed text-neutral-200 sm:text-base">
            {identity.heroIntro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-primary"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-ghost"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
            <a href="#projects" className="btn-ghost">
              View projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-line/70 pt-6 sm:grid-cols-3">
            {[
              { label: 'Degree', value: 'B.E. ECE' },
              { label: 'CGPA', value: '9.48' },
              { label: 'Focus', value: 'Embedded & RTL' },
            ].map((item) => (
              <div key={item.label}>
                <dt className="font-mono text-[0.65rem] uppercase tracking-widest2 text-neutral-400">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-neutral-200">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="relative mt-16 border-y border-line/60 py-3 sm:mt-24">
        <div className="mask-fade-x overflow-hidden">
          <div className="flex w-max animate-marquee-x gap-8 pr-8">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center gap-8" aria-hidden={copy === 1}>
                {tickerItems.map((item) => (
                  <span
                    key={`${copy}-${item}`}
                    className="whitespace-nowrap font-mono text-[0.72rem] uppercase tracking-widest2 text-accent-400/45"
                  >
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
