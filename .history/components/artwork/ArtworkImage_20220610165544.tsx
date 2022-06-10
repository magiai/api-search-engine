import Image from 'next/image';

interface ArtworkImageProps {
    loading: string;
    source: string;
    title: string;
    author: string;
}

export const ArtworkImage = ({ loading, source, title, author }: ArtworkImageProps) => {
    return (
        <Image
            loading = { loading }
            src = { source }
            alt = {`${ title } by ${ author }`}
            height = { 350 }
            width = { 350 }
        />
    )
} 