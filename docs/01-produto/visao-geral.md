# Visão geral do produto

| Metadado | Valor |
| --- | --- |
| **Audiência** | Cliente |
| **Status** | Canônico |
| **Última atualização** | 2026-09-13 |
| **Relacionados** | [Escopo e decisões](escopo-e-decisoes.md) · [Mapa de rotas](mapa-de-rotas.md) · [Glossário](glossario.md) · [Índice](../README.md) |

---

## 1. O que é

O Observatório Brasileiro de Governo Digital (OBGD) é um portal público e interativo de monitoramento da transformação digital no setor público brasileiro. O portal reúne indicadores e dados estratégicos apresentados em linguagem acessível a gestores públicos, acadêmicos e cidadãos.

O Observatório mede o desenvolvimento digital dos governos federal, estaduais e dos municípios com 100 mil habitantes ou mais, com base nos 10 objetivos da Estratégia Nacional de Governo Digital (ENGD), instituída pelo Decreto nº 12.069/2024 e alinhada à Portaria SGD/MGI nº 4.248/2024.

---

## 2. Parceiros institucionais

| Parceiro | Papel |
| --- | --- |
| Insper / CGPP (Centro de Gestão e Políticas Públicas) | Parceiro técnico e acadêmico; hospeda inicialmente a plataforma |
| MBC (Movimento Brasil Competitivo) | Parceiro institucional; manutenção da plataforma na AWS no longo prazo |
| MGI (Ministério da Gestão e Inovação em Serviços Públicos) | Vinculação institucional |

**Coordenação (Insper):** Prof. Ivar Hartmann (coordenador inicial); Prof.ª Maria Carolina Foss (coordenadora subsequente, Direito).

**Pesquisa e dados:** Suelane Garcia Fontes (Centro de Dados e IA) · Prof. Rodolfo Avelino (Engenharia) · equipe interdisciplinar.

---

## 3. Os 10 objetivos da ENGD

| # | Objetivo |
| ---: | --- |
| 1 | Governança do Governo Digital |
| 2 | Qualidade dos Serviços Digitais |
| 3 | Identificação Única |
| 4 | Segurança e LGPD |
| 5 | Dados e Interoperabilidade |
| 6 | Infraestrutura |
| 7 | Inovação e Tecnologias Emergentes |
| 8 | Eficiência e Processos |
| 9 | Transparência e Participação |
| 10 | Competências em Governo Digital |

Cada objetivo recebe um **Índice** de 0 a 100 (média dos indicadores daquele objetivo no ente). Na plataforma **não** há índice geral entre objetivos — rankings e destaques são sempre por objetivo ou por tag temática. Ver [Glossário](glossario.md).

---

## 4. Escopos federativos

| Recorte na UI | Conteúdo |
| --- | --- |
| Federal | Brasil agregado |
| Estadual | 27 unidades da Federação |
| Municípios | 319 municípios com 100 mil habitantes ou mais (inclui as capitais) |

O recorte “Capitais” como nível separado foi removido da interface; as capitais entram no conjunto de municípios.

---

## 5. Fontes de dados primárias

- TIC Governo Eletrônico e TIC Domicílios (CETIC.br)
- Painéis SGD (Secretaria de Governo Digital / MGI)
- ABEP-TIC (estados)
- IBGE Munic e IBGE Estadic
- PNAD Contínua (módulos específicos)
- Demais fontes catalogadas no índice (iESGo/TCU, Anatel, Censo Escolar, etc.)

Referências internacionais de indicadores: EGDI (ONU), OECD Digital Government Index, GovTech Maturity Index (Banco Mundial).

---

## 6. Princípios de produto

- Dados secundários já disponíveis (sem coleta primária nesta fase).
- Foco em indicadores estratégicos comparáveis entre entes federativos.
- Plataforma analítica pública e interativa (sem área logada inicialmente).
- Acessibilidade e clareza para o público geral, não apenas especialistas.
- Idioma oficial do portal: **português (pt-BR)** — i18n EN fora de escopo nesta fase.

---

## 7. Prazos

| Marco | Prazo |
| --- | --- |
| Primeira versão pública | novembro 2026 |
| Operação completa (ENGD / EFGD) | até dezembro 2027 |

---

## 8. Hospedagem

Hospedagem inicial sob responsabilidade do Insper, com migração futura para AWS sob responsabilidade do MBC. Detalhes operacionais: [Deploy e hospedagem](../05-operacao/deploy-e-hospedagem.md).
