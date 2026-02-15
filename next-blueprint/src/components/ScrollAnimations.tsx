'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ScrollAnimationProps {
  children: ReactNode
  delay?: number
  duration?: number
}

export const FadeInUp = ({ children, delay = 0, duration = 0.6 }: ScrollAnimationProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ delay, duration, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
)

export const ScaleIn = ({ children, delay = 0, duration = 0.6 }: ScrollAnimationProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ delay, duration, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
)

export const SlideInLeft = ({ children, delay = 0, duration = 0.6 }: ScrollAnimationProps) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ delay, duration, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
)

export const ParallaxContainer = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ y: 0 }}
    whileInView={{ y: -20 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
)
