const express = require('express');
const router = express.Router();
const pool = require('../db');

// Rota para cadastrar um novo cliente
router.post('/clientes', async (req, res) => {
  const { nome, altura, nascimento, cidade_id } = req.body;
  try {
    const result = await pool.query('INSERT INTO clientes (nome, altura, nascimento, cidade_id) VALUES ($1, $2, $3, $4) RETURNING *', [nome, altura, nascimento, cidade_id]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro interno do servidor');
  }
});

// Rota para consultar todos os clientes
router.get('/clientes', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM clientes');
    console.log(result.rows); // Adicione esta linha para debug
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro interno do servidor');
  }
});

module.exports = router;