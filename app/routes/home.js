const express = require('express');
const router = express.Router();

const homeController = require('../controllers/HomeController');

router.get('/', homeController.index);
router.get('/dashboard', homeController.index);

module.exports = router;