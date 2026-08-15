import React from 'react';
import { Screen, ListItem, Avatar, Badge } from '@onym/design';

export const Counts = () => (
  <div style={{ padding: '8px 0 16px', display: 'flex', gap: 12, alignItems: 'center' }}>
    <Badge>3</Badge>
    <Badge>28</Badge>
    <Badge tone="red">12</Badge>
    <Badge tone="red">99+</Badge>
    <Badge>New</Badge>
  </div>
);

export const InListItem = () => (
  <Screen background="bg" style={{ margin: '8px 0 16px', borderRadius: 12, overflow: 'hidden' }}>
    <ListItem
      leading={<Avatar accent="orange" initial="D" />}
      title="Design crew"
      preview="Relay switch-over is done, please re-verify"
      locked
      time="14:32"
      trailing={<Badge>5</Badge>}
      onClick={() => {}}
    />
    <ListItem
      leading={<Avatar accent="green" initial="R" />}
      title="Relay ops"
      preview="Alert: wss://relay.onym.app rotation at 02:00 UTC"
      locked
      time="Tue"
      trailing={<Badge tone="red">12</Badge>}
      onClick={() => {}}
    />
  </Screen>
);
