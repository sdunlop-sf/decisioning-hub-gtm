import { motion } from 'framer-motion'

const variants = {
  enter: (direction) => ({
    opacity: 0,
    y: direction > 0 ? 30 : -30,
    scale: 0.98,
  }),
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: (direction) => ({
    opacity: 0,
    y: direction > 0 ? -20 : 20,
    scale: 0.98,
  }),
}

export default function Slide({ children, direction }) {
  return (
    <motion.div
      className="slide-inner"
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        opacity: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
        y: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        scale: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      {children}
    </motion.div>
  )
}
