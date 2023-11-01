const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'aula', // Agora estamos usando o novo banco de dados
  password: 'admin',
  port: 5432,
});

module.exports = pool;