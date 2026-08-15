import React from 'react';
import { PrimaryButton } from '@onym/design';

const pad: React.CSSProperties = { padding: '16px 0' };

export const Default = () => (
  <div style={pad}>
    <PrimaryButton>Continue</PrimaryButton>
  </div>
);

export const WithIcon = () => (
  <div style={pad}>
    <PrimaryButton icon="plus">Create group</PrimaryButton>
  </div>
);

export const Prominent = () => (
  <div style={pad}>
    <PrimaryButton prominent>Next</PrimaryButton>
  </div>
);

export const Disabled = () => (
  <div style={pad}>
    <PrimaryButton disabled>Continue</PrimaryButton>
  </div>
);

export const Destructive = () => (
  <div style={pad}>
    <PrimaryButton destructive icon="trash">Delete identity</PrimaryButton>
  </div>
);
