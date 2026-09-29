import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'
import { onViewportChange } from '../../lib/revealBus'

interface RevealProps {
  children: ReactNode
  /** Stagger delay in milliseconds. */
  delay?: number
  className?: string
  as?: ElementType
}

/**
 * Fades content in when it enters the viewport.
 *
 * Uses IntersectionObserver for the common case plus a shared rAF-throttled
 * scroll check as a fallback, so fast scrolling can never leave content stuck
 * at zero opacity. Motion is disabled (content simply shows) when the user
 * prefers reduced motion — see `src/index.css`.
 */
export default function Reveal({ children, delay = 0, className = '', as }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)
  const Tag = (as ?? 'div') as ElementType

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const show = () => setVisible(true)

    if (typeof IntersectionObserver === 'undefined') {
      show()
      return
    }

    const inView = () => {
      const rect = node.getBoundingClientRect()
      return rect.top < window.innerHeight * 0.92 && rect.bottom > 0
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) show()
      },
      { threshold: 0, rootMargin: '0px 0px -5% 0px' },
    )
    observer.observe(node)

    const unsubscribe = onViewportChange(() => {
      if (inView()) show()
    })

    return () => {
      observer.disconnect()
      unsubscribe()
    }
  }, [])

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={`min-w-0 ${className} transition-all duration-700 ease-out will-change-transform ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
