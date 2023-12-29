
import { useState } from 'react';
import Axios, { AxiosResponse } from 'axios';
import { userInterface } from 'src/interfaces/userInterface';

export const useSignUp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const signUp = async (user: userInterface) => {
    setLoading(true);
    setError(null);

    try {
      const response = await Axios.post('http://localhost:3000/v1/signup', user);

      console.log("🚀 ~ file: useSignUp.ts:20 ~ signUp ~ response", response)
      localStorage.setItem('token', response.data.token);
      setLoading(false);

    } catch (err) {
      const axiosError = err as any;
      
      if (axiosError.response) {
        console.log("🚀 ~ file: useSignUp.ts:26 ~ signUp ~ axiosError:", axiosError)
        const errorData = axiosError.response.data as any[];
        const errorMessage = errorData[0].message as string;
        
        setError(errorMessage);
        setLoading(false);
      }
      
    }
  }

  return { signUp, loading, error };
}