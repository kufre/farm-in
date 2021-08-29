/*
  Warnings:

  - You are about to drop the `FarmingDetails` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FarmingDetails" DROP CONSTRAINT "FarmingDetails_farming_id_fkey";

-- DropTable
DROP TABLE "FarmingDetails";

-- CreateTable
CREATE TABLE "Investment" (
    "investment_id" TEXT NOT NULL,
    "farming_id" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "unit_price_string" TEXT NOT NULL,
    "unit_avaliable" INTEGER NOT NULL,
    "percentage" INTEGER NOT NULL,
    "Investors" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "maturity_date" TIMESTAMP(3) NOT NULL,
    "is_Sold_out" BOOLEAN NOT NULL DEFAULT false,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_updated" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("investment_id")
);

-- AddForeignKey
ALTER TABLE "Investment" ADD FOREIGN KEY ("farming_id") REFERENCES "Farming"("farming_id") ON DELETE CASCADE ON UPDATE CASCADE;
