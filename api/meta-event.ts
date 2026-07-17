import type { VercelRequest, VercelResponse } from '@vercel/node'

const PIXEL_ID = process.env.META_PIXEL_ID!
const ACCESS_TOKEN = process.env.META_CAPI_TOKEN!

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { event_name, event_id, event_time, custom_data } = req.body

  if (!event_name || !event_id) {
    return res.status(400).json({ error: 'event_name and event_id are required' })
  }

  const userData: Record<string, string> = {}

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
              event_name,
              event_id,
              event_time,
              user_data: userData,
              custom_data: custom_data || {},
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
    return res.status(500).json({ error: 'Failed to send event to Meta' })
  }
}
