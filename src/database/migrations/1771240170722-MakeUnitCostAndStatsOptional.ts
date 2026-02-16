import { MigrationInterface, QueryRunner } from "typeorm";

export class MakeUnitCostAndStatsOptional1771240170722 implements MigrationInterface {
    name = 'MakeUnitCostAndStatsOptional1771240170722'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "unit" ALTER COLUMN "cost" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "unit" ALTER COLUMN "stats" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "unit" ALTER COLUMN "stats" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "unit" ALTER COLUMN "cost" SET NOT NULL`);
    }

}
