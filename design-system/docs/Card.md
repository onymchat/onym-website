---
category: Content
---

# Card

Rounded (14pt) grouped container on `surface2` with 16px side margins — the settings-card surface. Stack `Row`s inside it (they draw their own inset dividers), or set `padded` for free-form content. `bordered` adds a hairline stroke (form/field cards, Create-Group style).

```tsx
<SectionLabel>Transport</SectionLabel>
<Card>
  <Row icon="antenna" iconColor="indigo" title="Relayers" subtitle="wss://relay.onym.app" mono onClick={…} />
  <Row icon="bell" iconColor="red" title="Notifications" trailing={<Toggle checked />} />
</Card>
<Footnote>…</Footnote>
```

Maps to `SettingsCard` in the OnymDesign Swift package.
