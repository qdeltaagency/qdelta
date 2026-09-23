'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowUpRight, Compass, Moon, Sparkles, Clock, Globe } from 'lucide-react'
import { useReserveModal } from '@/components/reserve-modal'
import { cn } from '@/lib/utils'

type Destination = {
  id: string
  title: string
  subtitle: string
  category: 'Mars' | 'Lunar' | 'Orbital' | 'Outer Rim'
  desc: string
  distance: string
  duration: string
  gravity: string
  price: string
  highlight: string
  accentColor: string
}

const DESTINATIONS: Destination[] = [
  {
    id: 'Mars Colony',
    title: 'Mars Colony Expedition',
    subtitle: 'Valles Marineris & Olympus Mons Base',
    category: 'Mars',
    desc: 'Touchdown on the crimson frontier. Walk through pressurized dome habitats, explore ancient volcanic calderas, and witness two moons rising over the Martian horizon.',
    distance: '225,000,000 km',
    duration: '180 Days Transit',
    gravity: '0.38g Surface',
    price: '$240,000',
    highlight: 'Featured Mission 2026',
    accentColor: 'from-amber-500/20 to-red-600/30',
  },
  {
    id: 'Lunar Gateway',
    title: 'Moon Base Alpha & Gateway',
    subtitle: 'Shackleton Crater South Pole Colony',
    category: 'Lunar',
    desc: 'The ultimate weekend voyage. Experience one-sixth gravity sports, gaze upon the breathtaking blue marble of Earth, and tour the lunar polar ice extraction facilities.',
    distance: '384,400 km',
    duration: '3 Days Transit',
    gravity: '0.16g Surface',
    price: '$85,000',
    highlight: 'Weekly Departures',
    accentColor: 'from-zinc-400/20 to-gold/20',
  },
  {
    id: 'Orbital Hotel',
    title: 'Low Earth Orbit Luxury Suite',
    subtitle: 'Aura Station 400km Altitude',
    category: 'Orbital',
    desc: 'Orbit Earth every 90 minutes. Enjoy zero-gravity gourmet dining, panoramic aurora borealis viewports, and floating spa lounges suspended above the atmosphere.',
    distance: '408 km',
    duration: '5 Days Stay',
    gravity: 'Zero-G Microgravity',
    price: '$45,000',
    highlight: 'Zero-G Luxury',
    accentColor: 'from-gold/20 to-amber-500/20',
  },
  {
    id: 'Titan Explorer',
    title: 'Titan Deep Space Outpost',
    subtitle: 'Kraken Mare & Saturnian Ring View',
    category: 'Outer Rim',
    desc: 'The voyage of a lifetime into the Saturnian system. Float through Titan’s thick nitrogen atmosphere with wings and witness Saturn’s majestic rings spanning the heavens.',
    distance: '1,400,000,000 km',
    duration: '3.2 Years',
    gravity: '0.14g Surface',
    price: '$650,000',
    highlight: 'Deep Frontier 2028',
    accentColor: 'from-amber-600/20 to-amber-900/30',
  },
]

const CATEGORIES = ['All', 'Mars', 'Lunar', 'Orbital', 'Outer Rim']

export function Destinations() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const { open: openModal } = useReserveModal()

  const filtered =
    selectedCategory === 'All'
      ? DESTINATIONS
      : DESTINATIONS.filter((d) => d.category === selectedCategory)

  return (
    <section id="destinations" className="relative z-10 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-gold">
            <Compass className="h-3.5 w-3.5" />
            <span>Flight Schedule & Outposts</span>
          </div>

          <h2 className="mt-5 font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-normal text-white">
            Interplanetary Destinations
          </h2>
          <p className="mt-4 max-w-2xl text-base text-zinc-300 md:text-lg">
            Select your celestial destination across our scheduled commercial space routes.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  'rounded-full px-4 py-1.5 text-xs font-medium transition-all',
                  selectedCategory === cat
                    ? 'bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.4)]'
                    : 'border border-white/10 bg-cosmos-200/40 text-zinc-400 hover:border-white/20 hover:text-white',
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {filtered.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-cosmos-200/60 p-7 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 hover:border-gold/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] md:p-8"
            >
              {/* Card ambient glow gradient */}
              <div
                className={cn(
                  'pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-90',
                  dest.accentColor,
                )}
              />

              <div className="flex items-start justify-between">
                <span className="inline-flex items-center gap-1 rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-gold">
                  <Sparkles className="h-3 w-3" />
                  {dest.highlight}
                </span>
                <span className="font-mono text-sm font-bold text-white md:text-base">
                  From {dest.price}
                </span>
              </div>

              <h3 className="mt-5 font-serif text-2xl font-bold text-white md:text-3xl">
                {dest.title}
              </h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-wider text-gold/80">
                {dest.subtitle}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                {dest.desc}
              </p>

              {/* Specs Telemetry Row */}
              <div className="mt-6 grid grid-cols-3 gap-3 border-y border-white/10 py-3.5 text-xs font-mono">
                <div>
                  <span className="block text-[10px] text-muted-foreground uppercase">Distance</span>
                  <span className="font-semibold text-white">{dest.distance}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-muted-foreground uppercase">Flight Time</span>
                  <span className="font-semibold text-white">{dest.duration}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-muted-foreground uppercase">Gravity</span>
                  <span className="font-semibold text-white">{dest.gravity}</span>
                </div>
              </div>

              {/* Reserve Button */}
              <div className="mt-6 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => openModal(dest.id)}
                  className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-gold"
                >
                  <span>Book This Flight</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-gold" />
                </button>

                <span className="text-xs font-mono text-muted-foreground">
                  CABIN SPOTS LIMITED
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
