# Glossário

| Metadado | Valor |
| --- | --- |
| **Audiência** | Cliente · Engenharia |
| **Status** | Canônico |
| **Última atualização** | 2026-09-13 |
| **Relacionados** | [Visão geral](visao-geral.md) · [Escopo e decisões](escopo-e-decisoes.md) · [Índice](../README.md) |

---

## Métricas

| Termo | Significado |
| --- | --- |
| **Índice** | Nota 0–100 de um ente em **um** objetivo da ENGD. Métrica principal na UI (ranking, mapa, detalhe). |
| **Índice geral** | Média transversal entre objetivos. **Não** é exibida na plataforma. |
| `sub_indice` / `subIndice` | Nome do campo no schema e no código (legado). Em copy e labels da UI, usar apenas “Índice”. |
| **valor_normalizado** | Valor de um indicador individual na escala 0–100, após normalização metodológica. |
| **Score por tag** | Média dos `valor_normalizado` dos indicadores ativos da tag, por ente (pré-calculada). |

> Em textos de metodologia sobre o iESGo (TCU), “subíndice” pode referir-se a índices compostos de terceiros — não renomear esses trechos históricos.

---

## Escopos e entes

| Termo | Significado |
| --- | --- |
| **Ente** | Unidade observada: Brasil, UF ou município. |
| **Federal / nacional** | Recorte do Brasil agregado (`NivelKey`: `federal`; nos dados: `nacional`). |
| **Estadual** | 27 UFs. |
| **Municípios** | 319 municípios com ≥ 100 mil habitantes, incluindo capitais (`NivelKey`: `municipios`). |
| **Capitais** (legado) | Recorte removido da UI; URLs `/municipal` redirecionam para `/municipios`. |

---

## Objetivos e temáticas

| Termo | Significado |
| --- | --- |
| **Objetivo ENGD** | Um dos 10 eixos do Decreto nº 12.069/2024. |
| **Tag / temática** | Tema transversal (16 oficiais) que recorta indicadores independentemente do objetivo. Exemplos: `conectividade`, `seguranca-lgpd`. |
| **Dimensão temática** | Organização de capítulos metodológicos (dezenas de dims); **não** é o mesmo que as 16 tags da UI. |
| **audiencia** | Campo nos dados (`cidadao` / `gestor`); sem filtro de UI nesta fase. |

---

## Dados e downloads

| Termo | Significado |
| --- | --- |
| **Variável / indicador** | Métrica individual que compõe o Índice de um objetivo. |
| **Fonte / pesquisa** | Base de origem (ex.: `tic_gov`, `munic`, `iesgo`), identificada por `fonte_id`. |
| **CSV do OBGD** | Recorte curado (valores normalizados do snapshot) via `GET /api/obgd/export`. |
| **Dados oficiais da fonte** | Links para o arquivo da edição usada no índice (zip, xlsx, PDF, API) — a plataforma não hospeda o bruto. |
| **concept_id** | Chave do indicador no painel de detalhes (ex.: `tic_gov/B1`). |
| **Edição / ano_indice** | Snapshot do índice; a edição de referência do app é **2026**. |

---

## Plataforma

| Termo | Significado |
| --- | --- |
| **Variante A** | Portal com ranking habilitado (`/`). |
| **Variante B** | Portal sem ranking (`/v2` ou env `off`). |
| **Drill-down** | Navegação ente → objetivo → lista de variáveis + ações de download. |
