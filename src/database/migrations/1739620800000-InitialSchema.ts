import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialSchema1739620800000 implements MigrationInterface {
  name = 'InitialSchema1739620800000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "town" (
        "id" SERIAL NOT NULL,
        "name" character varying NOT NULL,
        CONSTRAINT "PK_town" PRIMARY KEY ("id")
      )
    `);
    await queryRunner.query(`
      CREATE TABLE "speciality" (
        "id" SERIAL NOT NULL,
        "name" character varying NOT NULL,
        CONSTRAINT "PK_speciality" PRIMARY KEY ("id")
      )
    `);
    await queryRunner.query(`
      CREATE TABLE "heroclass" (
        "id" SERIAL NOT NULL,
        "name" character varying NOT NULL,
        "townId" integer,
        CONSTRAINT "PK_heroclass" PRIMARY KEY ("id")
      )
    `);
    await queryRunner.query(`
      CREATE TABLE "hero" (
        "id" SERIAL NOT NULL,
        "name" character varying NOT NULL,
        "townId" integer,
        "classId" integer,
        "specialityId" integer,
        CONSTRAINT "PK_hero" PRIMARY KEY ("id")
      )
    `);
    await queryRunner.query(`
      CREATE TABLE "unit" (
        "id" SERIAL NOT NULL,
        "name" character varying NOT NULL,
        "level" integer NOT NULL,
        "townId" integer,
        "cost" json NOT NULL,
        "stats" json NOT NULL,
        CONSTRAINT "PK_unit" PRIMARY KEY ("id")
      )
    `);

    await queryRunner.query(`
      ALTER TABLE "heroclass"
      ADD CONSTRAINT "FK_heroclass_town"
      FOREIGN KEY ("townId") REFERENCES "town"("id") ON DELETE CASCADE
    `);
    await queryRunner.query(`
      ALTER TABLE "hero"
      ADD CONSTRAINT "FK_hero_town"
      FOREIGN KEY ("townId") REFERENCES "town"("id") ON DELETE CASCADE
    `);
    await queryRunner.query(`
      ALTER TABLE "hero"
      ADD CONSTRAINT "FK_hero_class"
      FOREIGN KEY ("classId") REFERENCES "heroclass"("id") ON DELETE CASCADE
    `);
    await queryRunner.query(`
      ALTER TABLE "hero"
      ADD CONSTRAINT "FK_hero_speciality"
      FOREIGN KEY ("specialityId") REFERENCES "speciality"("id") ON DELETE CASCADE
    `);
    await queryRunner.query(`
      ALTER TABLE "unit"
      ADD CONSTRAINT "FK_unit_town"
      FOREIGN KEY ("townId") REFERENCES "town"("id") ON DELETE CASCADE
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "unit" DROP CONSTRAINT "FK_unit_town"`);
    await queryRunner.query(`ALTER TABLE "hero" DROP CONSTRAINT "FK_hero_speciality"`);
    await queryRunner.query(`ALTER TABLE "hero" DROP CONSTRAINT "FK_hero_class"`);
    await queryRunner.query(`ALTER TABLE "hero" DROP CONSTRAINT "FK_hero_town"`);
    await queryRunner.query(`ALTER TABLE "heroclass" DROP CONSTRAINT "FK_heroclass_town"`);
    await queryRunner.query(`DROP TABLE "unit"`);
    await queryRunner.query(`DROP TABLE "hero"`);
    await queryRunner.query(`DROP TABLE "heroclass"`);
    await queryRunner.query(`DROP TABLE "speciality"`);
    await queryRunner.query(`DROP TABLE "town"`);
  }
}
