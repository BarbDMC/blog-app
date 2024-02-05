
import { User } from '@prisma/client';
import { UserInterface } from '../interfaces/userInterface';
import { BcryptInterface } from '../interfaces/bcryptInterface';
import { PrismaClientInterface } from '../interfaces/prismaInterface';

export const checkExistingUser = async (email: string, prisma: PrismaClientInterface): Promise<boolean> => {
  const user = await prisma.user.findUnique({ where: { email } });
  const validation = user ? true : false;
  return validation;
};

export const hashPassword = async (password: string, bcrypt: BcryptInterface): Promise<string> => {
  return await bcrypt.hash(password, 10);
};

export const createUser = async (body: UserInterface, prisma: PrismaClientInterface, bcrypt: BcryptInterface): Promise<User> => {
  const { email, password, name, surname, birthday } = body;
  const hashedPassword = await hashPassword(password, bcrypt);

  const user = await prisma.user.create({
    data: { email, password: hashedPassword, name, surname, birthday }
  });

  return user;
};

