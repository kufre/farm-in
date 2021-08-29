import { Request, Response } from 'express';
import farmingService from '../../modules/farming/services';

const index = async (req: Request, res: Response) => {
  res.render('investment/index', { layout: '_layouts/default' });
};

const detail = async (req: Request, res: Response) => {
  res.render('investment/details', { layout: '_layouts/default' });
};

// backoffice Routes
const investmentAdminViewController = async (req: Request, res: Response) => {
  const { farmingData } = await farmingService.fetchFarmings(req.query);
  const locals = {
    title: 'investments',
    farmings: farmingData,
    scripts: ['<script src="/vendors/app/farming.js"></script>'],
  };
  res.render('admins/investment/index', { layout: '_layouts/backoffice', locals });
};

export default {
  index,
  detail,
  investmentAdminViewController,
};
