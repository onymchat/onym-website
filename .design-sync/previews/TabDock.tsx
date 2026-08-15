import React from 'react';
import { Screen, ScreenContent, TabDock, LargeTitle, ListItem, Avatar, Badge, Card, Row, SectionLabel } from '@onym/design';

const stage: React.CSSProperties = { height: 380, borderRadius: 20, overflow: 'hidden' };

const chatRows = (
  <>
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
    <ListItem leading={<Avatar accent="purple" initial="J" />} title="June" preview="see you at 6" locked time="Sat" onClick={() => {}} />
  </>
);

/** Chats + Settings capsule with the detached search slot. */
export const TwoTabs = () => (
  <Screen theme="light" background="bg" style={stage}>
    <LargeTitle>Chats</LargeTitle>
    <ScreenContent>{chatRows}</ScreenContent>
    <TabDock
      tabs={[
        { icon: 'bubble', label: 'Chats' },
        { icon: 'gear', label: 'Settings' },
      ]}
      activeIndex={0}
    />
  </Screen>
);

/** Three-tab layout, dark theme, glass over scrolled chat rows. */
export const ThreeTabs = () => (
  <Screen theme="dark" background="bg" style={stage}>
    <LargeTitle>Chats</LargeTitle>
    <ScreenContent>{chatRows}</ScreenContent>
    <TabDock
      tabs={[
        { icon: 'bubble', label: 'Chats' },
        { icon: 'person', label: 'Contacts' },
        { icon: 'gear', label: 'Settings' },
      ]}
      activeIndex={1}
    />
  </Screen>
);

/** No detached search button — screens without search. */
export const NoSearch = () => (
  <Screen theme="light" background="surface" style={stage}>
    <ScreenContent>
      <SectionLabel>Transport</SectionLabel>
      <Card>
        <Row icon="antenna" iconColor="indigo" title="Relayers" subtitle="wss://relay.onym.app" mono onClick={() => {}} />
        <Row icon="globe" iconColor="teal" title="Nostr discovery" trailing="On" onClick={() => {}} />
        <Row icon="bell" iconColor="red" title="Notifications" trailing="Push" onClick={() => {}} />
      </Card>
    </ScreenContent>
    <TabDock
      tabs={[
        { icon: 'bubble', label: 'Chats' },
        { icon: 'gear', label: 'Settings' },
      ]}
      activeIndex={1}
      search={false}
    />
  </Screen>
);
