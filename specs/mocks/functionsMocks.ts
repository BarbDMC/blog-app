
import { User } from '@prisma/client';
import { user } from '../fixtures/users';
import { bcryptInterface } from '../../src/interfaces/bcryptInterface';
import { PrismaClientInterface } from '../../src/interfaces/prismaInterface';


export const mockPrismaClient: PrismaClientInterface = {
  user: {
    findUnique: async ({ where: { email } }): Promise<User | null> => {
      if (email === 'user@example.com') {
        return Promise.resolve(user);
      }
      return null;
    },
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
