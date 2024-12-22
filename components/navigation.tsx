'use client'

import Link from 'next/link'
import { useScrollPosition } from '../hooks/use-scroll-position'
import { useLanguage } from '../contexts/language-context'
import { Button } from '@/components/ui/button'

export function Navigation() {
  const { scrollDirection } = useScrollPosition()
  const { language, setLanguage } = useLanguage()

  return (
    <header 
      className={`fixed w-full top-0 z-50 px-8 py-4 bg-white/80 backdrop-blur-sm transition-transform duration-300 ${
        scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="flex justify-between items-start font-mono text-sm">
        <div className="flex flex-col gap-1">
          <div>Email:</div>
          <a href="mailto:art@zttofficial.com" className="hover:text-studio-accent transition-colors">
            art@zttofficial.com
          </a>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="flex gap-4">
            <Link href="https://t.me/zttofficial" className="hover:text-studio-accent transition-colors">
              Telegram
            </Link>
            <Link href="https://zttofficial.com" className="hover:text-studio-accent transition-colors">
              Blog
            </Link>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
            className="hover:text-studio-accent transition-colors"
          >
            {language === 'en' ? '中文' : 'English'}
          </Button>
        </div>
      </div>
    </header>
  )
}

