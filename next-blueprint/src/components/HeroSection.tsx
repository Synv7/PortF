'use client'

import BabylonBackground from '@/components/BabylonBackground'
import { FadeInUp } from '@/components/ScrollAnimations'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section id="top" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Babylon.js Background */}
      <BabylonBackground />

      {/* Content Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <FadeInUp>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p className="text-synthiv-neutral mb-6 text-lg">
              Consulting • Delivery • Digital
            </p>
          </motion.div>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <h1 className="hero-headline mb-6 text-white">
            Strategy that ships.
            <br />
            Systems that scale.
          </h1>
        </FadeInUp>

        <FadeInUp delay={0.4}>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            We help teams deliver modern digital experiences with clarity, velocity, and measurable outcomes.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.6}>
          <motion.div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              style={{ display: 'inline-block' }}
            >
              <a href="#contact" style={{ display: 'inline-block', paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '0.75rem', paddingBottom: '0.75rem', backgroundColor: '#00D9FF', color: '#0F172A', borderRadius: '0.5rem', fontWeight: 'bold', textDecoration: 'none' }}>
                Start a Project
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              style={{ display: 'inline-block' }}
            >
              <a href="#services" style={{ display: 'inline-block', paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '0.75rem', paddingBottom: '0.75rem', border: '2px solid #00D9FF', color: '#00D9FF', borderRadius: '0.5rem', fontWeight: 'bold', textDecoration: 'none' }}>
                View Services
              </a>
            </motion.div>
          </motion.div>
        </FadeInUp>

        {/* Floating Pills */}
        <FadeInUp delay={0.8}>
          <div className="flex flex-wrap gap-3 justify-center mt-12">
            {['SOW & scope', 'Web modernization', 'Interactive experiences', 'Launch readiness'].map(
              (pill, i) => (
                <motion.span
                  key={pill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                  style={{ display: 'inline-block', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', backgroundColor: 'rgba(0, 217, 255, 0.1)', border: '1px solid rgba(0, 217, 255, 0.5)', borderRadius: '9999px', fontSize: '0.875rem', color: '#00D9FF' }}
                >
                  {pill}
                </motion.span>
              )
            )}
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
