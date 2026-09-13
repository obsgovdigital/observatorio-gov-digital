# Stack e repositório

| Metadado | Valor |
| --- | --- |
| **Audiência** | Engenharia |
| **Status** | Canônico |
| **Última atualização** | 2026-09-13 |
| **Relacionados** | [Visão de arquitetura](visao-arquitetura.md) · [Setup local](../05-operacao/setup-local.md) · [Índice](../README.md) |

---

## 1. Stack

| Área | Tecnologia |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| Linguagem | TypeScript |
| UI | Tailwind CSS v4 + shadcn/ui |
| Gráficos | Recharts |
| Animações | Framer Motion (e GSAP onde aplicável) |
| Formulários | React Hook Form + Zod |
| E-mail | Resend |
| Anti-bot (contato) | Google reCAPTCHA v2 Invisible |
| Conteúdo metodológico | `@next/mdx` + remark-gfm + rehype-slug |
| Lint / format | Biome |
| Git hooks | Lefthook (pre-commit) |
| Idioma da UI | pt-BR |

Atenção: esta versão do Next.js pode divergir de documentação antiga. Consultar `node_modules/next/dist/docs/` antes de assumir APIs legadas. Ver também [`AGENTS.md`](../../AGENTS.md).

---

## 2. Árvore relevante de `src/`

```
src/
├── app/
│   ├── (app)/              # rotas do portal
│   ├── actions/            # Server Actions (contato)
│   ├── api/obgd/export/    # CSV curado
│   ├── globals.css         # design tokens + utilitários dash-*
│   └── layout.tsx          # root layout (SSR + nonce)
├── components/
│   ├── charts/
│   ├── content/            # contato, publicações
│   ├── drilldown/          # ente + variáveis (ranking e indicadores)
│   ├── indicadores/
│   ├── layout/
│   ├── metodologia/
│   ├── ranking/
│   ├── shared/
│   └── ui/                 # shadcn
├── content/metodologia/    # capítulos Markdown
├── data/
│   ├── obgd/               # camada de dados + assets/
│   ├── tematicas/          # API das 16 tags
│   └── objectives*.ts
├── lib/                    # contact, recaptcha, security-headers, features
├── local_assets/           # gitignored — entregas brutas (quando presentes)
└── proxy.ts                # middleware (variante A/B + headers)
```

Scripts de sync e build de assets ficam em `scripts/` na raiz do repositório.

---

## 3. Design system (resumo)

Tokens em `src/app/globals.css` (Tailwind v4 + shadcn).

| Token | Uso |
| --- | --- |
| `primary` / `primary-glow` | Marca, CTAs, gradientes de título |
| `chart-1` … `chart-4` | Séries de gráficos |
| utilitários `dash-*` | Traços de layout das seções |

Fontes: **Plus Jakarta Sans** (sans) · **JetBrains Mono** (mono).

Regra: usar tokens semânticos (`bg-primary`, `text-muted-foreground`) — nunca valores literais como `bg-blue-500`.

---

## 4. Qualidade de código

| Ferramenta | Papel |
| --- | --- |
| Biome | Lint, formatação e organização de imports |
| Lefthook | Hook pre-commit: Biome nos arquivos staged |

Scripts: `npm run lint`, `npm run format`. Detalhe: [Setup local](../05-operacao/setup-local.md).

---

## 5. Documentação de agentes

[`AGENTS.md`](../../AGENTS.md) e [`CLAUDE.md`](../../CLAUDE.md) orientam ferramentas de assistência a código. A documentação de produto e operação para humanos e handoff está neste hub (`docs/`).
