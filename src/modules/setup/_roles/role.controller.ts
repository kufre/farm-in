import { Request, Response } from 'express';
import schemaValidator from '../../../../src/shared/utils/schema.validator';
import roleSchemas from '../../../../src/modules/setup/_roles/schema';
import roleService from '../../../../src/modules/setup/_roles/services';
import HttpStatusCode from '../../../../src/shared/utils/response.formater';

const createRoleApiController = async (req: Request, res: Response) => {
  try {
    const { errors, data } = schemaValidator(roleSchemas.createRole, req.body);
    if (errors) {
      return HttpStatusCode.INVALID_REQUEST({ res, errors });
    }
    const { roleData, message } = await roleService.createRoleService(data);
    return HttpStatusCode.CREATED({ res, message, data: roleData });
  } catch (error) {
    const { message } = error;
    return HttpStatusCode.UNPROCCESSABLE_ENTITY({ res, message });
  }
};
const fetchRolesApiController = async (req: Request, res: Response) => {
  const { query } = req;
  try {
    const { roleData, message } = await roleService.fetchRolesService(query);
    return HttpStatusCode.SUCCESS({ res, message, data: roleData });
  } catch (error) {
    const { message } = error;
    return HttpStatusCode.UNPROCCESSABLE_ENTITY({ res, message });
  }
};

const roleViewController = async (req: Request, res: Response) => {
  const { roleData } = await roleService.fetchRolesService(req.query);
  const locals = {
    roles: roleData,
  };
  return res.render('admins/setups/roles/index', { layout: '_layouts/backoffice', locals });
};
export default {
  createRoleApiController,
  fetchRolesApiController,
  roleViewController,
};
