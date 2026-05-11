/* global React, Card, Pill, Icon */
const ProgramsTab = () => {
  const alt = [
    { name: 'Upper / Lower',   meta: '4 days · 8 weeks',  phase: 'accumulation' },
    { name: 'Push Pull Legs',  meta: '6 days · 6 weeks',  phase: 'intensification' },
    { name: 'Comeback (light)', meta: '3 days · 4 weeks', phase: 'deload' },
  ];
  const phaseColor = { accumulation:'#9BB5D6', intensification:'#E8FF47', peak:'#E8C84A', deload:'#4ADE80' };
  return (
    <React.Fragment>
      <div className="fg-section-header" style={{marginTop:8}}>
        <div className="fg-display-hero">Programs</div>
      </div>

      <Card style={{borderColor:'rgba(232,255,71,0.40)',borderWidth:'1.5px',background:'linear-gradient(180deg,rgba(232,255,71,0.06),transparent)'}}>
        <div className="fg-label-sm" style={{color:'#E8FF47'}}>Current program</div>
        <div className="fg-heading-lg" style={{marginTop:6}}>Upper / Lower — Hypertrophy</div>
        <div style={{display:'flex',gap:14,marginTop:14,fontSize:13,color:'var(--text-secondary)'}}>
          <span>Week 3 of 8</span><span>·</span><span>4 days/week</span><span>·</span><span style={{color:'#E8FF47'}}>● intensification</span>
        </div>
        <div style={{height:6,background:'rgba(255,255,255,0.08)',borderRadius:9999,marginTop:14,overflow:'hidden'}}>
          <div style={{width:'37%',height:'100%',background:'#E8FF47'}}/>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:6,marginTop:14}}>
          {['M','T','W','T','F','S','S'].map((d,i) => (
            <div key={i} style={{textAlign:'center'}}>
              <div style={{fontSize:10,color:'var(--text-tertiary)',marginBottom:4}}>{d}</div>
              <div style={{height:32,borderRadius:8,background: i===1 ? '#E8FF47' : (i<1 ? 'rgba(232,255,71,0.20)' : 'rgba(255,255,255,0.04)'), color: i===1 ? '#0A0A0A' : 'var(--text-secondary)', display:'grid',placeItems:'center',fontSize:11,fontWeight:600}}>
                {i<1 ? '✓' : (i===1 ? '●' : '')}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="fg-section-header">
        <div className="fg-label-sm">Switch program</div>
        <button style={{background:'transparent',border:'none',color:'#E8FF47',fontSize:13,fontWeight:600}}>＋ Generate</button>
      </div>

      <div className="fg-stack md">
        {alt.map(p => (
          <Card key={p.name} style={{display:'flex',gap:12,alignItems:'center'}}>
            <div style={{width:8,height:48,borderRadius:4,background:phaseColor[p.phase]}}/>
            <div style={{flex:1}}>
              <div className="fg-heading-md">{p.name}</div>
              <div style={{fontSize:12,color:'var(--text-secondary)',marginTop:2}}>{p.meta}</div>
            </div>
            <Pill kind="cat">{p.phase}</Pill>
          </Card>
        ))}
      </div>
    </React.Fragment>
  );
};

window.ProgramsTab = ProgramsTab;
