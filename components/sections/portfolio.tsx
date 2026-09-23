'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Sparkles, ArrowUpRight, Layers, Cpu, Globe2, ShieldCheck } from 'lucide-react'

interface Project {
  id: string
  title: string
  client: string
  category: string
  year: string
  tags: string[]
  description: string
  metric: string
  metricLabel: string
  accentColor: string
  gradientBg: string
}

const PROJECTS: Project[] = [
  {
    id: 'aetheria',
    title: 'Aetheria Neural Canvas',
    client: 'Aetheria Labs',
    category: 'Enterprise AI & Platform Architecture',
    year: '2026',
    tags: ['Next.js 16', 'Autonomous LLMs', 'Edge CDN', 'Three.js'],
    description:
      'Architected a distributed operating system for real-time neural data streaming, autonomous agent collaboration, and ultra-low latency compute pipelines.',
    metric: '+340%',
    metricLabel: 'Compute Processing Velocity',
    accentColor: '#E5B869',
    gradientBg: 'from-amber-950/40 via-neutral-900/60 to-black',
  },
  {
    id: 'vespera',
    title: 'Vespera Haute Horlogerie',
    client: 'Vespera Geneve',
    category: 'Luxury eCommerce & 3D Interactive',
    year: '2025',
    tags: ['WebGL Shaders', 'Headless Shopify', 'Kinetic UI', 'Tailwind'],
    description:
      'Engineered an immersive 3D timepiece configurator and bespoke editorial eCommerce experience for Swiss luxury artisans with 60FPS fluid physics.',
    metric: '4.2x',
    metricLabel: 'Checkout Conversion Lift',
    accentColor: '#C5A880',
    gradientBg: 'from-stone-900/50 via-neutral-900/60 to-black',
  },
  {
    id: 'solstice',
    title: 'Solstice Liquidity Protocol',
    client: 'Solstice Capital',
    category: 'Fintech & High-Frequency Systems',
    year: '2025',
    tags: ['Rust Edge Workers', 'WebSockets', 'Next.js', 'Telemetry'],
    description:
      'Built a sub-5ms institutional asset terminal handling over $2.8B in multi-chain institutional trading volume with real-time risk simulation.',
    metric: '$2.8B+',
    metricLabel: 'Quarterly Volume Settled',
    accentColor: '#E5B869',
    gradientBg: 'from-yellow-950/30 via-neutral-900/60 to-black',
  },
  {
    id: 'kroma',
    title: 'Kroma Generative Studio',
    client: 'Kroma Dynamics',
    category: 'Creative Tooling & WebAssembly',
    year: '2026',
    tags: ['WASM', 'Canvas API', 'GPU Shaders', 'React 19'],
    description:
      'Next-generation generative design playground enabling creative teams to synthesize dynamic brand assets and kinetic typography at enterprise scale.',
    metric: '140K+',
    metricLabel: 'Active Global Creators',
    accentColor: '#D4AF37',
    gradientBg: 'from-amber-900/30 via-neutral-900/60 to-black',
  },
]

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>('All')
  const categories = ['All', 'Enterprise AI', 'Luxury Web', 'Fintech']

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category.toLowerCase().includes(activeFilter.toLowerCase()))

  return (
    <section
      id="portfolio"
      className="relative z-20 w-full overflow-hidden bg-[#000000] py-28 text-white border-t border-white/10 md:py-36"
    >
      {/* Ambient Silk Gold Lighting */}
      <div className="pointer-events-none absolute top-1/4 right-1/4 h-[35rem] w-[35rem] rounded-full bg-gradient-to-br from-gold/10 via-amber-600/5 to-transparent blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/3 left-1/4 h-[30rem] w-[30rem] rounded-full bg-gradient-to-tl from-gold/10 via-amber-500/5 to-transparent blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-zinc-300"
            >
              <Sparkles className="h-3 w-3 text-gold" />
              <span>Selected Works</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] font-normal tracking-tight text-white leading-[1.05]"
            >
              Crafted for <span className="italic font-serif text-gold">Industry Leaders.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base"
            >
              A curated selection of bespoke platforms, luxury brand flagships, and autonomous AI systems built for unmatched performance.
            </motion.p>
          </div>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-white text-black font-semibold shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                    : 'border border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* 2x2 Interactive Showcase Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950/60 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-500 hover:border-[#E5B869]/40 hover:shadow-[0_20px_60px_rgba(229,184,105,0.1)]"
            >
              {/* Subtle Atmospheric Gradient Top Light */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${project.gradientBg} opacity-50 transition-opacity duration-500 group-hover:opacity-80`}
              />

              <div className="relative z-10">
                {/* Header: Client & Year */}
                <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#E5B869]">
                    {project.client}
                  </span>
                  <span className="font-mono text-xs text-zinc-500">
                    {project.year}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-serif text-3xl font-light text-white transition-colors duration-300 group-hover:text-gold sm:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
                  {project.category}
                </p>

                {/* Description */}
                <p className="mt-5 text-sm leading-relaxed text-zinc-300">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer: Metric & Action */}
              <div className="relative z-10 mt-10 flex items-end justify-between border-t border-white/10 pt-6">
                <div>
                  <div className="font-mono text-2xl font-light tracking-tight text-white sm:text-3xl">
                    {project.metric}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                    {project.metricLabel}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="group/link inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-[#E5B869] hover:bg-[#E5B869] hover:text-black hover:shadow-[0_0_20px_rgba(229,184,105,0.4)]"
                >
                  <span>Start Inquiry</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
