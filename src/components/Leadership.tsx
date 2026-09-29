import { certifications, leadership } from '../config/site'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Leadership() {
  const items = [...leadership, ...certifications]

  return (
    <section id="leadership" className="section">
      <div className="page-container">
        <Reveal>
          <SectionHeading
            index="06"
            eyebrow="Leadership"
            title="Beyond the coursework"
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map(({ title, organisation, period, description, icon: Icon, tags }, i) => (
            <Reveal key={`${title}-${organisation}`} delay={i * 80}>
              <article className="card card-hover flex h-full flex-col p-6">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent-400/25 bg-accent-500/10 text-accent-300">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>

                <h3 className="mt-4 font-display text-[0.98rem] font-semibold leading-snug text-white">
                  {title}
                </h3>
                <p className="mt-1 text-sm text-accent-300">{organisation}</p>
                <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-widest2 text-neutral-500">
                  {period}
                </p>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-200">
                  {description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-line/60 pt-4">
                  {tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
