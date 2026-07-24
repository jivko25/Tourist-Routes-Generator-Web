import { ImageResponse } from 'next/og'

export const alt = 'Travel Go — plan the perfect city day in minutes'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 64,
          background: 'linear-gradient(135deg, #0F172A 0%, #1e3a5f 50%, #2563EB 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: '#3B82F6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            TG
          </div>
          <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.03em' }}>Travel Go</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, maxWidth: 900 }}>
            Plan the perfect city day in minutes.
          </div>
          <div style={{ fontSize: 28, color: 'rgba(255,255,255,0.75)', maxWidth: 720 }}>
            Smart walking routes · Live hours · Offline itineraries · AI assistant
          </div>
        </div>
        <div style={{ fontSize: 22, color: 'rgba(255,255,255,0.55)' }}>travelgo.app</div>
      </div>
    ),
    { ...size },
  )
}
