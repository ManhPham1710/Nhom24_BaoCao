
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/inventoryController');

router.get('/',ctrl.getInventory);

module.exports = router;
