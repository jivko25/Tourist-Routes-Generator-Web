'use client'

import { useEffect, useState } from 'react'
import { C, display, body } from '@/lib/theme'
import { MapPinIcon, PhoneIcon } from '@/components/Icons'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      aria-label="Primary"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(16px, 4vw, 64px)',
        height: 64,
        backgroundColor: scrolled ? 'rgba(247,251,255,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? `1px solid ${C.border}` : '1px solid transparent',
        transition: 'background-color 0.3s, border-color 0.3s, backdrop-filter 0.3s',
      }}
    >
      <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 10,
            backgroundColor: C.primary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MapPinIcon size={18} color="white" />
        </div>
        <span
          style={{
            fontFamily: display,
            fontWeight: 800,
            fontSize: 18,
            color: scrolled ? C.text : 'white',
            letterSpacing: '-0.03em',
            transition: 'color 0.3s',
          }}
        >
          Travel Go
        </span>
      </a>

      <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        {[
          { label: 'How it works', href: '#how-it-works' },
          { label: 'Features', href: '#features' },
          { label: 'FAQ', href: '#faq' },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="nav-link"
            style={{
              fontFamily: body,
              fontWeight: 500,
              fontSize: 14,
              color: scrolled ? C.muted : 'rgba(255,255,255,0.8)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            data-scrolled={scrolled ? 'true' : 'false'}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#download"
          className="btn-primary"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '8px 18px',
            backgroundColor: C.accent,
            color: 'white',
            borderRadius: 999,
            textDecoration: 'none',
            fontFamily: display,
            fontWeight: 700,
            fontSize: 13,
            boxShadow: '0 2px 10px rgba(249,115,22,0.24)',
          }}
        >
          <PhoneIcon size={14} />
          Download
        </a>
      </div>
    </nav>
  )
}
