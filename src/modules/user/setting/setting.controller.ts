import { Request, Response } from 'express';
const settings = async (req: Request, res: Response) => {
  res.render('users/setting', { layout: '_layouts/default' });
};

export default {
  settings,
};
