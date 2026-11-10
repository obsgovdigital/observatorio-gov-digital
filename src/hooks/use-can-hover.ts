'use client'

import * as React from 'react'

const QUERY = '(hover: hover) and (pointer: fine)'

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(QUERY)
  mq.addEventListener('change', onChange)
  return () => mq.removeEventListener('change', onChange)
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches
}

// No servidor assume desktop: o HTML inicial usa Tooltip e o touch troca após hidratar.
function getServerSnapshot() {
  return true
}

/** `true` quando o dispositivo tem ponteiro preciso com hover (mouse/trackpad). */
export function useCanHover() {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
