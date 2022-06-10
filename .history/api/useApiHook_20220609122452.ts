import { useEffect, useState } from 'react';

export interface IApiResponse {
    status: number,
    statusText: string, 
    data: any,
    error: any,
    loading: boolean,
}

export const useApiGet = (institutionUrl: string): IApiResponse => {
    const [status, setStatus] = useState<number>(0);
    const [statusText, setStatusText] = useState<string>('');
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    const getApiData = async() => {
        setLoading(true);

        try {
            const apiResponse = await fetch(institutionUrl);
            const json = await apiResponse.json();
            console.log(json)
            setStatus(apiResponse.status);
            setStatusText(apiResponse.statusText);
            setData(json);
        }
        catch (error) {
            setError(error);
        }
    };
    
    useEffect(() => {
        getApiData();
    }, []);
    
    return { status, statusText, data, error, loading };
}

