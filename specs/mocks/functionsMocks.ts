
import { User } from '@prisma/client';
import { user } from '../fixtures/users';
import { bcryptInterface } from '../../src/interfaces/bcryptInterface';
import { PrismaClientInterface } from '../../src/interfaces/prismaInterface';


export const mockPrismaClient: PrismaClientInterface = {
  user: {
    findUnique: async ({ where: { email } }): Promise<User | null> => 
      email === 'user@example.com' ? Promise.resolve(user) : null,
    create: async (): Promise<User> => {
      return Promise.resolve(user);
    }
  }
};

export const mockBcrypt: bcryptInterface = {
  compare: async (password): Promise<boolean> => {
    if (password === '1234567') {
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  },
  hash: async (): Promise<string> => {
    return Promise.resolve('hashPassword');
  }
};
