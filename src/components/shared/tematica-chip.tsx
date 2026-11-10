'use client'

import { Info } from 'lucide-react'
import { toast } from 'sonner'
import { AdaptiveTip } from '@/components/shared/adaptive-tip'
import { FilterPill } from '@/components/shared/filter-pill'
import type { NivelKey } from '@/data/indicators'
import { motivoTematicaDesabilitada } from '@/data/tematicas'
import { useCanHover } from '@/hooks/use-can-hover'
import { cn } from '@/lib/utils'

type TematicaChipProps = {
  nome: string
  nivel: NivelKey
  temCobertura: boolean
  active?: boolean
  onSelect?: () => void
  className?: string
}

export function TematicaChip({
  nome,
  nivel,
  temCobertura,
  active = false,
  onSelect,
  className,
}: TematicaChipProps) {
  const canHover = useCanHover()
  const motivo = motivoTematicaDesabilitada(nivel, temCobertura)
  const desabilitado = Boolean(motivo)

  function handleClick() {
    if (desabilitado) {
      // No touch, o próprio toque abre o Drawer com o motivo.
      if (!canHover) return
      toast(motivo, {
        position: 'bottom-right',
      })
      return
    }
    onSelect?.()
  }

  const chip = (
    <FilterPill
      active={active && !desabilitado}
      disabled={false}
      onClick={handleClick}
      aria-disabled={desabilitado}
      className={cn(
        'group relative',
        desabilitado && 'cursor-not-allowed opacity-60',
        className
      )}
    >
      {nome}
      {desabilitado && (
        <Info className="size-3.5 shrink-0 opacity-70" aria-hidden="true" />
      )}
    </FilterPill>
  )

  if (!motivo) return chip

  return (
    <AdaptiveTip title={nome} trigger={chip}>
      <p>{motivo}</p>
    </AdaptiveTip>
  )
}
