import CountryEntity from '../../../../../src/shared/entities/country.entity';
import { countryRepository, countryRepositoryPagination } from '../country.repository';
import { CountryResponseDto } from '../dtos/country.dto';

const fetchCurrenciesService = async (data: any): Promise<CountryResponseDto> => {
  const { country_id, country_name, page = 1, perPage = 10 } = data;
  const searchCriteria: any = [{ country_id: { contains: country_id } }, { country_name: { contains: country_name } }];
  searchCriteria.push({ is_deleted: false });
  const searchResult = await countryRepositoryPagination({
    where: { AND: searchCriteria },
    select: CountryEntity.selectCountryDetails(),
    page,
    take: perPage,
    model: 'country',
  });
  if (searchResult.records.length === 0) {
    throw new Error('No Country found');
  }
  return { countryData: searchResult, message: '' };
};

const fetchCurrencyService = async (country_id: string): Promise<CountryResponseDto> => {
  const result = await countryRepository.findFirst({
    where: { AND: [{ country_id }, { is_deleted: false }] },
  });
  if (!result) {
    throw new Error('No Country found');
  }
  return { countryData: result, message: '' };
};

export { fetchCurrenciesService, fetchCurrencyService };
