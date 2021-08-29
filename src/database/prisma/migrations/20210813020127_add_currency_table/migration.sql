-- CreateTable
CREATE TABLE "Currency" (
    "currency_id" TEXT NOT NULL,
    "currency_type" TEXT NOT NULL,
    "currency_name" TEXT NOT NULL,
    "currency_code" TEXT NOT NULL,
    "currency_icon" TEXT NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_updated" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("currency_id")
);
