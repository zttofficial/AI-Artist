'use client'

import { Navigation } from '../components/navigation'
import { ScrollTransition } from '../components/scroll-transition'
import { Tooltip } from '../components/tooltip'
import { AnimatedTitle } from '../components/animated-title'
import { LoadingScreen } from '../components/loading-screen'
import Image from 'next/image'
import Link from 'next/link'
import { ArtworkGallery } from '../components/artwork-gallery'
import { CustomCursor } from '../components/custom-cursor'
import { Logo } from '../components/logo'
import { useLanguage } from '../contexts/language-context'
import { works } from '../translations/works'
import { useState, useEffect } from 'react'

export default function Home() {
  const { language } = useLanguage()
  const currentWorks = works[language]
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen />
      <div className={`min-h-screen bg-studio-bg text-studio-text transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <CustomCursor />
        <Navigation />
        
        <main>
          {currentWorks.map((work, index) => (
            <section key={work.id} className={`py-32 px-8 ${index % 2 === 0 ? 'bg-white' : 'bg-black text-white'}`}>
              <div className="max-w-screen-xl mx-auto">
                <ScrollTransition>
                  {work.id === 'hanyun-studio' ? (
                    <div className="text-center">
                      <AnimatedTitle
                        title={work.title}
                        subtitle={work.description}
                        className="text-center font-serif text-7xl md:text-9xl mb-4"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      {work.images ? (
                        <div className="w-full mb-8">
                          <ArtworkGallery images={work.images} />
                        </div>
                      ) : work.imageUrl ? (
                        <div className="relative w-full mb-8 flex justify-center">
                          <Image
                            src={work.imageUrl}
                            alt={work.title}
                            width={1000}
                            height={750}
                            className="object-contain max-h-[70vh] w-auto"
                            sizes="(max-width: 1200px) 100vw, 1200px"
                          />
                        </div>
                      ) : null}
                      <Tooltip
                        content={
                          <p className="text-sm leading-relaxed">
                            {work.description}
                          </p>
                        }
                        isDarkBackground={index % 2 === 0}
                      >
                        <h2 className="font-serif text-3xl mb-2 hover:text-studio-accent transition-colors">
                          {work.title}
                        </h2>
                      </Tooltip>
                      <div className="text-center">
                        <p className="font-mono text-sm mb-1">{work.year}</p>
                        <p className="font-mono text-sm">Medium: {work.medium}</p>
                        {work.blockchainLink && (
                          <a
                            href={work.blockchainLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-sm text-studio-accent hover:underline mt-2 inline-block"
                          >
                            {language === 'en' ? 'View on Blockchain' : '在區塊鏈上查看'}
                          </a>
                        )}
                        {work.id === 'urban-growing-processing' ? (
                          <Link
                            href="/urban-growing"
                            className="font-mono text-sm text-studio-accent hover:underline mt-2 inline-block"
                          >
                            {language === 'en' ? 'View Project' : '查看專案'}
                          </Link>
                        ) : work.projectLink && (
                          <a
                            href={work.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-sm text-studio-accent hover:underline mt-2 inline-block"
                          >
                            {language === 'en' ? 'View Project' : '查看專案'}
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </ScrollTransition>
              </div>
            </section>
          ))}
        </main>

        <footer className="py-32 px-8 bg-white">
          <div className="max-w-screen-xl mx-auto font-mono text-sm text-center">
            © 2024 Hanyun Studio
          </div>
        </footer>
      </div>
    </>
  )
}

