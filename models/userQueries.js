import pool from '../config/db.js';

export const getUsers = async () => {
  const res = await pool.query('SELECT * FROM usuarios');
  return res.rows;
};

export const createUser = async (nombre, balance) => {
  const res = await pool.query('INSERT INTO usuarios (nombre, balance) VALUES ($1, $2) RETURNING *', [nombre, balance]);
  return res.rows[0];
};

export const updateUser = async (id, nombre, balance) => {
  const res = await pool.query('UPDATE usuarios SET nombre = $1, balance = $2 WHERE id = $3 RETURNING *', [nombre, balance, id]);
  return res.rows[0];
};

export const deleteUser = async (id) => {
  const res = await pool.query('DELETE FROM usuarios WHERE id = $1 RETURNING *', [id]);
  return res.rows[0];
};

