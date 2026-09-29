import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { identity, links } from '../config/site'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(links.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      // Clipboard unavailable (insecure context / denied permission) — the
      // mailto link below still works, so no further handling is required.
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="section relative">
      <div className="page-container relative">
        <Reveal>
          <SectionHeading
            index="07"
            eyebrow="Contact"
            title="Let's talk engineering"
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={70}>
            <div className="card relative h-full p-6 sm:p-8">
              <p className="eyebrow">Direct line</p>

              <a
                href={links.emailHref}
                className="mt-3 flex items-center gap-3 break-all font-display text-lg font-semibold text-white transition-colors hover:text-accent-300 sm:text-2xl"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-accent-400/25 bg-accent-500/10 text-accent-300">
                  <Mail className="h-[1.125rem] w-[1.125rem]" aria-hidden="true" />
                </span>
                {links.email}
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="btn-ghost mt-4 px-4 py-2 text-[0.8rem]"
                aria-live="polite"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-signal" aria-hidden="true" />
                    Copied to clipboard
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    Copy email address
                  </>
                )}
              </button>

              <p className="mt-6 flex items-center gap-2 text-sm text-neutral-400">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {identity.location} &middot; {identity.university}
              </p>

              <p className="mt-6 border-t border-line/70 pt-6 text-pretty text-sm leading-relaxed text-neutral-200">
                I work on embedded systems, RTL and hardware security — firmware that runs on real
                silicon, designs verified before they are taped out, and telemetry links that stay
                private in transit. If you are building something in those areas, I would be glad to
                hear about it.
              </p>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="grid gap-4">
              {[
                {
                  Icon: Linkedin,
                  label: 'LinkedIn',
                  handle: links.linkedinHandle,
                  href: links.linkedin,
                  hint: 'Professional profile and contact details',
                },
                {
                  Icon: Github,
                  label: 'GitHub',
                  handle: `@${links.githubHandle}`,
                  href: links.github,
                  hint: 'Source code for the public projects',
                },
              ].map(({ Icon, label, handle, href, hint }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="card card-hover group flex items-center gap-4 p-5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line/70 bg-white/[0.04] text-accent-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-[0.95rem] font-semibold text-white">
                      {label}
                    </span>
                    <span className="mt-0.5 block truncate font-mono text-xs text-accent-300">
                      {handle}
                    </span>
                    <span className="mt-1 block text-xs text-neutral-400">{hint}</span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-neutral-500 transition-colors group-hover:text-accent-400"
                    aria-hidden="true"
                  />
                </a>
              ))}

              <div className="card flex items-center gap-3 p-5">
                <span className="h-1.5 w-1.5 shrink-0 animate-blink rounded-full bg-signal" />
                <p className="text-sm text-neutral-200">{identity.availability}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
