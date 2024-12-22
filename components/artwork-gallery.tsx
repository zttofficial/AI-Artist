'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface ArtworkGalleryProps {
  images: {
    url: string
    alt: string
  }[]
}

export function ArtworkGallery({ images }: ArtworkGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  useEffect(() => {
    const updateWidth = () => {
      if (scrollContainerRef.current) {
        setContainerWidth(scrollContainerRef.current.offsetWidth)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollInterval = setInterval(() => {
      if (currentIndex < images.length - 1) {
        setCurrentIndex(currentIndex + 1)
        container.scrollTo({
          left: (currentIndex + 1) * container.offsetWidth,
          behavior: 'smooth'
        })
      } else {
        setCurrentIndex(0)
        container.scrollTo({
          left: 0,
          behavior: 'smooth'
        })
      }
    }, 5000)

    return () => clearInterval(scrollInterval)
  }, [currentIndex, images.length])

  return (
    <div className="relative w-full">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-hidden snap-x snap-mandatory"
        style={{ scrollBehavior: 'smooth' }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full snap-center flex items-center justify-center p-4"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={image.url}
                alt={image.alt}
                width={containerWidth}
                height={containerWidth * 0.75}
                className="object-contain"
                sizes="100vw"
                priority={index === 0}
                style={{
                  width: 'auto',
                  height: image.alt.includes('Logo') ? '200px' : 'auto',
                  maxWidth: '100%',
                  maxHeight: image.alt.includes('Logo') ? '200px' : '80vh',
                }}
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === index ? 'bg-white w-4' : 'bg-white/50'
            }`}
            onClick={() => {
              setCurrentIndex(index)
              scrollContainerRef.current?.scrollTo({
                left: index * (scrollContainerRef.current.offsetWidth),
                behavior: 'smooth'
              })
            }}
          />
        ))}
      </div>
    </div>
  )
}

