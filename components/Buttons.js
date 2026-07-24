import { C, display } from '@/lib/theme'
import { PhoneIcon, ChevronRightIcon } from '@/components/Icons'

export function PrimaryButton({ children, size = 'md', href = '#download' }) {
  const pad = size === 'lg' ? '14px 32px' : size === 'sm' ? '8px 18px' : '11px 24px'
  const fs = size === 'lg' ? 17 : size === 'sm' ? 13 : 15
  return (
    <a
      href={href}
      className="btn-primary"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: pad,
        backgroundColor: C.accent,
        color: 'white',
        borderRadius: 999,
        border: 'none',
        cursor: 'pointer',
        fontFamily: display,
        fontWeight: 700,
        fontSize: fs,
        letterSpacing: '-0.01em',
        boxShadow: '0 2px 12px rgba(249,115,22,0.28)',
        textDecoration: 'none',
      }}
    >
      {children}
    </a>
  )
}

export function SecondaryButton({ children, size = 'md', href = '#how-it-works' }) {
  const pad = size === 'lg' ? '13px 31px' : size === 'sm' ? '7px 17px' : '10px 23px'
  const fs = size === 'lg' ? 17 : size === 'sm' ? 13 : 15
  return (
    <a
      href={href}
      className="btn-secondary"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: pad,
        backgroundColor: 'rgba(255,255,255,0.18)',
        color: 'white',
        borderRadius: 999,
        border: '1.5px solid rgba(255,255,255,0.45)',
        cursor: 'pointer',
        fontFamily: display,
        fontWeight: 600,
        fontSize: fs,
        letterSpacing: '-0.01em',
        backdropFilter: 'blur(8px)',
        textDecoration: 'none',
      }}
    >
      {children}
    </a>
  )
}

export function GetAppButton({ size = 'lg' }) {
  return (
    <PrimaryButton size={size} href="#download">
      <PhoneIcon size={18} />
      Get the app
    </PrimaryButton>
  )
}

export function SeeHowButton({ size = 'lg' }) {
  return (
    <SecondaryButton size={size} href="#how-it-works">
      See how it works
      <ChevronRightIcon size={18} color="white" />
    </SecondaryButton>
  )
}
