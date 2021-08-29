import express from 'express';
import countryController from '../../../../src/modules/setup/_country/country.controller';

const currencyRoutes = express.Router();

currencyRoutes.post('/', countryController.createCountryAPI);
currencyRoutes.get('/', countryController.countryViewController);
currencyRoutes.get('/:id', countryController.fetchCountryAPI);

export default currencyRoutes;
