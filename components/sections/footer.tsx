'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'

export function Footer() {
  return (
    <footer className="relative z-10 w-full bg-[#000000] border-t border-white/10 pt-20 pb-12 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 flex flex-col justify-between">
        
        {/* ============================================================
            TOP SECTION (The Grid - Tightly Grouped with Staggered Scroll Animations)
            ============================================================ */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-10 pb-16">
          {/* Column 1: Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block text-xs font-mono uppercase tracking-widest text-[#E5B869] mb-4">
              Navigation
            </span>
            <ul className="space-y-3 font-sans">

              <li>
                <a
                  href="/#services"
                  className="text-sm font-medium text-white transition-colors duration-200 hover:text-[#E5B869]"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/#process"
                  className="text-sm font-medium text-white transition-colors duration-200 hover:text-[#E5B869]"
                >
                  Process
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-sm font-medium text-white transition-colors duration-200 hover:text-[#E5B869]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 2: Socials */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block text-xs font-mono uppercase tracking-widest text-[#E5B869] mb-4">
              Socials
            </span>
            <ul className="space-y-3 font-sans">
              <li>
                <a
                  href="https://www.instagram.com/qdelta.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white transition-colors duration-200 hover:text-[#E5B869]"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/qdelta/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white transition-colors duration-200 hover:text-[#E5B869]"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white transition-colors duration-200 hover:text-[#E5B869]"
                >
                  Twitter/X
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/qdeltaagency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white transition-colors duration-200 hover:text-[#E5B869]"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Agency */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.19, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block text-xs font-mono uppercase tracking-widest text-[#E5B869] mb-4">
              Agency
            </span>
            <ul className="space-y-3 font-sans">
              <li>
                <a
                  href="mailto:hello@qdelta.in"
                  className="text-sm font-medium text-white transition-colors duration-200 hover:text-[#E5B869]"
                >
                  hello@qdelta.in
                </a>
              </li>
              <li className="text-sm text-zinc-300">
                &lt; 24h Response
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Inquiries */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block text-xs font-mono uppercase tracking-widest text-[#E5B869] mb-4">
              Inquiries
            </span>
            <ul className="space-y-3 font-sans">
              <li>
                <a
                  href="#contact"
                  className="text-sm font-medium text-white transition-colors duration-200 hover:text-[#E5B869]"
                >
                  Start a Project ↗
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm font-medium text-white transition-colors duration-200 hover:text-[#E5B869]"
                >
                  Schedule a Call
                </a>
              </li>
              <li className="text-xs text-zinc-400 font-mono">
                Agency NDA Protected
              </li>
            </ul>
          </motion.div>
        </div>

        {/* ============================================================
            BOTTOM SECTION (Clear, Bright & Legible Legal Row with Scroll Animation)
            ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/15 pt-8 mt-6 text-xs sm:text-sm text-zinc-200 font-medium"
        >
          <div>
            &copy; {new Date().getFullYear()} QDelta Agency. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-[#E5B869] text-zinc-200">
              Privacy Policy
            </Link>
            <span className="text-zinc-500">&bull;</span>
            <Link href="/terms" className="transition-colors hover:text-[#E5B869] text-zinc-200">
              Terms and Conditions
            </Link>
          </div>
        </motion.div>

      </div>
    </footer>
  )
}
