const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).send('Acesso Negado. Token não fornecido.');
  }

  try {
    const decoded = jwt.verify(token, 'admin');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send('Token inválido.');
  }
}

module.exports = verifyToken;