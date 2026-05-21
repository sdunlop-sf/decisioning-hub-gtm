import FadeIn from '../components/FadeIn'
import './SlideTitle.css'

export default function SlideTitle() {
  return (
    <div className="title-slide">
      <FadeIn delay={0.1}>
        <div className="accent-line" />
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className="eyebrow">Salesforce &middot; Internal GTM</div>
      </FadeIn>
      <FadeIn delay={0.3}>
        <h1 className="title-hero">
          The Consumption<br />
          <span className="hl">Accelerator.</span>
        </h1>
      </FadeIn>
      <FadeIn delay={0.45}>
        <p className="title-subtitle">Decisioning Hub &mdash; Go-to-Market & Monetisation</p>
      </FadeIn>
      <FadeIn delay={0.55}>
        <p className="title-tagline">
          The fastest path from platform attach to AELA.
        </p>
      </FadeIn>
      <FadeIn delay={0.7}>
        <div className="title-meta">
          <span>May 2026</span>
          <span>AU Pipeline: $65M+</span>
        </div>
      </FadeIn>
    </div>
  )
}
