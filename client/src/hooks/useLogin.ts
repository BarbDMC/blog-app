
import axios from 'axios';
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

      localStorage.setItem('token', response.data.token);
      setLoading(false);

    } catch (err) {
      const axiosError = err as any;
      
      if (axiosError.response) {
        const errorData = axiosError.response.data.errors as any[];
        const errorMessage = errorData[0].message as string;

        setError(errorMessage);
        setLoading(false);
      }
      
    }
  }

  return { login, loading, error };
}