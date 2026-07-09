import { cn } from '@/shared/lib/cn'
import type { HTMLAttributes } from 'react'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'active'
}

export function Badge({ variant = 'default', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors',
        {
          'bg-surface border border-border text-text-muted': variant === 'default',
          'bg-accent/20 text-accent-glow border border-accent/30': variant === 'active',
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
