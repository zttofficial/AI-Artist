'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'

interface Artwork {
  id: string
  title: string
  imageUrl: string
}

interface InfiniteScrollGalleryProps {
  artworks: Artwork[]
}

export function InfiniteScrollGallery({ artworks }: InfiniteScrollGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <div
      ref={scrollRef}
      className="flex overflow-x-hidden w-full"
      style={{ scrollBehavior: 'smooth' }}
    >
      {[...artworks, ...artworks].map((artwork, index) => (
        <div key={`${artwork.id}-${index}`} className="flex-shrink-0 w-64 h-64 m-2">
          <Image
            src={artwork.imageUrl}
            alt={artwork.title}
            width={256}
            height={256}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      ))}
    </div>
  )
}

