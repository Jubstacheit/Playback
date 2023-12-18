const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UnauthorizedError = require('../errors/Unauthorized.js');
const NotFoundError = require('../errors/NotFound.js');
const config = require('../config/config.js');
const gameServices = require('../services/gameServices.js');

class gameController {
	// Method to create a new game entry
	async create(req, res, next) {
		try {
			const game = await gameServices.create(req.body);
			res.status(201).json(game);
		} catch (err) {
			next(err);
		}
	}
};

module.exports = new gameController();