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
]

export function buildCsp(nonce: string): string {
  const isDev = process.env.NODE_ENV === 'development'
  const scriptSrc = [`'nonce-${nonce}'`, `'strict-dynamic'`]
  if (isDev) scriptSrc.push(`'unsafe-eval'`)

  const directives = [
    "default-src 'none'",
    `script-src ${scriptSrc.join(' ')}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self'",
    isDev ? "connect-src 'self' ws: wss:" : "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "frame-src 'none'",
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
  const csp = buildCsp(nonce)
  requestHeaders.set('x-nonce', nonce)
  requestHeaders.set('Content-Security-Policy', csp)
  const response = createResponse(requestHeaders)
  return applyResponseSecurityHeaders(response, csp)
}
