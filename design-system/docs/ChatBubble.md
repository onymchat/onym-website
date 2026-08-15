---
category: Chat
---

# ChatBubble

Chat message bubble (radius 14) tinted by the sender's identity accent (`orange | blue | green | purple | pink | yellow`): outgoing fills solid with `onAccent` text; incoming tints the accent at 20% with primary text. `sender` shows the accent-colored name above incoming bubbles (group chats); `meta` is the small time line; `read` adds the blue double-check receipt.

```tsx
<ChatBubble direction="incoming" accent="purple" sender="Ada">The proofs page is live.</ChatBubble>
<ChatBubble direction="outgoing" accent="blue" meta="12:04" read>Shipping tonight.</ChatBubble>
```

Maps to `ChatBubbleCell` in OnymChatsUI; accents are deterministic per sender in the app.
