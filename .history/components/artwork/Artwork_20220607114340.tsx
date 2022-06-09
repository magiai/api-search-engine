import { ArtworkImage } from './ArtworkImage';
import artworkStyles from './artwork.module.css';

interface ArtworkProps {
    source: string;
    title?: string;
    author?: string;
}

export const Artwork = ({ source, title, author }: ArtworkProps) => {
    
    return (
        <figure className = { artworkStyles.figure }>
            <ArtworkImage 
                source = { source } 
                title = { title ? title : 'Title unknown' } 
                author = { author ? author : 'Author unknown' }
            />
            <ArtworkCaption 
                title = { title ? title : 'Title unknown' } 
                author = { author ? author : 'Author unknown' } 
            />
        </figure>
    )
}