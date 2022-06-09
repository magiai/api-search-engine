interface ArtworkCaptionProps {
    title: string;
    author: string;
}

export const ArtworkCaption = ({ title, author }: ArtworkCaptionProps) => {
    return (
        <figcaption>
            { title } by { author }
        </figcaption>
    )
} 