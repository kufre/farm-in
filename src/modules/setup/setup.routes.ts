import { Express } from 'express';
import roleRouter from '../../../src/modules/setup/_roles/role.routes';
import currencyRouter from '../../../src/modules/setup/_currency/currency.routes';
import countryRouter from '../../../src/modules/setup/_country/country.routes';

const setupRoutes = async (app: Express): Promise<void> => {
  app.use('/api/setups/roles', roleRouter);
  app.use('/api/setups/currencies', currencyRouter);
  app.use('/api/setups/countries', countryRouter);
  app.use('/setups/countries', countryRouter);
};

export default setupRoutes;
