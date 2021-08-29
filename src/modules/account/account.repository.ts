import { prisma, getPaginatedData } from '../../../src/shared/repositories/index';
const accountRepository = prisma.user;

const accountRepositoryPagination = getPaginatedData;

export { accountRepository, accountRepositoryPagination };
