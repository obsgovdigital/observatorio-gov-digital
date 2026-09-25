'use client'

import Link from 'next/link'
import { InfoTip } from '@/components/shared/info-tip'
import {
  EXPLICACAO_FORA_DA_PONTUACAO,
  formatNotaObjetivosInativos,
  METODOLOGIA_PONTUACAO_HREF,
} from '@/data/objectives-availability'
import { cn } from '@/lib/utils'

type NotaObjetivosForaDaPontuacaoProps = {
  inativos: { numero: number }[]
  className?: string
}

export function NotaObjetivosForaDaPontuacao({
  inativos,
  className,
}: NotaObjetivosForaDaPontuacaoProps) {
  const nota = formatNotaObjetivosInativos(inativos)
  if (!nota) return null

  return (
    <p
      className={cn(
        'mx-auto flex max-w-md flex-wrap items-center justify-center gap-1 text-center text-xs leading-snug text-muted-foreground',
        className
      )}
    >
      <span>{nota}</span>
      <InfoTip label="Por que estes objetivos não têm índice neste recorte?">
        <span className="block">{EXPLICACAO_FORA_DA_PONTUACAO}</span>
        <LinkMetodologiaPontuacao href={METODOLOGIA_PONTUACAO_HREF} />
      </InfoTip>
    </p>
  )
}

export function LinkMetodologiaPontuacao({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="mt-2 inline-block font-medium underline underline-offset-2"
    >
      Ver na metodologia
    </Link>
  )
}
