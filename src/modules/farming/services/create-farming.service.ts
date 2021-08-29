import { farmingRepository } from '../farming.respository';
import { CreateFarmingDto, FarmingResponseDto } from '../dtos/farming.dtos';
import FarmingEntity from '../../../../src/shared/entities/farming.entity';

const createFarming = async (data: CreateFarmingDto): Promise<FarmingResponseDto> => {
  const { farming_name } = data;
  const isFarmingExist = await farmingRepository.findFirst({
    where: { farming_name },
  });
  if (isFarmingExist) {
    throw new Error('Farming Already Exist, Please Try Again');
  }

  const details = FarmingEntity.removeFields(FarmingEntity.selectFarmingDetails());
  const createFarming = await farmingRepository.create({
    data: { ...data },
    select: details,
  });
  if (!createFarming) {
    throw new Error('Request Error, Please Try Again');
  }
  return { farmingData: createFarming, message: 'Request Successful' };
};

export { createFarming };
