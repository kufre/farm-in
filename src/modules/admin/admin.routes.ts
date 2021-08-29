import { Express } from 'express';
import roleRouter from '../../../src/modules/setup/_roles/role.routes';
import countryRoutes from '../../../src/modules/setup/_country/country.routes';
import currencyRoutes from '../../../src/modules/setup/_currency/currency.routes';
import dashboardRoutes from '../dashboard/dashboard.routes';
import investmentRoutes from '../investment/investment.routes';
import farmingRoutes from '../farming/farming.routes';

const adminRoutes = async (app: Express): Promise<void> => {
  app.use('/admin', dashboardRoutes);
  app.use('/admin/farming', farmingRoutes);
  app.use('/admin/investments', investmentRoutes);
  app.use('/admin/setups/users', investmentRoutes);
  app.use('/admin/setups/roles', roleRouter);
  app.use('/admin/setups/countries', countryRoutes);
  app.use('/admin/setups/currencies', currencyRoutes);
  app.use('/admin/wallets', roleRouter);
};

export default adminRoutes;
