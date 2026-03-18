const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/purchaseController');

router.get('/', ctrl.getPurchase);

module.exports = router;