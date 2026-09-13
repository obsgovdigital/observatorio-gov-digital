interface GrecaptchaRenderParameters {
  sitekey: string
  size?: 'invisible' | 'compact' | 'normal'
  callback?: (token: string) => void
  'error-callback'?: () => void
  'expired-callback'?: () => void
}

interface GrecaptchaApi {
  ready(callback: () => void): void
  render(
    container: HTMLElement | string,
    parameters: GrecaptchaRenderParameters
  ): number
  execute(widgetId?: number): void
  reset(widgetId?: number): void
  getResponse(widgetId?: number): string
}

interface Window {
  grecaptcha?: GrecaptchaApi
}
