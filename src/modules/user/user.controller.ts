import { Request, Response } from 'express';
const dashboard = async (req: Request, res: Response) => {
  res.render('users/dashboard', { layout: '_layouts/default' });
};
const profile = async (req: Request, res: Response) => {
  res.render('users/dashboard', { layout: '_layouts/default' });
};

export default {
  dashboard,
  profile,
};
