import { Op } from 'sequelize';
import express from 'express';
import { getSequelize, closeSequelize } from './lib/tidb.js';
import { getUserModel } from './lib/userModel.js';
import { getUserIconModel } from './lib/userIconModel.js';
import { getUserListModel } from './lib/userList.js';
import { getGameEntryModel } from './lib/gameEntryModel.js';
import { getLogger } from './lib/logger.js';
import 'dotenv/config';

const app = express();
const port = process.env.MYSQL_PORT

const logger = getLogger('playback');
if (!logger) {
	throw new Error('Logger is not initialized');
}

let sequelize;
let userModel;
let userIconModel;
let userListModel;
let gameEntryModel;

app.use(express.json());

app.get("/", (req, res) => res.type('html').send(html));


// Example of getting data

app.get('/users', async (req, res) => {
    const user = await userModel.findAll();
    res.json(user);
});



async function startServer() {
    logger.info('Getting sequelize instance...');
    sequelize = await getSequelize();
    logger.info('Got sequelize instance.');

    logger.info('Getting users model...');
    userModel = getUserModel(sequelize);
    logger.info('Got users model.');

	logger.info('Getting user icons...');
	userIconModel = getUserIconModel(sequelize);
	logger.info('Got user icons.');

	logger.info('Getting user lists...');
	userListModel = getUserListModel(sequelize);
	logger.info('Got user lists.');

	logger.info('Getting game entries...');
	gameEntryModel = getGameEntryModel(sequelize);
	logger.info('Got game entries.');

    app.listen(port, () => {
        logger.info(`Server listening on port ${port}`);
    });
}

startServer().catch(logger.error);

process.on('SIGINT', async () => {
    logger.info('Closing sequelize instance...');
    await closeSequelize();
    logger.info('Closed sequelize instance.');
    process.exit(0);
});

const html = `
<!DOCTYPE html>
<html>
<head>
<title>Hello from Render!</title>
<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
<script>
setTimeout(() => {
	confetti({
		particleCount: 100,
		spread: 70,
		origin: { y: 0.6 },
		disableForReducedMotion: true
	});
}, 500);
</script>
<style>
@import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
@font-face {
	font-family: "neo-sans";
	src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
	font-style: normal;
	font-weight: 700;
}
html {
	font-family: neo-sans;
	font-weight: 700;
	font-size: calc(62rem / 16);
}
body {
	background: white;
}
section {
	border-radius: 1em;
	padding: 1em;
	position: absolute;
	top: 50%;
	left: 50%;
	margin-right: -50%;
	transform: translate(-50%, -50%);
}
</style>
</head>
<body>
<section>
Hello from Render!
</section>
</body>
</html>
`

export default app;


/*async function main() {
	// Get the sequelize instance
	logger.info('Getting sequelize instance...');
	const sequelize = await getSequelize();
	logger.info('Got sequelize instance.');
	
	// Get the players model
	logger.info('Getting players model...');
	const playersModel = getPlayersModel(sequelize);
	logger.info('Got players model.');
	
	// Sync the model
	logger.info('Syncing players model...');
	logger.info(
		'This creates the table, dropping it first if it already existed'
	);
	// https://sequelize.org/docs/v6/core-concepts/model-basics/#model-synchronization
	await playersModel.sync({ force: true });
	logger.info('Synced players model.');
	
	// Initialize the model with some data
	logger.info('Initializing players model with some data...');
	await playersModel.bulkCreate([
		{ id: 1, coins: 100, goods: 100 },
		{ id: 2, coins: 200, goods: 200 },
		{ id: 3, coins: 300, goods: 300 },
		{ id: 4, coins: 400, goods: 400 },
		{ id: 5, coins: 500, goods: 500 },
	]);
	logger.info('Initialized players model with some data.');
	
	// CRUD - Create
	logger.info('Creating a new player...');
	const newPlayer = await playersModel.create({
		id: 6,
		coins: 600,
		goods: 600,
	});
	logger.info('Created a new player.');
	logger.info(newPlayer.toJSON());
	
	// CRUD - Read
	logger.info('Reading all players with coins > 300...');
	const allPlayersWithCoinsGreaterThan300 = await playersModel.findAll({
		where: {
			coins: {
				[Op.gt]: 300,
			},
		},
	});
	logger.info('Read all players with coins > 300.');
	logger.info(allPlayersWithCoinsGreaterThan300.map((p) => p.toJSON()));
	
	// CRUD - Update
	logger.info('Updating the new player...');
	await newPlayer.update({ coins: 700, goods: 700 });
	logger.info('Updated the new player.');
	logger.info(newPlayer.toJSON());
	
	// CRUD - Delete
	logger.info('Deleting the new player...');
	await newPlayer.destroy();
	const deletedNewPlayer = await playersModel.findByPk(6);
	logger.info('Deleted the new player.');
	logger.info(deletedNewPlayer?.toJSON());
	
	// Close the sequelize instance
	logger.info('Closing sequelize instance...');
	await closeSequelize();
	logger.info('Closed sequelize instance.');
	
	logger.info('Done.');
}*/