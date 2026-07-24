import { C } from '@/lib/theme'

export function MapPinIcon({ size = 20, color = C.primary }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        fill={color}
        opacity={0.9}
      />
      <circle cx="12" cy="9" r="2.5" fill="white" />
    </svg>
  )
}

export function RouteIcon({ size = 20, color = C.primary }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="6" cy="6" r="2.5" fill={color} />
      <circle cx="18" cy="18" r="2.5" fill={color} />
      <path d="M6 8.5v3a4 4 0 004 4h.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14.5 15.5h1a2.5 2.5 0 000-5H9.5a2.5 2.5 0 010-5H11" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function ClockIcon({ size = 20, color = C.primary }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.8" />
      <path d="M12 7v5l3 3" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function DownloadCloudIcon({ size = 20, color = C.primary }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 17H5.5A4.5 4.5 0 015.5 8a.5.5 0 00.5-.5A6 6 0 0118 9h.5a3.5 3.5 0 010 7H16" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 12v7M9.5 16.5L12 19l2.5-2.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SparklesIcon({ size = 20, color = C.primary }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" fill={color} opacity={0.9} />
      <path d="M19 3l.8 2.2L22 6l-2.2.8L19 9l-.8-2.2L16 6l2.2-.8L19 3z" fill={color} opacity={0.6} />
      <path d="M5 17l.6 1.4L7 19l-1.4.6L5 21l-.6-1.4L3 19l1.4-.6L5 17z" fill={color} opacity={0.6} />
    </svg>
  )
}

export function BookmarkIcon({ size = 20, color = C.primary }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 3h14a1 1 0 011 1v17l-8-4-8 4V4a1 1 0 011-1z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" fill={color} fillOpacity={0.15} />
    </svg>
  )
}

export function PhoneIcon({ size = 20, color = 'white' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="3" stroke={color} strokeWidth="1.8" />
      <circle cx="12" cy="18.5" r="1" fill={color} />
    </svg>
  )
}

export function ChevronRightIcon({ size = 16, color = C.primaryDark }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 18l6-6-6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
