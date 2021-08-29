import { prisma, getPaginatedData } from '../../../../src/shared/repositories';
const roleRepository = prisma.role;

const roleRepositoryPagination = getPaginatedData;

export { roleRepository, roleRepositoryPagination };
