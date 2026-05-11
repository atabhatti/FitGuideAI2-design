# FitGuideAI iOS UI Kit

A web recreation of the FitGuideAI iOS app — 393×852 (iPhone 15 Pro). All visuals match the production Swift design system in `FitGuideAI2/Packages/DesignSystem/`.

## Files

- `index.html` — interactive click-thru prototype. Tap the tab bar to navigate between the four main tabs (Workout / Programs / Progress / Profile). The **Start workout** CTA opens the Active Workout flow.
- `styles.css` — shared visual tokens + utility classes (`.fg-cta`, `.fg-pill`, `.fg-card`, `.fg-tabbar`, etc.)
- JSX components (loaded via Babel standalone):
  - `Components.jsx` — primitives: `StatusBar`, `TopBar`, `TabBar`, `Card`, `PrimaryCTA`, `Pill`, `Icon`
  - `WorkoutTab.jsx` — today's session card + exercise list + Start CTA
  - `ProgramsTab.jsx` — current program card + alternate programs list
  - `ProgressTab.jsx` — stats grid + muscle volume rows + heatmap silhouette
  - `ProfileTab.jsx` — user header + settings rows
  - `ActiveWorkout.jsx` — exercise card with set table, mid-workout topbar, finish sheet

## Caveats

- SF Symbols are substituted with Lucide outline icons.
- The muscle-map renderer is a simplified anatomical silhouette — the real path-based map lives in `MuscleMap` (FitGuideAICore).
- Exercise images are placeholder rectangles; the real app caches CDN-served exercise photos via `CachedExerciseImage`.
