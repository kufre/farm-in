/*
  Warnings:

  - Added the required column `season` to the `Investment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit_price` to the `Investment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Investment" ADD COLUMN     "season" TEXT NOT NULL,
ADD COLUMN     "unit_price" TEXT NOT NULL;
