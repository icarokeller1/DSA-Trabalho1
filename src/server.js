const express = require('express');
const bodyParser = require('body-parser');

const clientesRoute = require('./routes/clientes');
const produtosRoute = require('./routes/produtos');
const pedidosRoute = require('./routes/pedidos');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

// Rotas
app.use('/api', clientesRoute);
app.use('/api', produtosRoute);
app.use('/api', pedidosRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});