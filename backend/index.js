import express from 'express';
import booksRouter from './routes/book.js';

const app = express();
const port = 3000;

app.use(express.json());

// Use o router de livros
app.use('/books', booksRouter);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});