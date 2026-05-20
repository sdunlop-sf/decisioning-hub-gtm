import FadeIn from '../components/FadeIn'
import './SlideEntry.css'

const skus = [
  { name: 'Flex Credits', code: '200005869', role: 'Immediate attach. Agentforce adjudication is the first pool to burn.' },
  { name: 'Data 360 Profiles upsell', code: '200004909', role: 'Per-credit model becomes expensive. Flat profile fee is the rational upsell.' },
  { name: 'Messaging credits', code: 'MC sends', role: 'Every decision that results in a send = a messaging credit consumed.' },
]

export default function SlideEntryB() {
  return (
    <div className="entry-slide">
      <FadeIn delay={0.1}>
        <div className="accent-line accent-line-teal" />
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="eyebrow eyebrow-teal">Entry Point B</div>
      </FadeIn>
      <FadeIn delay={0.25}>
        <h2 className="entry-heading">Existing Data Cloud &mdash; No AELA</h2>
      </FadeIn>
      <FadeIn delay={0.35}>
        <p className="entry-sub">DA activates dormant platform investment. Drives Flex Credits attach and Data 360 Profiles upsell within months.</p>
      </FadeIn>
      <FadeIn delay={0.45}>
        <div className="sku-grid">
          {skus.map((s, i) => (
            <div key={i} className="sku-card sku-card-teal">
              <div className="sku-name">{s.name}</div>
              <div className="sku-code">{s.code}</div>
              <div className="sku-role">{s.role}</div>
            </div>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={0.6}>
        <div className="entry-callout">
          <strong>Credit pressure:</strong> Daily CIs on 5M profiles = 82k DC credits/year (3 models). Add messaging + Flex and per-credit billing becomes the pain point that drives AELA.
        </div>
      </FadeIn>
    </div>
  )
}
