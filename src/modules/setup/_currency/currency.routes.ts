import express from 'express';
import currencyController from '../../../../src/modules/setup/_currency/currency.controller';

const currencyRoutes = express.Router();

currencyRoutes.post('/', currencyController.createCurrencyAPI);
currencyRoutes.get('/', currencyController.currencyViewController);
currencyRoutes.get('/:id', currencyController.fetchCurrencyAPI);

export default currencyRoutes;
