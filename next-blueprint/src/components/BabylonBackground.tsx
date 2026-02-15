'use client'

import { useEffect, useRef } from 'react'
import { createBabylonScene } from '@/lib/babylon-setup'

export default function BabylonBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return

    // Set canvas size to match container
    const updateCanvasSize = () => {
      if (!canvasRef.current || !containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      canvasRef.current.width = rect.width
      canvasRef.current.height = rect.height
    }

    updateCanvasSize()

    // Initialize babylon scene
    try {
      const engine = createBabylonScene(canvasRef.current)

      // Handle resize
      window.addEventListener('resize', updateCanvasSize)

      return () => {
        window.removeEventListener('resize', updateCanvasSize)
        engine.dispose()
      }
    } catch (error) {
      console.error('Failed to initialize babylon scene:', error)
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{ top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />
      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-synthiv-light/10 to-synthiv-light/40" />
    </div>
  )
}
