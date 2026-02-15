'use client'

import { FadeInUp } from '@/components/ScrollAnimations'
import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-synthiv-dark text-white">
      <div className="max-w-4xl mx-auto px-6">
        <FadeInUp>
          <div className="text-center mb-16">
            <p className="text-synthiv-neutral text-sm font-bold uppercase tracking-wide mb-4">Contact</p>
            <h2 className="section-title text-white mb-6">Let's talk</h2>
            <p className="text-lg text-gray-300">
              Send a short summary and timeline. We'll respond with next steps.
            </p>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-12">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-3">Project Summary</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-synthiv-accent transition-colors"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-3">Timeline</label>
                  <input
                    type="text"
                    placeholder="e.g., Next 3 months"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-synthiv-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-3">Budget Range</label>
                  <input
                    type="text"
                    placeholder="e.g., $50k - $100k"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-synthiv-accent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-synthiv-accent transition-colors"
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                style={{ display: 'block' }}
              >
                <button style={{ display: 'block', width: '100%', padding: '0.75rem 1.5rem', backgroundColor: '#4ADE80', color: '#111827', fontWeight: 'bold', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}>
                  Send Inquiry
                </button>
              </motion.div>
            </form>

            <p className="text-sm text-gray-400 text-center mt-6">
              Or email us directly: <span className="text-synthiv-accent">hello@example.com</span>
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
