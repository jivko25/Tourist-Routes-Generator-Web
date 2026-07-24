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
     * Direct APK URL (no redirect). Android downloads fail often with
     * /download → redirect + Content-Disposition on large files.
     */
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

/** Absolute URL encoded in the QR code (must be reachable from a phone). */
export function getDownloadUrl() {
  return `${SITE.url}${SITE.app.downloadPath}`
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
