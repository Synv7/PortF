'use client'

import { motion } from 'framer-motion'

interface ScrollIndicatorProps {
  scrollProgress: number
}

export default function ScrollIndicator({ scrollProgress }: ScrollIndicatorProps) {
  return (
    <motion.div
      style={{ position: 'fixed', bottom: '3rem', left: '50%', transform: 'translateX(-50%)', zIndex: 40 }}
      animate={{
        y: scrollProgress > 0.85 ? 40 : 0,
        opacity: scrollProgress > 0.85 ? 0 : 1,
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg
          className="w-6 h-6 text-synthiv-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </motion.div>
  )
}
