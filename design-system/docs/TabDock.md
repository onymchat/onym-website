---
category: Layout
---

# TabDock

Floating Liquid Glass tab bar pinned to the bottom of the `Screen`: a blurred capsule holding two or three tabs, plus a detached circular search button (Apple's Liquid Glass search slot — keep `search` on unless the screen truly has no search).

```tsx
<TabDock
  tabs={[
    { icon: 'bubble', label: 'Chats' },
    { icon: 'gear', label: 'Settings' },
  ]}
  activeIndex={0}
  onTabChange={(i) => {}}
  onSearch={() => {}}
/>
```

The parent `Screen` provides the positioning context; content behind it should sit in `ScreenContent` so it can scroll clear. Maps to the iOS `TabView` with the system search-role tab.
