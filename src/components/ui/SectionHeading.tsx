import type { ReactNode } from 'react'

interface SectionHeadingProps {
  index: string
  eyebrow: string
  title: string
  description?: ReactNode
  align?: 'left' | 'center'
}

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <header className={`mb-10 sm:mb-14 ${centered ? 'mx-auto max-w-2xl text-center' : ''}`}>
      <div className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
        <span className="font-mono text-xs text-accent-300/90">{index}</span>
        <span className="h-px w-8 bg-accent-400/60" />
        <span className="eyebrow">{eyebrow}</span>
      </div>

      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-accent-200 sm:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-neutral-200 sm:text-base">
          {description}
        </p>
      ) : null}
    </header>
  )
}
