import { C, display, body } from '@/lib/theme'

const QR_MATRIX = [
  [1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1],
  [1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1],
  [1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1],
  [1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1],
  [1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
  [0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0],
  [1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1],
  [0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0],
  [1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0],
  [0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1],
  [1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0],
  [0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1],
  [1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0],
  [1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1],
  [1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0],
  [1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1],
  [1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0],
  [1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0],
  [1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1],
]

export function QRCodeSVG({ size = 200 }) {
  const N = 21
  const quiet = 3
  const total = N + quiet * 2
  const cell = size / total
  const off = quiet * cell

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="QR code to download Travel Go"
    >
      <rect width={size} height={size} fill="white" />
      {QR_MATRIX.map((row, r) =>
        row.map((bit, c) =>
          bit ? (
            <rect
              key={`${r}-${c}`}
              x={off + c * cell}
              y={off + r * cell}
              width={cell}
              height={cell}
              fill={C.text}
            />
          ) : null,
        ),
      )}
      <rect x={size / 2 - 18} y={size / 2 - 10} width={36} height={20} rx={4} fill="white" />
      <text
        x={size / 2}
        y={size / 2 + 5}
        textAnchor="middle"
        fill={C.primary}
        fontSize={10}
        fontWeight="800"
        fontFamily={display}
      >
        TG
      </text>
    </svg>
  )
}

export function QrDownloadCard({ compact = false }) {
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
          Scan to download
        </div>
        <div
          style={{
            fontFamily: body,
            fontSize: compact ? 11 : 12,
            color: C.muted,
            marginTop: 2,
          }}
        >
          Point your camera at the code
        </div>
      </div>
    </div>
  )
}

export function StoreBadgeRow({ stacked = false }) {
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
    minWidth: 148,
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
      <a href="#download" className="store-badge" style={badgeStyle} aria-label="Get Travel Go on Google Play">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 3.5L13.5 12 4 20.5" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 3.5L19 12 13.5 12" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 20.5L19 12 13.5 12" stroke="#F44336" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 3.5L4 20.5" stroke="#FFB300" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <div>
          <div style={{ fontSize: 9, opacity: 0.75, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Get it on</div>
          <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: '-0.02em', fontFamily: display }}>Google Play</div>
        </div>
      </a>
      <a
        href="#download"
        className="store-badge"
        style={{ ...badgeStyle, backgroundColor: '#1a1a2e' }}
        aria-label="Download Travel Go on the App Store"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <div>
          <div style={{ fontSize: 9, opacity: 0.75, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Download on the</div>
          <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: '-0.02em', fontFamily: display }}>App Store</div>
        </div>
      </a>
    </div>
  )
}
