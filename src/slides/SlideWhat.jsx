import FadeIn from '../components/FadeIn'
import './SlideWhat.css'

export default function SlideWhat() {
  return (
    <div className="what-slide">
      <FadeIn delay={0.1}>
        <div className="accent-line" style={{ margin: '0 auto 12px' }} />
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="eyebrow" style={{ textAlign: 'center' }}>What Is It</div>
      </FadeIn>
      <FadeIn delay={0.25}>
        <h2 className="what-heading">
          The orchestration layer<br />between data and action.
        </h2>
      </FadeIn>
      <FadeIn delay={0.4}>
        <p className="what-body">
          The Decisioning Hub is an unlocked Salesforce package that connects Data Cloud profiles, Einstein Studio models, and Agentforce into a single decisioning loop &mdash; scoring customers, arbitrating the best action, and learning from every outcome.
        </p>
      </FadeIn>
      <FadeIn delay={0.55}>
        <div className="what-flow">
          <div className="what-step">
            <div className="what-dot" style={{ background: 'var(--blue-m)' }} />
            <div className="what-label">Score</div>
            <div className="what-desc">Einstein models rank actions by propensity, value, and priority</div>
          </div>
          <div className="what-arrow">&rarr;</div>
          <div className="what-step">
            <div className="what-dot" style={{ background: 'var(--teal)' }} />
            <div className="what-label">Arbitrate</div>
            <div className="what-desc">Constitutional rules + agent reasoning select the best action</div>
          </div>
          <div className="what-arrow">&rarr;</div>
          <div className="what-step">
            <div className="what-dot" style={{ background: 'var(--gold)' }} />
            <div className="what-label">Act</div>
            <div className="what-desc">Dispatch via MC, Service, Sales, or headless API</div>
          </div>
          <div className="what-arrow">&rarr;</div>
          <div className="what-step">
            <div className="what-dot" style={{ background: 'var(--violet)' }} />
            <div className="what-label">Learn</div>
            <div className="what-desc">Outcomes feed back to retrain models automatically</div>
          </div>
        </div>
      </FadeIn>
      <FadeIn delay={0.7}>
        <p className="what-tagline">Deploys in days. No middleware. No integration partner.</p>
      </FadeIn>
    </div>
  )
}
