'use client'

import { motion } from 'motion/react'
import { Activity, Gauge, Globe2, Shield, Zap } from 'lucide-react'

const STATS = [
  {
    icon: Gauge,
    label: 'Cruising Velocity',
    value: '28,400 km/h',
    detail: 'Mach 23.2 Atmospheric Breakout',
  },
  {
    icon: Globe2,
    label: 'Orbital Distance',
    value: '225M km',
    detail: 'Earth to Mars Hohmann Window',
  },
  {
    icon: Shield,
    label: 'Safety Rating',
    value: '99.98%',
    detail: 'Quad-Redundant Life Support',
  },
  {
    icon: Zap,
    label: 'Ion Propulsion',
    value: '4,200 Isp',
    detail: 'Continuous Acceleration Drive',
  },
]

export function Telemetry() {
  return (
    <section className="relative z-10 border-y border-white/10 bg-cosmos-200/50 py-10 backdrop-blur-lg">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gold/80">
                <stat.icon className="h-3.5 w-3.5" />
                <span>{stat.label}</span>
              </div>
              <div className="mt-2 font-serif text-2xl font-bold text-white md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-zinc-400">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
