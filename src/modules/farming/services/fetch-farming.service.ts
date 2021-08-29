import { FarmingResponseDto } from '../dtos/farming.dtos';
import FarmingEntity from '../../../../src/shared/entities/farming.entity';
import { farmingRepository, farmingRepositoryPagination } from '../farming.respository';

const fetchFarmings = async (data: any): Promise<FarmingResponseDto> => {
  const { farming_id, farming_name, page = 1, perPage = 10 } = data;
  const searchCriteria: any = [{ farming_id: { contains: farming_id } }, { farming_name: { contains: farming_name } }];
  searchCriteria.push({ is_deleted: false });
  const searchResult = await farmingRepositoryPagination({
    where: { AND: searchCriteria },
    select: FarmingEntity.selectFarmingDetails(),
    page,
    take: perPage,
    model: 'farming',
  });
  if (searchResult.records.length === 0) {
    throw new Error('No Farming found');
  }
  return { farmingData: searchResult, message: 'Request Successful' };
};
const details = FarmingEntity.selectFarmingDetails();
const fetchFarming = async (farming_id: String): Promise<FarmingResponseDto> => {
  const searchCriteria: any = [{ farming_id }, { is_deleted: false }];
  const farmingResult = await farmingRepository.findFirst({
    where: { AND: searchCriteria },
    select: details,
  });
  if (!farmingResult) {
    throw new Error('No Farming  found');
  }
  return { farmingData: farmingResult, message: 'Request Successful' };
};

export { fetchFarmings, fetchFarming };
