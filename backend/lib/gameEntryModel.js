import { Sequelize, DataTypes, Model } from 'sequelize';

class GameEntry extends Model {}

export function getGameEntryModel(sequelize) {
	GameEntry.init(
		{
			// Model attributes are defined here
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				comment: 'The unique ID of the list.',
			},
			global_rating: {
				type: DataTypes.INTEGER,
				allowNull: true,
				comment: 'The global rating of the game.',
			}
		},
		{
			// Other model options go here
			sequelize, // We need to pass the connection instance
			modelName: 'gameEntry', // We need to choose the model name
		}
	);
	return GameEntry;
}