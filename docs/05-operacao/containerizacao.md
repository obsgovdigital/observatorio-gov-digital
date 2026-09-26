# Containerização

| Metadado | Valor |
| --- | --- |
| **Audiência** | Engenharia · Operação · Handoff MBC |
| **Status** | Canônico |
| **Última atualização** | 2026-09-26 |
| **Relacionados** | [Deploy e hospedagem](deploy-e-hospedagem.md) · [Variáveis de ambiente](variaveis-de-ambiente.md) · [Setup local](setup-local.md) · [Índice](../README.md) |

A imagem Docker é o artefato de runtime do Observatório. Quem recebe a operação (MBC) sobe o mesmo build no laptop e no host de produção — ECS ou outro runtime Docker na AWS — sem depender do Node instalado na máquina.

Este documento não substitui o go-live. DNS, Resend, reCAPTCHA, secrets e o checklist de aceitação continuam em [Handoff e deploy em produção](deploy-e-hospedagem.md). A matriz de variáveis está em [Variáveis de ambiente](variaveis-de-ambiente.md).

Desenvolvimento do dia a dia continua com `npm run dev`. Ver [Setup local](setup-local.md).

---

## 1. O que a imagem contém

Build multi-stage em [`Dockerfile`](../../Dockerfile), a partir de `node:22-alpine`:

| Stage | Função |
| --- | --- |
| `deps` | `npm ci --ignore-scripts` (o hook Lefthook não entra na imagem) |
| `builder` | `npm run build` com `output: 'standalone'` |
| `runner` | Processo `node server.js`, usuário `nextjs` (uid 1001), porta 3000 |

`output: 'standalone'` gera o `server.js` que o container executa. Não é export estático: o portal segue com SSR (CSP com nonce). `npm start` no checkout local continua válido para quem não usa Docker.

Ficam de fora do contexto de build ([`.dockerignore`](../../.dockerignore)): Git, `node_modules` de desenvolvimento, `.next` anterior, `.env*`, `src/local_assets/`, `coverage` e `.vercel`. Secrets de servidor não devem ser copiados para a imagem.

---

## 2. Pré-requisito

Docker Engine instalado e o daemon em execução. Na raiz do repositório:

```bash
docker version
```

---

## 3. Build

`NEXT_PUBLIC_RANKING_MODE` e `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` são gravados no bundle durante o `next build`. Passe-os como `--build-arg`. O default de ranking, se o arg for omitido, é `on` (variante A).

```bash
docker build \
  --build-arg NEXT_PUBLIC_RANKING_MODE=on \
  --build-arg NEXT_PUBLIC_RECAPTCHA_SITE_KEY=<site_key> \
  -t observatorio-gov-digital:local .
```

Para uma release, use o SHA do commit no lugar de `local`:

```bash
docker build \
  --build-arg NEXT_PUBLIC_RANKING_MODE=on \
  --build-arg NEXT_PUBLIC_RECAPTCHA_SITE_KEY=<site_key> \
  -t observatorio-gov-digital:$(git rev-parse --short HEAD) .
```

Trocar ranking ou a site key exige **novo build**. Um `-e` no `docker run` não altera o que já foi embutido.

Secrets de servidor (`RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `CONTACT_TO_EMAIL`, `RECAPTCHA_SECRET_KEY`) **não** entram no build. São lidos em runtime pelas server actions.

---

## 4. Inspecionar a imagem

```bash
docker images
docker image inspect observatorio-gov-digital:local
```

`docker images` lista a tag, o ID e o tamanho. `docker image inspect` mostra a configuração do container (comando, usuário, porta, variáveis de ambiente da imagem).

---

## 5. Subir o container

```bash
docker run --rm -p 3000:3000 \
  -e RESEND_API_KEY \
  -e RESEND_FROM_EMAIL \
  -e CONTACT_TO_EMAIL \
  -e RECAPTCHA_SECRET_KEY \
  observatorio-gov-digital:local
```

`-p 3000:3000` publica a porta 3000 do container na porta 3000 do host. Para usar outra porta no host: `-p 8080:3000` e abrir `http://localhost:8080`.

As variáveis `-e` acima são lidas do ambiente do shell. Também é possível apontar um arquivo que **não** está no Git:

```bash
docker run --rm -p 3000:3000 --env-file .env observatorio-gov-digital:local
```

`--env-file` entrega os secrets de runtime. Não regrava `NEXT_PUBLIC_*`: esses valores já foram fixados no build da seção 3.

Acesso: [http://localhost:3000](http://localhost:3000).

O processo escuta em `0.0.0.0` (`HOSTNAME` na imagem). Sem isso, o Next usa o hostname interno do container e a porta publicada no host não responde.

---

## 6. Operação do dia a dia

| Comando | Uso |
| --- | --- |
| `docker ps` | Containers em execução (ID, porta, nome) |
| `docker logs <container>` | Saída do processo Node |
| `docker logs -f <container>` | Acompanhar o log em tempo real |
| `docker stop <container>` | Encerrar. Com `--rm` no `run`, o container some ao parar |
| `docker rmi observatorio-gov-digital:local` | Remover a imagem local quando não for mais usada |

`<container>` é o ID ou o nome da coluna `NAMES` de `docker ps`. Para fixar um nome na subida: `docker run --name obgd ...`.

---

## 7. Atualizar dados ou código

Os indicadores vêm de `src/data/obgd/assets/` e entram na imagem no build. Nova entrega de dados ou mudança de código:

1. Incorporar o snapshot conforme [Pipeline OBGD](../03-dados/pipeline-obgd.md).
2. Rebuild (seção 3) e subir de novo (seção 5).
3. Smoke da seção 8 e, em produção, o checklist de [Deploy §9](deploy-e-hospedagem.md).

---

## 8. Checklist da imagem

| # | Verificação | Resultado esperado |
| ---: | --- | --- |
| 1 | `curl -sI http://localhost:3000/` | HTTP 200 |
| 2 | Home no browser | HTML com CSS e JS (assets em `/_next/static/`) |
| 3 | `/metodologia-completa.pdf` | PDF abre |
| 4 | `/contato` | Página carrega; envio só com secrets de runtime e site key de build |

O checklist completo de aceitação (ranking, headers, Observatory, e-mail) está em [Deploy §9](deploy-e-hospedagem.md).
