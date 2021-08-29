export type LoginInDto = {
  email: string;
  password: string;
};

export type ResetPasswordDto = {
  token: string;
  newPassword: string;
};

export type ForgotPasswordDto = {
  email: string;
};

export type ChangePasswordDto = {
  id: string;
  oldPassword: string;
  newPassword: string;
};

export type AuthResponseDto = {
  authData: object | any;
  message: string;
};
