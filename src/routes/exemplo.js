const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/exemplo', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM tabela_exemplo');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro interno do servidor');
  }
});

module.exports = router;