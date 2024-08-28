import { Router } from 'express';
import { pool } from '../db.js';

const router = Router();

// Rota para selecionar todos os livros
router.get('/', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM books');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar livros' });
    }
});

// Rota para cadastrar um novo livro
router.post('/', async (req, res) => {
    const { title, author, description, image, score, genre, status, titleFont, pages, needToBuy, isSeries, cover, collectorEdition } = req.body;
    try {
        const { rows } = await pool.query(
            'INSERT INTO books (title, author, description, image, score, genre, status, title_font, pages, need_to_buy, is_series, cover, collector_edition) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *',
            [title, author, description, image, score, genre, status, titleFont, pages, needToBuy, isSeries, cover, collectorEdition]
        );
        res.status(201).json(rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao cadastrar livro' });
    }
});

// Rota para editar um livro existente
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, author, description, image, score, genre, status, titleFont, pages, needToBuy, isSeries, cover, collectorEdition } = req.body;
    try {
        const { rows } = await pool.query(
            'UPDATE books SET title = $1, author = $2, description = $3, image = $4, score = $5, genre = $6, status = $7, title_font = $8, pages = $9, need_to_buy = $10, is_series = $11, cover = $12, collector_edition = $13 WHERE id = $14 RETURNING *',
            [title, author, description, image, score, genre, status, titleFont, pages, needToBuy, isSeries, cover, collectorEdition, id]
        );
        if (rows.length === 0) {
            res.status(404).json({ error: 'Livro não encontrado' });
        } else {
            res.json(rows[0]);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao editar livro' });
    }
});

// Rota para deletar um livro
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const { rowCount } = await pool.query('DELETE FROM books WHERE id = $1', [id]);
        if (rowCount === 0) {
            res.status(404).json({ error: 'Livro não encontrado' });
        } else {
            res.status(204).send();
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao deletar livro' });
    }
});

export default router;