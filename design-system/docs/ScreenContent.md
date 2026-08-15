---
category: Layout
---

# ScreenContent

The scrollable content region of a `Screen`. Adds bottom padding so content clears a floating `TabDock` or `ChatComposer`. Place everything between the `NavBar` and the dock inside it.

```tsx
<Screen>
  <LargeTitle>Chats</LargeTitle>
  <ScreenContent>
    <ListItem … />
  </ScreenContent>
  <TabDock … />
</Screen>
```
