---
category: Layout
---

# Screen

Root wrapper for every design. Provides the token scope (all `--on-*` CSS variables), the light/dark theme, the page background, and positioning context for `TabDock` and `ChatComposer`. **Every component must live inside a `Screen` — outside it everything renders unstyled.**

- `theme`: `'light' | 'dark' | 'auto'` (default `'auto'`, follows the OS).
- `background`: `'surface'` (`#F5F5F7` / `#0E0E10`, for settings-style grouped lists — default) or `'bg'` (pure white/black, for chat and content screens).

```tsx
<Screen theme="dark" background="surface">
  <NavBar title="Settings" />
  <ScreenContent>…</ScreenContent>
  <TabDock tabs={[{icon: 'bubble', label: 'Chats'}, {icon: 'gear', label: 'Settings'}]} />
</Screen>
```

Maps to the SwiftUI screen scaffold with `OnymTokens.surface.ignoresSafeArea()` in onym-ios.
