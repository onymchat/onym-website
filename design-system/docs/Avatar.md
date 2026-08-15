---
category: Brand
---

# Avatar

Circular avatar on `surface3`. Shows an image when `src` is given, an `initial` letter, or the Onym broken-ring mark tinted by the identity `accent`. `active` renders the active-identity state: blue ring plus blue-tinted fill.

```tsx
<Avatar accent="pink" />
<Avatar initial="D" size={48} />
<Avatar active size={36} />
```

Maps to `OnymGroupAvatar` / `IdentityRingTile`.
