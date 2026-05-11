/* global React, ReactDOM, DesignCanvas, DCSection, DCArtboard, useTweaks, TweaksPanel, TweakSection, TweakToggle, TweakRadio,
   FGPrimaryButton, FGSecondaryButton, FGTertiaryButton, FGAuthPrimaryButton, FGGymActionButton,
   FGSocialButton, FGSocialButtonRow, FGTextButton,
   FGCircleButton, FGCircleIconButton, FGCloseChevronButton,
   FGDashedAddRow, AutoProgressionButton, AutoProgressionStatic, Icon */

const { useEffect } = React;

// === Artboard helpers ===
function Row({ label, children, inline }) {
  return (
    <div className={`ab__row ${inline ? "ab__row--inline" : ""}`}>
      {label && <div className="ab__label">{label}</div>}
      {children}
    </div>
  );
}

function Caption({ children }) {
  return <div className="ab__caption">{children}</div>;
}

function MockTopBar({ title, leading, trailing }) {
  return (
    <div className="mock-topbar">
      <div style={{ width: 44 }}>{leading}</div>
      <div className="mock-topbar__title">{title}</div>
      <div style={{ width: 44, display: "flex", justifyContent: "flex-end" }}>{trailing}</div>
    </div>
  );
}

// ============================================================
//   ARTBOARDS
// ============================================================

function ArtboardPrimary() {
  return (
    <div className="ab">
      <div>
        <h3 className="ab__title">FGPrimaryButton</h3>
        <p className="ab__sub">Capsule · 54pt · full-width filled CTA — spec §2.1</p>
      </div>

      <Row label="STYLE = .accent">
        <FGPrimaryButton title="Start Workout" />
      </Row>
      <Row label="STYLE = .info  · LifecycleModal §26">
        <FGPrimaryButton title="Got it" style="info" />
      </Row>
      <Row label="STYLE = .destructive  · §2.2">
        <FGPrimaryButton title="Discard Workout" style="destructive" />
      </Row>

      <div className="ab__divider" />

      <Row label="STATE — leading SF symbol">
        <FGPrimaryButton title="Add Exercise" leadingSystemImage="plus" />
      </Row>
      <Row label="STATE — isLoading">
        <FGPrimaryButton title="Start Workout" isLoading />
      </Row>
      <Row label="STATE — disabled · opacity 0.40">
        <FGPrimaryButton title="Continue" disabled />
      </Row>

      <Caption>height = DS.Layout.primaryCTAHeight (54) · text = DS.Typography.labelLarge (16/600)</Caption>
    </div>
  );
}

function ArtboardSecondary() {
  return (
    <div className="ab">
      <div>
        <h3 className="ab__title">FGSecondaryButton</h3>
        <p className="ab__sub">Capsule outline · 54pt · paired with primary — spec §2.3 GhostButton</p>
      </div>

      <Row label="TINT = .neutral">
        <FGSecondaryButton title="Cancel" />
      </Row>
      <Row label="TINT = .neutral · leading icon">
        <FGSecondaryButton title="Resend code" leadingSystemImage="arrow.uturn.backward" />
      </Row>
      <Row label="TINT = .accent  · CreateProgramSheet manual">
        <FGSecondaryButton title="Build Manually" tint="accent" />
      </Row>

      <div className="ab__divider" />

      <Row label="STATE — disabled">
        <FGSecondaryButton title="Cancel" disabled />
      </Row>

      <Caption>neutral = surfaceCard + stroke + textPrimary · accent = transparent + accent@40% border + accent</Caption>
    </div>
  );
}

