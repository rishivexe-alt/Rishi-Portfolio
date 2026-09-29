import { Award, GraduationCap, MapPin, School } from 'lucide-react'
import { education } from '../config/site'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Education() {
  return (
    <section id="education" className="section relative">

      <div className="page-container relative">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Education"
            title="Academic background"
          />
        </Reveal>

        <div className="relative">
          <div
            className="absolute left-[0.55rem] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent-400/[0.45] via-white/10 to-transparent sm:block"
            aria-hidden="true"
          />

          <div className="grid gap-5">
            {education.map((item, i) => (
              <Reveal key={item.institution} delay={i * 90}>
                <article className="relative sm:pl-9">
                  <span
                    className="absolute left-0 top-6 hidden h-[1.1rem] w-[1.1rem] place-items-center rounded-full border border-accent-400/40 bg-black sm:grid"
                    aria-hidden="true"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                  </span>

                  <div className="card card-hover h-full p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line/70 bg-white/[0.04] text-accent-300">
                          {i === 0 ? (
                            <GraduationCap className="h-4 w-4" aria-hidden="true" />
                          ) : i === 1 ? (
                            <School className="h-4 w-4" aria-hidden="true" />
                          ) : (
                            <Award className="h-4 w-4" aria-hidden="true" />
                          )}
                        </span>
                        <div>
                          <h3 className="font-display text-lg font-semibold text-white">
                            {item.qualification}
                          </h3>
                          <p className="mt-0.5 text-sm text-accent-300">{item.institution}</p>
                          <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-400">
                            <span className="inline-flex items-center gap-1">
                              <MapPin className="h-3 w-3" aria-hidden="true" />
                              {item.location}
                            </span>
                            <span>{item.detail}</span>
                            <span className="font-mono">{item.period}</span>
                          </p>
                        </div>
                      </div>

                      <div className="shrink-0 rounded-xl border border-line/70 bg-white/[0.03] px-4 py-2.5 text-center">
                        <p className="font-display text-xl font-semibold text-white">
                          {item.score}
                        </p>
                        <p className="mt-0.5 max-w-[10rem] font-mono text-[0.6rem] uppercase leading-tight tracking-widest2 text-neutral-400">
                          {item.scoreLabel}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-5 grid gap-2 border-t border-line/60 pt-4">
                      {item.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-sm text-neutral-200">
                          <span
                            className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-neutral-600"
                            aria-hidden="true"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {item.current ? (
                      <p className="mt-4 inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-widest2 text-accent-400">
                        <span className="h-1.5 w-1.5 animate-blink rounded-full bg-accent-400" />
                        Currently enrolled
                      </p>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
