import express from 'express';
import cors from 'cors';
import employeeRouter from './routes/employee.routes';
import guestRouter from './routes/guest.routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/employee', employeeRouter);
app.use('/api/guest', guestRouter);

export default app;
