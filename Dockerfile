# Base
FROM node:22-alpine AS base
WORKDIR /app

# Dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json ./

# lefthook (prepare) não roda na imagem — .git fica fora do contexto
RUN npm ci --ignore-scripts

# Builder
FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules

COPY . .

# NEXT_PUBLIC_* entram no bundle no build. Secrets de servidor ficam só no runtime.
ARG NEXT_PUBLIC_RANKING_MODE=on
ARG NEXT_PUBLIC_RECAPTCHA_SITE_KEY
ENV NEXT_PUBLIC_RANKING_MODE=$NEXT_PUBLIC_RANKING_MODE
ENV NEXT_PUBLIC_RECAPTCHA_SITE_KEY=$NEXT_PUBLIC_RECAPTCHA_SITE_KEY

RUN npm run build

# Runner
FROM base AS runner
ENV NODE_ENV=production

# Security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
