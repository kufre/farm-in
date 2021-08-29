import { RoleResponseDto, UpdateRoleDto } from '../../../../../src/modules/setup/_roles/dtos';
import { roleRepository } from '../../../../../src/modules/setup/_roles/role.repository';
import RoleEntity from '../../../../../src/shared/entities/role.entity';

const updateRoleService = async (data: UpdateRoleDto): Promise<RoleResponseDto> => {
  const { role_id } = data;
  // Update the role id
  const details = RoleEntity.selectRoleDetails();
  const updateRole = await roleRepository.update({
    where: { role_id },
    data: { ...data },
    select: details,
  });
  // confirm the update
  if (!updateRole) {
    throw new Error('role update was not successful, try again');
  }

  return { roleData: updateRole, message: '' };
};

export { updateRoleService };
