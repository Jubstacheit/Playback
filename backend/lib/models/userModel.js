import { Sequelize, DataTypes, Model } from 'sequelize';

class Users extends Model {}

export function getUserModel(sequelize) {
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
			username: {
				type: DataTypes.CHAR(50),
				allowNull: false,
				comment: 'The username of the user.',
			},
		},
		{
			// Other model options go here
			sequelize, // We need to pass the connection instance
			modelName: 'users', // We need to choose the model name
		}
	);
	return Users;
}