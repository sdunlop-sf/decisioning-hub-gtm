import { motion } from 'framer-motion'
import { Database, Envelope, Brain, ArrowsClockwise } from '@phosphor-icons/react'
import FadeIn from '../components/FadeIn'
import './SlideFlywheel.css'

const layers = [
  {
    Icon: Database,
    label: 'Data Cloud',
    sub: 'Upstream',
    detail: 'Ingestion + unification + CIs + segmentation',
    credits: '10,000+ credits/day',
    color: '#022AC0',
    bg: 'rgba(2,42,192,0.08)',
    border: 'rgba(2,42,192,0.18)',
  },
  {
    Icon: Brain,
    label: 'Einstein Studio',
    sub: 'Core',
    detail: 'Model scoring + training on outcomes',
    credits: '17,500 credits/day',
    color: '#06A59A',
    bg: 'rgba(6,165,154,0.1)',
    border: 'rgba(6,165,154,0.2)',
  },
  {
    Icon: Envelope,
    label: 'Messaging',
    sub: 'Downstream',
    detail: 'Every send decision = a credit burned',
    credits: '1M+ messages/day',
    color: '#A87700',
    bg: 'rgba(252,192,3,0.12)',
    border: 'rgba(252,192,3,0.25)',
  },
  {
    Icon: ArrowsClockwise,
    label: 'Agentforce',
    sub: 'Lateral',
    detail: 'Adjudication + agent-to-agent actions',
    credits: 'Flex Credits/invocation',
    color: '#730394',
    bg: 'rgba(122,61,214,0.08)',
    border: 'rgba(122,61,214,0.18)',
  },
]

export default function SlideFlywheel() {
  return (
    <div className="flywheel-slide">
      <FadeIn delay={0.1}>
        <div className="accent-line" style={{ margin: '0 auto 12px' }} />
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="eyebrow" style={{ textAlign: 'center' }}>The Flywheel</div>
      </FadeIn>
      <FadeIn delay={0.25}>
        <h2 className="flywheel-heading">Every decision burns credits across four pools.</h2>
      </FadeIn>

      <div className="flywheel-grid">
        {layers.map((l, i) => (
          <motion.div
            key={i}
            className="fw-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="fw-icon" style={{ background: l.bg, borderColor: l.border }}>
              <l.Icon size={22} weight="duotone" color={l.color} />
            </div>
            <div className="fw-label" style={{ color: l.color }}>{l.label}</div>
            <div className="fw-sub">{l.sub}</div>
            <div className="fw-detail">{l.detail}</div>
            <div className="fw-credits" style={{ color: l.color }}>{l.credits}</div>
          </motion.div>
        ))}
      </div>

      <FadeIn delay={0.8}>
        <p className="flywheel-tagline">A single decision triggers 3&ndash;5 downstream credit events. Consumption is multiplicative, not additive.</p>
      </FadeIn>
    </div>
  )
}
