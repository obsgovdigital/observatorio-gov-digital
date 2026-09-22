# Escopo e decisões de produto

| Metadado | Valor |
| --- | --- |
| **Audiência** | Cliente |
| **Status** | Canônico |
| **Última atualização** | 2026-09-22 |
| **Relacionados** | [Visão geral](visao-geral.md) · [Mapa de rotas](mapa-de-rotas.md) · [Glossário](glossario.md) · [Índice](../README.md) |

Documento estável de decisões de produto e do comportamento correspondente na plataforma. Não registra diário de reuniões nem status de sprint.

---

## 1. Decisões fechadas

| # | Pedido / ponto | Decisão | Comportamento na plataforma |
| ---: | --- | --- | --- |
| 1 | Média / índice geral entre objetivos | Não publicar | Rankings e destaques apenas por **objetivo** (Índice) ou por **tag temática** |
| 2 | Clareza do critério de ordenação do ranking | Critério explícito na UI | Ordenação por objetivo ENGD **ou** categoria temática; sem toggle de índice geral |
| 3 | Página isolada de variável com série histórica | Remover da UI | Variáveis aparecem como lista + download na página do objetivo |
| 4 | Objetivo 3 (Identificação Única) com cobertura insuficiente | Desabilitar na UI | Chip desabilitado com tooltip e toast; lacunas reais dos objs. 8 e 10 continuam vindas dos dados |
| 5 | Tags / dimensões temáticas | Catálogo oficial de **16 tags** | Ranking e Indicadores no modo temáticas usam scores reais (média por tag) |
| 6 | Versão com e sem ranking (teste A/B) | Duas variantes | Variante A (`/`): ranking disponível. Variante B (`/v2` ou env `off`): sem ranking |
| 6b | Caminho até o download sem ranking | Drill-down em Indicadores | Em ambas as variantes: `/indicadores/[nivel]/[ente]/[objetivo]` com lista + download |
| 7 | Municípios ≥ 100 mil hab. (além de capitais) | Um recorte **Municípios** | 319 municípios; recorte Capitais removido da UI |
| 8 | Nota técnica de objetivos com cobertura precária | Conteúdo provisório | Mock na metodologia / chips até validação editorial definitiva |
| 9 | Internacionalização PT/EN | Não portar | Portal apenas em pt-BR |
| 10 | Overlay de loading na abertura da home | Removido | Home sem intro animada (UX e SEO) |

---

## 2. Índice por objetivo versus índice geral

| Conceito | Definição | Status na UI |
| --- | --- | --- |
| **Índice** | Nota 0–100 de um ente em **um** objetivo da ENGD | Métrica principal (ranking, mapa, detalhe) |
| **Índice geral** | Agregado transversal dos objetivos | **Proibido** na interface |
| Campo `sub_indice` / `subIndice` | Nome legado no schema/código | Não confundir com o rótulo “Índice” exibido |

---

## 3. Itens fora de escopo ou adiados

| Item | Situação |
| --- | --- |
| i18n PT/EN | Fora de escopo nesta fase |
| Página `/ranking/.../[variavel]` + série histórica na UI | Removidas a pedido do cliente |
| Expansão do catálogo para 50–60 tags | Futuro; edição atual tem 16 tags oficiais |
| Tags API / IA / tecnologias emergentes como eixos de UI | Futuro — cobertura insuficiente no snapshot |
| Série histórica multi-ano por variável | Snapshot anual; série na UI permanece mock se existir no código |
| Filtro cidadão × gestor (`audiencia`) | Campo nos dados; sem UI nesta etapa |
| Texto final do tooltip do Objetivo 3 | Copy provisório até validação oficial |
| Conteúdo final da nota dos objetivos precários | Mock |
| Recomendações ENGD na página de objetivo do ranking | Removidas; permanecem em `/objetivos/[slug]` |

---

## 4. Preferência de dados

A plataforma prioriza **números já agregados** pela frente de dados. O front calcula o mínimo possível (ex.: score por tag pré-calculado em `indice_por_tag.json`).

Pendências conhecidas na frente de dados (edição assets-v4): `ano_indice` nulo na entrega bruta (tratado como 2026 no sync); ranking municipal dos objetivos 7, 8 e 10 pode estar vazio.

---

## 5. Mocks remanescentes

| Área | Natureza |
| --- | --- |
| Motivo do Objetivo 3 na UI | Texto provisório até validação oficial |
| Quatro objetivos precários | Nota técnica mock na metodologia / chips |
| Série histórica por variável | Gerador mock (último ponto pode espelhar valor real) |
| Campo `indiceGeral` no modelo | Removido. A entrega não precisa emitir `indice_geral`; o portal não o exibe |
