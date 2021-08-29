import HttpStatusCode from '../../../src/shared/utils/response.formater';
import schemaValidator from '../../../src/shared/utils/schema.validator';
import { Request, Response } from 'express';
import { accountSchema } from './schema/account.schema';
import accountService from '../../modules/account/services';
import emailService from '../../../src/shared/services/mail';
import { hashPassword } from '../../../src/shared/utils/password.generator';
const createUserAccount = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const { errors, data } = schemaValidator(accountSchema.createAccountSchema, {
      ...body,
    });
    if (errors) {
      return HttpStatusCode.INVALID_REQUEST({ res, errors });
    }
    data.password = hashPassword(data.password);
    const { authData, message } = await accountService.userRegistration(data);
    await emailService.sendVericationMail(authData);
    return HttpStatusCode.CREATED({ res, message, data: authData });
  } catch (error) {
    return HttpStatusCode.UNPROCCESSABLE_ENTITY({ res, message: error.message });
  }
};

const verifyUserAccount = async (req: Request, res: Response) => {
  try {
    const { query } = req;
    const { errors, data } = schemaValidator(accountSchema.accountVerification, query);
    if (errors) {
      return HttpStatusCode.INVALID_REQUEST({ res, errors });
    }
    const { authData } = await accountService.verifyUserAccount(data);
    res.send(authData);
  } catch (error) {
    return HttpStatusCode.UNPROCCESSABLE_ENTITY({ res, message: error.message });
  }
};

const fetchUserAccounts = async (req: Request, res: Response) => {
  const { query } = req;
  try {
    const { accountData, message } = await accountService.fetchUserAccounts(query);
    return HttpStatusCode.SUCCESS({ res, data: accountData, message });
  } catch (error) {
    return HttpStatusCode.UNPROCCESSABLE_ENTITY({ res, message: error.message });
  }
};

export default { createUserAccount, verifyUserAccount, fetchUserAccounts };
