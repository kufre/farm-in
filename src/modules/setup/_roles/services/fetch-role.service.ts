import { RoleResponseDto } from '../../../../../src/modules/setup/_roles/dtos';
import { roleRepository, roleRepositoryPagination } from '../../../../../src/modules/setup/_roles/role.repository';
import RoleEntity from '../../../../../src/shared/entities/role.entity';

const fetchRolesService = async (data: any): Promise<RoleResponseDto> => {
  const { role_id, role_name, page = 1, perPage = 10 } = data;
  const searchCriteria: any = [{ role_id: { contains: role_id } }, { role_name: { contains: role_name } }];
  searchCriteria.push({ is_deleted: false });
  const details = RoleEntity.selectRoleDetails();
  const searchResult = await roleRepositoryPagination({
    where: { AND: searchCriteria },
    select: details,
    page,
    take: perPage,
    model: 'role',
  });
  if (searchResult.records.length === 0) {
    throw new Error('No role found');
  }
  return { roleData: searchResult, message: '' };
};

const fetchRoleService = async (role_id: string): Promise<RoleResponseDto> => {
  const result = await roleRepository.findUnique({
    where: { role_id },
  });
  if (!result) {
    throw new Error('No role found');
  }
  return { roleData: result, message: '' };
};

export { fetchRolesService, fetchRoleService };
