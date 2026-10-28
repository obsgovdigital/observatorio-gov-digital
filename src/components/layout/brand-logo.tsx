type BrandLogoProps = {
  className?: string
  loading?: 'eager' | 'lazy'
}

export function BrandLogo({ className, loading }: BrandLogoProps) {
  return (
    // biome-ignore lint/performance/noImgElement: SVG da logo no tamanho de tela; next/image com a prancheta inteira embacia ao reduzir
    <img
      src="/logo_observatorio.png"
      alt="Observatório Brasileiro de Governo Digital"
      width={220}
      height={48}
      loading={loading}
      className={className}
    />
  )
}
