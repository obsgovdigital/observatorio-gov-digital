import Image from 'next/image'
import Link from 'next/link'

import { PesoVariavel } from '@/components/home/peso-variavel'
import { PixelCanvas } from '@/components/home/pixel-canvas'
import { Button } from '@/components/ui/button'

interface HomeHeroProps {
  indicadoresHref: string
  sobreHref: string
}

export function HomeHero({ indicadoresHref, sobreHref }: HomeHeroProps) {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] lg:block">
        <Image
          src="/hero/congresso.jpg"
          alt="Congresso Nacional, em Brasília, em um dia de sol"
          fill
          priority
          sizes="40rem"
          className="object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/85 to-background/10" />
      </div>

      <div className="relative isolate">
        <PixelCanvas
          className="pointer-events-none absolute inset-y-0 left-0 -z-10 w-full mask-[radial-gradient(ellipse_at_center,transparent_20%,black_80%)] lg:w-[48%] lg:mask-[radial-gradient(ellipse_at_36%_50%,transparent_16%,black_55%,transparent_86%)]"
          colors={['#d1d1d1', '#bcbcbc', '#a1a1a1']}
          gap={12}
          pixelSize={1.6}
          speed={40}
          appearFrom="middle"
          duration={0.9}
        />
        <div className="relative mx-auto max-w-xl px-6 py-24 text-center sm:px-10 sm:py-28 lg:mx-0 lg:py-28 lg:text-left">
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
              <Link href={indicadoresHref}>Explorar indicadores</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-auto rounded-full border-border bg-white px-8 py-3 text-primary text-sm shadow-none hover:bg-primary/5 hover:text-primary"
            >
              <Link href={sobreHref}>O que é o Observatório</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
