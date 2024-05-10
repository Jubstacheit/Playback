import { Sequelize, DataTypes, Model } from 'sequelize';

class Users extends Model {}

export function getUserModel(sequelize) {
	// CREATE TABLE players (
	//     `id` INT(11) NOT NULL AUTO_INCREMENT COMMENT 'The unique ID of the player.',
	//     `coins` INT(11) COMMENT 'The number of coins that the player had.',
	//     `goods` INT(11) COMMENT 'The number of goods that the player had.',
	//     PRIMARY KEY (`id`)
	// );
	Users.init(
		{
			// Model attributes are defined here
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				comment: 'The unique ID of the user.',
			},
			email: {
				type: DataTypes.CHAR(50),
				allowNull: false,
				comment: 'The email of the user.',
			},
			password: {
				type: DataTypes.CHAR(50),
				allowNull: false,
				comment: 'The password of the user.',
			},
		},
		{
			// Other model options go here
			sequelize, // We need to pass the connection instance
			modelName: 'players', // We need to choose the model name
		}
	);
	return Users;
}