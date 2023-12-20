
import express from 'express';
import loginRouter from '../routes/loginRouter';
import signUpRouter from '../routes/signUpRouter';

const apiRouter = express.Router();

apiRouter.use(loginRouter);
apiRouter.use(signUpRouter);

export default apiRouter;
