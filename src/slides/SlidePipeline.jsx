import FadeIn from '../components/FadeIn'
import './SlidePipeline.css'

const stats = [
  { value: '$200k-$500k', label: 'Initial platform attach' },
  { value: '$3M-$5M', label: 'AELA conversion (6-12mo)' },
  { value: '19 Accounts', label: '6 Tier 1 + 13 Tier 2 targets' },
]

export default function SlidePipeline() {
  return (
    <div className="pipeline-slide">
      <FadeIn delay={0.1}>
        <div className="accent-line" style={{ margin: '0 auto 12px' }} />
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="eyebrow" style={{ textAlign: 'center' }}>Pipeline Opportunity</div>
      </FadeIn>
      <FadeIn delay={0.25}>
        <h2 className="pipeline-heading">$65M+ in addressable AU pipeline.</h2>
      </FadeIn>

      <FadeIn delay={0.35}>
        <div className="pipeline-stats">
          {stats.map((s, i) => (
            <div key={i} className="pipeline-stat">
              <div className="pipeline-value">{s.value}</div>
              <div className="pipeline-label">{s.label}</div>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.5}>
        <div className="pipeline-callout">
          <p><strong>The positioning:</strong> Don't sell the DA as a product. Sell the outcome it creates &mdash; a consumption flywheel that touches every credit pool on the platform.</p>
          <p className="pipeline-callout-sub">The DA is why they need Data Cloud, why they need Agentforce, and why they'll outgrow per-credit pricing into AELA territory faster than any other workload.</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.65}>
        <div className="pipeline-free">
          <strong>Free entry point:</strong> Salesforce Foundations (200008744) &mdash; 200K Flex Credits + 250K DC Credits + Agentforce freemium. $0 line item. Start here, let DA drive consumption past the freebie threshold.
        </div>
      </FadeIn>
    </div>
  )
}
