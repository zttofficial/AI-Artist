'use client'

import { useState, useRef, useEffect } from 'react'

interface TooltipProps {
  content: React.ReactNode
  children: React.ReactNode
  isDarkBackground: boolean
}

export function Tooltip({ content, children, isDarkBackground }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const triggerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updatePosition = () => {
      if (triggerRef.current && tooltipRef.current) {
        const triggerRect = triggerRef.current.getBoundingClientRect()
        const tooltipRect = tooltipRef.current.getBoundingClientRect()
        const top = triggerRect.bottom + window.scrollY
        const left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2
        setPosition({ top, left })
      }
    }

    if (isVisible) {
      updatePosition()
      window.addEventListener('resize', updatePosition)
      return () => window.removeEventListener('resize', updatePosition)
    }
  }, [isVisible])

  return (
    <div className="relative inline-block">
      <div
        ref={triggerRef}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div
          ref={tooltipRef}
          className={`fixed z-50 w-80 p-6 rounded-lg shadow-xl transition-opacity duration-300 ${
            isDarkBackground ? 'bg-white text-black' : 'bg-black text-white'
          }`}
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            opacity: isVisible ? 1 : 0,
          }}
        >
          <div className="relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rotate-45 bg-inherit"></div>
            <div className="relative z-10">{content}</div>
          </div>
        </div>
      )}
    </div>
  )
}

