import React from 'react';
import { SectionLabel, Card, Row } from '@onym/design';

export const AboveCard = () => (
  <div style={{ padding: '8px 0 16px' }}>
    <SectionLabel>Transport</SectionLabel>
    <Card>
      <Row icon="antenna" iconColor="indigo" title="Relayers" subtitle="wss://relay.onym.app" mono onClick={() => {}} />
      <Row icon="globe" iconColor="teal" title="Nostr discovery" trailing="On" onClick={() => {}} />
    </Card>
    <div style={{ height: 18 }} />
    <SectionLabel>Identity</SectionLabel>
    <Card>
      <Row icon="key" iconColor="amber" title="Signing key" subtitle="bls1q7x…k4mte9" mono onClick={() => {}} />
    </Card>
  </div>
);
