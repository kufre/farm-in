import { prisma, getPaginatedData } from '../../../src/shared/repositories';
const farmingRepository = prisma.farming;

const farmingRepositoryPagination = getPaginatedData;

export { farmingRepository, farmingRepositoryPagination };
