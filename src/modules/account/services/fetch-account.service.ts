import UserEntity from '../../../../src/shared/entities/user.entity';
import { accountRepositoryPagination } from '../account.repository';
import { AccountResponseDto } from '../dtos/account.dto';

const fetchUserAccounts = async (data: any): Promise<AccountResponseDto> => {
  const { role_id, country_id, page = 1, perPage = 10 } = data;
  const searchCriteria: any = [{ role_id: { contains: role_id } }, { country_id: { contains: country_id } }];

  const searchResult = await accountRepositoryPagination({
    where: { AND: searchCriteria },
    select: UserEntity.selectEmployeeDetails(),
    page,
    take: perPage,
    model: 'user',
  });
  if (searchResult.records.length === 0) {
    throw new Error('No role found');
  }
  return { accountData: searchResult, message: 'Request Successful' };
};

export { fetchUserAccounts };
