import { ArtworkImage } from './ArtworkImage';
import { ArtworkCaption } from './ArtworkCaption';
import artworkStyles from './artwork.module.css';

interface IArtworkProps {
    priority: boolean;
    source: string;
    title?: string;
    author?: string;
}

export const Artwork = ({ 
    priority,
    source, 
    title, 
    author 
}: IArtworkProps): JSX.Element => {
    
    return (
        <figure className = { artworkStyles.figure }>
            <ArtworkImage
                priority = { priority } 
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