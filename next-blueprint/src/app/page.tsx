'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import ScrollIndicator from '@/components/ScrollIndicator'

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      const progress = scrollHeight > 0 ? scrolled / scrollHeight : 0
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        {/* Additional sections will be added here */}
      </main>
      <ScrollIndicator scrollProgress={scrollProgress} />
    </>
  )
}
