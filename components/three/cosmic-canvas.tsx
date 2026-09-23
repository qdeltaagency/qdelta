'use client'

import dynamic from 'next/dynamic'
import { useReducedExperience, usePrefersReducedMotion } from '@/lib/use-reduced-motion'

const CosmicScene = dynamic(() => import('./cosmic-scene'), {
  ssr: false,
  loading: () => <CosmicFallback />,
})

/**
 * Pure-CSS glowing celestial fallback for initialization and reduced motion.
 */
export function CosmicFallback() {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
    >
      <div className="relative h-64 w-64 md:h-88 md:w-88">
        {/* Ambient atmospheric glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-600/30 via-gold/25 to-transparent blur-3xl" />
      </div>
    </div>
  )
}

/**
 * Cosmic background container containing the 3D WebGL scene
 * and the iconic radiant planetary horizon beam from the screenshot.
 */
export function CosmicCanvas() {
  const reduced = useReducedExperience()
  const prefersReduced = usePrefersReducedMotion()

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* 1. Iconic Radiant Planetary Horizon Light Beam Arc */}
      <div className="cosmic-horizon-atmosphere top-[-15%] right-[-20%] md:top-[-10%] md:right-[-10%]" />
      <div className="cosmic-horizon-beam top-[20%] right-[-15%] md:top-[28%] md:right-[-5%]" />

      {/* 2. Secondary radiant golden atmospheric backlight */}
      <div className="pointer-events-none absolute top-1/4 right-0 h-[48rem] w-[48rem] rounded-full bg-gradient-to-br from-amber-400/20 via-[#D4AF37]/15 to-transparent blur-[140px]" />
      <div className="pointer-events-none absolute top-[-5%] left-1/3 h-[36rem] w-[36rem] rounded-full bg-gradient-to-b from-[#FFD700]/12 via-amber-500/8 to-transparent blur-[120px]" />

      {/* 3. Interactive WebGL Three.js Scene */}
      <div className="pointer-events-auto absolute inset-0 z-0 opacity-85">
        {reduced || prefersReduced ? <CosmicFallback /> : <CosmicScene />}
      </div>

      {/* 4. Bottom shadow gradient blend */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
    </div>
  )
}
