const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/items');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', contactsController.createitems);

router.put('/:id', contactsController.updateitems);

router.delete('/:id', contactsController.deleteitems);

module.exports = router;