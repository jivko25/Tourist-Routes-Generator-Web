import QRCode from 'qrcode'
import { C, display, body } from '@/lib/theme'
import { SITE, getQrUrl } from '@/lib/site'

export async function QRCodeSVG({ size = 200 }) {
  const qrUrl = getQrUrl()
  const svg = await QRCode.toString(qrUrl, {
    type: 'svg',
    margin: 2,
    width: size,
    errorCorrectionLevel: 'M',
    color: {
      dark: C.text,
      light: '#FFFFFF',
    },
  })

  return (
    <div
      style={{ width: size, height: size, lineHeight: 0 }}
      role="img"
      aria-label={`QR code — scan to open Travel Go install page at ${qrUrl}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}

export async function QrDownloadCard({ compact = false }) {
  return (
    <div
      style={{
        backgroundColor: C.surface,
        borderRadius: 28,
        border: `1.5px solid ${C.border}`,
        padding: compact ? 20 : 28,
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
        boxShadow: '0 4px 24px rgba(59,130,246,0.08)',
        width: 'fit-content',
      }}
    >
      <div style={{ borderRadius: 16, overflow: 'hidden', border: `1.5px solid ${C.border}` }}>
        <QRCodeSVG size={compact ? 140 : 180} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            fontFamily: display,
            fontWeight: 700,
            fontSize: compact ? 13 : 14,
            color: C.text,
          }}
        >
          Scan to install
        </div>
        <div
          style={{
            fontFamily: body,
            fontSize: compact ? 11 : 12,
            color: C.muted,
            marginTop: 2,
          }}
        >
          Opens a page — then tap Download APK
        </div>
      </div>
    </div>
  )
}

export function DownloadBadgeRow({ stacked = false }) {
  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    padding: '10px 18px',
    backgroundColor: C.text,
    color: 'white',
    borderRadius: 12,
    cursor: 'pointer',
    textDecoration: 'none',
    fontFamily: body,
    minWidth: 168,
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: stacked ? 'column' : 'row',
        gap: 10,
        alignItems: stacked ? 'flex-start' : 'center',
        flexWrap: 'wrap',
      }}
    >
      <a
        href={SITE.app.downloadPath}
        className="store-badge"
        style={badgeStyle}
        aria-label="Download Travel Go APK for Android"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 3v12m0 0l-4-4m4 4l4-4M5 19h14"
            stroke="#4CAF50"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div>
          <div style={{ fontSize: 9, opacity: 0.75, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            Android
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: '-0.02em', fontFamily: display }}>
            Download APK
          </div>
        </div>
      </a>
      <div
        style={{
          ...badgeStyle,
          backgroundColor: '#1a1a2e',
          opacity: 0.55,
          cursor: 'default',
          minWidth: 148,
        }}
        aria-label="App Store coming soon"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <div>
          <div style={{ fontSize: 9, opacity: 0.75, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            iOS
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: '-0.02em', fontFamily: display }}>
            Coming soon
          </div>
        </div>
      </div>
    </div>
  )
}

/** @deprecated use DownloadBadgeRow */
export const StoreBadgeRow = DownloadBadgeRow
