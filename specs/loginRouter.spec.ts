
import express from 'express';
import request from 'supertest';
import { user } from './fixtures/user';
import router from '../src/routes/loginRouter';
import { prismaTestContext } from './context/prismaContext';

const app = express();
app.use(express.json());
app.use(router);

describe('When Login', () => {
  beforeEach(async () => {
    const db = await prismaTestContext().before();
    await db.user.create({data: user});
  });

  afterEach(async () => {
    await prismaTestContext().after();
  });


  it('Should login with valid credentials', async () => {
    const response = await request(app)
      .post('/login')
      .send({ email: 'user@example.com', password: '123456' });

    expect(response.statusCode).toBe(200);
    expect(response.body.token).toBeDefined();
  });

  it('should response status 400 if user does not exists', async () => {
    const response = await request(app)
      .post('/login')
      .send({ email: 'otheruser@example.com', password: 'other' });

    expect(response.statusCode).toBe(400);
    expect(response.text).toBe('User not found');
  });

  it('Should response status 400 with invalid credentials', async () => {
    const response = await request(app)
      .post('/login')
      .send({ email: 'user@example.com', password: 'wrongpassword' });

    expect(response.statusCode).toBe(400);
    expect(response.text).toBe('Wrong user or password');
  });
});
