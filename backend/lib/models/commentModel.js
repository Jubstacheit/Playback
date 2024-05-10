import { Sequelize, DataTypes, Model } from 'sequelize';

class Comments extends Model {}

export function getCommentModel(sequelize) {
	Comments.init(
		{
			// Model attributes are defined here
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				comment: 'The unique ID of the user.',
			},
			body: {
				type: DataTypes.TEXT,
				allowNull: false,
				comment: 'The body of the comment.',
			},
			title: {
				type: DataTypes.CHAR(100),
				allowNull: false,
				comment: 'The title of the comment.',
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
			id_gameEntry: {
				type: DataTypes.INTEGER,
				allowNull: false,
				comment: 'The unique ID of the game entry.',
				references: {
					model: 'gameEntries',
					key: 'id',
				},
			},
		},
		{
			// Other model options go here
			sequelize, // We need to pass the connection instance
			modelName: 'comments', // We need to choose the model name
		}
	);
	return Comments;
}