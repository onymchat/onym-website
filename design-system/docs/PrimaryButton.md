---
category: Controls
---

# PrimaryButton

Full-width filled CTA: 50pt tall, radius 14, accent-blue fill, `onAccent` label (white in light mode, **black in dark mode** — the accent contrast inverts by theme). `disabled` renders at 45% opacity; `destructive` fills red; `prominent` adds the soft colored glow used on a flow's main CTA.

```tsx
<PrimaryButton icon="plus" onClick={…}>Create group</PrimaryButton>
<PrimaryButton disabled>Continue</PrimaryButton>
```

Maps to `SettingsPrimaryButton`.
