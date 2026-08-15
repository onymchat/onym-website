import React from 'react';
import { LargeTitle, SectionLabel, Card, Row, Toggle } from '@onym/design';

export const Default = () => (
  <div style={{ padding: '8px 0 16px' }}>
    <LargeTitle>Chats</LargeTitle>
  </div>
);

export const WithContentBelow = () => (
  <div style={{ padding: '8px 0 16px' }}>
    <LargeTitle>Settings</LargeTitle>
    <SectionLabel>Privacy</SectionLabel>
    <Card>
      <Row icon="lock" iconColor="green" title="Sealed sender" trailing={<Toggle checked />} />
      <Row icon="bell" iconColor="red" title="Notifications" trailing="Push" onClick={() => {}} />
    </Card>
  </div>
);
