import type { VercelRequest, VercelResponse } from '@vercel/node'

const PIXEL_ID = process.env.META_PIXEL_ID!
const ACCESS_TOKEN = process.env.META_CAPI_TOKEN!

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body = req.body
  const eventId = body.event_id || `purchase-${Date.now()}`
  const value = body.value || body.amount || 0
  const currency = body.currency || 'USD'
  const userEmail = body.email || body.customer_email || ''
  const userPhone = body.phone || body.customer_phone || ''

  const userData: Record<string, string> = {}

  if (userEmail) {
    const crypto = await import('crypto')
    userData.em = crypto.createHash('sha256').update(userEmail.toLowerCase().trim()).digest('hex')
  }
  if (userPhone) {
    const crypto = await import('crypto')
    userData.ph = crypto.createHash('sha256').update(userPhone.replace(/\D/g, '')).digest('hex')
  }

  const ip =
    (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
    req.socket.remoteAddress ||
    ''
  if (ip) userData.client_ip_address = ip

  const ua = req.headers['user-agent']
  if (ua) userData.client_user_agent = ua

  try {
    const response = await fetch(
      `https://graph.facebook.com/v19.0/${PIXEL_ID}/events`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: [
            {
              event_name: 'Purchase',
              event_id: eventId,
              event_time: Math.floor(Date.now() / 1000),
              user_data: userData,
              custom_data: {
                value: Number(value),
                currency,
              },
              action_source: 'website',
            },
          ],
          access_token: ACCESS_TOKEN,
        }),
      }
    )

    const result = await response.json()
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send Purchase event to Meta' })
  }
}
