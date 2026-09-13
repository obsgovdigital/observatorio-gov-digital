'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import * as React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { sendContactMessage } from '@/app/actions/contact'
import { Input } from '@/components/custom/input'
import { SelectTrigger } from '@/components/custom/select-trigger'
import { Textarea } from '@/components/custom/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'
import {
  type ContactFormValues,
  type ContactSubject,
  contactFormSchema,
  SUBJECT_OPTIONS,
} from '@/lib/contact'

const SEND_ERROR =
  'Não foi possível enviar a mensagem. Tente novamente mais tarde.'

const RECAPTCHA_TIMEOUT_MS = 15_000

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} role="alert" className="text-destructive text-sm">
      {message}
    </p>
  )
}

function waitForGrecaptcha(
  timeoutMs = RECAPTCHA_TIMEOUT_MS
): Promise<GrecaptchaApi> {
  return new Promise((resolve, reject) => {
    const started = Date.now()
    function poll() {
      const api = window.grecaptcha
      if (api?.ready) {
        api.ready(() => resolve(api))
        return
      }
      if (Date.now() - started >= timeoutMs) {
        reject(new Error('reCAPTCHA timeout'))
        return
      }
      window.setTimeout(poll, 50)
    }
    poll()
  })
}

interface ContactFormProps {
  recaptchaSiteKey: string
}

export function ContactForm({ recaptchaSiteKey }: ContactFormProps) {
  const [subjectKey, setSubjectKey] = React.useState(0)
  const honeypotRef = React.useRef<HTMLInputElement>(null)
  const widgetElRef = React.useRef<HTMLDivElement>(null)
  const widgetIdRef = React.useRef<number | null>(null)
  const tokenWaitersRef = React.useRef<{
    resolve: (token: string) => void
    reject: (error: Error) => void
  } | null>(null)

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '' as ContactSubject,
      message: '',
    },
  })

  React.useEffect(() => {
    if (!recaptchaSiteKey) return
    let cancelled = false

    void waitForGrecaptcha()
      .then(api => {
        if (cancelled || !widgetElRef.current || widgetIdRef.current !== null) {
          return
        }
        widgetIdRef.current = api.render(widgetElRef.current, {
          sitekey: recaptchaSiteKey,
          size: 'invisible',
          callback: token => {
            tokenWaitersRef.current?.resolve(token)
            tokenWaitersRef.current = null
          },
          'error-callback': () => {
            tokenWaitersRef.current?.reject(new Error('reCAPTCHA error'))
            tokenWaitersRef.current = null
          },
          'expired-callback': () => {
            tokenWaitersRef.current?.reject(new Error('reCAPTCHA expired'))
            tokenWaitersRef.current = null
          },
        })
      })
      .catch(() => {
        /* submit fails closed if the widget never renders */
      })

    return () => {
      cancelled = true
    }
  }, [recaptchaSiteKey])

  function resetRecaptcha() {
    const api = window.grecaptcha
    const widgetId = widgetIdRef.current
    if (api && widgetId !== null) {
      api.reset(widgetId)
    }
  }

  function executeRecaptcha(): Promise<string> {
    const api = window.grecaptcha
    const widgetId = widgetIdRef.current
    if (!recaptchaSiteKey || !api || widgetId === null) {
      return Promise.reject(new Error('reCAPTCHA not ready'))
    }

    return new Promise((resolve, reject) => {
      const timeoutId = window.setTimeout(() => {
        if (tokenWaitersRef.current?.reject === reject) {
          tokenWaitersRef.current = null
          reject(new Error('reCAPTCHA timeout'))
        }
      }, RECAPTCHA_TIMEOUT_MS)

      tokenWaitersRef.current = {
        resolve: token => {
          window.clearTimeout(timeoutId)
          resolve(token)
        },
        reject: error => {
          window.clearTimeout(timeoutId)
          reject(error)
        },
      }
      api.execute(widgetId)
    })
  }

  async function onSubmit(values: ContactFormValues) {
    const formData = new FormData()
    formData.set('name', values.name)
    formData.set('email', values.email)
    formData.set('subject', values.subject)
    formData.set('message', values.message)
    formData.set('company_url_hp', honeypotRef.current?.value ?? '')

    let token = ''
    try {
      token = await executeRecaptcha()
    } catch {
      resetRecaptcha()
      toast.error(SEND_ERROR)
      return
    }

    formData.set('recaptcha_token', token)

    try {
      const result = await sendContactMessage(formData)
      resetRecaptcha()

      if (!result.ok) {
        toast.error(result.error)
        return
      }

      reset()
      setSubjectKey(key => key + 1)
      toast.success('Mensagem enviada!', {
        description: 'Retornaremos o seu contato em breve.',
      })
    } catch {
      resetRecaptcha()
      toast.error(SEND_ERROR)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative flex flex-col gap-6"
      autoComplete="on"
      noValidate
    >
      {/* Honeypot — leave empty; hidden from users / autofill */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden opacity-0"
      >
        <label htmlFor="company_url_hp">Company URL</label>
        <input
          ref={honeypotRef}
          id="company_url_hp"
          name="company_url_hp"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>
      <div ref={widgetElRef} className="hidden" />

      <div className="flex flex-col gap-2">
        <Label htmlFor="name" className="text-primary">
          Nome completo
        </Label>
        <Input
          id="name"
          placeholder="Seu nome"
          autoComplete="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          {...register('name')}
        />
        <FieldError id="name-error" message={errors.name?.message} />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="text-primary">
          E-mail
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="voce@exemplo.com"
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          {...register('email')}
        />
        <FieldError id="email-error" message={errors.email?.message} />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="subject" className="text-primary">
          Assunto
        </Label>
        <Controller
          control={control}
          name="subject"
          render={({ field }) => (
            <Select
              key={subjectKey}
              value={field.value || undefined}
              onValueChange={field.onChange}
            >
              <SelectTrigger
                id="subject"
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
              >
                <SelectValue placeholder="Selecionar assunto" />
              </SelectTrigger>
              <SelectContent position="popper">
                {SUBJECT_OPTIONS.map(option => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        <FieldError id="subject-error" message={errors.subject?.message} />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message" className="text-primary">
          Sua mensagem
        </Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Descreva a sua solicitação..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          {...register('message')}
        />
        <FieldError id="message-error" message={errors.message?.message} />
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-auto rounded-full bg-primary px-8 py-4 text-primary-foreground text-sm hover:bg-primary/90"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </Button>
        <p className="min-w-0 flex-1 basis-48 text-muted-foreground text-sm">
          ou envie um e-mail para{' '}
          <a
            href="mailto:mbc@mbc.org.br"
            className="font-semibold text-primary underline underline-offset-4 hover:opacity-70"
          >
            mbc@mbc.org.br
          </a>
        </p>
      </div>
      <p className="text-muted-foreground text-xs leading-relaxed">
        Este site é protegido pelo reCAPTCHA e aplicam-se a{' '}
        <a
          href="https://policies.google.com/privacy"
          className="font-semibold text-primary underline underline-offset-4 hover:opacity-70"
          target="_blank"
          rel="noopener noreferrer"
        >
          Política de Privacidade
        </a>{' '}
        e os{' '}
        <a
          href="https://policies.google.com/terms"
          className="font-semibold text-primary underline underline-offset-4 hover:opacity-70"
          target="_blank"
          rel="noopener noreferrer"
        >
          Termos de Serviço
        </a>{' '}
        do Google.
      </p>
    </form>
  )
}
