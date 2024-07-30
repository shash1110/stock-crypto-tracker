import express from 'express';
import { getPrices, createPrice } from '../controllers/priceController';

const router = express.Router();

router.get('/prices', getPrices);
router.post('/prices', createPrice);

export default router;
