/* global React, Card, Icon */
const ProgressTab = () => {
  const muscles = [
    { name: 'Chest',     sets: 14, zone: 'optimal',     color: '#E8FF47' },
    { name: 'Back',      sets: 16, zone: 'optimal',     color: '#E8FF47' },
    { name: 'Shoulders', sets: 10, zone: 'growth',      color: '#4ADE80' },
    { name: 'Biceps',    sets:  8, zone: 'maintenance', color: '#5B8DF5' },
    { name: 'Quads',     sets: 18, zone: 'above-opt',   color: '#FF9500' },
    { name: 'Hamstrings',sets:  4, zone: 'atrophying',  color: '#9BB5D6' },
  ];
  return (
    <React.Fragment>
      <div className="fg-section-header" style={{marginTop:8}}>
        <div className="fg-display-hero">Progress</div>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginBottom:16}}>
        <Card>
          <div className="fg-label-sm">12-week volume</div>
          <div style={{fontSize:24,fontWeight:700,marginTop:6,fontVariantNumeric:'tabular-nums'}}>+18%</div>
          <div style={{fontSize:12,color:'#4ADE80',marginTop:2}}>↑ trending</div>
        </Card>
        <Card>
          <div className="fg-label-sm">Sessions</div>
          <div style={{fontSize:24,fontWeight:700,marginTop:6,fontVariantNumeric:'tabular-nums'}}>34</div>
          <div style={{fontSize:12,color:'var(--text-secondary)',marginTop:2}}>this quarter</div>
        </Card>
        <Card>
          <div className="fg-label-sm">PRs</div>
          <div style={{fontSize:24,fontWeight:700,marginTop:6,color:'#E8C84A'}}>🏆 4</div>
          <div style={{fontSize:12,color:'var(--text-secondary)',marginTop:2}}>past 30 days</div>
        </Card>
        <Card>
          <div className="fg-label-sm">Streak</div>
          <div style={{fontSize:24,fontWeight:700,marginTop:6}}>12 <span style={{fontSize:13,color:'var(--text-secondary)'}}>days</span></div>
          <div style={{fontSize:12,color:'#E8C84A',marginTop:2}}>🏆 new high</div>
        </Card>
      </div>

      <div className="fg-section-header">
        <div className="fg-label-sm">Muscle volume · this week</div>
      </div>

      <Card style={{padding:'8px 16px'}}>
        {muscles.map((m,i) => (
          <div key={m.name} style={{padding:'12px 0', borderBottom: i === muscles.length - 1 ? 'none' : '1px solid var(--hairline)'}}>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:6}}>
              <div style={{fontWeight:600,fontSize:14}}>{m.name}</div>
              <div style={{fontSize:13,color:'var(--text-secondary)',fontVariantNumeric:'tabular-nums'}}>
                <span style={{color:m.color,fontWeight:600}}>{m.sets} sets</span> · {m.zone}
              </div>
            </div>
            <div style={{height:8,background:'rgba(255,255,255,0.06)',borderRadius:9999,overflow:'hidden',display:'flex'}}>
              <div style={{width: Math.min(100, m.sets*5) + '%', background: m.color}}/>
            </div>
          </div>
        ))}
      </Card>

      <div className="fg-section-header">
        <div className="fg-label-sm">Body map</div>
        <button style={{background:'transparent',border:'none',color:'var(--text-secondary)',fontSize:13}}>Front / Back</button>
      </div>
      <Card>
        <div style={{display:'flex',justifyContent:'space-around',padding:'4px 0'}}>
          {/* simplified silhouettes */}
          <svg width="100" height="220" viewBox="0 0 100 220">
            <rect x="38" y="6" width="24" height="24" rx="12" fill="#9BB5D6" opacity=".4"/>
            <path d="M30 36 h40 v22 q0 8 -10 10 l-10 4 v50 h-10 l-4 -38 q-12 -2 -12 -16 z M50 56 q12 4 14 18 v34 h10 l4 -38 q12 -2 12 -16 v-22 h-40z" fill="#E8FF47" opacity=".55"/>
            <rect x="38" y="118" width="10" height="50" rx="4" fill="#5B8DF5" opacity=".5"/>
            <rect x="52" y="118" width="10" height="50" rx="4" fill="#FF9500" opacity=".6"/>
            <rect x="38" y="172" width="10" height="40" rx="4" fill="#9BB5D6" opacity=".4"/>
            <rect x="52" y="172" width="10" height="40" rx="4" fill="#9BB5D6" opacity=".4"/>
          </svg>
          <svg width="100" height="220" viewBox="0 0 100 220">
            <rect x="38" y="6" width="24" height="24" rx="12" fill="#9BB5D6" opacity=".4"/>
            <path d="M30 36 h40 v22 q0 8 -10 10 l-10 4 v50 h-10 l-4 -38 q-12 -2 -12 -16 z M50 56 q12 4 14 18 v34 h10 l4 -38 q12 -2 12 -16 v-22 h-40z" fill="#E8FF47" opacity=".7"/>
            <rect x="38" y="118" width="10" height="50" rx="4" fill="#4ADE80" opacity=".55"/>
            <rect x="52" y="118" width="10" height="50" rx="4" fill="#4ADE80" opacity=".55"/>
            <rect x="38" y="172" width="10" height="40" rx="4" fill="#9BB5D6" opacity=".4"/>
            <rect x="52" y="172" width="10" height="40" rx="4" fill="#9BB5D6" opacity=".4"/>
          </svg>
        </div>
      </Card>
    </React.Fragment>
  );
};

window.ProgressTab = ProgressTab;
