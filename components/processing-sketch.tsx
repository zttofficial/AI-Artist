'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    Processing: any
  }
}

interface ProcessingSketchProps {
  code: string
}

export function ProcessingSketch({ code }: ProcessingSketchProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/processing.js/1.6.6/processing.min.js'
    script.async = true
    
    script.onload = () => {
      if (canvasRef.current) {
        new window.Processing(canvasRef.current, code)
      }
    }

    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [code])

  return (
    <div className="w-full aspect-square max-w-4xl mx-auto">
      <canvas 
        ref={canvasRef} 
        width="800" 
        height="800"
        className="w-full h-full border border-gray-200 rounded-lg"
      />
    </div>
  )
}

