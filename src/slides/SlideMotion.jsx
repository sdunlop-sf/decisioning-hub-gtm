import { motion } from 'framer-motion'
import { Rocket, ChartLineUp, TrendUp } from '@phosphor-icons/react'
import FadeIn from '../components/FadeIn'
import './SlideMotion.css'

const steps = [
  {
    Icon: Rocket,
    num: '01',
    title: 'Land Fast',
    body: 'DA deploys in days. First decisions running within 2 weeks. Marketing Data Bundle wraps the attach as a single comp-friendly line item.',
    color: '#022AC0',
    bg: 'rgba(2,42,192,0.08)',
  },
  {
    Icon: ChartLineUp,
    num: '02',
    title: 'Prove Value',
    body: 'Closed-loop learning shows measurable lift within 30 days. Consumption dashboards show credit burn accelerating week-over-week.',
    color: '#06A59A',
    bg: 'rgba(6,165,154,0.1)',
  },
  {
    Icon: TrendUp,
    num: '03',
    title: 'Outgrow Credits',
    body: 'By month 3, per-credit billing is the pain point. Daily decisions + messaging + agents = credit pools exhausting. Customer asks for unlimited.',
    color: '#A87700',
    bg: 'rgba(252,192,3,0.12)',
  },
]

export default function SlideMotion() {
  return (
    <div className="motion-slide">
      <FadeIn delay={0.1}>
        <div className="accent-line" style={{ margin: '0 auto 12px' }} />
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="eyebrow" style={{ textAlign: 'center' }}>GTM Motion</div>
      </FadeIn>
      <FadeIn delay={0.25}>
        <h2 className="motion-heading">Land fast. Prove value. Outgrow credits.</h2>
      </FadeIn>

      <div className="motion-grid">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            className="motion-card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 + i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="motion-icon" style={{ background: s.bg }}>
              <s.Icon size={24} weight="duotone" color={s.color} />
            </div>
            <div className="motion-num" style={{ color: s.color }}>{s.num}</div>
            <div className="motion-title">{s.title}</div>
            <div className="motion-body">{s.body}</div>
          </motion.div>
        ))}
      </div>

      <FadeIn delay={0.75}>
        <div className="motion-cta">
          <strong>Comp alignment:</strong> Marketing Data Bundle (200014232) = 100% Bucket 1 for L1 Marketing AEs.
        </div>
      </FadeIn>
    </div>
  )
}
