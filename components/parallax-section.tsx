'use client'

import { useRef, useEffect } from 'react'

interface ParallaxSectionProps {
  children: React.ReactNode
  speed: number
}

export function ParallaxSection({ children, speed }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset
      const sectionPosition = section.offsetTop
      const offset = (scrollPosition - sectionPosition) * speed

      section.style.transform = `translateY(${offset}px)`
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div ref={sectionRef} className="relative">
      {children}
    </div>
  )
}

