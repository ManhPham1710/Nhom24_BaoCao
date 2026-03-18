const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/nutritionController');

router.get('/', ctrl.getNutrition);

module.exports = router;