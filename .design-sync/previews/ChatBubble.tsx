import React from 'react';
import { ChatBubble } from '@onym/design';

const pad: React.CSSProperties = { padding: '12px 0 16px' };

export const Conversation = () => (
  <div style={pad}>
    <ChatBubble direction="incoming" accent="purple" sender="Ada">
      The proofs page is live — take a look when you can.
    </ChatBubble>
    <ChatBubble direction="outgoing" accent="blue" meta="12:04" read>
      Looks great. Shipping the update tonight.
    </ChatBubble>
    <ChatBubble direction="incoming" accent="purple" sender="Ada" meta="12:05">
      🎉
    </ChatBubble>
  </div>
);

export const AccentSweep = () => (
  <div style={pad}>
    <ChatBubble direction="outgoing" accent="orange">Orange identity</ChatBubble>
    <ChatBubble direction="outgoing" accent="green">Green identity</ChatBubble>
    <ChatBubble direction="outgoing" accent="pink">Pink identity</ChatBubble>
    <ChatBubble direction="outgoing" accent="yellow">Yellow identity</ChatBubble>
  </div>
);

export const IncomingTints = () => (
  <div style={pad}>
    <ChatBubble direction="incoming" accent="blue" sender="Relay ops">Maintenance window at 02:00 UTC.</ChatBubble>
    <ChatBubble direction="incoming" accent="green" sender="Nia">On my way now.</ChatBubble>
  </div>
);
