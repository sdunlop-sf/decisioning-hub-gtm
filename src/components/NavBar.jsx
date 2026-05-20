import { motion } from 'framer-motion'
import './NavBar.css'

export default function NavBar({ current, total, onPrev, onNext, onDot }) {
  return (
    <nav className="nav-bar" role="navigation" aria-label="Slide navigation">
      <div className="nav-brand">
        <img className="nav-sf-logo" src="./sf-logo-cloud.png" alt="Salesforce" />
        <div className="nav-divider" />
        <span className="nav-title">Decisioning Hub GTM</span>
      </div>

      <div className="nav-dots" role="tablist">
        {Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? 'active' : ''}`}
            role="tab"
            aria-label={`Slide ${i + 1}`}
            aria-selected={i === current}
            onClick={() => onDot(i)}
          >
            {i === current && (
              <motion.div
                className="dot-fill"
                layoutId="dot-active"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="nav-controls">
        <button
          className="nav-btn"
          onClick={onPrev}
          disabled={current === 0}
          aria-label="Previous slide"
        >
          &#8249;
        </button>
        <span className="nav-counter">{current + 1} / {total}</span>
        <button
          className="nav-btn"
          onClick={onNext}
          disabled={current === total - 1}
          aria-label="Next slide"
        >
          &#8250;
        </button>
      </div>
    </nav>
  )
}
