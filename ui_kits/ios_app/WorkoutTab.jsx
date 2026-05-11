/* global React, Card, PrimaryCTA, Pill, Icon */
const WorkoutTab = ({ onStartWorkout }) => {
  const exercises = [
    { name: 'Bench press',    muscle: 'Chest · Triceps',   prog: '↑ +5 lb',     kind: 'up'   },
    { name: 'Incline DB row', muscle: 'Back · Biceps',     prog: '→ hold',      kind: 'flat' },
    { name: 'Overhead press', muscle: 'Shoulders · Tris',  prog: '↑ +2.5 lb',   kind: 'up'   },
    { name: 'Lat pulldown',   muscle: 'Back · Biceps',     prog: 'aim 12 reps', kind: 'flat' },
    { name: 'Hammer curl',    muscle: 'Biceps · Forearm',  prog: '↑ +5 lb',     kind: 'up'   },
  ];
  return (
    <React.Fragment>
      <div className="fg-section-header" style={{marginTop:8}}>
        <div>
          <div className="fg-label-sm" style={{marginBottom:4}}>Tuesday · Day 2 of Week 3</div>
          <div className="fg-display-hero">Push.</div>
        </div>
        <button className="fg-cta" style={{height:44,padding:'0 18px',fontSize:15}}>
          <Icon name="calendar" size={16}/>Week
        </button>
      </div>

      <Card style={{display:'flex',gap:14,alignItems:'center',marginBottom:18}}>
        <div style={{width:56,height:56,borderRadius:14,background:'rgba(232,255,71,0.16)',display:'grid',placeItems:'center',color:'#E8FF47'}}>
          <Icon name="zap" size={26}/>
        </div>
        <div style={{flex:1}}>
          <div className="fg-heading-md">~52 min · 5 exercises</div>
          <div style={{fontSize:13,color:'var(--text-secondary)',marginTop:2}}>Intensification block · week 3</div>
        </div>
        <Pill kind="up">Top set</Pill>
      </Card>

      <PrimaryCTA onClick={onStartWorkout} icon="play">Start workout</PrimaryCTA>

      <div className="fg-section-header">
        <div className="fg-label-sm">Exercises</div>
        <div className="fg-label-sm" style={{color:'var(--text-tertiary)'}}>{exercises.length}</div>
      </div>

      <Card style={{padding:0}}>
        {exercises.map((ex, i) => (
          <div key={ex.name} className="fg-row" style={{padding:'14px 16px', borderBottom: i === exercises.length - 1 ? 'none' : '1px solid var(--hairline)'}}>
            <div style={{display:'flex',gap:12,alignItems:'center'}}>
              <div style={{width:36,height:36,borderRadius:10,background:'rgba(255,255,255,0.05)',border:'1px solid var(--stroke)',display:'grid',placeItems:'center',color:'var(--text-secondary)',fontFamily:'ui-monospace,monospace',fontSize:13}}>{i+1}</div>
              <div>
                <div style={{fontWeight:600,fontSize:15}}>{ex.name}</div>
                <div style={{fontSize:12,color:'var(--text-secondary)',marginTop:2}}>{ex.muscle}</div>
              </div>
            </div>
            <Pill kind={ex.kind}>{ex.prog}</Pill>
          </div>
        ))}
      </Card>

      <div className="fg-section-header">
        <div className="fg-label-sm">Coaching note</div>
      </div>
      <Card style={{borderColor:'rgba(232,255,71,0.30)',background:'rgba(232,255,71,0.06)'}}>
        <div style={{display:'flex',gap:12,alignItems:'flex-start'}}>
          <div style={{color:'#E8FF47',marginTop:1}}><Icon name="zap" size={18}/></div>
          <div style={{fontSize:14,lineHeight:1.5,color:'var(--text-primary)'}}>
            You hit a 3-rep PR on bench last week — we're holding the same top weight today and adding a back-off set.
            Save the gas tank for set 3.
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
};

window.WorkoutTab = WorkoutTab;
