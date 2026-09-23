'use client'

import { motion } from 'motion/react'
import { Quote, Star } from 'lucide-react'

const REVIEWS = [
  {
    name: 'Dr. Marcus Sterling',
    role: 'Civilian Flight Specialist • LEO Orbit 2025',
    quote:
      'Standing at the observation cupola looking down at the illuminated continents of Earth while drinking espresso in microgravity is an experience that permanently alters your perspective on human existence.',
    flight: 'Mission Aura-04',
  },
  {
    name: 'Elena Rostova',
    role: 'Astrophysicist & Passenger • Moon Base Alpha',
    quote:
      'The transition to zero-gravity was so graceful thanks to the QDelta Odyssey’s variable-vector thrust. The cabin amenities felt like a boutique luxury hotel floating between worlds.',
    flight: 'Lunar Gateway 02',
  },
  {
    name: 'Kenji Takahashi',
    role: 'Architect & Mars Colonist Candidate',
    quote:
      'QDelta has accomplished what aerospace engineers only dreamed of for a half century: reliable, opulent, commercial space exploration accessible to civilian pioneers.',
    flight: 'Mars Pre-Flight Alpha',
  },
]

export function Testimonials() {
  return (
    <section id="about" className="relative z-10 border-t border-white/10 bg-cosmos-200/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-gold">
            <Star className="h-3.5 w-3.5" />
            <span>Pioneer Flight Logs</span>
          </div>

          <h2 className="mt-5 font-serif text-[clamp(2rem,4.5vw,3.5rem)] font-normal text-white">
            Words from the Cosmos
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEWS.map((rev, i) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-cosmos-100/60 p-7 shadow-lg backdrop-blur-md hover:border-gold/30 transition-all"
            >
              <Quote className="h-8 w-8 text-gold/30" />

              <p className="mt-4 text-sm leading-relaxed italic text-zinc-300">
                "{rev.quote}"
              </p>

              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="font-serif font-bold text-white">{rev.name}</div>
                <div className="text-xs text-muted-foreground">{rev.role}</div>
                <div className="mt-2 font-mono text-[10px] text-gold font-semibold uppercase">
                  {rev.flight}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
