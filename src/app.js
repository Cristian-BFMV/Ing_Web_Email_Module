import express from 'express';
import cors from 'cors';
import employeeRouter from './routes/employee.routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/employee', employeeRouter);

export default app;
