/* global React */
// Mirrors of FitGuideAI button components, ported from
// Packages/DesignSystem/Sources/DesignSystem/Components/*.swift.
// Each function name and prop set tracks the Swift signature.

const { useState } = React;

// ====== Inline SF-Symbol-equivalent glyphs (stroke icons) ======
const Icon = ({ name, size = 17, weight = "semibold" }) => {
  const sw = weight === "bold" ? 2.4 : weight === "semibold" ? 2 : 1.6;
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "xmark":
      return (<svg {...common}><path d="M6 6 L18 18 M18 6 L6 18" /></svg>);
    case "ellipsis":
      return (<svg {...common}><circle cx="5" cy="12" r="1.8" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.8" fill="currentColor" stroke="none"/></svg>);
    case "chevron.left":
      return (<svg {...common}><path d="M14.5 5.5 L8 12 L14.5 18.5" /></svg>);
    case "chevron.right":
      return (<svg {...common}><path d="M9.5 5.5 L16 12 L9.5 18.5" /></svg>);
    case "waveform.and.person.filled":
      return (<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><circle cx="18" cy="6.5" r="2.6"/><path d="M14.2 14.2 C14.2 11.9 15.9 10.6 18 10.6 C20.1 10.6 21.8 11.9 21.8 14.2 V15 H14.2 Z"/><rect x="2"  y="10" width="1.6" height="4" rx="0.8"/><rect x="5"  y="8"  width="1.6" height="8" rx="0.8"/><rect x="8"  y="5"  width="1.6" height="14" rx="0.8"/><rect x="11" y="8"  width="1.6" height="8" rx="0.8"/></svg>);
    case "xmark.circle.fill":
      return (<svg width={size} height={size} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor"/><path d="M8 8 L16 16 M16 8 L8 16" stroke="var(--background)" strokeWidth="2.4" strokeLinecap="round"/></svg>);
    case "arrow.right":
      return (<svg {...common}><path d="M4 12 H20"/><path d="M13.5 6 L20 12 L13.5 18" /></svg>);
    case "plus.circle":
      return (<svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7.5 V16.5 M7.5 12 H16.5"/></svg>);
    case "plus":
      return (<svg {...common}><path d="M12 4.5 V19.5 M4.5 12 H19.5"/></svg>);
    case "play.fill":
      return (<svg {...common}><path d="M7 5 L19 12 L7 19 Z" fill="currentColor"/></svg>);
    case "pause.fill":
      return (<svg {...common}><rect x="7" y="5" width="3.5" height="14" rx="0.6" fill="currentColor" stroke="none"/><rect x="13.5" y="5" width="3.5" height="14" rx="0.6" fill="currentColor" stroke="none"/></svg>);
    case "square.and.arrow.up":
      return (<svg {...common}><path d="M12 3 V14"/><path d="M8 7 L12 3 L16 7"/><path d="M6 11 V20 H18 V11"/></svg>);
    case "trash":
      return (<svg {...common}><path d="M4 7 H20"/><path d="M9.5 7 V4.5 H14.5 V7"/><path d="M6 7 L7 20 H17 L18 7"/><path d="M10 11 V17 M14 11 V17" strokeWidth="1.6"/></svg>);
    case "apple.logo":
      return (<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M16.4 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9-.7 0-1.9-.8-3.1-.8-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.5.8 1.1 1.7 2.4 3 2.4 1.2 0 1.7-.8 3.1-.8 1.5 0 1.9.8 3.1.8 1.3 0 2.1-1.2 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.7-1-2.7-4.1zM14 4.6c.6-.8 1.1-1.8 1-2.8-.9.1-2 .6-2.6 1.4-.6.7-1.1 1.7-1 2.7 1 .1 2-.5 2.6-1.3z"/></svg>);
    case "g.circle.fill":
      return (<svg width={size} height={size} viewBox="0 0 24 24"><path d="M12 11 V13.3 H15.3 C15 14.5 14 15.4 12 15.4 A3.4 3.4 0 1 1 14.4 9.6 L16 8 A5.6 5.6 0 1 0 17.6 12 H12 Z" fill="currentColor"/></svg>);
    case "checkmark":
      return (<svg {...common}><path d="M5 12.5 L10 17.5 L19 6.5"/></svg>);
    case "arrow.uturn.backward":
      return (<svg {...common}><path d="M4 10 H14 A5 5 0 0 1 14 20 H10"/><path d="M8 6 L4 10 L8 14"/></svg>);
    case "sparkles":
      return (<svg {...common}><path d="M12 4 L13.5 9 L18 10.5 L13.5 12 L12 17 L10.5 12 L6 10.5 L10.5 9 Z" fill="currentColor"/></svg>);
    default:
      return (<svg {...common}><circle cx="12" cy="12" r="3"/></svg>);
  }
};

// ====== FGPrimaryButton — capsule, 54pt, .accent/.info/.destructive ======
function FGPrimaryButton({ title, style = "accent", isLoading = false, leadingSystemImage, disabled = false }) {
  return (
    <button
      className={`fg-btn fg-primary fg-primary--${style} ${disabled ? "is-disabled" : ""}`}
      disabled={disabled || isLoading}
    >
      {isLoading ? <span className="fg-spinner" /> :
        leadingSystemImage ? <Icon name={leadingSystemImage} size={17} weight="semibold" /> : null}
      <span>{title}</span>
    </button>
  );
}

// ====== FGSecondaryButton — capsule outline, .neutral/.accent ======
function FGSecondaryButton({ title, leadingSystemImage, tint = "neutral", disabled = false }) {
  return (
    <button className={`fg-btn fg-secondary fg-secondary--${tint} ${disabled ? "is-disabled" : ""}`} disabled={disabled}>
      {leadingSystemImage && <Icon name={leadingSystemImage} size={17} weight="semibold" />}
      <span>{title}</span>
    </button>
  );
}

// ====== FGAuthPrimaryButton — 56pt RR14, UPPERCASE 14pt bold ======
function FGAuthPrimaryButton({ title, trailingSystemImage, isLoading = false, disabled = false }) {
  return (
    <button className={`fg-btn fg-auth ${disabled ? "is-disabled" : ""}`} disabled={disabled || isLoading}>
      {isLoading && <span className="fg-spinner" />}
      <span>{title}</span>
      {trailingSystemImage && !isLoading && (
        <span className="glyph-arrow"><Icon name={trailingSystemImage} size={13} weight="bold" /></span>
      )}
    </button>
  );
}

// ====== FGGymActionButton — 80pt RR14, 20pt bold ======
function FGGymActionButton({ title, leadingSystemImage, compact = false, disabled = false }) {
  return (
    <button className={`fg-btn fg-gym ${compact ? "fg-gym--compact" : ""} ${disabled ? "is-disabled" : ""}`} disabled={disabled}>
      {leadingSystemImage && <Icon name={leadingSystemImage} size={20} weight="bold" />}
      <span>{title}</span>
    </button>
  );
}

// ====== FGSocialButton — 50pt RR12, neutral surface ======
function FGSocialButton({ title, systemImage }) {
  return (
    <button className="fg-btn fg-social">
      <Icon name={systemImage} size={17} weight="medium" />
      <span>{title}</span>
    </button>
  );
}

function FGSocialButtonRow({ buttons }) {
  return (
    <div style={{ display: "flex", gap: "var(--sp-sm)", width: "100%" }}>
      {buttons.map((b, i) => <FGSocialButton key={i} {...b} />)}
    </div>
  );
}

// ====== FGTertiaryButton — text only, 44pt min ======
function FGTertiaryButton({ title, emphasizes = true, disabled = false }) {
  return (
    <button className={`fg-btn fg-tertiary ${emphasizes ? "fg-tertiary--emphasized" : "fg-tertiary--quiet"} ${disabled ? "is-disabled" : ""}`} disabled={disabled}>
      <span>{title}</span>
    </button>
  );
}

// ====== FGTextButton — link style, 15pt ======
function FGTextButton({ title, color = "accent", weight = "regular" }) {
  return (
    <button className={`fg-btn fg-text ${weight === "semibold" ? "fg-text--semibold" : ""} ${color === "primary" ? "fg-text--neutral" : ""}`}>
      <span>{title}</span>
    </button>
  );
}

// ====== FGCircleButton — 32pt circle, V1 Program Editor ======
function FGCircleButton({ systemImage }) {
  return (
    <button className="fg-btn" style={{ width: 44, height: 44 }}>
      <span className="fg-circle"><Icon name={systemImage} size={13} weight="semibold" /></span>
    </button>
  );
}

// ====== FGCircleIconButton — 36pt circle, FGTopBar ======
function FGCircleIconButton({ systemImage, accent = false }) {
  return (
    <button className="fg-btn" style={{ width: 44, height: 44 }}>
      <span className={`fg-circle-icon ${accent ? "fg-circle-icon--accent" : ""}`}>
        <Icon name={systemImage} size={17} weight="semibold" />
      </span>
    </button>
  );
}

// ====== FGCloseChevronButton — 34pt circle, fullScreenCover dismiss ======
function FGCloseChevronButton() {
  return (
    <button className="fg-btn" style={{ width: 44, height: 44 }}>
      <span className="fg-close-chev"><Icon name="xmark" size={13} weight="semibold" /></span>
    </button>
  );
}

// ====== FGDashedAddRow — accent dashed border, plus.circle ======
function FGDashedAddRow({ label }) {
  return (
    <button className="fg-btn fg-dashed">
      <Icon name="plus.circle" size={16} weight="medium" />
      <span>{label}</span>
    </button>
  );
}

// ====== AutoProgressionButton — Auto ↑ pill toggle ======
function AutoProgressionButton({ defaultOn = false }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <button
      className="fg-btn fg-autoprog"
      aria-pressed={on}
      onClick={() => setOn(v => !v)}
    >
      <span>Auto&nbsp;↑</span>
    </button>
  );
}

// ====== Static-state autoprog (for showing both states) ======
function AutoProgressionStatic({ on }) {
  return (
    <span className="fg-btn fg-autoprog" aria-pressed={on}>
      <span>Auto&nbsp;↑</span>
    </span>
  );
}

Object.assign(window, {
  Icon,
  FGPrimaryButton, FGSecondaryButton, FGTertiaryButton,
  FGAuthPrimaryButton, FGGymActionButton,
  FGSocialButton, FGSocialButtonRow,
  FGTextButton,
  FGCircleButton, FGCircleIconButton, FGCloseChevronButton,
  FGDashedAddRow,
  AutoProgressionButton, AutoProgressionStatic,
});
