import React from 'react';
import { ChatComposer, ChatBubble, Screen, ScreenContent } from '@onym/design';

const frame: React.CSSProperties = { height: 320, borderRadius: 16, overflow: 'hidden' };

export const Empty = () => (
  <Screen background="bg" style={frame}>
    <ScreenContent style={{ paddingTop: 16 }}>
      <ChatBubble direction="incoming" accent="purple" sender="Ada" meta="18:22">
        Rehearsal moved to Thursday — same room.
      </ChatBubble>
      <ChatBubble direction="outgoing" accent="blue" meta="18:24" read>
        Noted, see you there.
      </ChatBubble>
    </ScreenContent>
    <ChatComposer />
  </Screen>
);

export const WithText = () => (
  <Screen background="bg" style={frame}>
    <ScreenContent style={{ paddingTop: 16 }}>
      <ChatBubble direction="incoming" accent="green" sender="Nia" meta="09:01">
        Are you close? We start in ten.
      </ChatBubble>
    </ScreenContent>
    <ChatComposer value="On my way" action="send" />
  </Screen>
);

export const NoAttach = () => (
  <Screen background="bg" style={frame}>
    <ScreenContent style={{ paddingTop: 16 }}>
      <ChatBubble direction="incoming" accent="orange" sender="Relay ops" meta="02:00">
        wss://relay.onym.app is back online.
      </ChatBubble>
    </ScreenContent>
    <ChatComposer attach={false} placeholder="Reply to Relay ops" />
  </Screen>
);
