import express from 'express';
let userListModel;

const router = express.Router();

  // Get all lists created 
router.get('/', async (req, res) => {
	const lists = await userListModel.findAll();
	res.json(lists);
});

  // Get a specific list
router.get('/userlists/:listId', async (req, res) => {
	const list = await userListModel.findByPk(req.params.listId);
	res.json(list);
});

  // Update a list
router.put('/userlists/:listId', async (req, res) => {
	// TODO: Add validation for req.body
	const updatedList = await userListModel.update(req.body, { where: { id: req.params.listId } });
	res.json(updatedList);
});

  // Delete a list
router.delete('/userlists/:listId', async (req, res) => {
	await userListModel.destroy({ where: { id: req.params.listId } });
	res.json({ message: 'List deleted' });
});

  // TODO: Add routes for adding/removing/getting games in a list

// Get all users
router.get('/', async (req, res) => {
    const user = await userListModel.findAll();
    res.json(user);
});

// Create an user 
// Need to edit to add password hash 
router.post('/', async (req, res) => {
    const { username, email, password } = req.body; // replace with your actual required fields
    if (!username || !email || !password) { // replace with your actual required fields
        res.status(400).json({ message: 'Missing required information' });
    } else {
        const user = await userListModel.create(req.body);
        res.json(user);
    }
});

// Delete an user by ID 
router.delete('/:id', async (req, res) => {
    const user = await userListModel.findByPk(req.params.id);
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
    const user = await userListModel.findByPk(req.params.id);
    if (!user) {
        res.status(404).json({ message: 'User not found' });
    } else {
        await user.update(req.body);
        res.json(user);
    }
});

export default (model) => {
    userListModel = model;
    return router;
};