interface IArtworkCaptionProps {
    title: string
    author: string
}

export const ArtworkCaption = ({ title, author }: IArtworkCaptionProps) => {
    return (
        <figcaption>
            { title } by { author }
        </figcaption>
    )
} 