
import jwt from 'jsonwebtoken';
import { User } from "@prisma/client";
import { bcryptInterface } from '../interfaces/bcryptInterface';
import { PrismaClientInterface } from '../interfaces/prismaInterface';

export const checkUser = async (email: string, prisma: PrismaClientInterface): Promise<User | null> => {
  return await prisma.user.findUnique({ where: { email } });
};

export const checkPassword = async (password: string, hashedPassword: string, bcrypt: bcryptInterface): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

export const generateToken = (email: string): string => {
  const payload = {
    email: email,
  };
  
  const secretKey = process.env.TOKEN_SECRET as string;
  return jwt.sign(payload, secretKey, { expiresIn: '10800s' });
};
