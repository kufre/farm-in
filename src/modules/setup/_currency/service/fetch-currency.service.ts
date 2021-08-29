import CurrencyEntity from '../../../../../src/shared/entities/currency.entity';
import { currencyRepository, currencyRepositoryPagination } from '../currency.repository';
import { CurrencyResponseDto } from '../dtos/currency.dto';

const fetchCurrenciesService = async (data: any): Promise<CurrencyResponseDto> => {
  const { currency_id, currency_name, currency_type, page = 1, perPage = 10 } = data;
  const searchCriteria: any = [
    { currency_id: { contains: currency_id } },
    { currency_name: { contains: currency_name } },
    { currency_type: { contains: currency_type } },
  ];
  searchCriteria.push({ is_deleted: false });
  const searchResult = await currencyRepositoryPagination({
    where: { AND: searchCriteria },
    select: CurrencyEntity.selectCurrencyDetails(),
    page,
    take: perPage,
    model: 'currency',
  });
  if (searchResult.records.length === 0) {
    throw new Error('No Currency found');
  }
  return { currencyData: searchResult, message: '' };
};

const fetchCurrencyService = async (currency_id: string): Promise<CurrencyResponseDto> => {
  const result = await currencyRepository.findFirst({
    where: { AND: [{ currency_id }, { is_deleted: false }] },
  });
  if (!result) {
    throw new Error('No Currency found');
  }
  return { currencyData: result, message: '' };
};

export { fetchCurrenciesService, fetchCurrencyService };
