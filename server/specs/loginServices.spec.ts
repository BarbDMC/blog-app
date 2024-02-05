
import { mockPrismaClient } from './mocks/functionsMocks';
import {checkUser} from '../src/services/loginServices';

describe('Login Services', () => {
  describe('When checkUser', () => {
    it('returns an user if find one', async () => {
      const user = await checkUser('user@example.com', mockPrismaClient);
      expect(user?.email).toBe('user@example.com');
    });

    it('returns null if the user is not found', async () => {
      const user = await checkUser('otherexample@email.com', mockPrismaClient);
      expect(user).toBeNull();
    });
  });
});
