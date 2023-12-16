const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UnauthorizedError = require('../errors/Unauthorized.js');
const NotFoundError = require('../errors/NotFound.js');
const config = require('../config/config.js');
const userServices = require('../services/userServices.js');

class userController {
	// GET all users
	async getUsers(req, res, next) {
		try {
			const users = await userServices.getAll();
			if (!users) {
				throw new NotFoundError();
			}
			res.json(users);
		} catch (err) {
			next(err);
		}
	}
};

module.exports = new userController();