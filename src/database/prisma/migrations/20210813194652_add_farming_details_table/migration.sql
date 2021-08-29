-- CreateTable
CREATE TABLE "FarmingDetails" (
    "detail_id" TEXT NOT NULL,
    "farming_id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_updated" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("detail_id")
);

-- AddForeignKey
ALTER TABLE "FarmingDetails" ADD FOREIGN KEY ("farming_id") REFERENCES "Farming"("farming_id") ON DELETE CASCADE ON UPDATE CASCADE;
