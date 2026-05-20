import FadeIn from '../components/FadeIn'
import './SlideEntry.css'

const skus = [
  { name: 'Data 360 Profiles', code: '200004909', role: 'Unified profiles, batch CIs, segmentation, activation in profile fee' },
  { name: 'Flex Credits', code: '200005869', role: 'Agentforce adjudication + streaming. Scales into AELA territory.' },
  { name: 'Marketing Data Bundle', code: '200014232', role: '100% Bucket 1 for L1 Marketing AEs. Comp-friendly.' },
  { name: 'MC Upgrade (MCG/MCA)', code: 'Anchor', role: 'Required for bundle. Carries messaging credits downstream.' },
]

export default function SlideEntryA() {
  return (
    <div className="entry-slide">
      <FadeIn delay={0.1}>
        <div className="accent-line" />
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="eyebrow">Entry Point A</div>
      </FadeIn>
      <FadeIn delay={0.25}>
        <h2 className="entry-heading">Greenfield &mdash; MC or Core Only</h2>
      </FadeIn>
      <FadeIn delay={0.35}>
        <p className="entry-sub">The largest initial sale. DA justifies the entire Data Cloud + Agentforce investment.</p>
      </FadeIn>
      <FadeIn delay={0.45}>
        <div className="sku-grid">
          {skus.map((s, i) => (
            <div key={i} className="sku-card">
              <div className="sku-name">{s.name}</div>
              <div className="sku-code">{s.code}</div>
              <div className="sku-role">{s.role}</div>
            </div>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={0.6}>
        <div className="entry-bottom">
          <span className="entry-attach">Initial attach: <strong>$200k&ndash;$500k</strong></span>
          <span className="entry-arrow">&rarr;</span>
          <span className="entry-target">AELA conversion within 6&ndash;12 months</span>
        </div>
      </FadeIn>
    </div>
  )
}