function ArtboardAuth() {
  return (
    <div className="ab">
      <div>
        <h3 className="ab__title">FGAuthPrimaryButton</h3>
        <p className="ab__sub">RR14 · 56pt · UPPERCASE + tracking 2.5px + accent glow — Appendix C.1 #10</p>
      </div>

      <Row label="DEFAULT — bare label">
        <FGAuthPrimaryButton title="Sign In" />
      </Row>
      <Row label="WITH TRAILING ARROW — Onboarding §7.3">
        <FGAuthPrimaryButton title="Continue" trailingSystemImage="arrow.right" />
      </Row>
      <Row label="LOADING">
        <FGAuthPrimaryButton title="Signing In" isLoading />
      </Row>

      <div className="ab__divider" />

      <Row label="DISABLED — surfaceCard fill, no glow">
        <FGAuthPrimaryButton title="Continue" trailingSystemImage="arrow.right" disabled />
      </Row>

      <Caption>shadow = accent @ 25% · 20pt blur · y +4 · text 14pt bold tracking 2.5</Caption>
    </div>
  );
}

function ArtboardGym() {
  return (
    <div className="ab">
      <div>
        <h3 className="ab__title">FGGymActionButton</h3>
        <p className="ab__sub">RR14 · 80pt default · 20pt bold · one-hand reach — Workout §2.4 GYM-012</p>
      </div>

      <Row label="DEFAULT — 80pt · RULE-WORKOUT N3a">
        <FGGymActionButton title="Complete Set" />
      </Row>
      <Row label="WITH LEADING SYMBOL">
        <FGGymActionButton title="Finish Workout" leadingSystemImage="checkmark" />
      </Row>

      <div className="ab__divider" />

      <Row label="COMPACT — 56pt · rest-skip variant N3b">
        <FGGymActionButton title="Skip Rest" compact />
      </Row>
      <Row label="DISABLED">
        <FGGymActionButton title="Complete Set" disabled />
      </Row>

      <Caption>Distinct from Primary (capsule) and Auth (56pt). The Gym CTA is tall + square to be hit mid-set.</Caption>
    </div>
  );
}

function ArtboardTertiary() {
  return (
    <div className="ab">
      <div>
        <h3 className="ab__title">FGTertiaryButton</h3>
        <p className="ab__sub">Text-only · 44pt min hit · lowest CTA weight</p>
      </div>

      <div className="ab__grid-2">
        <div className="ab__row">
          <div className="ab__label">EMPHASIZES = true</div>
          <FGTertiaryButton title="Forgot password?" />
        </div>
        <div className="ab__row">
          <div className="ab__label">EMPHASIZES = false</div>
          <FGTertiaryButton title="Skip" emphasizes={false} />
        </div>
      </div>

      <Row label="STATE — disabled">
        <FGTertiaryButton title="Forgot password?" disabled />
      </Row>

      <Caption>accent · labelMedium (14/500) · padded for 44pt tap target</Caption>
    </div>
  );
}

function ArtboardText() {
  return (
    <div className="ab">
      <div>
        <h3 className="ab__title">FGTextButton</h3>
        <p className="ab__sub">Link-style · 15pt bodyMedium · color + weight overrides — Onboarding cross-links</p>
      </div>

      <Row label="DEFAULT — accent / regular">
        <FGTextButton title="Forgot password?" />
      </Row>
      <Row label="OVERRIDE — textPrimary / semibold (SignIn footer)">
        <FGTextButton title="Create account" color="primary" weight="semibold" />
      </Row>
      <Row label="OVERRIDE — accent / semibold (Done in nav)">
        <FGTextButton title="Done" weight="semibold" />
      </Row>

      <Caption>Used in onboarding nav cross-links; weight override added in C.4 amendment.</Caption>
    </div>
  );
}

function ArtboardSocial() {
  return (
    <div className="ab">
      <div>
        <h3 className="ab__title">FGSocialButtonRow</h3>
        <p className="ab__sub">2-up neutral row · 50pt · RR12 — Onboarding §7.3</p>
      </div>

      <Row label="ROW">
        <FGSocialButtonRow buttons={[
          { title: "Apple", systemImage: "apple.logo" },
          { title: "Google", systemImage: "g.circle.fill" },
        ]} />
      </Row>

      <Row label="SINGLE">
        <FGSocialButton title="Continue with Apple" systemImage="apple.logo" />
      </Row>

      <Caption>Custom-styled neutral (not ASAuthorizationAppleIDButton); auth controller wired via action closure.</Caption>
    </div>
  );
}

