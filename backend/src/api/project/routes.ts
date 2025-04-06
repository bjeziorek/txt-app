import express from 'express';
import { createProjectController } from './controllers/create.controller';
import { openProjectController } from './controllers/open.controller';


const router = express.Router();

router.post('/create', createProjectController);
router.post('/open', openProjectController);

export default router;