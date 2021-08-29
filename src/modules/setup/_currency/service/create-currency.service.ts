import { currencyRepository } from '../currency.repository';
import { CreateCurrencyDto, CurrencyResponseDto } from '../dtos/currency.dto';

const createCurrency = async (data: CreateCurrencyDto): Promise<CurrencyResponseDto> => {
  const { currency_type, currency_name } = data;
  const duplicateCurrency = await currencyRepository.findFirst({
    where: { AND: [{ currency_type }, { currency_name }] },
  });
  if (duplicateCurrency) {
    throw new Error('currency already exisit');
  }
  const addCurrency = await currencyRepository.create({
    data: { ...data },
  });
  if (!addCurrency) {
    throw new Error('currency already exisit');
  }
  return { currencyData: addCurrency, message: 'Request Successful' };
};

export { createCurrency };
