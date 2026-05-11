# FitGuideAI Design System

FitGuideAI is a social-fitness startup building an iOS app that helps people **of all ages and levels build muscle, add strength, and progress** — with AI taking the guesswork and intimidation out of getting stronger. The product is rooted in resilient aging, longevity, and community: strong bodies, strong bones, strong joints, capable through the last decade of life.

This design system is a port of the production Swift design system (`Packages/DesignSystem`) into web-friendly tokens, CSS variables, and React UI-kit recreations so design agents can produce on-brand mocks, slides, and prototypes for the FitGuideAI brand.

## Sources

- **Codebase:** `FitGuideAI2/` (read-only, mounted)
  - Swift DS: `FitGuideAI2/Packages/DesignSystem/Sources/DesignSystem/`
    - `Colors/Colors.swift` — 60+ semantic color tokens (brand, surface, text, state, volume zones, plate, band, recovery, group)
    - `Typography/Typography.swift` — 14 role tokens + 3 set-table tokens (SF Pro default; Bebas Neue for displayHero)
    - `Layout/Spacing.swift`, `Layout/Radius.swift`, `Layout/Elevation.swift`, `Motion/Motion.swift`
    - `Tokens/Component+Phase2.swift` — component-local layout constants
    - `Components/` — 100+ SwiftUI components (`FGPrimaryButton`, `FGTabBar`, `FGStatCard`, `FGProgressionPill`, `FGActiveExerciseCard`, etc.)
  - Specs: `FitGuideAI2/docs/foundation/03-design-system-v2-spec.md` and `docs/specs/features/*`
  - Reference screens: `FitGuideAI2/.harness-screens/` (tab-workout, tab-programs, tab-progress, tab-profile, onboarding-pre-auth, intelligence-modal)

## Index

| File / Folder | What it is |
|---|---|
| `colors_and_type.css` | All design tokens as CSS custom properties (dark = default; light via `@media`) |
| `fonts/` | Bebas Neue webfont (SF Pro is system-only — see Caveats) |
| `assets/` | Logos, icons, brand SVGs |
| `preview/` | Static HTML cards rendered into the Design System tab |
| `ui_kits/ios_app/` | React recreation of the FitGuideAI iOS app — `index.html` is a click-thru prototype |
| `SKILL.md` | Agent-skill manifest for Claude Code / similar tools |

---

## Content Fundamentals

**Voice: coach-first, encouraging, second-person.** Copy speaks to the lifter in the first person plural or directly as "you." It's confident, clear, and avoids the patronizing tone of consumer-fitness apps. Reads like a thoughtful trainer who respects the user's time and intelligence.

- **Person:** "you" / "your" predominantly. "We'll generate your program." Never "I" except inside the user's own logs.
- **Casing:** Sentence case for almost everything. Reserved Title Case for proper nouns (Active Workout, Gym Mode, Programs Tab) and screen titles.
- **Tense:** Past-tense badges read as achievements (`+5 lbs`, `🏆 PR`, `Comeback`); future-tense pills read as instructions (`↑ +5 lb`, `aim 12 reps`, `Half sets`). The dual-tense `FGProgressionPill` is core to the brand voice.
- **Numbers and units:** explicit and monospaced (digits use `.monospacedDigit()`). "lbs" / "kg" / "rep" / "sets" — short, no decimals unless required.
- **Tone words seen across the codebase:** _progress, easing in, comeback, deload, retry, aim, optimal, growth, intensification, peak, recovery._ These come from periodization vocabulary — borrow them; don't invent new ones.
- **Emoji:** rare and intentional. Trophy 🏆 appears on PR badges (and only on PR badges). No decorative emoji elsewhere. Pump-bro emoji are off-brand.
- **No exclamation points** except on celebration toasts ("Workout complete!"). Calm authority over hype.

**Examples (from the codebase):**

- Empty state copy is short and instructive, not playful: "Add a set today", "Aim for 12 reps today", "Easing in".
- Personal-record callouts: `🏆 PR`, `🏆 Reps PR`, `🏆 Time PR`, `🏆 1RM PR` — trophy + the precise PR type, never a generic "New record!".
- Coaching notes inside the wizard are tight, accent-tinted info pills (`FGCoachingNote`) — one sentence, no period unless it ends a real sentence.
- Confirmation copy is plain: "Discard workout?" not "Are you sure you want to lose all your hard work?".

---

## Visual Foundations

