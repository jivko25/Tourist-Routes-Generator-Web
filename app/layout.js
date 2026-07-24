import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google'
import './globals.css'
import { SITE, SEO } from '@/lib/site'
import JsonLd from '@/components/JsonLd'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display-loaded',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body-loaded',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SEO.title,
    template: SEO.titleTemplate,
  },
  description: SEO.description,
  keywords: SEO.keywords,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: 'travel',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: SEO.title,
    description: SEO.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO.title,
    description: SEO.description,
    site: SITE.twitter,
    creator: SITE.twitter,
  },
  icons: {
    icon: [
      { url: '/TravelGoIcon.png', type: 'image/png', sizes: 'any' },
    ],
    apple: [{ url: '/TravelGoIcon.png', type: 'image/png' }],
    shortcut: '/TravelGoIcon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  appleWebApp: {
    title: SITE.name,
    capable: true,
    statusBarStyle: 'default',
  },
  other: {
    'ai-content-declaration': 'human-authored product marketing page for Travel Go mobile app',
  },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F7FBFF' },
    { media: '(prefers-color-scheme: dark)', color: '#0F172A' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang={SITE.language} className={`${plusJakarta.variable} ${dmSans.variable}`}>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM guidance" />
        <link rel="icon" href="/TravelGoIcon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/TravelGoIcon.png" />
      </head>
      <body style={{ fontFamily: 'var(--font-body-loaded), var(--font-body)' }}>
        <JsonLd />
        {children}
      </body>
    </html>
  )
}
