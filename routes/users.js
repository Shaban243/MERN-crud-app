import express from 'express';
import User from '../models/user.js';
const userRouter = express.Router();


userRouter.get('/', async (req, res) => {
    console.log("dhfsldfhlsdfsd")
    const users = await User.find();
    res.json({ users });
    console.log(users);
});



userRouter.get('/id:', async (req, res) => {
    console.log(req.params.id)
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send('The user with given id is not found!');
    res.json({ user });
    console.log(user);
});



userRouter.post('/', async (req, res) => {
    const newUser = new User(req.body);
    const user = await newUser.save();
    res.json({ user });
    console.log(user);
});



userRouter.put('/id:', async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate();
    if (!updatedUser) return res.status(400).send('The user with given id was not found and not updated!');
    const { name, email, password } = req.body.params;
    res.json({ updatedUser });
    console.log(updatedUser);
});



userRouter.delete('/id:', async (req, res) => {
    const deletedUser = await User.deleteById(req.params.id);
    if (!deletedUser) return res.status(404).send('The deletedUser with given id was not found and not deleted!');
    console.log('The deletedUser was successfully deleted', deletedUser);
});


export default userRouter;