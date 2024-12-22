'use client'

import { useEffect, useState } from 'react'

interface AnimatedTitleProps {
  title: string
  subtitle: string
  className?: string
}

export function AnimatedTitle({ title, subtitle, className = '' }: AnimatedTitleProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={className}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    )
  }

  const animateText = (text: string, delay: number) => (
    text.split('').map((char, index) => (
      <span
        key={index}
        className={`inline-block animate-custom-rainbow ${char === ' ' ? 'w-[0.25em]' : ''}`}
        style={{
          animationDelay: `${index * 0.1 + delay}s`,
        }}
      >
        {char}
      </span>
    ))
  )

  return (
    <div className={className}>
      <h1 className="font-serif text-7xl md:text-9xl mb-4 whitespace-pre-wrap">
        {animateText(title, 0)}
      </h1>
      <p className="font-mono text-xl mb-8 whitespace-pre-wrap">
        {animateText(subtitle, title.length * 0.1)}
      </p>
    </div>
  )
}

