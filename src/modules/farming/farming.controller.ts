import { Request, Response } from 'express';
import schemaValidator from '../../../src/shared/utils/schema.validator';
import { farmingSchemas } from './schema/farming.schema';
import httpStatusCode from '../../../src/shared/utils/response.formater';
import farmingService from './services';

const createFarming = async (req: Request, res: Response) => {
  try {
    const { errors, data } = schemaValidator(farmingSchemas.createFarming, req.body);
    if (errors) {
      return httpStatusCode.INVALID_REQUEST({ res, errors });
    }
    const { farmingData, message } = await farmingService.createFarming(data);
    return httpStatusCode.CREATED({ res, data: farmingData, message });
  } catch (errors) {
    return httpStatusCode.UNPROCCESSABLE_ENTITY({ res, message: errors.message });
  }
};

const fetchFarming = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const { errors, data } = schemaValidator(farmingSchemas.fetchFarmingById, { farming_id: id });
    if (errors) {
      return httpStatusCode.INVALID_REQUEST({ res, errors });
    }
    const { farmingData, message } = await farmingService.fetchFarming(data.farming_id);
    return httpStatusCode.SUCCESS({ res, data: farmingData, message });
  } catch (errors) {
    return httpStatusCode.UNPROCCESSABLE_ENTITY({ res, message: errors.message });
  }
};

const fetchFarmings = async (req: Request, res: Response) => {
  const { query } = req;
  try {
    const { farmingData, message } = await farmingService.fetchFarmings(query);
    return httpStatusCode.SUCCESS({ res, data: farmingData, message });
  } catch (errors) {
    return httpStatusCode.UNPROCCESSABLE_ENTITY({ res, message: errors.message });
  }
};

// Admin Routes
const farmingAdminViewController = async (req: Request, res: Response) => {
  const { farmingData } = await farmingService.fetchFarmings(req.query);
  const locals = {
    title: 'farming',
    farmings: farmingData,
    scripts: ['<script src="/vendors/editor/farmingDetails.js"></script>'],
  };
  res.render('admins/farming/index', { layout: '_layouts/backoffice', locals });
};
const farmingDetailAdminViewController = async (req: Request, res: Response) => {
  const { farmingData } = await farmingService.fetchFarmings(req.query);
  const locals = {
    title: 'farming',
    farmings: farmingData,
    scripts: [
      '<script src="/vendors/app/farmingDetails.js"></script>',
      '<script src="/vendors/editor/farmingDetails.js"></script>',
    ],
  };
  res.render('admins/farming/details', { layout: '_layouts/backoffice', locals });
};
export default {
  createFarming,
  fetchFarmings,
  fetchFarming,
  farmingAdminViewController,
  farmingDetailAdminViewController,
};
