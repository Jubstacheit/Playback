// UserController.js

const User = require('../models/User'); // Import User model

const UserController = {
	// Get all users
	getAll(req, res) {
		User.getAll()
			.then(users => res.json(users))
			.catch(err => console.error('Error getting users', err));
	},
};

module.exports = UserController;