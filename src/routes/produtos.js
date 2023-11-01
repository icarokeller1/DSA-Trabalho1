const express = require('express');
const router = express.Router();
const pool = require('../db');

// Rota para consultar todos os produtos disponíveis
router.get('/produtos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM produtos');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro interno do servidor');
  }
});

module.exports = router;