const express = require('express');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/config');

const app = express();
const PORT = process.env.MYSQL_PORT
const FRONT = process.env.FRONT_HOST

app.use(bodyParser.json());

app.use(cors({
	origin: FRONT,
}));

app.use('/user', userRoutes); // Routes for user

app.listen(PORT, () => {
	console.log('Server running on port ' + PORT)}
	);