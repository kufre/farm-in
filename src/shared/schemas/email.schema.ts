import * as Joi from 'joi';

const emailSchema = Joi.string().email().trim();

export { emailSchema };
