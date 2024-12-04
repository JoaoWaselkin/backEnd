import { Router } from 'express';
import { getUsers, postUsers, putUser, deleteUser } from '../controllers/userController';

const router = Router();

router.get('/users', getUsers);
router.post('/users', postUsers);
router.post('/users', putUser);
router.post('/users', deleteUser);

export default router;