function ArtboardCircleIcon() {
  return (
    <div className="ab">
      <div>
        <h3 className="ab__title">FGCircleIconButton</h3>
        <p className="ab__sub">36pt circle · textPrimary @ 8% fill · FGTopBar slot — Appendix D.1 #2</p>
      </div>

      <Row label="USAGE — Workout History top bar">
        <MockTopBar
          title="Workout History"
          leading={<FGCircleIconButton systemImage="chevron.left" />}
          trailing={<FGCircleIconButton systemImage="square.and.arrow.up" />}
        />
      </Row>

      <Row label="ACTIVE WORKOUT — accent pause/play override (RULE-AWB1-004)">
        <MockTopBar
          title="00:24:18"
          leading={<FGCircleIconButton systemImage="xmark" />}
          trailing={<FGCircleIconButton systemImage="pause.fill" accent />}
        />
      </Row>

      <Row label="VARIANTS — neutral · accent" inline>
        <FGCircleIconButton systemImage="chevron.left" />
        <FGCircleIconButton systemImage="pause.fill" accent />
        <FGCircleIconButton systemImage="ellipsis" />
      </Row>

      <Caption>44pt outer tap target. Glyph 17pt semibold. Distinct from legacy IconButton.</Caption>
    </div>
  );
}

function ArtboardCircle() {
  return (
    <div className="ab">
      <div>
        <h3 className="ab__title">FGCircleButton</h3>
        <p className="ab__sub">32pt circle · surfaceCard fill · textSecondary glyph — Program Editor (RULE-PG-001a)</p>
      </div>

      <Row label="USAGE — Program Editor top bar">
        <MockTopBar
          title="My Program"
          leading={<FGCircleButton systemImage="xmark" />}
          trailing={<FGCircleButton systemImage="ellipsis" />}
        />
      </Row>

      <Row label="ICON OPTIONS" inline>
        <FGCircleButton systemImage="xmark" />
        <FGCircleButton systemImage="ellipsis" />
        <FGCircleButton systemImage="plus" />
      </Row>

      <Caption>13pt semibold glyph · distinct from FGCircleIconButton (36pt · textPrimary).</Caption>
    </div>
  );
}

function ArtboardClose() {
  return (
    <div className="ab">
      <div>
        <h3 className="ab__title">FGCloseChevronButton</h3>
        <p className="ab__sub">34pt circle · surfaceCard + stroke border · xmark — fullScreenCover dismiss</p>
      </div>

      <Row label="USAGE — Manual flow Name screen">
        <MockTopBar
          title="Name your program"
          leading={<FGCloseChevronButton />}
          trailing={null}
        />
      </Row>

      <Row label="STANDALONE" inline>
        <FGCloseChevronButton />
      </Row>

      <Caption>13pt semibold xmark · textPrimary glyph · 44pt outer tap.</Caption>
    </div>
  );
}

function ArtboardDashed() {
  return (
    <div className="ab">
      <div>
        <h3 className="ab__title">FGDashedAddRow</h3>
        <p className="ab__sub">Dashed accent stroke · plus.circle · in-panel "Add" — Appendix I.1</p>
      </div>

      <Row label="EMPTY STATE — RULE-PG-001c">
        <FGDashedAddRow label="Add exercise" />
      </Row>
      <Row label="FOOTER — RULE-PG-001d">
        <FGDashedAddRow label="Add another exercise" />
      </Row>

      <Caption>RR10 · 1pt dash [4] · accent @ 25% stroke · accent text.</Caption>
    </div>
  );
}

function ArtboardAutoProg() {
  return (
    <div className="ab">
      <div>
        <h3 className="ab__title">AutoProgressionButton</h3>
        <p className="ab__sub">Small pill toggle · per-exercise auto-progression — shared §23</p>
      </div>

      <Row label="STATES (static)" inline>
        <AutoProgressionStatic on={false} />
        <AutoProgressionStatic on={true} />
      </Row>

      <Row label="INTERACTIVE — tap to toggle">
        <div style={{ display: "flex", gap: 12 }}>
          <AutoProgressionButton />
          <AutoProgressionButton defaultOn />
        </div>
      </Row>

      <Caption>OFF: textSecondary + 12% stroke · ON: accent + accentSubtle fill + accent @ 33% stroke.</Caption>
    </div>
  );
}

