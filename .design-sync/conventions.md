# Onym design conventions

Onym is a private messenger for iOS. Designs made here map 1:1 to the `OnymDesign` SwiftUI package — clean, flat, minimal Liquid Glass, Apple-native metrics, full light + dark support.

## Setup (required)

Wrap every design in `Screen` — it carries all `--on-*` tokens; components outside it render unstyled:

```tsx
import { Screen, ScreenContent, LargeTitle, SectionLabel, Card, Row, Toggle, TabDock } from '@onym/design';

<Screen theme="auto" background="surface">
  <LargeTitle>Settings</LargeTitle>
  <ScreenContent>
    <SectionLabel>Transport</SectionLabel>
    <Card>
      <Row icon="antenna" iconColor="indigo" title="Relayers" subtitle="wss://relay.onym.app" mono onClick={() => {}} />
      <Row icon="bell" iconColor="red" title="Notifications" trailing={<Toggle checked />} />
    </Card>
  </ScreenContent>
  <TabDock tabs={[{ icon: 'bubble', label: 'Chats' }, { icon: 'gear', label: 'Settings' }]} activeIndex={1} />
</Screen>
```

- `theme`: `'light' | 'dark' | 'auto'`. Always check designs in both themes; `onAccent` text inverts (white on accent in light, black in dark).
- `background="surface"` for grouped/settings screens; `background="bg"` for chat and lists of `ListItem`.
- `TabDock` and `ChatComposer` pin to the bottom of `Screen`; put scrollable content in `ScreenContent` so it clears them.

## Styling idiom

Style via **component props + the `--on-*` CSS variables** — there is no utility-class vocabulary. For your own layout glue use inline styles or small style blocks referencing tokens: surfaces `--on-bg`, `--on-surface`, `--on-surface2`, `--on-surface3`; text `--on-text`, `--on-text2`, `--on-text3`; lines `--on-hairline`, `--on-hairline-strong`; semantic `--on-blue`, `--on-green`, `--on-red`, `--on-on-accent`; identity accents `--on-accent-orange|blue|green|purple|pink|yellow`; tile colors `--on-tile-purple|blue|indigo|orange|green|gray|red|teal|amber`; radii `--on-radius-card` (14px), `--on-radius-field`, `--on-radius-tile`, `--on-radius-pill`; fonts `--on-font`, `--on-font-mono`.

The language is flat + hairline borders — no drop shadows except the glass treatment and `PrimaryButton prominent`. Cards are radius 14; side margins 16px; section labels uppercase.

Icons: pass `icon`/`iconColor` names to components (`Row`, `IconTile`, buttons); the `Icon` component lists the full glyph set in its props. Never import an external icon library.

Chat identity: every sender has one accent (`orange|blue|green|purple|pink|yellow`) used consistently across their `ChatBubble`s and `Avatar`.

## Where the truth lives

Read `styles.css` (tokens + all component CSS via its imports) and each component's `.d.ts` + prompt doc before styling. Component inventory: Layout (Screen, ScreenContent, NavBar, TabDock, GlassButton), Content (LargeTitle, SectionLabel, Footnote, Card, Row, IconTile, ListItem, Chip, Badge), Controls (PrimaryButton, TextButton, Toggle, TextField, StepIndicator), Chat (ChatBubble, ChatComposer), Brand (OnymMark, Avatar, Icon).
