import { cn } from '@/lib/utils'

/**
 * QDelta brand logo mark — cursive italic script styled for modern luxury.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('inline-flex items-center gap-1 font-serif select-none', className)}>
      <span className="text-2xl italic font-bold tracking-tight text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] md:text-3xl">
        QDelta<span className="text-primary not-italic text-lg md:text-xl">.</span>
      </span>
    </div>
  )
}
