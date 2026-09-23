'use client'

import { motion } from 'motion/react'
import { Cpu, Eye, Radio, ShieldAlert, Sparkles, SunMedium, Zap } from 'lucide-react'

const FEATURES = [
  {
    icon: Zap,
    title: 'Magnetic Confinement Fusion Drive',
    desc: 'Generating continuous 0.1g thrust for half-duration transit, drastically reducing deep space travel times while generating artificial gravity comfort.',
  },
  {
    icon: ShieldAlert,
    title: 'Active Electromagnetic Radiation Shield',
    desc: 'Dual-layer magnetic deflector coils eliminate cosmic ray and solar proton hazards, keeping passengers within safe terrestrial radiation thresholds.',
  },
  {
    icon: Eye,
    title: '360° Smart Crystalline Viewports',
    desc: 'Electro-chromic crystalline silica viewports that dim dynamically during solar proximity while offering crystal-clear views of planetary rings and stars.',
  },
  {
    icon: Radio,
    title: 'Quantum Optical Deep Space Relay',
    desc: 'High-bandwidth laser communications linked to deep space satellites, providing ultra-fast orbital data transmission and real-time connectivity to Earth.',
  },
  {
    icon: SunMedium,
    title: 'Closed-Loop Bio-Regenerative Life Support',
    desc: 'Hydroponic oxygen recycling, closed-loop water synthesis, and fresh micro-greens cultivation for culinary dining in deep space.',
  },
  {
    icon: Cpu,
    title: 'Autonomous AI Flight Command',
    desc: 'Quantum-accelerated orbital trajectory modeling that recalculates gravitational assist vectors in real-time for zero-margin precision.',
  },
]

export function Spacecraft() {
  return (
    <section id="technology" className="relative z-10 border-t border-white/10 bg-cosmos-300/40 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-gold">
            <Cpu className="h-3.5 w-3.5" />
            <span>Propulsion & Spacecraft Systems</span>
          </div>

          <h2 className="mt-5 font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-normal text-white">
            The QDelta Odyssey Mk-IV
          </h2>
          <p className="mt-4 max-w-2xl text-base text-zinc-300 md:text-lg">
            Engineered for long-duration interplanetary voyage. Combining state-of-the-art aerospace physics with world-class passenger luxury.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-white/10 bg-cosmos-200/50 p-6 backdrop-blur-md transition-all duration-300 hover:border-gold/40 hover:bg-cosmos-200/80 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                <feature.icon className="h-5 w-5" />
              </div>

              <h3 className="mt-5 font-serif text-lg font-bold text-white group-hover:text-gold transition-colors">
                {feature.title}
              </h3>

              <p className="mt-2.5 text-xs leading-relaxed text-zinc-400">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
