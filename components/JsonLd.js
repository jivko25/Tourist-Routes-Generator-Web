import { SITE, SEO } from '@/lib/site'
import { FAQ_ITEMS, HOW_TO_STEPS } from '@/lib/content'

export default function JsonLd() {
  const organization = {
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    description: SITE.description,
    sameAs: SITE.sameAs,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE.url}/icon.svg`,
    },
  }

  const website = {
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SEO.description,
    publisher: { '@id': `${SITE.url}/#organization` },
    inLanguage: SITE.language,
  }

  const software = {
    '@type': 'SoftwareApplication',
    '@id': `${SITE.url}/#app`,
    name: SITE.name,
    applicationCategory: 'TravelApplication',
    operatingSystem: 'Android',
    downloadUrl: `${SITE.url}${SITE.app.downloadPath}`,
    installUrl: `${SITE.url}${SITE.app.downloadPath}`,
    offers: {
      '@type': 'Offer',
      price: SITE.app.price,
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE.app.rating,
      ratingCount: SITE.app.ratingCount,
      bestRating: 5,
      worstRating: 1,
    },
    description: SITE.description,
    url: SITE.url,
    featureList: [
      'Smart walking route optimization',
      'Real-time attraction opening hours',
      'Offline itinerary download',
      'AI trip assistant',
      'In-context partner activity bookings',
    ],
  }

  const howTo = {
    '@type': 'HowTo',
    '@id': `${SITE.url}/#howto`,
    name: 'How to plan a city day with Travel Go',
    description:
      'Use Travel Go to search a city, pick attractions, optimize a walking route, then walk, save, share, and book.',
    step: HOW_TO_STEPS.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  }

  const faq = {
    '@type': 'FAQPage',
    '@id': `${SITE.url}/#faq`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  const webPage = {
    '@type': 'WebPage',
    '@id': `${SITE.url}/#webpage`,
    url: SITE.url,
    name: SEO.title,
    description: SEO.description,
    isPartOf: { '@id': `${SITE.url}/#website` },
    about: { '@id': `${SITE.url}/#app` },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${SITE.url}/opengraph-image`,
    },
    inLanguage: SITE.language,
  }

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [organization, website, software, howTo, faq, webPage],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
