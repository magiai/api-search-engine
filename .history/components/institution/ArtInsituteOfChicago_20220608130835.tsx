import { Institution } from "./Institution";
import { Artwork } from "../artwork/Artwork";
import { useAppSelector } from "../../app/hooks";
import { selectSearch } from "../search/searchSlice";

export const ArtInstituteOfChicago = () => {
    const searchedPhrase = useAppSelector(selectSearch);
    console.log(searchedPhrase)

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