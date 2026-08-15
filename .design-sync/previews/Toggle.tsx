import React from 'react';
import { Toggle, Card, Row, SectionLabel } from '@onym/design';

const center: React.CSSProperties = { display: 'flex', gap: 16, justifyContent: 'center', padding: '20px 0' };

export const On = () => (
  <div style={center}>
    <Toggle checked aria-label="Sealed sender" />
  </div>
);

export const Off = () => (
  <div style={center}>
    <Toggle aria-label="Read receipts" />
  </div>
);

/** Where it actually lives: trailing slot of settings rows. */
export const InRow = () => (
  <div style={{ padding: '8px 0 16px' }}>
    <SectionLabel>Privacy</SectionLabel>
    <Card>
      <Row icon="lock" iconColor="blue" title="Sealed sender" trailing={<Toggle checked />} />
      <Row icon="check-double" iconColor="green" title="Read receipts" trailing={<Toggle />} />
      <Row icon="bell" iconColor="red" title="Notifications" trailing={<Toggle checked />} />
    </Card>
  </div>
);
