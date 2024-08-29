import express from 'express';
import cors from 'cors';
import booksRouter from './routes/book.js';
import pool from './db.js';

const app = express();
const port = 3001;

await pool.connect();
app.use(cors());
app.use(express.json());

// Use o router de livros
app.use('/books', booksRouter);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});