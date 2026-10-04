'use client'

import createGlobe, { type Globe } from 'cobe'
import { useEffect, useRef } from 'react'

import { arcosEmVoo, marcadoresGlobo } from '@/lib/geo/hero-globo'
import { cn } from '@/lib/utils'

/** Esfera clara, com um azul de céu — sem o lilás do glow da marca. */
const COR_ESFERA: [number, number, number] = [0.9, 0.95, 0.99]
const COR_MARCAS: [number, number, number] = [0.13, 0.55, 0.86]
const COR_RAIOS: [number, number, number] = [0.08, 0.58, 0.93]
const COR_HALO: [number, number, number] = [0.62, 0.84, 0.97]
const COR_HALO_ESCURO: [number, number, number] = [0.45, 0.72, 0.95]

const GRAUS = Math.PI / 180
const BALANCO = 20 * GRAUS
/** Folga para ver o país inteiro sem chegar na África ou no Pacífico. */
const LIMITE_PHI = 28 * GRAUS
const LIMITE_THETA = 22 * GRAUS
const SENSIBILIDADE = 0.005

function limitar(valor: number, minimo: number, maximo: number): number {
  return Math.min(maximo, Math.max(minimo, valor))
}

interface HeroGlobeProps {
  className?: string
}

/** O disco do globo ocupa raio 0.8 no espaço do shader. Cabe inteiro no lado mais curto. */
function escalaQueCabe(width: number, height: number): number {
  const aspecto = width / Math.max(height, 1)
  const limite = Math.min(1.25, aspecto / 0.8)
  return limite * 0.92
}

function angulosDoBrasil(): [number, number] {
  const lat = -14.2
  const lng = -51.9
  return [
    Math.PI - ((lng * Math.PI) / 180 - Math.PI / 2),
    (lat * Math.PI) / 180,
  ]
}

function corDoHalo(): [number, number, number] {
  return document.documentElement.classList.contains('dark')
    ? COR_HALO_ESCURO
    : COR_HALO
}

