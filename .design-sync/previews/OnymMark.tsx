import React from 'react';
import { OnymMark, Screen } from '@onym/design';

const row: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 24,
  padding: '20px 0',
  justifyContent: 'center',
};

export const Sizes = () => (
  <div style={row}>
    <OnymMark size={24} />
    <OnymMark size={40} />
    <OnymMark size={64} />
  </div>
);

export const AccentBlue = () => (
  <div style={row}>
    <OnymMark size={56} color="var(--on-blue)" />
  </div>
);

export const OnDark = () => (
  <Screen theme="dark" background="bg" style={{ borderRadius: 16 }}>
    <div style={{ ...row, padding: 32 }}>
      <OnymMark size={56} />
      <OnymMark size={56} color="var(--on-blue)" />
    </div>
  </Screen>
);
