import { useState, useEffect, useMemo } from 'react';

export type IApiResponse = {
  status: Number;
  statusText: String;
  data: any;
  error: any;
//   loading: Boolean;
};

export const useApiGet = (institutionUrl: string): IApiResponse => {
    const [status, setStatus] = useState<Number>(0);
    const [statusText, setStatusText] = useState<String>('');
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    // const [loading, setLoading] = useState<boolean>(false);

    const getApiData = async () => {
        // setLoading(true);

        try {
            const apiResponse = await fetch(institutionUrl);
            const json = await apiResponse.json();
            setStatus(apiResponse.status);
            setStatusText(apiResponse.statusText);
            setData(json);
        } 
        catch (error) {
            setError(error);
        }

        // setLoading(false);
    };

    useMemo(() => {
        getApiData();
    }, [institutionUrl]);

    return { status, statusText, data, error };
};