function ArtboardScaleStyle() {
  return (
    <div className="ab">
      <div>
        <h3 className="ab__title">ScaleButtonStyle</h3>
        <p className="ab__sub">Canonical press feedback — 0.97 scale · 100ms easeInOut — shared §14</p>
      </div>

      <Row label="APPLIED TO ALL CANONICAL BUTTONS — press &amp; hold">
        <FGPrimaryButton title="Press &amp; hold me" />
      </Row>

      <Row label="ALSO — press these" inline>
        <button className="fg-btn fg-tertiary fg-tertiary--emphasized">Tertiary</button>
        <button className="fg-btn fg-text">Text</button>
        <button className="fg-btn" style={{ width: 44, height: 44 }}>
          <span className="fg-circle-icon"><Icon name="chevron.left" size={17} weight="semibold" /></span>
        </button>
      </Row>

      <Caption>configurable: pressedScale (default 0.97), pressedOpacity (default 1.0).</Caption>
    </div>
  );
}

// ============================================================
//   FEATURE-LOCAL ARTBOARDS  (not in DS, but ship in real screens)
// ============================================================

function ArtboardProfileRow() {
  return (
    <div className="ab">
      <div>
        <h3 className="ab__title">ProfileRowButton</h3>
        <p className="ab__sub">Settings-style row · 28pt icon-tile + label/subtitle + value + chevron — Profile §F1</p>
      </div>

      <Row label="VALUE + CHEVRON · most common">
        <div style={{ background: "var(--surface-card)", borderRadius: "var(--r-md)" }}>
          <ProfileRowButton icon="person.crop.circle" label="Account" value="Pro" showsChevron />
        </div>
      </Row>
      <Row label="SUBTITLE · descriptive row">
        <div style={{ background: "var(--surface-card)", borderRadius: "var(--r-md)" }}>
          <ProfileRowButton icon="bell" label="Notifications" subtitle="Workout reminders, weekly recap" showsChevron />
        </div>
      </Row>
      <Row label="LABEL ONLY · destructive (text override in feature)">
        <div style={{ background: "var(--surface-card)", borderRadius: "var(--r-md)" }}>
          <ProfileRowButton label="Sign out" />
        </div>
      </Row>

      <Caption>Tile = textPrimary @ 8% fill · label = 15pt · subtitle/value = 13pt textSecondary.</Caption>
    </div>
  );
}

function ArtboardDeleteAccount() {
  return (
    <div className="ab">
      <div>
        <h3 className="ab__title">DeleteAccountConfirmButton</h3>
        <p className="ab__sub">RR12 · two-stage confirm · destructive only when armed — Profile §F2</p>
      </div>

      <Row label="STAGE 1 — surfaceCard + textSecondary">
        <DeleteAccountConfirmButton title="Delete account" />
      </Row>
      <Row label="STAGE 2 — destructive fill (armed)">
        <DeleteAccountConfirmButton title="Tap again to confirm" isConfirmed />
      </Row>
      <Row label="STATE — isLoading">
        <DeleteAccountConfirmButton isConfirmed isLoading />
      </Row>

      <Caption>Distinct from FGPrimaryButton (capsule). RR12 + dual-state to slow accidental delete.</Caption>
    </div>
  );
}

function ArtboardGuideMe() {
  return (
    <div className="ab">
      <div>
        <h3 className="ab__title">GuideMeButton</h3>
        <p className="ab__sub">Green capsule · AI-coach affordance · stands apart from accent CTAs</p>
      </div>

      <Row label="DEFAULT">
        <GuideMeButton />
      </Row>

      <Caption>success fill (subtle) + success @ 30% stroke + success label. The only green button in the app.</Caption>
    </div>
  );
}

