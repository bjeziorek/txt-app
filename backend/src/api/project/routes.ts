import express from 'express';
import { createProjectController } from './controllers/create.controller';

const router = express.Router();

router.post('/create', createProjectController);

export default router;