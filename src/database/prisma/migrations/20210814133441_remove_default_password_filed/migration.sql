/*
  Warnings:

  - You are about to drop the column `is_default_password` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "is_default_password",
ALTER COLUMN "is_active" SET DEFAULT false;
