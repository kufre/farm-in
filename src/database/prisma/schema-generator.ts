import fs from 'fs';
import glob from 'glob';
import path from 'path';

const schemas = glob.sync(path.join(__dirname, './models/*.prisma'));
let schema = `// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}\n`;
schema += schemas.reduce((currentSchema: any, filename: any) => {
  const partialSchama = fs.readFileSync(filename).toString();
  const cleanSchema = partialSchama.split(
    '// GENERATE-PRISMA-SCHEMA-DELETE //'
  )[0];
  return `${currentSchema}\n${cleanSchema}`;
}, '');

fs.writeFileSync(path.join(__dirname, './schema.prisma'), schema);
