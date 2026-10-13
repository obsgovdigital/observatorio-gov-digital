# Entrega do modelo-base

dados/ contém a projeção relacional externa e auditoria/dados/ conserva o modelo canônico. Schema e SCHEMA.md derivam da mesma especificação. Os metadados separam a revisão do dataset, a revisão da build e a revisão do exportador, com hashes das entradas consumidas.

indicador usa o sufixo canônico na projeção externa, enquanto concept_id, indicador_chave e indicador_fisico preservam a correspondência com a origem. Os CSVs externos de detalhes omitem somente observações nulas. Zero permanece zero; objetivos com escore nulo permanecem no modelo e na view long. n conta componentes ponderados; n_itens conta itens observados, ambos vindos da build.

indice_long_por_objetivo.csv deriva do modelo, com ranking por nível e objetivo e empates min. Os CSVs em auditoria/ conservam todos os registros de entrada, sem rankings gerais. Não há cálculo ou arredondamento adicional.

Tags e municípios pertencem ao mesmo modelo e à mesma proveniência da release. Os escores por tag permanecem nos CSVs, sem entidade JSON paralela. audiencia e lado são metadados técnicos, sem efeito no cálculo. A exportação não altera nem homologa o consumidor. export_complete.json só aparece após a última escrita.
