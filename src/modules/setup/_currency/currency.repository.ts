import { prisma, getPaginatedData } from '../../../../src/shared/repositories';
const currencyRepository = prisma.currency;

const currencyRepositoryPagination = getPaginatedData;

export { currencyRepository, currencyRepositoryPagination };
