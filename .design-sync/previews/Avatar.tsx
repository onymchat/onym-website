import React from 'react';
import { Avatar } from '@onym/design';

const row: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  padding: '16px 0',
  justifyContent: 'center',
};

export const PlaceholderAccents = () => (
  <div style={row}>
    <Avatar accent="orange" alt="Ada" />
    <Avatar accent="blue" alt="Nia" />
    <Avatar accent="green" alt="Marek" />
    <Avatar accent="purple" alt="June" />
    <Avatar accent="pink" alt="Sol" />
    <Avatar accent="yellow" alt="Kip" />
  </div>
);

export const ActiveRing = () => (
  <div style={row}>
    <Avatar active size={48} alt="Active identity" />
    <Avatar size={48} alt="Inactive identity" />
  </div>
);

export const WithInitial = () => (
  <div style={row}>
    <Avatar initial="A" alt="Ada" />
    <Avatar initial="N" size={48} alt="Nia" />
    <Avatar initial="🦉" size={48} alt="Design crew" />
  </div>
);

export const Sizes = () => (
  <div style={row}>
    <Avatar size={28} accent="blue" alt="Small" />
    <Avatar size={40} accent="blue" alt="Default" />
    <Avatar size={56} accent="blue" alt="Large" />
    <Avatar size={72} accent="blue" alt="Profile" />
  </div>
);
