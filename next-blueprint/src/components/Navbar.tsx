'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Work', href: '#work' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-synthiv-light/70 border-b border-gray-200/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#top" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-synthiv-dark rounded-lg shadow-lg" />
          <span className="font-gt-america font-bold text-lg">Synthiv</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-synthiv-neutral hover:text-synthiv-dark transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="#contact"
            className="px-4 py-2 bg-synthiv-dark text-white rounded-lg hover:bg-synthiv-dark/90 transition-all"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-gray-200 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12h18M3 6h18M3 18h18"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          style={{ display: 'block', borderTop: '1px solid rgba(0,0,0,0.05)', backgroundColor: 'white' }}
        >
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-synthiv-neutral hover:text-synthiv-dark transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 bg-synthiv-dark text-white rounded-lg text-center hover:bg-synthiv-dark/90 transition-all"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
