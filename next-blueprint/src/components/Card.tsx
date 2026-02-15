'use client'

import { motion } from 'framer-motion'

interface CardProps {
  title: string
  description: string
  icon?: ReactNode
  delay?: number
}

interface ReactNode {
  _?: never
}

export default function Card({ title, description, icon, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
      className="card p-8 rounded-2xl"
    >
      {icon && <div className="mb-4 text-3xl">{icon}</div>}
      <h3 className="font-gt-america font-bold text-xl mb-3 text-synthiv-dark">
        {title}
      </h3>
      <p className="text-muted leading-relaxed">{description}</p>
    </motion.div>
  )
}
