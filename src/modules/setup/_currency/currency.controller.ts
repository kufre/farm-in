import { Request, Response } from 'express';
import HttpStatusCode from '../../../../src/shared/utils/response.formater';
import schemaValidator from '../../../../src/shared/utils/schema.validator';
import { countrySchemas } from '../_country/schema/country.schema';
import currencyService from './service';
const createCurrencyAPI = async (req: Request, res: Response) => {
  try {
    const { errors, data } = await schemaValidator(countrySchemas.createCountry, req.body);
    if (errors) {
      return HttpStatusCode.INVALID_REQUEST({ res, errors });
    }
    const { currencyData, message } = await currencyService.createCurrency(data);
    return HttpStatusCode.CREATED({ res, data: currencyData, message });
  } catch (errors) {
    return HttpStatusCode.UNPROCCESSABLE_ENTITY({ res, message: errors.message });
  }
};
const fetchCurrenciesAPI = async (req: Request, res: Response) => {
  const { query } = req;
  try {
    const { currencyData, message } = await currencyService.fetchCurrenciesService(query);
    return HttpStatusCode.SUCCESS({ res, data: currencyData, message });
  } catch (errors) {
    return HttpStatusCode.UNPROCCESSABLE_ENTITY({ res, message: errors.message });
  }
};
const fetchCurrencyAPI = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const { errors, data } = await schemaValidator(countrySchemas.fetchCountryById, { currency_id: id });
    if (errors) {
      return HttpStatusCode.INVALID_REQUEST({ res, errors });
    }
    const { currencyData, message } = await currencyService.fetchCurrencyService(data.currency_id);
    return HttpStatusCode.SUCCESS({ res, data: currencyData, message });
  } catch (errors) {
    return HttpStatusCode.UNPROCCESSABLE_ENTITY({ res, message: errors.message });
  }
};

const currencyViewController = async (req: Request, res: Response) => {
  const locals = {};
  return res.render('admins/setups/currency/index', { layout: '_layouts/backoffice', locals });
};

export default {
  createCurrencyAPI,
  fetchCurrenciesAPI,
  fetchCurrencyAPI,
  currencyViewController,
};
