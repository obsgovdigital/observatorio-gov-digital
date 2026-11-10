'use client'

import { Info } from 'lucide-react'
import type * as React from 'react'
import { AdaptiveTip } from '@/components/shared/adaptive-tip'
import { cn } from '@/lib/utils'

type InfoTipProps = {
  label: string
  children: React.ReactNode
  side?: 'top' | 'bottom' | 'left' | 'right'
  className?: string
  /** Classes do conteúdo do tooltip (largura máxima etc.). */
  contentClassName?: string
}

/**
 * Ícone Info com explicação — glossário no ponto de uso.
 * Tooltip no desktop; Drawer ao toque em dispositivos touch.
 */
export function InfoTip({
  label,
  children,
  side = 'top',
  className,
  contentClassName,
}: InfoTipProps) {
  return (
    <AdaptiveTip
      title={label}
      side={side}
      contentClassName={contentClassName}
      trigger={
        <button
          type="button"
          aria-label={label}
          className={cn(
            'relative inline-flex size-5 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
            "pointer-coarse:after:absolute pointer-coarse:after:-inset-3 pointer-coarse:after:content-['']",
            className
          )}
        >
          <Info className="size-3.5" aria-hidden="true" />
        </button>
      }
    >
      {children}
    </AdaptiveTip>
  )
}
