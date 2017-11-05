const express = require('express');
const router = express.Router();

const reportController = require('../controllers/ReportController');

router.get('/', reportController.index);

module.exports = router;