'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Zap, CheckCircle2, Check, ArrowUpRight } from 'lucide-react'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [details, setDetails] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    setName('')
    setEmail('')
    setDetails('')
  }

  return (
    <section
      id="contact"
      className="relative z-10 w-full bg-[#000000] border-t border-white/10 py-24 text-white sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-16 items-stretch">
          
          {/* ============================================================
              LEFT SIDE (The Hook)
              ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between lg:col-span-6"
          >
            <div>
              {/* Massive Oversized Display Text */}
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-[clamp(4.5rem,10vw,8.5rem)] font-normal leading-[0.88] tracking-tight text-white select-none"
              >
                Let&apos;s <br />
                Talk.
              </motion.h2>

              {/* Subtle Descriptive Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-8 max-w-md text-lg text-neutral-400 font-light leading-relaxed md:text-xl"
              >
                Have an ambitious idea? Let&apos;s engineer it.
              </motion.p>
            </div>

            {/* Bottom Left Two-Column Value Props Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-2 gap-6 pt-16 mt-16 border-t border-neutral-900 lg:pt-20 lg:mt-auto"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#E5B869]">
                    <Zap className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-semibold tracking-wide text-white">
                    Quick Response
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-neutral-500">
                  Guaranteed turnaround within 24 hours.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#E5B869]">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-semibold tracking-wide text-white">
                    Clear Execution
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-neutral-500">
                  Fixed scopes, clean milestones, locked code.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ============================================================
              RIGHT SIDE (The Dark Frosted Glass Form Card)
              ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex items-center"
          >
            <div className="w-full rounded-[2.5rem] border border-white/10 bg-neutral-900/50 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl sm:p-12 md:p-14">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="contact-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    className="flex min-h-[380px] flex-col items-center justify-center py-6 text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#E5B869]/60 bg-[#E5B869]/10 text-[#E5B869] shadow-[0_0_30px_rgba(229,184,105,0.3)]">
                      <Check className="h-8 w-8 stroke-[2.5]" />
                    </div>
                    <h3 className="mt-6 font-serif text-3xl font-normal text-white sm:text-4xl">
                      Inquiry Received.
                    </h3>
                    <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-neutral-400">
                      Thank you, <strong className="text-white">{name}</strong>. We will review your project requirements and follow up at <span className="font-medium text-[#E5B869]">{email}</span> within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="mt-8 rounded-full bg-white px-8 py-3 text-xs font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:bg-[#E5B869] hover:text-black hover:shadow-[0_0_20px_rgba(229,184,105,0.4)] cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-8">
                      <h3 className="font-serif text-2xl font-normal tracking-tight text-white sm:text-3xl">
                        Have a project in mind?
                      </h3>
                      <p className="mt-1 text-xs text-neutral-400">
                        Fill in your details below and we&apos;ll get back to you promptly.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name Field */}
                      <div>
                        <label
                          htmlFor="asym-name"
                          className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400"
                        >
                          How should we call you?*
                        </label>
                        <input
                          id="asym-name"
                          type="text"
                          required
                          placeholder="Your full name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-white placeholder:text-neutral-500 outline-none transition-all duration-300 focus:border-[#E5B869] focus:bg-white/10 focus:ring-1 focus:ring-[#E5B869] focus:shadow-[0_0_20px_rgba(229,184,105,0.15)]"
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label
                          htmlFor="asym-email"
                          className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400"
                        >
                          Email
                        </label>
                        <input
                          id="asym-email"
                          type="email"
                          required
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-white placeholder:text-neutral-500 outline-none transition-all duration-300 focus:border-[#E5B869] focus:bg-white/10 focus:ring-1 focus:ring-[#E5B869] focus:shadow-[0_0_20px_rgba(229,184,105,0.15)]"
                        />
                      </div>

                      {/* Project Details Textarea */}
                      <div>
                        <label
                          htmlFor="asym-details"
                          className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-400"
                        >
                          Project Details
                        </label>
                        <textarea
                          id="asym-details"
                          required
                          rows={4}
                          placeholder="Tell us about your project goals, scope, and timeline..."
                          value={details}
                          onChange={(e) => setDetails(e.target.value)}
                          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-white placeholder:text-neutral-500 outline-none transition-all duration-300 focus:border-[#E5B869] focus:bg-white/10 focus:ring-1 focus:ring-[#E5B869] focus:shadow-[0_0_20px_rgba(229,184,105,0.15)]"
                        />
                      </div>

                      {/* High-Contrast Solid White Submit Button with Gold Hover */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="group flex w-full items-center justify-center gap-2 rounded-full bg-white py-4.5 text-sm font-semibold tracking-wide text-black transition-all duration-300 hover:bg-[#E5B869] hover:text-black hover:shadow-[0_0_35px_rgba(229,184,105,0.45)] cursor-pointer"
                        >
                          <span>Submit Inquiry</span>
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                      </div>

                      <p className="text-center text-[11px] text-neutral-500">
                        Protected by confidentiality &amp; Agency NDA.
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
