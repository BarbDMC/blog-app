
import { validateUser } from '../src/validators/usersValidator';
import { userInterface } from '../src/interfaces/userInterface';

describe('validateUser', () => {
  const user = {
    email: 'test@example.com',
    password: 'strongpassword',
    name: 'John',
    surname: 'Doe',
    birthday: '1990-01-01T00:00:00.000Z'
  };

  it('returns true if the user object is correct', () => {
    const result = validateUser(user);
    expect(result.valid).toBe(true);
  });

  it('returns false if the user object has missing fields', () => {
    const wrongUser = {
      email: 'test@example.com',
      password: 'strongpassword',
    } as userInterface;

    const result = validateUser(wrongUser);
    expect(result.valid).toBe(false);
  });

  it('returns false if the user object has invalid email format', () => {
    user.email = 'invalid-email';

    const result = validateUser(user);
    expect(result.valid).toBe(false);
  });

  it('returns false if the user\'s password does not have the minimum length', () => {
    user.password = '123';

    const result = validateUser(user);
    expect(result.valid).toBe(false);
  });

});
