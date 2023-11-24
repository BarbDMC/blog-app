
import { bcryptInterface } from '../interfaces/bcryptInterface';
import { PrismaClientInterface } from '../interfaces/prismaInterface';

export const checkExistingUser = async (email: string, prisma: PrismaClientInterface): Promise<boolean> => {
  const user = await prisma.user.findUnique({ where: { email } });
  const validation = user ? true : false;
  return validation;
};

export const hashPassword = async (password: string, bcrypt: bcryptInterface): Promise<string> => {
  return await bcrypt.hash(password, 10);
};


