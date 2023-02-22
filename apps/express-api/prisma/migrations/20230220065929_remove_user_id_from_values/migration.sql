/*
  Warnings:

  - You are about to drop the column `userId` on the `Value` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Value" DROP CONSTRAINT "Value_userId_fkey";

-- AlterTable
ALTER TABLE "Value" DROP COLUMN "userId";
