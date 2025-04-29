import { Request, Response } from 'express';
import { createSetService } from '../services/create.service';

export const createSetController = async (req: Request, res: Response) => {
console.log('create set controller req.body',req.body)
  try {
    const data = await createSetService(req.body);
    console.log('zostanie wysłane:',data)
    res.status(201).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
