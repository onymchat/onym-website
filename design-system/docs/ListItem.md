---
category: Content
---

# ListItem

Conversation-list row: `Avatar` leading, 16pt semibold name, truncating preview line (with `locked` lock glyph for encrypted chats), time at the top right and an unread `Badge` (or other trailing stack). Stack directly on the screen background (`background="bg"`); consecutive items draw inset dividers.

```tsx
<ListItem
  leading={<Avatar accent="pink" />}
  title="Design crew"
  preview="See you at 6"
  locked
  time="Tue"
  trailing={<Badge>3</Badge>}
  onClick={…}
/>
```
