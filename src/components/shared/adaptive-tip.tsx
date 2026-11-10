'use client'

import type * as React from 'react'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useCanHover } from '@/hooks/use-can-hover'
import { cn } from '@/lib/utils'

interface AdaptiveTipProps {
  /** Elemento que abre a explicação (precisa aceitar ref e props, ex.: `button`). */
  trigger: React.ReactElement
  /** Título do Drawer no touch (anunciado por leitores de tela). */
  title: string
  children: React.ReactNode
  /** Repete o `title` em negrito no topo do tooltip do desktop. */
  showTitleInTooltip?: boolean
  side?: 'top' | 'bottom' | 'left' | 'right'
  /** Classes do conteúdo do tooltip (largura máxima etc.). */
  contentClassName?: string
}

/**
 * Explicação contextual: Tooltip em dispositivos com hover e Drawer
 * (bottom sheet) ao toque em dispositivos touch.
 */
export function AdaptiveTip({
  trigger,
  title,
  children,
  showTitleInTooltip = false,
  side = 'top',
  contentClassName,
}: AdaptiveTipProps) {
  const canHover = useCanHover()

  if (canHover) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{trigger}</TooltipTrigger>
        <TooltipContent
          side={side}
          className={cn(
            'max-w-xs text-left text-xs leading-relaxed sm:max-w-sm',
            contentClassName
          )}
        >
          {showTitleInTooltip && <p className="mb-1 font-semibold">{title}</p>}
          {children}
        </TooltipContent>
      </Tooltip>
    )
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-lg flex-col">
          <DrawerHeader className="text-left group-data-[vaul-drawer-direction=bottom]/drawer-content:text-left">
            <DrawerTitle>{title}</DrawerTitle>
          </DrawerHeader>
          <DrawerDescription
            asChild
            className="flex flex-col gap-2 overflow-y-auto px-4 leading-relaxed text-foreground"
          >
            <div>{children}</div>
          </DrawerDescription>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Entendi</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
