import { Request, Response } from 'express';
import { createProjectService } from '../services/create.service';

export const createProjectController = async (req: Request, res: Response) => {
console.log('create project constroller req.body',req.body)
  try {
    await createProjectService(req.body);
    res.status(201).json({ message: 'Project created successfully!' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};