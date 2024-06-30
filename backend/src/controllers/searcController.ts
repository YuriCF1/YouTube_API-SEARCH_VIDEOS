import { Request, Response } from 'express';
import { searchVideos as search } from '../services/videoService.js';

export const searchVideos = async (req: Request, res: Response) => {
  try {
    const query = req.query.query;

    if (typeof query !== 'string') {
      res.status(400).json({ message: 'O parâmetro enviado não é uma string' });
      return;
    }

    const videos = await search(query);
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar vídeos' });
  }
};
