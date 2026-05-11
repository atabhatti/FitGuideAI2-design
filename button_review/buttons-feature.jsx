/* global React, Icon */
// Feature-local buttons — NOT in DS, but ship in actual screens.

function ProfileRowButton({ label, value, icon, subtitle, showsChevron }) {
  return (
    <button className="fg-btn frb">
      {icon && <span className="frb__tile"><Icon name={icon} size={15} weight="medium" /></span>}
      <span className="frb__text">
        <span className="frb__label">{label}</span>
        {subtitle && <span className="frb__sub">{subtitle}</span>}
      </span>
      <span style={{ flex: 1 }} />
      {value && <span className="frb__val">{value}</span>}
      {showsChevron && <Icon name="chevron.right" size={12} weight="semibold" />}
    </button>
  );
}

function DeleteAccountConfirmButton({ title = "Delete account", isConfirmed = false, isLoading = false }) {
  return (
    <button className={`fg-btn dac ${isConfirmed ? "dac--on" : "dac--off"}`} disabled={isLoading}>
      {isLoading ? <span className="fg-spinner" /> : <span>{title}</span>}
    </button>
  );
}

function GuideMeButton() {
  return (
    <button className="fg-btn gmb">
      <Icon name="waveform.and.person.filled" size={13} weight="semibold" />
      <span>Guide me</span>
    </button>
  );
}

function BugReportSubmitButton({ title = "Send", isEnabled = true, isLoading = false }) {
  return (
    <button className={`fg-btn brs ${isEnabled ? "" : "brs--off"}`} disabled={!isEnabled || isLoading}>
      {isLoading && <span className="fg-spinner" />}
      <span>{title}</span>
    </button>
  );
}

function BugReportThumbRemoveButton() {
  return (
    <button className="fg-btn brt"><Icon name="xmark.circle.fill" size={18} /></button>
  );
}

function ColorSwatchButton({ color, assigned = false }) {
  return (
    <button className="fg-btn csb" aria-pressed={assigned}>
      <span className="csb__dot" style={{ background: color }} />
      {assigned && <span className="csb__ring" />}
    </button>
  );
}

function CreateProgramButton() {
  return (
    <button className="fg-btn cpb"><Icon name="plus" size={22} weight="bold" /></button>
  );
}

function DaysPerWeekButton({ value, selected = false }) {
  return (
    <button className={`fg-btn dpw ${selected ? "dpw--on" : ""}`}>{value}</button>
  );
}

function EditorChip({ label, active = false }) {
  return (
    <button className={`fg-btn ech ${active ? "ech--on" : ""}`}>{label}</button>
  );
}

function AppleSignInButton() {
  return (
    <button className="fg-btn asb">
      <Icon name="apple.logo" size={17} />
      <span>Sign in with Apple</span>
    </button>
  );
}

function GymPauseCircle({ paused = false }) {
  return (
    <button className="fg-btn gpc">
      <Icon name={paused ? "play.fill" : "pause.fill"} size={22} weight="semibold" />
    </button>
  );
}

function GymNavArrow({ direction = "left", disabled = false }) {
  return (
    <button className={`fg-btn gna ${disabled ? "gna--off" : ""}`}>
      <Icon name={direction === "left" ? "chevron.left" : "chevron.right"} size={22} />
    </button>
  );
}

function RestAdjustCapsule({ label }) {
  return (<button className="fg-btn rac">{label}</button>);
}

function RestPlayPauseCircle({ paused = false }) {
  return (
    <button className="fg-btn rppc">
      <Icon name={paused ? "play.fill" : "pause.fill"} size={14} weight="bold" />
    </button>
  );
}

Object.assign(window, {
  ProfileRowButton, DeleteAccountConfirmButton, GuideMeButton,
  BugReportSubmitButton, BugReportThumbRemoveButton, ColorSwatchButton,
  CreateProgramButton, DaysPerWeekButton, EditorChip, AppleSignInButton,
  GymPauseCircle, GymNavArrow, RestAdjustCapsule, RestPlayPauseCircle,
});
