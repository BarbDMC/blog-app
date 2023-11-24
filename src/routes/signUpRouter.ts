
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';
import { checkExistingUser, createUser } from '../services/signUpServices';
import { validateUser } from '../validators/usersValidator';

const router = express.Router();

router.post('/signup', async (req: Request, res: Response) => {
  const prismaClient = new PrismaClient();
  const { email } = req.body;

  try {
    const validationResult = validateUser(req.body);
    const existingUser = await checkExistingUser(email, prismaClient);

    if (!validationResult.valid) {
      return res.status(400).json({ errors: validationResult.errors });
    }

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
