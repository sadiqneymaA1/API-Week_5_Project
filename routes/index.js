const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send(' Hello Sadiq Abubakar');
  
});
routes.use('/contacts', require('./contacts'))
routes.use('/swagger', require('./swagger'))
module.exports = routes;