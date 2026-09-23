'use client'

import { useEffect, useState } from 'react'

export function useReducedExperience() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const coarseQuery = window.matchMedia('(pointer: coarse)')

    const compute = () => {
      const lowPower = coarseQuery.matches && window.innerWidth < 768
      setReduced(motionQuery.matches || lowPower)
    }

    compute()
    motionQuery.addEventListener('change', compute)
    coarseQuery.addEventListener('change', compute)
    window.addEventListener('resize', compute)
    return () => {
      motionQuery.removeEventListener('change', compute)
      coarseQuery.removeEventListener('change', compute)
      window.removeEventListener('resize', compute)
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
