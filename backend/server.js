const express = require('express');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
const cors = require('cors');
const sequelize = require('./config/config');

const app = express();
const PORT = process.env.MYSQL_PORT
const FRONT = process.env.FRONT_HOST

app.use(express.json());

app.use(cors({
	origin: FRONT,
}));

app.use('/api/users', userRoutes); // Routes for user

app.listen(PORT, () => {
	console.log('Server running on port ' + PORT)}
	);