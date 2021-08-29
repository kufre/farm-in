import dayjs from 'dayjs';
import { AuthResponseDto, LoginInDto } from '../dtos/auth.dto';
import { encrypt } from '../../../shared/utils/encryption';
import UserEntity from '../../../shared/entities/user.entity';
import { authRepository } from '../auth.respository';
import { validatePassword } from '../../../shared/utils/password.generator';

const signInService = async (data: LoginInDto): Promise<AuthResponseDto> => {
  const { email } = data;

  const account = await authRepository.findUnique({
    where: { email },
  });

  if (!account) {
    throw new Error('Incorrect email or password');
  }
  // check account status
  if (!accountIsBlock) {
    throw new Error('Account is block');
  }
  const isPasswordValid = await validatePassword(data.password, account.password);
  if (!isPasswordValid) {
    await authRepository.update({
      where: { email: account.email },
      data: { login_attempt: account.login_attempt + 1 },
    });
    throw new Error('Incorrect email or password');
  }
  const fields = { password: true, ...UserEntity.selectEmployeeDetails() };
  const accountDetails = await authRepository.update({
    select: fields,
    where: { email: account.email },
    data: {
      last_login: dayjs().format(),
      login_attempt: 0,
    },
  });

  const accountData = UserEntity.removeFields(accountDetails);
  const authToken = await encrypt(JSON.stringify(accountDetails));

  return { message: 'Login successful', authData: { ...accountData, authToken } };
};

const accountIsBlock = (account: any) => {
  if (account.login_attempt > 3) {
    return false;
  }
  return true;
};

export { signInService };
