import { Download, ExternalLink } from 'lucide-react'

import { ObgdFonteDownloadButton } from '@/components/metodologia/obgd-fonte-download-button'
import { BackButton } from '@/components/shared/back-button'
import type { Fonte } from '@/data/fontes'
import { hasObgdExportForFonteId } from '@/data/obgd/export-rows'
import { FONTE_ACESSO_TIPO_LABEL } from '@/data/obgd/fonte-urls'

export function FonteContent({ fonte }: { fonte: Fonte }) {
  const temExportObgd = hasObgdExportForFonteId(fonte.slug)
  const urlPesquisaDistinta = fonte.urlPesquisa !== fonte.urlOrgao
  const arquivosOficiais = fonte.arquivos

  return (
    <section className="pb-12">
      <div className="relative px-6 pt-20 pb-16 sm:px-10">
        <BackButton
          fallbackHref="/metodologia"
          label="Voltar para Metodologia"
          className="absolute top-12 left-6 inline-flex items-center text-muted-foreground transition-colors hover:text-primary sm:left-10"
        />

        <span className="block text-sm font-medium text-muted-foreground">
          Fonte de dados
        </span>
        <h1 className="bg-linear-to-br from-primary to-primary-glow bg-clip-text font-bold text-4xl text-transparent leading-tight tracking-tight sm:text-5xl">
          {fonte.name}
        </h1>
        <p className="mt-3 text-base font-medium text-foreground">
          Produzida por {fonte.instituicao}
        </p>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
          {fonte.descricao}
        </p>

        {arquivosOficiais.length > 0 && (
          <div className="mt-8 max-w-2xl">
            <h2 className="font-bold text-foreground text-sm">
              Baixar dados oficiais (edição usada no índice)
            </h2>
            <p className="mt-1 text-muted-foreground text-sm leading-relaxed">
              Arquivos publicados pelo órgão. A plataforma não hospeda esses
              dados — o link abre o endereço oficial.
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {arquivosOficiais.map(item => (
                <li key={item.url}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start justify-between gap-3 rounded-lg border border-border px-4 py-3 text-sm transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary"
                  >
                    <span className="min-w-0">
                      <span className="inline-flex items-center gap-2 font-medium leading-snug">
                        <Download
                          className="size-4 shrink-0"
                          aria-hidden="true"
                        />
                        {item.label}
                      </span>
                      <span className="mt-1 block text-xs text-muted-foreground">
                        {FONTE_ACESSO_TIPO_LABEL[item.tipo]}
                      </span>
                    </span>
                    <ExternalLink
                      className="mt-0.5 size-4 shrink-0"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={fonte.urlPesquisa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-medium text-muted-foreground text-sm transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary"
          >
            <ExternalLink className="size-4" aria-hidden="true" />
            Acessar página da pesquisa
          </a>
          {urlPesquisaDistinta && (
            <a
              href={fonte.urlOrgao}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-medium text-muted-foreground text-sm transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary"
            >
              <ExternalLink className="size-4" aria-hidden="true" />
              Site do órgão
            </a>
          )}
        </div>

        {temExportObgd && (
          <div className="mt-14 rounded-lg border border-border bg-muted/30 px-5 py-5">
            <h2 className="font-bold text-foreground text-sm">
              Dados usados no Observatório
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground text-sm leading-relaxed">
              A plataforma não disponibiliza o microdado bruto completo desta
              fonte. Em vez disso, você pode baixar o{' '}
              <strong className="font-medium text-foreground">
                recorte curado
              </strong>{' '}
              — os mesmos valores normalizados (0–100) dos indicadores desta
              fonte que entram no índice (snapshot 2026), em todos os níveis
              (nacional, estadual e municípios com 100 mil habitantes ou mais).
            </p>
            <div className="mt-4">
              <ObgdFonteDownloadButton
                fonteId={fonte.slug}
                fonteNome={fonte.name}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
