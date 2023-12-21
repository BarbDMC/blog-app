
import { Router } from 'express';
import loginRoutes from '../routes/loginRouter';
import signUpRoutes from '../routes/signUpRouter';

const apiRouter = Router();

apiRouter.use(loginRoutes);
apiRouter.use(signUpRoutes);

export default apiRouter;
