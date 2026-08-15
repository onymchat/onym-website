---
category: Layout
---

# NavBar

Inline navigation bar: circular Liquid Glass buttons at the sides, a centered 17pt semibold title with optional subtitle. `onBack` renders the standard glass back chevron. Use `GlassButton` elements in `trailing`.

```tsx
<NavBar
  title="Design crew"
  subtitle="4 members"
  onBack={() => {}}
  trailing={<GlassButton icon="ellipsis" />}
/>
```

Maps to the inline `NavigationStack` bar in onym-ios (every screen except Settings uses `.inline`).
