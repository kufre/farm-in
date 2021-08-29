import express from 'express';
import accountController from '../../../src/modules/account/account.controller';

const accountRoutes = express.Router();

accountRoutes.post('/register', accountController.createUserAccount);
accountRoutes.get('/verify', accountController.verifyUserAccount);
accountRoutes.get('/users', accountController.fetchUserAccounts);

export default accountRoutes;
