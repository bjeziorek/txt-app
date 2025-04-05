import express from 'express';
import { getTranslationController } from './controllers/get.controller';

const router = express.Router();

router.post('/get', getTranslationController);

export default router;