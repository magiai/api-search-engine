import Image from 'next/image';

interface ArtworkImageProps {
    loading: any;
    source: string;
    title: string;
    author: string;
}

export const ArtworkImage = ({ loading, source, title, author }: ArtworkImageProps) => {
    return (
        <Image
            loading = { loading }
            quality = { 100 }
            src = { source }
            alt = {`${ title } by ${ author }`}
            height = { 350 }
            width = { 350 }
        />
    )
} 