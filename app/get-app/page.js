import { C, display, body } from '@/lib/theme'
import { SITE } from '@/lib/site'
import TravelGoIcon from '@/components/TravelGoIcon'
import Link from 'next/link'

export const metadata = {
  title: 'Download Travel Go',
  description:
    'Download the Travel Go Android APK. Tap the button below to start the install file download.',
  alternates: { canonical: '/get-app' },
  robots: { index: true, follow: true },
}

export default function GetAppPage() {
  return (
    <main
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 20px',
        background:
          'radial-gradient(ellipse at top, #E8F3FF 0%, #F7FBFF 45%, #EEF5FF 100%)',
        fontFamily: body,
        color: C.text,
        textAlign: 'center',
      }}
    >
      <Link
        href="/"
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          fontSize: 14,
          color: C.muted,
          textDecoration: 'none',
          fontWeight: 500,
        }}
      >
        ← Home
      </Link>

      <TravelGoIcon size={88} priority />

      <h1
        style={{
          fontFamily: display,
          fontWeight: 800,
          fontSize: 'clamp(28px, 6vw, 40px)',
          letterSpacing: '-0.03em',
          margin: '20px 0 8px',
        }}
      >
        Install Travel Go
      </h1>
      <p
        style={{
          fontSize: 16,
          color: C.muted,
          lineHeight: 1.6,
          maxWidth: 360,
          margin: '0 0 28px',
        }}
      >
        Android blocks automatic APK downloads from QR codes. Tap the button below to download the install file
        safely.
      </p>

      <a
        href={SITE.app.apkPath}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          padding: '16px 32px',
          backgroundColor: C.accent,
          color: 'white',
          borderRadius: 999,
          textDecoration: 'none',
          fontFamily: display,
          fontWeight: 700,
          fontSize: 17,
          boxShadow: '0 4px 20px rgba(249,115,22,0.35)',
          minWidth: 240,
        }}
      >
        Download APK
      </a>

      <ol
        style={{
          textAlign: 'left',
          maxWidth: 360,
          margin: '36px 0 0',
          padding: '20px 20px 20px 40px',
          backgroundColor: C.surface,
          borderRadius: 20,
          border: `1.5px solid ${C.border}`,
          color: C.muted,
          fontSize: 14,
          lineHeight: 1.55,
        }}
      >
        <li style={{ marginBottom: 8 }}>Tap <strong style={{ color: C.text }}>Download APK</strong> and confirm if asked.</li>
        <li style={{ marginBottom: 8 }}>Open the file from Downloads / Notifications.</li>
        <li>If blocked, allow installs from this browser in Android settings, then tap the file again.</li>
      </ol>

      <p style={{ marginTop: 24, fontSize: 12, color: C.muted }}>
        File: {SITE.app.apkFileName} · Free · Android
      </p>
    </main>
  )
}
