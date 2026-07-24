import Image from 'next/image'
import { SITE } from '@/lib/site'
import { GetAppButton, SeeHowButton } from '@/components/Buttons'
import TravelGoIcon from '@/components/TravelGoIcon'
import { C, display, body } from '@/lib/theme'

export default function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#1a2a3a',
        overflow: 'hidden',
      }}
    >
      <Image
        src="https://images.unsplash.com/photo-1616036902568-fa623d8f0c0a?w=1920&h=1080&fit=crop&auto=format"
        alt="Travelers exploring a European city street — the kind of day Travel Go helps you plan"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center 30%', opacity: 0.72 }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(105deg, rgba(15,23,42,0.82) 0%, rgba(15,23,42,0.54) 55%, rgba(15,23,42,0.18) 100%), linear-gradient(to top, rgba(15,23,42,0.65) 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />

      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 1280,
          margin: '0 auto',
          padding: 'clamp(80px,12vw,140px) clamp(20px,5vw,80px) clamp(60px,8vw,100px)',
        }}
      >
        <p
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            backgroundColor: 'rgba(59,130,246,0.22)',
            border: '1px solid rgba(59,130,246,0.35)',
            borderRadius: 999,
            padding: '5px 14px',
            marginBottom: 24,
            backdropFilter: 'blur(6px)',
            fontFamily: body,
            fontWeight: 500,
            fontSize: 13,
            color: '#93c5fd',
            letterSpacing: '0.02em',
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: C.primary, display: 'inline-block' }} />
          City travel, simplified
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(14px, 2vw, 28px)',
            marginBottom: 'clamp(16px, 2.5vw, 28px)',
          }}
        >
          <span style={{ width: 'clamp(52px, 8vw, 88px)', height: 'clamp(52px, 8vw, 88px)', display: 'inline-flex' }}>
            <TravelGoIcon size={88} priority style={{ width: '100%', height: '100%' }} />
          </span>
          <p
            style={{
              fontFamily: display,
              fontWeight: 900,
              fontSize: 'clamp(52px, 9vw, 110px)',
              color: 'white',
              letterSpacing: '-0.04em',
              lineHeight: 0.94,
              margin: 0,
            }}
          >
            Travel Go
          </p>
        </div>

        <h1
          id="hero-heading"
          style={{
            fontFamily: display,
            fontWeight: 700,
            fontSize: 'clamp(22px, 3.8vw, 48px)',
            color: 'rgba(255,255,255,0.92)',
            letterSpacing: '-0.025em',
            lineHeight: 1.2,
            maxWidth: 620,
            margin: '0 0 clamp(14px,2vw,20px)',
          }}
        >
          {SITE.tagline}
        </h1>

        <p
          style={{
            fontFamily: body,
            fontSize: 'clamp(15px, 1.8vw, 20px)',
            color: 'rgba(255,255,255,0.72)',
            lineHeight: 1.6,
            maxWidth: 520,
            margin: '0 0 clamp(28px,4vw,44px)',
          }}
        >
          Discover places, build a smart route, and book what matters — from your phone.
        </p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <GetAppButton />
          <SeeHowButton />
        </div>

        <ul
          style={{
            display: 'flex',
            gap: 'clamp(20px,4vw,48px)',
            marginTop: 'clamp(36px,5vw,64px)',
            flexWrap: 'wrap',
            listStyle: 'none',
            padding: 0,
            margin: 'clamp(36px,5vw,64px) 0 0',
          }}
        >
          {[
            { val: `${SITE.stats.cities}+`, label: 'Cities covered' },
            { val: '50k+', label: 'Routes planned' },
            { val: `${SITE.app.rating}★`, label: 'App rating' },
          ].map((s) => (
            <li key={s.label}>
              <div
                style={{
                  fontFamily: display,
                  fontWeight: 800,
                  fontSize: 'clamp(22px,3vw,32px)',
                  color: 'white',
                  letterSpacing: '-0.03em',
                }}
              >
                {s.val}
              </div>
              <div style={{ fontFamily: body, fontSize: 13, color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>
                {s.label}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 28,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
          opacity: 0.5,
        }}
        aria-hidden="true"
      >
        <div
          style={{
            width: 22,
            height: 36,
            borderRadius: 11,
            border: '2px solid white',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 6,
          }}
        >
          <div className="scroll-bob" style={{ width: 3, height: 8, borderRadius: 999, backgroundColor: 'white' }} />
        </div>
      </div>
    </section>
  )
}
