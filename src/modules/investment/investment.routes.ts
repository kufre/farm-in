import express from 'express';
import investmentController from '../../../src/modules/investment/investment.controller';

const investmentRoutes = express.Router();

investmentRoutes.get('/', investmentController.investmentAdminViewController);
investmentRoutes.get('/details/:id', investmentController.detail);
investmentRoutes.get('/details/:id', investmentController.detail);

export default investmentRoutes;
