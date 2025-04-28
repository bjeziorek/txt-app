import { Request, Response } from 'express';
import { getTranslationService } from '../services/get.service';

export const getTranslationController = async (req: Request, res: Response) => {
  const { lang } = req.body;
//console.log('lang w kontrolerze:',lang)
  try {
    const result = await getTranslationService(lang);
    console.log('zostanie wysłane:',result)
    res.status(200).send(result)
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};