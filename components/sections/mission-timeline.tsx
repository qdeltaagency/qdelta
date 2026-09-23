'use client'

import { motion } from 'motion/react'
import { CheckCircle2, Rocket, Compass, Sparkles, Flag } from 'lucide-react'

const STEPS = [
  {
    step: '01',
    title: 'Astronaut Certification & Conditioning',
    duration: '3 Weeks Pre-Launch',
    location: 'QDelta Spaceport Mojave & Florida',
    desc: 'Comprehensive microgravity training, biometric tailoring, vestibular centrifuge adaptation, and custom spacesuit fitting.',
  },
  {
    step: '02',
    title: 'Orbital Insertion & Ascent',
    duration: 'T+ 00:08:42 Minutes',
    location: 'Launch Complex 39B',
    desc: 'Heavy-lift rocket ascent with 3.2g peak thrust. Transition to zero-gravity orbital parking track over the Atlantic.',
  },
  {
    step: '03',
    title: 'Deep Space Cruise & Transit',
    duration: 'Mission Specific Window',
    location: 'Interplanetary Space Corridor',
    desc: 'Enjoy artificial gravity habitat suites, fine dining, astronomy lectures, and stunning viewports as Earth recedes into the distance.',
  },
  {
    step: '04',
    title: 'Planetary Aerobraking & Touchdown',
    duration: 'Touchdown Day',
    location: 'Destination Outpost Port',
    desc: 'Precision atmospheric deceleration, heat shield dispersal, and soft vertical touchdown on the surface of Mars or Lunar port.',
  },
]

export function MissionTimeline() {
  return (
    <section id="missions" className="relative z-10 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-gold">
            <Rocket className="h-3.5 w-3.5" />
            <span>Flight Protocol & Experience</span>
          </div>

          <h2 className="mt-5 font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-normal text-white">
            The Mission Journey
          </h2>
          <p className="mt-4 max-w-2xl text-base text-zinc-300 md:text-lg">
            From pre-flight training to interplanetary touchdown — your path to the stars.
          </p>
        </div>

        <div className="mt-16 relative">
          {/* Subtle gold connecting line on desktop */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/30 to-transparent lg:block" />

          <div className="flex flex-col gap-10 lg:gap-14">
            {STEPS.map((step, i) => {
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="inline-flex items-center gap-2 text-xs font-mono text-gold font-bold">
                      <span>PHASE {step.step}</span>
                      <span className="h-1 w-1 rounded-full bg-gold" />
                      <span className="text-zinc-400">{step.duration}</span>
                    </div>

                    <h3 className="mt-2 font-serif text-2xl font-bold text-white md:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs font-mono text-zinc-400">
                      {step.location}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                      {step.desc}
                    </p>
                  </div>

                  {/* Center Node Indicator */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/60 bg-cosmos-100 shadow-[0_0_25px_rgba(212,175,55,0.4)] text-gold">
                    <span className="font-mono text-sm font-bold">{step.step}</span>
                  </div>

                  <div className="hidden lg:block lg:w-1/2" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
