// controllers/transfersController.js
import { createTransfer, getTransfers } from '../models/transferQueries.js';

export const addTransfer = async (req, res) => {
  try {
    const { emisor, receptor, monto } = req.body;
    const transfer = await createTransfer(emisor, receptor, monto);
    res.status(201).json(transfer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllTransfers = async (req, res) => {
  try {
    const transfers = await getTransfers();
    res.status(200).json(transfers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
