---
category: Controls
---

# TextField

Rounded form field on `surface2` with a hairline border that turns blue on focus. `multiline` renders a textarea, `mono` switches to SF-mono style (relay URLs, keys), `helper` adds the small caption underneath.

```tsx
<TextField placeholder="Group name" helper="Visible to members" />
<TextField multiline rows={3} placeholder="Description" />
<TextField mono placeholder="wss://relay.example.org" />
```

Maps to the Create-Group field style (radius 14, hairline stroke).
