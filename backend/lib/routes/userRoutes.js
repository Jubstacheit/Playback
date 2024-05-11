import express from 'express';
let userModel;

const router = express.Router();

router.get('/', async (req, res) => {
    const user = await userModel.findAll();
    res.json(user);
});

router.post('/', async (req, res) => {
    const { username, email, password } = req.body; // replace with your actual required fields
    if (!username || !email || !password) { // replace with your actual required fields
        res.status(400).json({ message: 'Missing required information' });
    } else {
        const user = await userModel.create(req.body);
        res.json(user);
    }
});

router.delete('/:id', async (req, res) => {
    const user = await userModel.findByPk(req.params.id);
    if (!user) {
        res.status(404).json({ message: 'User not found' });
    } else {
        await user.destroy();
        res.json(user);
    }
});

export default (model) => {
    userModel = model;
    return router;
};