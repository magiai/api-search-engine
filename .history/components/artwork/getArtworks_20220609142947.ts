import { useState, useEffect } from "react";

export const useArtworksGet = (apiResponse, keyWordForData) => {
    const [artworks, setArtworks] = useState<Object>({});

    const getArtworks = async () => {
    
        try {
            const data = await apiResponse.data;
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