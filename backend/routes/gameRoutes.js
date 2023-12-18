const express = require('express');
const router = express.Router();
const gameController = require('../controllers/GameController');

router.post('/add', gameController.create);

module.exports = router;