**Mood:** **Dark navy + electric chartreuse.** The app ships dark-mode-default. The signature combination is `#05172E` background, `#14406B` cards, and `#E8FF47` accent (a luminous lime-yellow that reads as "live wire" — the only saturated color most screens see). Gold `#E8C84A` is the secondary brand color for trophy/PR moments. Light mode collapses the accent to a deep green `#155A37` and the background to `#F6F7F8`.

**Colors — system structure**

- Five **brand intents:** `accent`, `accentSubtle`, `gold`, `warning`, `destructive`.
- Five **surface tokens:** `background`, `surfaceCard`, `surfaceSheet`, `stroke`, `hairline`.
- Six **text tokens:** primary / secondary / tertiary / on-accent / on-gold / on-destructive. Tertiary is **decorative only** — using it on text is a PR-blocking lint.
- Six **semantic state tokens:** success / info / warning / destructive plus their `*Subtle` (15% alpha) backgrounds.
- Six **volume-zone colors** (atrophying → overtraining: gray → blue → green → yellow → orange → red) — first-class, not borrowed from semantics.
- Four **block-phase colors** (accumulation / intensification / peak / deload).
- Plate palette (6) and Band palette (4) for the visual barbell/band calculators.
- Group colors: superset = teal `#5DCFCF`, circuit = warm orange `#FF9F4A`. Banner background tints these at 8%; rows at 20%; separators at 25% — a strict "fill = type, stroke = active" grammar.

**Typography**

- **SF Pro** is the default sans (system-only — substitute on web is `-apple-system, system-ui`).
- **Bebas Neue** Regular 42pt is reserved for `displayHero` (onboarding step headers, big numeric heroes). Bumps to 48pt inside Personal Details forms; 56pt for `weightDisplay`; 72pt for `timerXL` (timed-hold ring).
- 17pt body, 20pt heading-lg, 11pt label-sm (uppercase, semibold, +0.04em tracking) is the everyday triad.
- Numeric displays always opt into `.monospacedDigit()` to prevent digits from jiggling during countdown / weight updates. We bake this into `timerDisplay` and `timerXL`.

**Spacing & radius**

- Spacing is a **10-step scale**: 2/4/8/12/16/20/24/32/48/64. Off-scale values require governance review and are namespaced to `DS.Component.*`.
- Radius: 4 / 8 / 12 / 16 / 20 + pill (∞). 14pt is the V1-tuned card radius for group cards and gym-action buttons — an explicit off-scale exception that ships as `--r-card`.
- Continuous (squircle) corner style on all cards and CTAs.

**Backgrounds**

- Solid dark navy `#05172E` (no full-bleed photography in chrome).
- **Splash + auth screens** use a soft radial halo: `accentSubtle → background` at 280pt outer radius from top. Auth wizard adds a 7%-opacity halo from screen top.
- A subtle `FGGridTexture` lives on a few empty states; otherwise surfaces are flat.
- No marketing-style gradients in product; no rounded-left-border accent cards (the codebase aggressively avoids that pattern).

**Cards**

- `surfaceCard` fill, 1pt `stroke` border (`rgba(255,255,255,0.08)` on dark, `#E2E4E7` on light), 16pt radius, 16pt internal padding, optional elevation `card` (`0 2px 4px rgba(0,0,0,0.10)` — halved opacity in dark mode).
- Stat cards are 64pt min-height with value (20pt bold) + label (11pt label-sm uppercase).
- Group cards (supersets/circuits) wear a 1pt group-colored stroke and a banner-row 8%-tint at the top.

**Borders & strokes**

- Two stroke weights: `hairline` (0.5pt) and `standard` (1pt). The "current program" card bumps to 1.5pt accent. Group banner active-drop-target is 2pt.

**Shadows**

- Three levels: `none`, `card` (subtle, 2pt y, 4pt blur), `floating` (4pt y, 8pt blur) — for FABs, popovers, toasts.
- Brand "glow" effect (`accent @ 0.4 alpha`, 32pt blur) on the splash bolt + auth hero. Used sparingly — only the auth screens and the rest-timer.

**Motion**

- Four durations: instant 100ms, fast 200ms, standard 250ms, slow 400ms.
- Three easings: standard `easeInOut`, spring (response 0.25, damping 0.8), keypad spring (response 0.15, damping 0.7).
- Drag-and-drop has its own spring family: grab, reorder, indicator-fade.
- **Reduced-motion fallback is mandatory** — every animation has a no-animation path and the VisualHarness lints for it.

**Interactive states**

