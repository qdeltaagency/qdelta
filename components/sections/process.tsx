'use client'

import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Check } from 'lucide-react'

interface ProcessStep {
  number: string
  index: number
  title: string
  tagline: string
  description: string
  deliverables: string[]
}

const STEPS: ProcessStep[] = [
  {
    number: '01',
    index: 1,
    title: 'Plan',
    tagline: 'Strategy, Architecture & Scope',
    description:
      'We dissect your business goals, target audience, and competitive landscape to build a complete architectural blueprint and delivery roadmap before writing a single line of code.',
    deliverables: ['Strategy Blueprint', 'Information Architecture', 'Technical Roadmap'],
  },
  {
    number: '02',
    index: 2,
    title: 'Design',
    tagline: 'Visual Identity & Bespoke UI/UX',
    description:
      'We craft tailored design systems, bespoke typography hierarchies, and luxury art direction that establish immediate authority and brand prestige.',
    deliverables: ['Figma Design System', 'Art Direction', 'Responsive UI Suite'],
  },
  {
    number: '03',
    index: 3,
    title: 'Prototype',
    tagline: 'Interactive Motion & Tactile Physics',
    description:
      'High-fidelity clickable prototypes allow you to experience the exact feel, transitions, and micro-interactions of your future product on desktop and mobile.',
    deliverables: ['Clickable Prototypes', 'Motion Choreography', 'Interaction Previews'],
  },
  {
    number: '04',
    index: 4,
    title: 'Client Approval',
    tagline: 'Collaborative Review & Milestone Sign-Off',
    description:
      'Transparent milestone walkthroughs ensure every interface detail, animation curve, and user flow aligns seamlessly with your vision before engineering begins.',
    deliverables: ['Design Walkthrough', 'Feedback Revisions', 'Milestone Sign-Off'],
  },
  {
    number: '05',
    index: 5,
    title: 'Development',
    tagline: 'Next.js 16 & High-Performance Engineering',
    description:
      'Designs are translated into clean, modular TypeScript with Next.js 16 Server Components, custom GPU shaders, and custom AI agent pipelines.',
    deliverables: ['Next.js 16 & React 19', 'Edge API Pipelines', 'Custom AI Integrations'],
  },
  {
    number: '06',
    index: 6,
    title: 'Testing',
    tagline: 'QA, Cross-Device & Core Web Vitals',
    description:
      'Rigorous cross-browser verification, accessibility audits, and performance tuning guarantee a locked 60fps framerate and 100/100 Lighthouse score.',
    deliverables: ['Core Web Vitals 100/100', 'Cross-Device QA', 'Security Verification'],
  },
  {
    number: '07',
    index: 7,
    title: 'Production Deployment',
    tagline: 'Global Edge CDN & Instant DNS Launch',
    description:
      'We orchestrate a seamless worldwide edge rollout with automated SSL certificates, instant DNS propagation, and structured SEO schema indexing.',
    deliverables: ['Edge CDN Deployment', 'DNS & SSL Provisioning', 'Search Indexing'],
  },
  {
    number: '08',
    index: 8,
    title: 'Support',
    tagline: 'Continuous Telemetry & Scaling',
    description:
      'Our agency partnership continues post-launch with proactive error monitoring, real-time uptime telemetry, iterative feature scaling, and dedicated SLA support.',
    deliverables: ['Real-Time Telemetry', 'Feature Iteration', 'Dedicated Agency SLA'],
  },
]

