
import { mockPrismaClient } from './mocks/functionsMocks';
import {checkUser} from '../src/services/loginServices';

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
});
