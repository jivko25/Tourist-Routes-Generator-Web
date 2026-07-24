import { C, display, body } from '@/lib/theme'
import { PhoneIcon } from '@/components/Icons'
import { PrimaryButton } from '@/components/Buttons'
import { QrDownloadCard, DownloadBadgeRow } from '@/components/DownloadAssets'
import { SITE } from '@/lib/site'
import { MapPinIcon } from '@/components/Icons'

export function TrustSection() {
  return (
    <aside
      aria-label="Partner disclosure"
      style={{
        backgroundColor: C.surface,
        padding: '28px clamp(20px,5vw,80px)',
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
      }}
    >
      <p
        style={{
          fontFamily: body,
          fontSize: 14,
          color: C.muted,
          textAlign: 'center',
          margin: 0,
          lineHeight: 1.6,
          maxWidth: 680,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        Some links in Travel Go connect to partner hotels and activity providers. We may earn a commission when you
        book — at no extra cost to you. Partner links are always labeled so you know exactly what you&apos;re tapping.
      </p>
    </aside>
  )
}

export async function FinalCTASection() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      style={{
        backgroundColor: C.bg,
        padding: 'clamp(64px,10vw,120px) clamp(20px,5vw,80px)',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <h2
          id="final-cta-heading"
          style={{
            fontFamily: display,
            fontWeight: 900,
            fontSize: 'clamp(34px,6vw,72px)',
            color: C.text,
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
            margin: '0 0 16px',
          }}
        >
          Your next city, <span style={{ color: C.primary }}>sorted.</span>
        </h2>
        <p
          style={{
            fontFamily: body,
            fontSize: 'clamp(15px,1.8vw,18px)',
            color: C.muted,
            lineHeight: 1.6,
            margin: '0 0 32px',
          }}
        >
          Join thousands of travelers who plan smarter, walk further, and miss nothing.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
          <PrimaryButton size="lg" href={SITE.app.downloadPath}>
            <PhoneIcon size={18} />
            Download Travel Go
          </PrimaryButton>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <QrDownloadCard compact />
          <DownloadBadgeRow />
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer
      style={{
        backgroundColor: C.bg,
        borderTop: `1px solid ${C.border}`,
        padding: '28px clamp(20px,5vw,80px)',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: 8,
              backgroundColor: C.primary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <MapPinIcon size={14} color="white" />
          </div>
          <span
            style={{
              fontFamily: display,
              fontWeight: 800,
              fontSize: 15,
              color: C.text,
              letterSpacing: '-0.02em',
            }}
          >
            Travel Go
          </span>
        </div>

        <nav style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }} aria-label="Footer">
          {[
            { label: 'Privacy', href: '/privacy' },
            { label: 'Terms', href: '/terms' },
            { label: 'Contact', href: `mailto:hello@travelgo.app` },
            { label: 'FAQ', href: '#faq' },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="footer-link"
              style={{
                fontFamily: body,
                fontSize: 13,
                color: C.muted,
                textDecoration: 'none',
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <p
          style={{
            fontFamily: body,
            fontSize: 12,
            color: C.muted,
            opacity: 0.7,
            margin: 0,
          }}
        >
          © {year} Travel Go. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
