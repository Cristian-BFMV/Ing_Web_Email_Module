import { Router } from 'express';
import { guestController } from '../controllers/guest.controller';

const router = Router();

router.post('/', guestController);

export default router;
