import { Institution } from "./Institution";
import { Artwork } from "../artwork/Artwork";
import prepareUrlForInstitution from "./prepareUrlForInstitution";

export const ArtInstituteOfChicago = () => {
    const urlStart = 'https://api.artic.edu/api/v1/artworks/search?q=';
    const urlEnd = '&limit=70&fields=id,title,image_id,color,artist_title';
    const apiUrl = prepareUrlForInstitution(urlStart, urlEnd);

    return (
        <Institution 
            isOpen = { true }
            institutionName = 'Art Institute Of Chicago'
        >
             <Artwork 
                source='https://www.artic.edu/iiif/2/276252ca-b499-5539-ea43-a7e58c8ea973/full/843,/0/default.jpg' 
                title='Halko' 
                author='Dominika' /> 
        </Institution>
    )
}