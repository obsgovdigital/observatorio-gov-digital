# Headers de segurança — MDN HTTP Observatory

| Metadado | Valor |
| --- | --- |
| **Audiência** | Engenharia · Operação |
| **Status** | Canônico |
| **Última atualização** | 2026-11-10 |
| **Scan** | [MDN Observatory](https://developer.mozilla.org/en-US/observatory/analyze?host=observatorio-gov-digital.vercel.app) |
| **Relacionados** | [Contato](../04-features/contato-resend.md) · [VLibras](../04-features/vlibras.md) · [Visão de arquitetura](../02-arquitetura/visao-arquitetura.md) · [Índice](../README.md) |

Headers HTTP do portal para a nota **A+** no [MDN HTTP Observatory](https://developer.mozilla.org/en-US/observatory/docs/tests_and_scoring).

---

## 1. Por que existe

O App Router do Next.js injeta scripts inline de hidratação. CSP estático `script-src 'self'` quebra a página. A solução é **nonce por request** + páginas dinâmicas.

## 2. Onde os headers são aplicados

| Camada                            | Arquivo                                                                                               | O que envia                                                                     |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Proxy (HTML, redirects, rewrites) | [`src/proxy.ts`](../../src/proxy.ts) + [`src/lib/security-headers.ts`](../../src/lib/security-headers.ts) | CSP com nonce + headers estáticos                                              |
| `headers()` do Next             | [`next.config.ts`](../../next.config.ts)                                                                | Só headers estáticos (assets fora do matcher:`_next/static`, imagens, etc.) |
| Root layout                       | [`src/app/layout.tsx`](../../src/app/layout.tsx)                                                        | `await connection()` — SSR obrigatório para o nonce bater com o HTML        |

O Next lê o CSP no **request** (`Content-Security-Policy` + `x-nonce`) e carimba o mesmo nonce nos `<script>`. Sem `connection()`, o HTML estático do build teria nonce inválido.

**Custo:** o portal não é HTML estático no CDN; cada request é SSR.

## 3. Política (produção)

- **CSP:** `default-src 'none'`; `script-src 'nonce-…' 'strict-dynamic'` (dev: + `'unsafe-eval'` e `connect-src` com `ws:`/`wss:`); `style-src 'self' 'unsafe-inline'` (GSAP, Recharts, Framer Motion, estilos inline); `object-src 'none'`; `frame-ancestors 'none'`; `form-action 'self'`; `upgrade-insecure-requests`.
- **`/contato` (e `/v2/contato`):** `isContatoPath()` em [`security-headers.ts`](../../src/lib/security-headers.ts) liga `buildCsp(..., { recaptcha: true })`. Origens extras:
  - `frame-src`: `https://www.google.com/recaptcha/` `https://recaptcha.google.com/`
  - `connect-src` e `img-src`: as mesmas + `https://www.gstatic.com/recaptcha/`
  - Nas demais rotas `frame-src` tem só o VLibras (abaixo). **Não** adicionar `'unsafe-inline'` nem hosts Google em `script-src` — o `api.js` entra com nonce via `next/script` em `/contato`; `strict-dynamic` cobre os scripts filhos. Detalhe operacional: [`contato-resend.md`](../04-features/contato-resend.md) §7.1.
- **VLibras (global):** constantes `VLIBRAS_*` em [`security-headers.ts`](../../src/lib/security-headers.ts). Origens extras em todas as rotas:
  - `img-src` e `font-src`: `https://vlibras.gov.br` `https://cdn.jsdelivr.net/gh/spbgovbr-vlibras/`
  - `connect-src`: as mesmas + `https://traducao2.vlibras.gov.br` `https://dicionario2.vlibras.gov.br` `https://repositorio.vlibras.gov.br` `https://pt.wiktionary.org`
  - `frame-src`: `https://vlibras.gov.br/app/` (player Unity; em `/contato` soma-se ao reCAPTCHA)
  - `script-src` não muda: o plugin entra com nonce via `next/script` e `'strict-dynamic'` cobre os módulos filhos. Telemetria PostHog do widget (`us.i.posthog.com`) fica **bloqueada** de propósito. Detalhe: [`vlibras.md`](../04-features/vlibras.md) §4.
- **Estáticos:** `X-Content-Type-Options: nosniff`; `Referrer-Policy: strict-origin-when-cross-origin`; `X-Frame-Options: DENY`; `Cross-Origin-Resource-Policy: same-origin`; `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`.

`unsafe-inline` em **script-src** faz o Observatory dar −20 e trava em B+ (bônus bloqueados). SRI nos chunks do Next não é usado: hashes mudam a cada build; same-origin já passa o teste (0).

## 4. Como alterar sem derrubar a nota

Qualquer script, fonte, API, iframe ou analytics de terceiros precisa de diretiva explícita em `buildCsp()` **antes** de ir para produção. Fontes Google no runtime não são necessárias: `next/font` já self-hosta no build.

Depois da mudança:

1. `npm run build && npm start` (CSP de produção, sem `unsafe-eval`).
2. `curl -sI http://localhost:3000` — conferir CSP, `nosniff`, `DENY`, Referrer-Policy, HSTS.
3. Navegar home, indicadores, ranking, metodologia, contato, o tour (`driver.js`) e abrir o VLibras; console sem violações de CSP (exceto `us.i.posthog.com` fora de localhost, esperado).
4. Deploy na Vercel e **Rescan** no Observatory. Scan local não conta HSTS preload de `vercel.app`.

## 5. O que não fazer

- CSP só em `vercel.json` (sem nonce → quebra hidratação).
- `'unsafe-inline'` em `script-src` para “fazer funcionar”.
- Remover `connection()` do root layout.
- Aplicar headers só em `NextResponse.next()` e esquecer redirects/rewrites do proxy.
- Abrir as origens do reCAPTCHA no CSP **global** (devem ficar só em `/contato`).
- Instalar um wrapper npm de reCAPTCHA que injeta `<script>` sem nonce.
- Instalar wrapper npm do VLibras (`react-vlibras` e similares) — mesmo problema de nonce.
- Liberar `https://us.i.posthog.com` no `connect-src` (telemetria do VLibras bloqueada por decisão de produto).
- Adicionar `'wasm-unsafe-eval'` "para o VLibras": o WebAssembly roda no iframe de `vlibras.gov.br`, não na nossa página.
