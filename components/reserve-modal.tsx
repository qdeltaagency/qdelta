'use client'

import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from 'react'

type ReserveModalContextValue = {
  open: (defaultTopic?: string) => void
  close: () => void
  isOpen: boolean
}

const ReserveModalContext = createContext<ReserveModalContextValue | null>(null)

export function useReserveModal() {
  const ctx = useContext(ReserveModalContext)
  if (!ctx) {
    throw new Error('useReserveModal must be used within ReserveModalProvider')
  }
  return ctx
}

export function ReserveModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => {
    // Navigate smoothly to the inline contact section instead of opening popup
    const target = document.getElementById('contact')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const close = useCallback(() => setIsOpen(false), [])

  return (
    <ReserveModalContext.Provider value={{ open, close, isOpen }}>
      {children}
    </ReserveModalContext.Provider>
  )
}
