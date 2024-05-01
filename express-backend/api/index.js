const express = require('express');
const app = express();
const db = require('./config/database');
require('dotenv').config();

app.get('/', function(req, res) {
	res.send('hello world');
});

// Import routes
/*const userRoutes = require('../routes/userRoutes');
// const gameRoutes = require('./routes/gameRoutes');

// Connect to the database
db.authenticate()
	.then(() => console.log('Database connected'))
	.catch((err) => console.error('Error connecting to database:', err));

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use('/user', userRoutes);
*/
const PORT = process.env.MYSQL_PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});