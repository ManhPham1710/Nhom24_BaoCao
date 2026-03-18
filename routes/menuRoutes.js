
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/menuController');

router.get('/',ctrl.getMenus);
router.post('/',ctrl.addMenu);

module.exports = router;
