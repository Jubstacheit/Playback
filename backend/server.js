require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

const PORT = process.env.MYSQL_PORT;

// Connect to MySQL
const connection = mysql.createConnection({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE,
});

app.use(cors());
app.use(bodyParser.json());

// Connect to MySQL on start
connection.connect(err => {
	if (err) {
		console.error(`Error connecting to MySQL.`);
		return err;
	}
	console.log(`Connected to MySQL on port ${PORT}`);
});

// Routes
const userRoutes = require('./routes/userRoutes');
// Other route imports

app.use('/api', userRoutes);
// Use other routes similarly (e.g., app.use('/api', otherRoutes))

// Example endpoint to retrieve data from MySQL database
app.get('/api/users', (req, res) => {
	const SELECT_ALL_USERS_QUERY = 'SELECT * FROM users';
	connection.query(SELECT_ALL_USERS_QUERY, (err, results) => {
		if (err) {
			return res.send(err);
		} else {
			return res.json({
				data: results,
			});
		}
	});
});

// Start the server
app.listen(process.env.MYSQL_PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
