const express = require('express');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
const cors = require('cors');
const sequelize = require('./config/config');
const AuthMiddleware = require('./middlewares/Auth');
const UserController = require('./controllers/UserController');

const app = express();
const PORT = process.env.MYSQL_PORT
const FRONT = process.env.FRONT_HOST

app.use(express.json());

app.use(cors({
	origin: FRONT,
}));

// Public routes 
app.get('/api/users/getAll', UserController.getUsers);
app.post('/api/users/login', UserController.login);
app.post('/api/users/create', UserController.create);

// Private routes
app.use('/api/users', AuthMiddleware, userRoutes); // Routes for user

app.listen(PORT, () => {
	console.log('Server running on port ' + PORT)}
	);