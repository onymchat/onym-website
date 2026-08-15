import React from 'react';
import { Screen, ListItem, Avatar, Badge } from '@onym/design';

export const Inbox = () => (
  <Screen background="bg" style={{ margin: '8px 0 16px', borderRadius: 12, overflow: 'hidden' }}>
    <ListItem
      leading={<Avatar accent="orange" initial="D" />}
      title="Design crew"
      preview="Ada: pushed the new tile palette — thoughts?"
      locked
      time="12:04"
      trailing={<Badge>3</Badge>}
      onClick={() => {}}
    />
    <ListItem
      leading={<Avatar accent="pink" initial="A" />}
      title="Ada"
      preview="Safety number matches on my side ✓"
      locked
      time="09:41"
      onClick={() => {}}
    />
    <ListItem
      leading={<Avatar accent="green" initial="R" />}
      title="Relay ops"
      preview="wss://relay.onym.app back to normal latency"
      locked
      time="Tue"
      trailing={<Badge tone="red">12</Badge>}
      onClick={() => {}}
    />
    <ListItem
      leading={<Avatar />}
      title="mallory@onym"
      preview="Invitation pending — verify before replying"
      time="Mon"
      onClick={() => {}}
    />
  </Screen>
);

export const SingleItem = () => (
  <Screen background="bg" style={{ margin: '8px 0 16px', borderRadius: 12, overflow: 'hidden' }}>
    <ListItem
      leading={<Avatar accent="purple" initial="W" />}
      title="Workshop"
      preview="You: minutes from Thursday are in the shared doc"
      locked
      time="18:22"
      onClick={() => {}}
    />
  </Screen>
);
