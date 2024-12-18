import Link from 'next/link'

export function Navigation() {
  return (
    <header className="fixed w-full top-0 z-50 px-8 py-4 flex justify-between items-start font-mono text-sm">
      <div className="flex flex-col gap-1">
        <div>Email:</div>
        <a href="mailto:studio@hanyun.art" className="hover:text-studio-accent transition-colors">
          art@zttofficial.com
        </a>
      </div>
      
      <div className="flex flex-col gap-1 items-end">
        <div>SOCIAL:</div>
        <div className="flex gap-4">
          <Link href="https://twitter.com" className="hover:text-studio-accent transition-colors">
            Twitter
          </Link>
          <Link href="https://instagram.com" className="hover:text-studio-accent transition-colors">
            Instagram
          </Link>
        </div>
      </div>
    </header>
  )
}

