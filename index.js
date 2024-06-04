import express from 'express';
import dotenv from 'dotenv';
import usersRoutes from './routes/usersRoutes.js';
import transfersRoutes from './routes/transfersRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));
app.use('/api/usuarios', usersRoutes);
app.use('/api/transferencias', transfersRoutes);


app.listen(PORT, console.log(`🔥Server on 🔥 http://localhost:${PORT}`));