import React from 'react';
import { Screen, NavBar, GlassButton, Card, Row, ListItem, Avatar } from '@onym/design';

const stage: React.CSSProperties = { height: 220, borderRadius: 20, overflow: 'hidden' };

/** Standard pushed screen: glass back button + centered title. */
export const Default = () => (
  <Screen theme="light" background="surface" style={stage}>
    <NavBar title="Relayers" onBack={() => {}} />
    <Card>
      <Row icon="antenna" iconColor="indigo" title="wss://relay.onym.app" mono trailing="Connected" onClick={() => {}} />
      <Row icon="antenna" iconColor="gray" title="wss://relay.nostr.band" mono onClick={() => {}} />
    </Card>
  </Screen>
);

/** Chat header: title + presence subtitle, trailing glass actions. */
export const WithSubtitleAndTrailing = () => (
  <Screen theme="dark" background="bg" style={stage}>
    <NavBar
      title="Design crew"
      subtitle="4 members"
      onBack={() => {}}
      trailing={<GlassButton icon="ellipsis" aria-label="More" />}
    />
    <ListItem
      leading={<Avatar accent="pink" initial="N" />}
      title="Nadia"
      preview="pushing the new dock build"
      locked
      time="14:02"
      onClick={() => {}}
    />
    <ListItem leading={<Avatar accent="blue" initial="A" />} title="Ada" preview="looks great on device" locked time="14:05" onClick={() => {}} />
  </Screen>
);

/** Modal-style bar: centered title only, no side controls. */
export const TitleOnly = () => (
  <Screen theme="light" background="surface" style={stage}>
    <NavBar title="Scan to verify" />
    <Card padded bordered>
      <div style={{ fontSize: 13, color: 'var(--on-text2)', lineHeight: 1.45 }}>
        Ask Ada to open her QR code, then point your camera at it to verify your safety number.
      </div>
    </Card>
  </Screen>
);
