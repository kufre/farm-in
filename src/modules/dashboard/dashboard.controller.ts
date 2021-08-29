import { Request, Response } from 'express';

const index = async (req: Request, res: Response) => {
  const locals = {
    title: 'dashboard',
    scripts: ['<script src="/vendors/editor/farmingDetails.js"></script>'],
  };
  return res.render('admins/dashboard', { layout: '_layouts/backoffice', locals });
};

export default {
  index,
};
