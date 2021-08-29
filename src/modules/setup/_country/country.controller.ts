import { Request, Response } from 'express';
import HttpStatusCode from '../../../../src/shared/utils/response.formater';
import schemaValidator from '../../../../src/shared/utils/schema.validator';
import { countrySchemas } from '../_country/schema/country.schema';
import countryService from './service';

const createCountryAPI = async (req: Request, res: Response) => {
  try {
    const { errors, data } = await schemaValidator(countrySchemas.createCountry, req.body);
    if (errors) {
      return HttpStatusCode.INVALID_REQUEST({ res, errors });
    }
    const { countryData, message } = await countryService.createCurrency(data);
    return HttpStatusCode.CREATED({ res, data: countryData, message });
  } catch (errors) {
    return HttpStatusCode.UNPROCCESSABLE_ENTITY({ res, message: errors.message });
  }
};
const fetchCountriesAPI = async (req: Request, res: Response) => {
  const { query } = req;
  try {
    const { countryData, message } = await countryService.fetchCurrenciesService(query);
    return HttpStatusCode.SUCCESS({ res, data: countryData, message });
  } catch (errors) {
    return HttpStatusCode.UNPROCCESSABLE_ENTITY({ res, message: errors.message });
  }
};
const fetchCountryAPI = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const { errors, data } = await schemaValidator(countrySchemas.fetchCountryById, { country_id: id });
    if (errors) {
      return HttpStatusCode.INVALID_REQUEST({ res, errors });
    }
    const { countryData, message } = await countryService.fetchCurrencyService(data.country_id);
    return HttpStatusCode.SUCCESS({ res, data: countryData, message });
  } catch (errors) {
    return HttpStatusCode.UNPROCCESSABLE_ENTITY({ res, message: errors.message });
  }
};

const countryViewController = async (req: Request, res: Response) => {
  const locals = {};
  return res.render('admins/setups/country/index', { layout: '_layouts/backoffice', locals });
};

export default {
  createCountryAPI,
  fetchCountriesAPI,
  fetchCountryAPI,
  countryViewController,
};
