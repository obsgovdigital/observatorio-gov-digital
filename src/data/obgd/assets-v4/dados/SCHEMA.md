# Schema do modelo-base

Schema e documentação derivam da mesma especificação. Os campos comuns referenciam o contrato versionado; as extensões conservam a auditoria. Tags e municípios integram o mesmo modelo, sem alterar ou homologar o consumidor.

A área de auditoria preserva códigos físicos, nulos, zeros e contagens n/n_itens. A projeção externa altera somente indicador para o sufixo canônico. concept_id e indicador_fisico permitem conferir a transformação. Escores não são recalculados ou arredondados. Somente os CSVs externos de detalhes omitem observações nulas.

## fonte.json

Chaves: [["id"]]. Uma lista vazia não impõe unicidade simplificada aos fatos.

| Campo | Regra |
|---|---|
| id | {"type": "string"} |
| nome | {"type": "string"} |
| instituicao | {"type": "string"} |
| anos_disponiveis | {"type": "integer[]", "nullable": true, "optional": true} |
| ano_base | {"type": "integer"} |
| formato | {"type": "string", "nullable": true} |
| granularidade | {"type": "string[]"} |

Relações: [].

## objetivo_engd.json

Chaves: [["id"]]. Uma lista vazia não impõe unicidade simplificada aos fatos.

| Campo | Regra |
|---|---|
| id | {"type": "integer", "minimum": 1, "maximum": 10} |
| nome | {"type": "string"} |
| descricao | {"type": "string"} |

Relações: [].

## dimensao_conceitual.json

Chaves: [["id"]]. Uma lista vazia não impõe unicidade simplificada aos fatos.

| Campo | Regra |
|---|---|
| id | {"type": "string"} |
| nome | {"type": "string"} |
| descricao | {"type": "string"} |

Relações: [].

## dimensao_tematica.json

Chaves: [["id"]]. Uma lista vazia não impõe unicidade simplificada aos fatos.

| Campo | Regra |
|---|---|
| id | {"type": "string"} |
| objetivo_id | {"type": "integer"} |
| nome | {"type": "string"} |
| tipo | {"type": "string"} |

Relações: [{"fields": ["objetivo_id"], "target": "dados/objetivo_engd.json", "target_fields": ["id"]}].

## ente.json

Chaves: [["id"], ["tipo", "codigo"]]. Uma lista vazia não impõe unicidade simplificada aos fatos.

| Campo | Regra |
|---|---|
| id | {"type": "integer"} |
| tipo | {"type": "string", "enum": ["nacional", "uf", "municipio", "capital"]} |
| codigo | {"type": "string"} |
| nome | {"type": "string"} |
| uf_sigla | {"type": "string", "nullable": true} |
| regiao | {"type": "string", "nullable": true, "optional": true} |

Relações: [].

## tag.json

Chaves: [["id"]]. Uma lista vazia não impõe unicidade simplificada aos fatos.

| Campo | Regra |
|---|---|
| id | {"type": "string"} |
| nome | {"type": "string"} |
| descricao | {"type": "string", "nullable": true, "optional": true} |
| lado | {"type": "string", "optional": true, "enum": ["cidadao", "gestor"]} |

Relações: [].

## indicador.json

Chaves: [["chave"]]. Uma lista vazia não impõe unicidade simplificada aos fatos.

| Campo | Regra |
|---|---|
| chave | {"type": "string"} |
| fonte_id | {"type": "string"} |
| indicador | {"type": "string"} |
| descricao | {"type": "string"} |
| pergunta | {"type": "string", "nullable": true, "optional": true} |
| escala | {"type": "string", "nullable": true, "optional": true} |
| populacao | {"type": "string", "nullable": true, "optional": true} |
| objetivo_id | {"type": "integer", "nullable": true} |
| tags | {"type": "string[]"} |
| status | {"type": "string"} |
| concept_id | {"type": "string"} |
| indicador_fisico | {"type": "string"} |
| sub_itens | {"type": "string[]", "nullable": true} |
| objetivos_engd | {"type": "integer[]"} |
| dimensao_conceitual_id | {"type": "string", "nullable": true} |
| dimensao_tematica_id | {"type": "string", "nullable": true} |
| audiencia | {"type": "string", "nullable": true, "enum": ["cidadao", "gestor", "ambos"]} |
| agregacao | {"type": "string", "nullable": true} |
| bateria | {"type": "string", "nullable": true} |
| motivo_exclusao | {"type": "string", "nullable": true} |
| anos_observados | {"type": "integer[]", "nullable": true} |
| primeiro_ano | {"type": "integer", "nullable": true} |

Relações: [{"fields": ["fonte_id"], "target": "dados/fonte.json", "target_fields": ["id"]}, {"fields": ["objetivo_id"], "target": "dados/objetivo_engd.json", "target_fields": ["id"]}, {"fields": ["tags"], "target": "dados/tag.json", "target_fields": ["id"], "each": true}, {"fields": ["dimensao_conceitual_id"], "target": "dados/dimensao_conceitual.json", "target_fields": ["id"]}, {"fields": ["dimensao_tematica_id"], "target": "dados/dimensao_tematica.json", "target_fields": ["id"]}].

## indicador_valor.json

Chaves: []. Uma lista vazia não impõe unicidade simplificada aos fatos.

| Campo | Regra |
|---|---|
| indicador_chave | {"type": "string", "nullable": true} |
| ente_id | {"type": "integer"} |
| valor_normalizado | {"type": "number", "nullable": true, "minimum": 0, "maximum": 100} |
| concept_id | {"type": "string"} |
| fonte_id | {"type": "string"} |
| indicador | {"type": "string"} |
| indicador_fisico | {"type": "string"} |
| sub_itens | {"type": "string", "nullable": true} |
| objetivo_id | {"type": "integer"} |
| ano | {"type": "integer"} |
| escala | {"type": "string"} |
| descricao | {"type": "string"} |
| populacao | {"type": "string", "nullable": true} |
| dimensao | {"type": "string", "enum": ["nacional", "estadual", "capitais", "municipios"]} |

Relações: [{"fields": ["indicador_chave"], "target": "dados/indicador.json", "target_fields": ["chave"]}, {"fields": ["ente_id"], "target": "dados/ente.json", "target_fields": ["id"]}, {"fields": ["fonte_id"], "target": "dados/fonte.json", "target_fields": ["id"]}, {"fields": ["objetivo_id"], "target": "dados/objetivo_engd.json", "target_fields": ["id"]}].

## indice_objetivo.json

Chaves: [["ente_id", "objetivo_id", "ano_indice"]]. Uma lista vazia não impõe unicidade simplificada aos fatos.

| Campo | Regra |
|---|---|
| ente_id | {"type": "integer"} |
| objetivo_id | {"type": "integer"} |
| ano_indice | {"type": "integer"} |
| sub_indice | {"type": "number", "nullable": true, "minimum": 0, "maximum": 100} |
| n | {"type": "integer", "minimum": 0} |
| n_itens | {"type": "integer", "minimum": 0} |

Relações: [{"fields": ["ente_id"], "target": "dados/ente.json", "target_fields": ["id"]}, {"fields": ["objetivo_id"], "target": "dados/objetivo_engd.json", "target_fields": ["id"]}].
