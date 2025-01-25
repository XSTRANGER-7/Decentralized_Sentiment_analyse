/*
  Warnings:

  - Added the required column `size` to the `Machine` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Machine" ADD COLUMN     "size" INTEGER NOT NULL;
