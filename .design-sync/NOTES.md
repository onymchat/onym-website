# design-sync notes — onym-website

- The design system lives in `design-system/` (npm, `@onym/design`), purpose-built for this sync: React mirror of the `OnymDesign` Swift package in `~/Developer/onym-ios` plus the Liquid Glass treatment from `public/assets/home-mock.css`.
- Token color values are authoritative from `onym-ios/Packages/OnymDesign/Sources/OnymDesign/OnymBrand.swift` (`OnymTokens`, `OnymAccent`, `SettingsTile`). If the Swift tokens change, update `design-system/src/tokens.css` to match before re-syncing.
- Build: `npm --prefix design-system run build` → `design-system/dist/index.js` (ESM, react external) + `dist/index.d.ts` + `dist/styles.css`.
- Components are styled via CSS classes (`on-*`) scoped under `.on-screen`; every design must be wrapped in `<Screen>` or it renders unstyled. `cfg.provider` is set to `Screen`, so preview cells are auto-wrapped.
- Render check runs against the user's installed Chrome via `DS_CHROMIUM_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"` — no playwright chromium is cached on this machine; keep passing that env var to validate/capture.
- Font stack deliberately omits explicit "SF Pro" names (Apple fonts can't ship); `-apple-system`/`system-ui` resolve SF on Apple devices, fallback is Helvetica Neue. This is the accepted answer to `[FONT_MISSING]` — do not "fix" it by shipping fonts.
- Grouping comes from `design-system/docs/<Name>.md` frontmatter `category` (Layout/Content/Controls/Chat/Brand); docs also feed each `.prompt.md`.

## Preview-authoring quirks (from the authored wave)
- `.on-screen` lays children out as a column and overrides inline flex on the Screen element — wrap row layouts in an inner div.
- Glass components (GlassButton, TabDock) read as flat gray on empty backgrounds — always compose content (gradient div, ListItems, Card rows) behind them.
- Absolutely-pinned components (TabDock, ChatComposer) need a nested sized `<Screen style={{height: 320-420, borderRadius, overflow: 'hidden'}}>` stage inside the provider wrapper.
- ListItems must NOT go in a Card (they draw their own dividers); Rows only draw dividers inside a Card; Row `onClick` implies the chevron.
- `Row iconColor` takes TileColor (9 names); Avatar/Chip/ChatBubble `accent` takes AccentName (6 names) — different sets.
- Avatar `accent` tints only the OnymMark placeholder, not `initial` letters.

## Known render warns
- (none currently — last full validate was clean apart from triaged items above)

## Re-sync risks
- Token values are a manual copy of the Swift `OnymTokens`/`OnymAccent` in onym-ios — they can drift silently if the app repo changes colors; re-check `OnymBrand.swift` on each re-sync.
- The render check depends on the locally installed Google Chrome (`DS_CHROMIUM_PATH`); a Chrome update or removal changes the render environment.
- All previews are hand-authored against the current component API; renaming props in `design-system/src/*` will need the matching `previews/*.tsx` updates.
