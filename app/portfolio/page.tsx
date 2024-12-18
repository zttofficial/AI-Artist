import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import { ArtworkCard } from '../../components/artwork-card'

// 模擬的作品集數據
const artworks = [
  { id: '1', title: '夢境漫遊', imageUrl: '/placeholder.svg?height=300&width=300' },
  { id: '2', title: '未來城市', imageUrl: '/placeholder.svg?height=300&width=300' },
  { id: '3', title: '星際旅程', imageUrl: '/placeholder.svg?height=300&width=300' },
  { id: '4', title: '數字花園', imageUrl: '/placeholder.svg?height=300&width=300' },
  { id: '5', title: '虛擬現實', imageUrl: '/placeholder.svg?height=300&width=300' },
  { id: '6', title: '量子夢境', imageUrl: '/placeholder.svg?height=300&width=300' },
]

export default function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">作品集</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork) => (
              <ArtworkCard key={artwork.id} {...artwork} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

