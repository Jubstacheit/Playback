import express from 'express';
let userListModel;

const router = express.Router();

  // Get all lists created 
router.get('/', async (req, res) => {
	const lists = await userListModel.findAll();
	res.json(lists);
});

  // Get a specific list
router.get('/:listId', async (req, res) => {
	const list = await userListModel.findByPk(req.params.listId);
	if (!list) {
		res.status(404).json({ message: 'List not found' });
	}
	res.json(list);
});

  // Delete a list
router.delete('/:listId', async (req, res) => {
	const list = await userListModel.destroy({ where: { id: req.params.listId } });
	// If the list doesn't exist 
	if (!list) {
		res.status(404).json({ message: 'List not found' });
	}
	res.json({ message: 'List deleted' });
});

export default (model) => {
    userListModel = model;
    return router;
};