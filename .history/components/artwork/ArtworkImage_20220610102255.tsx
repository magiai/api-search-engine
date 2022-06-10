import Image from 'next/image';

interface ArtworkImageProps {
    source: string;
    title: string;
    author: string;
}

export const ArtworkImage = ({ source, title, author }: ArtworkImageProps) => {
    return (
        <Image
            src = { source }
            alt = {`${ title } by ${ author }`}
            height = { 500 }
            width = { 300 }
        />
    )
} 