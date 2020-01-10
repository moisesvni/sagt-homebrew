const express = require('express');
const router = express.Router();
const controller = require('../controllers/receitaController');

router.get('/:id?', controller.get);
router.post('/', controller.post);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;