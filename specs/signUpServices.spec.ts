
import { user } from './fixtures/users';
import { prismaTestContext } from './context/prismaContext';
import { mockPrismaClient, mockBcrypt } from './mocks/functionsMocks';
import { checkExistingUser, createUser } from '../src//services/signUpServices';

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

  describe('When createUser', () => {
    it('should return a user', async () => {
      const userData = {
        email: 'test@example.com',
        password: 'password123',
        name: 'Test',
        surname: 'User',
        birthday: new Date('2000-01-01'),
      };
      
      const user = await createUser(userData, mockPrismaClient, mockBcrypt);

      expect(user).toBeDefined();
      expect(user).toHaveProperty('idUser');
    });
  });
});
