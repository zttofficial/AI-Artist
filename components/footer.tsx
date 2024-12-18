import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="bg-art-beige/80 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex space-x-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-art-brown hover:text-art-gray transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-art-brown hover:text-art-gray transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-art-brown hover:text-art-gray transition-colors">
              <FaGithub size={24} />
            </a>
          </div>
          <p className="text-art-gray">&copy; 2024 Hanyun Studio. 版權所有.</p>
        </div>
      </div>
    </footer>
  )
}

