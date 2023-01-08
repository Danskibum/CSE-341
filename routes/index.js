const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Kristal Gerdes');
});

module.exports = routes;