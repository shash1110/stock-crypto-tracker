import { Request, Response } from 'express';
import Price from '../models/price';

export const getPrices = async (req: Request, res: Response) => {
  try {
    const prices = await Price.find();
    res.json(prices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPrice = async (req: Request, res: Response) => {
  const { symbol, price } = req.body;

  const newPrice = new Price({
    symbol,
    price,
  });

  try {
    const savedPrice = await newPrice.save();
    res.status(201).json(savedPrice);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
