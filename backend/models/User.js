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

// Hash password before saving 
User.beforeCreate(async (user) => {
	const salt = await bcrypt.genSalt(10);
	user.password = await bcrypt.hash(user.password, salt);
});

// Lowercase email before save 
User.beforeCreate(async (user) => {
	user.email = user.email.toLowerCase();
});

module.exports = User;