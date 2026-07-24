import { C, display, body } from '@/lib/theme'
import Link from 'next/link'
import TravelGoIcon from '@/components/TravelGoIcon'

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for the Travel Go mobile app and website.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '80px 24px', fontFamily: body, color: C.text }}>
      <p style={{ marginBottom: 24 }}>
        <Link
          href="/"
          style={{
            color: C.primaryDark,
            textDecoration: 'none',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <TravelGoIcon size={28} />
          Travel Go
        </Link>
      </p>
      <h1 style={{ fontFamily: display, fontWeight: 800, fontSize: 40, letterSpacing: '-0.03em', margin: '0 0 16px' }}>
        Terms of Service
      </h1>
      <p style={{ color: C.muted, lineHeight: 1.7 }}>
        By using Travel Go you agree to these terms. This page will outline acceptable use, partner bookings, and
        liability. Contact{' '}
        <a href="mailto:hello@travelgo.app" style={{ color: C.primaryDark }}>
          hello@travelgo.app
        </a>{' '}
        with questions.
      </p>
    </main>
  )
}
