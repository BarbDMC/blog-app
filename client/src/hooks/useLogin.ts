
import { useState } from 'react';
import axios, { AxiosError } from 'axios';

interface Error {
  message: string;
}

interface AxiosErrorData {
  errors: Error[];
}

export const useLogin = () => {
  const [isLoading, setLoading] = useState(false);
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
      
      return response.data.user;

    } catch (err) {
      const axiosError = err as AxiosError;
      
      if (axiosError.response) {
        const errorData = (axiosError.response.data as AxiosErrorData).errors;
        const errorMessage = errorData[0].message as string;

        setError(errorMessage);
      } else {
        setError('An unexpected error occurred. Please try again later.');
      }

    }
    finally {
      setLoading(false);
    }
  };

  return { login, isLoading, error };
};
