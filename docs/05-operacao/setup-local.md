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