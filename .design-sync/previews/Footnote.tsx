import React from 'react';
import { Footnote, SectionLabel, Card, Row, Toggle } from '@onym/design';

export const UnderCard = () => (
  <div style={{ padding: '8px 0 16px' }}>
    <SectionLabel>Discovery</SectionLabel>
    <Card>
      <Row icon="globe" iconColor="teal" title="Announce handle" trailing={<Toggle checked />} />
    </Card>
    <Footnote>
      When on, ada@onym is published to Nostr relays so contacts can find you. Your key material never leaves this
      device.
    </Footnote>
  </div>
);
