/* global React, Icon, PrimaryCTA, Pill */
const { useState: useStateAW } = React;

const SetRow = ({ idx, weight, reps, rpe, done, active, onTap }) => (
  <div onClick={onTap} style={{
    display:'grid', gridTemplateColumns:'28px 1fr 1fr 1fr 28px', gap:8,
    alignItems:'center', padding:'12px 16px',
    fontFamily:'ui-monospace,monospace', fontSize:15,
    color: done ? '#E8FF47' : (active ? '#F5F5F5' : 'var(--text-secondary)'),
    background: active ? 'rgba(232,255,71,0.08)' : 'transparent',
    borderTop:'1px solid rgba(255,255,255,0.06)',
    cursor:'pointer'
  }}>
    <span>{idx}</span>
    <span>{weight || '—'}</span>
    <span>{reps || '—'}</span>
    <span>{rpe || '—'}</span>
    <span style={{color: done ? '#E8FF47' : (active ? '#E8FF47' : 'var(--text-tertiary)'),fontSize:18}}>
      {done ? '✓' : (active ? '●' : '+')}
    </span>
  </div>
);

const ActiveWorkout = ({ onExit, onFinish }) => {
  const [sets, setSets] = useStateAW([
    { weight: 185, reps: 8, rpe: 7, done: true },
    { weight: 205, reps: 6, rpe: 8, done: true },
    { weight: 225, reps: 0, rpe: 0, done: false, active: true },
    { weight: 0,   reps: 0, rpe: 0, done: false },
  ]);
  const [showFinish, setShowFinish] = useStateAW(false);

  const complete = (i) => {
    setSets(prev => {
      const copy = prev.map((s,idx) => ({...s, active: false}));
      copy[i] = { ...copy[i], done: true };
      if (copy[i+1]) copy[i+1].active = true;
      return copy;
    });
  };

  return (
    <div className="fg-screen" style={{height:852}}>
      {/* status bar */}
      <div className="fg-statusbar"><span>9:41</span><span style={{fontSize:11}}>●●●●</span></div>

      {/* AW top bar — 56pt */}
      <div style={{height:56,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 16px',borderBottom:'1px solid var(--stroke)'}}>
        <button onClick={onExit} style={{width:40,height:40,borderRadius:'50%',background:'rgba(255,255,255,0.06)',border:'1px solid var(--stroke)',display:'grid',placeItems:'center',color:'#F5F5F5'}}>
          <Icon name="x" size={18}/>
        </button>
        <div style={{textAlign:'center'}}>
          <div style={{fontSize:11,color:'var(--text-secondary)',textTransform:'uppercase',letterSpacing:'.04em',fontWeight:600}}>Push · Day 2</div>
          <div style={{fontSize:20,fontWeight:700,fontVariantNumeric:'tabular-nums',color:'#E8FF47'}}>12:34</div>
        </div>
        <div style={{display:'flex',gap:8}}>
          <button style={{width:40,height:40,borderRadius:'50%',background:'rgba(255,255,255,0.06)',border:'1px solid var(--stroke)',display:'grid',placeItems:'center',color:'#F5F5F5'}}>
            <Icon name="info" size={18}/>
          </button>
          <button style={{width:40,height:40,borderRadius:'50%',background:'rgba(255,255,255,0.06)',border:'1px solid var(--stroke)',display:'grid',placeItems:'center',color:'#F5F5F5'}}>
            <Icon name="menu" size={18}/>
          </button>
        </div>
      </div>

      <div className="fg-content">
        <div style={{margin:'16px 0 12px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div className="fg-label-sm">Exercise 1 of 5</div>
          <Pill kind="up">↑ +5 lb</Pill>
        </div>

        <div className="fg-card" style={{padding:0,overflow:'hidden'}}>
          <div style={{padding:'14px 16px'}}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <div className="fg-heading-lg">Bench press</div>
              <button style={{background:'transparent',border:'none',color:'var(--text-secondary)'}}>
                <Icon name="info" size={20}/>
              </button>
            </div>
            <div style={{fontSize:12,color:'var(--text-secondary)',textTransform:'uppercase',letterSpacing:'.04em',fontWeight:600,marginTop:2}}>
              Chest · Triceps · Front delts
            </div>
          </div>
          {/* set table header */}
          <div style={{display:'grid',gridTemplateColumns:'28px 1fr 1fr 1fr 28px',gap:8,padding:'0 16px 8px',fontSize:10,color:'var(--text-secondary)',textTransform:'uppercase',letterSpacing:'.04em',fontWeight:600}}>
            <span>Set</span><span>Weight</span><span>Reps</span><span>RPE</span><span></span>
          </div>
          {sets.map((s,i) => (
            <SetRow key={i} idx={i+1} weight={s.weight||0} reps={s.reps||0} rpe={s.rpe||0} done={s.done} active={s.active} onTap={() => s.active && complete(i)}/>
          ))}
          <div style={{padding:'12px 16px',borderTop:'1px dashed rgba(255,255,255,0.10)',color:'#E8FF47',fontWeight:600,fontSize:14,textAlign:'center',cursor:'pointer'}}>＋ Add set</div>
        </div>

        <div className="fg-section-header">
          <div className="fg-label-sm">Rest timer</div>
        </div>
        <div className="fg-card" style={{textAlign:'center',padding:'18px',borderColor:'rgba(232,255,71,0.30)'}}>
          <div style={{fontFamily:'var(--font-display)',fontSize:42,color:'#E8FF47',letterSpacing:'0.02em',fontVariantNumeric:'tabular-nums'}}>1:30</div>
          <div style={{fontSize:12,color:'var(--text-secondary)',marginTop:4}}>Optimal rest · 2:00 target</div>
        </div>
      </div>

      <div style={{position:'absolute',left:16,right:16,bottom:24,display:'flex',gap:10}}>
        <PrimaryCTA full secondary onClick={() => setShowFinish(true)}>Finish</PrimaryCTA>
        <PrimaryCTA full icon="chevron-right">Next</PrimaryCTA>
      </div>

      {showFinish && (
        <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,0.6)',display:'flex',alignItems:'flex-end'}} onClick={() => setShowFinish(false)}>
          <div onClick={e=>e.stopPropagation()} style={{width:'100%',background:'var(--surface-sheet)',borderTopLeftRadius:24,borderTopRightRadius:24,padding:'20px 20px 40px',borderTop:'1px solid var(--stroke)'}}>
            <div style={{width:36,height:4,background:'rgba(255,255,255,0.20)',borderRadius:9999,margin:'0 auto 16px'}}/>
            <div className="fg-heading-lg">Finish workout?</div>
            <div style={{fontSize:14,color:'var(--text-secondary)',marginTop:6}}>2 of 5 exercises complete. We'll log what you did and you can pick this up tomorrow.</div>
            <div style={{display:'flex',gap:10,marginTop:18}}>
              <PrimaryCTA full secondary onClick={() => setShowFinish(false)}>Keep going</PrimaryCTA>
              <PrimaryCTA full icon="check" onClick={onFinish}>Finish</PrimaryCTA>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

window.ActiveWorkout = ActiveWorkout;
