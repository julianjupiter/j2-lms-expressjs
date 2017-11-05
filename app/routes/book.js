const express = require('express');
const router = express.Router();

const bookController = require('../controllers/BookController');

router.get('/', bookController.findAll);
router.get('/:id', bookController.findById);

module.exports = router;