# Pipeline de geração de dados

| Metadado | Valor |
| --- | --- |
| **Audiência** | Frente de dados · Engenharia |
| **Status** | Pendente — frente de dados |
| **Última atualização** | 2026-09-13 |
| **Relacionados** | [Contrato de entrega](contrato-entrega-dados.md) · [Pipeline no portal](pipeline-obgd.md) · [Índice](../README.md) |

---

## 1. Propósito

Este documento destinará a documentação da **pipeline de construção do snapshot OBGD** pela frente de dados: fontes brutas → normalização → índices e tags → pacote de entrega consumido pelo portal.

Enquanto o conteúdo completo não for publicado, a especificação do **artefato de saída** esperado pela aplicação permanece em [Contrato de entrega de dados](contrato-entrega-dados.md).

---

## 2. Escopo previsto (quando preenchido)

Espera-se que a versão final descreva, no mínimo:

- Fontes oficiais e edições usadas no índice
- Passos de normalização e cálculo de `valor_normalizado` / índices por objetivo
- Geração do modelo relacional e do pacote de entrega (**padrão JSON**; CSV como alternativa documentada no contrato)
- Catálogo de tags e regras de associação a indicadores
- Versionamento / nomenclatura do pacote entregue ao portal
- Contatos e processo de entrega à engenharia

A ingestão no repositório do site (sync, commit, redeploy) continua documentada em [Pipeline OBGD](pipeline-obgd.md) e [Deploy](../05-operacao/deploy-e-hospedagem.md).

---

## 3. Status

| Item | Situação |
| --- | --- |
| Contrato de output (plataforma) | Publicado — [`contrato-entrega-dados.md`](contrato-entrega-dados.md) |
| Schema relacional na entrega | Ver `src/data/obgd/assets-v4/dados/SCHEMA.md` |
| Pipeline de geração (este arquivo) | **A cargo da frente de dados** — substituir este stub pelo conteúdo definitivo ou apontar URL/repositório externo mantendo este path como entrada no hub |

---

## 4. Referência imediata

Até a publicação desta pipeline, a equipe de manutenção do portal deve:

1. Exigir pacotes alinhados ao [contrato de entrega](contrato-entrega-dados.md).
2. Seguir o [passo a passo de atualização no portal](pipeline-obgd.md).
3. Coordenar com a frente de dados qualquer mudança de schema antes do sync.
