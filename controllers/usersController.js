import { getUsers, createUser, updateUser, deleteUser } from '../models/userQueries.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addUser = async (req, res) => {
  try {
    const { nombre, balance } = req.body;
    const user = await createUser(nombre, balance);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const modifyUser = async (req, res) => {
  try {
    const { id, nombre, balance } = req.body;
    const user = await updateUser(id, nombre, balance);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeUser = async (req, res) => {
    try {
      const { id } = req.query; // Asegúrate de que estás obteniendo el id correctamente del query string
      const user = await deleteUser(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
