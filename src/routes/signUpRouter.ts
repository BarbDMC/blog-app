
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';
import { checkExistingUser, hashPassword } from '../services/signUpServices';

const router = express.Router();

router.post('/signup', async (req: Request, res: Response) => {
  const prismaClient = new PrismaClient();
  const { email, password, name, surname, birthday } = req.body;

  try {
    const existingUser = await checkExistingUser(email, prismaClient);

    if (existingUser) {
      return res.status(400).send('Email already in use.');
    }

    const hashedPassword = await hashPassword(password, bcrypt);

    const user = await prismaClient.user.create({
      data: { email, password: hashedPassword, name, surname, birthday }
    }); //refactor this and use a service

    res.status(201).send('User created.');

  } catch (error) {
    res.status(500).send('Something went wrong.');
  }
});

export default router;
