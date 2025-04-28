import express from 'express';
import { openSetController } from './controllers/open.controller';

const router = express.Router();

router.post('/open', openSetController);

export default router;