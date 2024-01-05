
import { useState } from 'react';
import Axios from 'axios';
import { userSignUpInterface } from 'src/interfaces/userInterfaces';

export const useSignUp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const signUp = async (user: userSignUpInterface) => {
    setLoading(true);
    setError(null);

    try {
      const response = await Axios.post('http://localhost:3000/v1/signup', user);

      localStorage.setItem('token', response.data.token);
      setLoading(false);
      
      console.log("🚀 ~ file: useSignUp.ts:34 ~ signUp ~ response:", response)
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
  }

  return { signUp, loading, error };
}