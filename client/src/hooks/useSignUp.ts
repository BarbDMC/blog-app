
import { useState } from 'react';
import axios from 'axios';
import { userSignUpInterface } from '../interfaces/userInterfaces';

export const useSignUp = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signUp = async (user: userSignUpInterface) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:3000/v1/signup', user);

      localStorage.setItem('token', response.data.token);
      setLoading(false);
      
      return response.data.user;
      
    } catch (err) {
      const axiosError = err as any;
      
      if (axiosError.response) {
        const errorData = axiosError.response.data.errors as any[];
        const errorMessage = errorData[0].message as string;
        
        setError(errorMessage);
        setLoading(false);
      }
      
    }
  };

  return { signUp, isLoading, error };
};
