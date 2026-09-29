import { Cpu, Layers3, Workflow } from 'lucide-react'
import { identity } from '../config/site'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const principles = [
  {
    Icon: Cpu,
    title: 'Understand the implementation',
    body: 'I want to know why a design behaves the way it does — the state machine behind the protocol, the timing behind the trace, the gate behind the RTL.',
  },
  {
    Icon: Layers3,
    title: 'Hardware and software together',
    body: 'The interesting problems live at the interface: driver design, protocol boundaries, and abstractions that stay honest about the silicon underneath.',
  },
  {
    Icon: Workflow,
    title: 'Verification over assumption',
    body: 'Simulate it, assert it, measure it. A result that has not been checked against behaviour is a guess with good formatting.',
  },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="page-container">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="About"
            title="Engineering that starts below the abstraction"
            description="A short explanation of how I got here and how I approach the work."
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
          <Reveal delay={80}>
            <div className="card p-6 sm:p-8">
              <p className="text-pretty text-[0.95rem] leading-relaxed text-neutral-300 sm:text-base">
                I am a final-year Electronics and Communication Engineering student at Global
                Academy of Technology, Bengaluru, on the VTU B.E. Honours programme. My focus
                sits in embedded systems, firmware, RTL and digital design, IoT security,
                robotics, autonomous systems and Edge AI.
              </p>
              <p className="mt-4 text-pretty text-[0.95rem] leading-relaxed text-neutral-200">
                {identity.summary}
              </p>

              <div className="mt-7 border-t border-line/70 pt-6">
                <h3 className="eyebrow">Domains I keep coming back to</h3>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {[
                    'Embedded firmware & real-time constraints',
                    'RTL design, verification and synthesis',
                    'Cryptographic links and IoT security',
                    'Multi-drone autonomy and coordination',
                    'Edge inference on constrained hardware',
                    'Power conversion and modelling',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-200">
                      <span
                        className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-accent-400"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-7 rounded-xl border border-accent-400/20 bg-accent-500/[0.06] px-4 py-3 text-sm text-accent-200">
                {identity.availability}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {principles.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={140 + i * 70}>
                <article className="card card-hover h-full p-5">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent-400/25 bg-accent-500/10 text-accent-300">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3.5 font-display text-[0.95rem] font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-200">{body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
