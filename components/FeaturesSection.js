import { C, display, body } from '@/lib/theme'
import {
  RouteIcon,
  ClockIcon,
  DownloadCloudIcon,
  SparklesIcon,
  BookmarkIcon,
} from '@/components/Icons'
import { PhoneMockup } from '@/components/PhoneMockup'

function FeatureRow({ icon, title, bodyText, detail, mockupVariant, flip = false }) {
  return (
    <article
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))',
        gap: 'clamp(28px,5vw,72px)',
        alignItems: 'center',
        padding: 'clamp(40px,5vw,64px) 0',
        borderTop: `1px solid ${C.border}`,
        direction: flip ? 'rtl' : 'ltr',
      }}
    >
      <div style={{ direction: 'ltr' }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 16,
            backgroundColor: C.primarySoft,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
            border: `1.5px solid ${C.border}`,
          }}
        >
          {icon}
        </div>
        <h3
          style={{
            fontFamily: display,
            fontWeight: 800,
            fontSize: 'clamp(22px,3vw,34px)',
            color: C.text,
            letterSpacing: '-0.03em',
            margin: '0 0 12px',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: body,
            fontSize: 'clamp(15px,1.5vw,17px)',
            color: C.muted,
            lineHeight: 1.65,
            margin: '0 0 20px',
            maxWidth: 480,
          }}
        >
          {bodyText}
        </p>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {detail.map((d) => (
            <li
              key={d}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 8,
                fontFamily: body,
                fontSize: 14,
                color: C.muted,
              }}
            >
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  backgroundColor: C.primarySoft,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: 1,
                }}
              >
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 13l4 4L19 7" stroke={C.primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {d}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', direction: 'ltr' }}>
        <div
          style={{
            position: 'relative',
            padding: '16px 20px 20px',
            backgroundColor: C.surfaceMuted,
            borderRadius: 36,
            border: `1.5px solid ${C.border}`,
          }}
        >
          <PhoneMockup variant={mockupVariant} />
          <div
            style={{
              position: 'absolute',
              inset: -16,
              borderRadius: 48,
              border: `1px solid ${C.border}`,
              pointerEvents: 'none',
            }}
            aria-hidden="true"
          />
        </div>
      </div>
    </article>
  )
}

export default function FeaturesSection() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      style={{
        backgroundColor: C.bg,
        padding: 'clamp(56px,8vw,96px) clamp(20px,5vw,80px)',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <header style={{ marginBottom: 8 }}>
          <p
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              backgroundColor: C.primarySoft,
              borderRadius: 999,
              padding: '5px 14px',
              marginBottom: 14,
              fontFamily: body,
              fontWeight: 600,
              fontSize: 13,
              color: C.primaryDark,
            }}
          >
            Built for real trips
          </p>
          <h2
            id="features-heading"
            style={{
              fontFamily: display,
              fontWeight: 800,
              fontSize: 'clamp(28px,4.5vw,52px)',
              color: C.text,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              margin: '0 0 4px',
              maxWidth: 640,
            }}
          >
            Everything you need, nothing you don&apos;t.
          </h2>
        </header>

        <FeatureRow
          icon={<RouteIcon size={24} color={C.primary} />}
          title="Smart routes with visit times"
          bodyText="See how long each stop takes and the total walk time before you leave the hotel. Reorder stops with a drag."
          detail={[
            'Estimated visit duration per attraction',
            'Walking time between each stop',
            'Drag-to-reorder and live recalculation',
          ]}
          mockupVariant="route"
        />
        <FeatureRow
          icon={<ClockIcon size={24} color={C.primary} />}
          title="Open now — always accurate"
          bodyText="Real-time opening hours so you never walk to a closed museum on a Tuesday."
          detail={[
            'Live open / closed status on every card',
            "Today's schedule at a glance",
            'Alerts when a place closes in under an hour',
          ]}
          mockupVariant="hours"
          flip
        />
        <FeatureRow
          icon={<DownloadCloudIcon size={24} color={C.primary} />}
          title="Offline — no roaming needed"
          bodyText="Download your full itinerary before you fly. Maps, hours, and directions work without a data connection."
          detail={[
            'One-tap route download before departure',
            'Maps cached for offline navigation',
            'Works in airplane mode or poor signal',
          ]}
          mockupVariant="offline"
        />
        <FeatureRow
          icon={<SparklesIcon size={24} color={C.primary} />}
          title="AI trip assistant"
          bodyText='"Show me kid-friendly places near the Colosseum open on Sunday" — just ask in plain English.'
          detail={[
            'Natural-language trip requests',
            'Filters by distance, category, and hours',
            'Adds results directly to your route',
          ]}
          mockupVariant="ai"
          flip
        />
        <FeatureRow
          icon={<BookmarkIcon size={24} color={C.primary} />}
          title="Partner bookings, in context"
          bodyText="Skip-the-line tickets and hotel deals surfaced right inside your route — no extra app needed."
          detail={[
            'Activity tickets from verified partners',
            'Hotel links for your next stop',
            'Transparent pricing — we label partner links',
          ]}
          mockupVariant="booking"
        />
      </div>
    </section>
  )
}