function ArtboardColorSwatch() {
  return (
    <div className="ab">
      <div>
        <h3 className="ab__title">ColorSwatchButton</h3>
        <p className="ab__sub">20pt color dot · 2pt outer accent ring when assigned — Profile color picker</p>
      </div>

      <Row label="STATES" inline>
        <ColorSwatchButton color="#E8FF47" assigned />
        <ColorSwatchButton color="#5B8DF5" />
        <ColorSwatchButton color="#FF3B30" />
        <ColorSwatchButton color="#34C759" />
        <ColorSwatchButton color="#FF9500" />
        <ColorSwatchButton color="#AF52DE" />
      </Row>

      <Caption>0.5pt stroke on dot · outer ring drawn 2pt outside, never inside.</Caption>
    </div>
  );
}

function ArtboardBugReport() {
  return (
    <div className="ab">
      <div>
        <h3 className="ab__title">BugReportSubmitButton · ThumbRemoveButton</h3>
        <p className="ab__sub">RR16 submit (heavier corner than Primary) + thumbnail remove × — Profile §F4</p>
      </div>

      <Row label="SUBMIT — RR16 accent">
        <BugReportSubmitButton title="Send report" />
      </Row>
      <Row label="SUBMIT — disabled">
        <BugReportSubmitButton title="Send report" isEnabled={false} />
      </Row>

      <div className="ab__divider" />

      <Row label="THUMB REMOVE — double-tone xmark">
        <div style={{ position: "relative", width: 64, height: 64, borderRadius: 8,
                      background: "linear-gradient(135deg,#5B8DF5,#AF52DE)" }}>
          <div style={{ position: "absolute", top: -6, right: -6 }}>
            <BugReportThumbRemoveButton />
          </div>
        </div>
      </Row>

      <Caption>RR16 is distinct from Primary's full capsule — bug report form has a more "input field" feel.</Caption>
    </div>
  );
}

function ArtboardCreateProgram() {
  return (
    <div className="ab">
      <div>
        <h3 className="ab__title">CreateProgramButton</h3>
        <p className="ab__sub">54×54 accent FAB · entry point to Create flow — Programs list</p>
      </div>

      <Row label="DEFAULT">
        <CreateProgramButton />
      </Row>

      <Caption>Same accent as Primary but circular FAB + shadow. Anchored bottom-right of program list.</Caption>
    </div>
  );
}

function ArtboardDaysPerWeek() {
  return (
    <div className="ab">
      <div>
        <h3 className="ab__title">DaysPerWeekButton</h3>
        <p className="ab__sub">56pt RR12 single-select tile · Create Program "how many days" step</p>
      </div>

      <Row label="ROW — one selected">
        <div style={{ display: "flex", gap: 8 }}>
          <DaysPerWeekButton value="3" />
          <DaysPerWeekButton value="4" selected />
          <DaysPerWeekButton value="5" />
          <DaysPerWeekButton value="6" />
        </div>
      </Row>

      <Caption>17pt semibold. Selected = accent fill + textOnAccent. Distinct from generic capsule CTAs.</Caption>
    </div>
  );
}

function ArtboardEditorChip() {
  return (
    <div className="ab">
      <div>
        <h3 className="ab__title">EditorChip</h3>
        <p className="ab__sub">RR8 monospaced compact chip · weight/reps editor focus state — Workout logging</p>
      </div>

      <Row label="IDLE / ACTIVE" inline>
        <EditorChip label="135" />
        <EditorChip label="145" active />
        <EditorChip label="155" />
        <EditorChip label="—" />
      </Row>
      <Row label="REPS ROW" inline>
        <EditorChip label="8" />
        <EditorChip label="8" />
        <EditorChip label="6" active />
        <EditorChip label="—" />
      </Row>

      <Caption>Idle = textPrimary @ 7% · Active = info @ 15% + info text. Mono digits for column alignment.</Caption>
    </div>
  );
}

function ArtboardAppleSignIn() {
  return (
    <div className="ab">
      <div>
        <h3 className="ab__title">AppleSignInButton</h3>
        <p className="ab__sub">Pure black RR12 · Apple HIG-mandated wordmark — Onboarding §7.3 (sign-up only)</p>
      </div>

      <Row label="DEFAULT">
        <AppleSignInButton />
      </Row>

      <Caption>Distinct from FGSocialButton (neutral). Used as the dominant variant when Apple ID is preferred path.</Caption>
    </div>
  );
}

