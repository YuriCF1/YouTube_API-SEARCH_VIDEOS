import { Request, Response } from 'express';

import {
  getFavorites as get,
  addFavorite as add,
  removeFavorite as remove,
} from "../services/videoService.js";

export const getFavorites = async (req: Request, res: Response) => {
  try {
    const favorites = await get();
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving favorites" });
  }
};

export const addFavorite = async (req: Request, res: Response) => {
  try {
    const { video } = req.body;
    await add(video);
    res.status(201).json({ message: "Favorite added" });
  } catch (error) {
    res.status(500).json({ message: "Error adding favorite" });
  }
};

export const removeFavorite = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await remove(id);
    res.status(200).json({ message: "Favorite removed" });
  } catch (error) {
    res.status(500).json({ message: "Error removing favorite" });
  }
};
