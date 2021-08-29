import schemaValidator from '../../../src/shared/utils/schema.validator';
import { Request, Response } from 'express';
import { authSchema } from './schema/auth.schema';
import httpRespone from '../../../src/shared/utils/response.formater';
import authService from './services';
const userLogin = async (req: Request, res: Response) => {
  try {
    const { errors, data } = schemaValidator(authSchema.loginSchema, req.body);
    if (errors) {
      return httpRespone.INVALID_REQUEST({ res, errors });
    }
    const { authData, message } = await authService.signInService(data);
    if (authData?.authToken) {
      res.cookie(process.env.AUTH_NAME, authData.authToken, { path: '/' });
      delete authData.authToken;
    }
    return httpRespone.SUCCESS({ res, message, data: { authData } });
  } catch (error) {
    return httpRespone.UNPROCCESSABLE_ENTITY({ res, message: error.message });
  }
};

const loginWeb = async (req: Request, res: Response) => {
  let locals = {
    title: 'Page Title',
    description: 'Page Description',
    active: 'active',
    scripts: ['<script src="/assets/app/login.js"></script>'],
  };
  res.render('auth/login', { layout: '_layouts/default', locals });
};

const registerWeb = async (req: Request, res: Response) => {
  const locals = {
    title: 'register',
    scripts: ['<script src="/assets/app/register.js"></script>'],
  };
  res.render('auth/register', { layout: '_layouts/default', locals });
};
const resetPasswordController = async (req: Request, res: Response) => {
  res.render('auth/forget-password');
};

export default {
  userLogin,
  loginWeb,
  resetPasswordController,
  registerWeb,
};
