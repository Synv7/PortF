'use client'

import { FadeInUp, ScaleIn } from '@/components/ScrollAnimations'
import Card from '@/components/Card'

export default function ServicesSection() {
  const services = [
    {
      title: 'Discovery & SOW',
      description: 'Stakeholder alignment, scope boundaries, and success metrics. Milestones, risks, and change control built in from day one.',
    },
    {
      title: 'Web & UX Delivery',
      description: 'Single-page and marketing sites with fast load times. Design-to-build implementation with performance budgets and accessibility checks.',
    },
    {
      title: 'Interactive & Motion',
      description: 'Shader backgrounds, micro-interactions, and scroll polish. Visual storytelling that remains readable and performant.',
    },
    {
      title: 'Program Execution',
      description: 'Backlog management, vendor coordination, and delivery cadence. Release readiness and handoff documentation included.',
    },
  ]

  return (
    <section id="services" className="py-24 bg-gradient-light">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInUp>
          <div className="text-center mb-16">
            <p className="text-synthiv-neutral text-sm font-bold uppercase tracking-wide mb-4">Services</p>
            <h2 className="section-title text-synthiv-dark mb-6">What we deliver</h2>
            <p className="text-lg text-synthiv-neutral max-w-2xl mx-auto">
              Pick a targeted engagement or combine services into a full delivery plan.
            </p>
          </div>
        </FadeInUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <ScaleIn key={service.title} delay={i * 0.1}>
              <Card
                title={service.title}
                description={service.description}
                delay={i * 0.1}
              />
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  )
}
