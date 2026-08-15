---
category: Content
---

# Chip

Tiny uppercase status badge (radius 4): "DEFAULT", "ACTIVE", "VERIFIED". Neutral by default; `tone` gives semantic green/red/blue at a 14% tinted background; `accent` tints with an identity accent (`orange | blue | green | purple | pink | yellow`).

```tsx
<Chip>Default</Chip>
<Chip tone="green">Verified</Chip>
<Chip accent="purple">Beta</Chip>
```

Maps to `SettingsChip`.
