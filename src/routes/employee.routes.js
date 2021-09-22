import { Router } from 'express';
import { employeeSignUp, employeeTest } from '../controllers/employee.controller';

const employeeRouter = Router();

employeeRouter.post('/', employeeSignUp);

employeeRouter.get('/:id', employeeTest);

export default employeeRouter;
