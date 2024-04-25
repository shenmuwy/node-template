const express = require('express');
const router = express.Router();

const testController = require('../controllers/testController')

router.get('/get_version', testController.showTest)

module.exports = router;