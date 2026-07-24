import { C, display, body } from '@/lib/theme'

function RouteScreen() {
  const stops = [
    { name: 'Eiffel Tower', time: '1.5h' },
    { name: 'Le Marais', time: '1h' },
    { name: 'Louvre', time: '2h' },
  ]
  return (
    <div style={{ padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ fontFamily: display, fontWeight: 700, fontSize: 11, color: C.text }}>Today&apos;s route</div>
      <div
        style={{
          backgroundColor: C.primarySoft,
          borderRadius: 10,
          padding: '6px 8px',
          fontSize: 9,
          color: C.primaryDark,
          fontFamily: body,
          display: 'flex',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <div style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: C.primary }} />
        Paris · 3 stops · 4.5 km
      </div>
      {stops.map((s, i) => (
        <div
          key={s.name}
          style={{
            backgroundColor: C.surface,
            borderRadius: 10,
            padding: '7px 8px',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            border: `1px solid ${C.border}`,
            position: 'relative',
          }}
        >
          {i < stops.length - 1 && (
            <div
              style={{
                position: 'absolute',
                left: 13,
                top: '100%',
                width: 2,
                height: 6,
                backgroundColor: C.border,
              }}
            />
          )}
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: '50%',
              backgroundColor: C.primarySoft,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: C.primary }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: display, fontWeight: 600, fontSize: 9, color: C.text }}>{s.name}</div>
          </div>
          <div
            style={{
              fontSize: 8,
              fontFamily: body,
              color: C.muted,
              backgroundColor: C.surfaceMuted,
              padding: '2px 5px',
              borderRadius: 999,
            }}
          >
            {s.time}
          </div>
        </div>
      ))}
      <div
        style={{
          backgroundColor: C.accent,
          borderRadius: 10,
          padding: '8px 0',
          textAlign: 'center',
          fontFamily: display,
          fontWeight: 700,
          fontSize: 10,
          color: 'white',
          marginTop: 2,
        }}
      >
        Start walking
      </div>
    </div>
  )
}

function HoursScreen() {
  const places = [
    { name: "Musée d'Orsay", status: 'Open', close: 'Closes 18:00' },
    { name: 'Centre Pompidou', status: 'Open', close: 'Closes 21:00' },
    { name: 'Palais Royal', status: 'Closed', close: 'Opens 10:00' },
    { name: 'Sainte-Chapelle', status: 'Open', close: 'Closes 17:00' },
  ]
  return (
    <div style={{ padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: 5 }}>
      <div style={{ fontFamily: display, fontWeight: 700, fontSize: 11, color: C.text }}>Opening hours</div>
      {places.map((p) => (
        <div
          key={p.name}
          style={{
            backgroundColor: C.surface,
            borderRadius: 10,
            padding: '7px 8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: `1px solid ${C.border}`,
          }}
        >
          <div>
            <div style={{ fontFamily: display, fontWeight: 600, fontSize: 9, color: C.text }}>{p.name}</div>
            <div style={{ fontFamily: body, fontSize: 8, color: C.muted, marginTop: 1 }}>{p.close}</div>
          </div>
          <div
            style={{
              fontSize: 8,
              fontFamily: body,
              fontWeight: 600,
              color: p.status === 'Open' ? C.success : '#E11D48',
              backgroundColor: p.status === 'Open' ? '#dcfce7' : '#ffe4e6',
              padding: '2px 6px',
              borderRadius: 999,
            }}
          >
            {p.status}
          </div>
        </div>
      ))}
    </div>
  )
}

