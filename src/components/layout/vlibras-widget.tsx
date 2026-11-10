import { headers } from 'next/headers'
import Script from 'next/script'

/** Sem versão fixa: o governo atualiza o widget no próprio domínio. Origens liberadas em `security-headers.ts`. */
const VLIBRAS_PLUGIN_SRC = 'https://vlibras.gov.br/app/vlibras-plugin.js'

export async function VLibrasWidget() {
  const nonce = (await headers()).get('x-nonce') ?? undefined
  return <Script src={VLIBRAS_PLUGIN_SRC} nonce={nonce} strategy="lazyOnload" />
}
