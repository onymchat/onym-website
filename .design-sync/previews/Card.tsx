import React from 'react';
import { Card, Row, SectionLabel, Footnote, Toggle, Chip, Avatar } from '@onym/design';

const pad: React.CSSProperties = { padding: '8px 0 16px' };

export const SettingsSection = () => (
  <div style={pad}>
    <SectionLabel>Transport</SectionLabel>
    <Card>
      <Row icon="antenna" iconColor="indigo" title="Relayers" subtitle="wss://relay.onym.app" mono onClick={() => {}} />
      <Row icon="globe" iconColor="teal" title="Nostr discovery" trailing={<Toggle checked />} />
      <Row icon="bell" iconColor="red" title="Notifications" trailing="Push" onClick={() => {}} />
    </Card>
    <Footnote>Relayers carry sealed envelopes only — they never see who is talking to whom.</Footnote>
  </div>
);

export const WithChipAndAvatar = () => (
  <div style={pad}>
    <SectionLabel>Identities</SectionLabel>
    <Card>
      <Row
        leading={<Avatar size={36} active />}
        title="ada@onym"
        subtitle="bls1q7x…k4mte9"
        mono
        trailing={<Chip tone="blue">Active</Chip>}
        onClick={() => {}}
      />
      <Row leading={<Avatar size={36} accent="pink" />} title="workshop@onym" subtitle="bls1qh2…p8wvc4" mono onClick={() => {}} />
    </Card>
  </div>
);

export const PaddedFreeform = () => (
  <div style={pad}>
    <Card padded bordered>
      <div style={{ fontSize: 15, fontWeight: 600 }}>Recovery phrase</div>
      <div style={{ fontSize: 13, color: 'var(--on-text2)', marginTop: 6, lineHeight: 1.45 }}>
        Write these 12 words down and keep them offline. Anyone holding them can restore this identity.
      </div>
    </Card>
  </div>
);
