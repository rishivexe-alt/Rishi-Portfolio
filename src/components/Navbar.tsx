import { useEffect, useState } from 'react'
import { Github, Linkedin, Menu, X } from 'lucide-react'
import { identity, links, navItems } from '../config/site'
import { useActiveSection, useScrollProgress, useScrolled } from '../hooks/useScroll'

const sectionIds = navItems.map((item) => item.id)

export default function Navbar() {
  const scrolled = useScrolled(16)
  const progress = useScrollProgress()
  const active = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent-500 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-line/70 bg-black/[0.85] backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav
          className="page-container flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]"
          aria-label="Primary"
        >
          <a
            href="#home"
            className="group flex shrink-0 items-center gap-2.5"
            onClick={() => setOpen(false)}
          >
            <span className="relative grid h-9 w-9 place-items-center rounded-lg border border-accent-400/[0.35] bg-accent-500/10 font-display text-sm font-semibold text-accent-300">
              {identity.initials}
              <span className="absolute -inset-px rounded-lg bg-gradient-to-br from-accent-400/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
            <span className="font-display text-sm font-semibold tracking-tight text-white sm:text-base">
              {identity.name}
            </span>
          </a>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative rounded-md px-2.5 py-2 text-[0.8rem] transition-colors ${
                      isActive
                        ? 'text-accent-300'
                        : 'text-neutral-200 hover:text-neutral-100'
                    }`}
                  >
                    {item.label}
                    {isActive ? (
                      <span className="absolute inset-x-2 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent" />
                    ) : null}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="hidden h-9 w-9 place-items-center rounded-lg border border-line/70 bg-white/[0.03] text-neutral-300 transition hover:border-accent-400/40 hover:text-accent-300 sm:grid"
              aria-label={`${identity.name} on GitHub`}
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="hidden h-9 w-9 place-items-center rounded-lg border border-line/70 bg-white/[0.03] text-neutral-300 transition hover:border-accent-400/40 hover:text-accent-300 sm:grid"
              aria-label={`${identity.name} on LinkedIn`}
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-lg border border-line/70 bg-white/[0.03] text-neutral-200 transition hover:border-accent-400/40 hover:text-accent-300 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {open ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        <div
          className="h-px w-full bg-transparent"
          role="progressbar"
          aria-label="Page reading progress"
          aria-valuenow={Math.round(progress * 100)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-px bg-accent-400 transition-[width] duration-150"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 lg:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute inset-x-0 top-0 max-h-[100dvh] overflow-y-auto border-b border-line/70 bg-black/[0.97] px-5 pb-8 pt-20 backdrop-blur-xl transition-all duration-300 ${
            open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <ul className="grid gap-1">
            {navItems.map((item, i) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-xl border px-4 py-3 text-sm transition ${
                      isActive
                        ? 'border-accent-400/30 bg-accent-500/10 text-accent-300'
                        : 'border-line/60 bg-white/[0.02] text-neutral-300 hover:border-accent-400/25 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-[0.65rem] text-neutral-400">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {item.label}
                    </span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-ghost w-full"
            >
              <Github className="h-4 w-4" aria-hidden="true" /> GitHub
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-ghost w-full"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
            </a>
          </div>

          <p className="mt-6 text-center font-mono text-[0.7rem] text-neutral-400">
            {identity.location}
          </p>
        </div>
      </div>
    </>
  )
}
