import { Request, Response } from 'express';
import { openSetService } from '../services/open.service';

export const openSetController = async (req: Request, res: Response) => {
console.log('create set controller req.body',req.body)
  try {
    const data = await openSetService(req.body);
    // tu mam undefined...
    console.log('zostanie wysłane:',data)
    res.status(201).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