export function HeroGlobe({ className }: HeroGlobeProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return

    const [focusPhi, focusTheta] = angulosDoBrasil()
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    let globe: Globe | null = null
    let raf = 0
    let alive = true
    let reduced = motionQuery.matches
    let onScreen = false
    let pageOn = document.visibilityState === 'visible'
    let dragging = false
    let dragPhi = 0
    let dragTheta = 0
    let lastX = 0
    let lastY = 0

    const phiAt = (now: number) => {
      const balanco =
        dragging || reduced ? 0 : Math.sin(now * 0.00016) * BALANCO
      return limitar(
        focusPhi + dragPhi + balanco,
        focusPhi - LIMITE_PHI,
        focusPhi + LIMITE_PHI
      )
    }

    const thetaAt = () =>
      limitar(
        focusTheta + dragTheta,
        focusTheta - LIMITE_THETA,
        focusTheta + LIMITE_THETA
      )

    const metrics = () => {
      const width = wrap.clientWidth
      const height = wrap.clientHeight
      return {
        width,
        height,
        dpr: Math.min(window.devicePixelRatio || 1, 2),
        mapSamples: width < 520 ? 8000 : 14000,
        offsetX: 0,
        scale: escalaQueCabe(width, height),
      }
    }

    const ensure = (now: number) => {
      const { width, height, dpr, mapSamples, offsetX, scale } = metrics()
      if (width < 2 || height < 2) {
        if (globe) {
          globe.destroy()
          globe = null
          delete canvas.dataset.ready
        }
        return false
      }

      const phi = phiAt(now)
      const theta = thetaAt()
      const offset: [number, number] = [offsetX, 0]
      const arcs = arcosEmVoo(now, reduced)
      if (!globe) {
        globe = createGlobe(canvas, {
          width,
          height,
          devicePixelRatio: dpr,
          phi,
          theta,
          dark: 0,
          diffuse: 1.15,
          mapSamples,
          mapBrightness: 7,
          mapBaseBrightness: 0.18,
          baseColor: COR_ESFERA,
          markerColor: COR_MARCAS,
          glowColor: corDoHalo(),
          markers: marcadoresGlobo,
          arcs,
          arcColor: COR_RAIOS,
          arcWidth: 1.15,
          arcHeight: 0.22,
          markerElevation: 0.01,
          scale,
          offset,
          opacity: 1,
        })
        canvas.dataset.ready = 'true'
      } else {
        globe.update({
          phi,
          theta,
          width,
          height,
          offset,
          scale,
          arcs,
          arcHeight: reduced ? 0.22 : 0.16 + Math.sin(now * 0.0013) * 0.08,
        })
      }
      return true
    }

    const stop = () => cancelAnimationFrame(raf)

    const frame = (now: number) => {
      if (!alive) return
      if (!ensure(now)) return
      if (!reduced && onScreen && pageOn) raf = requestAnimationFrame(frame)
    }

    const sync = () => {
      stop()
      if (!alive || !onScreen || !pageOn) return
      if (reduced) {
        ensure(performance.now())
        return
      }
      raf = requestAnimationFrame(frame)
    }

    const io = new IntersectionObserver(([entry]) => {
      onScreen = Boolean(entry?.isIntersecting)
      sync()
    })
    io.observe(wrap)

    const ro = new ResizeObserver(() => sync())
    ro.observe(wrap)

    const onPage = () => {
      pageOn = document.visibilityState === 'visible'
      sync()
    }
    document.addEventListener('visibilitychange', onPage)

    const onMotion = () => {
      reduced = motionQuery.matches
      sync()
    }
    motionQuery.addEventListener('change', onMotion)

    const soltar = (event: PointerEvent) => {
      if (!dragging) return
      dragging = false
      wrap.dataset.dragging = 'false'
      if (wrap.hasPointerCapture(event.pointerId)) {
        wrap.releasePointerCapture(event.pointerId)
      }
    }

    const segurar = (event: PointerEvent) => {
      if (event.button !== 0) return
      dragging = true
      lastX = event.clientX
      lastY = event.clientY
      wrap.dataset.dragging = 'true'
      wrap.setPointerCapture(event.pointerId)
    }

    const arrastar = (event: PointerEvent) => {
      if (!dragging) return
      const dx = event.clientX - lastX
      const dy = event.clientY - lastY
      lastX = event.clientX
      lastY = event.clientY
      dragPhi = limitar(dragPhi + dx * SENSIBILIDADE, -LIMITE_PHI, LIMITE_PHI)
      dragTheta = limitar(
        dragTheta + dy * SENSIBILIDADE,
        -LIMITE_THETA,
        LIMITE_THETA
      )
      if (reduced) ensure(performance.now())
    }

    wrap.addEventListener('pointerdown', segurar)
    wrap.addEventListener('pointermove', arrastar)
    wrap.addEventListener('pointerup', soltar)
    wrap.addEventListener('pointercancel', soltar)

    const theme = new MutationObserver(() => {
      globe?.update({ glowColor: corDoHalo() })
    })
    theme.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => {
      alive = false
      stop()
      io.disconnect()
      ro.disconnect()
      theme.disconnect()
      document.removeEventListener('visibilitychange', onPage)
      motionQuery.removeEventListener('change', onMotion)
      wrap.removeEventListener('pointerdown', segurar)
      wrap.removeEventListener('pointermove', arrastar)
      wrap.removeEventListener('pointerup', soltar)
      wrap.removeEventListener('pointercancel', soltar)
      globe?.destroy()
    }
  }, [])

  return (
    <div
      ref={wrapRef}
      role="img"
      aria-label="Globo do Brasil. Arraste para girar sem sair do país."
      className={cn(
        'pointer-events-auto relative size-full cursor-grab touch-none hover:cursor-grab data-[dragging=true]:cursor-grabbing',
        className
      )}
    >
      <canvas
        ref={canvasRef}
        className="relative size-full opacity-0 transition-opacity duration-700 data-[ready=true]:opacity-100"
      />
    </div>
  )
}
