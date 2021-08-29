import Joi from 'joi';

const roleSchemas = Object.freeze({
  createRole: Joi.object().keys({
    role_name: Joi.string()
      .required()
      .pattern(/^[a-zA-Z ]+$/)
      .message('only alphabet are allow')
      .label('Role'),
  }),
  updatePaymentCategorySchema: Joi.object().keys({
    role_id: Joi.string().required().label('role id'),
    role_name: Joi.string()
      .pattern(/^[a-z]+$/)
      .required()
      .label('role name'),
  }),
});

export default roleSchemas;
