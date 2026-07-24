import Nav from '@/components/Nav'
import HeroSection from '@/components/HeroSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import FeaturesSection from '@/components/FeaturesSection'
import DownloadSection from '@/components/DownloadSection'
import FaqSection from '@/components/FaqSection'
import { TrustSection, FinalCTASection, Footer } from '@/components/SiteChrome'
import { C, body } from '@/lib/theme'
import { SITE } from '@/lib/site'

export default function HomePage() {
  return (
    <div style={{ fontFamily: body, backgroundColor: C.bg }}>
      <a href="#main" className="sr-only">
        Skip to main content
      </a>
      <Nav />
      <main id="main">
        <HeroSection />

        {/* GEO: concise entity summary for AI crawlers & answer engines */}
        <section
          aria-labelledby="about-travel-go"
          style={{
            maxWidth: 860,
            margin: '0 auto',
            padding: 'clamp(40px,6vw,64px) clamp(20px,5vw,80px)',
          }}
        >
          <h2
            id="about-travel-go"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(24px,3vw,36px)',
              color: C.text,
              letterSpacing: '-0.03em',
              margin: '0 0 12px',
            }}
          >
            What is Travel Go?
          </h2>
          <p
            style={{
              fontFamily: body,
              fontSize: 17,
              color: C.muted,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {SITE.description} Travel Go covers {SITE.stats.cities}+ cities, has helped travelers plan{' '}
            {SITE.stats.routesPlanned.toLocaleString()}+ routes, and is rated {SITE.app.rating} stars.
            Download it free at {SITE.url.replace('https://', '')}.
          </p>
        </section>

        <HowItWorksSection />
        <FeaturesSection />
        <DownloadSection />
        <FaqSection />
        <TrustSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}
