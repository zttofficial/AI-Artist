'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  }

  const dotVariants = {
    hidden: {
      scale: 0,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: 1.5
      }
    }
  }

  return (
    <motion.div
      className="fixed inset-0 bg-white z-[100] flex items-center justify-center"
      animate={isLoading ? "visible" : "hidden"}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <svg
        width="200"
        height="200"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Circle */}
        <motion.circle
          cx="200"
          cy="200"
          r="190"
          stroke="black"
          strokeWidth="2"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          fill="none"
        />
        
        {/* Left Vertical Bars */}
        <motion.path
          d="M80 250 V320"
          stroke="black"
          strokeWidth="8"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M100 270 V320"
          stroke="black"
          strokeWidth="8"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M120 290 V320"
          stroke="black"
          strokeWidth="8"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />

        {/* Left Horizontal Lines */}
        <motion.path
          d="M80 280 H160"
          stroke="black"
          strokeWidth="2"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M80 300 H140"
          stroke="black"
          strokeWidth="2"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M80 320 H120"
          stroke="black"
          strokeWidth="2"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />

        {/* Center L Building */}
        <motion.path
          d="M180 200 V320 H240"
          stroke="black"
          strokeWidth="8"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />

        {/* Right Tall Building */}
        <motion.path
          d="M280 150 V300"
          stroke="black"
          strokeWidth="8"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />

        {/* Three Dots */}
        <motion.circle
          cx="300"
          cy="180"
          r="4"
          variants={dotVariants}
          initial="hidden"
          animate="visible"
          fill="black"
        />
        <motion.circle
          cx="320"
          cy="180"
          r="4"
          variants={dotVariants}
          initial="hidden"
          animate="visible"
          fill="black"
        />
        <motion.circle
          cx="340"
          cy="180"
          r="4"
          variants={dotVariants}
          initial="hidden"
          animate="visible"
          fill="black"
        />

        {/* Top Right Circle */}
        <motion.circle
          cx="320"
          cy="80"
          r="15"
          variants={dotVariants}
          initial="hidden"
          animate="visible"
          fill="black"
        />
      </svg>
    </motion.div>
  )
}

