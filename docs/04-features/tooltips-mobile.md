# Explicações contextuais — Tooltip no desktop, Drawer no touch

| Metadado | Valor |
| --- | --- |
| **Audiência** | Engenharia |
| **Status** | Canônico |
| **Última atualização** | 2026-11-10 |
| **Relacionados** | [Indicadores e ranking](indicadores-e-ranking.md) · [Índice](../README.md) |

Tooltips dependem de hover e não funcionam bem ao toque. Toda explicação contextual do portal (ícone de info, "Entenda este gráfico", chips desabilitados etc.) usa um componente adaptativo: **Tooltip** em dispositivos com mouse/trackpad e **Drawer** (bottom sheet do shadcn, baseado em `vaul`) ao toque.

---

## 1. Arquivos

| Arquivo | Papel |
| --- | --- |
| [`src/hooks/use-can-hover.ts`](../../src/hooks/use-can-hover.ts) | `useCanHover()`: `matchMedia('(hover: hover) and (pointer: fine)')` via `useSyncExternalStore` |
| [`src/components/shared/adaptive-tip.tsx`](../../src/components/shared/adaptive-tip.tsx) | `AdaptiveTip`: escolhe Tooltip ou Drawer com o mesmo conteúdo |
| [`src/components/shared/info-tip.tsx`](../../src/components/shared/info-tip.tsx) | Ícone de info (glossário no ponto de uso), construído sobre `AdaptiveTip` |
| [`src/components/ui/drawer.tsx`](../../src/components/ui/drawer.tsx) | Drawer do shadcn (`vaul`) |

## 2. Como usar

Para um ícone de info, use `InfoTip`; `label` é o `aria-label` do botão e o título do Drawer:

```tsx
<InfoTip label="O que é o índice?">{GLOSSARIO.subIndice}</InfoTip>
```

Para outro gatilho (botão, chip, título de eixo), use `AdaptiveTip`:

```tsx
<AdaptiveTip title={nome} showTitleInTooltip trigger={<button type="button">…</button>}>
  <p>{detalhe}</p>
</AdaptiveTip>
```

- `trigger` precisa aceitar ref e props (é passado com `asChild`).
- `title` é obrigatório: é o título do Drawer, anunciado por leitores de tela. `showTitleInTooltip` repete o título em negrito no tooltip do desktop.
- Links dentro do conteúdo funcionam no Drawer (no tooltip não são alcançáveis ao toque).

## 3. Decisões

| Decisão | Por quê |
| --- | --- |
| Detecção por capacidade (`hover` + `pointer`), não por largura | Tablet largo também recebe Drawer; notebook com janela estreita continua com Tooltip |
| No servidor, `useCanHover()` retorna `true` | HTML inicial igual ao de antes (Tooltip); o cliente troca para Drawer após hidratar, sem erro de hidratação |
| Chip desabilitado: no touch, o toque abre o Drawer e o `toast` não é disparado | Evita duas mensagens iguais; no desktop o comportamento (tooltip + toast no clique) não muda |
| Objetivo precário mas selecionável: no touch, `InfoTip` ao lado do chip | O toque no chip continua selecionando o objetivo |
| Botão `disabled` (home, mapa): no touch, o `span` que o envolve vira o gatilho e o botão recebe `pointer-events-none` | Botões desabilitados não disparam eventos de clique |
| Área de toque do `InfoTip` ampliada com `pointer-coarse:after:-inset-3` | O ícone tem 20px; o alvo chega a ~44px sem mudar o layout |

**Fora do escopo:** tooltips dos gráficos Recharts (já respondem ao toque) e o rótulo dos botões de ícone em `variavel-acoes.tsx`.

## 4. Checklist de teste

1. Desktop: hover no ícone de info, "Entenda este gráfico", eixo do radar e chips desabilitados mostra o tooltip como antes.
2. Celular (ou DevTools com emulação de touch + recarregar): o toque nesses elementos abre o Drawer; "Entendi", arrastar para baixo, `Esc` ou toque fora fecham.
3. Chip desabilitado no touch: abre o Drawer e não mostra toast.
4. Chip de objetivo precário no touch: o toque seleciona; o ícone ao lado abre a nota técnica.
