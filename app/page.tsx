import { motion } from 'framer-motion'
import { Navigation } from '../components/navigation'
import { ScrollTransition } from '../components/scroll-transition'
import Link from 'next/link'
import Image from 'next/image'

const works = [
  {
    id: 'urban-metamorphosis',
    title: '都市蛻變',
    year: '2024',
    description: '一場關於城市演化的視覺冥想。在這件作品中，傳統建築與現代結構相互交織，形成一個超越時空的建築詩篇。懸浮的古亭閣與幾何形態的現代建築在畫面中共生，而頂端的老樹則象徵著永恆的生命力，見證著城市的形態變遷。',
    medium: 'AI生成圖像',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/An%20abstract%20artwork%20representing%20\'urban%20growth,\'%20deconstructing%20modern%20concrete%20and%20steel%20architecture%20into%20fluid,%20fragmented%20shapes.%20Incorporate%20trad.png-YVHOaG34Pf2rrqRkNejbKL95NRGpqS.webp'
  },
  {
    id: 'digital-canvas',
    title: 'Digital Canvas: A Living Artwork',
    year: '2024',
    description: `這個網站本身就是一件持續進行的概念藝術作品，探索程式碼與藝術創作的邊界。每一行代碼都是一次藝術表達，每個函數都是一個藝術聲明。

    const artwork = {
      medium: "程式碼",
      concept: "解構數字空間",
      execution: async () => {
        await Promise.all([
          breakConventions(),
          challengePerceptions(),
          createBeauty()
        ])
      }
    }

    從部署記錄可見，這件作品在持續演化：
    "v0-ai-artist-portfolio-hnjsvginjd3-opocwieto.vercel.app"
    
    當觀眾與網站互動時，他們不僅是在瀏覽一個數字畫廊，更是在參與一場關於藝術本質的對話。每次滾動、每次點擊，都在重新定義什麼是當代藝術：

    function ArtisticInteraction({ viewer, artwork }) {
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
    }

    這是一個活的藝術品，它的生命週期從部署開始，卻永遠不會結束。它挑戰了傳統藝術的靜態本質，通過代碼創造了一個永恆演變的藝術空間。`,
    medium: 'Next.js, Framer Motion, TypeScript, 概念藝術',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UAIyQaJ2tg75IBudFxlWzuA4D6PcWB.png'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-studio-bg text-studio-text">
      <Navigation />
      
      <main className="pt-32 px-8">
        <div className="max-w-screen-xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-7xl md:text-9xl text-center mb-4"
          >
            HANYUN STUDIO
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-mono text-center mb-32"
          >
            (AI ARTIST, CREATIVE TECHNOLOGIST)
          </motion.p>

          <div className="grid grid-cols-1 gap-32">
            {works.map((work) => (
              <ScrollTransition key={work.id}>
                <section className="scroll-mt-32" id={work.id}>
                  <div className="aspect-square relative mb-8">
                    <Image
                      src={work.imageUrl}
                      alt={work.title}
                      layout="fill"
                      objectFit="cover"
                      className="hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                  <div className="max-w-2xl mx-auto">
                    <div className="font-mono mb-4">
                      {work.title}, {work.year}
                    </div>
                    <div className="font-serif text-lg mb-4 leading-relaxed whitespace-pre-wrap">
                      {work.description}
                    </div>
                    <div className="font-mono text-sm">
                      Medium: {work.medium}
                    </div>
                  </div>
                </section>
              </ScrollTransition>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-32 px-8">
        <div className="max-w-screen-xl mx-auto font-mono text-sm text-center">
          © 2024 Hanyun Studio
        </div>
      </footer>
    </div>
  )
}

