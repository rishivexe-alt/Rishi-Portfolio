type Check = () => void

/**
 * One shared, rAF-throttled scroll/resize listener for every reveal element on
 * the page. IntersectionObserver alone can miss elements during very fast
 * scrolling (smooth anchor jumps, End key), which would leave them permanently
 * faded out — this bus is the safety net.
 */
const pending = new Set<Check>()
let frame = 0

function flush() {
  frame = 0
  for (const check of pending) check()
}

function schedule() {
  if (!frame) frame = requestAnimationFrame(flush)
}

export function onViewportChange(check: Check): () => void {
  pending.add(check)

  if (pending.size === 1) {
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
  }

  check()

  return () => {
    pending.delete(check)
    if (pending.size === 0) {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (frame) {
        cancelAnimationFrame(frame)
        frame = 0
      }
    }
  }
}
