/** Site-wide constants for SEO, GEO, and branding */
export const SITE = {
  name: 'Travel Go',
  legalName: 'Travel Go',
  tagline: 'Plan the perfect city day in minutes.',
  description:
    'Travel Go is a free mobile app that helps travelers discover attractions, build optimized walking routes, check real-time opening hours, save itineraries offline, and book activities — all from one place.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://travelgo.app',
  locale: 'en_US',
  language: 'en',
  email: 'hello@travelgo.app',
  twitter: '@travelgo',
  app: {
    /**
     * QR opens this HTML page first (trusted context).
     * The page has a button that starts the real APK download (user gesture).
     * Direct APK URLs from QR are blocked by Android Chrome as unsafe.
     */
    qrPath: '/get-app',
    /** Direct APK — use only from an on-page button click */
    downloadPath: '/apk/travel-go.apk',
    apkPath: '/apk/travel-go.apk',
    apkFileName: 'travel-go.apk',
    ios: null,
    rating: 4.8,
    ratingCount: 12500,
    price: '0',
  },
  stats: {
    cities: 200,
    routesPlanned: 50000,
  },
  sameAs: [
    'https://www.instagram.com/travelgo',
    'https://twitter.com/travelgo',
  ],
}

/** Absolute URL encoded in the QR code — landing page, NOT the APK. */
export function getQrUrl() {
  return `${SITE.url}${SITE.app.qrPath}`
}

/** Direct APK URL — for buttons only (user tap). */
export function getDownloadUrl() {
  return `${SITE.url}${SITE.app.apkPath}`
}

export const SEO = {
  title: 'Travel Go — Smart City Travel Routes & Offline Itineraries',
  titleTemplate: '%s | Travel Go',
  description:
    'Plan the perfect city day in minutes with Travel Go. Discover places, build smart walking routes, check live opening hours, save trips offline, and book activities from your phone.',
  keywords: [
    'city travel app',
    'walking route planner',
    'offline travel itinerary',
    'attraction opening hours',
    'AI trip assistant',
    'city day planner',
    'Travel Go',
    'tourist route generator',
  ],
}