function ArtboardGymPause() {
  return (
    <div className="ab">
      <div>
        <h3 className="ab__title">GymMode · pauseCircle</h3>
        <p className="ab__sub">56pt surfaceCard circle · accent SF symbol · drop shadow — GymMode HUD</p>
      </div>

      <Row label="STATES" inline>
        <GymPauseCircle />
        <GymPauseCircle paused />
      </Row>

      <Caption>Distinct from FGCircleIconButton (36pt, neutral). GymMode HUD needs higher prominence + accent.</Caption>
    </div>
  );
}

function ArtboardGymNav() {
  return (
    <div className="ab">
      <div>
        <h3 className="ab__title">GymMode · exercise nav arrow</h3>
        <p className="ab__sub">44×44 textSecondary chevron · no background · GymMode prev/next exercise</p>
      </div>

      <Row label="STATES" inline>
        <GymNavArrow direction="left" />
        <GymNavArrow direction="right" />
        <GymNavArrow direction="left" disabled />
      </Row>

      <Caption>No fill — relies on chevron weight. Disabled = opacity 0.3 (not 0.4 like canonical disabled).</Caption>
    </div>
  );
}

function ArtboardRestPill() {
  return (
    <div className="ab">
      <div>
        <h3 className="ab__title">RestTimerPill · adjust · play/pause</h3>
        <p className="ab__sub">Compound rest-timer control · adjust capsules + 36pt play/pause — Workout §W3</p>
      </div>

      <Row label="COMPOUND — rest timer pill">
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: 8, borderRadius: 999,
          background: "var(--surface-card)",
        }}>
          <RestAdjustCapsule label="-15" />
          <span style={{ color: "var(--text-primary)", fontVariantNumeric: "tabular-nums", fontWeight: 600, minWidth: 56, textAlign: "center" }}>1:30</span>
          <RestAdjustCapsule label="+15" />
          <RestPlayPauseCircle />
        </div>
      </Row>

      <Row label="PARTS" inline>
        <RestAdjustCapsule label="-15" />
        <RestAdjustCapsule label="+15" />
        <RestPlayPauseCircle />
        <RestPlayPauseCircle paused />
      </Row>

      <Caption>adjust = background fill capsule, white · play/pause = 36pt background fill (smaller than GymPause).</Caption>
    </div>
  );
}

