import React from 'react';
import { Card, Row, Chip } from '@onym/design';

const pad: React.CSSProperties = { padding: '8px 0 16px' };
const rowStyle: React.CSSProperties = { display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' };

export const Tones = () => (
  <div style={{ ...pad, ...rowStyle }}>
    <Chip>Default</Chip>
    <Chip tone="green">Verified</Chip>
    <Chip tone="red">Revoked</Chip>
    <Chip tone="blue">Active</Chip>
  </div>
);

export const Accents = () => (
  <div style={{ ...pad, ...rowStyle }}>
    <Chip accent="orange">Owner</Chip>
    <Chip accent="blue">Member</Chip>
    <Chip accent="green">Online</Chip>
    <Chip accent="purple">Admin</Chip>
    <Chip accent="pink">Guest</Chip>
    <Chip accent="yellow">Pending</Chip>
  </div>
);

export const InRows = () => (
  <div style={pad}>
    <Card>
      <Row icon="key" iconColor="amber" title="ada@onym" subtitle="bls1q7x…k4mte9" mono trailing={<Chip tone="blue">Active</Chip>} />
      <Row icon="shield" iconColor="green" title="Safety number" trailing={<Chip tone="green">Verified</Chip>} />
      <Row icon="antenna" iconColor="red" title="relay.eu-1.onym.app" mono trailing={<Chip tone="red">Offline</Chip>} />
    </Card>
  </div>
);
