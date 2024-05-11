import express from 'express';
let userModel;

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
    const user = await userModel.findAll();
    res.json(user);
});

// Create an user 
// Need to edit to add password hash 
router.post('/', async (req, res) => {
    const { username, email, password } = req.body; // replace with your actual required fields
    if (!username || !email || !password) { // replace with your actual required fields
        res.status(400).json({ message: 'Missing required information' });
    } else {
        const user = await userModel.create(req.body);
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
// Need to edit to add password hash
router.put('/:id', async (req, res) => {
    const user = await userModel.findByPk(req.params.id);
    if (!user) {
        res.status(404).json({ message: 'User not found' });
    } else {
        await user.update(req.body);
        res.json(user);
    }
});

export default (model) => {
    userModel = model;
    return router;
};