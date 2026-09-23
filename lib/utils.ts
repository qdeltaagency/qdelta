import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const COSMOS_COLORS = {
  background: '#040406',
  gold: '#D4AF37',
  goldLight: '#E5C07B',
  goldBright: '#FFD700',
  amber: '#F59E0B',
  flare: '#FF6B00',
  red: '#EF4444',
  champagneWhite: '#FFF8E7',
} as const
