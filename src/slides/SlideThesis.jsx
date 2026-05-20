import FadeIn from '../components/FadeIn'
import './SlideThesis.css'

export default function SlideThesis() {
  return (
    <div className="thesis-slide">
      <FadeIn delay={0.1}>
        <div className="accent-line" />
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="eyebrow">The Thesis</div>
      </FadeIn>
      <FadeIn delay={0.25}>
        <h2 className="thesis-heading">
          The package isn't the product.<br />
          <span className="hl">The consumption is.</span>
        </h2>
      </FadeIn>
      <FadeIn delay={0.4}>
        <div className="thesis-card">
          <p className="thesis-main">
            Every decision the Decisioning Hub makes triggers downstream credit burn across the entire Salesforce platform &mdash; not just Data Cloud.
          </p>
          <p className="thesis-sub">
            More decisions means more messages sent, more agent invocations, more training data, better models, and more decisions worth sending. The flywheel is exponential, not linear.
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={0.55}>
        <div className="thesis-bottom">
          <div className="thesis-stat">
            <div className="stat-value">90 days</div>
            <div className="stat-label">From pilot to credit ceiling</div>
          </div>
          <div className="thesis-stat">
            <div className="stat-value">3&ndash;5x</div>
            <div className="stat-label">Downstream events per decision</div>
          </div>
          <div className="thesis-stat">
            <div className="stat-value">$3M+</div>
            <div className="stat-label">AELA conversion target</div>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}
