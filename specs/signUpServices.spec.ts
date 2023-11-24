
import { user } from './fixtures/users';
import { prismaTestContext } from './context/prismaContext';
import { mockPrismaClient, mockBcrypt } from './mocks/functionsMocks';
import { checkExistingUser, hashPassword } from '../src//services/signUpServices';

describe('Signup services', () => {
  describe('When checkExistingUser', () => {
    beforeAll(async () => {
      const db = await prismaTestContext().before();
      await db.user.create({data: user});
    });

    afterAll(async () => {
      await prismaTestContext().after();
    });
    
    it('should return true if the user exist', async () => {
      const userExist = await checkExistingUser('user@example.com', mockPrismaClient);
      expect(userExist).toBe(true);
    });

    it('should return false if the user does not exist', async () => {
      const userExist = await checkExistingUser('other@example.com', mockPrismaClient);
      expect(userExist).toBe(false);
    });
  });

  describe('When hashPassword', () => {
    it('should return a hashed password', async () => {
      const hashedPassword = await hashPassword('1234567', mockBcrypt);
      expect(hashedPassword).not.toBe('1234567');
    });
  });
});
