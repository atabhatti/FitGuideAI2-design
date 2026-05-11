/* global React, Card, Icon, Pill */
const ProfileTab = () => {
  const rows = [
    { icon: 'user',     label: 'Personal details', value: 'Ata · 34 · 6\'0"' },
    { icon: 'dumbbell', label: 'My equipment',     value: '6 items' },
    { icon: 'activity', label: 'Recovery',         value: 'Sleep + soreness' },
    { icon: 'bell',     label: 'Notifications',    value: 'On' },
    { icon: 'moon',     label: 'Appearance',       value: 'System' },
    { icon: 'settings', label: 'Advanced',         value: '' },
  ];
  return (
    <React.Fragment>
      <div className="fg-section-header" style={{marginTop:8}}>
        <div className="fg-display-hero">Profile</div>
      </div>

      <Card style={{display:'flex',gap:14,alignItems:'center'}}>
        <div style={{width:64,height:64,borderRadius:'50%',background:'linear-gradient(135deg,#E8FF47,#4ADE80)',display:'grid',placeItems:'center',color:'#0A0A0A',fontWeight:700,fontSize:22}}>AB</div>
        <div style={{flex:1}}>
          <div className="fg-heading-md">Ata Bhatti</div>
          <div style={{fontSize:13,color:'var(--text-secondary)',marginTop:2}}>Intermediate · 18 mo lifting</div>
        </div>
        <Pill kind="pr" icon="trophy">12</Pill>
      </Card>

      <div className="fg-section-header">
        <div className="fg-label-sm">Settings</div>
      </div>

      <Card style={{padding:0}}>
        {rows.map((r, i) => (
          <div key={r.label} className="fg-row" style={{padding:'14px 16px', borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--hairline)'}}>
            <div style={{display:'flex',gap:12,alignItems:'center'}}>
              <div style={{width:32,height:32,borderRadius:8,background:'rgba(255,255,255,0.05)',display:'grid',placeItems:'center',color:'#E8FF47'}}>
                <Icon name={r.icon} size={16}/>
              </div>
              <div style={{fontWeight:500,fontSize:15}}>{r.label}</div>
            </div>
            <div style={{display:'flex',gap:6,alignItems:'center',color:'var(--text-secondary)',fontSize:13}}>
              {r.value}<Icon name="chevron-right" size={16} color="var(--text-tertiary)"/>
            </div>
          </div>
        ))}
      </Card>

      <button className="fg-cta secondary full" style={{marginTop:18,color:'#FF3B30',borderColor:'rgba(255,59,48,0.30)'}}>Sign out</button>
    </React.Fragment>
  );
};

window.ProfileTab = ProfileTab;
