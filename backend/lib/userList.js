import { Sequelize, DataTypes, Model } from 'sequelize';

class UserList extends Model {}

export function getUserListModel(sequelize) {
	UserList.init(
		{
			// Model attributes are defined here
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				comment: 'The unique ID of the user list.',
			},
			listType: {
				type: DataTypes.CHAR(50),
				allowNull: false,
				comment: 'The type of the list.',
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
			modelName: 'userList', // We need to choose the model name
		}
	);
	return UserList;
}