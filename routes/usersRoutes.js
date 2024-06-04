// routes/usersRoutes.js
import express from 'express';
import { getAllUsers, addUser, modifyUser, removeUser } from '../controllers/usersController.js';
const router = express.Router();

router.get('/', getAllUsers);
router.post('/', addUser);
router.put('/', modifyUser);
router.delete('/', removeUser);

export default router;
