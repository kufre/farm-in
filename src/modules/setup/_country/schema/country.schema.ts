import Joi from 'joi';

const countrySchemas = Object.freeze({
  createCountry: Joi.object().keys({
    country_name: Joi.string().required().label('country_name'),
    country_code: Joi.string().required().label('country_code'),
  }),
  updateCountry: Joi.object().keys({
    country_id: Joi.string().required().label('country_id'),
    country_name: Joi.string().required().label('country_name'),
    country_code: Joi.string().required().label('country_code'),
  }),
  fetchCountryById: Joi.object().keys({
    country_id: Joi.string().required().label('country_id'),
  }),
  fetchCountry: Joi.object().keys({
    country_id: Joi.string().required().label('country_id'),
    country_name: Joi.string().required().label('country_name'),
    country_code: Joi.string().required().label('country_code'),
  }),
});

export { countrySchemas };
