---
category: Content
---

# Row

Settings-style list row inside a `Card`: leading colored `IconTile` (via `icon` + `iconColor`) or arbitrary `leading` element (an `Avatar`), 16.5pt title, truncating 12.5pt subtitle (`mono` for keys/URLs), `trailing` content (value text, `Chip`, `Toggle`, `Badge`), and a disclosure chevron (automatic when `onClick` is set; force with `chevron`). Consecutive rows draw inset hairline dividers automatically.

```tsx
<Card>
  <Row icon="globe" iconColor="teal" title="Nostr discovery" trailing={<Toggle checked />} />
  <Row icon="key" iconColor="gray" title="Recovery phrase" onClick={…} />
  <Row leading={<Avatar size={36} active />} title="ada@onym" subtitle="bls1q7x…k4mte9" mono trailing={<Chip tone="blue">Active</Chip>} onClick={…} />
</Card>
```

Maps to `SettingsRow` in the OnymDesign Swift package.
