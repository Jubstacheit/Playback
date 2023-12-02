// User.js

const { isEmail } = require('validator');
const sequelize = require('sequelize')

// Model for User

const User = (sequelize, DataTypes) => {
	const User = sequelize.define('user', {
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		email: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
			validate: {
				notEmpty: true,
				isEmail: true,
			},
		},
	});

	// Class method to get all users
	User.getAll = () => {
		return User.findAll();
	};

	return User;
}



module.exports = User;