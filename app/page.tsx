import { Navigation } from '../components/navigation'
import { ScrollTransition } from '../components/scroll-transition'
import { CodeBlock } from '../components/code-block'
import { Tooltip } from '../components/tooltip'
import Image from 'next/image'

const works = [
  {
    id: 'hanyun-studio',
    title: 'Hanyun Studio',
    year: '2024',
    description: 'AI ARTIST, CREATIVE TECHNOLOGIST',
    medium: 'Digital Art Studio',
    imageUrl: '/placeholder.svg?height=800&width=800'
  },
  {
    id: 'digital-canvas',
    title: 'Digital Canvas: A Living Artwork',
    year: '2024.12',
    description: '這個網站本身就是一件持續進行的概念藝術作品，探索程式碼與藝術創作的邊界。每一行代碼都是一次藝術表達，每個函數都是一個藝術聲明。',
    codeBlock: `const artwork = {
  medium: "程式碼",
  concept: "解構數字空間",
  execution: async () => {
    await Promise.all([
      breakConventions(),
      challengePerceptions(),
      createBeauty()
    ])
  }
}`,
    description2: '從部署記錄可見，這件作品在持續演化：\n"v0-ai-artist-portfolio-hnjsvginjd3-opocwieto.vercel.app"\n\n當觀眾與網站互動時，他們不僅是在瀏覽一個數字畫廊，更是在參與一場關於藝術本質的對話。每次滾動、每次點擊，都在重新定義什麼是當代藝術：',
    codeBlock2: `function ArtisticInteraction({ viewer, artwork }) {
  const [perception, setPerception] = useState("conventional")
  
  useEffect(() => {
    const experience = new ArtExperience({
      space: "digital",
      time: "continuous",
      medium: "code"
    })
    
    experience.transform(perception)
  }, [perception])
  
  return <ArtisticManifestation />
}`,
    description3: '這是一個活的藝術品，它的生命週期從部署開始，卻永遠不會結束。它挑戰了傳統藝術的靜態本質，通過代碼創造了一個永恆演變的藝術空間。',
    medium: 'Next.js, Framer Motion, TypeScript, 概念藝術',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UAIyQaJ2tg75IBudFxlWzuA4D6PcWB.png'
  },
  {
    id: 'urban-metamorphosis',
    title: '都市蛻變',
    year: '2024.12',
    description: '一場關於城市演化的視覺冥想。在這件作品中，傳統建築與現代結構相互交織，形成一個超越時空的建築詩篇。懸浮的古亭閣與幾何形態的現代建築在畫面中共生，而頂端的老樹則象徵著永恆的生命力，見證著城市的形態變遷。',
    medium: 'AI生成圖像',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/An%20abstract%20artwork%20representing%20\'urban%20growth,\'%20deconstructing%20modern%20concrete%20and%20steel%20architecture%20into%20fluid,%20fragmented%20shapes.%20Incorporate%20trad.png-YVHOaG34Pf2rrqRkNejbKL95NRGpqS.webp'
  },
  {
    id: 'pandemic-declaration',
    title: 'The Moment of Declaration',
    year: '2024.03',
    description: '這件NFT作品捕捉了一個改變世界的歷史性時刻：世界衛生組織宣布新冠病毒爆發為全球大流行病的那一刻。作品以簡潔的視覺語言，將這條改變人類歷史進程的推文永久保存在區塊鏈上。紫色漸變的背景象徵著這一時刻的莊嚴與深遠影響，而白色的襯線字體則強調了信息本身的重量與歷史意義。',
    medium: 'NFT, 數字藝術',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NFT_iBreaking.jpg-s4gTxmVed5R1Ycls4Lcvo9j7wbLf4L.jpeg'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-studio-bg text-studio-text">
      <Navigation />
      
      <main>
        {works.map((work, index) => (
          <section key={work.id} className={`py-32 px-8 ${index % 2 === 0 ? 'bg-white' : 'bg-black text-white'}`}>
            <div className="max-w-screen-xl mx-auto">
              <ScrollTransition>
                {work.id === 'hanyun-studio' ? (
                  <div className="text-center">
                    <h1 className="font-serif text-7xl md:text-9xl mb-4">
                      {work.title}
                    </h1>
                    <p className="font-mono text-xl mb-8">
                      {work.description}
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="aspect-square relative mb-8 w-full max-w-2xl">
                      <Image
                        src={work.imageUrl}
                        alt={work.title}
                        layout="fill"
                        objectFit="cover"
                        className="hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                    <Tooltip
                      content={
                        <div className="font-sans">
                          <p className="mb-4 text-sm leading-relaxed">{work.description}</p>
                          {work.codeBlock && <CodeBlock>{work.codeBlock}</CodeBlock>}
                          {work.description2 && <p className="mb-4 text-sm leading-relaxed">{work.description2}</p>}
                          {work.codeBlock2 && <CodeBlock>{work.codeBlock2}</CodeBlock>}
                          {work.description3 && <p className="text-sm leading-relaxed">{work.description3}</p>}
                        </div>
                      }
                      isDarkBackground={index % 2 === 0}
                    >
                      <div className="text-center cursor-pointer group">
                        <h2 className="font-serif text-3xl mb-2 group-hover:text-studio-accent transition-colors">{work.title}</h2>
                        <p className="font-mono text-sm mb-1">{work.year}</p>
                        <p className="font-mono text-sm">Medium: {work.medium}</p>
                      </div>
                    </Tooltip>
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
  )
}

