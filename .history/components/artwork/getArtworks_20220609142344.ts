import { useState, useEffect } from "react";

export const useArtworkGet = () => {
    const [artworks, setArtworks] = useState<Object>({});

    const getArtworks = async () => {
    
        try {
            const data = await apiResponse.data;
            const artworksList = await data['data'];
            setArtworks(artworks);
        }
        catch (error) {
            console.log(error);
        }
    
        useEffect(() => {
            getArtworks();
        }, []);
    
    }
}