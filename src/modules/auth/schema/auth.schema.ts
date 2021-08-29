import Joi from 'joi';
import { emailSchema } from '../../../../src/shared/schemas';

const authSchema = {
  loginSchema: Joi.object({
    email: emailSchema.required().label('Email'),
    password: Joi.string().required().label('password'),
  }),
  passwordResetSchema: Joi.object({
    email: emailSchema.required().label('Email'),
    passsword: Joi.string().required().label('Phone number'),
  }),
};

export { authSchema };
