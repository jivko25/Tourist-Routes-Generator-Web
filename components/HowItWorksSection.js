import { C, display, body } from '@/lib/theme'
import { MapPinIcon, RouteIcon, BookmarkIcon } from '@/components/Icons'
import { HOW_TO_STEPS } from '@/lib/content'

const ICONS = [MapPinIcon, RouteIcon, BookmarkIcon]

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      style={{
        backgroundColor: C.surface,
        padding: 'clamp(56px,8vw,96px) clamp(20px,5vw,80px)',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: 'clamp(36px,5vw,64px)' }}>
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
            Simple by design
          </p>
          <h2
            id="how-heading"
            style={{
              fontFamily: display,
              fontWeight: 800,
              fontSize: 'clamp(28px,4.5vw,52px)',
              color: C.text,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Three steps to your best city day
          </h2>
        </header>

        <ol
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 20,
            listStyle: 'none',
            margin: 0,
            padding: 0,
            counterReset: 'step',
          }}
        >
          {HOW_TO_STEPS.map((s, i) => {
            const Icon = ICONS[i]
            return (
              <li
                key={s.name}
                className="step-card"
                style={{
                  backgroundColor: C.surfaceMuted,
                  borderRadius: 24,
                  padding: 'clamp(24px,3vw,36px)',
                  border: `1.5px solid ${C.border}`,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      backgroundColor: C.primarySoft,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: `1.5px solid ${C.border}`,
                    }}
                  >
                    <Icon size={24} color={C.primary} />
                  </div>
                  <span
                    style={{
                      fontFamily: display,
                      fontWeight: 900,
                      fontSize: 13,
                      color: C.primary,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: display,
                      fontWeight: 700,
                      fontSize: 'clamp(17px,2vw,22px)',
                      color: C.text,
                      letterSpacing: '-0.02em',
                      margin: '0 0 8px',
                    }}
                  >
                    {s.name}
                  </h3>
                  <p style={{ fontFamily: body, fontSize: 15, color: C.muted, lineHeight: 1.6, margin: 0 }}>
                    {s.text}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
