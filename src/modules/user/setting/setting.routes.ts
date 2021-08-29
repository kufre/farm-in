import express from 'express';
import userController from '../../../../src/modules/user/user.controller';

const userRoutes = express.Router();

userRoutes.get('/dashboard', userController.dashboard);

export default userRoutes;
