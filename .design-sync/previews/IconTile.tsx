import React from 'react';
import { Card, Row, IconTile } from '@onym/design';

const pad: React.CSSProperties = { padding: '8px 0 16px' };

export const PaletteSweep = () => (
  <div style={{ ...pad, display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
    <IconTile icon="bubble" color="blue" />
    <IconTile icon="key" color="purple" />
    <IconTile icon="antenna" color="indigo" />
    <IconTile icon="bell" color="orange" />
    <IconTile icon="shield" color="green" />
    <IconTile icon="gear" color="gray" />
    <IconTile icon="trash" color="red" />
    <IconTile icon="globe" color="teal" />
    <IconTile icon="doc" color="amber" />
  </div>
);

export const InContext = () => (
  <div style={pad}>
    <Card>
      <Row icon="lock" iconColor="green" title="Sealed sender" subtitle="Envelopes hide the sender from relays" onClick={() => {}} />
      <Row icon="qr" iconColor="blue" title="Share QR code" onClick={() => {}} />
      <Row icon="pencil" iconColor="purple" title="Edit handle" onClick={() => {}} />
    </Card>
  </div>
);
