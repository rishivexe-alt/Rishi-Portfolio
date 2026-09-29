import { skillGroups } from '../config/site'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="page-container">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="Skills"
            title="Tools I actually reach for"
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = group.icon
            return (
              <Reveal key={group.title} delay={i * 80}>
                <section className="card card-hover flex h-full flex-col p-6">
                  <div className="flex items-start gap-3.5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-accent-400/25 bg-accent-500/10 text-accent-300">
                      <Icon className="h-[1.125rem] w-[1.125rem]" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-white">
                        {group.title}
                      </h3>
                      <p className="mt-1 text-xs text-neutral-400">{group.summary}</p>
                    </div>
                  </div>

                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        className="tag tag-hover cursor-default"
                        title={item.note ?? item.name}
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={120}>
          <p className="mt-6 text-center font-mono text-[0.7rem] uppercase tracking-widest2 text-neutral-500">
            Continuous learner — currently deep in RTL verification and power-aware design
          </p>
        </Reveal>
      </div>
    </section>
  )
}
