const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send(' This My Recipe Project. I am making a Recipe Book.');
  
});
routes.use('/recipe', require('./recipe'))
routes.use('/swagger', require('./swagger'))
module.exports = routes;