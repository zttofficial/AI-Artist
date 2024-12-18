import Image from 'next/image'
import Link from 'next/link'

interface ArtworkCardProps {
  id: string
  title: string
  imageUrl: string
}

export function ArtworkCard({ id, title, imageUrl }: ArtworkCardProps) {
  return (
    <Link href={`/artwork/${id}`} className="group">
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={300}
          className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
          <h3 className="w-full p-4 text-lg font-semibold text-white">{title}</h3>
        </div>
      </div>
    </Link>
  )
}

