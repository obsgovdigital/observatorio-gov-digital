# Indicadores e ranking

| Metadado | Valor |
| --- | --- |
| **Audiência** | Engenharia |
| **Status** | Canônico |
| **Última atualização** | 2026-09-13 |
| **Relacionados** | [Mapa de rotas](../01-produto/mapa-de-rotas.md) · [Pipeline OBGD](../03-dados/pipeline-obgd.md) · [Disclaimer](../03-dados/disclaimer-variaveis.md) · [Índice](../README.md) |

---

## 1. Visão geral

Duas superfícies exploram os mesmos dados OBGD com propósitos distintos:

| Superfície | Rota | Papel |
| --- | --- | --- |
| **Indicadores** | `/indicadores` | Comparativo entre até 5 entes (radar / barras) |
| **Ranking** | `/ranking` | Ordenação de todos os entes do nível (variante A) |

Ambas suportam ordenação / eixo por **objetivos ENGD** ou por **tags temáticas** (16 oficiais). O drill-down até a lista de variáveis + download é compartilhado (`src/components/drilldown/`).

---

## 2. Indicadores

- Filtros: nível, até 5 entes, modo `por=objetivos` \| `por=tematicas`.
- Estado na URL: `nivel`, `entes`, `por`, `tema`.
- Radar por objetivos; barras por tag com score real.
- CTA / legenda do ente → `/indicadores/[nivel]/[ente]` → `/indicadores/[nivel]/[ente]/[objetivo]`.
- Arquivos: `src/components/indicadores/`, `src/lib/indicadores-url.ts`.

---

## 3. Ranking

- Níveis: estadual e municípios (≥ 100 mil); federal navega direto ao ente Brasil quando aplicável.
- Chips de objetivo (Objetivo 3 desabilitado na UI) ou pills de tag.
- Distribuição + mapa (estadual) + tabela.
- Coluna principal = **Índice** (sem índice geral).
- Disclaimer de contagem de variáveis no modo objetivos — ver [Disclaimer](../03-dados/disclaimer-variaveis.md).
- Página do objetivo: lista + download; **sem** bloco de Recomendações (essas ficam em `/objetivos/[slug]`).
- Arquivos: `src/components/ranking/`, `src/lib/ranking-url.ts`.
- Disponibilidade de objetivos: `src/data/objectives-availability.ts`.

---

## 4. Drill-down compartilhado

| Componente | Papel |
| --- | --- |
| `EnteDetail` | Detalhe do ente |
| `ObjetivoVariaveis` | Lista de variáveis + `VariavelAcoes` |

Props relevantes: `basePath` (`/ranking` \| `/indicadores`) e `showRankingUi` (posições / `DistribuicaoChart` só no ranking).

Na variante B o proxy bloqueia `/ranking*`; o caminho até o download permanece em `/indicadores/.../[objetivo]` (e `/v2/indicadores/...`).

---

## 5. Temáticas (tags)

API em `src/data/tematicas/`:

| Export | Origem |
| --- | --- |
| `tematicas` | `tag.json` |
| `notaTematica` / `rankingTematico` | `indice_por_tag.json` |
| `variaveisPorTematica` | Indicadores ativos com a tag |

Slugs mock antigos não são válidos; tema desconhecido cai no default do catálogo.

---

## 6. Validação rápida

1. `/indicadores?nivel=estadual&entes=sp&por=objetivos` — URL restaura seleção; CTA leva ao ente.
2. `/ranking?nivel=estadual&por=objetivos&objetivo=gestao-e-governanca` — Obj. 3 desabilitado; disclaimer visível.
3. `/ranking?nivel=estadual&por=tematicas&tema=conectividade` — scores reais.
4. `/v2/indicadores/estadual/sp/{objetivo}` — lista + download sem UI de posição.
