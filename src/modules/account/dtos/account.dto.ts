export type UserRegistrationDto = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role_id: string;
  country_id: string;
};

export type VerifyUserAccount = {
  email: string;
  token: string;
};

export type AccountResponseDto = {
  accountData: object;
  message: string;
};
