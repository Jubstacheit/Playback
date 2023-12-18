const { DataTypes, Sequelize } = require('sequelize');
const db = require('../config/config');

const Game = db.define('Game', {
	// Model attributes are defined here
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	title: {
		type: DataTypes.STRING(50),
		allowNull: false,
		unique: false,
	},
	released: {
		type: DataTypes.DATE,
		allowNull: false,
		unique: false,
	},
	developer: {
		type: DataTypes.STRING(50),
		allowNull: false,
		unique: false,
	},
	publisher: {
		type: DataTypes.STRING(50),
		allowNull: false,
		unique: false,
	},
	series: {
		type: DataTypes.STRING(50),
		allowNull: true,
		unique: false,
	},
	global_rating: {
		type: DataTypes.INTEGER,
		allowNull: true,
		unique: false,
	}
}, {
	tableName: 'game',
	timestamps: false,
});

module.exports = Game;