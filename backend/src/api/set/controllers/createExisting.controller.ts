import { Request, Response } from 'express';
import { createExistingSetService } from '../services/createExisting.service';

export const createProjectController = async (req: Request, res: Response) => {
console.log('create set controller req.body',req.body)
  try {
    await createExistingSetService(req.body);
    res.status(201).json({ message: 'Project created successfully!' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
