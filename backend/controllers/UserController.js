// UserController.js

const User = require('../models/User'); // Import User model

const UserController = {
	// Get all users
	getAll(req, res) {
		User.find({})
		.then((users) => {
			res.send(users);
		})
		.catch((error) => console.log(error));
	},
	createUser(req, res) {
		User.create(req.body)
		.then((user) => {
			res.send(user);
		})
		.catch((error) => console.log(error));
	}
};

module.exports = UserController;
