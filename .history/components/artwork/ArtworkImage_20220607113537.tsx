import Image form 'next/image';

interface ArtworkImageProps {
    source: string;
    title?: string;
    author?: string;
}

export const ArtworkImage = ({ source, title, author }: ArtworkImageProps) => {
    <Image />
} 