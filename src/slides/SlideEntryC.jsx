import FadeIn from '../components/FadeIn'
import './SlideEntry.css'

const points = [
  { label: 'Platform', value: 'Unlimited DC + Flex Credits (Fair Use)' },
  { label: 'Einstein Studio', value: 'Included via Data Cloud' },
  { label: 'Messaging', value: 'Full portfolio (Strategic) or existing MC (Velocity)' },
  { label: 'DA Package', value: 'AppExchange. The workload that makes unlimited worthwhile.' },
]

export default function SlideEntryC() {
  return (
    <div className="entry-slide">
      <FadeIn delay={0.1}>
        <div className="accent-line accent-line-gold" />
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="eyebrow eyebrow-gold">Entry Point C</div>
      </FadeIn>
      <FadeIn delay={0.25}>
        <h2 className="entry-heading">AELA Customer &mdash; Platform Already Bought</h2>
      </FadeIn>
      <FadeIn delay={0.35}>
        <p className="entry-sub">$3M&ndash;$5M ACV already committed. Zero platform friction. DA drives utilisation and renewal stickiness.</p>
      </FadeIn>
      <FadeIn delay={0.45}>
        <div className="checklist">
          {points.map((p, i) => (
            <div key={i} className="check-item">
              <div className="check-dot" />
              <div>
                <div className="check-label">{p.label}</div>
                <div className="check-value">{p.value}</div>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={0.6}>
        <div className="aela-grid">
          <div className="aela-card">
            <div className="aela-type">Velocity AELA</div>
            <div className="aela-min">$1.5M&ndash;$3M min</div>
            <div className="aela-note">Single org, max 2yr, unlimited Flex + DC</div>
          </div>
          <div className="aela-card">
            <div className="aela-type">Strategic AELA</div>
            <div className="aela-min">$1M&ndash;$5M min</div>
            <div className="aela-note">Full portfolio, multi-org, FDE Pods required</div>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}
