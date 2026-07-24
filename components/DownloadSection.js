import { C, display, body } from '@/lib/theme'
import { PhoneIcon } from '@/components/Icons'
import { QRCodeSVG, DownloadBadgeRow } from '@/components/DownloadAssets'
import { SITE } from '@/lib/site'

export default async function DownloadSection() {
  return (
    <section
      id="download"
      aria-labelledby="download-heading"
      style={{
        backgroundColor: C.surfaceMuted,
        padding: 'clamp(56px,8vw,96px) clamp(20px,5vw,80px)',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))',
          gap: 'clamp(36px,5vw,64px)',
          alignItems: 'center',
        }}
      >
        <div>
          <p
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              backgroundColor: C.primarySoft,
              borderRadius: 999,
              padding: '5px 14px',
              marginBottom: 20,
              fontFamily: body,
              fontWeight: 600,
              fontSize: 13,
              color: C.primaryDark,
            }}
          >
            <PhoneIcon size={13} color={C.primaryDark} />
            Android APK available
          </p>

          <h2
            id="download-heading"
            style={{
              fontFamily: display,
              fontWeight: 800,
              fontSize: 'clamp(28px,4vw,48px)',
              color: C.text,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              margin: '0 0 14px',
            }}
          >
            Get Travel Go on your phone
          </h2>
          <p
            style={{
              fontFamily: body,
              fontSize: 'clamp(15px,1.5vw,17px)',
              color: C.muted,
              lineHeight: 1.65,
              margin: '0 0 28px',
              maxWidth: 440,
            }}
          >
            Download the Android APK free. After download, open the file and allow install from this source if prompted.
            Play Store listing coming later.
          </p>

          <DownloadBadgeRow />

          <p
            style={{
              marginTop: 16,
              fontFamily: body,
              fontSize: 13,
              color: C.muted,
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="9" stroke={C.muted} strokeWidth="1.8" />
              <path d="M12 8v4l2 2" stroke={C.muted} strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            Direct APK: {SITE.app.apkPath}
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              backgroundColor: C.surface,
              borderRadius: 28,
              border: `1.5px solid ${C.border}`,
              padding: 32,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 20,
              boxShadow: '0 8px 40px rgba(59,130,246,0.10)',
              maxWidth: 320,
              width: '100%',
            }}
          >
            <div
              style={{
                borderRadius: 20,
                overflow: 'hidden',
                border: `1.5px solid ${C.border}`,
                padding: 12,
                backgroundColor: 'white',
              }}
            >
              <QRCodeSVG size={200} />
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: display, fontWeight: 700, fontSize: 16, color: C.text, marginBottom: 4 }}>
                Scan to install
              </div>
              <div style={{ fontFamily: body, fontSize: 13, color: C.muted }}>
                Opens a page — then tap Download APK
              </div>
            </div>

            <div style={{ display: 'flex', gap: 8, width: '100%' }}>
              {[
                { label: 'Android APK', available: true, note: 'Direct download' },
                { label: 'App Store', available: false, note: 'Coming soon' },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    flex: 1,
                    padding: '8px 6px',
                    borderRadius: 12,
                    backgroundColor: s.available ? C.primarySoft : C.surfaceMuted,
                    border: `1px solid ${C.border}`,
                    textAlign: 'center',
                    fontFamily: body,
                    fontSize: 11,
                    color: s.available ? C.primaryDark : C.muted,
                    fontWeight: s.available ? 600 : 400,
                  }}
                >
                  {s.label}
                  <div style={{ fontSize: 10, color: C.muted, marginTop: 1, opacity: 0.75 }}>{s.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
