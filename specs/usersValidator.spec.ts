
import { validateUser } from '../src/validators/usersValidator';
import { userInterface } from '../src/interfaces/userInterface';

describe('validateUser', () => {
  const user = {
    email: 'test@example.com',
    password: 'strongpassword',
    name: 'John',
    surname: 'Doe',
    birthday: new Date('1990-01-01')
  };

  it('should validate a correct user object', () => {
    const result = validateUser(user);
    expect(result.valid).toBe(true);
  });

  it('should invalidate an user object with missing fields', () => {
    const wrongUser = {
      email: 'test@example.com',
      password: 'strongpassword',
    } as userInterface;

    const result = validateUser(wrongUser);
    expect(result.valid).toBe(false);
  });

  it('should invalidate an user object with invalid email format', () => {
    user.email = 'invalid-email';

    const result = validateUser(user);
    expect(result.valid).toBe(false);
  });

  it('should invalidate an user object if password does not have the minimum length', () => {
    user.password = '123';

    const result = validateUser(user);
    expect(result.valid).toBe(false);
  });

});
