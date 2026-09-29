import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently in view, for nav highlighting.
 */
export function useActiveSection(ids: string[], offset = 120): string {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const handler = () => {
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top - offset <= 0) current = id
      }

      // Near the bottom of the page the last section may never cross the offset.
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 80
      setActive(atBottom ? ids[ids.length - 1] ?? current : current)
    }

    handler()
    window.addEventListener('scroll', handler, { passive: true })
    window.addEventListener('resize', handler)
    return () => {
      window.removeEventListener('scroll', handler)
      window.removeEventListener('resize', handler)
    }
  }, [ids, offset])

  return active
}

/** True once the page has been scrolled past `threshold` pixels. */
export function useScrolled(threshold = 12): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}

/** Reading progress of the document, from 0 to 1. */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return progress
}
