-- DropForeignKey
ALTER TABLE "Value" DROP CONSTRAINT "Value_userId_fkey";

-- AlterTable
ALTER TABLE "Value" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Value" ADD CONSTRAINT "Value_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
