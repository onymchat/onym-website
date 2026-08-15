import React from 'react';
import { GlassButton, Screen } from '@onym/design';

const gradient: React.CSSProperties = {
  borderRadius: 20,
  padding: '36px 24px',
  background: 'linear-gradient(135deg, #5E5CE6 0%, #BF5AF2 45%, #FF375F 100%)',
  display: 'flex',
  gap: 12,
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
};

/** Circular icon buttons over colorful content — the glass treatment. */
export const CircleIcons = () => (
  <div style={gradient}>
    <GlassButton icon="chevron-left" aria-label="Back" />
    <GlassButton icon="plus" aria-label="New chat" />
    <GlassButton icon="qr" aria-label="Show QR" />
    <GlassButton icon="ellipsis" aria-label="More" />
  </div>
);

/** Capsule with label — identity switcher — plain and tinted. */
export const Capsules = () => (
  <div style={gradient}>
    <GlassButton icon="person" label="ada@onym" aria-label="Switch identity" />
    <GlassButton icon="person" label="ada@onym" tinted aria-label="Switch identity" />
  </div>
);

/** Tinted circles over dark content — dark-theme glass. */
export const TintedDark = () => (
  <Screen theme="dark" background="bg" style={{ borderRadius: 20 }}>
    <div
      style={{
        borderRadius: 20,
        padding: '36px 24px',
        background: 'linear-gradient(135deg, #0A1A3A 0%, #123B6E 55%, #2A1B52 100%)',
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <GlassButton icon="camera" tinted aria-label="Scan" />
      <GlassButton icon="share" tinted aria-label="Share invite" />
      <GlassButton icon="pencil" aria-label="Compose" />
    </div>
  </Screen>
);
