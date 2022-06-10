import { useState } from 'react';

export interface IApiResponse = {
    status: Number;
    statusText: String; 
    data: any;
    error: any;
    loading: Boolean;
}

export const useApiGet = (url: string): IApiResponse => {
    const [staus, setStatus] = useState<Number>(0);
    
}

