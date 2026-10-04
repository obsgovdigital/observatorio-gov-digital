import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { getHomeData } from '@/components/home/home-data'
import { HomeExplorar } from '@/components/home/home-explorar'
import { HomeHero } from '@/components/home/home-hero'
import { HomePorqueExiste } from '@/components/home/home-porque-existe'
import { objectives } from '@/data/objectives'
import {
  resolvePlatformVariant,
  variantLink,
} from '@/lib/features/resolve-variant'
import { cn } from '@/lib/utils'

const dimensoes = [
  {
    titulo: 'Governança',
    texto:
      'Estratégias, estruturas e mecanismos utilizados para coordenar a transformação digital.',
  },
  {
    titulo: 'Capacidade Digital',
    texto:
      'Competências, infraestrutura e condições necessárias para sustentar iniciativas digitais.',
  },
  {
    titulo: 'Interoperabilidade',
    texto:
      'Capacidade de integração e compartilhamento de informações entre sistemas e instituições.',
  },
  {
    titulo: 'Serviços Digitais',
    texto:
      'Evolução da oferta e qualidade dos serviços públicos disponibilizados em meios digitais.',
  },
  {
    titulo: 'Dados',
    texto:
      'Uso estratégico, disponibilidade e governança de dados na administração pública.',
  },
  {
    titulo: 'Outras dimensões',
    texto:
      'Novas dimensões e indicadores podem ser incorporados conforme a evolução do Governo Digital.',
  },
]

const publicos = [
  {
    titulo: 'Cidadãos e imprensa',
    texto:
      'Entenda o cenário, consulte resultados e encontre explicações sem precisar começar pela metodologia.',
  },
  {
    titulo: 'Gestores públicos',
    texto:
      'Compare contextos, identifique pontos de atenção e use evidências para orientar prioridades e políticas.',
  },
  {
    titulo: 'Pesquisadores',
    texto:
      'Acesse definições, fontes, recortes, critérios e referências para estudos e análises reproduzíveis.',
  },
  {
    titulo: 'Organizações',
    texto:
      'Compreenda padrões e desafios do governo digital para apoiar projetos, cooperação e decisões institucionais.',
  },
]

