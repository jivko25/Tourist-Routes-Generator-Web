import { C, display, body } from '@/lib/theme'
import { FAQ_ITEMS } from '@/lib/content'

export default function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      style={{
        backgroundColor: C.surface,
        padding: 'clamp(56px,8vw,96px) clamp(20px,5vw,80px)',
      }}
    >
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: 'clamp(32px,4vw,48px)' }}>
          <p
            style={{
              display: 'inline-flex',
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
            Common questions
          </p>
          <h2
            id="faq-heading"
            style={{
              fontFamily: display,
              fontWeight: 800,
              fontSize: 'clamp(28px,4.5vw,44px)',
              color: C.text,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            About Travel Go
          </h2>
          <p
            style={{
              fontFamily: body,
              fontSize: 16,
              color: C.muted,
              lineHeight: 1.6,
              margin: '12px 0 0',
            }}
          >
            Straight answers about what Travel Go is, how route planning works, and whether the app is free and offline-ready.
          </p>
        </header>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="faq-item"
              style={{
                backgroundColor: C.surfaceMuted,
                borderRadius: 16,
                border: `1.5px solid ${C.border}`,
                padding: '16px 20px',
              }}
            >
              <summary
                style={{
                  fontFamily: display,
                  fontWeight: 700,
                  fontSize: 16,
                  color: C.text,
                  letterSpacing: '-0.02em',
                  cursor: 'pointer',
                  listStyle: 'none',
                }}
              >
                {item.question}
              </summary>
              <p
                style={{
                  fontFamily: body,
                  fontSize: 15,
                  color: C.muted,
                  lineHeight: 1.65,
                  margin: '12px 0 0',
                }}
              >
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
