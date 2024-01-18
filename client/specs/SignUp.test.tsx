/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent, waitFor, renderHook } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';

import { SignUp } from '../src/pages/SignUp/SignUp';
import { useSignUp } from '../src/hooks/useSignUp';


describe('SignUp', () => {
  beforeEach(() => {
    render(<Router><SignUp /></Router>);
  });

  test('renders the form with all required elements', () => {
    screen.getByText('Name');
    screen.getByText('Middle Name');
    screen.getByText('Surname');
    screen.getByText('Second Surname');
    screen.getByText('Your Birth Day');
    screen.getByText('Your email');
    screen.getByText('Password');

    screen.getByRole('button', { name: /Create an account/i });
  });

  test('submits the form with valid data and redirects to /profile', async () => {
    const { result } = renderHook(useSignUp);
    const { signUp } = result.current;
    console.log("🚀 ~ test ~ result:", result)
    
    userEvent.type(screen.getByText('Name'), 'John');
    userEvent.type(screen.getByText('Surname'), 'Doe');
    userEvent.type(screen.getByText('Your email'), 'test@email.com');
    userEvent.type(screen.getByText('Your Birth Day'), '2000-09-30');
    userEvent.type(screen.getByText('Password'), '12345678');


    fireEvent.click(screen.getByRole('button', { name: /Create an account/i }));

    await waitFor(() => {
      expect(signUp).toHaveBeenCalledTimes(1);
      expect(signUp).toHaveBeenCalledWith({
        name: 'John',
        surname: 'Doe',
        email: 'test@email.com',
        birthday: '2000-09-30',
        password: '12345678',
      });
      
      // expect(navigateMock).toHaveBeenCalledTimes(1);
      // expect(navigateMock).toHaveBeenCalledWith('/profile');
    });
  });
});
