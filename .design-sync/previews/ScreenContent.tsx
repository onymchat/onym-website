import React from 'react';
import {
  Screen,
  ScreenContent,
  NavBar,
  TabDock,
  LargeTitle,
  Card,
  Row,
  SectionLabel,
  Footnote,
  Toggle,
  ListItem,
  Avatar,
  Badge,
  GlassButton,
} from '@onym/design';

const stage: React.CSSProperties = { height: 420, borderRadius: 20, overflow: 'hidden' };

/** Settings-style screen: NavBar on top, grouped rows scrolling clear of the dock. */
export const SettingsWithDock = () => (
  <Screen theme="light" background="surface" style={stage}>
    <NavBar title="Settings" onBack={() => {}} trailing={<GlassButton icon="qr" aria-label="Show QR" />} />
    <ScreenContent>
      <SectionLabel>Identity</SectionLabel>
      <Card>
        <Row leading={<Avatar size={36} active />} title="ada@onym" subtitle="bls1q7x…k4mte9" mono onClick={() => {}} />
        <Row icon="key" iconColor="orange" title="Recovery phrase" onClick={() => {}} />
      </Card>
      <SectionLabel>Transport</SectionLabel>
      <Card>
        <Row icon="antenna" iconColor="indigo" title="Relayers" subtitle="wss://relay.onym.app" mono onClick={() => {}} />
        <Row icon="globe" iconColor="teal" title="Nostr discovery" trailing={<Toggle checked />} />
        <Row icon="bell" iconColor="red" title="Notifications" trailing="Push" onClick={() => {}} />
      </Card>
      <Footnote>Relayers carry sealed envelopes only — they never see who is talking to whom.</Footnote>
    </ScreenContent>
    <TabDock
      tabs={[
        { icon: 'bubble', label: 'Chats' },
        { icon: 'gear', label: 'Settings' },
      ]}
      activeIndex={1}
    />
  </Screen>
);

/** Chat list on pure background: content scrolls under the floating dock. */
export const ChatListDark = () => (
  <Screen theme="dark" background="bg" style={stage}>
    <LargeTitle>Chats</LargeTitle>
    <ScreenContent>
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
      <ListItem leading={<Avatar accent="green" initial="M" />} title="Marco" preview="voice message" time="Mon" onClick={() => {}} />
      <ListItem
        leading={<Avatar accent="yellow" initial="R" />}
        title="Relay ops"
        preview="wss://relay.onym.app back to normal"
        locked
        time="Sun"
        onClick={() => {}}
      />
    </ScreenContent>
    <TabDock
      tabs={[
        { icon: 'bubble', label: 'Chats' },
        { icon: 'gear', label: 'Settings' },
      ]}
      activeIndex={0}
    />
  </Screen>
);
