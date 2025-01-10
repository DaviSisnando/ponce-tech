import { Router } from 'express';
import userRoutes from './userRoutes';
import sessionRoutes from './sessionRoutes'

const router = Router();

router.use('/api', userRoutes);
router.use('/api', sessionRoutes);

export default router;