import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({ errorFormat: 'minimal' });
// const prisma = new PrismaClient({ errorFormat: 'pretty' });

/** *
 * take {number} Number of records to return
 * page {number} Current page number
 * where {Object} Filtering conditions
 * model {String} Database model
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const getPaginatedData = async ({ select, take = 10, page, where, model }) => {
  const totalRecord = await prisma[model].count();
  const records = await prisma[model].findMany({
    select,
    take,
    where,
    skip: take * (page - 1),
  });

  const total = Math.ceil(totalRecord / take) === 0 ? 1 : Math.ceil(totalRecord / take);
  const next = page + 1 <= total ? page + 1 : 0;
  const previous = page - 1 !== 0 ? page - 1 : 0;

  return {
    records,
    meta: {
      totalRecord,
      totalPage: total,
      perpage: take,
      next,
      previous,
    },
  };
};

export { prisma, getPaginatedData };
