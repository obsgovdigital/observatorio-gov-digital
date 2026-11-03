'use client'

import { Info } from 'lucide-react'
import { toast } from 'sonner'
import { FilterPill } from '@/components/shared/filter-pill'
import { LinkMetodologiaPontuacao } from '@/components/shared/nota-objetivos-fora-da-pontuacao'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import type { NivelKey } from '@/data/indicators'
import {
  getNotaPrecaria,
  METODOLOGIA_PONTUACAO_HREF,
  motivoObjetivoDesabilitado,
} from '@/data/objectives-availability'
import { cn } from '@/lib/utils'

type ObjetivoChipProps = {
  numero: number
  slug: string
  title: string
  nivel: NivelKey
  /** O objetivo tem nota no recorte, segundo os dados. */
  cobertoPelosDados: boolean
  active?: boolean
  onSelect?: () => void
  className?: string
}

export function ObjetivoChip({
  numero,
  slug,
  title,
  nivel,
  cobertoPelosDados,
  active = false,
  onSelect,
  className,
}: ObjetivoChipProps) {
  const motivo = motivoObjetivoDesabilitado(nivel, cobertoPelosDados)
  const desabilitado = Boolean(motivo)
  const precario = getNotaPrecaria(slug)
  const mostrarInfo = desabilitado || Boolean(precario)

  function handleClick() {
    if (desabilitado) {
      toast(motivo, {
        position: 'bottom-center',
        style: {
          width: 'fit-content',
          maxWidth: '90vw',
          borderRadius: '9999px',
        },
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
      <span className="tabular-nums opacity-70">
        {String(numero).padStart(2, '0')}
      </span>
      {title}
      {mostrarInfo && (
        <Info className="size-3.5 shrink-0 opacity-70" aria-hidden="true" />
      )}
    </FilterPill>
  )

  if (!motivo && !precario) return chip

  const tooltipText =
    motivo ??
    (precario
      ? `${precario.motivoResumo} Consulte a nota técnica na metodologia.`
      : '')

  return (
    <Tooltip>
      <TooltipTrigger asChild>{chip}</TooltipTrigger>
      <TooltipContent side="top" className="max-w-xs text-left leading-relaxed">
        {!motivo && precario && (
          <p className="mb-1 font-semibold">
            Nota técnica — cobertura precária
          </p>
        )}
        <p>{tooltipText}</p>
        {motivo && (
          <LinkMetodologiaPontuacao href={METODOLOGIA_PONTUACAO_HREF} />
        )}
      </TooltipContent>
    </Tooltip>
  )
}
