const express = require('express');
const router = express.Router();
const pool = require('../db');

// Rota para realizar um novo pedido
router.post('/pedidos', async (req, res) => {
  const { horario, endereco, cliente_id } = req.body;
  try {
    const result = await pool.query('INSERT INTO pedidos (horario, endereco, cliente_id) VALUES ($1, $2, $3) RETURNING *', [horario, endereco, cliente_id]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro interno do servidor');
  }
});

// Rota para listar pedidos realizados por um cliente
router.get('/pedidos/:cliente_id', async (req, res) => {
  const cliente_id = req.params.cliente_id;
  try {
    const result = await pool.query('SELECT * FROM pedidos WHERE cliente_id = $1', [cliente_id]);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro interno do servidor');
  }
});

module.exports = router;