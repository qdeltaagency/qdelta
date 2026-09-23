'use client'

import { motion } from 'motion/react'
import { ArrowUpRight, Orbit } from 'lucide-react'
import { CosmicCanvas } from '@/components/three/cosmic-canvas'

const TICKER_ITEMS = [
  'Next.js',
  'Conversion',
  'Landing Pages',
  'Web Design',
  'Development',
  'Brand Systems',
  'UX Strategy',
  'Design Systems',
  'Webflow & Next.js',
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex w-full flex-col justify-between overflow-hidden bg-[#040406] pt-24 pb-0 sm:pt-28 md:pt-36 lg:min-h-[100svh] lg:pt-40"
    >
      {/* 3D WebGL Canvas & Glowing Horizon Beam */}
      <CosmicCanvas />

      {/* Main Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 sm:px-6 text-center my-auto py-4 sm:py-6 lg:py-0">
        {/* Main Display Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9, y: 16, filter: 'blur(6px)' }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic text-[clamp(1.9rem,6.5vw,5.5rem)] font-normal leading-[1.06] tracking-tight text-white drop-shadow-[0_2px_20px_rgba(255,255,255,0.15)] text-balance uppercase"
        >
          Turning Ideas Into <br className="hidden sm:inline" />
          Digital Experiences
        </motion.h1>

        {/* 3. Subtitle Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 sm:mt-6 max-w-2xl text-pretty text-sm sm:text-base leading-relaxed text-zinc-300 md:text-lg"
        >
          We turn ambitious ideas into digital experiences that are clear,
          engaging, and built to perform.
        </motion.p>

        {/* 4. Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-black transition-all hover:bg-gold hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-cosmos-200/40 px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-medium text-white backdrop-blur-md transition-all hover:border-gold/50 hover:bg-cosmos-200/80 hover:text-gold"
          >
            <Orbit className="h-4 w-4 text-gold" />
            <span>Explore Services</span>
          </a>
        </motion.div>
      </div>

      {/* 5. Bottom Infinite Capabilities Marquee Ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="relative z-10 mt-8 w-full overflow-hidden border-y border-white/10 bg-cosmos-400/50 py-3 backdrop-blur-md sm:mt-12 sm:py-3.5 lg:mt-auto"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
        }}
      >
        <div className="flex w-max animate-marquee items-center text-xs font-medium tracking-wide text-zinc-400 select-none md:text-sm">
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 pr-6 whitespace-nowrap">
              <span>{item}</span>
              <span className="inline-block h-1.5 w-1.5 rotate-45 bg-[#D4AF37] shadow-[0_0_6px_rgba(212,175,55,0.7)]" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
