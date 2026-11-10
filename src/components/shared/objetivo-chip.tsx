'use client'

import { Info } from 'lucide-react'
import { toast } from 'sonner'
import { AdaptiveTip } from '@/components/shared/adaptive-tip'
import { FilterPill } from '@/components/shared/filter-pill'
import { InfoTip } from '@/components/shared/info-tip'
import { LinkMetodologiaPontuacao } from '@/components/shared/nota-objetivos-fora-da-pontuacao'
import type { NivelKey } from '@/data/indicators'
import {
  getNotaPrecaria,
  METODOLOGIA_PONTUACAO_HREF,
  motivoObjetivoDesabilitado,
} from '@/data/objectives-availability'
import { useCanHover } from '@/hooks/use-can-hover'
import { cn } from '@/lib/utils'

const TITULO_NOTA_PRECARIA = 'Nota técnica — cobertura precária'

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
  const canHover = useCanHover()
  const motivo = motivoObjetivoDesabilitado(nivel, cobertoPelosDados)
  const desabilitado = Boolean(motivo)
  const precario = getNotaPrecaria(slug)
  // No touch, a nota de objetivo precário vai num InfoTip ao lado do chip.
  const notaAoLado = !canHover && !desabilitado && Boolean(precario)
  const mostrarInfo = desabilitado || (Boolean(precario) && !notaAoLado)

  function handleClick() {
    if (desabilitado) {
      // No touch, o próprio toque abre o Drawer com o motivo.
      if (!canHover) return
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

  if (motivo) {
    return (
      <AdaptiveTip title={title} trigger={chip}>
        <p>{motivo}</p>
        <LinkMetodologiaPontuacao href={METODOLOGIA_PONTUACAO_HREF} />
      </AdaptiveTip>
    )
  }

  if (!precario) return chip

  const notaPrecaria = `${precario.motivoResumo} Consulte a nota técnica na metodologia.`

  if (notaAoLado) {
    return (
      <span className="inline-flex items-center gap-1">
        {chip}
        <InfoTip label={TITULO_NOTA_PRECARIA}>
          <p>{notaPrecaria}</p>
        </InfoTip>
      </span>
    )
  }

  return (
    <AdaptiveTip title={TITULO_NOTA_PRECARIA} showTitleInTooltip trigger={chip}>
      <p>{notaPrecaria}</p>
    </AdaptiveTip>
  )
}
