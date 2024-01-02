
import { useState } from 'react';
import Axios from 'axios';
import { userInterface } from 'src/interfaces/userInterface';

export const useSignUp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const signUp = async (user: userInterface) => {
    setLoading(true);
    setError(null);

    try {
      const response = await Axios.post('http://localhost:3000/v1/signup', user);

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

  return { signUp, loading, error };
}