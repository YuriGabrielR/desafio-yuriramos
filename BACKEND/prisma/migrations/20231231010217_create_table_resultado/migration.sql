-- CreateEnum
CREATE TYPE "EnumBimestre" AS ENUM ('Primeiro', 'Segundo', 'Terceiro', 'Quarto');

-- CreateEnum
CREATE TYPE "EnumDisciplina" AS ENUM ('Biologia', 'Artes', 'Geografia', 'Sociologia');

-- CreateTable
CREATE TABLE "resultado" (
    "id" TEXT NOT NULL,
    "bimestre" "EnumBimestre" NOT NULL,
    "disciplina" "EnumDisciplina" NOT NULL,
    "nota" DOUBLE PRECISION NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "resultado_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "resultado_bimestre_disciplina_key" ON "resultado"("bimestre", "disciplina");
