-- CreateTable
CREATE TABLE "Farming" (
    "farming_id" TEXT NOT NULL,
    "farming_name" TEXT NOT NULL,
    "farming_duration" TEXT NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_updated" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("farming_id")
);
