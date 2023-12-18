
import express from 'express';
import apiRouter from './routers/blogAppV1';

const app = express();
const port = 3000;

app.use(express.json());
app.use(apiRouter);
app.listen(port);

export default app;
