/**
 * @jest-environment jsdom
 */

import { Profile } from '../src/pages/Profile/Profile';
import { render, screen } from '@testing-library/react';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: {
      name: 'John',
      surname: 'Doe',
      email: 'john@example.com',
      birthday: '1990-01-01T00:00:00.000Z'
    }
  }),
}));

describe('Profile', () => {
  beforeEach(() => {
    render(<Profile />);
  });

  test('renders the user data correctly', () => {
    screen.getByText('John Doe');
    screen.getByText('Birth Day:');
    screen.getByText('1990-01-01');
    screen.getByText('Email:');
    screen.getByText('john@example.com');
  });

});
