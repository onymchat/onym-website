---
category: Chat
---

# ChatComposer

Message input bar pinned to the bottom of a `Screen`: glass attach (+) button, pill text field, and a trailing action — `'mic'` (glass) when empty, `'send'` (filled blue arrow) when there's text. Sits over a blurred backdrop; content above should live in `ScreenContent`.

```tsx
<Screen background="bg">
  <ScreenContent>…bubbles…</ScreenContent>
  <ChatComposer value="On my way" action="send" onSend={…} />
</Screen>
```

Maps to `ChatInputPanelView` (44pt pills, radius 20).
