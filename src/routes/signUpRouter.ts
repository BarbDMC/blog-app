
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';
import { checkExistingUser, createUser } from '../services/signUpServices';

const router = express.Router();

router.post('/signup', async (req: Request, res: Response) => {
  const prismaClient = new PrismaClient();
  const { email } = req.body;

  try {
    const existingUser = await checkExistingUser(email, prismaClient);

    if (existingUser) {
      return res.status(400).send('Email already in use.');
    }

    await createUser(req.body, prismaClient, bcrypt);

    res.status(201).send('User created.');

  } catch (error) {
    res.status(500).send('Something went wrong.');
  }
});

export default router;