// ============================================================
//   CANVAS + TWEAKS
// ============================================================

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "showPressed": false,
  "showDisabled": false,
  "theme": "dark"
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(DEFAULTS);

  // Apply theme override
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = tweaks.theme;
  }, [tweaks.theme]);

  // Apply global pressed/disabled overlays
  useEffect(() => {
    document.body.classList.toggle("show-pressed", tweaks.showPressed);
    document.body.classList.toggle("show-disabled", tweaks.showDisabled);
  }, [tweaks.showPressed, tweaks.showDisabled]);

  return (
    <>
      <DesignCanvas>
        <DCSection id="cta" title="Action CTAs" subtitle="Full-width, prominent. Choose one per surface.">
          <DCArtboard id="primary" label="FGPrimaryButton" width={440} height={580}>
            <ArtboardPrimary />
          </DCArtboard>
          <DCArtboard id="secondary" label="FGSecondaryButton" width={440} height={460}>
            <ArtboardSecondary />
          </DCArtboard>
          <DCArtboard id="auth" label="FGAuthPrimaryButton" width={440} height={500}>
            <ArtboardAuth />
          </DCArtboard>
          <DCArtboard id="gym" label="FGGymActionButton" width={440} height={520}>
            <ArtboardGym />
          </DCArtboard>
        </DCSection>

        <DCSection id="inline" title="Inline & Text" subtitle="Lower-weight affordances inside flows.">
          <DCArtboard id="tertiary" label="FGTertiaryButton" width={440} height={300}>
            <ArtboardTertiary />
          </DCArtboard>
          <DCArtboard id="text" label="FGTextButton" width={440} height={320}>
            <ArtboardText />
          </DCArtboard>
          <DCArtboard id="social" label="FGSocialButtonRow" width={440} height={320}>
            <ArtboardSocial />
          </DCArtboard>
        </DCSection>

        <DCSection id="icon" title="Icon" subtitle="Circular icon affordances for top-bars, sheets, and inline chrome.">
          <DCArtboard id="circle-icon" label="FGCircleIconButton" width={440} height={400}>
            <ArtboardCircleIcon />
          </DCArtboard>
          <DCArtboard id="circle" label="FGCircleButton" width={440} height={340}>
            <ArtboardCircle />
          </DCArtboard>
          <DCArtboard id="close-chev" label="FGCloseChevronButton" width={440} height={300}>
            <ArtboardClose />
          </DCArtboard>
        </DCSection>

        <DCSection id="feature" title="Feature-local · not in DS" subtitle="Buttons that ship in screens but aren't in the canonical DesignSystem.">
          <DCArtboard id="profile-row" label="ProfileRowButton" width={440} height={460}>
            <ArtboardProfileRow />
          </DCArtboard>
          <DCArtboard id="delete-acct" label="DeleteAccountConfirmButton" width={440} height={400}>
            <ArtboardDeleteAccount />
          </DCArtboard>
          <DCArtboard id="guide-me" label="GuideMeButton" width={440} height={240}>
            <ArtboardGuideMe />
          </DCArtboard>
          <DCArtboard id="color-swatch" label="ColorSwatchButton" width={440} height={260}>
            <ArtboardColorSwatch />
          </DCArtboard>
          <DCArtboard id="bug-report" label="BugReportSubmit + Thumb" width={440} height={460}>
            <ArtboardBugReport />
          </DCArtboard>
          <DCArtboard id="create-program" label="CreateProgramButton" width={440} height={260}>
            <ArtboardCreateProgram />
          </DCArtboard>
          <DCArtboard id="days-per-week" label="DaysPerWeekButton" width={440} height={260}>
            <ArtboardDaysPerWeek />
          </DCArtboard>
          <DCArtboard id="editor-chip" label="EditorChip" width={440} height={320}>
            <ArtboardEditorChip />
          </DCArtboard>
          <DCArtboard id="apple-signin" label="AppleSignInButton" width={440} height={240}>
            <ArtboardAppleSignIn />
          </DCArtboard>
          <DCArtboard id="gym-pause" label="GymMode · pauseCircle" width={440} height={260}>
            <ArtboardGymPause />
          </DCArtboard>
          <DCArtboard id="gym-nav" label="GymMode · nav arrow" width={440} height={260}>
            <ArtboardGymNav />
          </DCArtboard>
          <DCArtboard id="rest-pill" label="RestTimerPill parts" width={440} height={360}>
            <ArtboardRestPill />
          </DCArtboard>
        </DCSection>

        <DCSection id="spec" title="Specialty & Press Feedback" subtitle="Pattern-specific affordances + canonical interaction style.">
          <DCArtboard id="dashed" label="FGDashedAddRow" width={440} height={300}>
            <ArtboardDashed />
          </DCArtboard>
          <DCArtboard id="autoprog" label="AutoProgressionButton" width={440} height={280}>
            <ArtboardAutoProg />
          </DCArtboard>
          <DCArtboard id="scale" label="ScaleButtonStyle" width={440} height={320}>
            <ArtboardScaleStyle />
          </DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Demo states">
          <TweakToggle label="Pressed"
            value={tweaks.showPressed}
            onChange={v => setTweak("showPressed", v)} />
          <TweakToggle label="Disabled"
            value={tweaks.showDisabled}
            onChange={v => setTweak("showDisabled", v)} />
        </TweakSection>
        <TweakSection label="Theme">
          <TweakRadio label="Scheme"
            value={tweaks.theme}
            options={["dark", "light"]}
            onChange={v => setTweak("theme", v)} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
