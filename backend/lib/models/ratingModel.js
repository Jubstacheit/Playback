import { Sequelize, DataTypes, Model } from 'sequelize';

class Ratings extends Model {}

export function getRatingModel(sequelize) {
	Ratings.init(
		{
			// Model attributes are defined here
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				comment: 'The unique ID of the rating.',
			},
			rating: {
				type: DataTypes.INTEGER,
				allowNull: false,
				comment: 'The rating of the game.',
			},
			id_gameEntry: {
				type: DataTypes.INTEGER,
				allowNull: false,
				comment: 'The unique ID of the game entry.',
				references: {
					model: 'gameEntries',
					key: 'id',
				},
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
			modelName: 'ratings', // We need to choose the model name
		}
	);
	return Ratings;
}