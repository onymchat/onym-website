import React from 'react';
import { Screen, LargeTitle, Card, Row, SectionLabel, Toggle, ListItem, Avatar, Badge } from '@onym/design';

const stage: React.CSSProperties = { height: 380, borderRadius: 20, overflow: 'hidden' };

export const LightSurface = () => (
  <Screen theme="light" background="surface" style={stage}>
    <LargeTitle>Settings</LargeTitle>
    <SectionLabel>Privacy</SectionLabel>
    <Card>
      <Row icon="lock" iconColor="blue" title="Sealed sender" trailing={<Toggle checked />} />
      <Row icon="shield" iconColor="green" title="Safety number" subtitle="Verified with Ada" onClick={() => {}} />
      <Row icon="key" iconColor="orange" title="Recovery phrase" onClick={() => {}} />
    </Card>
  </Screen>
);

export const DarkSurface = () => (
  <Screen theme="dark" background="surface" style={stage}>
    <LargeTitle>Settings</LargeTitle>
    <SectionLabel>Transport</SectionLabel>
    <Card>
      <Row icon="antenna" iconColor="indigo" title="Relayers" subtitle="wss://relay.onym.app" mono onClick={() => {}} />
      <Row icon="globe" iconColor="teal" title="Nostr discovery" trailing={<Toggle checked />} />
      <Row icon="bell" iconColor="red" title="Notifications" trailing="Push" onClick={() => {}} />
    </Card>
  </Screen>
);

export const DarkBg = () => (
  <Screen theme="dark" background="bg" style={stage}>
    <LargeTitle>Chats</LargeTitle>
    <ListItem
      leading={<Avatar accent="pink" initial="D" />}
      title="Design crew"
      preview="Nadia: pushing the new dock build"
      locked
      time="14:02"
      trailing={<Badge>3</Badge>}
      onClick={() => {}}
    />
    <ListItem
      leading={<Avatar accent="blue" initial="A" />}
      title="Ada"
      preview="Rotated my key — reverify when you can"
      locked
      time="Tue"
      onClick={() => {}}
    />
    <ListItem
      leading={<Avatar accent="green" initial="M" />}
      title="Marco"
      preview="voice message"
      time="Mon"
      onClick={() => {}}
    />
  </Screen>
);