export async function HomeV1Page() {
  await resolvePlatformVariant()
  const link = await variantLink()
  const { parceiros, numeros } = getHomeData()

  const recortes = [
    {
      titulo: 'Governo federal',
      texto: 'Recorte próprio do governo federal.',
    },
    {
      titulo: 'Estados',
      texto: `As ${numeros.estados} unidades da Federação.`,
    },
    {
      titulo: 'Municípios',
      texto: `Os ${numeros.municipios} municípios com 100 mil habitantes ou mais, incluindo as capitais.`,
    },
  ]

  return (
    <section className="pb-12">
      <HomeHero
        indicadoresHref={link('/indicadores')}
        sobreHref={link('/sobre')}
      />

      <div aria-hidden="true" className="h-px bg-border" />

      <HomePorqueExiste />

      <div aria-hidden="true" className="h-px bg-border" />

      {/* O que acompanhamos */}
      <div className="px-6 py-20 sm:px-10">
        <span className="font-medium text-muted-foreground text-sm">
          O que acompanhamos
        </span>
        <h2 className="mt-3 max-w-2xl font-bold text-2xl text-foreground leading-tight tracking-tight sm:text-3xl">
          Uma visão multidimensional do Governo Digital
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground text-sm leading-relaxed sm:text-base">
          Os indicadores permitem compreender diferentes capacidades e dimensões
          relacionados à transformação digital da administração pública.
        </p>
        <div className="dash-t -mx-6 mt-12 grid sm:-mx-10 sm:grid-cols-2 lg:grid-cols-3">
          {dimensoes.map((item, i) => (
            <div
              key={item.titulo}
              className={cn(
                'dash-b flex flex-col gap-2 p-6 sm:p-8',
                (i + 1) % 3 !== 0 && 'lg:dash-br'
              )}
            >
              <h3 className="flex gap-3 font-medium text-primary text-sm tracking-tight">
                <span className="text-muted-foreground">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {item.titulo}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div aria-hidden="true" className="h-px bg-border" />

      {/* Explore os dados */}
      <div className="overflow-hidden">
        <HomeExplorar indicadoresHref={link('/indicadores')} />
      </div>

      <div aria-hidden="true" className="h-px bg-border" />

      {/* Escopo */}
      <div className="px-6 py-20 sm:px-10">
        <span className="font-medium text-muted-foreground text-sm">
          O escopo
        </span>
        <h2 className="mt-3 max-w-2xl font-bold text-2xl text-foreground leading-tight tracking-tight sm:text-3xl">
          Federal, estados e municípios
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground text-sm leading-relaxed sm:text-base">
          O Observatório acompanha o desenvolvimento digital do governo federal,
          das {numeros.estados} unidades da Federação e dos municípios com 100
          mil habitantes ou mais.
        </p>
        <div className="dash-t -mx-6 mt-12 grid sm:-mx-10 sm:grid-cols-2 lg:grid-cols-3">
          {recortes.map((item, i) => (
            <div
              key={item.titulo}
              className={cn(
                'dash-b flex flex-col gap-2 p-6 sm:p-8',
                i < recortes.length - 1 && 'lg:dash-br'
              )}
            >
              <h3 className="flex gap-3 font-medium text-primary text-sm tracking-tight">
                <span className="text-muted-foreground">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {item.titulo}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div aria-hidden="true" className="h-px bg-border" />

      {/* Parceiros */}
      <div className="px-6 py-16 sm:px-10">
        <p className="text-center font-medium text-muted-foreground text-sm">
          Uma iniciativa construída em parceria
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {parceiros.map(parceiro => (
            <a
              key={parceiro.src}
              href={parceiro.href}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-40 grayscale transition-[filter,opacity] duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={parceiro.src}
                alt={parceiro.alt}
                width={parceiro.width}
                height={parceiro.height}
                className={`${parceiro.size} w-auto object-contain`}
              />
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          ))}
        </div>
      </div>

      <div aria-hidden="true" className="h-px bg-border" />

      {/* Para quem é */}
      <div className="px-6 py-20 sm:px-10">
        <span className="font-medium text-muted-foreground text-sm">
          Para quem é
        </span>
        <h2 className="mt-3 max-w-2xl font-bold text-2xl text-foreground leading-tight tracking-tight sm:text-3xl">
          Uma mesma base de informação, com usos diferentes.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground text-sm leading-relaxed sm:text-base">
          O Observatório foi pensado para permitir uma leitura rápida por quem
          está conhecendo o tema e, ao mesmo tempo, oferecer rastreabilidade
          para quem precisa aprofundar a análise.
        </p>
        <div className="dash-t -mx-6 mt-12 grid sm:-mx-10 sm:grid-cols-2 lg:grid-cols-4">
          {publicos.map((item, i) => (
            <div
              key={item.titulo}
              className={cn(
                'dash-b flex flex-col gap-2 p-6 sm:p-8',
                i < publicos.length - 1 && 'lg:dash-br'
              )}
            >
              <h3 className="flex gap-3 font-medium text-primary text-sm tracking-tight">
                <span className="text-muted-foreground">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {item.titulo}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Os dez objetivos */}
      <div className="px-6 py-20 sm:px-10">
        <span className="font-medium text-muted-foreground text-sm">
          Como a análise se organiza
        </span>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <h2 className="max-w-2xl font-bold text-2xl text-foreground leading-tight tracking-tight sm:text-3xl">
            Os dez objetivos da Estratégia Nacional de Governo Digital
          </h2>
          <Link
            href={link('/objetivos')}
            className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline sm:mt-1"
          >
            Ver todos os objetivos
            <ChevronRight className="size-4" />
          </Link>
        </div>
        <p className="mt-4 max-w-2xl text-muted-foreground text-sm leading-relaxed sm:text-base">
          Os indicadores são organizados segundo os dez objetivos da ENGD,
          permitindo comparar entes por tema de política pública.
        </p>
        <div className="dash-t -mx-6 mt-10 grid sm:-mx-10 sm:grid-cols-2 lg:grid-cols-5">
          {objectives.map((objective, index) => (
            <Link
              key={objective.slug}
              href={link(`/objetivos/${objective.slug}`)}
              className={cn(
                'dash-b flex flex-col gap-2 p-6 transition-colors hover:bg-muted/60 sm:p-8',
                (index + 1) % 5 !== 0 && 'lg:dash-br'
              )}
            >
              <h3 className="flex gap-3 font-medium text-primary text-sm tracking-tight">
                <span className="text-muted-foreground">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {objective.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
