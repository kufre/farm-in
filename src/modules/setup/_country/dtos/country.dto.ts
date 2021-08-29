export type CreateCountryDto = {
  country_name: string;
  country_code: string;
};

export type FetchCountryDto = {
  country_id: string;
  country_name: string;
  country_code: string;
};

export type CountryResponseDto = {
  countryData: object;
  message: string;
};
