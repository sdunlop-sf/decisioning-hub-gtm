import FadeIn from '../components/FadeIn'
import './SlidePositioning.css'

const positions = [
  {
    title: 'Where We Win',
    body: 'Customers without centralised decisioning. They have the pieces — DC for profiles, MC for execution, Einstein for scoring — but no orchestration layer. The DA is the missing middle.',
    color: 'var(--blue-m)',
  },
  {
    title: "Where We Don't Compete",
    body: 'Deep Pega CDH installations (CBA, NAB). Their decisioning engine stays. Different lane entirely.',
    color: 'var(--red)',
  },
  {
    title: "Why We're Fast",
    body: 'Unlocked package deploys in hours. No middleware, no integration partner. Vibe-coded, conversationally configured, live in days.',
    color: 'var(--teal)',
  },
]

export default function SlidePositioning() {
  return (
    <div className="pos-slide">
      <FadeIn delay={0.1}>
        <div className="accent-line" style={{ margin: '0 auto 12px' }} />
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="eyebrow" style={{ textAlign: 'center' }}>Positioning</div>
      </FadeIn>
      <FadeIn delay={0.25}>
        <h2 className="pos-heading">Not a Pega replacement.<br />A consumption accelerator.</h2>
      </FadeIn>

      <div className="pos-grid">
        {positions.map((p, i) => (
          <FadeIn key={i} delay={0.35 + i * 0.1}>
            <div className="pos-card" style={{ boxShadow: `inset 3px 0 0 ${p.color}` }}>
              <div className="pos-title" style={{ color: p.color }}>{p.title}</div>
              <div className="pos-body">{p.body}</div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.7}>
        <p className="pos-tagline">
          Embedded platform capability. Speed-to-value is the wedge. Closed-loop learning is the moat.
        </p>
      </FadeIn>
    </div>
  )
}
