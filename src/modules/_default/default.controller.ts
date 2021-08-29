import { Request, Response } from 'express';

const homeController = async (req: Request, res: Response) => {
  res.render('index', { layout: '_layouts/default' });
};
const aboutController = async (req: Request, res: Response) => {
  res.render('about-us', { layout: '_layouts/default' });
};
const contactController = async (req: Request, res: Response) => {
  res.render('contact-us', { layout: '_layouts/default' });
};

const faqController = async (req: Request, res: Response) => {
  res.render('faq', { layout: '_layouts/default' });
};

const privacyController = async (req: Request, res: Response) => {
  res.render('privacy-policy', { layout: '_layouts/default' });
};

const termsController = async (req: Request, res: Response) => {
  res.render('terms-condition', { layout: '_layouts/default' });
};

export default {
  homeController,
  aboutController,
  contactController,
  termsController,
  privacyController,
  faqController,
};
