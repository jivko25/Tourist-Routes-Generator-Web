import { C, display, body } from '@/lib/theme'
import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for the Travel Go mobile app and website.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '80px 24px', fontFamily: body, color: C.text }}>
      <p style={{ marginBottom: 24 }}>
        <Link href="/" style={{ color: C.primaryDark, textDecoration: 'none', fontWeight: 600 }}>
          ← Travel Go
        </Link>
      </p>
      <h1 style={{ fontFamily: display, fontWeight: 800, fontSize: 40, letterSpacing: '-0.03em', margin: '0 0 16px' }}>
        Privacy Policy
      </h1>
      <p style={{ color: C.muted, lineHeight: 1.7 }}>
        Travel Go respects your privacy. This page will describe what data we collect, how we use it, and your choices.
        For questions, contact{' '}
        <a href="mailto:hello@travelgo.app" style={{ color: C.primaryDark }}>
          hello@travelgo.app
        </a>
        .
      </p>
    </main>
  )
}
