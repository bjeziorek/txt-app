import { Request, Response } from 'express';
import { openProjectService } from '../services/open.service';

export const openProjectController = async (req: Request, res: Response) => {
  const { name, template } = req.body;
console.log(name)
  try {
    const data = await openProjectService(name);
    res.status(201).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};