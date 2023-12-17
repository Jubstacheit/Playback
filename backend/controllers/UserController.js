const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UnauthorizedError = require('../errors/Unauthorized.js');
const NotFoundError = require('../errors/NotFound.js');
const config = require('../config/config.js');
const userServices = require('../services/userServices.js');

class userController {
	// Login method 
	async login(req, res, next) {
		try {
			const { email, password } = req.body;
			const userId = await userServices.checkPassword(email, password);
			if (!userId) {
				throw new UnauthorizedError();
			}
			const token = jwt.sign({ userId }, process.env.JWTOKEN, {
				expiresIn: 86400
			});
			res.json({ token });
		} catch (err) {
			next(err);
		}
	}
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