import type { Metadata } from 'next'
import Link from 'next/link'

import { HeroGlobe } from '@/components/home/hero-globe'
import { PesoVariavel } from '@/components/home/peso-variavel'
import { PixelCanvas } from '@/components/home/pixel-canvas'
import { Button } from '@/components/ui/button'
import {
  resolvePlatformVariant,
  variantLink,
} from '@/lib/features/resolve-variant'

export const metadata: Metadata = {
  title: 'Hero Globe',
  robots: { index: false },
}

export default async function HeroGlobePage() {
  await resolvePlatformVariant()
  const link = await variantLink()

  return (
    <div className="relative flex min-h-[calc(100dvh-4rem)] flex-col overflow-hidden">
      <div className="absolute inset-y-0 right-0 z-10 hidden w-[52%] lg:block">
        <HeroGlobe className="absolute inset-0" />
      </div>

      <div className="pointer-events-none relative isolate z-20 flex flex-1 flex-col">
        <PixelCanvas
          className="pointer-events-none absolute inset-y-0 left-0 -z-10 w-full mask-[radial-gradient(ellipse_at_center,transparent_20%,black_80%)] lg:w-[48%] lg:mask-[radial-gradient(ellipse_at_36%_50%,transparent_16%,black_55%,transparent_86%)]"
          colors={['#d1d1d1', '#bcbcbc', '#a1a1a1']}
          gap={12}
          pixelSize={1.6}
          speed={40}
          appearFrom="middle"
          duration={0.9}
        />
        <div className="pointer-events-auto relative mx-auto flex w-full max-w-xl flex-1 flex-col justify-center px-6 py-16 text-center sm:px-10 lg:mx-0 lg:text-left">
          <PesoVariavel
            as="h1"
            texto="Entenda o governo digital no Brasil"
            de={400}
            para={800}
            forca={22}
            duracao={0.12}
            className="mt-3 block max-w-xl bg-linear-to-br from-primary to-primary-glow bg-clip-text pb-2 text-3xl text-transparent leading-[1.1] tracking-tight sm:text-5xl"
          />
          <p className="mt-2 max-w-xl text-muted-foreground text-sm leading-relaxed sm:text-base">
            Uma plataforma pública que reúne, organiza e dá transparência aos
            indicadores da transformação digital do setor público, para que você
            acompanhe, compare e explore o desempenho de cada ente federado.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Button
              asChild
              className="h-auto rounded-full bg-primary px-8 py-3 text-primary-foreground text-sm hover:bg-primary/90 has-[>svg]:px-8"
            >
              <Link href={link('/indicadores')}>Explorar indicadores</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-auto rounded-full border-border bg-white px-8 py-3 text-primary text-sm shadow-none hover:bg-primary/5 hover:text-primary"
            >
              <Link href={link('/sobre')}>O que é o Observatório</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
