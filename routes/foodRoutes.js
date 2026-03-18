
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/foodController');

router.get('/',ctrl.getFoods);
router.post('/',ctrl.addFood);

module.exports = router;
