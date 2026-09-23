'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { Sparkles, ArrowUpRight } from 'lucide-react'

interface TeamMember {
  id: string
  number: string
  name: string
  role: string
  discipline: string
  image: string
  bio: string
  portfolioUrl: string
}

const TEAM_ROSTER: TeamMember[] = [
  {
    id: 'md-qais',
    number: '01',
    name: 'MD Qais',
    role: 'Creative Direction & Motion',
    discipline: 'Bespoke Art Direction • Luxury Identity • Physics Choreography',
    image: '/team/md-qais-portrait.jpg',
    bio: 'Crafting unforgettable visual languages, bespoke typography hierarchies, and tactile motion choreography that elevate digital experiences into timeless luxury.',
    portfolioUrl: 'https://www.linkedin.com',
  },
  {
    id: 'sai-prabhath',
    number: '02',
    name: 'Nagireddy Sai Prabhath',
    role: 'Full-Stack Engineering & AI',
    discipline: 'Next.js 16 • Autonomous LLM Systems • Edge Architecture',
    image: '/team/sai-prabhath-custom.jpg',
    bio: 'Architecting ultra-high performance edge systems, GPU-accelerated micro-interactions, and autonomous AI agent pipelines for next-generation digital flagships.',
    portfolioUrl: 'http://localhost:3001',
  },
  {
    id: 'md-fazeel',
    number: '03',
    name: 'MD Fazeel',
    role: 'Chief Architecture & Systems',
    discipline: 'Cloud Infrastructure • Edge CDN • Enterprise Security',
    image: '/team/md-fazeel-portrait.jpg',
    bio: 'Overseeing global low-latency cloud infrastructure, distributed Next.js server components, and rigorous enterprise security verification protocols.',
    portfolioUrl: 'https://www.linkedin.com',
  },
]

export function Team() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const activeMember = TEAM_ROSTER[activeIndex]

  return (
    <section
      id="team"
      className="relative z-20 w-full overflow-hidden bg-[#000000] py-28 text-white transition-colors duration-700 md:py-36"
    >
      {/* Pitch Black Ambient Golden Radial Glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/4 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-gold/10 via-amber-600/5 to-transparent blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[35rem] w-[35rem] rounded-full bg-gradient-to-tl from-gold/10 via-amber-500/5 to-transparent blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-zinc-300"
          >
            <Sparkles className="h-3 w-3 text-gold" />
            <span>The Collective</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] font-normal tracking-tight text-white"
          >
            Meet the <span className="italic font-serif text-gold">Team.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base"
          >
            A multidisciplinary agency of engineers, art directors, and architects building the future of digital flagships.
          </motion.p>
        </div>

        {/* Cinematic Hover Roster Grid */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">

          {/* ============================================================
              LEFT SIDE: Vertical Menu List of Massive Team Names
              Placement C (Left Row): ↳ View Selected Works ↗ • LinkedIn ↗
              ============================================================ */}
          <div className="space-y-4 lg:col-span-7">
            {TEAM_ROSTER.map((member, idx) => {
              const isActive = activeIndex === idx

              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className="group relative cursor-pointer border-b border-white/10 pb-8 pt-4 transition-all duration-300"
                >
                  <div className="flex flex-col">
                    {/* Name row */}
                    <div>
                      <h3
                        className={`font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-light tracking-tight transition-all duration-500 select-none ${isActive
                          ? 'text-white translate-x-2'
                          : 'text-neutral-600 group-hover:text-neutral-300'
                          }`}
                      >
                        {member.name}
                      </h3>
                    </div>

                    {/* Glowing Gold Monospace Sub-Label for Role */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: 'auto' }}
                          exit={{ opacity: 0, y: 6, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="mt-3 overflow-hidden pl-2"
                        >
                          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-gold shadow-[0_0_15px_rgba(212,175,55,0.25)]">
                            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                            <span>{member.role}</span>
                          </div>

                          <p className="mt-2 text-xs text-neutral-400 sm:text-sm">
                            {member.discipline}
                          </p>

                          {/* Placement C (Left): Subtle Interactive Link (White default -> Gold hover) */}
                          <div className="mt-3">
                            <a
                              href={member.portfolioUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="group/link inline-flex items-center gap-1.5 font-mono text-xs text-white transition-all duration-300 hover:text-gold underline underline-offset-4 decoration-white/30 hover:decoration-gold"
                            >
                              <span className="text-white transition-colors duration-300 group-hover/link:text-gold font-bold">↳</span>
                              <span>View Selected Works</span>
                              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* ============================================================
              RIGHT SIDE: Dark Canvas / Image Reveal Window
              Placement C (Right): Elevated Luxury Pill Button [ View Selected Works ↗ ]
              ============================================================ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/80 shadow-[0_20px_50px_rgba(0,0,0,0.9)] backdrop-blur-xl">

              {/* Subtle Gold Ambient Corner Highlight */}
              <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="pointer-events-none absolute -top-16 -right-16 z-20 h-40 w-40 rounded-full bg-gold/20 blur-2xl" />

              {/* Framer Motion Crossfade Image Reveal */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMember.id}
                  initial={{ opacity: 0, scale: 1.04, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.96, filter: 'blur(6px)' }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 h-full w-full"
                >
                  <Image
                    src={activeMember.image}
                    alt={activeMember.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    priority
                    className="object-cover object-top grayscale contrast-125 transition-transform duration-700 hover:scale-105"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Bottom Info Overlay inside Reveal Canvas */}
              <div className="absolute inset-x-0 bottom-0 z-30 p-6 sm:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMember.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="space-y-3"
                  >
                    <div className="font-mono text-xs uppercase tracking-widest text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]">
                      {activeMember.role}
                    </div>

                    <h4 className="font-serif text-2xl font-light text-white">
                      {activeMember.name}
                    </h4>

                    <p className="text-xs leading-relaxed text-neutral-300 sm:text-sm">
                      {activeMember.bio}
                    </p>

                    {/* Placement C (Right Card): Elevated Luxury Pill Button */}
                      <div className="pt-2">
                        <a
                          href={activeMember.portfolioUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn inline-flex items-center gap-2 rounded-full border border-gold/40 bg-neutral-950/70 px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-gold shadow-[0_0_15px_rgba(212,175,55,0.15)] backdrop-blur-md transition-all duration-300 hover:border-gold hover:bg-neutral-900/90 hover:text-gold hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 cursor-pointer"
                        >
                          <span>View Selected Works</span>
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </a>
                      </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
