// routes/transfersRoutes.js
import express from 'express';
import { addTransfer, getAllTransfers } from '../controllers/transfersController.js';
const router = express.Router();

router.post('/', addTransfer);
router.get('/', getAllTransfers);

export default router;
