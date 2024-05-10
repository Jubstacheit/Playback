import { Sequelize, DataTypes, Model } from 'sequelize';

class Stores extends Model {}

export function getStoresModel(sequelize) {
	Stores.init(
		{
			// Model attributes are defined here
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				comment: 'The unique ID of the user.',
			},
			id_userList: {
				type: DataTypes.INTEGER,
				allowNull: false,
				comment: 'The unique ID of the user.',
				references: {
					model: 'userLists',
					key: 'id',
				},
			},
		},
		{
			// Other model options go here
			sequelize, // We need to pass the connection instance
			modelName: 'stores', // We need to choose the model name
		}
	);
	return Stores;
}