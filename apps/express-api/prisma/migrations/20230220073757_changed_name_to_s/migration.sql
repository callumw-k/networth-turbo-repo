-- DropForeignKey
ALTER TABLE "Value" DROP CONSTRAINT "Value_assetId_fkey";

-- AlterTable
ALTER TABLE "Value" ALTER COLUMN "assetId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Value" ADD CONSTRAINT "Value_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "Asset"("id") ON DELETE SET NULL ON UPDATE CASCADE;