- Buttons use a `ScaleButtonStyle()` press: 96-97% scale, no color flash. This is the defining tactile signal of the app.
- Hover/focus visuals are minimal (it's iOS-first); selection is communicated by `accent` fill or accent capsule, not by tint changes.
- Disabled = 40% opacity, no color shift.

**Transparency & blur**

- Used sparingly: accent halos (7% opacity radial gradients), state-color subtles (15% alpha background fills), group-color banner tints (8%), member row tints (20%).
- No glass / vibrancy / heavy blur — the design is flat, navy-on-navy with strong accent moments.

**Imagery vibe**

- Anatomical body maps (front + back muscle silhouettes) are the dominant "image" in the product — rendered as paths, color-mapped to volume zones. No photography in the app chrome.
- Exercise GIFs/animations sit inside 220pt rounded hero cards on the ExerciseDetail screen.
- When photography is used (marketing/slides), it should be **cool, naturally lit, gym-real** — not stock-fitness shiny-skin. Diverse ages and body types. Grain is acceptable; high-contrast color filters are not.

**Layout rules**

- Fixed `screenInset` = 20pt horizontal. Card padding = 16pt. Section gap = 12pt.
- Bottom tab bar 56pt (44pt per-tab tap target).
- Top bar 44pt (Apple HIG); Active Workout uses an off-scale 56pt because it carries timer + 3 circle buttons.
- Primary CTA height 54pt, capsule-shaped, full-width.

---

## Iconography

**Primary icon system: Apple SF Symbols** (referenced throughout SwiftUI as `Image(systemName: ...)`). The brand does **not** ship its own custom icon font.

Common glyphs seen in code: `chevron.left`, `chevron.right`, `xmark`, `plus`, `camera.fill`, `bolt.fill`, `arrow.up`, `arrow.counterclockwise`, `line.3.horizontal`, `flame.fill`, `trophy.fill`, `moon.fill`, `info.circle`.

**For web/mock recreations:** we substitute **[Lucide](https://lucide.dev/)** (CDN: `https://unpkg.com/lucide@latest`) as the closest visual match — same stroke-weight philosophy (1.5pt outline, rounded caps). Mapping table for the most common glyphs:

| SF Symbol | Lucide |
|---|---|
| `chevron.left` | `chevron-left` |
| `xmark` | `x` |
| `plus` | `plus` |
| `bolt.fill` | `zap` (filled) |
| `flame.fill` | `flame` |
| `trophy.fill` | `trophy` |
| `arrow.up` | `arrow-up` |
| `arrow.counterclockwise` | `rotate-ccw` |
| `line.3.horizontal` | `menu` / `grip-horizontal` |
| `moon.fill` | `moon` |
| `info.circle` | `info` |
| `camera.fill` | `camera` |

🚩 **Substitution flagged:** SF Symbols are Apple-only and cannot be redistributed. For web mocks we use Lucide; for production iOS we use SF Symbols as designed. If you want pixel-accurate icon parity in a slide deck or marketing mock, please attach exported SF Symbols (PDF or PNG) and we will swap them in.

**Emoji** as iconography is rare — only the 🏆 trophy on PR badges. Treat as part of the copy, not as a glyph.

**Unicode chars** as icons: arrows (`→`) appear inside text strings like "10 → 12 reps", but not standalone.

**Brand logo:** The app's hero glyph is a 64–88pt **bolt icon on a rounded-square tile**, with an accent halo. See `assets/logo-bolt.svg`. The wordmark is "FitGuideAI" in Bebas Neue with the `AI` set in accent color.

---

## Caveats — please confirm

🚩 **Fonts:** SF Pro is Apple-licensed and can't ship with this kit. Web mocks substitute system stacks. **Bebas Neue** (Google Fonts) is included and matches the codebase usage. If you have a different display face in mind, please attach.

🚩 **Logo:** The codebase doesn't ship a redistributable wordmark — the bolt + "FitGuideAI" wordmark in this kit was reconstructed from the splash spec (88pt bolt-on-rounded-tile with accent halo, Bebas Neue wordmark). **Please share an official logo SVG** if there is one and I'll swap it in.

🚩 **Iconography:** Lucide substitutes for SF Symbols on the web side. For 1:1 fidelity in iOS-targeted production work, use SF Symbols directly.

🚩 **No marketing site / slide template was provided** — this kit covers only the iOS app product. If you want a marketing-site kit or slide template, let me know and I'll add one.

🚩 **Body-map renderer:** The Swift app ships a real path-based muscle map. The web kit uses a simplified anatomical silhouette placeholder. A pixel-perfect web port would require porting the V1 muscle-map paths from `MuscleMap` in `FitGuideAICore`.
