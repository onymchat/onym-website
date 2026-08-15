import React from 'react';
import { TextField } from '@onym/design';

const pad: React.CSSProperties = { padding: '12px 0 16px' };

export const DefaultWithHelper = () => (
  <div style={pad}>
    <TextField placeholder="Group name" helper="Visible to everyone you invite." aria-label="Group name" />
  </div>
);

export const MultilineDescription = () => (
  <div style={pad}>
    <TextField
      multiline
      rows={4}
      value={'Design crew — weekly critique, Figma drops and release notes. Invite-only.'}
      helper="Shown on the group info screen."
      aria-label="Group description"
    />
  </div>
);

export const MonoRelayUrl = () => (
  <div style={pad}>
    <TextField
      mono
      value="wss://relay.onym.app"
      helper="Messages route through this relay only."
      aria-label="Relay URL"
    />
  </div>
);

export const WithValue = () => (
  <div style={pad}>
    <TextField value="Ada Lindqvist" placeholder="Display name" aria-label="Display name" />
  </div>
);
