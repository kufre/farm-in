import Joi from 'joi';

const currencySchemas = Object.freeze({
  createCurrency: Joi.object().keys({
    currency_type: Joi.string().required().label('currency_type'),
    currency_name: Joi.string().required().label('currency_name'),
    currency_code: Joi.string().required().label('currency_code'),
    currency_icon: Joi.string().required().label('currency_icon'),
  }),
  updateCurrency: Joi.object().keys({
    currency_id: Joi.string().required().label('currency_id'),
    currency_type: Joi.string().required().label('currency_type'),
    currency_name: Joi.string().required().label('currency_name'),
    currency_code: Joi.string().required().label('currency_code'),
    currency_icon: Joi.string().required().label('currency_icon'),
  }),
  fetchCurrencyById: Joi.object().keys({
    currency_id: Joi.string().required().label('currency_id'),
  }),
  fetchCurrency: Joi.object().keys({
    currency_id: Joi.string().required().label('currency_id'),
    currency_type: Joi.string().required().label('currency_type'),
  }),
});

export { currencySchemas };
