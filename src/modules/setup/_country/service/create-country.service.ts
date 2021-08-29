import { countryRepository } from '../country.repository';
import { CreateCountryDto, CountryResponseDto } from '../dtos/country.dto';

const createCurrency = async (data: CreateCountryDto): Promise<CountryResponseDto> => {
  const { country_name, country_code } = data;
  const duplicateCurrency = await countryRepository.findFirst({
    where: { AND: [{ country_name }, { country_code }] },
  });
  if (duplicateCurrency) {
    throw new Error('currency already exisit');
  }
  const addCountry = await countryRepository.create({
    data: { ...data },
  });
  if (!addCountry) {
    throw new Error('currency already exisit');
  }
  return { countryData: addCountry, message: 'Request Successful' };
};

export { createCurrency };
