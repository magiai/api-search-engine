import { useState } from 'react';

export interface IApiResponse {
    status: number,
    statusText: string, 
    data: any,
    error: any,
    loading: boolean,
}

export const useApiGet = (url: string): IApiResponse => {
    const [staus, setStatus] = useState<number>(0);
    
}

