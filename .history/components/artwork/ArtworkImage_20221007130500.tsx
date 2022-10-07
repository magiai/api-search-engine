import Image from 'next/image';

interface ArtworkImageProps {
    priority: boolean;
    source: string;
    title: string;
    author: string;
}

export const ArtworkImage = ({ priority, source, title, author }: ArtworkImageProps) => {
    return (
        <Image
            priority = { priority }
            quality = { 100 }
            src = { source }
            alt = {`${ title } by ${ author }`}
            layout="fill"
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            placeholder='blur'
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(400, 400))}`}
            // height = { 400 }
            // width = { 400 }
        />
    )
} 