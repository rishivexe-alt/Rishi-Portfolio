import { ArrowUpRight } from 'lucide-react'
import { currentlyExploring } from '../config/site'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Exploring() {
  return (
    <section id="exploring" className="section relative">

      <div className="page-container relative">
        <Reveal>
          <SectionHeading
            index="05"
            eyebrow="Currently exploring"
            title="What I am learning right now"
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {currentlyExploring.map(({ title, description, icon: Icon }, i) => (
            <Reveal key={title} delay={i * 70}>
              <article className="card card-hover group relative h-full p-6">
                <div className="relative flex items-start justify-between gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-line/70 bg-white/[0.04] text-accent-300">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-neutral-500 transition-colors group-hover:text-accent-400"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="relative mt-4 font-display text-[0.95rem] font-semibold text-white">
                  {title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-neutral-200">
                  {description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
