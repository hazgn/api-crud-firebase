import express from 'express';
import userControllers from '../controllers/users';

const userRouter = express.Router();

userRouter.post('/', userControllers.createUser);
userRouter.get('/', userControllers.listUsers);
userRouter.get('/find/:id', userControllers.getUserById);
userRouter.patch('/update/:id', userControllers.patchUsersBYID);
userRouter.delete('/delete/:id', userControllers.deleteUserByID);

export default userRouter;