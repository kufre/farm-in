import express from 'express';
import defaultController from '../../../src/modules/_default/default.controller';

const defaultRoutes = express.Router();

defaultRoutes.get('/', defaultController.homeController);
defaultRoutes.get('/contact', defaultController.contactController);
defaultRoutes.get('/about-us', defaultController.aboutController);
defaultRoutes.get('/terms-conditions', defaultController.contactController);
defaultRoutes.get('/privacy-policy', defaultController.privacyController);
defaultRoutes.get('/faq', defaultController.faqController);

export default defaultRoutes;
