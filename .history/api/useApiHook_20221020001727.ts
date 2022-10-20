import { useState, useEffect } from 'react';

export type IApiResponse = {
  status: Number
  statusText: String
  data: any
  error: any
}

export const useApi = (institutionUrl: string): IApiResponse => {
    const [status, setStatus] = useState<Number>(0)
    const [statusText, setStatusText] = useState<String>('')
    const [data, setData] = useState<any>()
    const [error, setError] = useState<any>()

    const getApiData = async () => {

        try {
            const apiResponse = await fetch(institutionUrl)
            const json = await apiResponse.json()
            console.log(apiResponse)
            setStatus(apiResponse.status)
            setStatusText(apiResponse.statusText)
            setData(json)
        } 
        catch (error) {
            setError(error)
        }
    };

    useEffect(() => {
        getApiData()
    }, [institutionUrl])

    return { status, statusText, data, error }
};