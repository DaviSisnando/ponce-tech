import { Router } from 'express';
import { createUserController, getUsersController } from '../controllers/userController';
import auth from '../middleware/auth';

const router = Router();

router.post('/users', createUserController);
router.get('/users', getUsersController);

export default router;