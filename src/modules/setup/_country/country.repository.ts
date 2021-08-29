import { prisma, getPaginatedData } from '../../../../src/shared/repositories';
const countryRepository = prisma.country;

const countryRepositoryPagination = getPaginatedData;

export { countryRepository, countryRepositoryPagination };
