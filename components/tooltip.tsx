'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TooltipProps {
  content: React.ReactNode
  children: React.ReactNode
  isDarkBackground: boolean
}

export function Tooltip({ content, children, isDarkBackground }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const triggerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updatePosition = () => {
      if (triggerRef.current && tooltipRef.current) {
        const triggerRect = triggerRef.current.getBoundingClientRect()
        const tooltipRect = tooltipRef.current.getBoundingClientRect()
        
        const centerX = triggerRect.left + triggerRect.width / 2
        const topY = triggerRect.top - tooltipRect.height - 10

        setPosition({ x: centerX - tooltipRect.width / 2, y: topY })
      }
    }

    if (isVisible) {
      updatePosition()
      window.addEventListener('resize', updatePosition)
      window.addEventListener('scroll', updatePosition)
    }

    return () => {
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition)
    }
  }, [isVisible])

  return (
    <div 
      ref={triggerRef}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="relative inline-block"
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className={`fixed z-50 p-4 rounded-lg shadow-lg max-w-sm
              ${isDarkBackground ? 'bg-white text-black' : 'bg-black text-white'}`}
            style={{
              left: position.x,
              top: position.y,
            }}
          >
            <div className="relative">
              {content}
              <div 
                className={`absolute w-4 h-4 rotate-45 bottom-0 left-1/2 -translate-x-1/2 translate-y-2
                  ${isDarkBackground ? 'bg-white' : 'bg-black'}`}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

