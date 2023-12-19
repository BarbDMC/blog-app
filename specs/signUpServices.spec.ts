
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
    
    it('returns true if the user exist', async () => {
      const userExist = await checkExistingUser('user@example.com', mockPrismaClient);
      expect(userExist).toBe(true);
    });

    it('returns false if the user does not exist', async () => {
      const userExist = await checkExistingUser('other@example.com', mockPrismaClient);
      expect(userExist).toBe(false);
    });
  });

  describe('When createUser', () => {
    it('returns a user', async () => {
      const userData = {
        email: 'test@example.com',
        password: 'password123',
        name: 'Test',
        surname: 'User',
        birthday: '2000-01-01',
      };
      
      const user = await createUser(userData, mockPrismaClient, mockBcrypt);

      expect(user).toBeDefined();
      expect(user).toHaveProperty('idUser');
    });
  });
});
