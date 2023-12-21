
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { checkExistingUser, createUser } from '../services/signUpServices';
import { validateUser } from '../validators/usersValidator';


export const userSignUp = async (req: Request, res: Response) => {
  const prismaClient = new PrismaClient();
  
  try {
    const validationResult = validateUser(req.body);
    
    if (!validationResult.valid) {
      return res.status(400).json({ errors: validationResult.errors });
    }

    const { email } = req.body;
    const existingUser = await checkExistingUser(email, prismaClient);
    
    if (existingUser) {
      return res.status(400).send('Email already in use.');
    }

    await createUser(req.body, prismaClient, bcrypt);

    res.status(201).send('User created.');

  } catch (error) {
    res.status(500).send('Something went wrong.');
  }
};
