
import { User } from '@prisma/client';
import { user } from './fixtures/user';
import { bcryptInterface } from '../src/interfaces/bcryptInterface';
import {checkUser, checkPassword} from '../src/services/loginServices';
import { PrismaClientInterface } from '../src/interfaces/prismaInterface';

describe('Login Services', () => {

  const mockPrismaClient: PrismaClientInterface = {
    user: {
      findUnique: async ({ where: { email } }): Promise<User | null> => {
        if (email === 'user@example.com') {
          return Promise.resolve(user);
        }
        return null;
      }
    }
  };

  const mockBcrypt: bcryptInterface = {
    compare: async (password): Promise<boolean> => {
      if (password === '1234567') {
        return Promise.resolve(true);
      }
      return Promise.resolve(false);
    }
  };


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
