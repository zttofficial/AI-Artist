'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface Artwork {
  id: string
  title: string
  description: string
  imageUrl: string
}

interface ArtworkShowcaseProps {
  artworks: Artwork[]
}

export function ArtworkShowcase({ artworks }: ArtworkShowcaseProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {artworks.map((artwork) => (
        <motion.div
          key={artwork.id}
          layoutId={artwork.id}
          onClick={() => setSelectedId(artwork.id)}
          className="cursor-pointer"
        >
          <motion.div
            className="relative w-full h-64 overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={artwork.imageUrl}
              alt={artwork.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 transform hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-art-primary to-transparent opacity-70" />
            <h3 className="absolute bottom-4 left-4 text-art-secondary text-xl font-display">{artwork.title}</h3>
          </motion.div>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="bg-art-primary p-8 rounded-lg max-w-3xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {artworks.find(art => art.id === selectedId) && (
                <>
                  <h2 className="text-2xl font-display text-art-secondary mb-4">
                    {artworks.find(art => art.id === selectedId)!.title}
                  </h2>
                  <p className="text-art-secondary mb-4">
                    {artworks.find(art => art.id === selectedId)!.description}
                  </p>
                  <Image
                    src={artworks.find(art => art.id === selectedId)!.imageUrl}
                    alt={artworks.find(art => art.id === selectedId)!.title}
                    width={800}
                    height={600}
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

