import { useState, useEffect } from "react";

export const useArtworksGet = (apiResponse, keyWordForData) => {
    const [artworks, setArtworks] = useState<Object>({});

    const getArtworks = async () => {
        console.log('halko 2')
        try {
            const data = await apiResponse.data;
            console.log(data)
            const artworksList = await data[keyWordForData];
            setArtworks(artworksList);
        }
        catch (error) {
            console.log(error);
        }
    
        useEffect(() => {
            getArtworks();
        }, []);

        return artworks;
    }
}