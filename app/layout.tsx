import { Metadata } from 'next'
import { Logo } from '../components/logo'
import { LanguageProvider } from '../contexts/language-context'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hanyun Studio',
  description: 'AI Artist & Creative Technologist',
  icons: {
    icon: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-N00cdkONNzdvcofRDvmYeFqRk3HgbH.png',
        sizes: '32x32',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="icon" 
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-N00cdkONNzdvcofRDvmYeFqRk3HgbH.png"
          sizes="32x32" 
        />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

