# Headers de segurança — MDN HTTP Observatory

> Headers HTTP do portal para a nota **A+** no [MDN HTTP Observatory](https://developer.mozilla.org/en-US/observatory/docs/tests_and_scoring).
>
> **Scan:** [observatorio-gov-digital.vercel.app](https://developer.mozilla.org/en-US/observatory/analyze?host=observatorio-gov-digital.vercel.app)
>
> **Última atualização:** 2026-09-01

---

## 1. Por que existe

O App Router do Next.js injeta scripts inline de hidratação. CSP estático `script-src 'self'` quebra a página. A solução é **nonce por request** + páginas dinâmicas.

## 2. Onde os headers são aplicados

| Camada                            | Arquivo                                                                                               | O que envia                                                                     |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Proxy (HTML, redirects, rewrites) | [`src/proxy.ts`](../src/proxy.ts) + [`src/lib/security-headers.ts`](../src/lib/security-headers.ts) | CSP com nonce + headers estáticos                                              |
| `headers()` do Next             | [`next.config.ts`](../next.config.ts)                                                                | Só headers estáticos (assets fora do matcher:`_next/static`, imagens, etc.) |
| Root layout                       | [`src/app/layout.tsx`](../src/app/layout.tsx)                                                        | `await connection()` — SSR obrigatório para o nonce bater com o HTML        |

O Next lê o CSP no **request** (`Content-Security-Policy` + `x-nonce`) e carimba o mesmo nonce nos `<script>`. Sem `connection()`, o HTML estático do build teria nonce inválido.

**Custo:** o portal não é HTML estático no CDN; cada request é SSR.

## 3. Política (produção)

- **CSP:** `default-src 'none'`; `script-src 'nonce-…' 'strict-dynamic'` (dev: + `'unsafe-eval'` e `connect-src` com `ws:`/`wss:`); `style-src 'self' 'unsafe-inline'` (GSAP, Recharts, Framer Motion, estilos inline); `object-src 'none'`; `frame-ancestors 'none'`; `form-action 'self'`; `upgrade-insecure-requests`.
- **Estáticos:** `X-Content-Type-Options: nosniff`; `Referrer-Policy: strict-origin-when-cross-origin`; `X-Frame-Options: DENY`; `Cross-Origin-Resource-Policy: same-origin`; `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`.

`unsafe-inline` em **script-src** faz o Observatory dar −20 e trava em B+ (bônus bloqueados). SRI nos chunks do Next não é usado: hashes mudam a cada build; same-origin já passa o teste (0).

## 4. Como alterar sem derrubar a nota

Qualquer script, fonte, API, iframe ou analytics de terceiros precisa de diretiva explícita em `buildCsp()` **antes** de ir para produção. Fontes Google no runtime não são necessárias: `next/font` já self-hosta no build.

Depois da mudança:

1. `npm run build && npm start` (CSP de produção, sem `unsafe-eval`).
2. `curl -sI http://localhost:3000` — conferir CSP, `nosniff`, `DENY`, Referrer-Policy, HSTS.
3. Navegar home, indicadores, ranking, metodologia, contato e o tour (`driver.js`); console sem violações de CSP.
4. Deploy na Vercel e **Rescan** no Observatory. Scan local não conta HSTS preload de `vercel.app`.

## 5. O que não fazer

- CSP só em `vercel.json` (sem nonce → quebra hidratação).
- `'unsafe-inline'` em `script-src` para “fazer funcionar”.
- Remover `connection()` do root layout.
- Aplicar headers só em `NextResponse.next()` e esquecer redirects/rewrites do proxy.
