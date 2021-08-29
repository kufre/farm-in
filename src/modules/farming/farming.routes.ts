import express from 'express';
import farmingController from '../../../src/modules/farming/farming.controller';

const currencyRoutes = express.Router();

currencyRoutes.post('/', farmingController.createFarming);
currencyRoutes.get('/', farmingController.farmingAdminViewController);
currencyRoutes.get('/:id', farmingController.fetchFarming);
export default currencyRoutes;
