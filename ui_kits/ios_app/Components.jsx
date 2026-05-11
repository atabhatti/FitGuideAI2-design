/* global React */
const { useState } = React;

const Icon = ({ name, size = 20, color = 'currentColor', stroke = 2 }) => {
  const paths = {
    'chevron-left':  'M15 18l-6-6 6-6',
    'chevron-right': 'M9 18l6-6-6-6',
    'x':             'M18 6L6 18M6 6l12 12',
    'plus':          'M12 5v14M5 12h14',
    'zap':           'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
    'flame':         'M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z',
    'trophy':        'M6 9H4.5a2.5 2.5 0 010-5H6M18 9h1.5a2.5 2.5 0 000-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21-1.16.55-2.03 1.55-2.03 2.79h10c0-1.24-.87-2.24-2.03-2.79-.5-.23-.97-.66-.97-1.21v-2.34M18 2H6v7a6 6 0 0012 0V2z',
    'arrow-up':      'M12 19V5M5 12l7-7 7 7',
    'rotate-ccw':    'M3 12a9 9 0 0015.5 6.36L21 21M3 12a9 9 0 019-9c2.49 0 4.75 1.01 6.36 2.64L21 8M21 3v5h-5',
    'menu':          'M3 6h18M3 12h18M3 18h18',
    'moon':          'M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z',
    'info':          'M12 2a10 10 0 100 20 10 10 0 000-20zM12 16v-4M12 8h.01',
    'camera':        'M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2zM12 17a4 4 0 100-8 4 4 0 000 8z',
    'play':          'M5 3l14 9-14 9V3z',
    'pause':         'M6 4h4v16H6zM14 4h4v16h-4z',
    'check':         'M5 12l5 5L20 7',
    'dumbbell':      'M6 6v12M2 9v6M22 9v6M18 6v12M6 12h12',
    'activity':      'M22 12h-4l-3 9L9 3l-3 9H2',
    'user':          'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z',
    'calendar':      'M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zM16 2v4M8 2v4M3 10h18',
    'settings':      'M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.6 15a1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z',
    'bell':          'M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9M13.73 21a2 2 0 01-3.46 0',
    'chart':         'M3 3v18h18M7 14l4-4 4 4 5-5',
  };
  const d = paths[name] || paths['x'];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0}}>
      <path d={d}/>
    </svg>
  );
};

const StatusBar = () => (
  <div className="fg-statusbar">
    <span>9:41</span>
    <span style={{display:'inline-flex',gap:6,alignItems:'center'}}>
      <span style={{fontSize:11}}>●●●●</span>
      <span style={{fontSize:11}}>⌬</span>
      <span style={{width:24,height:11,border:'1.5px solid currentColor',borderRadius:3,position:'relative'}}>
        <span style={{position:'absolute',inset:1,background:'currentColor',width:'80%',borderRadius:1}}/>
      </span>
    </span>
  </div>
);

const TopBar = ({ title, left, right }) => (
  <div className="fg-topbar">
    <div style={{width:36}}>{left}</div>
    <div className="title">{title}</div>
    <div style={{width:36, display:'flex', justifyContent:'flex-end'}}>{right}</div>
  </div>
);

const TabBar = ({ active, onChange }) => {
  const tabs = [
    { id: 'workout',  label: 'Workout',  icon: 'dumbbell' },
    { id: 'programs', label: 'Programs', icon: 'calendar' },
    { id: 'progress', label: 'Progress', icon: 'chart' },
    { id: 'profile',  label: 'Profile',  icon: 'user' },
  ];
  return (
    <div className="fg-tabbar">
      {tabs.map(t => (
        <button key={t.id} className={'tab' + (active === t.id ? ' on' : '')} onClick={() => onChange(t.id)}>
          <Icon name={t.icon} size={24}/>
          {t.label}
        </button>
      ))}
    </div>
  );
};

const Card = ({ children, style, flat }) => (
  <div className={'fg-card' + (flat ? ' flat' : '')} style={style}>{children}</div>
);

const PrimaryCTA = ({ children, onClick, secondary, full = true, icon }) => (
  <button className={'fg-cta' + (secondary ? ' secondary' : '') + (full ? ' full' : '')} onClick={onClick}>
    {icon && <Icon name={icon} size={18}/>}
    {children}
  </button>
);

const Pill = ({ kind = 'flat', children, icon }) => (
  <span className={'fg-pill ' + kind}>
    {icon && <Icon name={icon} size={12}/>}
    {children}
  </span>
);

Object.assign(window, { Icon, StatusBar, TopBar, TabBar, Card, PrimaryCTA, Pill });
