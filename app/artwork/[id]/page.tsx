import { Header } from '../../../components/header'
import { Footer } from '../../../components/footer'
import Image from 'next/image'

// 模擬的作品數據獲取函數
async function getArtwork(id: string) {
  // 在實際應用中，這裡應該從API或數據庫獲取數據
  return {
    id,
    title: '夢境漫遊',
    description: '這幅作品展現了人工智能對人類夢境的獨特詮釋。通過融合現實與幻想元素，創造出一個超現實的視覺體驗。',
    imageUrl: '/placeholder.svg?height=600&width=800',
    createdAt: '2023-05-15',
    aiModel: 'GPT-4 + DALL-E 2',
  }
}

export default async function ArtworkPage({ params }: { params: { id: string } }) {
  const artwork = await getArtwork(params.id)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">{artwork.title}</h1>
            <Image
              src={artwork.imageUrl}
              alt={artwork.title}
              width={800}
              height={600}
              className="rounded-lg shadow-xl mb-8"
            />
            <p className="text-lg mb-4">{artwork.description}</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong>創作日期：</strong> {artwork.createdAt}
              </div>
              <div>
                <strong>AI模型：</strong> {artwork.aiModel}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

