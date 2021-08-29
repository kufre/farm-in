import * as Joi from 'joi';

const passwordSchema = Joi.string().min(8).trim().label('Password');

const newPasswordSchema = Joi.string().min(8).trim().label('New password');

const confirmPasswordSchema = Joi.string().valid(Joi.ref('newPassword')).trim().label('Confirm password');

export { confirmPasswordSchema, passwordSchema, newPasswordSchema };
