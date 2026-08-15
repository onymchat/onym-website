import React from 'react';
import { Card, Row, Chip, Toggle, Badge, Avatar } from '@onym/design';

const pad: React.CSSProperties = { padding: '8px 0 16px' };

export const IconVariants = () => (
  <div style={pad}>
    <Card>
      <Row icon="bubble" iconColor="blue" title="Chats" onClick={() => {}} />
      <Row icon="key" iconColor="orange" title="Keys" onClick={() => {}} />
      <Row icon="shield" iconColor="green" title="Safety number" onClick={() => {}} />
      <Row icon="antenna" iconColor="indigo" title="Relayers" onClick={() => {}} />
      <Row icon="trash" iconColor="red" title="Clear message history" onClick={() => {}} />
    </Card>
  </div>
);

export const WithSubtitleMono = () => (
  <div style={pad}>
    <Card>
      <Row icon="key" iconColor="amber" title="Signing key" subtitle="bls1q7x…k4mte9" mono onClick={() => {}} />
      <Row icon="antenna" iconColor="indigo" title="Primary relay" subtitle="wss://relay.onym.app" mono onClick={() => {}} />
      <Row icon="globe" iconColor="teal" title="Discovery" subtitle="Announces your handle to the Nostr network" onClick={() => {}} />
    </Card>
  </div>
);

export const TrailingContent = () => (
  <div style={pad}>
    <Card>
      <Row icon="bell" iconColor="red" title="Notifications" trailing={<Toggle checked />} />
      <Row icon="lock" iconColor="gray" title="Screen lock" trailing="After 1 min" onClick={() => {}} />
      <Row icon="doc" iconColor="blue" title="Backup" trailing={<Chip tone="green">Verified</Chip>} onClick={() => {}} />
      <Row icon="share" iconColor="purple" title="Invitations" trailing={<Badge>2</Badge>} onClick={() => {}} />
    </Card>
  </div>
);

export const AvatarLeading = () => (
  <div style={pad}>
    <Card>
      <Row
        leading={<Avatar size={36} active />}
        title="ada@onym"
        subtitle="bls1q7x…k4mte9"
        mono
        trailing={<Chip tone="blue">Active</Chip>}
        onClick={() => {}}
      />
      <Row
        leading={<Avatar size={36} accent="pink" />}
        title="workshop@onym"
        subtitle="bls1qh2…p8wvc4"
        mono
        onClick={() => {}}
      />
    </Card>
  </div>
);
