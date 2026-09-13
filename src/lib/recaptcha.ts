import 'server-only'

const SITEVERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify'

function isRecaptchaSuccess(data: unknown): boolean {
  if (typeof data !== 'object' || data === null) return false
  return 'success' in data && data.success === true
}

/** Verifica o token do reCAPTCHA v2 no servidor. Fail-closed se faltar secret. */
export async function verifyRecaptchaToken(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY
  if (!secret) {
    console.error('Contact form misconfigured: missing RECAPTCHA_SECRET_KEY.')
    return false
  }

  const trimmed = token.trim()
  if (!trimmed) return false

  try {
    const response = await fetch(SITEVERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: trimmed }),
    })

    if (!response.ok) {
      console.error('reCAPTCHA siteverify HTTP error:', response.status)
      return false
    }

    const data: unknown = await response.json()
    return isRecaptchaSuccess(data)
  } catch (error) {
    console.error('reCAPTCHA siteverify failed:', error)
    return false
  }
}
