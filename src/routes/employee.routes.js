import { Router } from 'express';
import { employeeSignUp } from '../controllers/employee.controller';

const employeeRouter = Router();

employeeRouter.post('/', employeeSignUp);

export default employeeRouter;
