'use client'

import { LinkMetodologiaPontuacao } from '@/components/shared/nota-objetivos-fora-da-pontuacao'
import {
  limitacaoDoObjetivo,
  limitacaoGeralRecorteFederal,
} from '@/data/limitacoes-recorte-federal'
import { METODOLOGIA_PONTUACAO_HREF } from '@/data/objectives-availability'
import { cn } from '@/lib/utils'

function LinkDaNota() {
  return (
    <LinkMetodologiaPontuacao
      href={METODOLOGIA_PONTUACAO_HREF}
      className="text-sm"
    />
  )
}

type NotaRecorteFederalProps = {
  className?: string
  /** Azul, no mesmo tom do ente selecionado. */
  tom?: 'muted' | 'primary'
  mostrarLink?: boolean
}

/** Legenda do recorte, visível quando a União está selecionada. */
export function NotaRecorteFederal({
  className,
  tom = 'muted',
  mostrarLink = true,
}: NotaRecorteFederalProps) {
  const { titulo, texto } = limitacaoGeralRecorteFederal()
  const emAzul = tom === 'primary'

  return (
    <div
      className={cn(
        'max-w-xl text-sm leading-relaxed',
        emAzul ? 'text-primary' : 'text-muted-foreground',
        className
      )}
    >
      <p className={cn('font-medium', !emAzul && 'text-foreground')}>
        {titulo}
      </p>
      <p className="mt-1">{texto}</p>
      {mostrarLink && <LinkDaNota />}
    </div>
  )
}

type NotaLimitacaoObjetivoProps = {
  numero: number
  className?: string
  mostrarLink?: boolean
}

/** Parágrafo da limitação do objetivo cuja nota está em foco. */
export function NotaLimitacaoObjetivo({
  numero,
  className,
  mostrarLink = true,
}: NotaLimitacaoObjetivoProps) {
  const nota = limitacaoDoObjetivo(numero)
  if (!nota) return null

  return (
    <div className={cn('max-w-3xl text-sm leading-relaxed', className)}>
      <p className="font-medium text-foreground">{nota.titulo}</p>
      <p className="mt-1 text-muted-foreground">{nota.texto}</p>
      {mostrarLink && <LinkDaNota />}
    </div>
  )
}

/** Nota geral e limitação do objetivo em leitura, com um único link. */
export function LeituraRecorteFederal({
  numero,
  className,
}: {
  numero: number
  className?: string
}) {
  return (
    <div className={cn('max-w-3xl space-y-5', className)}>
      <NotaRecorteFederal mostrarLink={false} className="max-w-none" />
      <NotaLimitacaoObjetivo
        numero={numero}
        mostrarLink={false}
        className="max-w-none"
      />
      <LinkDaNota />
    </div>
  )
}
