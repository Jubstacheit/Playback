// userRoutes.js

const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

// Get all users
router.get('/users', UserController.getAll);
// Other routes for CRUD operations (e.g., POST, PUT, DELETE)

module.exports = router;