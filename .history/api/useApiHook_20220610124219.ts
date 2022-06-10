import { useState, useEffect } from 'react';

export type IApiResponse = {
  status: Number;
  statusText: String;
  data: any;
  error: any;
  loading: Boolean;
};

export const useApiGet = (institutionUrl: string): IApiResponse => {
  const [status, setStatus] = useState<Number>(0);
  const [statusText, setStatusText] = useState<String>('');
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  console.log(institutionUrl)

  //zmieniać state url
  const getApiData = async () => {
    setLoading(true);

    try {
      const apiResponse = await fetch(institutionUrl);
      console.log(apiResponse);
      const json = await apiResponse.json();
      setStatus(apiResponse.status);
      setStatusText(apiResponse.statusText);
      console.log(json)
      setData(json);
    } 
    catch (error) {
      setError(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    getApiData();
  }, [institutionUrl]);

  return { status, statusText, data, error, loading };
};