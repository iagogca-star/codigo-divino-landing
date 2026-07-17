import { generateEventId } from './event-id'

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void
  }
}

export function trackEvent(
  name: string,
  customData?: Record<string, unknown>
) {
  const eventId = generateEventId()

  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', name, { event_id: eventId, ...customData })
  }

  fetch('/api/meta-event', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      event_name: name,
      event_id: eventId,
      event_time: Math.floor(Date.now() / 1000),
      custom_data: customData,
    }),
  }).catch(() => {})
}
