
import { User } from '@prisma/client';
import { userInterface } from '../interfaces/userInterface';
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

export const createUser = async (body: userInterface, prisma: PrismaClientInterface, bcrypt: bcryptInterface): Promise<User> => {
  const { email, password, name, surname, birthday } = body;
  const hashedPassword = await hashPassword(password, bcrypt);

  const user = await prisma.user.create({
    data: { email, password: hashedPassword, name, surname, birthday }
  });

  return user;
};

