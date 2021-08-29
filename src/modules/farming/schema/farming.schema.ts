import Joi from 'joi';

const farmingSchemas = Object.freeze({
  createFarming: Joi.object().keys({
    farming_name: Joi.string().required().label('farming_name'),
    farming_duration: Joi.string().required().label('farming_duration'),
  }),
  updateFarming: Joi.object().keys({
    farming_id: Joi.string().required().label('farming_id'),
    farming_name: Joi.string().required().label('farming_name'),
    farming_duration: Joi.string().required().label('farming_duration'),
  }),
  fetchFarmingById: Joi.object().keys({
    farming_id: Joi.string().required().label('farming_id'),
  }),
});

export { farmingSchemas };
