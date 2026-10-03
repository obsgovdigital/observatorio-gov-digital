'use client'

import Link from 'next/link'
import { useState } from 'react'

import { VisualPerfil } from '@/components/home/home-feature-visuals'
import { FilterPill } from '@/components/shared/filter-pill'
import {
  mediasPorObjetivo,
  type NivelKey,
  niveis,
} from '@/data/indicators'

interface Props {
  /** `/indicadores` já com o prefixo de variante, sem query string. */
  indicadoresHref: string
}

function tituloDaLista(nivelKey: NivelKey, nomeFederal: string | undefined) {
  if (nivelKey === 'federal') return nomeFederal ?? 'Federal'
  if (nivelKey === 'municipios') return 'Municípios'
  return 'Estados'
}

export function HomeExplorar({ indicadoresHref }: Props) {
  const [nivelKey, setNivelKey] = useState<NivelKey>('estadual')
  const nivel = niveis.find(item => item.key === nivelKey) ?? niveis[0]
  const medias = mediasPorObjetivo(nivel)

  return (
    <div className="grid gap-8 px-6 py-20 sm:px-10 lg:min-h-[28rem] lg:grid-cols-3 lg:gap-0">
      <div className="lg:pr-10">
        <span className="block font-medium text-muted-foreground text-sm">
          Explore os dados
        </span>
        <h2 className="mt-3 font-bold text-2xl text-foreground leading-tight tracking-tight sm:text-3xl">
          Como está o governo digital no Brasil?
        </h2>
        <p className="mt-4 max-w-sm text-muted-foreground text-sm leading-relaxed sm:text-base">
          Selecione uma dimensão e uma localidade para explorar indicadores e
          comparar diferentes contextos.
        </p>
        <Link
          href={`${indicadoresHref}?nivel=${nivel.key}`}
          className="mt-5 inline-block font-medium text-primary text-sm transition-opacity hover:opacity-70"
        >
          Explorar indicadores
        </Link>
        <div
          className="mt-5 flex flex-wrap gap-2"
          role="group"
          aria-label="Nível de governo"
        >
          {niveis.map(item => (
            <FilterPill
              key={item.key}
              active={item.key === nivel.key}
              onClick={() => setNivelKey(item.key)}
            >
              {item.label}
            </FilterPill>
          ))}
        </div>
      </div>

      <div className="flex items-start justify-center lg:col-span-2 lg:dash-l lg:pr-6 lg:pl-8">
        <VisualPerfil
          key={nivel.key}
          entes={nivel.entes}
          medias={medias}
          listaTitulo={tituloDaLista(nivel.key, nivel.entes[0]?.nome)}
        />
      </div>
    </div>
  )
}
