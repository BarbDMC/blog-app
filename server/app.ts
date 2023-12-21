
import express from 'express';
import apiRouter from './src/routers/apiRouter';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/v1', apiRouter);
app.listen(port);

export default app;
