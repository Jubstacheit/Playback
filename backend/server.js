const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost:27017/playback', {
})
.then(() => {
	console.log('Connected to MongoDB');
})
.catch((err) => {
	console.error('Failed to connect to MongoDB:', err);
});

// Routes
const userRoutes = require('./routes/userRoutes');
// Other route imports

app.use('/api', userRoutes);
// Use other routes similarly (e.g., app.use('/api', otherRoutes))

// Start the server
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
