'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Logo } from './logo'
import { cn } from '@/lib/utils'

const LINKS = [
  { label: 'Services', href: '/#services' },
  { label: 'Process', href: '/#process' },
  { label: 'Contact', href: '/#contact' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-5 md:px-12"
      >
        {/* Brand Logo */}
        <a href="/#home" className="group flex items-center gap-2 focus:outline-none">
          <Logo />
        </a>

        {/* Floating Glass Pill Navigation Bar */}
        <div
          className={cn(
            'hidden items-center gap-1 rounded-full border px-2 py-1.5 transition-all duration-300 md:flex',
            scrolled
              ? 'border-white/15 bg-cosmos-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl'
              : 'border-white/10 bg-cosmos-200/50 backdrop-blur-md',
          )}
        >
          <nav className="flex items-center gap-1 px-2">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Start a Project Pill Button -> Scrolls smoothly to #contact */}
          <a
            href="/#contact"
            className="group ml-2 inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-all hover:bg-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-cosmos-200/60 text-white backdrop-blur-md md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 flex flex-col bg-cosmos-500/95 px-8 pt-28 pb-10 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="border-b border-white/10 pb-4 font-serif text-2xl font-medium text-white"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="mt-8">
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="block w-full rounded-full bg-white py-3.5 text-center text-sm font-semibold text-black hover:bg-gold transition-colors"
              >
                Start a Project ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
