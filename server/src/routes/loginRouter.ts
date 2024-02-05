
import { Router } from 'express';
import { userLogin } from '../controllers/loginController';

const loginRoutes = Router();

loginRoutes.post('/login', userLogin);

export default loginRoutes;

