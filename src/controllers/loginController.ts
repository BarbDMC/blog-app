
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { validateUserLogin } from '../validators/usersValidator';
import { checkUser, checkPassword, generateToken } from '../services/loginServices';

export const userLogin = async (req: Request, res: Response) => {
  const prismaClient = new PrismaClient();
  const validationResult = validateUserLogin(req.body);
  
  if (!validationResult.valid) {
    return res.status(400).json({ errors: validationResult.errors });
  }
  
  const { email, password } = req.body;
  const user = await checkUser(email, prismaClient);

  if (!user) {
    return res.status(404).send('User not found');
  }

  const isPasswordValid = await checkPassword(password, user.password, bcrypt);

  if (!isPasswordValid) {
    return res.status(400).send('Wrong user or password');
  }

  const token = generateToken(user.email);
  return res.status(200).json({ message: 'Login successful', token});
};
