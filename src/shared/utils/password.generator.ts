import bcrypt from 'bcrypt';

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

const hashPassword = password => {
  return bcrypt.hashSync(password, salt);
};

const validatePassword = (password, hash): boolean => {
  return bcrypt.compareSync(password, hash);
};

export { hashPassword, validatePassword };
