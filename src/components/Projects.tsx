import { ArrowUpRight, Github } from 'lucide-react'
import { projects, type Project } from '../config/site'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon

  return (
    <article className="card card-hover flex h-full flex-col p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line/70 bg-white/[0.03] text-accent-300">
            <Icon className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="font-mono text-[0.62rem] uppercase tracking-widest2 text-neutral-400">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <span className="rounded-md border border-line/70 bg-white/[0.03] px-2 py-1 font-mono text-[0.62rem] uppercase tracking-widest2 text-accent-400/90">
          {project.category}
        </span>
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-accent-200">
        {project.title}
      </h3>

      <p className="mt-2.5 text-pretty text-sm leading-relaxed text-neutral-200">
        {project.summary}
      </p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between gap-3 border-t border-line/70 pt-4">
        <span className="truncate font-mono text-[0.68rem] text-neutral-400">
          {project.repoLabel}
        </span>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-neutral-200 transition-colors hover:text-accent-300"
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          View
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section relative">
      <div className="page-container relative">
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="Featured projects"
            title="Hardware, firmware and simulation work"
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={Math.min(i, 4) * 70}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
