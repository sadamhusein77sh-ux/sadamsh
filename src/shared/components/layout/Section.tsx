import type { ReactNode, RefObject } from 'react'
import { cn } from '@/shared/lib/cn'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
  ref?: RefObject<HTMLElement | null>
}

export function Section({ id, children, className, ref }: SectionProps) {
  return (
    <section id={id} ref={ref} className={cn('py-20 md:py-24 px-6', className)}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  )
}
