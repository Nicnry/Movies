const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/', movieController.findAll);

//CRUD
router.post('/', movieController.create);
router.get('/:id', movieController.find);
router.put('/:id', movieController.update);
router.delete('/:id', movieController.destroy);

module.exports = router;

