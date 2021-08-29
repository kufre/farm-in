import { accountRepository } from '../account.repository';
import { VerifyUserAccount } from '../dtos/account.dto';

const verifyUserAccount = async (data: VerifyUserAccount): Promise<{ authData: object; message: string }> => {
  const { email, token } = data;
  const isAccountExisting = await accountRepository.findFirst({
    where: {
      OR: [{ email }],
    },
  });

  if (!isAccountExisting) {
    throw new Error('User doesnot exist, try again later');
  }

  if (token != isAccountExisting.activiation_token) {
    throw new Error('Token is not valid');
  }

  const verifyAccount = await accountRepository.update({
    where: { email },
    data: {
      is_active: true,
    },
    select: {},
  });

  if (!verifyAccount) {
    throw new Error('Request was not successful, try again later');
  }

  return { authData: verifyAccount, message: 'User account was Activiated successfully' };
};

export { verifyUserAccount };
