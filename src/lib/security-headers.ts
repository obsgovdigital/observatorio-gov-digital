import type { NextRequest, NextResponse } from 'next/server'

/** Headers estáticos (sem nonce). Também aplicados em `next.config.ts` para assets fora do proxy. */
export const STATIC_SECURITY_HEADERS: { key: string; value: string }[] = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=()',
  },
]

const RECAPTCHA_IMG_SRC = [
  'https://www.gstatic.com/recaptcha/',
  'https://www.google.com/recaptcha/',
] as const

const RECAPTCHA_CONNECT_SRC = [
  'https://www.google.com/recaptcha/',
  'https://www.gstatic.com/recaptcha/',
  'https://recaptcha.google.com/',
] as const

const RECAPTCHA_FRAME_SRC = [
  'https://www.google.com/recaptcha/',
  'https://recaptcha.google.com/',
] as const

/**
 * VLibras Widget (global). Os assets de `vlibras.gov.br/app` redirecionam (302) para o
 * jsDelivr; após redirect o CSP compara só o host. Telemetria PostHog do widget fica de fora.
 */
const VLIBRAS_ASSET_SRC = [
  'https://vlibras.gov.br',
  'https://cdn.jsdelivr.net/gh/spbgovbr-vlibras/',
] as const

const VLIBRAS_CONNECT_SRC = [
  ...VLIBRAS_ASSET_SRC,
  'https://traducao2.vlibras.gov.br',
  'https://dicionario2.vlibras.gov.br',
  'https://repositorio.vlibras.gov.br',
  'https://pt.wiktionary.org',
] as const

const VLIBRAS_FRAME_SRC = ['https://vlibras.gov.br/app/'] as const

/** `/contato` e `/v2/contato` — CSP extra só nessas rotas. */
export function isContatoPath(pathname: string): boolean {
  return (
    pathname === '/contato' ||
    pathname.startsWith('/contato/') ||
    pathname === '/v2/contato' ||
    pathname.startsWith('/v2/contato/')
  )
}

export function buildCsp(
  nonce: string,
  options: { recaptcha?: boolean } = {}
): string {
  const isDev = process.env.NODE_ENV === 'development'
  const recaptcha = options.recaptcha === true
  const scriptSrc = [`'nonce-${nonce}'`, `'strict-dynamic'`]
  if (isDev) scriptSrc.push(`'unsafe-eval'`)

  const imgSrc = ["'self'", 'data:', 'blob:', ...VLIBRAS_ASSET_SRC]
  if (recaptcha) imgSrc.push(...RECAPTCHA_IMG_SRC)

  const fontSrc = ["'self'", ...VLIBRAS_ASSET_SRC]

  const connectSrc = ["'self'", ...VLIBRAS_CONNECT_SRC]
  if (isDev) connectSrc.push('ws:', 'wss:')
  if (recaptcha) connectSrc.push(...RECAPTCHA_CONNECT_SRC)

  const frameSrc: string[] = [...VLIBRAS_FRAME_SRC]
  if (recaptcha) frameSrc.push(...RECAPTCHA_FRAME_SRC)

  const directives = [
    "default-src 'none'",
    `script-src ${scriptSrc.join(' ')}`,
    "style-src 'self' 'unsafe-inline'",
    `img-src ${imgSrc.join(' ')}`,
    `font-src ${fontSrc.join(' ')}`,
    `connect-src ${connectSrc.join(' ')}`,
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    `frame-src ${frameSrc.join(' ')}`,
    'upgrade-insecure-requests',
  ]

  return directives.join('; ')
}

function createNonce(): string {
  return Buffer.from(crypto.randomUUID()).toString('base64')
}

function applyResponseSecurityHeaders(
  response: NextResponse,
  csp: string
): NextResponse {
  response.headers.set('Content-Security-Policy', csp)
  for (const { key, value } of STATIC_SECURITY_HEADERS) {
    response.headers.set(key, value)
  }
  return response
}

/** Gera nonce, injeta CSP no request (Next.js) e na response, e aplica headers estáticos. */
export function applySecurityHeaders(
  request: NextRequest,
  createResponse: (requestHeaders: Headers) => NextResponse
): NextResponse {
  const nonce = createNonce()
  const requestHeaders = new Headers(request.headers)
  const csp = buildCsp(nonce, {
    recaptcha: isContatoPath(request.nextUrl.pathname),
  })
  requestHeaders.set('x-nonce', nonce)
  requestHeaders.set('Content-Security-Policy', csp)
  const response = createResponse(requestHeaders)
  return applyResponseSecurityHeaders(response, csp)
}
