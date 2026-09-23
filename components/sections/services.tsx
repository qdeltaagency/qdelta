'use client'

import React from 'react'
import { motion } from 'motion/react'
import {
  Code2,
  Bot,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'

const SERVICES = [
  {
    number: '01 //',
    icon: Sparkles,
    title: 'High-Converting Landing Pages',
    desc: 'Visually arresting, story-driven landing pages designed to capture interest immediately and drive maximum conversion.',
  },
  {
    number: '02 //',
    icon: Code2,
    title: 'Web Design & Full-Stack Engineering',
    desc: 'Custom, ultra-fast applications and brand websites engineered with Next.js, React, TypeScript, and fluid micro-animations.',
  },
  {
    number: '03 //',
    icon: Bot,
    title: 'AI Solutions & Smart Workflows',
    desc: 'Transforming digital solutions with custom LLM integrations, autonomous AI agents, and automated operational pipelines.',
  },
]

export function Services() {
  return (
    <section id="services" className="relative z-10 border-t border-white/10 bg-cosmos-400/50 py-28 md:py-36">
      {/* Ambient background soft glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[35rem] w-[55rem] rounded-full bg-gradient-to-b from-gold/10 via-amber-500/5 to-transparent blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-[clamp(2.5rem,5.5vw,4.25rem)] font-normal uppercase tracking-wide text-white drop-shadow-[0_2px_20px_rgba(255,255,255,0.1)]"
          >
            Our Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base"
          >
            We merge luxury aesthetics, cutting-edge engineering, and intelligent AI solutions to create digital experiences that drive active growth.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-2 max-w-xl text-xs leading-relaxed text-zinc-400 md:text-sm"
          >
            We are defined by uncompromising high-impact craft and bespoke digital experiences.
          </motion.p>
        </motion.div>

        {/* 3x2 Grid with Staggered Scroll Reveal & Hover Elevate */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 45, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.65,
                delay: i * 0.09,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.25, ease: 'easeOut' },
              }}
              className="group relative flex flex-col justify-between rounded-2xl border border-gold/30 bg-[#0c0c12]/85 p-7 backdrop-blur-xl transition-colors duration-300 hover:border-gold/70 hover:bg-[#101018]/95 hover:shadow-[0_12px_40px_rgba(212,175,55,0.22)]"
            >
              <div>
                {/* Top Row: Number & Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-semibold text-gold">
                    {service.number}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition-all duration-300 group-hover:scale-110 group-hover:border-gold/40 group-hover:bg-gold/10 group-hover:text-gold">
                    <service.icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-7 font-sans text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-gold">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs leading-relaxed text-zinc-400 md:text-sm">
                  {service.desc}
                </p>
              </div>

              {/* Bottom Row: Learn More Button with Arrow */}
              <div className="mt-8 flex items-center justify-end border-t border-white/5 pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 transition-colors duration-300 group-hover:text-gold"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
