
import axios, {AxiosError} from 'axios';
import { useState } from 'react';

export const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:3000/v1/login', {
        email,
        password
      });

      console.log("🚀 ~ file: useLogin.ts:20 ~ login ~ response:", response)
      localStorage.setItem('token', response.data.token);
      setLoading(false);

    } catch (err) {
      const axiosError = err as AxiosError;
      
      if (axiosError.response) {
        const errorMessage = axiosError.response.data as any;
        setError(errorMessage.message);
        setLoading(false);
      }
      
    }
  }

  return { login, loading, error };
}