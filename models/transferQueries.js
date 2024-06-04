// models/transferQueries.js
import pool from '../config/db.js';

export const createTransfer = async (emisor, receptor, monto) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const insertTransfer = 'INSERT INTO transferencias (emisor, receptor, monto, fecha) VALUES ($1, $2, $3, NOW()) RETURNING *';
    const updateSender = 'UPDATE usuarios SET balance = balance - $1 WHERE id = $2';
    const updateReceiver = 'UPDATE usuarios SET balance = balance + $1 WHERE id = $2';
    
    const transferRes = await client.query(insertTransfer, [emisor, receptor, monto]);
    await client.query(updateSender, [monto, emisor]);
    await client.query(updateReceiver, [monto, receptor]);
    await client.query('COMMIT');
    return transferRes.rows[0];
  } catch (e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }
};

export const getTransfers = async () => {
  const res = await pool.query('SELECT * FROM transferencias');
  return res.rows;
};
