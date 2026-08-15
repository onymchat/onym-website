import React from 'react';
import { TextButton, Card, Row, SectionLabel, Footnote } from '@onym/design';

const pad: React.CSSProperties = { padding: '8px 0 16px' };

export const Default = () => (
  <div style={pad}>
    <TextButton icon="share">Share invite</TextButton>
  </div>
);

/** Red destructive action under a settings group. */
export const Destructive = () => (
  <div style={pad}>
    <SectionLabel>Relayers</SectionLabel>
    <Card>
      <Row icon="antenna" iconColor="indigo" title="wss://relay.onym.app" mono trailing="Connected" onClick={() => {}} />
    </Card>
    <TextButton destructive icon="trash">
      Remove relayer
    </TextButton>
    <Footnote>Removing a relayer stops delivery through it immediately.</Footnote>
  </div>
);

/** Muted secondary action ("Not now"). */
export const Quiet = () => (
  <div style={pad}>
    <TextButton quiet>Not now</TextButton>
  </div>
);