export function Process() {
  const [activeStep, setActiveStep] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const currentStep = STEPS[activeStep]

  return (
    <section
      id="process"
      ref={containerRef}
      className="grid-bg relative z-10 w-full border-t border-white/10 text-white transition-colors duration-700"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Mobile-Only Section Header */}
        <div className="pt-16 pb-4 lg:hidden">
          <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal uppercase tracking-wide text-white drop-shadow-[0_2px_20px_rgba(255,255,255,0.1)]">
            Our <span className="text-gold">Process</span>
          </h2>
          <p className="mt-1 text-xs text-zinc-400">
            Precision at every stage.
          </p>
        </div>

        {/* 50/50 Split Sticky-Scroll Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* ============================================================
              LEFT COLUMN: Pinned / Sticky Massive Number & Step Tracker
              ============================================================ */}
          <div className="relative hidden lg:col-span-5 lg:block">
            <div className="sticky top-0 flex h-screen flex-col justify-between py-16 pr-8">
              
              {/* Top: Section Title */}
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] font-normal uppercase tracking-wide text-white drop-shadow-[0_2px_20px_rgba(255,255,255,0.1)]">
                  Our <span className="text-gold">Process</span>
                </h2>
                <p className="mt-1.5 text-xs text-zinc-400">
                  Precision at every stage.
                </p>
              </div>

              {/* Center: Refined Screen-Height Serif Number with Spring Transition */}
              <div className="relative my-auto py-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep.number}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 280,
                      damping: 26,
                    }}
                    className="flex flex-col"
                  >
                    <span className="block font-serif text-[clamp(3.5rem,6vw,5.5rem)] font-light leading-none tracking-tighter text-white select-none pb-2">
                      {currentStep.number}
                    </span>

                    <div className="mt-3 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                      <span className="font-mono text-xs uppercase tracking-widest text-gold">
                        Phase {currentStep.number} // {currentStep.title}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom: 8-Step Interactive Progress Bar */}
              <div className="space-y-3">
                <div className="grid grid-cols-8 gap-1.5">
                  {STEPS.map((s, idx) => {
                    const isPassedOrCurrent = idx <= activeStep
                    const isCurrent = idx === activeStep
                    return (
                      <button
                        key={s.number}
                        type="button"
                        onClick={() => {
                          const target = document.getElementById(`process-step-${idx}`)
                          target?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        title={`Step ${s.number}: ${s.title}`}
                        className="group py-2 focus:outline-none"
                      >
                        <div
                          className={`h-1.5 w-full rounded-full transition-all duration-300 ${
                            isCurrent
                              ? 'bg-gold shadow-[0_0_10px_rgba(212,175,55,0.6)]'
                              : isPassedOrCurrent
                              ? 'bg-white/40'
                              : 'bg-white/15'
                          }`}
                        />
                        <span
                          className={`mt-1 block text-center font-mono text-[9px] transition-colors ${
                            isCurrent ? 'font-bold text-gold' : 'text-zinc-500'
                          }`}
                        >
                          {s.number}
                        </span>
                      </button>
                    )
                  })}
                </div>

                <div className="flex items-center justify-end border-t border-white/10 pt-3 text-xs font-mono text-zinc-400">
                  <span className="font-semibold text-white">{currentStep.title}</span>
                </div>
              </div>

            </div>
          </div>

          {/* ============================================================
              RIGHT COLUMN: Scrollable Editorial 8-Step Stream
              ============================================================ */}
          <div className="lg:col-span-7 lg:border-l lg:border-white/10 lg:pl-16">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                id={`process-step-${index}`}
                onViewportEnter={() => setActiveStep(index)}
                viewport={{ amount: 0.45, margin: '-10% 0px -10% 0px' }}
                className="flex min-h-[65vh] flex-col justify-center border-b border-white/10 py-14 lg:py-20 last:border-b-0"
              >
                {/* Mobile-Only Number Indicator */}
                <div className="flex items-center justify-between lg:hidden mb-3">
                  <span className="font-serif text-4xl font-light text-white">
                    {step.number}
                  </span>
                </div>

                {/* Main Step Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="font-serif text-[clamp(1.85rem,3.2vw,2.75rem)] font-normal leading-[1.1] tracking-tight text-white"
                >
                  {step.title}
                </motion.h3>

                {/* Tagline */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mt-2.5 font-serif text-base italic text-gold/90 md:text-lg"
                >
                  &ldquo;{step.tagline}&rdquo;
                </motion.p>

                {/* Clean, Concise Description */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="mt-3.5 max-w-xl text-sm leading-relaxed text-zinc-300 md:text-base"
                >
                  {step.description}
                </motion.p>

                {/* Deliverables: Minimalist Clean Pill Tags */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-6 flex flex-wrap items-center gap-2"
                >
                  {step.deliverables.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-zinc-200 shadow-sm backdrop-blur-md"
                    >
                      <Check className="h-3 w-3 text-gold stroke-[2.5]" />
                      <span>{item}</span>
                    </span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
