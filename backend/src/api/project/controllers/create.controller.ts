import { Request, Response } from 'express';
import { createProjectService } from '../services/create.service';

export const createProjectController = async (req: Request, res: Response) => {
  const { name, template } = req.body;
console.log(name,template)
  try {
    await createProjectService(name, template);
    res.status(201).json({ message: 'Project created successfully!' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};