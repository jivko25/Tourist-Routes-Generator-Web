import Image from 'next/image'

export const TRAVEL_GO_ICON_SRC = '/TravelGoIcon.png'

/**
 * App icon with rounded corners (source PNG is square, no radius).
 * Uses ~22% radius for an iOS-style squircle look.
 */
export default function TravelGoIcon({
  size = 32,
  radius,
  priority = false,
  alt = 'Travel Go',
  shadow = true,
  style,
}) {
  const borderRadius = radius ?? '22%'

  return (
    <span
      style={{
        display: 'inline-flex',
        width: size,
        height: size,
        borderRadius,
        overflow: 'hidden',
        flexShrink: 0,
        boxShadow: shadow ? '0 1px 4px rgba(15, 23, 42, 0.14)' : 'none',
        ...style,
      }}
    >
      <Image
        src={TRAVEL_GO_ICON_SRC}
        alt={alt}
        width={typeof size === 'number' ? size : 88}
        height={typeof size === 'number' ? size : 88}
        priority={priority}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </span>
  )
}
