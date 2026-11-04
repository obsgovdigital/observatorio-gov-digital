# Setup local

| Metadado | Valor |
| --- | --- |
| **Audiência** | Engenharia · Operação |
| **Status** | Canônico |
| **Última atualização** | 2026-09-26 |
| **Relacionados** | [Variáveis de ambiente](variaveis-de-ambiente.md) · [Containerização](containerizacao.md) · [Pipeline OBGD](../03-dados/pipeline-obgd.md) · [Índice](../README.md) |

---

## 1. Pré-requisitos

- Node.js compatível com o `package.json` do repositório (LTS recomendado)
- npm
- Git
- Python 3 para `npm run lint` e validação dos assets (biblioteca padrão)

Os assets versionados em `src/data/obgd/assets/` já acompanham o repositório. Não é obrigatório rodar o sync na primeira clonagem, salvo para incorporar uma nova entrega de dados.

---

## 2. Instalação e desenvolvimento

```bash
npm install
npm run dev
```

Acesso local: [http://localhost:3000](http://localhost:3000).

Variante B (sem ranking), sem alterar o `.env`:

```text
http://localhost:3000/v2
```

---

## 3. Formulário de contato

O envio em `/contato` exige variáveis Resend e reCAPTCHA. Modelo: [`.env.example`](../../.env.example). Procedimento completo: [Contato (Resend)](../04-features/contato-resend.md).

Sem as keys, a página carrega, mas o envio falha de forma fechada (toast genérico).

---

## 4. Qualidade de código

| Comando | Função |
| --- | --- |
| `npm run lint` | Biome: lint, formatação e imports em todo o projeto |
| `npm run format` | Formata arquivos (sem lint) |

### Git hooks (Lefthook)

Após `npm install`, o script `prepare` instala os hooks. Em cada commit, o Biome roda nos arquivos staged, aplica correções seguras e re-adiciona ao stage.

Se os hooks não estiverem ativos:

```bash
npx lefthook install
```

Teste manual do hook:

```bash
npx lefthook run pre-commit
```

---

## 5. Build de produção local

```bash
npm run build
npm start
```

Útil para validar CSP de produção (sem `'unsafe-eval'` de desenvolvimento). Ver [Segurança](seguranca-headers.md).

Para subir o mesmo artefato que vai para o host do MBC, use a imagem Docker: [Containerização](containerizacao.md). `npm run dev` continua o fluxo de desenvolvimento.

---

## 6. Atualização de dados

Quando houver nova entrega da frente de dados, seguir [Pipeline OBGD](../03-dados/pipeline-obgd.md) (JSON padrão ou sync se a entrega for CSV). Contrato: [Contrato de entrega](../03-dados/contrato-entrega-dados.md).

## 7. Validação de arquivos estáticos importados

`npm run lint` executa o Biome no código e depois `npm run validate:assets`.
A segunda etapa requer **Python 3** (somente biblioteca padrão; sem pacotes pip).
Execute `npm run test:asset-validation` para testar o próprio validador.

Os seguintes arquivos deixam de ser analisados pelo Biome:

- `public/bandeiras/**/*.svg`: bandeiras importadas com XML/CDATA e metadados de
  editores vetoriais que o parser CSS do Biome não interpreta corretamente.
- `src/data/obgd/assets-v4/**/indicador_valor.json` e
  `src/data/obgd/assets/detalhes_municipios.json`: snapshots que excedem o limite
  de tamanho do Biome. Não são código-fonte e não devem ser reformatados para
  satisfazer o linter.

O validador alternativo percorre **todos** os SVGs de `public/bandeiras` e os
JSONs de `src/data/obgd/assets` e `src/data/obgd/assets-v4`, incluindo os arquivos
acima. Ele exige XML bem formado com raiz SVG no namespace correto e JSON
válido, rejeitando chaves duplicadas e constantes não padronizadas como `NaN`.
Falha se um dos diretórios não contiver arquivos. Não altera nenhum asset.

Esta é uma mudança explícita de escopo: a validação estrutural **não** verifica
estilos CSS, acessibilidade visual, segurança de conteúdo SVG nem a metodologia
ou semântica dos dados. As regras do Biome continuam iguais para o código da
aplicação. A inclusão de novas fontes e o aceite visual das bandeiras continuam
exigindo revisão. Não usar esse validador como sanitizador de uploads.

O hook de pre-commit existente chama o Biome diretamente e não executa essa
validação estrutural. Rode `npm run lint` antes de publicar alterações nos
assets. Não há workflow de CI de lint versionado; o preview da Vercel, sozinho,
não comprova a execução dessa etapa.
