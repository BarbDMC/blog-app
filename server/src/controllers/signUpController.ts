
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { checkExistingUser, createUser } from '../services/signUpServices';
import { validateUser } from '../validators/usersValidator';
import { generateToken } from '../services/loginServices';


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

    const newUser = await createUser(req.body, prismaClient, bcrypt);

    const token = generateToken(newUser.email);

    res.status(201).json(
      {
        message: 'User created.', 
        token,
        user: {
          name: newUser.name,
          middleName: newUser.middleName,
          surname: newUser.surname,
          secondSurname: newUser.secondSurname,
          email: newUser.email,
          birthday: newUser.birthday,
        }
      }
    );

  } catch (error) {
    res.status(500).send('Something went wrong.');
  }
};
