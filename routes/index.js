const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send(' Hello Sadiq Abubakar');
  
});
routes.use('/recipe', require('./recipe'))
routes.use('/swagger', require('./swagger'))
module.exports = routes;