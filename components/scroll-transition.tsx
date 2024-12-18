'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ScrollTransitionProps {
  children: React.ReactNode
}

export function ScrollTransition({ children }: ScrollTransitionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [elementTop, setElementTop] = useState(0)
  const { scrollY } = useScroll()
  
  const opacity = useTransform(
    scrollY,
    [elementTop - 800, elementTop - 400, elementTop + 100, elementTop + 400],
    [0, 1, 1, 0]
  )
  
  const y = useTransform(
    scrollY,
    [elementTop - 800, elementTop - 400, elementTop + 100, elementTop + 400],
    [100, 0, 0, -100]
  )

  useEffect(() => {
    if (!ref.current) return
    setElementTop(ref.current.offsetTop)
    
    const handleResize = () => {
      if (!ref.current) return
      setElementTop(ref.current.offsetTop)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  )
}

