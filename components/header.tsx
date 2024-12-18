import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-art-beige/80 backdrop-blur-sm fixed w-full z-50">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-art-gray hover:text-art-brown transition-colors">
          Hanyun Studio
        </Link>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="text-art-gray hover:text-art-brown transition-colors">
                首頁
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-art-gray hover:text-art-brown transition-colors">
                作品集
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-art-gray hover:text-art-brown transition-colors">
                關於
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

