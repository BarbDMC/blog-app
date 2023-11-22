
import express from 'express';
import loginRouter from './routes/loginRouter';

const app = express();
const port = 3000;

app.use(express.json());
app.use(loginRouter);
app.listen(port);

export default app;
