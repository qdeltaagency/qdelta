'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

interface IntroPreloaderProps {
  onComplete?: () => void
}

export function IntroPreloader({ onComplete }: IntroPreloaderProps) {
  const [isExiting, setIsExiting] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState<boolean>(true)

  // Skip handler
  const handleComplete = () => {
    if (isExiting) return
    setIsExiting(true)
    setTimeout(() => {
      setIsVisible(false)
      onComplete?.()
    }, 650)
  }

  // Keyboard shortcut listener (ESC to skip)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleComplete()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isExiting])

  // Scroll lock while preloader is active
  useEffect(() => {
    if (isVisible) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [isVisible])

  // Timing animation (Fast snappy 1.2s agency reveal)
  useEffect(() => {
    const timer = setTimeout(() => {
      handleComplete()
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: {
              duration: 0.75,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#000000] p-6 text-white md:p-12 select-none"
          style={{ perspective: 1200 }}
        >
          {/* Ambient Silk Background Glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(229,184,105,0.08),transparent_70%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.03),transparent_40%)]" />

          {/* Center Stage: Pure Display Headline & Expanding Laser Beam with 3D Z-axis mapping */}
          <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.95, filter: 'blur(6px)' }}
              animate={{
                opacity: isExiting ? 0 : 1,
                scale: isExiting ? 1.45 : 1,
                y: isExiting ? -20 : 0,
                filter: isExiting ? 'blur(6px)' : 'blur(0px)',
              }}
              transition={{
                duration: isExiting ? 0.65 : 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex w-full flex-col items-center gap-5"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* High-Impact Display Headline (Style 1: Luxury Contrast) */}
              <h1 className="max-w-2xl text-xl font-light tracking-tight text-zinc-300 sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.2]">
                Turning Ideas Into{' '}
                <span className="font-serif italic font-normal text-white drop-shadow-[0_2px_20px_rgba(255,255,255,0.25)]">
                  Digital Experiences
                </span>
              </h1>

              {/* Illuminated Expanding Laser Beam */}
              <motion.div
                animate={{
                  opacity: isExiting ? 0 : 1,
                  scale: isExiting ? 1.3 : 1,
                }}
                transition={{ duration: 0.5 }}
                className="relative my-1 w-full max-w-md"
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_16px_rgba(255,255,255,0.9)]"
                />
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#E5B869] to-transparent blur-[2px]"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
