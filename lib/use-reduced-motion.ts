'use client'

import { useEffect, useState } from 'react'

export function useReducedExperience() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const compute = () => {
      setReduced(motionQuery.matches)
    }

    compute()
    motionQuery.addEventListener('change', compute)
    return () => {
      motionQuery.removeEventListener('change', compute)
    }
  }, [])

  return reduced
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const q = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = () => setReduced(q.matches)
    handler()
    q.addEventListener('change', handler)
    return () => q.removeEventListener('change', handler)
  }, [])
  return reduced
}
