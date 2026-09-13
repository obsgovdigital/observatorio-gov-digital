# Assets versionados do OBGD (edição 2026)

Subset usado pelo app, versionado no Git para build em CI/hospedagem.

**Documentação:**

- Contrato do pacote esperado: [`docs/03-dados/contrato-entrega-dados.md`](../../../../docs/03-dados/contrato-entrega-dados.md)
- Atualização no portal (JSON padrão ou CSV): [`docs/03-dados/pipeline-obgd.md`](../../../../docs/03-dados/pipeline-obgd.md)
- Pipeline de geração (frente de dados): [`docs/03-dados/pipeline-geracao-dados.md`](../../../../docs/03-dados/pipeline-geracao-dados.md)

## Conteúdo

```
assets/
├── indice_long_por_objetivo.json
├── detalhes_nacional.json
├── detalhes_estadual.json
├── detalhes_municipios.json      # 319 municípios ≥ 100 mil hab.
├── variaveis-por-objetivo-nivel.json
└── dados/
    ├── ente.json                 # BR + 27 UF + 319 municípios
    ├── fonte.json
    ├── indicador.json            # tags[] + audiencia
    ├── objetivo_engd.json
    ├── tag.json                  # 16 tags transversais
    └── indice_por_tag.json       # média valor_normalizado por (tipo × unidade × tag)
```

Não versionar `indicador_valor.json`. Não emitir `detalhes_capitais.json` (recorte Capitais removido da UI).

## Atualizar após nova entrega

**Padrão (JSON):** substituir os arquivos acima em `src/data/obgd/assets/` conforme o pacote da frente de dados; validar ranking/indicadores; commit.

**Alternativa (CSV):** colocar o pacote em `src/data/obgd/assets-v4/` e executar:

```bash
node --max-old-space-size=4096 scripts/sync-obgd-assets-from-v4.mjs
```

O sync converte CSVs → JSON, filtra capitais, pré-calcula `indice_por_tag.json`, gera `variaveis-por-objetivo-nivel.json` e **não** copia `indicador_valor.json`.

Em seguida, conferir smoke nos três recortes e commitar `src/data/obgd/assets/`.
