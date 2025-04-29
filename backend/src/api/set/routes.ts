import express from 'express';
import { openSetController } from './controllers/open.controller';
import { createSetController } from './controllers/create.controller';

const router = express.Router();

router.post('/open', openSetController);
router.post('/create', createSetController);

export default router;