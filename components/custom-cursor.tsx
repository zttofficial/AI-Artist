'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState<{ x: number; y: number; timestamp: number }[]>([])
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorControls = useAnimation()

  const updateMousePosition = useCallback((e: MouseEvent) => {
    const newPosition = { x: e.clientX, y: e.clientY }
    setMousePosition(newPosition)
    setTrail(prevTrail => [
      ...prevTrail.slice(-5),
      { ...newPosition, timestamp: Date.now() }
    ])
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [updateMousePosition])

  useEffect(() => {
    cursorControls.start({
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      transition: { type: 'spring', stiffness: 1000, damping: 28 }
    })
  }, [mousePosition, cursorControls])

  useEffect(() => {
    const clearOldTrails = () => {
      const now = Date.now()
      setTrail(prevTrail => prevTrail.filter(dot => now - dot.timestamp < 150))
    }
    const intervalId = setInterval(clearOldTrails, 100)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none;
        }
      `}</style>
      {trail.map((dot, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: (index + 1) / trail.length }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed top-0 left-0 w-1 h-1 rounded-full bg-studio-accent mix-blend-difference pointer-events-none z-50"
          style={{
            x: dot.x - 2,
            y: dot.y - 2,
          }}
        />
      ))}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full border border-studio-accent mix-blend-difference pointer-events-none z-50"
        animate={cursorControls}
      />
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-studio-accent mix-blend-difference rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
      />
    </>
  )
}

