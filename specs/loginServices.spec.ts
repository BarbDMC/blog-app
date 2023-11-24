
import { mockPrismaClient, mockBcrypt } from './mocks/functionsMocks';
import {checkUser, checkPassword} from '../src/services/loginServices';

describe('Login Services', () => {
  describe('When checkUser', () => {
    it('should return an user if find one', async () => {
      const user = await checkUser('user@example.com', mockPrismaClient);
      expect(user?.name).toBe('User');
      expect(user?.email).toBe('user@example.com');
    });

    it('should return null if not find one', async () => {
      const user = await checkUser('otherexample@email.com', mockPrismaClient);
      expect(user).toBeNull();
    });
  });

  describe('When checkPassword', () => {
    it('should return false if password is not rigth', async () => {
      const isPassword = await checkPassword('wrongPassword', '1234567', mockBcrypt);
      expect(isPassword).toBeFalsy();
    });

    it('should return true status if password is rigth', async () => {
      const isPassword = await checkPassword('1234567', '1234567', mockBcrypt);
      expect(isPassword).toBe(true);
      
    });
  });
});
