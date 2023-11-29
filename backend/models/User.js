// User.js

const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		unique: true, // Prevent duplicate email
		required: true
	},
	// Other user properties
});

const User = mongoose.model('User', userSchema);

module.exports = User;
