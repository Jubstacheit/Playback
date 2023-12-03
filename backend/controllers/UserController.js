const User = require('../models/User.js');

const userController = {
	// GET all users
	async getAllUsers(req, res) {
		try {
			const users = await User.findAll();
			res.json(users);
		} catch (err) {
			console.error('Error fetching users: ', err);
			res.status(500).json({ error: 'Internal server error' });
		}
	},
};

module.exports = userController;