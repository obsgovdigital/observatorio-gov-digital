# Variáveis de ambiente

| Metadado | Valor |
| --- | --- |
| **Audiência** | Engenharia · Operação |
| **Status** | Canônico |
| **Última atualização** | 2026-09-13 |
| **Modelo** | [`.env.example`](../../.env.example) |
| **Relacionados** | [Contato](../04-features/contato-resend.md) · [Setup local](setup-local.md) · [Deploy / handoff](deploy-e-hospedagem.md) · [Índice](../README.md) |

Arquivo `.env` local **não** deve ser versionado. Em produção, preferir secrets do provedor de hospedagem. Runbook completo de go-live: [Handoff e deploy em produção](deploy-e-hospedagem.md).

Após alterar variáveis `NEXT_PUBLIC_*`, reiniciar o servidor de desenvolvimento ou fazer rebuild — elas entram no bundle do cliente.

---

## 1. Matriz

| Variável | Obrigatória | Escopo | Descrição |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_RANKING_MODE` | Não (default conceitual `on`) | Cliente + proxy | `on` = variante A (ranking visível); `off` = variante B (ranking oculto). Legados aceitos no parser: `full` → on, `farol` → off. Prefixo `/v2` força B sem mudar o env. |
| `RESEND_API_KEY` | Sim para envio | Servidor | API key Resend (`re_…`) |
| `RESEND_FROM_EMAIL` | Sim para envio | Servidor | Remetente `Nome <email@dominio>` |
| `CONTACT_TO_EMAIL` | Sim para envio | Servidor | Destinatário das mensagens (produção: `mbc@mbc.org.br`) |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Sim para envio | Cliente | Site key reCAPTCHA v2 Invisible |
| `RECAPTCHA_SECRET_KEY` | Sim para envio | Servidor | Secret reCAPTCHA; fail-closed se ausente |
---

## 2. Exemplos

### Desenvolvimento local (contato)

```bash
NEXT_PUBLIC_RANKING_MODE=on

RESEND_API_KEY=re_sua_chave
RESEND_FROM_EMAIL=Observatorio <onboarding@resend.dev>
CONTACT_TO_EMAIL=seu-email-da-conta-resend@exemplo.com

# Keys de teste do Google (localhost; sempre passam em siteverify):
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
RECAPTCHA_SECRET_KEY=6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe
```

Com `onboarding@resend.dev`, o Resend só entrega para o e-mail da conta Resend.

### Produção (contato)

```bash
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=Observatório <noreply@dominio-verificado>
CONTACT_TO_EMAIL=mbc@mbc.org.br
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=site_key_de_producao
RECAPTCHA_SECRET_KEY=secret_de_producao
```

Não usar keys de teste do FAQ fora de `localhost`.

---

## 3. Segurança das chaves

- Nunca commitar `.env` nem expor `RESEND_API_KEY` ou `RECAPTCHA_SECRET_KEY`.
- Em vazamento Resend: revogar e gerar nova key. Em vazamento reCAPTCHA: recriar o par site/secret e atualizar as duas variáveis no mesmo deploy.
- Detalhe operacional do formulário: [Contato (Resend)](../04-features/contato-resend.md).
