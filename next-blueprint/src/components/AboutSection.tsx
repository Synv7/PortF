'use client'

import { FadeInUp, SlideInLeft } from '@/components/ScrollAnimations'

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInUp>
          <div className="text-center mb-16">
            <p className="text-synthiv-neutral text-sm font-bold uppercase tracking-wide mb-4">About</p>
            <h2 className="section-title text-synthiv-dark mb-6">Senior-level execution</h2>
            <p className="text-lg text-synthiv-neutral max-w-2xl mx-auto">
              Synthiv Consulting helps teams clarify scope, de-risk delivery, and ship polished digital work.
            </p>
          </div>
        </FadeInUp>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Clarity',
              description:
                'Requirements, constraints, and decision points documented early to prevent churn and scope creep.',
            },
            {
              title: 'Velocity',
              description:
                'Short iterations, visible progress, and a bias toward shipping the highest-value slice first.',
            },
            {
              title: 'Quality',
              description:
                'Performance, accessibility, and maintainability built in—not bolted on at the end.',
            },
          ].map((item, i) => (
            <SlideInLeft key={item.title} delay={i * 0.15}>
              <div className="p-8 rounded-2xl border border-gray-200 bg-gradient-light">
                <h3 className="font-gt-america font-bold text-xl mb-3 text-synthiv-dark">{item.title}</h3>
                <p className="text-synthiv-neutral leading-relaxed">{item.description}</p>
              </div>
            </SlideInLeft>
          ))}
        </div>
      </div>
    </section>
  )
}
