import Joi from 'joi';
import { emailSchema } from '../../../../src/shared/schemas';

const accountSchema = {
  createAccountSchema: Joi.object({
    first_name: Joi.string().required().trim().label('Firstname'),
    last_name: Joi.string().required().trim().label('Lastname'),
    email: emailSchema.required().label('Email'),
    password: Joi.string().required().label('Password'),
    role_id: Joi.string().required().trim().label('Role'),
    country_id: Joi.string().required().trim().label('Country'),
  }),
  accountVerification: Joi.object({
    email: emailSchema.required().label('email'),
    token: Joi.string().required().trim().label('token'),
  }),
};

export { accountSchema };
