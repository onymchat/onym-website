---
category: Layout
---

# GlassButton

Circular Liquid Glass icon button (44pt) — nav-bar back/actions and floating controls. Give it a `label` to stretch into a capsule (e.g. the identity switcher). `tinted` colors the content accent blue.

```tsx
<GlassButton icon="chevron-left" aria-label="Back" />
<GlassButton icon="person" label="ada@onym" tinted />
<GlassButton icon="plus" />
```

The glass treatment (blur, saturation, inner highlight) comes from the shared tokens; it reads best over content, not on an empty background.
