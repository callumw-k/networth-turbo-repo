/*
  Warnings:

  - Made the column `userId` on table `Value` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Value" DROP CONSTRAINT "Value_userId_fkey";

-- AlterTable
ALTER TABLE "Value" ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Value" ADD CONSTRAINT "Value_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
