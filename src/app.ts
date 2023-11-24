
import express from 'express';
import loginRouter from './routes/loginRouter';
import signUpRouter from './routes/signUpRouter';

const app = express();
const port = 3000;

app.use(express.json());
app.use(loginRouter);
app.use(signUpRouter);
app.listen(port);

export default app;
