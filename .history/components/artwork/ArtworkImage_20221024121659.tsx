import Image from 'next/image'

interface ArtworkImageProps {
    priority: boolean
    source: string
    title: string
    author: string
}

export const ArtworkImage = ({ priority, source, title, author }: ArtworkImageProps) => {
    return (
        <Image
            priority = { priority }
            quality = { 100 }
            src = { source }
            alt = {`${ title } by ${ author }`}
            layout="fill"
            height="640px"
            width="400px"
            // sizes="(max-width: 768px) 380px, 640px"
        />
    )
} 