import { Sequelize } from 'sequelize';
import { readFileSync } from 'fs';
import 'dotenv/config';
import { getLogger } from './logger.js';
const logger = getLogger('lib/tidb.js');

const env = process.env;
let sequelize = initSequelize();

export function initSequelize() {
	return new Sequelize({
		dialect: 'mysql',
		host: env.MYSQL_HOST,
		port: env.MYSQL_PORT,
		username: env.MYSQL_USER,
		password: env.MYSQL_PASSWORD,
		database: env.MYSQL_DATABASE,
		dialectOptions: {
			ssl:
			env?.TIDB_ENABLE_SSL === 'true'
			? {
				minVersion: 'TLSv1.2',
				rejectUnauthorized: true,
				ca: env.TIDB_CA_PATH
				? readFileSync(env.TIDB_CA_PATH)
				: undefined,
			}
			: null,
		},
	});
}

export async function getSequelize() {
	if (!sequelize) {
		sequelize = initSequelize();
		try {
			await sequelize.authenticate();
			logger.info('Connection has been established successfully.');
		} catch (error) {
			logger.error('Unable to connect to the database:');
			logger.error(error);
			throw error;
		}
	}
	return sequelize;
}

export async function closeSequelize() {
	if (sequelize) {
		await sequelize.close();
		sequelize = null;
	}
}