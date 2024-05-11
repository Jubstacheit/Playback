import { Op } from 'sequelize';
import express from 'express';
import cors from 'cors';
import { getSequelize, closeSequelize } from './lib/tidb.js';
import { getUserModel } from './lib/models/userModel.js';
import { getUserIconModel } from './lib/models/userIconModel.js';
import { getUserListModel } from './lib/models/userListModel.js';
import { getGameEntryModel } from './lib/models/gameEntryModel.js';
import { getCommentModel } from './lib/models/commentModel.js';
import { getRatingModel } from './lib/models/ratingModel.js';
import { getStoresModel } from './lib/models/storesModel.js';
import { getLogger } from './lib/logger.js';
import 'dotenv/config';

import userRoutes from "./lib/routes/userRoutes.js"
import userListRoutes from "./lib/routes/userListsRoutes.js"
import userListsRoutes from './lib/routes/userListsRoutes.js';

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
let commentModel;
let ratingModel;
let storesModel;

app.use(express.json());
app.use(cors({
	"origin": process.env.FRONT_HOST,
	"optionsSuccessStatus": 200,
	"methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
}));
app.options('*', cors()) // include before other routes

app.get("/", (req, res) => res.type('html').send(html));

async function startServer() {
    logger.info('Getting sequelize instance...');
    sequelize = await getSequelize();
    logger.info('Got sequelize instance.');

    logger.info('Getting users model...');
    userModel = getUserModel(sequelize);
    logger.info('Got users model.');

	logger.info('Getting user icons model...');
	userIconModel = getUserIconModel(sequelize);
	logger.info('Got user icons model.');

	logger.info('Getting user lists model...');
	userListModel = getUserListModel(sequelize);
	logger.info('Got user lists model.');

	logger.info('Getting game entries model...');
	gameEntryModel = getGameEntryModel(sequelize);
	logger.info('Got game entries model.');

	logger.info('Getting comments model...');
	commentModel = getCommentModel(sequelize);
	logger.info('Got comments model.');

	logger.info('Getting ratings model...');
	ratingModel = getRatingModel(sequelize);
	logger.info('Got ratings model.');

	logger.info('Getting stores model...');
	storesModel = getStoresModel(sequelize);
	logger.info('Got stores model.');

	// Sync models
	logger.info('Syncing models...');
	await commentModel.sync({ force: false });
	await ratingModel.sync({ force: false });
	await storesModel.sync({ force: false });
	await gameEntryModel.sync({ force: false });
	await userListModel.sync({ force: false });
	await userIconModel.sync({ force: false });
	await userModel.sync({ force: false });
	logger.info('Synced models.');

	// Users routes
	logger.info('Setting up user routes...');
	app.use('/users', userRoutes(userModel));

	// User lists routes
	logger.info('Setting up user lists routes...');
	app.use('/userlists', userListsRoutes(userListModel));

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