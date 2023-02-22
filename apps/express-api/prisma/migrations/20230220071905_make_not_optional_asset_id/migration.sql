/*
  Warnings:

  - Made the column `assetId` on table `Value` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Value" DROP CONSTRAINT "Value_assetId_fkey";

-- AlterTable
ALTER TABLE "Value" ALTER COLUMN "assetId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Value" ADD CONSTRAINT "Value_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "Asset"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
