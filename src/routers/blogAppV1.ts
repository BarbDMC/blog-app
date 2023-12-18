
import express from 'express';
import loginRouter from '../routes/loginRouter';
import signUpRouter from '../routes/signUpRouter';

const apiRouter = express.Router();

apiRouter.use('/v1', loginRouter);
apiRouter.use('/v1', signUpRouter);

export default apiRouter;
