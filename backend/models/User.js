const { DataTypes, Sequelize } = require('sequelize');
const db = require('../config/config');

const User = db.define('User', {
	// Model attributes are defined here
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	username: {
		type: DataTypes.STRING(20),
		allowNull: false,
		unique: true,
	},
	password: {
		type: DataTypes.STRING(50),
		allowNull: false,
		validate: {
			len: [6, 50]
		}
	},
	email: {
		type: DataTypes.STRING(50),
		isEmail: true,
		allowNull: false,
	}
}, {
	tableName: 'user',
	timestamps: false,
});

module.exports = User;