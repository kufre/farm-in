import { Express } from 'express';
import accountRoutes from '../../../src/modules/account/account.routes';
import setupRoutes from '../../../src/modules/setup/setup.routes';
import farmingRoutes from '../../../src/modules/farming/farming.routes';
import authRoutes from '../../../src/modules/auth/auth.routes';

const routes = async (app: Express): Promise<void> => {
  app.use('/api/accounts', accountRoutes);
  app.use('/api/farmings', farmingRoutes);
  app.use('/api/auth', authRoutes);
  setupRoutes(app);
};

export default routes;
