import { useState, useCallback, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Slide from './components/Slide'
import NavBar from './components/NavBar'
import SlideTitle from './slides/SlideTitle'
import SlideWhat from './slides/SlideWhat'
import SlideThesis from './slides/SlideThesis'
import SlideFlywheel from './slides/SlideFlywheel'
import SlideRamp from './slides/SlideRamp'
import SlideEntryA from './slides/SlideEntryA'
import SlideEntryB from './slides/SlideEntryB'
import SlideEntryC from './slides/SlideEntryC'
import SlideMotion from './slides/SlideMotion'
import SlidePipeline from './slides/SlidePipeline'
import SlidePositioning from './slides/SlidePositioning'
import './App.css'

const slides = [
  SlideTitle,
  SlideWhat,
  SlideThesis,
  SlideFlywheel,
  SlideRamp,
  SlideEntryA,
  SlideEntryB,
  SlideEntryC,
  SlideMotion,
  SlidePipeline,
  SlidePositioning,
]

function App() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const total = slides.length

  const goTo = useCallback((idx) => {
    if (idx < 0 || idx >= total || idx === current) return
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }, [current, total])

  const navigate = useCallback((dir) => {
    goTo(current + dir)
  }, [current, goTo])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        navigate(1)
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        navigate(-1)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [navigate])

  useEffect(() => {
    let tx = null
    const handleStart = (e) => { tx = e.touches[0].clientX }
    const handleEnd = (e) => {
      if (tx === null) return
      const diff = e.changedTouches[0].clientX - tx
      if (Math.abs(diff) > 50) navigate(diff < 0 ? 1 : -1)
      tx = null
    }
    window.addEventListener('touchstart', handleStart)
    window.addEventListener('touchend', handleEnd)
    return () => {
      window.removeEventListener('touchstart', handleStart)
      window.removeEventListener('touchend', handleEnd)
    }
  }, [navigate])

  const CurrentSlide = slides[current]

  return (
    <div className="deck">
      <div className="bg-base" />
      <div className="bg-noise" />
      <div className="slide-container">
        <AnimatePresence mode="wait" custom={direction}>
          <Slide key={current} direction={direction}>
            <CurrentSlide />
          </Slide>
        </AnimatePresence>
      </div>
      <NavBar
        current={current}
        total={total}
        onPrev={() => navigate(-1)}
        onNext={() => navigate(1)}
        onDot={goTo}
      />
    </div>
  )
}

export default App
