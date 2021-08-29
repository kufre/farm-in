/*
  Warnings:

  - The primary key for the `RolePermission` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `role_permission_id` on the `RolePermission` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[activiation_token]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `RolePermission` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `country_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `role_id` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "RolePermission" DROP CONSTRAINT "RolePermission_pkey",
DROP COLUMN "role_permission_id",
ADD COLUMN     "id" TEXT NOT NULL,
ADD PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "activiation_token" TEXT,
ADD COLUMN     "country_id" TEXT NOT NULL,
ALTER COLUMN "role_id" SET NOT NULL;

-- CreateTable
CREATE TABLE "Country" (
    "country_id" TEXT NOT NULL,
    "country_name" TEXT NOT NULL,
    "country_code" TEXT NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_updated" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("country_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.activiation_token_unique" ON "User"("activiation_token");

-- AddForeignKey
ALTER TABLE "User" ADD FOREIGN KEY ("role_id") REFERENCES "Role"("role_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD FOREIGN KEY ("country_id") REFERENCES "Country"("country_id") ON DELETE CASCADE ON UPDATE CASCADE;
