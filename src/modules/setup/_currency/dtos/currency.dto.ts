export type CreateCurrencyDto = {
  currency_type: string;
  currency_name: string;
  currency_code: string;
  currency_icon: string;
};

export type FetchCurrencyDto = {
  currency_id: string;
  currency_type: string;
  currency_name: string;
  currency_code: string;
  currency_icon: string;
};

export type UpdateCurrencyDto = {
  currency_id: string;
  currency_type: string;
  currency_name: string;
  currency_code: string;
  currency_icon: string;
};

export type CurrencyResponseDto = {
  currencyData: object;
  message: string;
};
