
import express from 'express';
import request from 'supertest';
import { user2, newUser } from './fixtures/users';
import router from '../src/routes/signUpRouter';
import { prismaTestContext } from './context/prismaContext';

const app = express();
app.use(express.json());
app.use(router);

describe('When Signup', () => {
  beforeEach(async () => {
    const db = await prismaTestContext().before();
    await db.user.create({data: user2});
  });

  afterEach(async () => {
    await prismaTestContext().after();
  });

  it('should return 201 status if register with a non existing user', async () => {
    const response = await request(app)
      .post('/signup')
      .send(newUser);

    expect(response.statusCode).toBe(201);
  });

  it('should return 400 status if register with a existing user', async () => {
    const response = await request(app)
      .post('/signup')
      .send(user2);

    expect(response.statusCode).toBe(400);
  });

  it('should return 400 status if register with a invalid data', async () => {
    const response = await request(app)
      .post('/signup')
      .send({});

    expect(response.statusCode).toBe(400);
  });
});
