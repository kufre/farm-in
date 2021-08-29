import { currencyRepository } from '../currency.repository';
import { CurrencyResponseDto, UpdateCurrencyDto } from '../dtos/currency.dto';

const updateCurrency = async (data: UpdateCurrencyDto): Promise<CurrencyResponseDto> => {
  const { currency_id } = data;
  const result = await currencyRepository.upsert({
    where: { currency_id },
    create: { ...data },
    update: { ...data },
  });
  console.log(result);
  if (!result) {
    throw new Error('No Currency found');
  }
  return { currencyData: result, message: 'Request Successful' };
};

export { updateCurrency };
