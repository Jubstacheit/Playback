import express from 'express';
import { createHash, compareHash } from '../hash.js';
let userModel;
let sequelize;
import { getSequelize } from '../tidb.js';

sequelize = await getSequelize();

import { getUserListModel } from '../models/userListModel.js';
const UserList = getUserListModel(sequelize);

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
    console.log('Getting all users');
    const user = await userModel.findAll();
    res.json(user);
});

// Create an user
router.post('/', async (req, res) => {
    const { username, email, password } = req.body; // replace with your actual required fields
    if (!username || !email || !password) { // replace with your actual required fields
        res.status(400).json({ message: 'Missing required information' });
    } else {
        // Hash password
        const hashedPassword = await createHash(password);
        const user = await userModel.create({ ...req.body, password: hashedPassword });
        res.json(user);
    }
});

// Delete an user by ID 
router.delete('/:id', async (req, res) => {
    const user = await userModel.findByPk(req.params.id);
    if (!user) {
        res.status(404).json({ message: 'User not found' });
    } else {
        await user.destroy();
        res.json(user);
    }
});

// Update an user by ID
router.put('/:id', async (req, res) => {
    const user = await userModel.findByPk(req.params.id);
    if (!user) {
        res.status(404).json({ message: 'User not found' });
    } else {
        await user.update(req.body);
        res.json(user);
    }
});

// Get an user by username
router.get('/username/:username', async (req, res) => {
    const user = await userModel.findOne({ where: { username: req.params.username } });
    if (!user) {
        res.status(404).json({ message: 'User not found' });
    } else {
        res.json(user);
    }
});

// Get an user by email 
router.get('/email/:email', async (req, res) => {
    const user = await userModel.findOne({ where: { email: req.params.email } });
    if (!user) {
        res.status(404).json({ message: 'User not found' });
    } else {
        res.json(user);
    }
});

// Create a list
router.post('/:id/userlists', async (req, res) => {
	// TODO: Add validation for req.body
	const user = await userModel.findByPk(req.params.id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Not empty listType 
    const { listType } = req.body;
    if (!listType) {
        return res.status(404).json({ message: 'Invalid list' });
    }

    // Check if listType already exists for the user
    const existingList = await UserList.findOne({ where: { listType: listType, id_user: user.id } });
    if (existingList) {
        return res.status(400).json({ message: 'List already exists' });
    }

    // TODO: Add validation for req.body
    const newList = await UserList.create({
        ...req.body,
        id_user: user.id
    });

    res.json(newList);
});

// Get all lists for a specific user
router.get('/:userId/userlists', async (req, res) => {
	const lists = await UserList.findAll({ where: { id_user: req.params.userId } });
	res.json(lists);
});

export default (model) => {
    userModel = model;
    return router;
};