import FadeIn from '../components/FadeIn'
import './SlideRamp.css'

const tier1 = [
  { phase: 'Month 1', audience: '50k', dc: '~15k', msg: '50k sends', flex: '~5k', note: 'Within Foundations freebie' },
  { phase: 'Month 2', audience: '250k', dc: '~80k', msg: '250k sends', flex: '~25k', note: 'Lift proven' },
  { phase: 'Month 3-4', audience: '1M', dc: '~350k', msg: '1M sends', flex: '~100k', note: 'Burning allocation' },
  { phase: 'Month 5-6', audience: '3-5M', dc: '~1.5M', msg: '3-5M sends', flex: '~400k', note: 'Per-credit painful' },
  { phase: 'Month 7+', audience: '5M daily + RT', dc: null, msg: null, flex: null, note: 'AELA converts: $3-5M ACV' },
]

const tier2 = [
  { phase: 'Month 1', audience: '20k', dc: '~6k', msg: '20k sends', flex: '~2k', note: 'Within freebie' },
  { phase: 'Month 2', audience: '100k', dc: '~35k', msg: '100k sends', flex: '~12k', note: 'First lift visible' },
  { phase: 'Month 3-4', audience: '400k', dc: '~140k', msg: '400k sends', flex: '~50k', note: 'Approaching cap' },
  { phase: 'Month 5-6', audience: '1M', dc: '~450k', msg: '1M sends', flex: '~120k', note: 'Top-up needed' },
  { phase: 'Month 7+', audience: '1M daily + streaming', dc: null, msg: null, flex: null, note: 'Velocity AELA: $1.5-3M' },
]

function RampTable({ data, label, color }) {
  return (
    <div className="ramp-section">
      <div className="ramp-label" style={{ color }}>{label}</div>
      <div className="ramp-rows">
        {data.map((r, i) => (
          <div key={i} className={`ramp-row ${r.dc === null ? 'ramp-row-final' : ''}`}>
            <div className="ramp-phase">{r.phase}</div>
            <div className="ramp-audience">{r.audience}</div>
            {r.dc !== null ? (
              <>
                <div className="ramp-credit">{r.dc}</div>
                <div className="ramp-credit">{r.msg}</div>
                <div className="ramp-credit">{r.flex}</div>
              </>
            ) : (
              <div className="ramp-final" style={{ color }}>{r.note}</div>
            )}
            {r.dc !== null && <div className="ramp-note">{r.note}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function SlideRamp() {
  return (
    <div className="ramp-slide">
      <FadeIn delay={0.1}>
        <div className="accent-line" style={{ margin: '0 auto 12px' }} />
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="eyebrow" style={{ textAlign: 'center' }}>Consumption Ramp</div>
      </FadeIn>
      <FadeIn delay={0.25}>
        <h2 className="ramp-heading">Two profiles. Same pattern. Same destination.</h2>
      </FadeIn>
      <FadeIn delay={0.4}>
        <RampTable data={tier1} label="Tier 1 &mdash; 5M Base (Optus, Woolworths)" color="var(--blue-m)" />
      </FadeIn>
      <FadeIn delay={0.55}>
        <RampTable data={tier2} label="Tier 2 &mdash; 1M Base (MECCA, Bunnings)" color="var(--teal)" />
      </FadeIn>
    </div>
  )
}
