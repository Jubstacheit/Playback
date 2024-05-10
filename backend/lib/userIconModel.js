import { Sequelize, DataTypes, Model } from 'sequelize';

class UserIcon extends Model {}

export function getUserIconModel(sequelize) {
	UserIcon.init(
		{
			// Model attributes are defined here
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				comment: 'The unique ID of the icon.',
			},
			url: {
				type: DataTypes.CHAR(255),
				allowNull: false,
				comment: 'The URL of the icon.',
			},
			id_user: {
				type: DataTypes.INTEGER,
				allowNull: false,
				comment: 'The unique ID of the user.',
				references: {
					model: 'users',
					key: 'id',
				},
			},
		},
		{
			// Other model options go here
			sequelize, // We need to pass the connection instance
			modelName: 'userIcon', // We need to choose the model name
		}
	);
	return UserIcon;
}