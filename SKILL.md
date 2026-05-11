---
name: fitguideai-design
description: Use this skill to generate well-branded interfaces and assets for FitGuideAI — a social fitness app for building muscle, strength, and resilience — either for production or throwaway prototypes/mocks. Contains essential design guidelines (dark navy + electric chartreuse), colors, type, fonts, assets, and UI kit components for prototyping the iOS app.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files:

- `colors_and_type.css` — all design tokens as CSS custom properties (dark default + light override)
- `assets/` — logo, wordmark, app icon, reference screenshots
- `preview/` — token / component preview cards
- `ui_kits/ios_app/` — React (Babel) recreation of the iOS app with click-thru tabs and an Active Workout flow

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. The brand defaults to **dark mode** with a deep-navy background (`#05172E`) and an electric-chartreuse accent (`#E8FF47`). Use SF Pro / system font stack for body text and Bebas Neue for the rare display moment (onboarding step headers, big numerics).

If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions about audience / surface / fidelity, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick references

- Brand voice: coach-first, "you", sentence case, no exclamation points, trophy emoji 🏆 only on PRs.
- Buttons: 54pt pill, accent fill on primary, ScaleButtonStyle 96–97% press.
- Cards: 16pt radius, 1pt white-8% stroke, navy surface.
- Iconography: Lucide outline on web; SF Symbols in iOS production.
- Spacing: 2 / 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 64 — stay on scale.
