'use client'

import { useRef, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

interface ScrollTransitionProps {
  children: React.ReactNode
}

export function ScrollTransition({ children }: ScrollTransitionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  )
}

