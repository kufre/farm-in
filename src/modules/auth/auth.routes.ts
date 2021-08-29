import express from 'express';
import authController from '../../../src/modules/auth/auth.controller';

const authRoutes = express.Router();

authRoutes.post('/login', authController.userLogin);
authRoutes.get('/login', authController.loginWeb);
authRoutes.get('/register', authController.registerWeb);

export default authRoutes;
