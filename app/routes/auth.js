const express = require('express');
const router = express.Router();

const authController = require('../controllers/AuthController');

router.get('/', authController.index);
router.get('/login', authController.index);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

module.exports = router;