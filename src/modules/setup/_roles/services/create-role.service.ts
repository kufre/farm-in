import { CreateRoleDto, RoleResponseDto } from '../../../../../src/modules/setup/_roles/dtos';
import { roleRepository } from '../../../../../src/modules/setup/_roles/role.repository';

const createRoleService = async (data: CreateRoleDto): Promise<RoleResponseDto> => {
  const { role_name } = data;
  // check for duplicate
  const checkIfExist = await roleRepository.findFirst({
    where: { role_name },
  });

  if (checkIfExist) {
    throw new Error('role already exisit');
  }
  const createdRole = await roleRepository.create({
    data: { role_name },
  });

  if (!createdRole) {
    throw new Error('Request was not successful, try again later');
  }
  return { roleData: createdRole, message: 'Request Successful' };
};

export { createRoleService };
