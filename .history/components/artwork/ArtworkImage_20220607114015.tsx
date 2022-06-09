import Image from 'next/image';

interface ArtworkImageProps {
    source: string;
    title: string;
    author: string;
}

export default function ArtworkImage({ source, title, author }: ArtworkImageProps) {
    <Image
        src = { source }
        alt = {`${ title } by ${ author }`}
     />
} 