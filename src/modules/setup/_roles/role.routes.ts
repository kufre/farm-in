import express from 'express';
import roleController from '../../../../src/modules/setup/_roles/role.controller';

const roleRoutes = express.Router();

roleRoutes.post('/', roleController.createRoleApiController);
roleRoutes.get('/', roleController.roleViewController);

export default roleRoutes;