function OfflineScreen() {
  return (
    <div style={{ padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ fontFamily: display, fontWeight: 700, fontSize: 11, color: C.text }}>Saved routes</div>
      {['Paris Weekend', 'Rome Highlights', 'Barcelona Day'].map((name) => (
        <div
          key={name}
          style={{
            backgroundColor: C.surface,
            borderRadius: 10,
            padding: '8px',
            border: `1px solid ${C.border}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontFamily: display, fontWeight: 600, fontSize: 9, color: C.text }}>{name}</div>
            <div style={{ fontFamily: body, fontSize: 8, color: C.muted, marginTop: 1 }}>Saved · Offline ready</div>
          </div>
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: '#dcfce7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 13l4 4L19 7" stroke={C.success} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      ))}
      <div
        style={{
          backgroundColor: C.primarySoft,
          borderRadius: 10,
          padding: '7px 8px',
          textAlign: 'center',
          fontFamily: body,
          fontSize: 8,
          color: C.primaryDark,
        }}
      >
        No internet needed once saved
      </div>
    </div>
  )
}

function AIScreen() {
  return (
    <div style={{ padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: 6, height: '100%' }}>
      <div style={{ fontFamily: display, fontWeight: 700, fontSize: 11, color: C.text }}>AI assistant</div>
      <div
        style={{
          backgroundColor: C.surfaceMuted,
          borderRadius: '12px 12px 12px 4px',
          padding: '7px 8px',
          fontFamily: body,
          fontSize: 8.5,
          color: C.muted,
          lineHeight: 1.4,
        }}
      >
        Hi! Where would you like to explore today?
      </div>
      <div
        style={{
          backgroundColor: C.primary,
          borderRadius: '12px 12px 4px 12px',
          padding: '7px 8px',
          fontFamily: body,
          fontSize: 8.5,
          color: 'white',
          lineHeight: 1.4,
          alignSelf: 'flex-end',
          maxWidth: '80%',
        }}
      >
        Kid-friendly spots near Eiffel Tower open on Sunday?
      </div>
      <div
        style={{
          backgroundColor: C.surfaceMuted,
          borderRadius: '12px 12px 12px 4px',
          padding: '7px 8px',
          fontFamily: body,
          fontSize: 8.5,
          color: C.muted,
          lineHeight: 1.4,
        }}
      >
        Found 5 places nearby — Trocadéro gardens, Champ de Mars, and more.
      </div>
      <div
        style={{
          marginTop: 'auto',
          backgroundColor: C.surface,
          borderRadius: 10,
          border: `1px solid ${C.border}`,
          padding: '6px 8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span style={{ fontFamily: body, fontSize: 8, color: C.muted }}>Ask anything...</span>
        <div
          style={{
            width: 18,
            height: 18,
            borderRadius: '50%',
            backgroundColor: C.accent,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}

function BookingScreen() {
  return (
    <div style={{ padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ fontFamily: display, fontWeight: 700, fontSize: 11, color: C.text }}>Book activities</div>
      {[
        { name: 'Eiffel Tower Summit', price: '€29', tag: 'Skip the line' },
        { name: 'Seine River Cruise', price: '€18', tag: 'Popular' },
        { name: 'Louvre Fast Track', price: '€24', tag: 'Best value' },
      ].map((item) => (
        <div
          key={item.name}
          style={{
            backgroundColor: C.surface,
            borderRadius: 12,
            padding: '8px',
            border: `1px solid ${C.border}`,
          }}
        >
          <div
            style={{
              display: 'inline-block',
              fontSize: 7,
              fontFamily: body,
              fontWeight: 600,
              color: C.accent,
              backgroundColor: C.accentSoft,
              padding: '1px 5px',
              borderRadius: 999,
              marginBottom: 3,
            }}
          >
            {item.tag}
          </div>
          <div style={{ fontFamily: display, fontWeight: 600, fontSize: 9, color: C.text }}>{item.name}</div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 5,
            }}
          >
            <span style={{ fontFamily: display, fontWeight: 800, fontSize: 11, color: C.text }}>{item.price}</span>
            <div
              style={{
                backgroundColor: C.accent,
                color: 'white',
                borderRadius: 999,
                padding: '3px 10px',
                fontFamily: display,
                fontWeight: 700,
                fontSize: 8,
              }}
            >
              Book
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const SCREENS = {
  route: RouteScreen,
  hours: HoursScreen,
  offline: OfflineScreen,
  ai: AIScreen,
  booking: BookingScreen,
}

export function PhoneMockup({ variant }) {
  const Screen = SCREENS[variant]
  return (
    <div
      style={{
        width: 168,
        height: 300,
        borderRadius: 30,
        border: `5px solid ${C.text}`,
        backgroundColor: C.bg,
        overflow: 'hidden',
        boxShadow: '0 20px 48px rgba(15,23,42,0.18)',
        position: 'relative',
        flexShrink: 0,
      }}
      aria-hidden="true"
    >
      <div
        style={{
          height: 22,
          backgroundColor: C.text,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 10px',
        }}
      >
        <span style={{ color: 'white', fontSize: 8, fontFamily: body, fontWeight: 500 }}>9:41</span>
        <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
          <div style={{ width: 10, height: 5, borderRadius: 1, border: '1px solid white', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '1px 2px 1px 1px', backgroundColor: 'white', borderRadius: 0 }} />
          </div>
          <div style={{ width: 6, height: 6, borderRadius: '50%', border: '1px solid white' }} />
        </div>
      </div>
      <Screen />
    </div>
  )
}
