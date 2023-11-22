
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';
import { checkUser, checkPassword, generateToken } from '../services/loginServices';

const router = express.Router();

router.post('/login', async (req: Request, res: Response) => {
  const prismaClient = new PrismaClient();
  const { email, password } = req.body;

  const user = await checkUser(email, prismaClient);

  if (!user) {
    return res.status(400).send('User not found');
  }

  const isPasswordValid = await checkPassword(password, user.password, bcrypt);

  if (!isPasswordValid) {
    return res.status(400).send('Wrong user or password');
  }

  const token = generateToken(user.email);
  return res.status(200).json({ message: 'Login successful', token});
});

export default router;
